FROM ubuntu:xenial

# Install npm
ADD https://deb.nodesource.com/setup_8.x /setup_8.x
RUN bash setup_8.x && apt install -y nodejs

ENTRYPOINT ["/bin/bash", "/dagger/entrypoint.sh"]
