FROM node:12-alpine

RUN mkdir -p /home/generator-springboot-angular

WORKDIR /home/generator-springboot-angular

COPY . .

RUN npm install && npm install -g yo && npm link 

CMD ["yo","helloword-lab","my-project"]

