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
            configFileProvider([configFile('MavenGlobalSettings')]) {
                sh "mvn deploy -Dmaven.test.skip=true"
            }
        }  
    }
    post {
        always {
            cleanWs()
        }
    }
}
