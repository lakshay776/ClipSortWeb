import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-container">
            <nav className="navbar">
                <div className="logo">
                    <span className="logo-icon">🎞️</span> ClipSort
                </div>
                <div className="nav-links">
                    <a href="#features">Features</a>
                    <a href={`${import.meta.env.BASE_URL}ClipSort-setup.zip`} className="download-btn-small" download>Download</a>
                </div>
            </nav>

            <header className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Intelligent Clip Organization <br />
                        <span className="gradient-text">For Video Editors</span>
                    </h1>
                    <p className="hero-subtitle">
                        Drag, drop, and let AI sort your footage into A-Rolls, B-Rolls, and Waste.
                        Stop wasting hours on file management.
                    </p>
                    <div className="hero-actions">
                        <a href={`${import.meta.env.BASE_URL}ClipSort-0.0.0-win.zip`} className="download-btn-large" download>
                            Download for Windows
                            <span className="version-tag">v0.0.0</span>
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="app-mockup">
                        <div className="mockup-screen">
                            <div className="mockup-header"></div>
                            <div className="mockup-body">
                                <img
                                    src={`${import.meta.env.BASE_URL}clipsortScreenshot.png`}
                                    alt="App Screenshot"
                                    className="mockup-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="features" className="features">
                <h2 className="section-title">Why ClipSort?</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📂</div>
                        <h3>Smart Sorting</h3>
                        <p>Automatically categorizes clips into scripted A-Roll, usable B-Roll, and waste.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Instant Rename</h3>
                        <p>Renames files based on your script content using fuzzy matching.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Local & Secure</h3>
                        <p>All processing happens locally on your machine. Your footage never leaves your drive.</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} ClipSort. All rights reserved.</p>
                    <div className="footer-links">
                        <p>Built by Lakshay Jagga</p>
                        <div className="social-icons">
                            <a href="https://github.com/lakshayjagga" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                            <a href="https://www.linkedin.com/in/lakshay-jagga/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                            <a href="mailto:lakshayjagga@gmail.com" className="social-link">Gmail</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
