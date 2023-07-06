docker stop %1
docker rm %1 -f
docker rm MySQL -f
docker rm Node-Alpine -f
docker rm Netshoot -f
docker rmi %2 -f
docker rmi mysql:8.0 -f
docker rmi node:18-alpine -f
docker rmi nicolaka/netshoot -f
docker build -t %2 .
docker network rm theater-robehuuse-network -f
docker network create theater-robehuuse-network
docker run -d -it --network theater-robehuuse-network --name Netshoot nicolaka/netshoot
docker run -d --network theater-robehuuse-network --network-alias mysql -v theater-robehuuse-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456789 -e MYSQL_DATABASE=theater_robehuuse_api --name MySQL mysql:8.0
docker run -d -it --network theater-robehuuse-network --name %1 %2
docker run -dp 3000:3000 -w /app -v theater-robehuuse-app:/app --network theater-robehuuse-network -e MYSQL_HOST=mysql -e MYSQL_USER=theater-robehuuse -e MYSQL_PASSWORD=123456789 -e MYSQL_DB=theater_robehuuse_api --name Node-Alpine node:18-alpine sh -c "yarn install && yarn run dev"