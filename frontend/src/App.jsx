import { useState } from 'react'

function App() {
  const [arquivo, setArquivo] = useState(null)
  const [resposta, setResposta] = useState(null)

  const fazerAnalise = async () => {
    if (!arquivo) {
      alert("Por favor, seleione uma imagem primeiro!")
      return
    }
  }
}