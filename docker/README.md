# API-REST
API-REST

## crear la imagen del docker
'''bash
docker build -t api_rest:10.06.22 .
'''

## crear un contenedor
'''bash
docker run -it -v "$PWD"/code:/home/code --net:host --name api_rest -h api_rest api_rest:10.06.22
'''