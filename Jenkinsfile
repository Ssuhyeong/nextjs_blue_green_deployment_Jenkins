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
      }
}