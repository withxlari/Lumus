import { useState } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AnalisarPage from './pages/AnalisarPage'
import GenerosPage from './pages/GenerosPage'
import { ContatoPage, PerfilPage, FavoritosPage } from './pages/PlaceholderPages'
import './colors.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'analisar':
        return <AnalisarPage />
      case 'generos':
        return <GenerosPage />
      case 'contato':
        return <ContatoPage />
      case 'perfil':
        return <PerfilPage />
      case 'favoritos':
        return <FavoritosPage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <>
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </>
  )
}

export default App