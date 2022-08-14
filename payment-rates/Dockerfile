FROM mhart/alpine-node:10
RUN apk add python make gcc g++ linux-headers --virtual build-dependencies
RUN npm config set unsafe-perm true && yarn config set unsafe-perm true
RUN mkdir -p /home/app/payment-rates
WORKDIR /home/app/payment-rates
COPY package*.json /home/app/payment-rates/
RUN npm i --prefer-offline
COPY . /home/app/payment-rates
ENTRYPOINT ["npm","run","start:prod"]
EXPOSE 3000