import google.generativeai as genai
import os
from dotenv import load_dotenv

# Carrega a chave
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

print("--- Modelos Disponíveis para Você ---")
try:
    for m in genai.list_models():
        # Queremos apenas modelos que geram conteúdo (generateContent)
        if 'generateContent' in m.supported_generation_methods:
            print(f"Nome: {m.name}")
except Exception as e:
    print(f"Erro ao listar modelos: {e}")