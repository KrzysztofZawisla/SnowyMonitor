FROM node:latest
ADD . /app
WORKDIR /app
RUN apt-get update && apt-get -y install libnss3-dev libgtk-3-0 libxss1 libasound2
RUN npm install
CMD ["npm", "start"] 