FROM node:18.17.1 
WORKDIR /index
COPY . /index
RUN npm install
EXPOSE 3000
CMD ["node","index.js"]
