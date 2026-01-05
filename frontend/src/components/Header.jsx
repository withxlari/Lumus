function Header() {
    return (
        <header style={styles.header}>
            <img src="/logo.png" alt="Lumus" style={styles.logo} />
        </header>
    )
}

const styles = {
  header: {
    backgroundColor: '#D5E0E8',
    padding: '15px 15px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  logo: {
    height: '80px',
    width: 'auto',
    marginLeft: '300px',
  }
}

export default Header