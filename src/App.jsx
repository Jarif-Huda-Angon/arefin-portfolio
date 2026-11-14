import React, { useState, useEffect, useRef } from 'react';
import { Play, Mail, Video, Monitor, Star, Menu, X, Scissors, Sun, Moon, MapPin, Send, Smartphone, Gamepad2, Camera, Quote, Award, BookOpen, Zap } from 'lucide-react';

// Asset Imports from src/assets/
import heroImg from './assets/hero.jpeg';
import client1Img from './assets/client1.jpeg';
import client2Img from './assets/client2.jpeg';
import client3Img from './assets/client3.jpeg';
import client4Img from './assets/client4.jpeg';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [pointer, setPointer] = useState({ nx: 0, ny: 0, px: 50, py: 50, active: false });
  const heroRef = useRef(null);

  useEffect(() => {
    document.body.className = isDarkMode ? 'bg-[#05050a] text-white' : 'bg-slate-50 text-slate-900';
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Unified Desktop Mouse & Mobile Touch Tracker
  const updatePointerCoords = (clientX, clientY) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;
    const px = Math.max(0, Math.min(100, (relX / rect.width) * 100));
    const py = Math.max(0, Math.min(100, (relY / rect.height) * 100));
    const nx = (px / 100 - 0.5) * 2; // -1 to 1
    const ny = (py / 100 - 0.5) * 2; // -1 to 1
    setPointer({ nx, ny, px, py, active: true });
  };

  const handleMouseMove = (e) => updatePointerCoords(e.clientX, e.clientY);
  const handleMouseLeave = () => setPointer((prev) => ({ ...prev, nx: 0, ny: 0, active: false }));

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      updatePointerCoords(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      updatePointerCoords(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setPointer((prev) => ({ ...prev, nx: 0, ny: 0, active: false }));
    }, 400);
  };

  const customStyles = `
    @keyframes glitch {
      0% { transform: translate(0) }
      20% { transform: translate(-2px, 2px) }
      40% { transform: translate(-2px, -2px) }
      60% { transform: translate(2px, 2px) }
      80% { transform: translate(2px, -2px) }
      100% { transform: translate(0) }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes neonPulse {
      0%, 100% { box-shadow: 0 0 25px rgba(34, 211, 238, 0.35), 0 0 55px rgba(168, 85, 247, 0.25); }
      50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.55), 0 0 80px rgba(236, 72, 153, 0.35); }
    }
    .hover-glitch:hover, .hover-glitch:active {
      animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
      text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
    }
    .animate-float {
      animation: floatSlow 5s ease-in-out infinite;
    }
    .neon-frame {
      animation: neonPulse 4s ease-in-out infinite;
    }
    .gta-grid {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(168, 85, 247, 0.06) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(34, 211, 238, 0.06) 1px, transparent 1px);
      mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    }
    .scanlines {
      background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.15));
      background-size: 100% 4px;
    }
  `;

  const theme = isDarkMode
    ? {
      bg: 'bg-[#05050a]',
      glass: 'bg-[#0a0a16]/80 border-white/10 shadow-[0_8px_32px_rgba(168,85,247,0.15)] backdrop-blur-xl',
      nav: 'bg-[#05050a]/90 border-white/5',
      textMuted: 'text-slate-400',
      card: 'bg-white/5 border-white/10 hover:bg-white/10 hover:-translate-y-2 active:scale-[0.99] transition-all duration-500',
      input: 'bg-[#11111a] border-white/10 text-white focus:border-cyan-500'
    }
    : {
      bg: 'bg-slate-50',
      glass: 'bg-white/90 border-slate-200 shadow-xl shadow-purple-500/10 backdrop-blur-xl',
      nav: 'bg-white/90 border-slate-200',
      textMuted: 'text-slate-600',
      card: 'bg-white border-slate-200 hover:-translate-y-2 hover:border-purple-400 active:scale-[0.99] transition-all duration-500',
      input: 'bg-slate-50 border-slate-200 text-slate-900 focus:border-cyan-500'
    };

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-500 selection:bg-cyan-500/30 ${theme.bg}`}>
      <style>{customStyles}</style>

      {/* Background FX */}
      {isDarkMode && (
        <>
          <div className="fixed inset-0 gta-grid pointer-events-none z-0"></div>
          <div className="fixed inset-0 scanlines pointer-events-none z-50 opacity-20"></div>
          <div
            className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] -z-10 transition-transform duration-700 ease-out"
            style={{ transform: `translate(${pointer.nx * 35}px, ${pointer.ny * 35}px)` }}
          ></div>
          <div
            className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[150px] -z-10 transition-transform duration-700 ease-out"
            style={{ transform: `translate(${-pointer.nx * 35}px, ${-pointer.ny * 35}px)` }}
          ></div>
        </>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-2xl border-b transition-colors ${theme.nav}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 p-[2px] group-hover:skew-x-[-10deg] transition-transform duration-300">
              <div className={`w-full h-full rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[#05050a]' : 'bg-white'}`}>
                <Play size={18} className={isDarkMode ? 'text-white ml-1' : 'text-purple-600 ml-1'} />
              </div>
            </div>
            <span className="font-black text-xl tracking-tighter uppercase italic group-hover:text-cyan-400 transition-colors">arefinshafi</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest ${theme.textMuted}`}>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-all hover:rotate-90 ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-200'}`}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="hidden md:inline-flex px-8 py-2.5 rounded-sm skew-x-[-10deg] bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-black uppercase tracking-wider hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-105 transition-all duration-300">
              <span className="skew-x-[10deg]">Hire Me</span>
            </a>
            <button className="md:hidden text-cyan-400 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className={`md:hidden px-6 py-6 border-b space-y-4 font-black uppercase tracking-widest text-sm ${isDarkMode ? 'bg-[#0a0a16] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400">About</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400">Testimonials</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400">Services</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400">Contact</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="inline-block w-full text-center py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-sm">Hire Me</a>
          </div>
        )}
      </nav>

      {/* Hero Section with Desktop Mouse & Mobile Touch Neon Light Tracking */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="pt-32 pb-20 px-6 min-h-screen flex items-center relative z-10 overflow-hidden"
      >
        {/* Interactive Neon Spotlight (Follows Mouse on PC & Finger on Smartphone) */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
          style={{
            opacity: pointer.active ? 1 : 0.45,
            background: `radial-gradient(450px circle at ${pointer.px}% ${pointer.py}%, rgba(34, 211, 238, 0.22), rgba(168, 85, 247, 0.14) 45%, transparent 75%)`
          }}
        />

        {/* Touch Pulse Ring on Mobile */}
        {pointer.active && (
          <div
            className="pointer-events-none absolute w-24 h-24 -ml-12 -mt-12 rounded-full border-2 border-cyan-400/60 shadow-[0_0_25px_rgba(34,211,238,0.8)] animate-ping z-30 md:hidden"
            style={{ left: `${pointer.px}%`, top: `${pointer.py}%` }}
          />
        )}

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div className="relative">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-sm skew-x-[-10deg] border mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.25)] ${isDarkMode ? 'border-cyan-500/60 bg-cyan-500/10' : 'border-cyan-300 bg-cyan-50'}`}>
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping skew-x-[10deg]"></div>
              <span className={`text-xs font-black uppercase tracking-widest skew-x-[10deg] ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>Status: Available for Freelance</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-6 tracking-tighter uppercase italic">
              Arefin<br />Shafi<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover-glitch inline-block drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                Video Editor
              </span>
            </h1>

            <p className={`text-base sm:text-lg mb-10 max-w-lg leading-relaxed font-medium ${theme.textMuted}`}>
              Freelancing since 2015 with a dedicated focus on video editing since 2021. Specializing in high-engagement social media content, YouTube videos, gaming edits, and promotional videos.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="flex items-center gap-2 px-8 py-4 rounded-sm skew-x-[-10deg] bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white font-black uppercase tracking-wider shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] hover:-translate-y-1 active:scale-95 transition-all duration-300">
                <span className="flex items-center gap-2 skew-x-[10deg]">
                  <Zap size={18} className="fill-white" />
                  Let's Work Together
                </span>
              </a>
              <a href="#testimonials" className={`flex items-center gap-2 px-8 py-4 rounded-sm skew-x-[-10deg] border font-black uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:border-cyan-400 active:scale-95 ${isDarkMode ? 'border-white/20 bg-white/5 text-white hover:bg-white/10' : 'border-slate-300 bg-white/80 text-slate-900'}`}>
                <span className="skew-x-[10deg]">Client Reviews</span>
              </a>
            </div>
          </div>

          {/* Hero Picture Display with 3D Tilt, Floating Motion & Neon Lights */}
          <div className="relative mt-6 lg:mt-0 animate-float">
            {/* Ambient Neon Glow Behind Picture */}
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-45 animate-pulse pointer-events-none"></div>

            <div
              className={`relative w-full max-w-[420px] mx-auto lg:ml-auto rounded-2xl overflow-hidden border-2 border-cyan-400/50 z-20 neon-frame transition-transform duration-200 ease-out ${theme.glass}`}
              style={{
                transform: `perspective(1000px) rotateY(${pointer.nx * 10}deg) rotateX(${-pointer.ny * 10}deg)`
              }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/60">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_#eab308]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
                </div>
                <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider">AREFIN_PRO_4K.RAW</span>
              </div>
              <div className="overflow-hidden relative h-[380px] sm:h-[450px] bg-slate-900 group">
                <img
                  src={heroImg}
                  alt="Arefin Shafi"
                  className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-cyan-500/10 pointer-events-none"></div>

                {/* Bottom Neon Caption inside Hero Card */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-cyan-400/30">
                  <span className="text-xs font-black uppercase tracking-widest text-white">Arefin Shafi</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    Editor Mode
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Timeline HUD */}
            <div
              className={`hidden sm:block absolute -bottom-6 -left-6 w-[380px] rounded-xl border-l-4 border-l-cyan-400 p-4 z-30 shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur-2xl transition-transform duration-300 ${isDarkMode ? 'bg-[#0a0a16]/95 border-white/10' : 'bg-white/95 border-slate-200'}`}
              style={{ transform: `translate(${-pointer.nx * 14}px, ${-pointer.ny * 14}px)` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-cyan-400 tracking-widest uppercase">Render Sequence</span>
                <Video size={16} className="text-pink-500 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold w-12 ${theme.textMuted}`}>V1 MAIN</span>
                  <div className="flex-1 h-5 rounded-sm flex gap-1 p-1 bg-black/50">
                    <div className="w-1/3 h-full bg-cyan-400 rounded-sm shadow-[0_0_10px_#22d3ee]"></div>
                    <div className="w-1/3 h-full bg-purple-500 rounded-sm shadow-[0_0_10px_#a855f7]"></div>
                    <div className="w-1/3 h-full bg-pink-500 rounded-sm shadow-[0_0_10px_#ec4899]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Star Testimonials Section (4 Client Reviews) */}
      <section id="testimonials" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-xs font-black text-cyan-500 tracking-widest uppercase mb-2 skew-x-[-10deg]">Client Records</h2>
            <h3 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter">Verified Reviews</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Testimonial 1: Mohammed Hammad */}
            <div className={`p-8 rounded-2xl border relative flex flex-col justify-between ${theme.glass} hover:border-cyan-400/50 transition-all duration-300`}>
              <Quote className="absolute top-6 right-6 text-purple-500/20" size={50} />
              <div>
                <div className="flex gap-1 mb-6">
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                </div>
                <p className={`text-sm italic font-medium mb-8 leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  "I've really enjoyed working with Mohammed,He's not only a talented video editor but also someone who understands what makes short-form content work. He's consistent, responsive, and always willing to improve based on feedback. His editing has helped us maintain a strong flow of content across our TikTok channels."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-cyan-400 shrink-0">
                  <img src={client1Img} alt="Mohammed Hammad" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-wider text-sm text-cyan-400">Mohammed Hammad</h4>
                  <p className={`text-xs font-bold uppercase ${theme.textMuted}`}>Founder, Hammad Media</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className={`p-8 rounded-2xl border relative flex flex-col justify-between ${theme.glass} hover:border-purple-400/50 transition-all duration-300`}>
              <Quote className="absolute top-6 right-6 text-purple-500/20" size={50} />
              <div>
                <div className="flex gap-1 mb-6">
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                </div>
                <p className={`text-sm italic font-medium mb-8 leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  "Working with Arefin Shafi has been an exceptional experience. Creativity and attention to detail are evident in everything he delivers—from short-form viral cuts to full promotional packages."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-purple-500 shrink-0">
                  <img src={client2Img} alt="Client Partner" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-wider text-sm text-purple-400">
                    Neofytos Siakos
                  </h4>
                  <p className={`text-xs font-bold uppercase ${theme.textMuted}`}>Media Expert CY</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3: Neofytos Siakos */}
            <div className={`p-8 rounded-2xl border relative flex flex-col justify-between ${theme.glass} hover:border-pink-400/50 transition-all duration-300`}>
              <Quote className="absolute top-6 right-6 text-purple-500/20" size={50} />
              <div>
                <div className="flex gap-1 mb-6">
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                </div>
                <p className={`text-sm italic font-medium mb-8 leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  "Working with Shamsul has been a great experience. His creativity and attention to detail are evident in everything he does, from video editing and graphic design to managing and scheduling content across multiple social media accounts. He is reliable, adaptable, and always delivers quality work that aligns with our clients’ needs."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-pink-500 shrink-0">
                  <img src={client3Img} alt="Neofytos Siakos" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-wider text-sm text-pink-400">Amy Janece</h4>
                  <p className={`text-xs font-bold uppercase ${theme.textMuted}`}>Founder of Embody Your Element</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4: NEW REVIEW SLOT */}
            <div className={`p-8 rounded-2xl border relative flex flex-col justify-between ${theme.glass} hover:border-cyan-400/50 transition-all duration-300`}>
              <Quote className="absolute top-6 right-6 text-cyan-500/20" size={50} />
              <div>
                <div className="flex gap-1 mb-6">
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                  <Star className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" size={18} />
                </div>
                <p className={`text-sm italic font-medium mb-8 leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  "Shafi has an incredible work ethic and makes beautiful content for myself and my clients. So glad we found him. He communicates, provides quick turnaround, and gives great feedback"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-cyan-400 shrink-0">
                  <img src={client4Img} alt="Client 4" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-wider text-sm text-cyan-400">Annelise Brueher</h4>
                  <p className={`text-xs font-bold uppercase ${theme.textMuted}`}>Bruebird Agency</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-white/10 bg-black/20 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8">
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">50+</h3>
            <p className={`text-xs font-bold tracking-widest uppercase ${theme.textMuted}`}>Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">3 YRS</h3>
            <p className={`text-xs font-bold tracking-widest uppercase ${theme.textMuted}`}>Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-purple-600">24M+</h3>
            <p className={`text-xs font-bold tracking-widest uppercase ${theme.textMuted}`}>Total Reach</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs font-black text-cyan-500 tracking-widest uppercase mb-2">A Little About Me</h2>
            <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-6">Md. Shamsul Arefin Shafi</h3>
            <p className={`text-base leading-relaxed mb-6 font-medium ${theme.textMuted}`}>
              I'm a freelance video editor from Bangladesh. Video editing is more than just work for me—it's my main creative profession. I enjoy taking raw footage and shaping it into something polished, engaging, and enjoyable to watch.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <BookOpen className="text-cyan-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-sm uppercase">B.Sc. in Computer Science & Engineering</h4>
                  <p className={`text-xs ${theme.textMuted}`}>North Western University, Khulna, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-purple-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-sm uppercase">Cisco Certified Network Associate (CCNA)</h4>
                  <p className={`text-xs ${theme.textMuted}`}>Certified Networking Professional</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
              <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">Clean</span>
              <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">Professional</span>
              <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">Minimal</span>
              <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">Detail-Oriented</span>
              <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">Dynamic</span>
            </div>
          </div>

          <div className={`p-8 rounded-2xl border ${theme.glass} space-y-6`}>
            <h4 className="text-xl font-black uppercase tracking-wider text-purple-400">Tools & Stack</h4>
            <div className="grid grid-cols-2 gap-4 text-sm font-bold">
              <div className="p-3 rounded bg-white/5 border border-white/10">Adobe Premiere Pro</div>
              <div className="p-3 rounded bg-white/5 border border-white/10">CapCut Pro</div>
              <div className="p-3 rounded bg-white/5 border border-white/10">Adobe Photoshop</div>
              <div className="p-3 rounded bg-white/5 border border-white/10">Adobe Audition</div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h5 className="font-bold text-sm uppercase text-cyan-400 mb-2">Beyond Editing</h5>
              <p className={`text-xs leading-relaxed ${theme.textMuted}`}>
                Outside of client work, I'm a passionate gamer (GTA, Red Dead Redemption 2, PUBG, Fortnite). Editing my own gameplay footage allows me to experiment with pacing, sound design, and highlights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-cyan-500 tracking-widest uppercase mb-2">Capabilities</h2>
            <h3 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter mb-4">Video Editing Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`p-8 rounded-xl border ${theme.card}`}>
              <Smartphone className="text-cyan-400 mb-4" size={32} />
              <h4 className="text-lg font-black uppercase tracking-wider mb-2">Social Media Video Editing</h4>
              <p className={`text-xs leading-relaxed ${theme.textMuted}`}>Engaging content for Facebook, Instagram, TikTok, and YouTube with clean cuts and strong pacing.</p>
            </div>
            <div className={`p-8 rounded-xl border ${theme.card}`}>
              <Scissors className="text-purple-400 mb-4" size={32} />
              <h4 className="text-lg font-black uppercase tracking-wider mb-2">Short-Form Video Editing</h4>
              <p className={`text-xs leading-relaxed ${theme.textMuted}`}>Attention-grabbing short videos focused on pacing, structure, and keeping viewer retention high.</p>
            </div>
            <div className={`p-8 rounded-xl border ${theme.card}`}>
              <Play className="text-pink-400 mb-4" size={32} />
              <h4 className="text-lg font-black uppercase tracking-wider mb-2">YouTube Video Editing</h4>
              <p className={`text-xs leading-relaxed ${theme.textMuted}`}>Talking-head videos, vlogs, tutorials, and long-form formats tailored to creator audiences.</p>
            </div>
            <div className={`p-8 rounded-xl border ${theme.card}`}>
              <Camera className="text-cyan-400 mb-4" size={32} />
              <h4 className="text-lg font-black uppercase tracking-wider mb-2">Promotional Video Editing</h4>
              <p className={`text-xs leading-relaxed ${theme.textMuted}`}>Polished promotional content for businesses, products, and services that communicate clearly.</p>
            </div>
            <div className={`p-8 rounded-xl border ${theme.card}`}>
              <Gamepad2 className="text-purple-400 mb-4" size={32} />
              <h4 className="text-lg font-black uppercase tracking-wider mb-2">Gaming & Gameplay Editing</h4>
              <p className={`text-xs leading-relaxed ${theme.textMuted}`}>Gameplay montages, highlight reels, and entertainment cuts backed by personal gaming experience.</p>
            </div>
            <div className={`p-8 rounded-xl border ${theme.card}`}>
              <Monitor className="text-pink-400 mb-4" size={32} />
              <h4 className="text-lg font-black uppercase tracking-wider mb-2">Social Media Marketing</h4>
              <p className={`text-xs leading-relaxed ${theme.textMuted}`}>Understanding how video content fits into broader multi-channel digital strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter mb-4">Let's Talk</h2>
            <p className={`text-sm mb-8 leading-relaxed font-medium ${theme.textMuted}`}>
              Have a video project in mind? Available for freelance projects, collaborations, and long-term retainer positions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
                <Mail className="text-cyan-400" size={24} />
                <div>
                  <p className="text-xs font-bold uppercase text-cyan-400">Email Me</p>
                  <a href="mailto:arefinshafi09@gmail.com" className="font-bold text-sm hover:text-cyan-300">arefinshafi09@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
                <MapPin className="text-purple-400" size={24} />
                <div>
                  <p className="text-xs font-bold uppercase text-purple-400">Location</p>
                  <p className="font-bold text-sm">Khulna, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-8 rounded-2xl border ${theme.glass}`}>
            <h3 className="text-xl font-black uppercase tracking-wider mb-6">Send Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className={`block text-xs font-bold uppercase mb-2 ${theme.textMuted}`}>Name *</label>
                <input type="text" className={`w-full px-4 py-3 rounded-lg border focus:outline-none ${theme.input}`} />
              </div>
              <div>
                <label className={`block text-xs font-bold uppercase mb-2 ${theme.textMuted}`}>Email *</label>
                <input type="email" className={`w-full px-4 py-3 rounded-lg border focus:outline-none ${theme.input}`} />
              </div>
              <div>
                <label className={`block text-xs font-bold uppercase mb-2 ${theme.textMuted}`}>Project Details *</label>
                <textarea rows="4" className={`w-full px-4 py-3 rounded-lg border focus:outline-none resize-none ${theme.input}`}></textarea>
              </div>
              <button className="w-full py-4 rounded-sm skew-x-[-10deg] bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-black uppercase tracking-wider hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">
                <span className="flex items-center justify-center gap-2 skew-x-[10deg]">
                  <Send size={18} /> Submit Project
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-12 px-6 relative z-10 ${isDarkMode ? 'border-white/10 bg-[#020204]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Play size={18} className="text-cyan-400" />
            <span className="font-black uppercase tracking-tight">AREFIN SHAFI</span>
          </div>
          <p className={`text-xs font-bold tracking-widest uppercase ${theme.textMuted}`}>© 2026 Arefin Shafi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}