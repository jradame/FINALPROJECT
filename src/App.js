import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  const [modal, setModal] = useState({ isOpen: false, type: '', content: null });
  const homeRef = useRef(null);
  const [resetFlag, setResetFlag] = useState(false); // for triggering reset

  const openModal = (type, content = null) =>
    setModal({ isOpen: true, type, content });

  const closeModal = () =>
    setModal({ isOpen: false, type: '', content: null });

  const handleHomeClick = () => {
    setResetFlag(true); // tells Home to reset
    if (homeRef.current?.scrollIntoView) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    closeModal();
  };

  const handleResetComplete = () => {
    setResetFlag(false); // Home finished resetting
  };

  return (
    <>
      <Header
        onHome={handleHomeClick}
        onAbout={() => openModal('about')}
        onContact={() => openModal('contact')}
      />
      <div ref={homeRef}>
        <Home
          onPosterClick={(movie) => openModal('details', movie)}
          reset={resetFlag}
          onResetComplete={handleResetComplete}
        />
      </div>
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





