import { ReactNode } from "react";

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    topic: string;
    color: "google-blue" | "google-red" | "google-green" | "google-yellow";
    content: string; // specialized content with markdown-like structure or HTML
}

export const blogPosts: BlogPost[] = [
    {
        id: "simple-linear-regression",
        title: "Simple Linear Regression",
        excerpt: "Linear regression is the simplest form of a classification problem. We have many techniques to do this type of regression.",
        author: "Srimanth Tenneti",
        date: "May 05, 2020",
        readTime: "5 min read",
        topic: "ML",
        color: "google-blue",
        content: `
      <p class="mb-4">Linear regression is the simplest form of a classification problem. We have many techniques to do this type of regression. Today we are going to learn how to use the PyTorch API to help us do this classification.</p>
      
      <p class="mb-4">The core concept behind the linear regression is the line equation. <strong>Y = m * x + C</strong>, Where Y , x = point on the line, m = slope , C = Y intercept. So, from the above equation we can create a line just by finding the optimal values of m,C.</p>
      
      <p class="mb-4">So we create a neural network and initialize it with random weights and biases.These represent the m,C of the line.</p>
      
      <p class="mb-4">In the above illustration it is clearly evident that the m,C are not able to help us classify the data correctly. So, any prediction deduced from the network is going to be wrong. Now, we have to train the network to get the optimal values of the m,C (weights and bias).</p>
      
      <p class="mb-4">While training networks for simple regression problems we need not worry much about over-fitting in most of the cases ,but if the number of epochs are not enough then the model might under-fit. In most of the cases 100–200 epochs are more than enough.</p>
    `
    },
    {
        id: "building-a-simple-cnn",
        title: "Building a Simple CNN",
        excerpt: "This article is a simple guide that will help you build and understand the concepts behind building a simple CNN.",
        author: "Srimanth Tenneti",
        date: "May 01, 2020",
        readTime: "8 min read",
        topic: "Deep Learning",
        color: "google-red",
        content: `
      <p class="mb-4">This article is a simple guide that will help you build and understand the concepts behind building a simple CNN. By the end of this article you will be able to build a simple CNN based on the PyTorch API and will classify clothing using the FashionMNIST dateset.</p>
      
      <p class="mb-4">The concept of CNN or Convolution Neural Networks was popularized by Yann André LeCun who is also known as the father of the convolution nets. A CNN works very similar to how our human eye works. The core operations that are behind the CNN’s are matrix additions and multiplications.So, there is no need to get worried about them.</p>
      
      <p class="mb-4">But to know about the working of the CNN’s we need to know how the image gets stored in the computer. The core function behind a CNN is the convolution operation. It is multiplication of the image matrix with a filter matrix to extract some important features from the image matrix.</p>
      
      <p class="mb-4">Another important component of a CNN is called the Max-pool layer. This helps us in reducing the number of features i.e. it sharpens them so that our CNN performs better.</p>
      
      <p class="mb-4">So now you are aware of the layers we are going to use. This knowledge is enough for building a simple CNN but one optional layer call the dropout will help the CNN perform well. Dropout layer is placed in between the fc layers and this randomly drops the connection with a set probability which will help us in training the CNN better.</p>
    `
    },
    {
        id: "java-programming",
        title: "Java Programming",
        excerpt: "What is Java? Who developed it? What makes it to be different from other languages? What are the benefits of learning Java?",
        author: "Adil Shaik",
        date: "July 08, 2020",
        readTime: "6 min read",
        topic: "Programming",
        color: "google-yellow",
        content: `
      <p class="mb-4">What is Java? Who developed it? What makes it to be different from other languages? What are the benefits of learning Java?</p>

      <p class="mb-4">Java is a programming language that follows object-oriented programming paradigms. What are paradigms? In computer science, we have various programming paradigms. These are the styles of writing code, it's not a language. Some programming paradigms are Procedural, Functional, Object-Oriented, Event-Driven.</p>

      <p class="mb-4">Among these most used paradigms are object-oriented and functional. Java was developed by James Gosling, in 1995, for Sun Microsystems which was further developed by " Oracle " in 2010. It was originally called " oke " after an oak tree that stood outside Gosling's office. Later it was renamed to " green " and again it was changed to "Java " inspired by java coffee. Java is very popular and widely used in the industry because Java is an independent programming language that follows the logic “ Write once, run anywhere ”. This means that the compiled code can run on all platforms which support java.</p>

      <p class="mb-4">Java is an object-oriented programming language. In java, everything is considered to be an “object” and all the operations are performed using these objects. Java program can be executed on any kind of machine containing any CPU or operating system.</p>

      <p class="mb-4">Java allows us to write a program that can do many things simultaneously. Java has a garbage collector in the Java-Runtime environment where the memory will be deallocated when the program exits from the method.</p>
    `
    }
];
