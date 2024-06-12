#!/bin/bash

DOCKER_APP_NAME=nextjs
ROOT_DIR=/home/ec2-user/deploy

echo "dev down"
# ${ROOT_DIR}/docker-compose.dev.yml 설정파일로 실행한 컨테이너를 종료(down)하고 그 이미지(--rmi all)를 삭제한다.
docker compose -p ${DOCKER_APP_NAME}-dev -f ${ROOT_DIR}/docker-compose.dev.yml down --rmi all

echo "dev up"
# ${ROOT_DIR}/docker-compose.dev.yml 설정파일로 nextjs-dev라는 컨테이너를 실행한다.(up)
docker compose -p ${DOCKER_APP_NAME}-dev -f ${ROOT_DIR}/docker-compose.dev.yml up -d

exit 0