export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  topic: string;
  color: "google-blue" | "google-red" | "google-green" | "google-yellow";
}

export const blogPosts: BlogPost[] = [
  {
    id: "introduction-to-load-balancers",
    title: "Introduction to Load Balancers",
    author: "Eswar Dudi",
    date: "July 10, 2026",
    readTime: "10 min read",
    topic: "Backend and Cloud",
    color: "google-green",
  },
  {
    id: "simple-linear-regression",
    title: "Simple Linear Regression",
    author: "Srimanth Tenneti",
    date: "May 05, 2020",
    readTime: "5 min read",
    topic: "ML",
    color: "google-blue",
  },
  {
    id: "building-a-simple-cnn",
    title: "Building a Simple CNN",
    author: "Srimanth Tenneti",
    date: "May 01, 2020",
    readTime: "8 min read",
    topic: "Deep Learning",
    color: "google-red",
  },
  {
    id: "java-programming",
    title: "Java Programming",
    author: "Adil Shaik",
    date: "July 08, 2020",
    readTime: "6 min read",
    topic: "Programming",
    color: "google-yellow",
  },
];
