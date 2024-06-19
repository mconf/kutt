FROM node:22-alpine

RUN apk add --no-cache bash \
 && rm -rf /var/cache/apk/*

# Setting working directory. 
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Give permission to run script
RUN chmod +x ./wait-for-it.sh \
  # Build files
  && npm run build

EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]
