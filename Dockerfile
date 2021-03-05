FROM node
EXPOSE 8080 
COPY . .
RUN npm install -g http-server
CMD http-server
