import { useState } from 'react'
import Header from './components/Header'

function App() {
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
    <>
      <Header />
      <main style={styles.main}>
        <section style={styles.uploadSection}>
          <h2 style={styles.sectionTitle}>Analisar Estante</h2>
          
          <div style={styles.uploadArea}>
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
          </div>

          {preview && (
            <div style={styles.previewContainer}>
              <img src={preview} alt="Preview" style={styles.previewImage} />
              <button 
                onClick={handleAnalyze} 
                style={styles.analyzeButton}
                disabled={loading}
              >
                {loading ? 'Analisando...' : 'Analisar Livros'}
              </button>
            </div>
          )}

          {loading && (
            <div style={styles.loader}>
              <div style={styles.spinner}></div>
              <p>Identificando livros...</p>
            </div>
          )}
        </section>

        {books.length > 0 && (
          <section style={styles.resultsSection}>
            <h2 style={styles.sectionTitle}>Livros Identificados</h2>
            <div style={styles.booksGrid}>
              {books.map((book, idx) => (
                <div key={idx} style={styles.bookCard}>
                  <h3 style={styles.bookTitle}>{book.titulo}</h3>
                  <p style={styles.bookAuthor}>por {book.autor}</p>
                  <p style={styles.bookGenre}>{book.genero}</p>
                  <p style={styles.bookSynopsis}>{book.sinopse}</p>
                  <div style={styles.rating}>
                    {'★'.repeat(Math.floor(book.nota))}
                    {'☆'.repeat(5 - Math.floor(book.nota))}
                    <span style={styles.ratingNumber}>{book.nota}/5</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {recommendations.length > 0 && (
          <section style={styles.recommendationsSection}>
            <h2 style={styles.sectionTitle}>Recomendações para Você</h2>
            <div style={styles.booksGrid}>
              {recommendations.map((book, idx) => (
                <div key={idx} style={styles.recommendationCard}>
                  <h3 style={styles.bookTitle}>{book.titulo}</h3>
                  <p style={styles.bookSynopsis}>{book.motivo}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}

const styles = {
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  uploadSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '2em',
    color: 'var(--azul-medio)',
    marginBottom: '30px',
    fontWeight: '400',
  },
  uploadArea: {
    marginBottom: '20px',
  },
  fileInput: {
    display: 'none',
  },
  uploadLabel: {
    display: 'inline-block',
    padding: '15px 40px',
    backgroundColor: 'var(--azul-medio)',
    color: 'var(--quase-branco)',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1em',
    transition: 'all 0.3s ease',
    border: 'none',
  },
  previewContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  previewImage: {
    maxWidth: '400px',
    maxHeight: '300px',
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    border: `2px solid var(--bege-escuro)`,
    objectFit: 'contain',
  },
  analyzeButton: {
    padding: '15px 40px',
    backgroundColor: 'var(--azul-pastel)',
    color: 'var(--azul-medio)',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1em',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  loader: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    color: 'var(--azul-medio)',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid var(--bege-claro)',
    borderTop: '4px solid var(--azul-medio)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  resultsSection: {
    marginTop: '60px',
  },
  recommendationsSection: {
    marginTop: '60px',
    padding: '40px',
    backgroundColor: 'var(--bege-claro)',
    borderRadius: '12px',
  },
  booksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '25px',
  },
  bookCard: {
    backgroundColor: 'var(--quase-branco)',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: `1px solid var(--bege-escuro)`,
  },
  recommendationCard: {
    backgroundColor: 'var(--quase-branco)',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: `2px solid var(--azul-pastel)`,
  },
  bookTitle: {
    fontSize: '1.3em',
    marginBottom: '8px',
    color: 'var(--azul-medio)',
  },
  bookAuthor: {
    fontSize: '0.95em',
    marginBottom: '8px',
    color: 'var(--bege-escuro)',
    fontStyle: 'italic',
  },
  bookGenre: {
    fontSize: '0.85em',
    marginBottom: '12px',
    color: 'var(--azul-pastel)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  bookSynopsis: {
    fontSize: '0.9em',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: 'var(--azul-medio)',
  },
  rating: {
    fontSize: '1.2em',
    color: 'var(--azul-medio)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  ratingNumber: {
    fontSize: '0.8em',
    color: 'var(--bege-escuro)',
  },
}

export default App