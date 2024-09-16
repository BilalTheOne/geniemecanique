"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/styles.css';

const LandingPage: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className={`font-sans text-center bg-[#0A2540] min-h-screen ${isNavVisible ? 'overflow-hidden' : ''}`}>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center bg-[#F2F2F2] p-5 shadow-custom border-custom w-full z-50">
        <div className="flex-1">
          <img src="/Logo.png" alt="Logo" className="h-12" />
        </div>
        <nav className="hidden md:flex flex-2 justify-end gap-8">
          <Link href="/" className="text-[#1B69B0] font-bold relative group">
            Acceuil
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#DF0024] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="/formation" className="text-[#1B69B0] font-bold relative group">
            Formation
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#DF0024] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="#preinscription" className="text-[#1B69B0] font-bold relative group">
            Preinscription
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#DF0024] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="#access" className="text-[#1B69B0] font-bold relative group">
            Access
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#DF0024] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="/login" className="text-[#DF0024] font-bold relative group">
            Login
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#1B69B0] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </nav>
        <button onClick={toggleNav} className="md:hidden text-[#1B69B0] font-bold relative z-50">
          <div className={`hamburger ${isNavVisible ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>
      <div className={`fixed top-0 right-0 w-2/3 h-full bg-[#F2F2F2] z-40 transition-transform transform ${isNavVisible ? 'translate-x-0' : 'translate-x-full'} md:hidden p-12`}>
        <nav className="flex flex-col items-start">
          <button onClick={toggleNav} className="text-[#1B69B0] font-bold mb-4 self-end">
            &#10005; {/* Close icon */}
          </button>
          <Link href="/" className="text-[#1B69B0] font-bold mb-4" onClick={toggleNav}>Acceuil</Link>
          <Link href="/formation" className="text-[#1B69B0] font-bold mb-4" onClick={toggleNav}>Formation</Link>
          <Link href="#preinscription" className="text-[#1B69B0] font-bold mb-4" onClick={toggleNav}>Preinscription</Link>
          <Link href="#access" className="text-[#1B69B0] font-bold mb-4" onClick={toggleNav}>Access</Link>
          <Link href="/login" className="text-[#DF0024] font-bold mb-4" onClick={toggleNav}>Login</Link>
        </nav>
      </div>
      <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${isNavVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'} z-30`} onClick={toggleNav}></div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#0A2540] p-10 pt-24">
        <h1 className="text-5xl font-bold text-white animate-slide-up md:text-5xl sm:text-3xl">LICENCE</h1>
        <h2 className="text-5xl font-bold text-white mt-4 animate-slide-up md:text-5xl sm:text-3xl text-center">GÉNIE ÉLECTROMÉCANIQUE ET SYSTÈME INDUSTRIEL</h2>
      </main>
      <section className="bg-white p-10">
        <div className="container mx-auto text-left">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-4">Objectifs :</h2>
          <p className="text-lg text-[#0A2540] mb-4">
            Le Master génie électromécanique & systèmes industriels a pour objectif une formation professionnelle visant à donner des compétences de haut niveau dans les domaines de Génie Électromécanique, électronique, électrotechnique et systèmes industriels.
          </p>
          <p className="text-lg text-[#0A2540] mb-4">
            La formation est adéquate avec le marché du travail permettant aux futurs lauréats de parvenir à un niveau équivalent à celui des ingénieurs d’état.
          </p>
          <p className="text-lg text-[#0A2540] mb-4">
            Le rôle de cette formation est de préparer les futurs lauréats pour mener à bien de gros projets techniques et de former des cadres de haut niveau ayant un savoir-faire technique et maitrisant les outils informatiques et managériales.
          </p>
          <p className="text-lg text-[#0A2540] mb-4">
            Ce master vise un haut niveau de qualification aux standards internationaux les plus exigeants et couvre les champs de la modélisation, de l’analyse et de la commande des systèmes électriques, pneumatique et hydraulique. Elle vise à acquérir et maîtriser les outils et les méthodes de conception et d’utilisation des systèmes ou des sous-systèmes industriels intégrant les nouvelles technologies.
          </p>
          <Link href="/formation" className="text-[#1B69B0] font-bold underline">
            En savoir plus sur la formation
          </Link>
        </div>
      </section>
      <section className="bg-[#0A2540] p-10">
        <div className="container mx-auto text-left">
          <h2 className="text-4xl font-bold text-white mb-4">Location :</h2>
          <p className="text-lg text-white mb-4">
            Our school is located in the heart of the city, providing easy access to various amenities and transportation options.
          </p>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.0373711210273!2d-6.916338824660182!3d32.89718017783602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda69d51a4eccd09%3A0x2fe5964c283fb57a!2sENSA%20-%20National%20School%20of%20Applied%20Sciences!5e0!3m2!1sen!2sma!4v1726423115194!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 1s ease-out forwards;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 24px;
          height: 24px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 3px;
          background-color: #1B69B0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          header {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          nav {
            flex-direction: column;
            gap: 1rem;
          }

          main {
            padding: 2rem;
            padding-top: 6rem;
          }

          h1, h2 {
            text-align: center;
            font-size: 2rem;
          }

          section {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
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
  );
};

export default LandingPage;