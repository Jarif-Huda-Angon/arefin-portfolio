import React, { useState, useEffect } from 'react';
import {
  Moon, Sun, Play, Download, MonitorPlay, Film,
  Clapperboard, Youtube, Gamepad2, Mail, Send,
  Github, Twitter, Linkedin, Instagram
} from 'lucide-react';

export default function Portfolio() {
  // Set dark mode as default based on client preference
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle body class for global Tailwind dark mode styles (optional, but handled via wrapper here)
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300 overflow-x-hidden relative">

        {/* Background glow effects for dark mode */}
        {isDarkMode && (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none"></div>
            <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>
          </>
        )}

        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto space-y-32">
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <span className="font-bold text-xl tracking-tight">arefinshafi.com</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 dark:text-slate-300">
          <a href="#home" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">About</a>
          <a href="#services" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
          </button>
          <a href="#contact" className="hidden sm:inline-block px-6 py-2.5 rounded-full bg-slate-900 dark:bg-transparent text-white dark:border dark:border-purple-500/50 hover:bg-slate-800 dark:hover:bg-purple-500/10 dark:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 font-medium">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-10 flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
      <div className="flex-1 space-y-8 z-10">
        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 text-sm font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
          Available for Freelance
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
          Professional <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
            Video Editor
          </span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          Crafting cinematic stories through precise, engaging video editing. Specialized in high-retention social media content and short-form videos that captivate audiences.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30">
            <Play size={20} fill="currentColor" /> View Showreel
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all font-semibold backdrop-blur-sm">
            <Download size={20} /> Download Resume
          </button>
        </div>

        <div className="flex gap-6 pt-8 border-t border-slate-200 dark:border-white/10">
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">3+</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24M+</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Total Views</p>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full max-w-xl relative z-10 flex justify-center lg:justify-end">
        {/* Profile Image with Neon Glassmorphism Effects */}
        <div className="relative w-full max-w-md aspect-square">
          {/* Animated Glow Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-4 rounded-full border border-cyan-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>

          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 rounded-full blur-2xl"></div>

          <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/20 dark:border-white/10 bg-white/10 dark:bg-slate-900/30 backdrop-blur-md shadow-[0_0_40px_rgba(168,85,247,0.2)] dark:shadow-[0_0_40px_rgba(168,85,247,0.3)] flex items-end justify-center">
            <img
              src="file_00000000bed88211b7346d15410d636a.png"
              alt="Arefin Shafi"
              className="w-full h-[95%] object-cover object-bottom drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent z-20 pointer-events-none"></div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl rounded-2xl p-4 flex items-center gap-3 animate-bounce shadow-purple-500/20">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Film size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Specialty</p>
              <p className="font-bold text-sm">Visual Storytelling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden relative border-2 border-slate-200 dark:border-white/10 p-2">
            <div className="w-full h-full rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
              {/* Editing Setup Image */}
              <img
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80"
                alt="Video Editing Setup"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                  <p className="font-mono text-sm">Premier Pro • After Effects • DaVinci Resolve</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full"></div>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase">A Little About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Hi, I'm Arefin Shafi</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A freelance video editor from Bangladesh. My freelancing journey started in 2021, focusing entirely on crafting compelling visual stories for social media and short-form platforms.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I specialize in turning raw footage into polished, engaging, and enjoyable experiences. I pay strict attention to pacing, structure, and the small details that make a video feel professional and dynamic.
          </p>
          <ul className="grid grid-cols-2 gap-3 text-slate-700 dark:text-slate-300 font-medium pt-4">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Clean & Professional</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Detail-Oriented</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Engaging & Dynamic</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Social-Media Focused</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const servicesList = [
    {
      title: "Social Media Video Editing",
      desc: "Creating engaging content tailored for Facebook, Instagram, TikTok, and YouTube with a focus on high retention.",
      icon: <MonitorPlay className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Promotional Video Editing",
      desc: "Polished promotional content for businesses, products, and services to turn viewers into customers.",
      icon: <Film className="w-8 h-8 text-cyan-500" />
    },
    {
      title: "Short-Form Video Editing",
      desc: "Capturing attention quickly with fast-paced, structured, and visually engaging short-form content.",
      icon: <Clapperboard className="w-8 h-8 text-pink-500" />
    },
    {
      title: "YouTube Video Editing",
      desc: "Long-form content editing including talking-head, vlogs, and tutorials adapted to your unique style.",
      icon: <Youtube className="w-8 h-8 text-red-500" />
    },
    {
      title: "Gaming & Gameplay Editing",
      desc: "Highlight reels, montages, and funny moments edited with perfect comedic timing and effects.",
      icon: <Gamepad2 className="w-8 h-8 text-green-500" />
    }
  ];

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase mb-2">What I Do</h2>
        <h3 className="text-4xl font-bold mb-4">My Services</h3>
        <p className="text-slate-600 dark:text-slate-400">I mainly create and edit video content for social media, focusing on clean visuals, good pacing, and content that fits the platform and audience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service, index) => (
          <div key={index} className="p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 inline-block">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-3">{service.title}</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {service.desc}
            </p>
            <a href="#contact" className="text-sm font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More <span className="text-lg">→</span>
            </a>
          </div>
        ))}

        {/* Call to action card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col justify-center items-center text-center">
          <h4 className="text-2xl font-bold mb-2">Have a specific project?</h4>
          <p className="text-purple-100 text-sm mb-6">Let's discuss how we can bring your vision to life.</p>
          <a href="#contact" className="px-6 py-2 bg-white text-purple-900 font-bold rounded-full hover:bg-slate-100 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2">

          <div className="p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden bg-slate-50 dark:bg-transparent">
            {/* Decorative background in dark mode */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-cyan-500/5 dark:block hidden"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Let's Work Together!</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
                Have a project in mind? Whether you need a short social media video, YouTube content, promotional video, or gaming content, I'm open to discussing your project.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-500 dark:text-slate-400">Email Me</h4>
                    <p className="font-medium text-lg">Arefinshafi09@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <p className="text-sm font-semibold mb-4 text-slate-500">Connect with me</p>
              <div className="flex gap-4">
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Linkedin} />
                <SocialIcon Icon={Youtube} />
              </div>
            </div>
          </div>

          <div className="p-10 lg:p-16 bg-white dark:bg-slate-900">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:text-white transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:text-white transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:text-white transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message <span className="text-red-500">*</span></label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:text-white transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold transition-colors mt-4">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transition-all">
      <Icon size={18} />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
            A
          </div>
          <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">arefinshafi.com</span>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Copyright © {new Date().getFullYear()} Arefin Shafi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}