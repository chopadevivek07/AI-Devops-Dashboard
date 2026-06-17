pipeline {

    agent any

    stages {

        stage('Build Backend') {
            steps {
                sh 'docker build -t ai-backend backend/'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t ai-frontend frontend/'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d --build'
            }
        }
    }
}