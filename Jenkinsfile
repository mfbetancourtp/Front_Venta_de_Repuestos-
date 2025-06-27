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
                sh 'docker-compose build' // SIN --no-cache
            }
        }
        // Elimina 'Verificar archivos en contenedor' si no es esencial
        stage('Ejecutar pruebas y cobertura') {
            steps {
                sh 'docker-compose run --rm web npm run test:coverage'
            }
        }
        stage('Subir cobertura a Codecov') {
            steps {
                withCredentials([string(credentialsId: '331e66b5-52fa-4ca7-823c-1d81cad397be', variable: 'CODECOV_TOKEN')]) {
                    sh '''
                        curl -Os https://uploader.codecov.io/latest/linux/codecov
                        chmod +x codecov
                        ./codecov -t ${CODECOV_TOKEN} -f coverage/lcov.info
                    '''
                }
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
