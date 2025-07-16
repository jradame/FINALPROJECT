import React, { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  const [modal, setModal] = useState({ isOpen: false, type: '', content: null });

  const openModal = (type, content = null) =>
    setModal({ isOpen: true, type, content });

  const closeModal = () =>
    setModal({ isOpen: false, type: '', content: null });

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    closeModal();
    document.dispatchEvent(new CustomEvent('reset-home'));
  };

  return (
    <>
      <Header
        onHome={handleHomeClick}
        onAbout={() => openModal('about')}
        onContact={() => openModal('contact')}
      />
      <Home onPosterClick={movie => openModal('details', movie)} />
      <Modal
        isOpen={modal.isOpen}
        type={modal.type}
        content={modal.content}
        onClose={closeModal}
      />
    </>
  );
}

export default App;



