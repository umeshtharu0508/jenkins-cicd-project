pipeline{
    agent any
    stages{
        stage("Checkout"){
            steps{
                echo "Checking out source code..."
                checkout scm
            }
        }
        stage("Install Dependencies"){
            steps{
                echo "Installing Node.js dependencies..."
                bat "npm install"
            }
        }
        stage("Automated Test"){
            steps{
                echo "Running Node.js automated tests..."
                bat "npm test"
            }
        }
        stage("Archive"){
            steps{
                echo "Archiving project files..."
                archiveArtifacts artifacts: "app.js, app.test.js, package.json"
                fingerprint: true
            }
        }
    }
    post{
        success{
            echo "Node.js CI Pipeline completed successfull!"
        }
        failure{
            echo "Node.js CI Pipeline failed!"
        }
        always{
            echo "Pipeline execution finished."
        }
    }
}