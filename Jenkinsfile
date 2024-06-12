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
        stage('Deploy') {
            steps {
                script {
                    // Check if the production build exists before starting the server
                    if (!fileExists('.next')) {
                        echo "Production build not found. Building the app first."
                        sh "npm run build"
                    }
                    sh 'npm start'
                }
            }
        } 
    }
}

def fileExists(filePath) {
    return file(filePath).exists()
}
