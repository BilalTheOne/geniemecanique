"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const FormationPage: React.FC = () => {
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
      <main className="flex flex-col items-start justify-center min-h-screen bg-[#0A2540] p-10 pt-24">
        <section className="flex flex-col md:flex-row text-left text-white mt-10 w-full px-5">
          <div className="flex-1 p-5 rounded-lg bg-[#1A3A5F] mb-5 md:mb-0">
            <h2 className="text-3xl font-bold">Débouchés :</h2>
            <p className="mt-4">Les débauchés de la formation :</p>
            <ul className="list-disc list-inside mt-2">
              <li>Cadre de haut niveau en milieu industrielle</li>
              <li>Responsable technique</li>
              <li>Cadre technique pour la conduite de projet technique</li>
              <li>Conduite des systèmes industriels</li>
              <li>Dimensionner des installations électrique, pneumatique, hydraulique…</li>
              <li>Automatiser des processus industriels</li>
              <li>Mener de grand projet en Génie Électromécanique</li>
            </ul>
          </div>
          <div className="flex-1 p-5 md:ml-5">
            <img src="/image2.jpg" alt="Description of image" className="rounded-lg shadow-lg w-full" />
          </div>
        </section>
        <section className="flex flex-col md:flex-row text-left text-white mt-10 w-full px-5">
          <div className="flex-1 p-5 rounded-lg bg-[#1A3A5F] mb-5 md:mb-0">
            <h2 className="text-3xl font-bold">Contenu pédagogique :</h2>
            <div className="mt-4 flex flex-col md:flex-row">
              <div className="flex-1 p-5 border-b md:border-b-0 md:border-r border-gray-400 mb-5 md:mb-0">
                <h3 className="text-2xl font-bold">MASTER 1</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>Modélisation et simulation des machines électriques</li>
                  <li>Electronique de puissance avancée</li>
                  <li>Automatisme industriel</li>
                  <li>Mécanismes industriels et transmission de puissance</li>
                  <li>Machines hydrauliques et pneumatiques</li>
                  <li>Anglais technique et terminologie</li>
                  <li>Régulation industrielle</li>
                  <li>Management des organisations</li>
                  <li>Automatique et système asservis</li>
                  <li>Construction mécanique</li>
                  <li>Maintenance et sûreté de fonctionnement</li>
                  <li>IoT</li>
                </ul>
              </div>
              <div className="flex-1 p-5 md:ml-5">
                <h3 className="text-2xl font-bold">MASTER 2</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>Modélisation et simulation des systèmes électromécaniques</li>
                  <li>Management de qualité, hygiène, sécurité et environnement (QHSE)</li>
                  <li>API et Supervision industrielle</li>
                  <li>Gestion de la production industrielle</li>
                  <li>Conception Fabrication Assistée par Ordinateur CFAO</li>
                  <li>Capteurs intelligents et programmation instrumentale</li>
                  <li>Projet de Fin d’étude</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col text-left text-white mt-10 w-full px-5">
          <div className="p-5 rounded-lg bg-[#1A3A5F]">
            <h2 className="text-3xl font-bold">Informations pratiques</h2>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">Condition d’accès :</h3>
              <p className="mt-2">Accès en Master M1 : Licence technique, Programme BAC+3 ou équivalent</p>
              <p className="mt-2">Accès en Master M2 : Licence technique + an d’expériences, Programme BAC+3 + Deux années d’expériences ou équivalent</p>
              <h3 className="text-2xl font-bold mt-4">Frais De la Formation :</h3>
              <p className="mt-2">Cout de la Formation M1+M2 : 50 000,00 Dhs</p>
              <p className="mt-2">Frais d’inscription : 600,00 Dhs</p>
              <h3 className="text-2xl font-bold mt-4">Organisation de la formation :</h3>
              <p className="mt-2">La formation est étalée sur deux années, les Samedi et Dimanche, à l’ENSA Khouribga de 9h à 16H</p>
              <h3 className="text-2xl font-bold mt-4">Contact :</h3>
              <p className="mt-2">Pr. El Barbri Noureddine</p>
              <p className="mt-2">Téléphone : 06 60 62 49 78</p>
              <p className="mt-2">Messagerie : elbarbri.noureddine@yahoo.fr</p>
            </div>
          </div>
        </section>
      </main>
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

          .flex-1 {
                                 .flex-1 {
                        width: 100%;
                        margin-bottom: 1rem;
                      }
          
                      .md\\:ml-5 {
                        margin-left: 0;
                      }
          
                      .md\\:border-r {
                        border-right: none;
                      }
          
                      .md\\:border-b-0 {
                        border-bottom: 1px solid #ccc;
                      }
          
                      .md\\:mb-0 {
                        margin-bottom: 1rem;
                      }
          
                      .md\\:flex-row {
                        flex-direction: column;
                      }
          
                      .md\\:flex-col {
                        flex-direction: column;
                      }
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
          
          export default FormationPage;