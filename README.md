# 무중단 배포 ( green / blue )

### 무중단 배포 종류

- 무중단 배포는 크게 두가지 종류로 나뉜다.

<br/>

<aside>

💡 rolling update 배포

새로 배포되어야 하는 버전을 하나씩 순차적으로 적용시키면서 배포하는 방식입니다. 한 번에 모두 배포되는 게 아니기 때문에 배포가 되는 과정에서 옛날 버전과 새로운 버전이 공존합니다. 그렇기 때문에 잘못하면 배포하는 과정 중에 호환성 문제가 생길 수 있습니다

💡 Blue,Green 배포

Blue 혹은 Green 버전 둘 중 하나로 배포되어 있는 상태에서 새로운 버전을 동시에 띄우고 로드밸런서를 통해서 스위칭하는 방식이며, 한 번에 두 개의 버전을 동시에 띄우기 때문에 시스템 자원이 두배로 든다는 단점이 있습니다.

</aside>

<br/>

### Blue / Green 원리

![image](https://github.com/user-attachments/assets/db7fe96a-a3e4-4313-9e77-0d7309851127)

![image](https://github.com/user-attachments/assets/dd5cf580-2a93-48bc-bd04-803c25fe9dd5)

![image](https://github.com/user-attachments/assets/0364c7b1-fa10-4a4c-baaa-519192fa22fd)

![image](https://github.com/user-attachments/assets/967bb27c-3aaf-46a1-b218-303554394330)

- 새로 배포할 때마다 새로운 컨테이너들을 띄우고 nginx 연결을 새로 띄운 컨테이너 포트로 연결한 뒤 이전 컨테이너는 내린다.
- 나 같은 경우는 인스턴스를 2개를 둬서 하나는 Jenkins Server, 하나는 Dev Server로 실습을 진행했다.

<br/>

# Docker & Jenkins nextjs 무중단 배포 (완) [ Green / Blue 배포 ]

- 구버전과 동일하게 신버전의 인스턴스를 구성한 후, 로드밸런서를 통해 신버전으로 모든 트래픽을 전환하는 배포 방식

![image](https://github.com/Ssuhyeong/nextjs_blue_green_deployment_Jenkins/assets/73628071/11374db6-9cfc-4226-b810-f023b9ddce3c)


배포 주소 : http://43.203.219.168/ [ 비용 문제로 중지 ]
