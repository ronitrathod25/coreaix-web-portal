import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer id="footer" className="bg-bg-alt border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img src={logo} alt="CoreAIx Labs" className="h-12 w-auto" />
                            <span className="text-lg font-bold text-text-main">
                                CoreAIx <span className="text-primary">Labs</span>
                            </span>
                        </Link>
                        <p className="text-text-dim text-sm leading-relaxed">
                            Moving Mental Health from Reaction to Prevention through AI-Driven biomarker analysis.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-text-main font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-text-dim">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/technology" className="hover:text-primary transition-colors">Technology</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Contact */}
                    <div>
                        <h4 className="text-text-main font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-text-dim">
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-primary" />
                                <a href="mailto:contact@coreaixlabs.tech" className="hover:text-primary transition-colors">contact@coreaixlabs.tech</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="text-primary mt-1" />
                                <span className="leading-relaxed">Surat / Jamnagar,<br />Gujarat, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-text-main font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/coreaix-labs-llp/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full border border-slate-200 hover:bg-primary hover:text-white transition-all text-text-dim shadow-sm">
                                <Linkedin size={20} />
                            </a>

                        </div>
                        <div className="mt-6">
                            <div className="text-xs text-text-dim border border-slate-200 bg-white rounded px-3 py-2 inline-block shadow-sm">
                                DPIIT Recognized Startup<br />
                                <span className="text-primary font-semibold">DIPP243118</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-dim">
                    <p>&copy; {new Date().getFullYear()} CoreAIx Labs LLP. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-text-main transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-text-main transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
