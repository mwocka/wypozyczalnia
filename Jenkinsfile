pipeline {
    agent {
        node {
            label 'slave-0'
        }
    }
    environment {
        scannerHome = tool 'SonarQube'
        MAVEN_HOME = "${tool 'Maven3'}"
        PATH="${env.MAVEN_HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Build using Maven') { 
            steps {
                sh "cd maven-basic && mvn install"
            }
        }
        stage('SonarQube analysis') { 
            steps {
                withSonarQubeEnv('SonarQube_TESTS') {
                    sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=maven-project -Dsonar.projectName=SampleMavenProject -Dsonar.projectVersion=1.0 -Dsonar.sources=maven-basic -Dsonar.sourceEncoding=UTF-8"
                } 
            }
        }
    }
}