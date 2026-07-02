'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, User } from 'lucide-react';
import { blogsData } from '@/data/companyData';

export const LatestBlog: React.FC = () => {
  return (
    <section className="py-24 bg-light dark:bg-dark relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
              Corporate Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light mb-4">
              Latest Technology Insights
            </h2>
            <p className="text-sm text-dark/70 dark:text-light/60">
              Read our analysis of emerging engineering stacks, artificial intelligence security, cloud orchestration frameworks, and digital trends.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 px-6 py-3 rounded-xl border border-light/20 dark:border-white/10 text-dark dark:text-light hover:border-primary/50 hover:bg-primary/5 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            Go to Blog <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogsData.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-3xl glass-card border border-light/25 dark:border-white/5 hover:border-primary/25 flex flex-col transition-all duration-300 overflow-hidden">
                {/* Blog Cover Image */}
                <div className="w-full h-44 relative overflow-hidden">
                  <img
                    src={blog.image ? `/${blog.image}.png` : '/slide_ai.png'}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-4 text-[9px] uppercase font-bold text-white tracking-widest bg-primary/80 px-2.5 py-0.5 rounded border border-primary/40 backdrop-blur-sm">
                    {blog.category}
                  </span>
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-[9px] text-white/80 font-semibold bg-dark/50 px-2 py-0.5 rounded backdrop-blur-sm">
                    <Clock className="w-2.5 h-2.5" /> {blog.readTime}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-poppins font-bold text-dark dark:text-light mb-4 group-hover:text-primary transition-colors leading-tight">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-dark/70 dark:text-light/75 leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>

                </div>

                {/* Footer details */}
                <div className="border-t border-light/15 dark:border-white/5 pt-5 flex items-center justify-between gap-4 mt-auto">
                  {/* Author info */}
                  <div className="flex items-center gap-2.5 text-xs text-dark/60 dark:text-light/60">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <div>
                      <span className="font-bold text-dark dark:text-light block">{blog.author}</span>
                      <span className="text-[10px] text-dark/40 dark:text-light/40">{blog.authorRole}</span>
                    </div>
                  </div>

                  {/* Read Article */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="flex items-center gap-1 text-xs font-bold text-primary group-hover:text-secondary transition-all"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
