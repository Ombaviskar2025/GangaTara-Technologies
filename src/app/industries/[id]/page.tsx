'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { landingPagesData } from '@/data/landingPagesData';
import { LandingPageTemplate } from '@/components/sections/LandingPageTemplate';

export default function IndustryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const content = landingPagesData[id];

  if (!content) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-xl font-bold text-dark dark:text-light mb-4">Practice Division Not Found</h1>
        <button
          onClick={() => router.push('/')}
          className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold flex items-center gap-2 mx-auto cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>
    );
  }

  return <LandingPageTemplate content={content} />;
}
