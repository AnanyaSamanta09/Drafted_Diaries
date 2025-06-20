import React from 'react';

const postsData = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Ananya Samanta",
    date: "June 19, 2025",
    content: "React is a powerful JavaScript library for building user interfaces. This post helps you get started...",
  },
  {
    id: 2,
    title: "Tips for Clean Code",
    author: "John Doe",
    date: "June 18, 2025",
    content: "Writing clean code is crucial for long-term success in software development...",
  },
  {
    id: 3,
    title: "Understanding useEffect Hook",
    author: "Jane Smith",
    date: "June 17, 2025",
    content: "The useEffect hook lets you perform side effects in functional components...",
  }
];

const Posts = () => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      {postsData.map(post => (
        <div key={post.id} className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
          <div className="text-sm text-gray-500 mb-3">
            By {post.author} | {post.date}
          </div>
          <p className="text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
