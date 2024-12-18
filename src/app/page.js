import Link from 'next/link';
import { getPosts } from './utils/getPosts';

// Remove 'use client' since this will be a server component
export default function Home() {
  // Get posts data during build time
  const posts = getPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div 
            key={post.slug} 
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">
                By {post.author} on {new Date(post.date).toLocaleDateString()}
              </p>
              <Link 
                href={`/blog/${post.slug}`} 
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
