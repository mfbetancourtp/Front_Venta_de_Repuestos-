pipeline {
    agent any
    environment {
        COMPOSE_PROJECT_NAME = "miproyecto-pipeline"
    }
    stages {
        stage('Clonar repositorio') {
            steps {
                checkout scm
            }
        }
        stage('Construir contenedores') {
            steps {
                sh 'docker-compose build --no-cache'
            }
        }
        stage('Verificar archivos en contenedor') {
            steps {
                sh 'docker-compose run --rm web ls -R /usr/share/nginx/html'
            }
        }
        stage('Desplegar') {
            when {
                expression { currentBuild.currentResult == 'SUCCESS' }
            }
            steps {
                echo 'Desplegando aplicación...'
            }
        }
    }
    post {
        always {
            echo "Limpieza de contenedores temporales si es necesario."
            sh 'docker-compose down --volumes --remove-orphans || true'
        }
    }
}
