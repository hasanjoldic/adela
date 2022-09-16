#!/bin/bash

docker container kill adela.postgres adela.mysql adela.mongo
docker container prune --force
docker volume rm adela.postgres adela.mysql adela.mongo
docker-compose up --detach