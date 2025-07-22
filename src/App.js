import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Modal from './components/Modal';
import Footer from './components/Footer';

// ============================
// App Component
// ============================
function App() {
  const [modal, setModal] = useState({ open: false, type: '', content: null });
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [type, setType] = useState('movie');

  const handleSearch = async (query) => {
    if (!query) return;
    setSearching(true);
    const endpoint = type === 'movie' ? 'movie' : 'tv';
    const TMDB_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/${endpoint}?api_key=${TMDB_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    setSearchResults(data.results.slice(0, 6));
    setSearching(false);
  };

  const goHome = () => {
    setSearchResults([]);
    setSearching(false);
    closeModal();
    window.scrollTo(0, 0);
  };

  const openModal = (type, content = null) =>
    setModal({ open: true, type, content });
  const closeModal = () =>
    setModal({ open: false, type: '', content: null });

  return (
    <>
      <Header
        onHome={goHome}
        onAbout={() => openModal('about')}
        onContact={() => openModal('contact')}
      />
      <Home
        onPosterClick={(item) => openModal('details', item)}
        onSearch={handleSearch}
        type={type}
        setType={setType}
        searchResults={searchResults}
        searching={searching}
      />
      <Modal
        isOpen={modal.open}
        type={modal.type}
        content={modal.content}
        onClose={closeModal}
      />
      <Footer />
    </>
  );
}

export default App;














