pipeline {
    agent any
    
    stages {
        stage ('Install Dependencies') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage ('Build Dependencies') {
            steps  {
                dir('client')  {
                    sh 'npm run build
                }
            }
        }

        stage ('Start App') {
            steps  {
                dir('client')  {
                    sh 'npm run start'
                }
            }
        }
    }
}