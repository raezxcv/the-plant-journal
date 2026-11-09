import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { HerbariumProvider } from './context/HerbariumContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PlantIndexPage } from './pages/PlantIndexPage';
import { BotanicalProfilePage } from './pages/BotanicalProfilePage';
import { JournalAboutPage } from './pages/JournalAboutPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

const NotFoundPage: React.FC = () => (
  <div className="mx-auto max-w-[1380px] px-4 py-20 text-center sm:px-8 lg:px-12">
    <h1 className="text-4xl" style={{ color: 'var(--ink-primary)' }}>
      Unindexed Herbarium Sheet
    </h1>
    <p className="mt-3 text-base" style={{ color: 'var(--ink-secondary)' }}>
      The specimen or journal folio you requested could not be located in Issue No. 14.
    </p>
    <Link
      to="/"
      className="btn-press mt-6 inline-flex items-center border px-5 py-2.5 text-sm font-semibold"
      style={{
        backgroundColor: 'var(--accent-botanical)',
        borderColor: 'var(--accent-botanical)',
        color: 'var(--canopy-text-primary)',
      }}
    >
      Return to Issue No. 14 Cover Dispatch
    </Link>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <HerbariumProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/index" element={<PlantIndexPage />} />
              <Route path="/plants/:slug" element={<BotanicalProfilePage />} />
              <Route path="/journal" element={<JournalAboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HerbariumProvider>
    </BrowserRouter>
  );
};

export default App;

