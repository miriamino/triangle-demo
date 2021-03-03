FROM ubuntu
COPY . /triangle
WORKDIR /triangle
ARG DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y nodejs npm
RUN npm install -g http-server
CMD http-server
