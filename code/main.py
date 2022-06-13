from fastapi import FastAPI
import sqlite3
#nos lo muestre en una lista
from typing import List
#valida el formato
from pydantic import BaseModel

class Respuesta(BaseModel):
    mensaje:str

class Cliente(BaseModel):
    id_cliente:int 
    nombre:str 
    email:str


app = FastAPI()
#valida el formato sea igual a de respuesta
@app.get("/", response_model=Respuesta) #endpoint
async def index(): # creamos una clase de manera asincrona
    return  {"mensaje":"API REST"}

@app.get("/clientes/", response_model=List[Cliente])
async def clientes():
    #conexion a una bd cierra automaticamente el archivo que se utilice
    with sqlite3.connect('sql/clientes.sqlite') as connection:
        connection.row_factory=sqlite3.Row
        #cursor para realizar las operaciones en la BD
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM clientes")
        #ordena los formatos en json
        response = cursor.fetchall()
        return response

@app.get("/clientes/{id}", response_model=List[Cliente])
async def clientes(id: int):
    #conexion a una bd cierra automaticamente el archivo que se utilice
    with sqlite3.connect('sql/clientes.sqlite') as connection:
        connection.row_factory=sqlite3.Row
        #cursor para realizar las operaciones en la BD
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM clientes where id_cliente={}".format(id))
        #ordena los formatos en json
        response = cursor.fetchall()
        return response
