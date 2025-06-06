import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Twitter, Github, Heart } from 'lucide-react';
import { DiscordIcon } from '../../ext/icons.jsx';
import { footerSections } from '../../ext/constant.jsx';
import { SUPPORT_SERVER, GITHUB } from '../../config.js';
import {scrollToTop} from "../../ext/helper.jsx"

const Footer = (className) => {
    useEffect(()=>{
        scrollToTop();
    })
    return (
        <footer className={`${className} bg-gray-900 backdrop-blur-lg `}>
            <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                            {/* <Bot className="h-8 w-8 text-indigo-500 mr-2" /> */}
                            <Link to={"/"} className="text-2xl font-bold text-emerald-500">Spruce</Link>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Elevate your Discord server with the most comprehensive esports and community management bot. Built for competitive gaming communities.
                        </p>
                        <div className="flex space-x-4">
                            <Link to={`${SUPPORT_SERVER}`} className="text-gray-400 hover:text-white transition-colors">
                                <DiscordIcon className="h-6 w-6" />
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-6 w-6" />
                            </Link>
                            <Link to={`${GITHUB}`} className="text-gray-400 hover:text-white transition-colors">
                                <Github className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation sections */}
                    {Object.entries(footerSections).map(([key, section]) => (
                        <div key={key} className="space-y-4">
                            <h3 className="text-white font-semibold cursor-pointer hover:text-cyan-100">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <Link to={`${link.url}`} className="text-gray-400 hover:text-emerald-500 transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-800 *:cursor-pointer">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">800+</p>
                        <p className="text-gray-400 text-sm">Servers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">300+</p>
                        <p className="text-gray-400 text-sm">Tournaments</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">1M+</p>
                        <p className="text-gray-400 text-sm">Commands Used</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">98%</p>
                        <p className="text-gray-400 text-sm">Uptime</p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Spruce. All rights reserved.
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                            <span>Made with</span>
                            <Heart className="h-4 w-4 mx-1 text-red-500" />
                            <span>for the Esports Community</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;