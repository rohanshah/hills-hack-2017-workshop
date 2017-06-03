# HillsHack 2017
Code for a simple chat web application using Node.js and JQuery to present as
a workshop for students during Warren Hills High School's 2017 hackathon.

## Dependencies
### Docker
You can get the Windows or Mac installer from https://www.docker.com

### ngrock [optional]
You can get the Windows or Mac installer from https://ngrok.com/download

## Run
```
> docker build -t chat-app .
> docker run -d -p 3000:3000 chat-app
```
