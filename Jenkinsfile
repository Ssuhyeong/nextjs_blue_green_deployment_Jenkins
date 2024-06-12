pipeline {
    agent any
    tools {nodejs "NodeJS 18.17.0"}
     stages {
        stage('Lint') {
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
        stage('Build') {
            steps {
                sh "npm run build"
            }
        } 
        stage('deploy') {
            steps {
                script {
                    sh 'npm run dev'
                }
            }
        } 
    }
}