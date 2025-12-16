import { useState } from 'react'

function App() {
  const [arquivo, setArquivo] = useState(null)
  const [resposta, setResposta] = useState(null)

  const fazerAnalise = async () => {
    if (!arquivo) {
      alert("Por favor, seleione uma imagem primeiro!")
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

      {resposta && (
        <div style={{ marginTop: "20px", background: "#f0f0f0", padding: "20px", color: "#000" }}>
          <h3>Resultado:</h3>
          <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(resposta, null, 2)}</pre>
          </div>
      )}
    </div>
  )
}

export default App