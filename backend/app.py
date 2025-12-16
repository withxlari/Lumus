from fastapi import FastAPI, UploadFile, File
from main import analisar_estante

app = FastAPI()

@app.get("/")
def home():
    return {"mensagem": "O servidor do Lumus está ON!"}

@app.post("/analisar_estante")
async def analisar(arquivo: UploadFile):
    # salvar o arquivo recebido como "temp.jpg"
    with open("temp.jpg", "wb") as buffer:
        conteudo = await arquivo.read()
        buffer.write(conteudo)
    
    # chamar a ia
    print("Analisando imagem...")
    resultado = analisar_estante("temp.jpg")

    # devolver o json pra quem pediu
    return {"dados": resultado}