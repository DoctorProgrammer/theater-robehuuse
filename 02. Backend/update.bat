docker stop %1
docker rm %1
docker rmi %2
docker build -t %2 .
docker run -d -p 3000:3000 --name %1 %2