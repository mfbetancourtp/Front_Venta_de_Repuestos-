FROM jenkins/jenkins:lts
 
USER root
# instala docker-cli (no necesitas demonio, solo el cliente)
RUN apt-get update && \
    apt-get install -y docker.io && \
    rm -rf /var/lib/apt/lists/*
 
# Vuelve a jenkins
USER jenkins