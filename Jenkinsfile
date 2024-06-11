pipeline {
    agent any
    tools {nodejs "NodeJS 18.17.0"}
     stages {
        stage('lint') {
          steps {
            script {
              FAILED_STAGE=env.STAGE_NAME
              sh "npm install"
              sh "npm run lint"
            }
          }
        }
        stage('Test') {
          steps {
            script {
              sh 'npm run test:coverage'
            }
          }
        } 
         stage('Build Docker Image') {
            steps {
                script {
                    // Docker 이미지를 빌드합니다.
                    sh 'docker build -t nextjs-app .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // 기존에 실행 중인 컨테이너를 중지하고 삭제합니다.
                    sh 'docker stop front-web || true && docker rm front-web || true'
                    // Docker 컨테이너를 실행합니다.
                    sh 'docker run --name front-web -d -p 3400:3000 nextjs-app'
                }
            }
        }
    }
}