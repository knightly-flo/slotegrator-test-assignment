FROM nginx:latest

RUN apt-get update && apt-get install -y nodejs

# WORKDIR /app

COPY package*.json ./
COPY index.js ./

CMD node index.js
