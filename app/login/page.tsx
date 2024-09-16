"use client";
import React from 'react';
import Link from 'next/link';

const theme = {
  background: '#0A2540',
  headerBackground: '#F2F2F2',
  headerText: '#1B69B0',
  headerHighlight: '#DF0024',
  formBackground: '#1E1E1E',
  formBorder: '#2C2C2C',
  formText: '#FFFFFF',
  inputBackground: '#2C2C2C',
  inputBorder: '#606060',
  buttonBackground: '#DF0024', // Red
  buttonText: '#FFFFFF',
  buttonHoverBackground: '#FFFFFF', // White
  buttonHoverText: '#DF0024', // Red
};

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans text-center" style={{ backgroundColor: theme.background, minHeight: '100vh' }}>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-5 shadow-custom border-custom w-full z-50" style={{ backgroundColor: theme.headerBackground }}>
        <div className="flex-1">
          <img src="/Logo.png" alt="Logo" className="h-12" />
        </div>
        <nav className="flex-2 flex justify-end gap-8">
          <Link href="/" className="font-bold relative group" style={{ color: theme.headerText }}>
            Acceuil
            <span className="absolute left-0 bottom-0 w-full h-1 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundColor: theme.headerHighlight }}></span>
          </Link>
          <Link href="/formation" className="font-bold relative group" style={{ color: theme.headerText }}>
            Formation
            <span className="absolute left-0 bottom-0 w-full h-1 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundColor: theme.headerHighlight }}></span>
          </Link>
          <Link href="#preinscription" className="font-bold relative group" style={{ color: theme.headerText }}>
            Preinscription
            <span className="absolute left-0 bottom-0 w-full h-1 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundColor: theme.headerHighlight }}></span>
          </Link>
          <Link href="#access" className="font-bold relative group" style={{ color: theme.headerText }}>
            Access
            <span className="absolute left-0 bottom-0 w-full h-1 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundColor: theme.headerHighlight }}></span>
          </Link>
          <Link href="#login" className="font-bold relative group" style={{ color: theme.headerHighlight }}>
            Login
            <span className="absolute left-0 bottom-0 w-full h-1 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundColor: theme.headerText }}></span>
          </Link>
        </nav>
      </header>
      <main className="pt-20">
        <section id="login" className="flex justify-center items-center min-h-screen">
          <div className="p-8 rounded shadow-md w-full max-w-md" style={{ backgroundColor: theme.formBackground, borderColor: theme.formBorder, borderWidth: '1px' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.formText }}>Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-left mb-2" style={{ color: theme.formText }}>Username:</label>
                <input type="text" id="username" name="username" className="w-full p-2 rounded" style={{ backgroundColor: theme.inputBackground, borderColor: theme.inputBorder, borderWidth: '1px', color: theme.formText }} />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-left mb-2" style={{ color: theme.formText }}>Password:</label>
                <input type="password" id="password" name="password" className="w-full p-2 rounded" style={{ backgroundColor: theme.inputBackground, borderColor: theme.inputBorder, borderWidth: '1px', color: theme.formText }} />
              </div>
              <button
                type="submit"
                className="w-full p-2 rounded"
                style={{ backgroundColor: theme.buttonBackground, color: theme.buttonText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.buttonHoverBackground;
                  e.currentTarget.style.color = theme.buttonHoverText;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.buttonBackground;
                  e.currentTarget.style.color = theme.buttonText;
                }}
              >
                Login
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-white p-10 text-[#0A2540]">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; 2023 National School of Applied Sciences. All rights reserved.</p>
          <p className="mb-4">Contact us: info@ensa.ma | +212 123 456 789</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#0A2540]">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#0A2540]">
              Twitter
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0A2540]">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;