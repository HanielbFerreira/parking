node('docker') {
 
    stage 'Checkout'
        checkout scm
    stage 'Build & UnitTest'
        sh "docker build -t teste -f Dockerfile ."
  
    stage 'Integration Test'
        sh "docker-compose -f docker-compose.yml up --force-recreate"
}