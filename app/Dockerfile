FROM node:lts-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Run
CMD ["npm", "run", "start"]