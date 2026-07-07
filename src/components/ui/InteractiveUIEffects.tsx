'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageSquare, Send, X } from 'lucide-react';
import { servicesData, caseStudiesData, jobsData } from '@/data/companyData';

export const InteractiveUIEffects: React.FC = () => {


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
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'bot' | 'user' }>>([
    { text: 'Hello! I am Sarthi, your GangaTara Digital Assistant. How can I help you explore our enterprise services today?', sender: 'bot' }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isChatOpen]);

  // Shared response logic
  const getBotResponse = (userMsg: string): string => {
    const normalizedMsg = userMsg.toLowerCase().trim();

    // 1. Greetings
    if (['hi', 'hello', 'hey', 'yo', 'greetings', 'hola', 'hi chatbot', 'hi bot'].includes(normalizedMsg)) {
      return "Hello! I am Sarthi, your GangaTara Digital Assistant. I can tell you about our services, key industries, recent case studies, career openings, or help you contact our team. What are you looking to build today?";
    } 
    // 2. Contact, Email, Phone, Office Location, Address
    else if (normalizedMsg.includes('contact') || normalizedMsg.includes('email') || normalizedMsg.includes('phone') || normalizedMsg.includes('call') || normalizedMsg.includes('reach') || normalizedMsg.includes('address') || normalizedMsg.includes('office') || normalizedMsg.includes('location')) {
      return "You can reach GangaTara Technologies via email at info@gangatara.com or call us directly at +91 9009494056. Our team is available 24/7. You can also send a request through our 'Contact Us' page or click the 'Get a Quote' button at the top right to start a project.";
    }
    // 3. Case Studies / Success Stories / Projects / Clients
    else if (normalizedMsg.includes('case study') || normalizedMsg.includes('portfolio') || normalizedMsg.includes('success story') || normalizedMsg.includes('projects') || normalizedMsg.includes('experience') || normalizedMsg.includes('client') || normalizedMsg.includes('work')) {
      const casesList = caseStudiesData.map(cs => `• ${cs.client}: ${cs.title} (Industry: ${cs.industry})\n  "${cs.overview.slice(0, 120)}..."`).join("\n\n");
      return `Here are some of our key enterprise success stories:\n\n${casesList}\n\nYou can read the details for each study on our Case Studies page!`;
    }
    // 4. Careers, Jobs, Hiring, Vacancy, Internship, Benefits
    else if (normalizedMsg.includes('job') || normalizedMsg.includes('career') || normalizedMsg.includes('hiring') || normalizedMsg.includes('work at') || normalizedMsg.includes('join') || normalizedMsg.includes('internship') || normalizedMsg.includes('vacancy') || normalizedMsg.includes('position')) {
      const jobsList = jobsData.map(j => `• ${j.title} (${j.department} - ${j.location})`).join("\n");
      return `We are actively hiring talented professionals to join our team! Here are some of our open positions:\n\n${jobsList}\n\nWe offer fantastic benefits like comprehensive health insurance, remote work options, learning stipends, and performance bonuses. Check out our Careers page to apply!`;
    }
    // 5. Services / What we do / Capabilities
    else if (normalizedMsg.includes('service') || normalizedMsg.includes('what we do') || normalizedMsg.includes('capability') || normalizedMsg.includes('offer') || normalizedMsg.includes('expert')) {
      const servicesList = servicesData.map(s => `• ${s.title}: ${s.description.slice(0, 100)}...`).join("\n\n");
      return `GangaTara Technologies offers premium enterprise IT solutions:\n\n${servicesList}\n\nYou can explore each service detail on our Services page!`;
    }
    // 6. Pricing, Cost, Payments, Advance
    else if (normalizedMsg.includes('price') || normalizedMsg.includes('cost') || normalizedMsg.includes('quote') || normalizedMsg.includes('pay') || normalizedMsg.includes('advance') || normalizedMsg.includes('rate') || normalizedMsg.includes('charge')) {
      return "We tailor our pricing based on project scope, timeline, and required talent. For custom projects (such as Web or App Development), we request a 50% advance payment to start development. Click 'Get a Quote' at the top right of the screen or fill out the enquiry form on our service pages to get a customized estimate.";
    }
    // 7. Accreditations, ISO, AWS, GCP, Partners
    else if (normalizedMsg.includes('iso') || normalizedMsg.includes('aws') || normalizedMsg.includes('gcp') || normalizedMsg.includes('partner') || normalizedMsg.includes('certif') || normalizedMsg.includes('security') || normalizedMsg.includes('standard')) {
      return "GangaTara Technologies maintains the highest industry standards for security and reliability. We are ISO 27001 and SOC 2 Type II Certified, and we are proud to be an AWS Advanced Consulting Partner and GCP Consulting Partner.";
    }
    // 8. Specific Service search
    else {
      const matchedService = servicesData.find(s => 
        normalizedMsg.includes(s.title.toLowerCase()) || 
        s.title.toLowerCase().split(' ').some(word => word.length > 3 && normalizedMsg.includes(word)) ||
        s.technologies.some(tech => normalizedMsg.includes(tech.toLowerCase()))
      );

      const matchedCase = caseStudiesData.find(cs => 
        normalizedMsg.includes(cs.client.toLowerCase()) || 
        normalizedMsg.includes(cs.industry.toLowerCase())
      );

      if (matchedService) {
        return `Yes, we specialize in ${matchedService.title}! Our team uses advanced technologies like ${matchedService.technologies.join(', ')} to deliver robust solutions.\n\nKey features of this service include:\n${matchedService.features.map(f => `• ${f}`).join('\n')}\n\nYou can read more or submit an inquiry on the dedicated ${matchedService.title} page under Services.`;
      } else if (matchedCase) {
        return `We did an outstanding project for ${matchedCase.client} in the ${matchedCase.industry} sector:\n\n"${matchedCase.overview}"\n\nKey Results achieved:\n${matchedCase.results.map(r => `• ${r.label}: ${r.value}`).join('\n')}\n\nRead more details on the Case Studies details page.`;
      }
      // Fallback
      else {
        return "I want to make sure I answer correctly. I am trained on GangaTara's services (Cloud, AI/ML, Web/App development, DevOps, Cybersecurity), case studies (MediHealth, Apex Global, Veloce Apparel), career opportunities, and contact details. Could you please specify your question, or email us at info@gangatara.com for direct support?";
      }
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setMessages((prev) => [...prev, { text: userMsg, sender: 'user' }]);
    setChatInput('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getBotResponse(userMsg);
      setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1200);
  };

  const triggerQuickReply = (text: string) => {
    setMessages((prev) => [...prev, { text, sender: 'user' }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getBotResponse(text);
      setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1200);
  };

  return (
    <>


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
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[480px] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col z-40 bg-white dark:bg-[#2B2D31]"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <div>
                  <h4 className="font-poppins font-black tracking-[0.15em] text-sm uppercase bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent leading-none mb-0.5">Sarthi</h4>
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
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 no-scrollbar bg-slate-50 dark:bg-[#1E1F22]">
              {messages.map((msg, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none align-self-end ml-auto'
                        : 'bg-white dark:bg-white/5 text-slate-800 dark:text-white rounded-bl-none border border-slate-100 dark:border-white/5 mr-auto shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Quick suggested prompt buttons (only show right after the welcome message) */}
                  {index === 0 && messages.length === 1 && (
                    <div className="flex flex-col gap-1.5 mt-1 max-w-[85%] mr-auto">
                      <p className="text-[9px] uppercase font-bold text-slate-400 dark:text-white/30 tracking-wider">Suggested actions</p>
                      <div className="flex flex-wrap gap-1.5">
                        <button type="button" onClick={() => triggerQuickReply('Explore Services')} className="px-2.5 py-1 bg-primary/10 border border-primary/20 hover:bg-primary text-[10px] text-primary hover:text-white font-bold rounded-lg transition-colors cursor-pointer text-left">
                          Explore Services
                        </button>
                        <button type="button" onClick={() => triggerQuickReply('Show Case Studies')} className="px-2.5 py-1 bg-primary/10 border border-primary/20 hover:bg-primary text-[10px] text-primary hover:text-white font-bold rounded-lg transition-colors cursor-pointer text-left">
                          View Projects
                        </button>
                        <button type="button" onClick={() => triggerQuickReply('Are you hiring?')} className="px-2.5 py-1 bg-primary/10 border border-primary/20 hover:bg-primary text-[10px] text-primary hover:text-white font-bold rounded-lg transition-colors cursor-pointer text-left">
                          Careers & Jobs
                        </button>
                        <button type="button" onClick={() => triggerQuickReply('How do I contact your team?')} className="px-2.5 py-1 bg-primary/10 border border-primary/20 hover:bg-primary text-[10px] text-primary hover:text-white font-bold rounded-lg transition-colors cursor-pointer text-left">
                          Contact Info
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing animation bubble */}
              {isTyping && (
                <div className="max-w-[80%] p-3.5 rounded-2xl text-xs rounded-bl-none border border-slate-100 dark:border-white/5 mr-auto shadow-sm bg-white dark:bg-white/5 text-slate-800 dark:text-white flex gap-1 items-center justify-center w-14">
                  <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}

              {/* Invisible scroll target */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 dark:border-white/5 flex gap-2 bg-white dark:bg-[#2B2D31]">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask us anything..."
                className="flex-1 px-3 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/40 focus:outline-none focus:border-primary"
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
