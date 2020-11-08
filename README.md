# payment_api (microservice that communicates with another microservice)

Features:

- Redis message queue implementaion

- Docker file 

- Api url for testing in postman 
  test url :  http://localhost:3002/payment/5fa6ae0e54480f328850ee38 method: 'get'


Dependency:

Redis 

`sudo systemctl status docker`
`sudo docker run --name test-redis -d redis`
`sudo docker ps`
`sudo docker exec -it test-redis sh`

To install dependency (  point to directories of all projects):

`npm install`

To run app: ( point to directories of all projects):

`npm start`

Local server

`localhost:3002`

