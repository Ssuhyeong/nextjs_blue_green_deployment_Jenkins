pipeline {
  agent any
    tools {nodejs "18.17.0"}
      stages {
        stage('Build') {
          steps {
            sh "sudo npm install"
            sh "sudo npm run build"
          }
        }
      }
}