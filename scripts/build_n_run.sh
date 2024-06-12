DOCKER_APP_NAME="front"
DEPLOYPATH="/home/ec2-user/deploy/"
CURRENT="blue"
ALTER="green"

EXIST_CURRENT=$(docker compose ${DOCKER_APP_NAME}-${CURRENT} ps --status=running | grep ${DOCKER_APP_NAME}-${CURRENT}) 
EXIST_ALTER=$(docker compose ${DOCKER_APP_NAME}-${ALTER} ps --status=running | grep ${DOCKER_APP_NAME}-${ALTER}) 
DATE=$(date '+%Y%m%d%H%M%S') #배포날짜변수 
echo "DATE : $DATE"

if [ -z "$EXIST_CURRENT" ]; then #blue가 없을 때
    echo "$EXIST_CURRENT up start"   
    docker compose ${DOCKER_APP_NAME}-${CURRENT} up -d
    sudo cp ${DEPLOYPATH}conf.d/server.${CURRENT}.conf ${DEPLOYPATH}conf.d/nginx.server.conf
    docker exec front-web nginx -s reload
    if [ -n "$EXIST_ALTER" ]; then # green이 떠있을때 
        echo "${DOCKER_APP_NAME}-${ALTER} down start"
        docker compose ${DOCKER_APP_NAME}-${ALTER} down
        docker image tag ${DOCKER_APP_NAME}-${ALTER} ${DOCKER_APP_NAME}-back:$DATE # 이미지 백업 
        docker rmi -f ${DOCKER_APP_NAME}-${ALTER}
        echo "${DOCKER_APP_NAME}-${ALTER} down end"
    fi
    echo "$EXIST_CURRENT up end" 
else 
    echo "$EXIST_ALTER up start"
    docker compose ${DOCKER_APP_NAME}-${ALTER} up -d
    sudo cp ${DEPLOYPATH}conf.d/server.${ALTER}.conf ${DEPLOYPATH}conf.d/nginx.server.conf
    docker exec front-web nginx -s reload
    echo "${DOCKER_APP_NAME}-${CURRENT} down start"
    docker compose ${DOCKER_APP_NAME}-${CURRENT} down
    docker image tag ${DOCKER_APP_NAME}-${CURRENT} ${DOCKER_APP_NAME}-back:$DATE # 이미지 백업 
    docker rmi -f ${DOCKER_APP_NAME}-${CURRENT}
    echo "${DOCKER_APP_NAME}-${CURRENT} down end"
    echo "$EXIST_ALTER up end"
fi 
 echo "deploy successfully finished" 

exit 0
