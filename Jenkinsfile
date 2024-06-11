pipeline {
    agent any
    tools {nodejs "NodeJS 18.17.0"}
     stages {
          stage('Build') {
            steps {
              sh "npm install"
              sh "npm run build"
            }
          }
          stage('Test') {
            steps {
              script {
                sh 'npm run test:coverage'
              }
            }
          }
          stage('Lint') {
            steps {
              script {
                FAILED_STAGE=env.STAGE_NAME
                sh "npm install"
                sh "npm run lint"
              }
            }
          }
          stage("Checkout") {
                steps{
                    echo "checkout start"
                    script{
                        checkout scm;
                    }
                    echo "checkout end"
                }
            }
        stage("Transfer") {

            steps([$class:"BapSshPromotionPublisherPlugin"]){
                script{
                    sshPublisher(
                        publishers:[
                            sshPublisherDesc(
                                configName:"nginx",
                                verbose:true,
                                transfers:[
                                    sshTransfer(
                                        remoteDirectory:"/conf.d",
                                        sourceFiles:"**/**",
                                        execCommand:"chmod +x /home/ec2-user/deploy/conf.d/deploy.sh"
                                    )
                                ],
                            )
                        ]
                        
                    )
                }

            }

        }
         stage("Deploy") {

            steps([$class:"BapSshPromotionPublisherPlugin"]){
                script{
                    sshPublisher(
                        publishers:[
                            sshPublisherDesc(
                                configName:"nginx",
                                verbose:true,
                                transfers:[
                                    sshTransfer(
                                       execCommand:"/home/ec2-user/deploy/conf.d/deploy.sh"
                                    )
                                ]
                            )
                        ]
                        
                    )
                }

            }

        }
    }

}