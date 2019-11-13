   pipeline {

    agent any

    stages {
      stage(‘Build’) {
        steps {
          sh 'docker build -t teste -f Dockerfile .'
          sh "docker-compose -f docker-compose.yml up --force-recreate"
        }
      }
    }
}