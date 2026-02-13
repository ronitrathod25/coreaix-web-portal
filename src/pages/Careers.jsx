import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Rocket, ArrowRight, ArrowUpRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Careers = () => {
    const benefits = [
        {
            icon: Cpu,
            title: "Work on the Edge",
            desc: "Move beyond web apps. Build real-time AI on custom hardware."
        },
        {
            icon: Brain,
            title: "Save Lives",
            desc: "Your code doesn't just serve ads; it diagnoses depression."
        },
        {
            icon: Rocket,
            title: "High-Velocity R&D",
            desc: "Ship fast, break things, publish papers."
        }
    ];

    const positions = [
        {
            title: "Deep Learning Research Intern",
            type: "Internship",
            desc: "Experience with PyTorch/TensorFlow. Passion for EEG/Signal Processing.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfUTl1KxOmtUJKmIskmFxzQ6jRQofd_mJzy7eAmP6YEictwTQ/viewform?usp=publish-editor"
        },
        {
            title: "Embedded Systems Intern",
            type: "Internship",
            desc: "ESP32/ARM architecture. C++ and RTOS experience required.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfUTl1KxOmtUJKmIskmFxzQ6jRQofd_mJzy7eAmP6YEictwTQ/viewform?usp=publish-editor"
        },
        {
            title: "Founding Engineer (Full Stack)",
            type: "Full-Time",
            desc: "React/Node.js master. Capable of building scalable medical dashboards.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfUTl1KxOmtUJKmIskmFxzQ6jRQofd_mJzy7eAmP6YEictwTQ/viewform?usp=publish-editor"
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-bg-dark">
                {/* Abstract Background Trace */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                </div>

                <div className="text-center relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-text-main tracking-tight"
                    >
                        Don't Just Write Code. <br />
                        <span className="text-primary text-glow">Rewrite Medicine.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-text-dim mb-8 font-light"
                    >
                        CoreAIx Labs is looking for relentless engineers to build the future of Neuro-Psychiatry.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <Button onClick={() => document.getElementById('positions').scrollIntoView({ behavior: 'smooth' })}>
                            Join the Mission
                        </Button>
                    </motion.div>
                </div>
            </Section>

            {/* Why Join Us */}
            <Section className="bg-bg-alt">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <Card key={i} delay={i * 0.1} className="hover:border-primary/50 transition-colors">
                            <benefit.icon className="text-primary mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-3 text-text-main">{benefit.title}</h3>
                            <p className="text-text-dim">{benefit.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Open Positions */}
            <Section id="positions" className="bg-bg-dark">
                <h2 className="text-3xl font-bold mb-12 text-center text-text-main">Open Positions</h2>
                <div className="space-y-4 max-w-3xl mx-auto">
                    {positions.map((pos, index) => (
                        <a
                            key={index}
                            href={pos.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group" // 'block' makes the whole anchor clickable
                        >
                            <Card className="flex flex-row justify-between items-center p-6 hover:border-primary/50 transition-all cursor-pointer hover:shadow-lg bg-white gap-4">
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                                        <h3 className="text-xl font-bold text-text-main leading-tight">{pos.title}</h3>
                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100 whitespace-nowrap">
                                            {pos.type}
                                        </span>
                                    </div>
                                    <p className="text-text-dim text-sm">{pos.desc}</p>
                                </div>

                                {/* Arrow Icon that moves on hover */}
                                <div className="text-text-dim group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 shrink-0">
                                    <ArrowRight size={24} />
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>

                {/* The Main CTA at the bottom */}
                <div className="mt-12 flex justify-center">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUTl1KxOmtUJKmIskmFxzQ6jRQofd_mJzy7eAmP6YEictwTQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full sm:w-auto px-8 py-4 text-lg shadow-blue-500/25 shadow-xl hover:shadow-2xl transition-all">
                            Apply for the Mission <ArrowUpRight className="ml-2" size={20} />
                        </Button>
                    </a>
                </div>
            </Section>
        </div >
    );
};

export default Careers;
