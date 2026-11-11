import React, { useState, useEffect } from 'react';
import { Play, Mail, Video, Monitor, Star, Menu, X, Scissors, MapPin, Send, Smartphone, Gamepad2, Camera, Quote, Code, Trophy, Target, Zap, Briefcase } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [touchPos, setTouchPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.className = 'bg-[#05050a] text-white';

    // Mouse tracking for desktop parallax
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };

    // Touch tracking for mobile parallax
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        setTouchPos({
          x: (e.touches[0].clientX / window.innerWidth - 0.5) * 20,
          y: (e.touches[0].clientY / window.innerHeight - 0.5) * 20
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const customStyles = `
    @keyframes glitch {
      0% { transform: translate(0) }
      20% { transform: translate(-2px, 2px) }
      40% { transform: translate(-2px, -2px) }
      60% { transform: translate(2px, 2px) }
      80% { transform: translate(2px, -2px) }
      100% { transform: translate(0) }
    }
    .hover-glitch:hover {
      animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
      text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
    }
    .gta-grid {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(168, 85, 247, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
      mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    }
    .scanlines {
      background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
      background-size: 100% 4px;
    }
    .wanted-star {
      filter: drop-shadow(0 0 8px rgba(234,179,8,0.8));
    }
  `;

  const theme = {
    glass: 'bg-[#0a0a16]/90 border-white/10 shadow-[0_8px_32px_rgba(168,85,247,0.15)] backdrop-blur-xl',
    nav: 'bg-[#05050a]/90 border-white/5',
    textMuted: 'text-slate-400',
    card: 'bg-white/5 border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500',
    input: 'bg-[#11111a] border-white/10 text-white focus:border-cyan-500'
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden transition-colors duration-500 selection:bg-cyan-500/30 bg-[#05050a]">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Ambient Effects */}
      <div className="fixed inset-0 gta-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none z-50 opacity-20"></div>
      <div
        className="fixed top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-600/10 rounded-full blur-[120px] md:blur-[150px] -z-10 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${(mousePos.x || touchPos.x) * 2}px, ${(mousePos.y || touchPos.y) * 2}px)` }}
      ></div>
      <div
        className="fixed bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-600/10 rounded-full blur-[120px] md:blur-[150px] -z-10 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${-(mousePos.x || touchPos.x) * 2}px, ${-(mousePos.y || touchPos.y) * 2}px)` }}
      ></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 backdrop-blur-2xl border-b transition-colors ${theme.nav}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 p-[2px] group-hover:skew-x-[-10deg] transition-transform duration-300">
              <div className="w-full h-full rounded-xl flex items-center justify-center bg-[#05050a]">
                <Play size={18} className="text-white ml-1" />
              </div>
            </div>
            <span className="font-black text-xl tracking-tighter uppercase italic group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all">arefinshafi</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider ${theme.textMuted}`}>
            <a href="#about" className="hover:text-cyan-400 hover:skew-x-[-10deg] transition-all">About</a>
            <a href="#testimonials" className="hover:text-cyan-400 hover:skew-x-[-10deg] transition-all">Reputation</a>
            <a href="#services" className="hover:text-cyan-400 hover:skew-x-[-10deg] transition-all">Services</a>
            <a href="#portfolio" className="hover:text-cyan-400 hover:skew-x-[-10deg] transition-all">Work</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-flex px-8 py-2.5 rounded-sm skew-x-[-10deg] bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-black uppercase tracking-wider hover:shadow-[2px_2px_20px_rgba(34,211,238,0.5)] hover:scale-105 transition-all duration-300">
              <span className="skew-x-[10deg]">Hire Me</span>
            </a>
            <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#05050a]/95 border-b border-white/10 backdrop-blur-2xl py-6 px-8 flex flex-col gap-6 shadow-2xl transition-all">
            <a href="#about" onClick={closeMenu} className="text-lg font-black uppercase tracking-wider hover:text-cyan-400">About</a>
            <a href="#testimonials" onClick={closeMenu} className="text-lg font-black uppercase tracking-wider hover:text-cyan-400">Reputation</a>
            <a href="#services" onClick={closeMenu} className="text-lg font-black uppercase tracking-wider hover:text-cyan-400">Services</a>
            <a href="#portfolio" onClick={closeMenu} className="text-lg font-black uppercase tracking-wider hover:text-cyan-400">Work</a>
            <a href="#contact" onClick={closeMenu} className="py-3 text-center rounded-sm skew-x-[-10deg] bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-black uppercase tracking-wider">
              <span className="skew-x-[10deg]">Hire Me</span>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-sm skew-x-[-10deg] border mb-8 backdrop-blur-sm animate-pulse border-cyan-500/50 bg-cyan-500/10">
              <div className="w-2 h-2 rounded-full bg-cyan-400 skew-x-[10deg]"></div>
              <span className="text-xs font-black uppercase tracking-widest skew-x-[10deg] text-cyan-400">Status: Available</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-6 tracking-tighter uppercase italic">
              Arefin<br />Shafi<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover-glitch inline-block">
                Video Editor
              </span>
            </h1>

            <p className={`text-base md:text-lg mb-10 max-w-lg leading-relaxed font-medium ${theme.textMuted}`}>
              I've been working as a freelancer since 2015, with a dedicated focus on video editing since 2021. I specialize mainly in social media and short-form video content.
            </p>

            <div className="flex flex-wrap gap-6">
              <a href="#portfolio" className="flex items-center gap-2 px-10 py-5 rounded-sm skew-x-[-10deg] bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-black uppercase tracking-wider hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300 group">
                <span className="flex items-center gap-2 skew-x-[10deg]">
                  <Play size={20} className="fill-white group-hover:animate-ping absolute opacity-50" />
                  <Play size={20} className="fill-white relative z-10" />
                  View Work
                </span>
              </a>
              <a href="#about" className="flex items-center gap-2 px-8 py-5 rounded-sm skew-x-[-10deg] backdrop-blur-md border border-white/20 font-black uppercase tracking-wider hover:bg-white/10 text-white transition-all">
                <span className="skew-x-[10deg]">Intel</span>
              </a>
            </div>
          </div>

          {/* Hero Image & Floating UI */}
          <div className="relative perspective-1000 mt-8 lg:mt-0" style={{ transform: `translate(${mousePos.x || touchPos.x}px, ${mousePos.y || touchPos.y}px)` }}>
            <div className={`relative w-full max-w-[420px] mx-auto lg:ml-auto rounded-xl overflow-hidden border-2 z-20 transition-transform duration-300 ${theme.glass} border-white/10`}>
              <img
                src="/assets/profile-new.jpeg"
                alt="Arefin Shafi"
                className="w-full h-[400px] md:h-[500px] object-cover bg-slate-800 contrast-125 hover:scale-110 hover:contrast-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* GTA Floating Timeline */}
            <div className="absolute -bottom-6 md:top-[400px] -left-2 md:-left-12 w-[90%] md:w-[480px] mx-auto rounded-xl border-l-4 border-l-cyan-400 p-4 md:p-5 z-30 animate-[bounce_6s_infinite] backdrop-blur-2xl bg-[#0a0a16]/90 border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-cyan-400 tracking-widest uppercase">Render Sequence</span>
                <div className="flex gap-3 text-cyan-400 animate-pulse">
                  <Scissors size={16} />
                  <Video size={16} />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold w-12 ${theme.textMuted}`}>V1 MAIN</span>
                  <div className="flex-1 h-8 rounded-sm flex gap-1 p-1 bg-black/50">
                    <div className="w-1/3 h-full bg-cyan-500 rounded-sm"></div>
                    <div className="w-1/3 h-full bg-purple-500 rounded-sm"></div>
                    <div className="w-1/3 h-full bg-pink-500 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wanted Level Testimonials (3 Clients) */}
      <section id="testimonials" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-sm font-black text-cyan-500 tracking-widest uppercase mb-2 skew-x-[-10deg]">Reputation</h2>
            <h3 className="text-5xl font-black uppercase italic tracking-tighter">Client Records</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Client 1: Mohammed Hammad */}
            <div className={`p-8 rounded-2xl border relative group ${theme.glass} hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between`}>
              <Quote className="absolute top-6 right-6 text-purple-500/20 group-hover:text-cyan-500/40 transition-colors" size={60} />
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-500 text-yellow-500 wanted-star" size={16} />
                  ))}
                </div>
                <p className="text-base italic font-medium mb-8 leading-relaxed relative z-10 text-slate-200">
                  "I've really enjoyed working with Mohammed. He's not only a talented video editor but also someone who understands what makes short-form content work. He's consistent, responsive, and always willing to improve based on feedback."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-cyan-500 p-[2px] shrink-0">
                  <img src="/assets/client1.jpeg" alt="Mohammed Hammad" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-wider text-cyan-400 text-sm">Mohammed Hammad</h4>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${theme.textMuted}`}>Founder, Hammad Media</p>
                </div>
              </div>
            </div>

            {/* Client 2: Neofytos Siakos */}
            <div className={`p-8 rounded-2xl border relative group ${theme.glass} hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between`}>
              <Quote className="absolute top-6 right-6 text-purple-500/20 group-hover:text-cyan-500/40 transition-colors" size={60} />
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-500 text-yellow-500 wanted-star" size={16} />
                  ))}
                </div>
                <p className="text-base italic font-medium mb-8 leading-relaxed relative z-10 text-slate-200">
                  "Working with Arefin Shafi has been a great experience. His creativity and attention to detail are evident in everything he does, from video editing and graphic design to managing content across multiple social media accounts."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-purple-500 p-[2px] shrink-0">
                  <img src="/assets/client2.jpeg" alt="Neofytos Siakos" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-wider text-purple-400 text-sm">Neofytos Siakos</h4>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${theme.textMuted}`}>Media Expert CY</p>
                </div>
              </div>
            </div>

            {/* Client 3: Sarah Jenkins */}
            <div className={`p-8 rounded-2xl border relative group ${theme.glass} hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between`}>
              <Quote className="absolute top-6 right-6 text-purple-500/20 group-hover:text-cyan-500/40 transition-colors" size={60} />
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-500 text-yellow-500 wanted-star" size={16} />
                  ))}
                </div>
                <p className="text-base italic font-medium mb-8 leading-relaxed relative z-10 text-slate-200">
                  "Arefin took our raw footage and transformed it into absolute gold. The pacing, visual effects, and overall narrative flow completely exceeded our expectations. Finding an editor who understands social engagement this deeply is rare."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-pink-500 p-[2px] shrink-0">
                  <img src="/assets/client3.jpeg" alt="Sarah Jenkins" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-wider text-pink-400 text-sm">Sarah Jenkins</h4>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${theme.textMuted}`}>Content Director</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-white/10 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8">
          <div className="text-center group">
            <h3 className="text-5xl md:text-7xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">50+</h3>
            <p className={`text-xs font-bold tracking-widest uppercase ${theme.textMuted}`}>Missions Passed</p>
          </div>
          <div className="text-center group">
            <h3 className="text-5xl md:text-7xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">3 YRS</h3>
            <p className={`text-xs font-bold tracking-widest uppercase ${theme.textMuted}`}>Experience</p>
          </div>
          <div className="text-center group">
            <h3 className="text-5xl md:text-7xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">24M+</h3>
            <p className={`text-xs font-bold tracking-widest uppercase ${theme.textMuted}`}>Total Reach</p>
          </div>
        </div>
      </section>

      {/* Full About Details Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-purple-500 tracking-widest uppercase mb-2 skew-x-[-10deg]">Intel</h2>
            <h3 className="text-5xl font-black uppercase italic tracking-tighter">About Arefin</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 p-10 rounded-2xl border ${theme.glass}`}>
              <h4 className="text-2xl font-black uppercase tracking-wider mb-6 text-cyan-400">The Operator</h4>
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed font-medium">
                <p>I'm Md. Shamsul Arefin Shafi, professionally known as Arefin Shafi. I'm a freelance video editor from Bangladesh. I started working as a freelancer in 2015 and began focusing specifically on video editing in 2021.</p>
                <p>Since then, video editing has developed from an interest into my main creative profession. I particularly enjoy creating social media and short-form content, where editing, pacing and visual storytelling can make a major difference in how people experience a video.</p>
                <p>I enjoy the complete editing process — from working with raw footage and understanding the idea behind a project to creating a finished video that is ready to publish.</p>
              </div>

              <h4 className="text-xl font-black uppercase tracking-wider mt-10 mb-6 text-purple-400">My Editing Style</h4>
              <p className="text-lg text-slate-300 leading-relaxed font-medium mb-6">
                My editing style is focused on keeping videos clean, professional and engaging while making sure the editing fits the purpose of the content. I pay attention to pacing, structure and the small details that can make a video feel more polished.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-widest text-cyan-400">
                <span className="px-4 py-2 rounded-sm bg-cyan-500/10 border border-cyan-500/20 skew-x-[-10deg]">Clean</span>
                <span className="px-4 py-2 rounded-sm bg-cyan-500/10 border border-cyan-500/20 skew-x-[-10deg]">Professional</span>
                <span className="px-4 py-2 rounded-sm bg-cyan-500/10 border border-cyan-500/20 skew-x-[-10deg]">Minimal</span>
                <span className="px-4 py-2 rounded-sm bg-cyan-500/10 border border-cyan-500/20 skew-x-[-10deg]">Detail-Oriented</span>
                <span className="px-4 py-2 rounded-sm bg-purple-500/10 border border-purple-500/20 skew-x-[-10deg] text-purple-400">Dynamic</span>
                <span className="px-4 py-2 rounded-sm bg-purple-500/10 border border-purple-500/20 skew-x-[-10deg] text-purple-400">Creative</span>
              </div>
            </div>

            <div className="space-y-8">
              <div className={`p-8 rounded-2xl border ${theme.glass}`}>
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="text-yellow-500" size={24} />
                  <h4 className="text-xl font-black uppercase tracking-wider">Education</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-cyan-400">B.Sc in Computer Science</p>
                    <p className={`text-sm ${theme.textMuted}`}>North Western University, Khulna</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-bold text-purple-400">Certification</p>
                    <p className={`text-sm ${theme.textMuted}`}>Cisco Certified Network Associate (CCNA)</p>
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-2xl border ${theme.glass}`}>
                <div className="flex items-center gap-3 mb-6">
                  <Code className="text-cyan-400" size={24} />
                  <h4 className="text-xl font-black uppercase tracking-wider">Loadout</h4>
                </div>
                <ul className="space-y-3 font-medium text-slate-300">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-sm"></div> Adobe Premiere Pro</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-500 rounded-sm"></div> CapCut Pro</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-sm"></div> Adobe After Effects</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-sm"></div> Adobe Photoshop</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-sm"></div> Adobe Audition</li>
                </ul>
              </div>

              <div className={`p-8 rounded-2xl border ${theme.glass} border-purple-500/30 relative overflow-hidden group`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-2xl group-hover:bg-purple-500/40 transition-colors"></div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <Gamepad2 className="text-purple-400" size={28} />
                  <h4 className="text-xl font-black uppercase tracking-wider">Beyond Editing</h4>
                </div>
                <p className="text-sm text-slate-300 relative z-10 leading-relaxed font-medium">
                  Outside of client work, I'm a passionate gamer. I enjoy editing my own gameplay footage for games like <span className="text-cyan-400 font-bold">GTA 5, Red Dead Redemption 2, PUBG, and Fortnite</span>. It's a creative outlet to experiment with pacing, music, and highlights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">Arsenal / Services</h2>
            <p className={`max-w-2xl mx-auto font-medium ${theme.textMuted}`}>
              Clean visuals, aggressive pacing, and content engineered to dominate the algorithm and fit the audience perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`p-8 rounded-xl border ${theme.card} group`}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                <Smartphone />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-3">Social Media Video Editing</h3>
              <p className={`text-sm font-medium mb-6 ${theme.textMuted}`}>Engaging content for Facebook, Instagram, TikTok and YouTube. Focus on clean editing, strong pacing and visual engagement.</p>
            </div>

            <div className={`p-8 rounded-xl border ${theme.card} group`}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                <Zap />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-3">Short-Form Video</h3>
              <p className={`text-sm font-medium mb-6 ${theme.textMuted}`}>Capturing attention quickly. Focusing on pacing, structure, timing and visual details to make shorts engaging from beginning to end.</p>
            </div>

            <div className={`p-8 rounded-xl border ${theme.card} group`}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                <Play />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-3">YouTube Content</h3>
              <p className={`text-sm font-medium mb-6 ${theme.textMuted}`}>Talking-head videos, vlogs, tutorials, and long-form formats, adapting the style to the content and audience.</p>
            </div>

            <div className={`p-8 rounded-xl border ${theme.card} group`}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                <Camera />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-3">Promotional Video</h3>
              <p className={`text-sm font-medium mb-6 ${theme.textMuted}`}>Polished promotional content for businesses, products and services, turning footage into clear and engaging videos.</p>
            </div>

            <div className={`p-8 rounded-xl border ${theme.card} group`}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                <Gamepad2 />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-3">Gaming & Gameplay</h3>
              <p className={`text-sm font-medium mb-6 ${theme.textMuted}`}>Creating gameplay videos, highlights, montages and short-form gaming content driven by my personal passion for gaming.</p>
            </div>

            <div className={`p-8 rounded-xl border ${theme.card} group`}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                <Briefcase />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-3">Social Media Marketing</h3>
              <p className={`text-sm font-medium mb-6 ${theme.textMuted}`}>Experience with social media strategy, giving me an understanding of how video fits into broader social presences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Work Section */}
      <section id="portfolio" className="py-24 px-6 relative z-10 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-black text-cyan-500 tracking-widest uppercase mb-2 skew-x-[-10deg]">Featured Work</h2>
          <h3 className="text-5xl font-black uppercase italic tracking-tighter mb-8">Selected Projects</h3>
          <p className={`max-w-2xl mx-auto font-medium mb-12 ${theme.textMuted}`}>
            My primary focus is short-form social media content, but my work also includes YouTube, promotional, and gaming-related projects.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={`aspect-video rounded-2xl border ${theme.glass} flex flex-col items-center justify-center group cursor-pointer overflow-hidden relative`}>
                <div className="absolute inset-0 bg-slate-800 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center backdrop-blur-md border border-cyan-500/50 group-hover:scale-110 transition-transform relative z-10">
                  <Play size={24} className="text-cyan-400 ml-1" />
                </div>
                <span className="mt-4 font-black uppercase tracking-widest text-sm relative z-10 text-white">Project_File_0{item}.mp4</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <footer id="contact" className="border-t py-24 px-6 relative z-10 border-white/10 bg-[#020204]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-6">Initiate Contact</h2>
            <p className={`text-lg font-medium leading-relaxed mb-10 ${theme.textMuted}`}>
              Have a video project you'd like to discuss? I'm available for freelance projects, collaborations and new creative opportunities. Tell me what you're working on and what you want to achieve.
            </p>

            <div className="space-y-6">
              <div className={`flex items-center gap-4 p-5 rounded-xl border ${theme.card}`}>
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 skew-x-[-10deg]">
                  <Mail size={24} className="skew-x-[10deg]" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-cyan-500">Secure Comm Link</p>
                  <a href="mailto:arefinshafi09@gmail.com" className="font-bold text-lg hover:text-cyan-400 transition-colors">arefinshafi09@gmail.com</a>
                </div>
              </div>
              <div className={`flex items-center gap-4 p-5 rounded-xl border ${theme.card}`}>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 skew-x-[-10deg]">
                  <MapPin size={24} className="skew-x-[10deg]" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-purple-500">Base of Operations</p>
                  <p className="font-bold text-lg">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-10 rounded-2xl border ${theme.glass}`}>
            <h3 className="text-2xl font-black uppercase tracking-wider mb-8 text-cyan-400">Send Details</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-black uppercase tracking-widest mb-2 ${theme.textMuted}`}>Name *</label>
                  <input type="text" className={`w-full px-4 py-3 rounded-sm border focus:outline-none transition-colors ${theme.input}`} />
                </div>
                <div>
                  <label className={`block text-xs font-black uppercase tracking-widest mb-2 ${theme.textMuted}`}>Email *</label>
                  <input type="email" className={`w-full px-4 py-3 rounded-sm border focus:outline-none transition-colors ${theme.input}`} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-black uppercase tracking-widest mb-2 ${theme.textMuted}`}>Project Type</label>
                  <input type="text" className={`w-full px-4 py-3 rounded-sm border focus:outline-none transition-colors ${theme.input}`} placeholder="e.g. YouTube, Short-form" />
                </div>
                <div>
                  <label className={`block text-xs font-black uppercase tracking-widest mb-2 ${theme.textMuted}`}>Budget (Optional)</label>
                  <input type="text" className={`w-full px-4 py-3 rounded-sm border focus:outline-none transition-colors ${theme.input}`} />
                </div>
              </div>
              <div>
                <label className={`block text-xs font-black uppercase tracking-widest mb-2 ${theme.textMuted}`}>Project Details *</label>
                <textarea rows="4" className={`w-full px-4 py-3 rounded-sm border focus:outline-none transition-colors resize-none ${theme.input}`} placeholder="Reference links, details, etc."></textarea>
              </div>
              <button className="w-full py-5 rounded-sm skew-x-[-10deg] bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-black uppercase tracking-wider hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all mt-4 group">
                <span className="flex items-center justify-center gap-2 skew-x-[10deg]">
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Transmit Message
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Play size={18} className="text-purple-500 group-hover:text-cyan-400 transition-colors" />
            <span className="font-black uppercase italic tracking-tighter group-hover:text-cyan-400 transition-colors">arefinshafi</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className={`text-xs font-black uppercase tracking-widest hover:text-cyan-400 transition-colors ${theme.textMuted}`}>Facebook</a>
            <a href="#" className={`text-xs font-black uppercase tracking-widest hover:text-cyan-400 transition-colors ${theme.textMuted}`}>Twitter</a>
            <a href="#" className={`text-xs font-black uppercase tracking-widest hover:text-cyan-400 transition-colors ${theme.textMuted}`}>YouTube</a>
          </div>
          <p className={`text-xs font-bold tracking-widest uppercase ${theme.textMuted}`}>© 2026 Arefin Shafi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}