import React, { useState, useEffect } from 'react';

const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8 0L9.4 6.6L16 8L9.4 9.4L8 16L6.6 9.4L0 8L6.6 6.6L8 0Z" fill="currentColor"/>
  </svg>
);

const SectionLabel = ({ text, color = "text-primary" }: { text: string, color?: string }) => (
  <div className={`flex items-center gap-3 ${color} font-display text-sm tracking-[0.08em] uppercase mb-4`}>
    <Sparkle />
    <span>{text}</span>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-accent ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-background'}`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-display font-semibold text-2xl">
          <Sparkle className="text-primary w-6 h-6" />
          <span>NOHAS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-sans">
          <a href="#" className="text-jet font-medium hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-jet font-medium hover:text-primary transition-colors">About</a>
          <a href="#" className="text-jet font-medium hover:text-primary transition-colors">Awareness</a>
          <a href="#" className="text-jet font-medium hover:text-primary transition-colors">Events</a>
          <a href="#" className="text-jet font-medium hover:text-primary transition-colors">Get Involved</a>
          <a href="#" className="text-jet font-medium hover:text-primary transition-colors">Contact</a>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white font-display text-sm tracking-widest uppercase px-6 py-3 rounded-sm transition-colors shadow-sm hidden md:block">
          Join Us
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="min-h-[90vh] bg-background relative pt-20 flex items-center overflow-hidden">
    <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center relative z-10 py-12 md:py-0">
      <div>
        <SectionLabel text="Promoting Awareness" />
        <h1 className="text-5xl md:text-[72px] leading-tight mb-6">Building Healthier Smiles Across Pakistan</h1>
        <p className="text-lg text-foreground mb-10 max-w-xl">
          Join the National Oral Health Awareness Society in our mission to promote oral health education and provide accessible dental care to communities everywhere.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary hover:bg-primary-hover text-white font-display text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-colors shadow-sm">
            Explore Our Work
          </button>
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-display text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative mt-8 md:mt-0">
        <div className="w-full aspect-[4/5] bg-accent/40 rounded-[32px] overflow-hidden relative border border-accent">
          <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Smiling family" className="w-full h-full object-cover mix-blend-overlay opacity-90" />
        </div>
      </div>
    </div>
  </section>
);

const ImpactStats = () => (
  <section className="bg-background-alt py-16 md:py-20 border-y border-stone/20">
    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-stone/30 md:divide-x">
        {[
          { number: "50+", label: "Awareness Campaigns" },
          { number: "120k", label: "Communities Reached" },
          { number: "15k", label: "Dental Checkups" },
          { number: "850", label: "Volunteers" }
        ].map((stat, i) => (
          <div key={i} className="text-center px-4">
            <div className="text-5xl md:text-6xl font-serif text-primary mb-2">{stat.number}</div>
            <div className="font-display text-sm uppercase tracking-widest text-jet">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutPreview = () => (
  <section className="bg-background py-20 md:py-[80px]">
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <SectionLabel text="Who We Are" />
        <h2 className="text-4xl md:text-5xl mb-6">Dedicated to better oral health for all.</h2>
        <p className="mb-6 text-foreground text-lg">
          We believe that oral health is a fundamental right. Our society bridges the gap between dental professionals and underserved communities, bringing education and preventive care to where it's needed most.
        </p>
        <a href="#" className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:gap-3 transition-all">
          <span>Our Story</span>
          <span>→</span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4 pt-12">
          <img src="https://images.unsplash.com/photo-1598256989800-fea5ce51426c?auto=format&fit=crop&w=600&q=80" alt="Dental care" className="w-full h-64 object-cover rounded-2xl" />
        </div>
        <div className="space-y-4">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" alt="Community education" className="w-full h-64 object-cover rounded-2xl" />
        </div>
      </div>
    </div>
  </section>
);

const CorePillars = () => (
  <section className="bg-primary py-20 md:py-[80px] text-white">
    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
      <div className="text-center mb-16 flex flex-col items-center">
        <SectionLabel text="Our Mission" color="text-accent" />
        <h2 className="text-4xl md:text-5xl text-white">Three Pillars of Health</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Prevention", desc: "Equipping individuals with the tools and knowledge to stop dental issues before they start.", icon: "Shield" },
          { title: "Education", desc: "Running workshops in schools and community centers to build lasting healthy habits.", icon: "Book" },
          { title: "Community", desc: "Building a network of volunteers and professionals dedicated to serving the underserved.", icon: "Users" }
        ].map((pillar, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-6 text-primary">
              <Sparkle />
            </div>
            <h3 className="text-2xl text-white mb-3">{pillar.title}</h3>
            <p className="text-white/80">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AwarenessGrid = () => (
  <section className="bg-background py-20 md:py-[80px]">
    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
      <SectionLabel text="Learn & Discover" />
      <h2 className="text-4xl md:text-5xl mb-12">Awareness Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "Childhood Oral Health", "Gum Disease", "Fluoride & Prevention", 
          "Diabetes & Oral Health", "Nutrition & Teeth", "Oral Cancer Awareness"
        ].map((topic, i) => (
          <div key={i} className="bg-background-alt p-8 rounded-2xl group hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(47,94,58,0.12)] transition-all duration-300 cursor-pointer">
            <div className="text-primary mb-4"><Sparkle /></div>
            <h3 className="text-xl mb-2">{topic}</h3>
            <p className="text-sm text-foreground/80 mb-6">Essential information and resources regarding {topic.toLowerCase()}.</p>
            <div className="flex justify-end text-primary group-hover:translate-x-1 transition-transform">
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EventsPreview = () => (
  <section className="bg-background-alt py-20 md:py-[80px]">
    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
      <SectionLabel text="Join Our Mission" />
      <h2 className="text-4xl md:text-5xl mb-12">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="bg-background rounded-2xl overflow-hidden group hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(47,94,58,0.12)] transition-all duration-300 border border-stone/20">
            <div className="p-6">
              <div className="bg-primary text-white text-xs font-display uppercase tracking-widest inline-block px-3 py-1 rounded-sm mb-4">
                Oct {15 + i}, 2026
              </div>
              <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">Community Dental Camp {i + 1}</h3>
              <p className="text-sm text-stone flex items-center gap-2 mb-4">
                <span>📍</span> Lahore, Pakistan
              </p>
              <p className="text-foreground/80 text-sm mb-6">Free dental checkups and hygiene kits distribution for local families.</p>
              <a href="#" className="text-primary font-display font-semibold text-sm uppercase tracking-widest hover:underline">
                View Event
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-display text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-colors">
          See All Events
        </button>
      </div>
    </div>
  </section>
);

const GetInvolved = () => (
  <section className="bg-primary py-24 md:py-[120px] text-center relative overflow-hidden">
    <div className="absolute left-10 top-1/2 -translate-y-1/2 text-accent/20 w-32 h-32 hidden md:block"><Sparkle className="w-full h-full" /></div>
    <div className="absolute right-10 top-1/2 -translate-y-1/2 text-accent/20 w-32 h-32 hidden md:block"><Sparkle className="w-full h-full" /></div>
    
    <div className="max-w-2xl mx-auto px-4 relative z-10">
      <h2 className="text-4xl md:text-5xl text-white mb-6">Ready to make an impact?</h2>
      <p className="text-white/90 text-lg mb-10">Whether you are a dental professional, a student, or someone who cares about community health, there is a place for you at NOHAS.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-primary hover:bg-background font-display text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-colors">
          Become a Volunteer
        </button>
        <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-display text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-colors">
          Partner With Us
        </button>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="bg-background py-20 md:py-[80px]">
    <div className="max-w-xl mx-auto px-4 text-center">
      <h3 className="text-2xl mb-2">Stay Updated</h3>
      <p className="text-foreground/80 mb-8">Subscribe to our newsletter for the latest awareness campaigns and events.</p>
      <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Email Address" 
          className="flex-1 bg-transparent border border-stone px-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors"
        />
        <button className="bg-primary hover:bg-primary-hover text-white font-display text-sm tracking-[0.1em] uppercase px-6 py-3 rounded-sm transition-colors">
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-jet pt-16 pb-8 border-t border-jet">
    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 text-white font-display font-semibold text-2xl mb-4">
            <Sparkle className="text-secondary w-6 h-6" />
            <span>NOHAS</span>
          </div>
          <p className="text-stone text-sm">Promoting Awareness. Building Healthier Smiles.</p>
        </div>
        <div>
          <h4 className="text-white font-display uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="space-y-3 text-stone text-sm">
            <li><a href="#" className="hover:text-background transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-background transition-colors">Events</a></li>
            <li><a href="#" className="hover:text-background transition-colors">Get Involved</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display uppercase tracking-widest text-sm mb-6">Resources</h4>
          <ul className="space-y-3 text-stone text-sm">
            <li><a href="#" className="hover:text-background transition-colors">Awareness Topics</a></li>
            <li><a href="#" className="hover:text-background transition-colors">Dental Clinics</a></li>
            <li><a href="#" className="hover:text-background transition-colors">Volunteer Portal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display uppercase tracking-widest text-sm mb-6">Contact</h4>
          <ul className="space-y-3 text-stone text-sm">
            <li>info@nohas.org.pk</li>
            <li>+92 300 1234567</li>
            <li>Lahore, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-stone text-sm">
        <p>&copy; {new Date().getFullYear()} NOHAS. Designed for a Healthier Pakistan.</p>
        <div className="flex gap-4">
          {/* Placeholder for social icons */}
          <a href="#" className="hover:text-secondary transition-colors">IN</a>
          <a href="#" className="hover:text-secondary transition-colors">FB</a>
          <a href="#" className="hover:text-secondary transition-colors">X</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactStats />
      <AboutPreview />
      <CorePillars />
      <AwarenessGrid />
      <EventsPreview />
      <GetInvolved />
      <Newsletter />
      <Footer />
    </div>
  );
}