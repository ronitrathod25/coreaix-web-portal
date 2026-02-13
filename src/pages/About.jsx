import React from 'react';
import { useLocation } from 'react-router-dom';
import { Linkedin, Award, User, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const About = () => {
    const { hash } = useLocation();

    React.useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    const leadership = [
        {
            name: "Ronit Rathod",
            role: "Co-Founder & CEO",
            image: "./src/assets/ronit.jpeg", // Placeholder
            quote: "Building the brain of AI.",
            badges: ["National Finalist HST’25 (IIT Mandi)", "Ventra Guard AI — Grant Winner"],
            socials: { linkedin: "https://www.linkedin.com/in/ronitrathod/" }
        },
        {
            name: "Manan Tarsariya",
            role: "Co-Founder & COO",
            image: "./src/assets/manan.jpeg", // Placeholder
            quote: "Engineering the hardware.",
            badges: ["Smart India Hackathon (Hardware) Finalist", "NASA Space Apps Nominee"],
            socials: { linkedin: "https://www.linkedin.com/in/manantarsariya/" }
        }
    ];

    const mentors = [
        { name: "Prof. Dhatri Pandya", role: "Assistant Professor, SCET" },
        { name: "Prof. Vandana Joshi", role: "Assistant Professor, SCET" }
    ];

    return (
        <div className="pt-20">
            <Section id="leadership">
                <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center text-text-main">Leadership</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {leadership.map((person, i) => (
                        <Card key={i} className="relative overflow-hidden group hover:border-primary transition-all duration-300">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

                            <div className="flex flex-col md:flex-row gap-6 mb-6">
                                {/* Profile Image */}
                                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-lg overflow-hidden border-2 border-slate-100 shadow-sm mx-auto md:mx-0">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2 gap-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-text-main">{person.name}</h2>
                                            <p className="text-primary font-medium">{person.role}</p>
                                        </div>
                                        <a href={person.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Linkedin size={24} className="text-text-dim hover:text-primary cursor-pointer transition-colors" />
                                        </a>
                                    </div>

                                    <blockquote className="text-text-dim italic text-sm border-l-2 border-slate-200 pl-3 my-3">
                                        "{person.quote}"
                                    </blockquote>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {person.badges.map((badge, j) => (
                                    <div key={j} className="flex items-center gap-2 text-xs text-text-dim">
                                        <Award size={14} className="text-primary" />
                                        <span>{badge}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="mentors" className="bg-bg-alt">
                <h2 className="text-3xl font-bold mb-12 text-center text-text-main">Mentors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {mentors.map((mentor, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white/50 rounded-lg border border-slate-200">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200">
                                <User className="text-text-dim" />
                            </div>
                            <div>
                                <h3 className="font-bold text-text-main">{mentor.name}</h3>
                                <p className="text-sm text-text-dim">{mentor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="contact" className="bg-bg-dark">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-text-main">Partner With Us</h2>
                    <p className="text-text-dim mb-10 text-lg">
                        CoreAIx Labs is currently operating in stealth mode with select clinical partners.
                        <br />
                        For investment inquiries or pilot deployment, reach out to our leadership directly.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        {/* Button 1: General Inquiries */}
                        <div
                            onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto group"
                        >
                            <Card className="flex flex-col items-center p-8 border-slate-800 bg-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 cursor-pointer h-full hover:scale-105">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                    <Send className="text-primary" size={28} />
                                </div>
                                <h3 className="font-bold text-xl text-text-main mb-2">General Inquiries</h3>
                                <p className="text-text-dim mb-4 text-sm">For pilot programs & technology</p>
                                <span className="text-primary font-medium border-b border-primary/30 pb-0.5 group-hover:border-primary transition-colors">
                                    contact@coreaixlabs.tech
                                </span>
                            </Card>
                        </div>

                        {/* Button 2: Investor Relations */}
                        <div
                            onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto group"
                        >
                            <Card className="flex flex-col items-center p-8 border-slate-800 bg-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 cursor-pointer h-full hover:scale-105">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                    <User className="text-primary" size={28} />
                                </div>
                                <h3 className="font-bold text-xl text-text-main mb-2">Investor Relations</h3>
                                <p className="text-text-dim mb-4 text-sm">For funding & strategic alliances</p>
                                <span className="text-primary font-medium border-b border-primary/30 pb-0.5 group-hover:border-primary transition-colors">
                                    Connect with CEO
                                </span>
                            </Card>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="form" className="bg-bg-alt">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-text-main">Get in Touch</h2>
                    <Card className="bg-white border-slate-200">
                        <ContactForm />
                    </Card>
                </div>
            </Section>
        </div>
    );
};



export default About;

const ContactForm = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', message: '', type: 'success' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "zoho_coreaixlabsllp",      // ✅ SERVICE ID
                "zoho_coreaixlabsllp",       // ✅ TEMPLATE ID
                formRef.current,
                "xY6wRSNpWf5CA1vJZ"       // ✅ PUBLIC KEY
            )
            .then(
                () => {
                    setLoading(false);
                    setModalConfig({
                        isOpen: true,
                        title: "Message Sent!",
                        message: "Thank you! We will get back to you soon ",
                        type: 'success'
                    });
                    formRef.current.reset();
                },
                (error) => {
                    console.error(error);
                    setLoading(false);
                    setModalConfig({
                        isOpen: true,
                        title: "Error",
                        message: "Something went wrong. Please try again ",
                        type: 'error'
                    });
                }
            );
    };

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-dim mb-1">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-text-main placeholder-text-dim/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-dim mb-1">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-text-main placeholder-text-dim/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-dim mb-1">Your Message</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-text-main placeholder-text-dim/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                        placeholder="How can we help you?"
                    />
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className="w-full justify-center"
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin mr-2" size={20} />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send size={18} className="ml-2" />
                        </>
                    )}
                </Button>
            </form>

            <Modal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                title={modalConfig.title}
                message={modalConfig.message}
                type={modalConfig.type}
            />
        </>
    );
};

