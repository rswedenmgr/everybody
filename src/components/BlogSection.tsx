import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Research Breakthrough in Quantum Computing",
    excerpt: "Our computer science department has made significant progress in quantum computing research...",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    date: "March 10, 2024",
    author: "Dr. Sarah Johnson"
  },
  {
    id: 2,
    title: "New Environmental Science Program Launched",
    excerpt: "Academia University introduces a cutting-edge program in Environmental Science...",
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8",
    date: "March 8, 2024",
    author: "Prof. Michael Chen"
  },
  {
    id: 3,
    title: "Student Success Story: International Award Winner",
    excerpt: "Our student Maria Rodriguez wins prestigious international academic competition...",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    date: "March 5, 2024",
    author: "Emma Thompson"
  }
];

const BlogSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;