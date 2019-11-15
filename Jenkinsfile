pipeline {
    agent {
        node {
            label 'slave-0'
        }
    }
    environment {
        MAVEN_HOME = "${tool 'Maven3'}"
        PATH="${env.MAVEN_HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Unit Tests') { 
            steps {
                sh "mvn clean test"
            }
        }
        stage('SonarQube code analysis') { 
            steps {
                withSonarQubeEnv('SonarQube_TESTS') {
                    sh "mvn sonar:sonar"
                } 
            }
        }
        stage('Deploy artifacts to Nexus3') {
            steps {
                withMaven(maven: 'Maven3', mavenSettingsConfig: 'DefaultPLMavenSettings') {
                    sh "mvn help:effective-settings deploy -Dmaven.test.skip=true"
                }
            }
        }  
    }
    post {
        always {
            cleanWs()
        }
    }
}
