FROM ubuntu:xenial

# Install npm
ADD https://deb.nodesource.com/setup_8.x /setup_8.x
RUN bash setup_8.x && apt install -y nodejs

ADD . /dagger
WORKDIR /dagger
RUN npm install

CMD cd /dagger && npm install && npm start
