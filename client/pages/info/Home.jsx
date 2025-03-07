import Navbar from '../../components/block/Navbar.jsx';
import Footer from '../../components/block/Footer.jsx';
import { features } from '../../ext/constant.jsx';


const Home = () => {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 to-black text-white" id=''>
            {/* Hero Section */}
            <Navbar />
            <section id="hero" className="bg-neutral-900 min-h-[70vh] pt-16">
                {/* Main Landing... */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
                        <div className="w-full lg:w-1/2 space-y-8 animate__animated animate__fadeInLeft">
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Level Up Your <span className="text-emerald-500">Esports Tournament</span> Management
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl max-w-lg">
                            The Ultimate Esports Discord Bot for Tournament Management and Server Administration
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    className="px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors transform hover:scale-105">
                                    Start Tournament
                                </button>
                                <a href="https://youtu.be/bVJWdVGHxRc?si=uu4KNL3Qf0w-kBMt">
                                    <button
                                        className="px-8 py-4 border border-emerald-500 text-emerald-500 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-105">
                                        Watch Demo
                                    </button>
                                </a>
                            </div>
                            <div className="flex items-center gap-6 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <span>Easy Setup</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animate__animated animate__fadeInRight">
                            <div className="relative">
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-30">
                                </div>
                                <div className="relative bg-neutral-800 p-6 rounded-lg">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-neutral-700 p-4 rounded-lg">
                                            <div className="text-emerald-500 text-2xl font-bold">800+</div>
                                            <div className="text-gray-400">Servers</div>
                                        </div>
                                        <div className="bg-neutral-700 p-4 rounded-lg">
                                            <div className="text-emerald-500 text-2xl font-bold">500K+</div>
                                            <div className="text-gray-400">Members</div>
                                        </div>
                                        <div className="bg-neutral-700 p-4 rounded-lg">
                                            <div className="text-emerald-500 text-2xl font-bold">98%</div>
                                            <div className="text-gray-400">Uptime</div>
                                        </div>
                                        <div className="bg-neutral-700 p-4 rounded-lg">
                                            <div className="text-emerald-500 text-2xl font-bold">24/7</div>
                                            <div className="text-gray-400">Support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="bg-neutral-800 py-20 px-10">
                {/* Features */}
                <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Spruce Provides</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to manage your esports community.</p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 *:z-10">
                        {features.map((val, index) => (
                            <div key={index}
                                className="bg-neutral-700 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
                                <div className="h-12 w-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{val.title}</h3>
                                <p className="text-gray-400">{val.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps section */}
            <section id="how-spruce-works" className="bg-neutral-900 py-20 px-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Spruce Works</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Get your tournament up and running in three simple steps</p>
                    </div>

                    <div className="relative">

                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-500/30"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">

                            <div className="bg-neutral-700 rounded-xl p-8 relative animate__animated animate__fadeInLeft">
                                <div
                                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    1</div>
                                <div className="text-center mt-4">
                                    <h3 className="text-xl font-semibold text-white mb-4">Create Tournament</h3>
                                    <p className="text-gray-400 mb-6">Set up your tournament details, rules, and prize pool in
                                        minutes</p>
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M12 4v16m8-8H4"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-neutral-700 rounded-xl p-8 relative animate__animated animate__fadeInUp"
                                style={{ animationDelay: '0.2s' }}>
                                <div
                                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    2</div>
                                <div className="text-center mt-4">
                                    <h3 className="text-xl font-semibold text-white mb-4">Open Registration</h3>
                                    <p className="text-gray-400 mb-6">Let teams and players to register with the easiest registration process.</p>
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-neutral-700 rounded-xl p-8 relative animate__animated animate__fadeInRight"
                                style={{ animationDelay: '0.4s' }}>
                                <div
                                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    3</div>
                                <div className="text-center mt-4">
                                    <h3 className="text-xl font-semibold text-white mb-4">Start Playing</h3>
                                    <p className="text-gray-400 mb-6">After Filling slots manage teams with ease.</p>
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                                                </path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors animate__animated animate__fadeInUp"
                            style={{ animationDelay: '0.6s' }}>
                            Start Your Tournament Now
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;