function Header({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'analisar', label: 'ANALISAR LIVROS' },
    { id: 'generos', label: 'GÊNEROS' },
    { id: 'contato', label: 'CONTATO' },
    { id: 'perfil', label: 'PERFIL' },
    { id: 'favoritos', label: 'FAVORITOS' }
  ]

  return (
    <header style={styles.header}>
      <div 
        style={styles.logoContainer}
        onClick={() => onNavigate('home')}
      >
        <img src="/logo.png" alt="Lumus" style={styles.logo} />
      </div>

      <nav style={styles.nav}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              ...styles.navButton,
              color: currentPage === item.id ? 'var(--azul-escuro)' : 'var(--azul-medio)',
              fontWeight: currentPage === item.id ? '600' : '500',
              borderBottom: currentPage === item.id ? '3px solid var(--dourado)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== item.id) {
                e.target.style.background = 'rgba(107, 140, 174, 0.1)'
                e.target.style.color = 'var(--azul-escuro)'
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== item.id) {
                e.target.style.background = 'none'
                e.target.style.color = 'var(--azul-medio)'
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

const styles = {
  header: {
    background: 'linear-gradient(135deg, #D9E5F0 0%, #E8DED3 100%)',
    padding: '20px 60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    gap: '80px'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  logo: {
    height: '70px',
    width: 'auto'
  },
  nav: {
    display: 'flex',
    gap: '40px',
    alignItems: 'center'
  },
  navButton: {
    background: 'none',
    border: 'none',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
    cursor: 'pointer',
    padding: '10px 8px',
    borderRadius: '0',
    transition: 'all 0.3s ease',
    letterSpacing: '0.5px'
  }
}

export default Header