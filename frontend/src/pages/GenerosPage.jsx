import { useState } from 'react'

const generosData = {
  'Romance': {
    cor: '#E8A0BF',
    livros: [
      { titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', nota: 4.8 },
      { titulo: 'O Morro dos Ventos Uivantes', autor: 'Emily Brontë', nota: 4.6 },
      { titulo: 'Razão e Sensibilidade', autor: 'Jane Austen', nota: 4.5 }
    ]
  },
  'Fantasia': {
    cor: '#9B7EBD',
    livros: [
      { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', nota: 4.9 },
      { titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', nota: 4.8 },
      { titulo: 'As Crônicas de Nárnia', autor: 'C.S. Lewis', nota: 4.7 }
    ]
  },
  'Ficção Científica': {
    cor: '#6B9BD1',
    livros: [
      { titulo: 'Duna', autor: 'Frank Herbert', nota: 4.7 },
      { titulo: '1984', autor: 'George Orwell', nota: 4.8 },
      { titulo: 'Fundação', autor: 'Isaac Asimov', nota: 4.6 }
    ]
  },
  'Suspense': {
    cor: '#6B7280',
    livros: [
      { titulo: 'O Silêncio dos Inocentes', autor: 'Thomas Harris', nota: 4.7 },
      { titulo: 'Garota Exemplar', autor: 'Gillian Flynn', nota: 4.5 },
      { titulo: 'O Código Da Vinci', autor: 'Dan Brown', nota: 4.4 }
    ]
  },
  'Clássicos': {
    cor: '#A67B5B',
    livros: [
      { titulo: 'Dom Casmurro', autor: 'Machado de Assis', nota: 4.5 },
      { titulo: 'Grande Sertão: Veredas', autor: 'Guimarães Rosa', nota: 4.6 },
      { titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', nota: 4.7 }
    ]
  },
  'Desenvolvimento Pessoal': {
    cor: '#72B896',
    livros: [
      { titulo: 'Os 7 Hábitos das Pessoas Altamente Eficazes', autor: 'Stephen Covey', nota: 4.6 },
      { titulo: 'Mindset', autor: 'Carol S. Dweck', nota: 4.5 },
      { titulo: 'O Poder do Hábito', autor: 'Charles Duhigg', nota: 4.7 }
    ]
  }
}

function GenerosPage() {
  const [generoSelecionado, setGeneroSelecionado] = useState(null)

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Explorar por Gênero</h1>
        <p style={styles.subtitle}>
          Descubra os livros mais lidos do momento em cada categoria
        </p>

        <div style={styles.generosGrid}>
          {Object.entries(generosData).map(([genero, dados]) => (
            <div
              key={genero}
              onClick={() => setGeneroSelecionado(generoSelecionado === genero ? null : genero)}
              style={{
                ...styles.generoCard,
                background: `linear-gradient(135deg, ${dados.cor}15 0%, ${dados.cor}30 100%)`,
                border: `3px solid ${generoSelecionado === genero ? dados.cor : 'transparent'}`,
                boxShadow: generoSelecionado === genero 
                  ? `0 8px 24px ${dados.cor}40` 
                  : '0 4px 12px rgba(0,0,0,0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = `0 12px 28px ${dados.cor}40`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = generoSelecionado === genero 
                  ? `0 8px 24px ${dados.cor}40`
                  : '0 4px 12px rgba(0,0,0,0.08)'
              }}
            >
              <h3 style={{
                ...styles.generoTitle,
                color: dados.cor,
                filter: 'brightness(0.8)'
              }}>
                {genero}
              </h3>
              <p style={styles.generoCount}>
                {dados.livros.length} livros em destaque
              </p>
            </div>
          ))}
        </div>

        {generoSelecionado && (
          <div style={styles.livrosSection}>
            <h2 style={styles.sectionTitle}>
              <span style={{
                ...styles.generoBar,
                background: generosData[generoSelecionado].cor
              }}></span>
              Mais Lidos em {generoSelecionado}
            </h2>

            <div style={styles.livrosGrid}>
              {generosData[generoSelecionado].livros.map((livro, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.livroCard,
                    border: `2px solid ${generosData[generoSelecionado].cor}30`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.borderColor = generosData[generoSelecionado].cor
                    e.currentTarget.style.boxShadow = `0 8px 20px ${generosData[generoSelecionado].cor}20`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = `${generosData[generoSelecionado].cor}30`
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{
                    ...styles.rankBadge,
                    background: generosData[generoSelecionado].cor
                  }}>
                    {index + 1}
                  </div>

                  <h3 style={styles.livroTitle}>{livro.titulo}</h3>
                  <p style={styles.livroAutor}>por {livro.autor}</p>

                  <div style={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{
                          color: i < Math.round(livro.nota) ? generosData[generoSelecionado].cor : 'var(--bege-claro)',
                          fontSize: '18px'
                        }}
                      >
                        ★
                      </span>
                    ))}
                    <span style={styles.ratingNumber}>{livro.nota}/5</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 120px)',
    background: 'linear-gradient(180deg, var(--branco-suave) 0%, var(--bege-fundo) 100%)',
    padding: '60px'
  },
  wrapper: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  title: {
    fontFamily: 'Georgia, serif',
    fontSize: '42px',
    color: 'var(--azul-escuro)',
    textAlign: 'center',
    marginBottom: '16px',
    fontWeight: 'bold'
  },
  subtitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '18px',
    color: 'var(--cinza-texto)',
    textAlign: 'center',
    marginBottom: '48px',
    maxWidth: '700px',
    margin: '0 auto 48px'
  },
  generosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '64px'
  },
  generoCard: {
    borderRadius: '16px',
    padding: '32px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  generoTitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  generoCount: {
    fontFamily: 'Georgia, serif',
    fontSize: '14px',
    color: 'var(--cinza-texto)',
    opacity: 0.8
  },
  livrosSection: {
    background: 'white',
    borderRadius: '16px',
    padding: '48px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    animation: 'slideIn 0.4s ease'
  },
  sectionTitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '32px',
    color: 'var(--azul-escuro)',
    marginBottom: '32px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  generoBar: {
    width: '8px',
    height: '40px',
    borderRadius: '4px'
  },
  livrosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px'
  },
  livroCard: {
    background: 'var(--branco-suave)',
    borderRadius: '12px',
    padding: '24px',
    transition: 'all 0.3s ease'
  },
  rankBadge: {
    color: 'white',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '16px'
  },
  livroTitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '20px',
    color: 'var(--azul-escuro)',
    marginBottom: '8px',
    fontWeight: 'bold'
  },
  livroAutor: {
    fontFamily: 'Georgia, serif',
    fontSize: '15px',
    color: 'var(--azul-medio)',
    marginBottom: '16px',
    fontStyle: 'italic'
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  ratingNumber: {
    marginLeft: '8px',
    fontFamily: 'Georgia, serif',
    color: 'var(--azul-medio)',
    fontWeight: 'bold'
  }
}

export default GenerosPage