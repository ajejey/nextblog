'use server';

import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../utils/getPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function BlogPost({ params }) {
  const blogParams = await params
  try {
    const post = await getPostBySlug(blogParams.slug);
    
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-6">
            <p>By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
          </div>
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            className="markdown-content"
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  const { getPosts } = await import('../../utils/getPosts');
  const posts = await getPosts();
  
  return posts.map((post) => ({
    slug: post.slug
  }));
}
