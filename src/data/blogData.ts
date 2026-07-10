export type BlogTeam =
  | "Web"
  | "AIML"
  | "Cyber"
  | "IoT & Embedded"
  | "CP"
  | "Android";

export const blogTeams: BlogTeam[] = [
  "Web",
  "AIML",
  "Cyber",
  "IoT & Embedded",
  "CP",
  "Android",
];

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  authorLink: string;
  date: string;
  readTime: string;
  topic: string;
  team: BlogTeam | null;
  color: "google-blue" | "google-red" | "google-green" | "google-yellow";
}

export const blogPosts: BlogPost[] = [
  {
    id: "introduction-to-load-balancers",
    title: "Introduction to Load Balancers",
    author: "Eswar Dudi",
    authorLink: "https://linkedin.com/in/eswar-dudi/",
    date: "July 10, 2026",
    readTime: "10 min read",
    topic: "Backend and Cloud",
    team: "Web",
    color: "google-green",
  },
  {
    id: "simple-linear-regression",
    title: "Simple Linear Regression",
    author: "Srimanth Tenneti",
    authorLink: "https://www.linkedin.com/in/srimanth-tenneti-662b7117b/",
    date: "May 05, 2020",
    readTime: "5 min read",
    topic: "ML",
    team: null,
    color: "google-blue",
  },
  {
    id: "building-a-simple-cnn",
    title: "Building a Simple CNN",
    author: "Srimanth Tenneti",
    authorLink: "https://www.linkedin.com/in/srimanth-tenneti-662b7117b/",
    date: "May 01, 2020",
    readTime: "8 min read",
    topic: "Deep Learning",
    team: null,
    color: "google-red",
  },
  // {
  //   id: "java-programming",
  //   title: "Java Programming",
  //   author: "Adil Shaik",
  //   date: "July 08, 2020",
  //   readTime: "6 min read",
  //   topic: "Programming",
  //   team: null,
  //   color: "google-yellow",
  // },
];
