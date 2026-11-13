
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out GitHub repository...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'

                bat '''
                    if not exist build mkdir build
                    copy app.txt build\\app.txt
                '''
            }
        }

        stage('Test') {
            steps {
                echo 'Testing application...'

                bat '''
                    if not exist build\\app.txt exit /b 1
                    findstr /C:"Hello from GitHub and Jenkins!" build\\app.txt >nul
                    if errorlevel 1 exit /b 1
                    echo All tests passed!
                '''
            }
        }

        stage('Package') {
            steps {
                echo 'Archiving build artifacts...'

                archiveArtifacts artifacts: 'build/*.txt',
                                 fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline completed successfully!'
        }

        failure {
            echo 'CI Pipeline failed!'
        }

        always {
            echo 'Pipeline execution finished.'
        }
    }
}
