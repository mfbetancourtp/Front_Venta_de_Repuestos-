pipeline {
  agent any
 
  stages {
    stage('Clonar código') {
      steps {
        checkout scm
      }
    }
 
    stage('Construir imagen Docker') {
      steps {
        sh 'docker build -t front-venta-repuestos:${BUILD_NUMBER} .'
      }
    }
  }
 
  post {
    success {
      echo "✅ Build #${env.BUILD_NUMBER} completada correctamente"
    }
    failure {
      echo "❌ Build #${env.BUILD_NUMBER} ha fallado"
    }
  }
}