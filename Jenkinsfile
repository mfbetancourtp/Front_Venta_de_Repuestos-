pipeline {
  agent any
 
  environment {
    IMAGE_NAME = "front-venta-repuestos"
    IMAGE_TAG  = "${env.BUILD_NUMBER}"
  }
 
  stages {
    stage('Clonar código') {
      steps { checkout scm }
    }
    stage('Construir imagen Docker') {
      steps {
        script { docker.build("${IMAGE_NAME}:${IMAGE_TAG}") }
      }
    }
    stage('Lint') {
      steps { sh 'npm run lint' }
    }
  }
 
  post {
    success {
      mail to: 'equipo-dev@ejemplo.com',
           subject: "BUILD SUCCESS [#${env.BUILD_NUMBER}]",
           body: "Versión ${IMAGE_TAG} construida y etiquetada correctamente."
    }
    failure {
      mail to: 'equipo-dev@ejemplo.com',
           subject: "BUILD FAILED [#${env.BUILD_NUMBER}]",
           body: "Ha fallado el pipeline. Revisa los logs en Jenkins."
    }
  }
}