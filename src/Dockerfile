FROM node:18

WORKDIR /app

# Copia solo los archivos de dependencias primero
COPY package*.json ./

# Instala dependencias dentro del contenedor
RUN npm install

# Copia el resto del código
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
