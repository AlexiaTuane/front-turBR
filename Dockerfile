# Estágio de construção
FROM node:16-alpine as builder

WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# Copie os arquivos construídos do estágio de construção para o diretório de publicação do Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# O Nginx é iniciado automaticamente, não é necessário um comando CMD

# A porta padrão do Nginx é 80, mas você pode configurá-la conforme necessário
EXPOSE 80
