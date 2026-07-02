'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, BookOpen } from 'lucide-react';
import { blogsData } from '@/data/companyData';

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-xl font-bold text-dark dark:text-light mb-4">Article Not Found</h1>
        <button
          onClick={() => router.push('/blog')}
          className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold flex items-center gap-2 mx-auto cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>
      </div>
    );
  }

  // Simple markdown-to-html paragraph formatter for mock content
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return null;
      
      if (trimmed.startsWith('# ')) {
        return <h1 key={idx} className="text-2xl sm:text-3xl font-poppins font-black text-dark dark:text-light mt-8 mb-4 leading-tight">{trimmed.replace('# ', '')}</h1>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={idx} className="text-xl font-poppins font-bold text-dark dark:text-light mt-6 mb-3 leading-tight">{trimmed.replace('## ', '')}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={idx} className="text-base font-poppins font-bold text-dark dark:text-light mt-4 mb-2">{trimmed.replace('### ', '')}</h3>;
      }
      if (trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').map(li => li.replace('- ', '').trim());
        return (
          <ul key={idx} className="list-disc list-inside flex flex-col gap-2 pl-4 text-xs sm:text-sm text-dark/75 dark:text-light/75 leading-relaxed my-4">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
      }
      if (trimmed.startsWith('```')) {
        const codeLines = trimmed.split('\n').filter(l => !l.startsWith('```'));
        return (
          <pre key={idx} className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-emerald-400 overflow-x-auto my-4 max-w-full leading-normal">
            <code>{codeLines.join('\n')}</code>
          </pre>
        );
      }
      return <p key={idx} className="text-xs sm:text-sm text-dark/75 dark:text-light/75 leading-relaxed mb-4">{trimmed}</p>;
    });
  };

  return (
    <div className="pt-28 pb-20">
      
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <button
          onClick={() => router.push('/blog')}
          className="flex items-center gap-1.5 text-xs font-bold text-dark/60 dark:text-light/60 hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>
      </div>

      {/* Reading Article */}
      <article className="max-w-3xl mx-auto px-6">
        
        {/* Header Metadata */}
        <header className="border-b border-light/10 dark:border-white/5 pb-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] uppercase font-bold text-primary tracking-widest bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20">
              {blog.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-poppins font-black text-dark dark:text-light leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-xs text-dark/50 dark:text-light/50 font-semibold">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {blog.author}</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose dark:prose-invert max-w-none">
          {renderContent(blog.content)}
        </div>

      </article>

    </div>
  );
}
