pipeline {
    agent any
    tools {nodejs "NodeJS 18.17.0"}
    
    parameters {
        choice(name:'VERSION', choices:['1.0', '1.1', '1.2'], description:'Choose the version of the project')
        booleanParam(name :'executeTests', description:'Execute the tests', defaultValue:false)
    }
    stages {
	// Something; Build, Test, etc.
	// develop브랜치인 경우 develop-server로 프로젝트 파일을 보내준다.
        stage('transfer to develop server') {
            when {
                branch 'develop'
            }
            steps([$class: "BapSshPromotionPublisherPlugin"]) {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
	// 아까 '시스템 설정' 에서 Publish Over SSH > SSH server의 name으로 설정한 것)
                                configName: "develop-server",
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: "**/**",
                                        excludes: "**/node_modules/**,.git/",
                                        execCommand: "chmod +x /home/ec2-user/deploy/script/deploy_dev.sh; chmod +x /home/ec2-user/deploy/script/build_n_run.sh;"
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
	// main브랜치인 경우 operation-server로 프로젝트 파일을 보내준다.
        stage('Transfer to operation server') {
            when {
                branch 'main'
            }
            steps([$class: "BapSshPromotionPublisherPlugin"]) {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: "operation-server",
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: "**/**",
                                        excludes: "**/node_modules/**,.git/",
                                        execCommand: "chmod +x /home/ec2-user/deploy/script/deploy.sh; chmod +x /home/ec2-user/deploy/script/build_n_run.sh;"
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
	// develop브랜치인 경우 develop-server에서 nginx docker container를 실행한다.
	// develop-server에서 build_n_run.sh 실행
        stage("Build and Run nginx for develop") {
            when {
                branch 'develop'
            }
            steps([$class: "BapSshPromotionPublisherPlugin"]) {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: "develop-server",
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        execCommand: "/home/ec2-user/deploy/script/build_n_run.sh"
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
	// main브랜치인 경우 operation-server에서 nginx docker container를 실행한다.
	// operation-server에서 build_n_run.sh 실행
        stage("Build and Run nginx for operation") {
            when {
                branch 'main'
            }
            steps([$class: "BapSshPromotionPublisherPlugin"]) {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: "operation-server",
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        execCommand: "/home/ec2-user/deploy/script/build_n_run.sh"
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
	// develop브랜치인 경우 develop-server에 배포한다.
	// develop-server에서 deploy_dev.sh 실행
        stage("Deploy for develop") {
            when {
                branch 'develop'
            }
            steps([$class: "BapSshPromotionPublisherPlugin"]) {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: "develop-server",
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        execCommand: "/home/ec2-user/deploy/script/deploy_dev.sh"
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
	// main브랜치인 경우 operation-server에 배포한다.
	// operation-server에서 deploy.sh 실행
        stage("deploy for operation") {
            when {
                branch 'main'
            }
            steps([$class: "BapSshPromotionPublisherPlugin"]) {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: "operation-server",
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        execCommand: "/home/ec2-user/deploy/script/deploy.sh"
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