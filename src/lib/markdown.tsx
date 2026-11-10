import type { ReactNode } from "react";

/*
 * Small Markdown renderer for lecture notes. No dependencies, no raw HTML.
 * Supports: headings, paragraphs, bullet/numbered lists, blockquotes, fenced code,
 * tables, horizontal rules, images, and inline code / bold / italic / links.
 */

const INLINE =
  /(`[^`]+`)|(!\[([^\]]*)\]\(([^)\s]+)\))|(\[([^\]]+)\]\(([^)\s]+)\))|(\*\*([^*]+)\*\*)|(\*([^*\s][^*]*)\*)|(_([^_\s][^_]*)_)/;

function renderInline(text: string, key = "i"): ReactNode[] {
  const nodes: ReactNode[] = [];
  let rest = text;
  let index = 0;
  while (rest.length) {
    const match = INLINE.exec(rest);
    if (!match) {
      nodes.push(rest);
      break;
    }
    if (match.index > 0) nodes.push(rest.slice(0, match.index));
    const k = `${key}-${index++}`;
    if (match[1]) {
      nodes.push(<code key={k}>{match[1].slice(1, -1)}</code>);
    } else if (match[2]) {
      // eslint-disable-next-line @next/next/no-img-element
      nodes.push(<img key={k} src={match[4]} alt={match[3]} loading="lazy" />);
    } else if (match[5]) {
      const href = match[7];
      const external = /^https?:\/\//.test(href);
      nodes.push(
        <a key={k} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {renderInline(match[6], k)}
        </a>,
      );
    } else if (match[8]) {
      nodes.push(<strong key={k}>{renderInline(match[9], k)}</strong>);
    } else if (match[10]) {
      nodes.push(<em key={k}>{renderInline(match[11], k)}</em>);
    } else if (match[12]) {
      nodes.push(<em key={k}>{renderInline(match[13], k)}</em>);
    }
    rest = rest.slice(match.index + match[0].length);
  }
  return nodes;
}

const isFence = (line: string) => /^\s*```/.test(line);
const isHeading = (line: string) => /^#{1,4}\s+/.test(line);
const isRule = (line: string) => /^\s*([-*_])(\s*\1){2,}\s*$/.test(line);
const isQuote = (line: string) => /^\s*>/.test(line);
const isBullet = (line: string) => /^\s*[-*+]\s+/.test(line);
const isNumbered = (line: string) => /^\s*\d+[.)]\s+/.test(line);
const isTableRow = (line: string) => /^\s*\|.*\|\s*$/.test(line);
const isTableDivider = (line: string) => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/.test(line);

function splitRow(line: string) {
  return line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
}

function startsBlock(lines: string[], i: number) {
  const line = lines[i];
  return (
    isFence(line) ||
    isHeading(line) ||
    isRule(line) ||
    isQuote(line) ||
    isBullet(line) ||
    isNumbered(line) ||
    (isTableRow(line) && i + 1 < lines.length && isTableDivider(lines[i + 1]))
  );
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[`*_[\]()]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

export function renderMarkdown(source: string): ReactNode[] {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const key = `b${blocks.length}`;

    if (!line.trim()) {
      i++;
      continue;
    }

    if (isFence(line)) {
      const lang = line.trim().slice(3).trim();
      const code: string[] = [];
      i++;
      while (i < lines.length && !isFence(lines[i])) code.push(lines[i++]);
      i++; // closing fence
      blocks.push(
        <pre key={key} data-lang={lang || undefined}>
          <code>{code.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    const heading = /^(#{1,4})\s+(.*)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = slugify(text);
      const content = renderInline(text, key);
      blocks.push(
        level <= 2 ? <h2 key={key} id={id}>{content}</h2> : level === 3 ? <h3 key={key} id={id}>{content}</h3> : <h4 key={key} id={id}>{content}</h4>,
      );
      i++;
      continue;
    }

    if (isRule(line)) {
      blocks.push(<hr key={key} />);
      i++;
      continue;
    }

    if (isQuote(line)) {
      const quote: string[] = [];
      while (i < lines.length && isQuote(lines[i])) quote.push(lines[i++].replace(/^\s*>\s?/, ""));
      blocks.push(<blockquote key={key}>{renderMarkdown(quote.join("\n"))}</blockquote>);
      continue;
    }

    if (isBullet(line) || isNumbered(line)) {
      const ordered = isNumbered(line);
      const matches = ordered ? isNumbered : isBullet;
      const items: string[] = [];
      while (i < lines.length) {
        const current = lines[i];
        if (matches(current)) {
          items.push(current.replace(ordered ? /^\s*\d+[.)]\s+/ : /^\s*[-*+]\s+/, ""));
          i++;
        } else if (current.trim() && /^\s{2,}/.test(current) && items.length) {
          items[items.length - 1] += " " + current.trim(); // continuation line
          i++;
        } else {
          break;
        }
      }
      const children = items.map((item, n) => <li key={n}>{renderInline(item, `${key}-${n}`)}</li>);
      blocks.push(ordered ? <ol key={key}>{children}</ol> : <ul key={key}>{children}</ul>);
      continue;
    }

    if (isTableRow(line) && i + 1 < lines.length && isTableDivider(lines[i + 1])) {
      const header = splitRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) rows.push(splitRow(lines[i++]));
      blocks.push(
        <div key={key} className="yc-table-wrap">
          <table>
            <thead>
              <tr>{header.map((cell, n) => <th key={n}>{renderInline(cell, `${key}-h${n}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, r) => (
                <tr key={r}>{row.map((cell, n) => <td key={n}>{renderInline(cell, `${key}-${r}-${n}`)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const paragraph: string[] = [];
    while (i < lines.length && lines[i].trim() && !(paragraph.length && startsBlock(lines, i))) {
      paragraph.push(lines[i++].trim());
    }
    blocks.push(<p key={key}>{renderInline(paragraph.join(" "), key)}</p>);
  }

  return blocks;
}
