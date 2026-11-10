import fs from "node:fs";
import path from "node:path";

export type NoteMeta = {
  course: string;
  slug: string;
  title: string;
  lecture?: number;
  date?: string;
  summary?: string;
  draft: boolean;
};

export type Note = NoteMeta & { body: string };

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

type Frontmatter = Record<string, string | number | boolean>;

function parseValue(raw: string): string | number | boolean {
  const value = raw.trim().replace(/^["']|["']$/g, "");
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  return value;
}

function parseFrontmatter(source: string): { data: Frontmatter; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) return { data: {}, body: source };
  const data: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    if (key) data[key] = parseValue(line.slice(separator + 1));
  }
  return { data, body: source.slice(match[0].length) };
}

function readNote(course: string, file: string): Note {
  const source = fs.readFileSync(path.join(NOTES_DIR, course, file), "utf8");
  const { data, body } = parseFrontmatter(source);
  const slug = file.replace(/\.md$/, "");
  return {
    course,
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    lecture: typeof data.lecture === "number" ? data.lecture : undefined,
    date: data.date !== undefined ? String(data.date) : undefined,
    summary: typeof data.summary === "string" ? data.summary : undefined,
    draft: data.draft === true,
    body,
  };
}

/** Published notes for a course, ordered by lecture number. Files starting with "_" are ignored. */
export function getNotes(course: string): Note[] {
  const dir = path.join(NOTES_DIR, course);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => readNote(course, file))
    .filter((note) => !note.draft)
    .sort((a, b) => (a.lecture ?? 999) - (b.lecture ?? 999) || a.slug.localeCompare(b.slug));
}

export function getNote(course: string, slug: string): Note | undefined {
  return getNotes(course).find((note) => note.slug === slug);
}
