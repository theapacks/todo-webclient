pipeline {
    
    agent any

    environment {
        registry = "docker.io/mbulaheni/todo-webclient"
    }

    stages {

        stage("Build-Docker-Image") {
            steps {
                echo 'Build docker image'
                sh 'pwd -P'
                sh "/usr/local/bin/docker build -t docker.io/mbulaheni/todo-web-client:latest ."
            }
        }

        stage("Push-Docker-Image") {
            steps {
                echo 'Push docker image to repo'
                sh '/usr/local/bin/docker images'
            }
        }
    }
}