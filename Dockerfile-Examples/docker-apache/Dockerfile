FROM ubuntu
RUN apt-get update && apt-get install -y apache2
EXPOSE 80
WORKDIR /var/www/html
COPY index.html /var/www/html/
CMD ["apachectl", "-D", "FOREGROUND"]
