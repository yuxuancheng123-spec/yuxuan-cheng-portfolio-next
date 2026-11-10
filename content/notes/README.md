# Lecture notes

Notes are Markdown files in `content/notes/<course>/`. Courses are listed in `src/data/notes.ts`.

## Add a lecture

1. Copy `cs329z/_template.md` to a new file, e.g. `cs329z/lecture-01.md`.
   The file name becomes the URL: `/notes/cs329z/lecture-01`.
   Files starting with `_` are never published.
2. Fill in the front matter (`title`, `lecture`, `date`, `summary`).
   Notes with `draft: true` stay hidden; set it to `false` or delete the line to publish.
3. Write the note, commit, and push. Vercel rebuilds the site.

## Supported Markdown

`##` / `###` / `####` headings, paragraphs, `-` bullet and `1.` numbered lists, `>` quotes,
fenced code blocks, tables, `---` rules, `**bold**`, `*italic*`, `` `code` ``, `[links](url)`,
and images. Put images in `public/notes/<course>/` and reference them as
`![alt](/notes/cs329z/figure.png)`. Raw HTML and nested lists are not supported.

## Add a course

Add an entry to `courses` in `src/data/notes.ts` and create `content/notes/<slug>/`.
