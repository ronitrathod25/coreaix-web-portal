import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Technology', path: '/technology' },
        { name: 'About Us', path: '/about' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
            scrolled || isOpen ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="CoreAIx Labs" className="h-14 w-auto" />
                        <span className="text-xl font-bold tracking-tight text-text-main">
                            CoreAIx <span className="text-primary">Labs</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    location.pathname === link.path ? "text-primary" : "text-text-dim hover:text-text-main"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            variant="primary"
                            className="px-5 py-2 text-sm"
                            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Us
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-text-main"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg">
                    <div className="px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block text-base font-medium text-text-dim hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            variant="primary"
                            className="w-full justify-center"
                            onClick={() => {
                                setIsOpen(false);
                                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
