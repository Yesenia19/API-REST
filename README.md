# API-REST
API-REST

## crear la base de datos
'''sql
sqlite3 clientes.sqlite < clientes.sql
'''
## correr el servidor
''' bash
uvicorn main:app --reload
'''
## ejecutar la prueba
''' bash
pytest -v
'''
usar -vv para mostrar completos los errores

## crear un contenedor
