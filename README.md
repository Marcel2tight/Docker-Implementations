# Docker-Implementations

git add -A ; git commit -m 'updated project' ; git push

git config --global user.email "ow"
git config --global user.name "marce"

# this command to build a docker image
docker build -t IMAGE_NAME:IMAGE_TAG .

docker build -t apache-web:V2 .

docker run --name apache-webserver -p 80:80 -d apache-web:V2