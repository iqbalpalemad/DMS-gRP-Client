FROM node:latest
WORKDIR /dms-grpc-client
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]