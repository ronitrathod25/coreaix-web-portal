import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Lock, Zap, MousePointer2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';
import ParticleBackground from '../components/ui/ParticleBackground';

const Home = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <ParticleBackground />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark/90 pointer-events-none" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-text-main">
                            Intelligence <span className="text-primary text-glow">Beyond Code.</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-text-dim mb-8 font-light">
                            India’s First AI-Driven Neuro-Psychiatric Diagnostic Engine.
                        </h2>
                        <p className="text-base text-text-dim/80 mb-10 tracking-widest uppercase text-xs">
                            Moving Mental Health from Reaction to Prevention
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={() => window.location.href = '/technology'}>Explore Technology</Button>
                            <Button variant="secondary" onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>Contact Us</Button>
                        </div>
                    </motion.div>
                </div>

                {/* Badges */}
                <div className="absolute bottom-10 right-10 flex gap-4 hidden md:flex">
                    <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded border border-slate-200 text-xs text-text-dim shadow-sm">
                        DPIIT Startup India
                    </div>
                    <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded border border-slate-200 text-xs text-text-dim shadow-sm">
                        SCET
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <Section id="problem" className="bg-bg-dark">
                <div className="text-center mb-16">
                    <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">The Challenge</h3>
                    <h2 className="text-4xl font-bold text-text-main">The Invisible Crisis.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card delay={0.1}>
                        <Activity className="text-primary mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-3 text-text-main">The Gap</h3>
                        <p className="text-text-dim leading-relaxed">
                            Mental healthcare is reactive. Patients seek help only when symptoms are severe, often too late for preventive care.
                        </p>
                    </Card>
                    <Card delay={0.2}>
                        <Zap className="text-primary mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-3 text-text-main">The Shortage</h3>
                        <p className="text-text-dim leading-relaxed">
                            India has only 0.75 psychiatrists per 100k people. Traditional diagnosis is unscalable and expensive.
                        </p>
                    </Card>
                    <Card delay={0.3}>
                        <Lock className="text-primary mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-3 text-text-main">The Subjectivity</h3>
                        <p className="text-text-dim leading-relaxed">
                            PHQ-9 & self-reports are biased and easily faked. diagnosis needs objective physiological data.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* The Solution */}
            <Section id="solution" className="bg-gradient-to-b from-bg-dark to-bg-alt">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">The Solution</h3>
                        <h2 className="text-4xl font-bold text-text-main mb-6">We Don’t Guess Feelings. <br />We Measure Biomarkers.</h2>

                        <div className="space-y-6">
                            {[
                                { title: "Objective Diagnosis", desc: "16-channel EEG + HRV deep learning analysis." },
                                { title: "Impossible to Fake", desc: "Direct physiological signal analysis bypasses bias." },
                                { title: "Real-Time Inference", desc: "<200ms clinical inference latency." },
                                { title: "Closed Loop System", desc: "Active neuro-regulation cues for immediate relief." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                                        <Brain size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-main">{item.title}</h4>
                                        <p className="text-text-dim">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-100/50 blur-[100px] rounded-full" />
                        <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 aspect-square flex items-center justify-center shadow-lg">
                            {/* Abstract visualization of Brain/EEG */}
                            <div className="relative w-64 h-64 border border-blue-200 rounded-full animate-pulse flex items-center justify-center">
                                <div className="w-48 h-48 border border-blue-300 rounded-full flex items-center justify-center">
                                    <div className="w-32 h-32 bg-blue-50/50 rounded-full backdrop-blur-md flex items-center justify-center border border-blue-100">
                                        <Brain size={64} className="text-primary animate-bounce-slow" />
                                    </div>
                                </div>
                                {/* Orbiting nodes */}
                                <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] -translate-x-1/2 -translate-y-1/2" />
                                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] -translate-x-1/2 translate-y-1/2" />
                                <div className="absolute left-0 top-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Home;
