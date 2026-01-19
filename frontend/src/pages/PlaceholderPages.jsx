export function ContatoPage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Entre em Contato</h1>
        <p style={styles.text}>
          Em breve você poderá entrar em contato conosco através deste espaço. Estamos trabalhando para trazer a melhor experiência!
        </p>
      </div>
    </div>
  )
}

export function PerfilPage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Seu Perfil</h1>
        <p style={styles.text}>
          Em breve você poderá gerenciar seu perfil e suas preferências de leitura. Funcionalidade em desenvolvimento!
        </p>
      </div>
    </div>
  )
}

export function FavoritosPage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Meus Favoritos</h1>
        <p style={styles.text}>
          Aqui você poderá salvar seus livros favoritos e criar listas de leitura personalizadas. Funcionalidade em desenvolvimento!
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 120px)',
    background: 'linear-gradient(180deg, var(--branco-suave) 0%, var(--bege-fundo) 100%)',
    padding: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    textAlign: 'center',
    maxWidth: '600px'
  },
  title: {
    fontFamily: 'Georgia, serif',
    fontSize: '42px',
    color: 'var(--azul-escuro)',
    marginBottom: '24px',
    fontWeight: 'bold'
  },
  text: {
    fontFamily: 'Georgia, serif',
    fontSize: '18px',
    color: 'var(--cinza-texto)',
    lineHeight: '1.6'
  }
}