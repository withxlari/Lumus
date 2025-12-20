import { useState } from 'react'

function App() {
  const [arquivo, setArquivo] = useState(null)
  const [resposta, setResposta] = useState(null)

  const fazerAnalise = async () => {
    if (!arquivo) {
      alert("Por favor, selecione uma imagem primeiro!")
      return
    }

    const formData = new FormData()
    formData.append("arquivo", arquivo)

    try {
      const response = await fetch("http://127.0.0.1:8000/analisar_estante", {
        method: "POST",
        body: formData
      })

      const dados = await response.json()
      setResposta(dados)

    } catch (erro) {
      console.error("Deu erro:", erro)
      alert("Erro ao conectar com o servidor!")
    }
  }

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Lumus - The BookShelf Scanner</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setArquivo(e.target.files[0])}
      />

      <br /><br />

      <button onClick={fazerAnalise} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Analisar Minha Estante
      </button>

      {resposta && resposta.dados && resposta.dados.livros_identificados.map((livro, index) => (
        <div key={index} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
          <h3>{livro.titulo}</h3>
          <p><strong>Autor:</strong> {livro.autor}</p>
        </div>
      ))}

      {resposta && resposta.dados && resposta.dados.recomendacoes && (
        <div style={{ marginTop: "30px" }}>
          <h2>Recomendações para você:</h2>
          {resposta.dados.recomendacoes.map((rec, index) => (
            <div key={index} style={{ 
              border: "1px solid #8d6e63", 
              background: "#efebe9", 
              padding: "10px", 
              margin: "10px 0", 
              borderRadius: "5px",
              color: "#3e2723"
            }}>
              <h3>{rec.titulo}</h3>
              <p>{rec.motivo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App