'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, BookOpen } from 'lucide-react';
import { blogsData } from '@/data/companyData';

export default function BlogIndexPage() {
  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Insights & Trends
          </span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-dark dark:text-light mb-6 tracking-tight">
            The GangaTara Blog
          </h1>
          <p className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto leading-relaxed">
            Technical analysis of emerging frameworks, database optimization practices, MLOps orchestration, and zero-trust security architecture.
          </p>
        </div>
      </section>

      {/* 2. Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogsData.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full p-8 rounded-3xl glass-card border border-light/25 dark:border-white/5 hover:border-primary/20 flex flex-col justify-between transition-all duration-300">
                <div>
                  
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[9px] uppercase font-bold text-primary tracking-widest bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-dark/40 dark:text-light/40 font-semibold">
                      <Clock className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-poppins font-bold text-dark dark:text-light mb-4 group-hover:text-primary transition-colors leading-tight">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-dark/70 dark:text-light/75 leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>

                </div>

                <div className="border-t border-light/15 dark:border-white/5 pt-5 flex items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-2.5 text-xs text-dark/60 dark:text-light/60">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <div>
                      <span className="font-bold text-dark dark:text-light block">{blog.author}</span>
                      <span className="text-[10px] text-dark/40 dark:text-light/40">{blog.authorRole}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="flex items-center gap-1 text-xs font-bold text-primary group-hover:text-secondary transition-all cursor-pointer"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
