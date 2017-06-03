# HillsHack 2017
Code for a simple chat web application using Node.js and JQuery to present as
a workshop for students during Warren Hills High School's 2017 hackathon.

Based on this Socket.IO tutorial: https://socket.io/get-started/chat/.

Uses Docker to quickly package, install, and run the application.

Uses ngrok to provide a public url for the application running on localhost.

## Requirements
- Docker: https://www.docker.com
- ngrock [optional]: https://ngrok.com/download

## Run
```
> docker build -t chat-app .
> docker run -d -p 3000:3000 chat-app
```
