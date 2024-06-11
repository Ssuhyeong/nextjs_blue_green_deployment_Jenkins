pipeline {
    agent any
     stages {
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