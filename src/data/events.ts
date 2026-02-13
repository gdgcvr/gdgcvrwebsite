import event1 from "@/assets/events/event-1.jpg";
import event2 from "@/assets/events/event-2.jpg";
import event3 from "@/assets/events/event-3.jpg";
import solution_challenge from "@/assets/events/solution_challenge.jpeg";
import kickstart from "@/assets/events/kickstart.webp";
import gcp from "@/assets/events/gcp.png";
import web from "@/assets/events/web.jpg";
import cyrrup from "@/assets/events/cyrrup.png";

export const nextEvent = {
  title: "Resume Building Session",
  date: "February 13, 2026",
  description: "Learn how to craft a perfect resume to crack top tech companies.",
}

export const allEvents = [
  {
    title: "Resume Building Session",
    date: "February 13, 2026",
    description:
      "Learn how to craft a perfect resume to crack top tech companies.",
    image: event1,
    upcoming: true,
    color: "google-blue",
  },
  {
    title: "Web Dev Sessions",
    date: "Every Tue & Thu",
    description:
      "Master full-stack web development from basics to advanced frameworks.",
    image: event2,
    upcoming: true,
    color: "google-yellow",
  },
  {
    title: "AIML-DS Sessions",
    date: "Every Wed & Thu",
    description:
      "Dive deep into Artificial Intelligence, Machine Learning and Data Science.",
    image: event3,
    upcoming: true,
    color: "google-red",
  },
  {
    title: "Android Sessions",
    date: "Every Wednesday",
    description:
      "Build modern Android applications using Kotlin and Jetpack Compose.",
    image: event1,
    upcoming: true,
    color: "google-green",
  },
  {
    title: "CP Sessions",
    date: "Every Mon & Fri",
    description:
      "Sharpen your algorithmic skills with Competitive Programming sessions.",
    image: event2,
    upcoming: true,
    color: "google-yellow",
  },
  {
    title: "IoT Sessions",
    date: "Every Friday",
    description:
      "Explore the world of Internet of Things and Hardware projects.",
    image: event3,
    upcoming: true,
    color: "google-blue",
  },
  {
    title: "Solution Challenge Hackathon",
    date: "9th & 10th Feb 2025",
    description:
      "A two-day internal and final evaluation hackathon where teams present projects and abstracts to solve real-world problems.",
    image: solution_challenge,
    upcoming: false,
    color: "google-red",
  },
  {
    title: "GDSC CVR Kickstart Event",
    date: "15 Sept 2021",
    description:
      "In this event we introduced the GDSC club and its members to the student community and had an interactive informative session, receiving over 200 new admissions.",
    image: kickstart,
    upcoming: false,
    color: "google-green",
  },
  {
    title: "Introduction to 30 days of google cloud",
    date: "02 Nov 2021",
    description:
      "An online webinar helping students understand the 30 Days of Google Cloud program and resolving technical issues for participants.",
    image: gcp,
    upcoming: false,
    color: "google-blue",
  },
  {
    title: "GDSC CVR World of Women kickstart",
    date: "16 Oct 2021",
    description:
      "A session conducted by the WOW team to encourage and motivate girl students by highlighting the benefits of GDSC and available team support.",
    image: event3,
    upcoming: false,
    color: "google-red",
  },
  {
    title: "Webinar on Introduction to Web Technologies",
    date: "18 Oct 2021",
    description:
      "A 3-day intensive webinar covering Git, HTML, CSS, and Javascript, including the implementation of two hands-on projects.",
    image: web,
    upcoming: false,
    color: "google-yellow",
  },
  {
    title: "Training by Cyrrup Solutions",
    date: "08 Nov 2021",
    description:
      "A collaborative training session on Web Development offering students the opportunity to work on real-life technical projects.",
    image: cyrrup,
    upcoming: false,
    color: "google-green",
  },
];
