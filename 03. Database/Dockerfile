# run image in Container: Theater-Robehuuse-Database
# docker run --name Theater-Robehuuse-Database -p 3306:3306 -d theater-robehuuse-database:latest
# docker exec -it Theater-Robehuuse-Database bash

FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=theater-robehuuse-2023
ENV MYSQL_DATABASE=theater_robehuuse_database
ENV MYSQL_USER=theater-robehuuse
ENV MYSQL_HOST=localhost

COPY ./database.sql /docker-entrypoint-initdb.d/