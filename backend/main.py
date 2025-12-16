import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel("gemini-flash-latest")
def analisar_estante(caminho_imagem):
    imagem = genai.upload_file(caminho_imagem)
    prompt = """
    Aja como um livreiro especialista. Analise a imagem e identifique os livros.
    Retorne APENAS um objeto JSON (sem markdown ```json) seguindo este padrão estrito:
    {
        "livros_identificados": [{"titulo": "Nome", "autor": "Nome"}],
        "recomendacoes": [{"titulo": "Nome", "motivo": "Por que recomenda"}]
    }
    """
    resposta = model.generate_content([imagem, prompt])
    return resposta.text

if __name__ == "__main__":
    imagem_teste = "teste.jpg"
    
    if os.path.exists(imagem_teste):
        print(f"Lendo a imagem {imagem_teste}...")
        resultado = analisar_estante(imagem_teste)
        print("\n--- Resposta da IA ---")
        print(resultado)
    else:
        print(f"Erro: 0 arquivo '{imagem_teste}' não foi encontrado na pasta.")
