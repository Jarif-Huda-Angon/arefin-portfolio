import React, { useState, useEffect } from 'react';
import { Play, Download, Mail, Video, Monitor, Star, Menu, X, Scissors, Sun, Moon, MapPin, Send, Smartphone, Gamepad2, Camera } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'bg-[#0a0a16] text-white' : 'bg-slate-50 text-slate-900';
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const theme = isDarkMode
    ? {
      bg: 'bg-[#0a0a16]',
      glass: 'bg-[#151525]/80 border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.15)]',
      nav: 'bg-[#0a0a16]/50 border-white/5',
      textMuted: 'text-slate-400',
      card: 'bg-white/5 border-white/10 hover:bg-white/10'
    }
    : {
      bg: 'bg-slate-50',
      glass: 'bg-white/90 border-slate-200 shadow-xl shadow-purple-500/10',
      nav: 'bg-white/70 border-slate-200',
      textMuted: 'text-slate-600',
      card: 'bg-white border-slate-200 hover:border-purple-400 hover:shadow-lg'
    };

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 selection:bg-purple-500/30 ${theme.bg}`}>

      {/* Background Effects */}
      {isDarkMode && (
        <>
          <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-xl border-b transition-colors ${theme.nav}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 p-[1px]">
              <div className={`w-full h-full rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[#0a0a16]' : 'bg-white'}`}>
                <Play size={18} className={isDarkMode ? 'text-white ml-1' : 'text-purple-600 ml-1'} />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight">arefinshafi.com</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${theme.textMuted}`}>
            <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
            <a href="#services" className="hover:text-purple-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-200'}`}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
              Hire Me
            </a>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 backdrop-blur-sm ${isDarkMode ? 'border-purple-500/30 bg-purple-500/10' : 'border-purple-200 bg-purple-50'}`}>
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              <span className={`text-sm font-medium ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>Available for Freelance</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm Arefin Shafi<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Video Editor
              </span>
            </h1>

            <p className={`text-lg mb-8 max-w-lg leading-relaxed ${theme.textMuted}`}>
              I've been working as a freelancer since 2015. I specialize mainly in social media and short-form video content, creating clean, engaging, and professional videos for different audiences and platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all">
                <Play size={20} /> View Showreel
              </button>
              <a href="#contact" className={`flex items-center gap-2 px-8 py-4 rounded-xl backdrop-blur-md border border-white/10 font-medium transition-all ${isDarkMode ? 'hover:bg-white/5 text-white' : 'hover:bg-slate-100 text-slate-900 border-slate-300'}`}>
                Let's Talk
              </a>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className={`absolute -top-12 right-0 w-[400px] rounded-2xl overflow-hidden border backdrop-blur-xl p-2 z-20 ${theme.glass}`}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 mb-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className={`text-xs font-mono ${theme.textMuted}`}>profile_preview.mp4</span>
              </div>
              <img
                src="/assets/profile.png"
                alt="Arefin Shafi"
                className="w-full h-[400px] object-cover rounded-lg bg-slate-800 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className={`absolute top-[320px] -left-12 w-[450px] rounded-2xl border backdrop-blur-2xl p-4 z-30 ${theme.glass}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-purple-500 tracking-wider">TIMELINE</span>
                <div className={`flex gap-3 ${theme.textMuted}`}>
                  <Scissors size={14} />
                  <Video size={14} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] w-12 ${theme.textMuted}`}>V1 VIDEO</span>
                  <div className={`flex-1 h-8 rounded flex gap-1 p-0.5 ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                    <div className="w-1/4 h-full bg-purple-500/80 rounded-sm"></div>
                    <div className="w-2/4 h-full bg-cyan-500/80 rounded-sm"></div>
                    <div className="w-1/4 h-full bg-purple-600/80 rounded-sm"></div>
                  </div>
                </div>
              </div>
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
            <p className={`text-sm ${theme.textMuted}`}>Completed</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2"><Star className="text-cyan-500" size={32} /></div>
            <h3 className="text-3xl font-bold mb-1">3 Years</h3>
            <p className={`text-sm ${theme.textMuted}`}>Professional Experience</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2"><Monitor className="text-purple-500" size={32} /></div>
            <h3 className="text-3xl font-bold mb-1">24M+ Views</h3>
            <p className={`text-sm ${theme.textMuted}`}>Total Reach</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-cyan-500 tracking-widest uppercase mb-2">A Little Words</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">About Me</h3>
            <p className={`text-xl font-medium mb-6 leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              My editing style is focused on keeping videos clean, professional and engaging while making sure the editing fits the purpose of the content.
            </p>
            <p className={`mb-6 leading-relaxed ${theme.textMuted}`}>
              I pay attention to pacing, structure and the small details that can make a video feel more polished. I enjoy taking raw footage and turning it into something polished, engaging and enjoyable to watch. For me, editing is not simply about cutting clips together. It is about creating the right flow, maintaining attention and making sure the final video communicates its message clearly.
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-medium text-purple-500 mb-8">
              <span>Clean</span> • <span>Professional</span> • <span>Minimal</span> • <span>Detail-Oriented</span> • <span>Dynamic</span>
            </div>
          </div>
          <div className={`p-8 rounded-3xl border backdrop-blur-sm ${theme.card}`}>
            <p className={`italic text-lg mb-6 ${theme.textMuted}`}>
              "Working with Arefin Shafi has been a great experience. His creativity and attention to detail are evident in everything he does, from video editing to managing content. He is reliable, adaptable, and always delivers quality work."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
              <div>
                <h4 className="font-bold">Neofytos Siakou</h4>
                <p className={`text-sm ${theme.textMuted}`}>Media Expert, CY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 px-6 border-y ${isDarkMode ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-slate-100/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
            <p className={`max-w-2xl mx-auto ${theme.textMuted}`}>
              I mainly create and edit video content for social media, focusing on clean visuals, good pacing and content that fits the platform and audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Smartphone />, title: 'Social Media Editing', desc: 'Engaging video content for Facebook, Instagram, TikTok. Strong pacing and visual engagement.' },
              { icon: <Camera />, title: 'Promotional Video', desc: 'Polished promotional content for businesses, products, turning footage into clear engaging videos.' },
              { icon: <Play />, title: 'YouTube Content', desc: 'Talking-head videos, vlogs, tutorials, adapting the editing style to the audience.' },
              { icon: <Gamepad2 />, title: 'Gaming & Gameplay', desc: 'Editing gameplay footage, highlights, montages, and short-form gaming content.' }
            ].map((service, i) => (
              <div key={i} className={`p-6 rounded-2xl border transition-all duration-300 ${theme.card}`}>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${theme.textMuted}`}>{service.desc}</p>
                <a href="#contact" className="text-sm font-bold text-cyan-500 hover:text-cyan-400">Let's Discuss →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-6">Contact</h2>
            <p className={`mb-12 ${theme.textMuted}`}>Have a project in mind? Whether you need a short social media video, YouTube content, or promotional video, tell me what you're working on.</p>

            <div className="space-y-6">
              <div className={`flex items-center gap-4 p-4 rounded-xl border ${theme.card}`}>
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-cyan-500">Email Me</p>
                  <p className="font-medium">arefinshafi09@gmail.com</p>
                </div>
              </div>
              <div className={`flex items-center gap-4 p-4 rounded-xl border ${theme.card}`}>
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-purple-500">Location</p>
                  <p className="font-medium">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-8 rounded-3xl border ${theme.glass}`}>
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Name *</label>
                <input type="text" className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-purple-500 transition-colors ${isDarkMode ? 'bg-[#0a0a16] border-white/10' : 'bg-slate-50 border-slate-200'}`} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Email *</label>
                <input type="email" className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-purple-500 transition-colors ${isDarkMode ? 'bg-[#0a0a16] border-white/10' : 'bg-slate-50 border-slate-200'}`} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Message *</label>
                <textarea rows="4" className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-purple-500 transition-colors ${isDarkMode ? 'bg-[#0a0a16] border-white/10' : 'bg-slate-50 border-slate-200'}`}></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                <Send size={18} /> Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-12 px-6 ${isDarkMode ? 'border-white/5 bg-[#05050b]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Play size={18} className="text-purple-500" />
            <span className="font-bold tracking-tight">arefinshafi</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className={`text-sm font-medium hover:text-purple-500 transition-colors ${theme.textMuted}`}>Facebook</a>
            <a href="#" className={`text-sm font-medium hover:text-purple-500 transition-colors ${theme.textMuted}`}>Twitter</a>
            <a href="#" className={`text-sm font-medium hover:text-purple-500 transition-colors ${theme.textMuted}`}>YouTube</a>
          </div>
          <p className={`text-sm ${theme.textMuted}`}>Copyright © 2026 Arefin Shafi</p>
        </div>
      </footer>
    </div>
  );
}