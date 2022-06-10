
from fastapi.testclient import TestClient
from main import app

#verificar que se conecta a la tabla 
clientes = TestClient(app)

def test_index():
    response = clientes.get("/")
    #la respuesta que se reciba debe ser 200
    assert response.status_code == 200
    #el response debe dar lo que se indica
    assert response.json() == {"message": "Hello world"}
