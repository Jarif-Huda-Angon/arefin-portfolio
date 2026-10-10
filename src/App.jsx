import React, { useState, useEffect } from 'react';
import { Play, Download, Mail, Video, Monitor, Star, Moon, Sun, Instagram, Twitter, Youtube } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900';
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const themeColors = isDarkMode
    ? { glass: 'bg-slate-900/50 border-slate-700/50', accent: 'text-purple-400', glow: 'shadow-[0_0_15px_rgba(168,85,247,0.5)]' }
    : { glass: 'bg-white/70 border-slate-200', accent: 'text-purple-600', glow: 'shadow-lg shadow-purple-500/20' };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-md border-b ${themeColors.glass} transition-all`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center">
              <Play size={18} className="text-white ml-1" />
            </div>
            <span className="font-bold text-xl tracking-tight">arefinshafi.com</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#work" className="hover:text-purple-500 transition-colors">Work</a>
            <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
            <a href="#services" className="hover:text-purple-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-purple-500/20 transition-colors">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className={`px-6 py-2.5 rounded-full bg-transparent border border-purple-500 hover:bg-purple-500/10 transition-all font-medium ${themeColors.glow}`}>
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              <span className="text-sm font-medium text-purple-500">Available for Freelance</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Freelance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Video Editor</span>
            </h1>
            <p className="text-lg opacity-80 mb-8 max-w-lg leading-relaxed">
              Crafting cinematic stories through clean visuals and dynamic pacing. From promotional content and gaming videos to YouTube engagement — making sure the editing fits your audience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className={`flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity ${themeColors.glow}`}>
                <Play size={20} /> View Showreel
              </button>
              <button className={`flex items-center gap-2 px-8 py-4 rounded-xl backdrop-blur-sm border ${themeColors.glass} font-medium hover:bg-purple-500/10 transition-all`}>
                <Download size={20} /> Download Resume
              </button>
            </div>
          </div>

          <div className="relative">
            <div className={`rounded-2xl overflow-hidden border backdrop-blur-xl ${themeColors.glass} p-2 ${themeColors.glow}`}>
              <img
                src="/assets/profile.png"
                alt="Arefin Shafi"
                className="w-full h-auto rounded-xl object-cover bg-slate-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-2"><Video className="text-purple-500" size={32} /></div>
            <h3 className="text-3xl font-bold mb-1">50+ Projects</h3>
            <p className="text-sm opacity-60">Completed</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2"><Star className="text-blue-500" size={32} /></div>
            <h3 className="text-3xl font-bold mb-1">3 Years</h3>
            <p className="text-sm opacity-60">Professional Experience</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2"><Monitor className="text-purple-500" size={32} /></div>
            <h3 className="text-3xl font-bold mb-1">24M+ Views</h3>
            <p className="text-sm opacity-60">Total Reach</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className={`mt-20 border-t ${themeColors.glass} py-12`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let's Work Together!</h2>
            <p className="opacity-70 mb-6">Have a project in mind? Whether you need a short social media video, YouTube content, or promotional video, I'm open to discussing your project.</p>
            <a href="mailto:arefinshafi09@gmail.com" className="flex items-center gap-2 text-purple-500 hover:text-purple-400 font-medium text-lg">
              <Mail size={20} /> arefinshafi09@gmail.com
            </a>
          </div>
          <div className="flex flex-col md:items-end justify-center gap-6">
            <div className="flex gap-4">
              <a href="#" className={`p-3 rounded-full ${themeColors.glass} hover:text-purple-500 transition-colors`}><Twitter size={20} /></a>
              <a href="#" className={`p-3 rounded-full ${themeColors.glass} hover:text-purple-500 transition-colors`}><Instagram size={20} /></a>
              <a href="#" className={`p-3 rounded-full ${themeColors.glass} hover:text-purple-500 transition-colors`}><Youtube size={20} /></a>
            </div>
            <p className="text-sm opacity-50">Copyright © 2026 Arefin Shafi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}