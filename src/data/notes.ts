// Courses shown under /notes. Each course's lecture notes live in content/notes/<slug>/*.md.

export type Course = {
  slug: string;
  code: string;
  title: string;
  school: string;
  term: string;
  instructors: string;
  url: string;
  description: string;
};

export const courses: Course[] = [
  {
    slug: "cs329z",
    code: "CS 329Z",
    title: "Engineering AI Agents",
    school: "Stanford University",
    term: "2026",
    instructors: "Diyi Yang, Michael Ryan, John Yang",
    url: "https://cs329z.stanford.edu/",
    description:
      "Lecture-by-lecture notes on engineering agentic systems — from LLM pipelines to compound AI systems to autonomous agents — with an eye on evaluation, reliability, and safety.",
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
