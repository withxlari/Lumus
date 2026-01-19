import { useState } from 'react'

function AnalisarPage() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])
  const [recommendations, setRecommendations] = useState([])

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => setPreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = async () => {
    if (!selectedFile) return

    setLoading(true)
    const formData = new FormData()
    formData.append('arquivo', selectedFile)

    try {
      const response = await fetch('http://localhost:8000/analisar_estante', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      
      const resultado = data.dados
      setBooks(resultado.livros_identificados || [])
      setRecommendations(resultado.recomendacoes || [])
    } catch (error) {
      console.error('Erro:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Analisar Estante</h1>
        <p style={styles.subtitle}>
          Envie uma foto da sua estante de livros e descubra informações detalhadas sobre cada título
        </p>

        <div style={styles.uploadBox}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={styles.fileInput}
            id="file-upload"
          />
          <label htmlFor="file-upload" style={styles.uploadLabel}>
            {preview ? 'Trocar Imagem' : 'Escolher Imagem'}
          </label>

          {preview && (
            <div style={styles.previewContainer}>
              <img src={preview} alt="Preview" style={styles.previewImage} />
              
              <button 
                onClick={handleAnalyze} 
                style={styles.analyzeButton}
                disabled={loading}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.target.style.background = '#A0824D'
                    e.target.style.transform = 'translateY(-2px)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.target.style.background = 'var(--dourado)'
                    e.target.style.transform = 'translateY(0)'
                  }
                }}
              >
                {loading ? 'Analisando...' : 'Analisar Livros'}
              </button>

              {loading && (
                <div style={styles.spinner}></div>
              )}
            </div>
          )}
        </div>

        {books.length > 0 && (
          <>
            <h2 style={styles.sectionTitle}>Livros Identificados</h2>
            <div style={styles.booksGrid}>
              {books.map((book, idx) => (
                <div 
                  key={idx} 
                  style={styles.bookCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)'
                    e.currentTarget.style.borderColor = 'var(--azul-claro)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
                    e.currentTarget.style.borderColor = 'var(--bege-claro)'
                  }}
                >
                  <h3 style={styles.bookTitle}>{book.titulo}</h3>
                  <p style={styles.bookAuthor}>por {book.autor}</p>
                  <p style={styles.bookGenre}>{book.genero}</p>
                  <p style={styles.bookSynopsis}>{book.sinopse}</p>
                  <div style={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{
                          color: i < Math.round(book.nota) ? 'var(--dourado)' : 'var(--bege-claro)',
                          fontSize: '18px'
                        }}
                      >
                        ★
                      </span>
                    ))}
                    <span style={styles.ratingNumber}>{book.nota}/5</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {recommendations.length > 0 && (
          <div style={styles.recommendationsSection}>
            <h2 style={styles.sectionTitle}>Recomendações para Você</h2>
            <div style={styles.booksGrid}>
              {recommendations.map((rec, idx) => (
                <div 
                  key={idx} 
                  style={styles.recommendationCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(184, 149, 106, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
                  }}
                >
                  <h3 style={styles.bookTitle}>{rec.titulo}</h3>
                  <p style={styles.bookSynopsis}>{rec.motivo}</p>
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
  uploadBox: {
    background: 'white',
    borderRadius: '16px',
    padding: '48px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    textAlign: 'center',
    marginBottom: '48px'
  },
  fileInput: {
    display: 'none'
  },
  uploadLabel: {
    display: 'inline-block',
    background: 'var(--azul-medio)',
    color: 'white',
    padding: '16px 40px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontFamily: 'Georgia, serif',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(107, 140, 174, 0.3)'
  },
  previewContainer: {
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px'
  },
  previewImage: {
    maxWidth: '500px',
    maxHeight: '400px',
    borderRadius: '12px',
    border: '3px solid var(--bege-medio)',
    objectFit: 'contain',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  analyzeButton: {
    background: 'var(--dourado)',
    color: 'white',
    border: 'none',
    padding: '16px 40px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontFamily: 'Georgia, serif',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(184, 149, 106, 0.3)'
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid var(--bege-claro)',
    borderTop: '4px solid var(--azul-medio)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  sectionTitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '32px',
    color: 'var(--azul-escuro)',
    marginBottom: '32px',
    fontWeight: 'bold'
  },
  booksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
    marginBottom: '64px'
  },
  bookCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    border: '2px solid var(--bege-claro)'
  },
  recommendationsSection: {
    background: 'linear-gradient(135deg, var(--bege-fundo) 0%, var(--azul-fundo) 100%)',
    borderRadius: '16px',
    padding: '48px',
    marginTop: '48px'
  },
  recommendationCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    border: '2px solid var(--dourado)'
  },
  bookTitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '20px',
    color: 'var(--azul-escuro)',
    marginBottom: '8px',
    fontWeight: 'bold'
  },
  bookAuthor: {
    fontFamily: 'Georgia, serif',
    fontSize: '15px',
    color: 'var(--azul-medio)',
    marginBottom: '8px',
    fontStyle: 'italic'
  },
  bookGenre: {
    fontFamily: 'Georgia, serif',
    fontSize: '14px',
    color: 'var(--bege-escuro)',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 'bold'
  },
  bookSynopsis: {
    fontFamily: 'Georgia, serif',
    fontSize: '15px',
    color: 'var(--cinza-texto)',
    lineHeight: '1.6',
    marginBottom: '16px'
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

export default AnalisarPage