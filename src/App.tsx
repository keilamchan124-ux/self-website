/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Work />
        <Services />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

