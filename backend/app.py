import json
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from main import analisar_estante

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"mensagem": "O servidor do Lumus está ON!"}

@app.post("/analisar_estante")
async def analisar(arquivo: UploadFile):
    with open("temp.jpg", "wb") as buffer:
        conteudo = await arquivo.read()
        buffer.write(conteudo)
    
    print("Analisando imagem...")
    resultado_texto = analisar_estante("temp.jpg")

    try:
        resultado_limpo = json.loads(resultado_texto)
    except:
        resultado_limpo = resultado_texto

    return {"dados": resultado_limpo}