'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   Sarthi — Floating Chat Widget
   Beautiful, animated AI assistant for GangaTara Technologies
   ───────────────────────────────────────────────────────────── */

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Simple markdown-like renderer for bold, links, lists
function renderMessageContent(content: string) {
  // Split by newlines first
  const lines = content.split('\n');

  return lines.map((line, lineIdx) => {
    // Process inline formatting
    const processInline = (text: string) => {
      const parts: (string | JSX.Element)[] = [];
      let remaining = text;
      let keyCounter = 0;

      while (remaining.length > 0) {
        // Check for markdown links [text](url)
        const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
        // Check for bold **text**
        const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);

        // Find which comes first
        const linkIdx = linkMatch ? remaining.indexOf(linkMatch[0]) : Infinity;
        const boldIdx = boldMatch ? remaining.indexOf(boldMatch[0]) : Infinity;

        if (linkIdx === Infinity && boldIdx === Infinity) {
          // No more formatting
          if (remaining) parts.push(remaining);
          break;
        }

        if (linkIdx <= boldIdx && linkMatch) {
          // Link comes first
          if (linkIdx > 0) parts.push(remaining.slice(0, linkIdx));
          parts.push(
            <a
              key={`link-${keyCounter++}`}
              href={linkMatch[2]}
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              target={linkMatch[2].startsWith('http') ? '_blank' : '_self'}
              rel={linkMatch[2].startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {linkMatch[1]}
            </a>
          );
          remaining = remaining.slice(linkIdx + linkMatch[0].length);
        } else if (boldMatch) {
          // Bold comes first
          if (boldIdx > 0) parts.push(remaining.slice(0, boldIdx));
          parts.push(
            <strong key={`bold-${keyCounter++}`} className="font-semibold text-white">
              {boldMatch[1]}
            </strong>
          );
          remaining = remaining.slice(boldIdx + boldMatch[0].length);
        }
      }

      return parts;
    };

    // Check if line is a bullet point
    const bulletMatch = line.match(/^[•\-]\s+(.+)/);
    if (bulletMatch) {
      return (
        <div key={lineIdx} className="flex gap-2 ml-1 my-0.5">
          <span className="text-primary mt-0.5 shrink-0">•</span>
          <span>{processInline(bulletMatch[1])}</span>
        </div>
      );
    }

    // Check for emoji-prefixed lines (like 📅, 🏥, etc.)
    const emojiLine = line.match(/^([\p{Emoji_Presentation}\p{Extended_Pictographic}])\s+(.+)/u);
    if (emojiLine) {
      return (
        <div key={lineIdx} className="flex gap-2 my-0.5">
          <span className="shrink-0">{emojiLine[1]}</span>
          <span>{processInline(emojiLine[2])}</span>
        </div>
      );
    }

    // Empty line → spacing
    if (line.trim() === '') {
      return <div key={lineIdx} className="h-2" />;
    }

    // Regular line
    return (
      <p key={lineIdx} className="my-0.5">
        {processInline(line)}
      </p>
    );
  });
}

const INITIAL_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: `Hey there! 👋 I'm **Sarthi**, your digital assistant at GangaTara Technologies. I can help you with our services, industries, case studies, careers, or contact info. What would you like to know?`,
  timestamp: new Date(),
};

export const Sarthi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setHasUnread(false);
    }
  }, [isOpen]);

  const sendMessage = useCallback(async (directText?: string) => {
    const text = (directText || input).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'Sorry, I couldn\'t process that. Please try again.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (!isOpen) setHasUnread(true);
    } catch {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'Oops, something went wrong. Please try again or reach us at info@gangatara.com.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Quick action chips
  const quickActions = [
    { label: '🛠️ Services', message: 'What services do you offer?' },
    { label: '🏭 Industries', message: 'What industries do you serve?' },
    { label: '💼 Careers', message: 'Are you hiring?' },
    { label: '📞 Contact', message: 'How can I contact you?' },
  ];

  return (
    <>
      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-8rem)] bg-[#111111] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 bg-gradient-to-r from-[#111111] to-[#1a1a2e]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/30">
                    <Sparkles className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#111111]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Sarthi</p>
                  <p className="text-white/40 text-[10px] font-medium">GangaTara AI Assistant • Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/8 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-white/50" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      msg.role === 'assistant'
                        ? 'bg-gradient-to-br from-primary/20 to-blue-600/20 border border-primary/20'
                        : 'bg-white/8 border border-white/10'
                    }`}
                  >
                    {msg.role === 'assistant' ? (
                      <Bot className="w-3.5 h-3.5 text-primary" />
                    ) : (
                      <User className="w-3.5 h-3.5 text-white/60" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      msg.role === 'assistant'
                        ? 'bg-white/5 text-white/80 rounded-tl-md border border-white/5'
                        : 'bg-primary/15 text-white/90 rounded-tr-md border border-primary/10'
                    }`}
                  >
                    {renderMessageContent(msg.content)}
                    <p className={`text-[9px] mt-1.5 ${msg.role === 'assistant' ? 'text-white/20' : 'text-white/30'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/20 to-blue-600/20 border border-primary/20 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1.5">
                    <Loader2 className="w-3.5 h-3.5 text-primary animate-spin" />
                    <span className="text-white/40 text-xs">Sarthi is typing...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions (show only when just the welcome message) */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => sendMessage(action.message)}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-[11px] text-white/60 hover:bg-primary/10 hover:border-primary/20 hover:text-white/80 transition-all duration-200"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/8 bg-[#0d0d0d]">
              <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-xl px-3 py-1.5 focus-within:border-primary/30 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Sarthi anything..."
                  className="flex-1 bg-transparent text-white/90 text-sm placeholder:text-white/25 outline-none py-1"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-lg bg-primary/80 hover:bg-primary flex items-center justify-center transition-all disabled:opacity-30 disabled:hover:bg-primary/80 shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
              <p className="text-[9px] text-white/15 text-center mt-2">
                Powered by GangaTara Technologies
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Action Button ── */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-600 shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform duration-200 group"
        aria-label={isOpen ? 'Close Sarthi chat' : 'Open Sarthi chat'}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-dark animate-pulse" />
        )}

        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-40 pointer-events-none" />
        )}
      </motion.button>
    </>
  );
};
