# Docker-Implementations

docker run -p 80:80 -d --name my-apache-container apache-web:v1

docker run -p 80:80 -d --name my-apache-container mowhonda/apache-web:v1

docker run -p 3000:80 -d --name feedback-app feedback-app:v1

docker run -p 3000:80 -d feedback-app:v1

docker exec -it <container_id> /bin/bash

docker exec -it c014667826ed /bin/bash

docker run -v /host/directory:/container/directory mowhonda/apache-web:v1

docker logs <container_id>

docker logs c014667826ed

docker run -d --name myapache -v /home/marce/apache-config/apache2.conf:/etc/apache2/apache2.conf -p 8080:80 mowhonda/apache-web:v1

http://34.70.172.148:8080



