'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageSquare, Send, X } from 'lucide-react';

export const InteractiveUIEffects: React.FC = () => {
  // --- Custom Cursor ---
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [hasPointer, setHasPointer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setHasPointer(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      if (cursorDotRef.current && cursorRingRef.current) {
        // Instant position for the inner dot
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        
        // Soft lag position for the outer ring using transition or animate
        cursorRingRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // --- Scroll Progress Bar ---
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Chat Bot Drawer ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'bot' | 'user' }>>([
    { text: 'Hello! I am GangaTara Digital Assistant. How can I help you explore our enterprise services today?', sender: 'bot' }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setMessages((prev) => [...prev, { text: userMsg, sender: 'user' }]);
    setChatInput('');

    // Generate automated corporate response
    setTimeout(() => {
      let botResponse = "Thank you for reaching out. A client relations manager will contact you shortly. Please feel free to email us directly at info@gangatara.com.";
      
      const normalizedMsg = userMsg.toLowerCase();
      if (normalizedMsg.includes('service') || normalizedMsg.includes('cloud') || normalizedMsg.includes('ai')) {
        botResponse = "We offer cloud migration, AI/ML deployment, and enterprise software engineering. You can review our full offerings on the Services page!";
      } else if (normalizedMsg.includes('career') || normalizedMsg.includes('job') || normalizedMsg.includes('work')) {
        botResponse = "We are currently hiring senior engineers and architects! Check out our open positions on the Careers page.";
      } else if (normalizedMsg.includes('contact') || normalizedMsg.includes('office') || normalizedMsg.includes('call')) {
        botResponse = "You can contact our corporate offices through the Contact form on our site, or via phone at +1 (800) 555-0199.";
      }

      setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      {/* 1. Custom Cursor */}
      {hasPointer && (
        <>
          <div
            ref={cursorDotRef}
            className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
            style={{ mixBlendMode: 'difference' }}
          />
          <div
            ref={cursorRingRef}
            className={`fixed top-0 left-0 w-8 h-8 border border-secondary rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
              isHovered ? 'scale-150 bg-primary/10 border-primary' : 'scale-100'
            }`}
            style={{ mixBlendMode: 'difference' }}
          />
        </>
      )}

      {/* 2. Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-dark/20 dark:bg-light/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 3. Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={scrollToTop}
              className="p-3 bg-primary hover:bg-secondary text-white rounded-full shadow-lg transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919009494056"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#25D366] hover:bg-[#20BA56] text-white rounded-full shadow-lg flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.978 14.12 .952 11.488.951c-5.44 0-9.866 4.372-9.87 9.802-.001 1.83.491 3.618 1.424 5.176l-.999 3.644 3.733-.97L6.647 19.16z" />
          </svg>
        </a>

        {/* Chat Bot Toggle */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="p-3 bg-dark dark:bg-light dark:text-dark text-light hover:bg-primary dark:hover:bg-primary dark:hover:text-white rounded-full shadow-lg flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Open Chat Assistant"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>

      {/* 4. Chat Assistant Drawer */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[480px] rounded-2xl border border-light/10 shadow-2xl overflow-hidden flex flex-col z-40 glass-panel"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <div>
                  <h4 className="font-semibold text-sm">GangaTara Assistant</h4>
                  <p className="text-[10px] text-white/80">Active now</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 no-scrollbar bg-slate-900/40">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[80%] p-3 rounded-2xl text-xs ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none align-self-end ml-auto'
                      : 'bg-white/10 text-white rounded-bl-none border border-white/5 mr-auto'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-white/5 flex gap-2 bg-slate-950/60">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask us anything..."
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="p-2 bg-primary hover:bg-secondary text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
