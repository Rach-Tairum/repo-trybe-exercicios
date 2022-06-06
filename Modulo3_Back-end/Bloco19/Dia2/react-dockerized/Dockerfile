# De onde se baseia a nossa imagem, base para criarmos a nossa imagem
FROM node:14-alpine AS build

# diretorio base para a execução dos comandos
WORKDIR /app 

# copia diretórios e arquivos pra nossa imagem
COPY package*.json ./

# O que será rodado assim que nossa imagem for carregada no container
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT ["nginx", "-g", "daemon off;"]