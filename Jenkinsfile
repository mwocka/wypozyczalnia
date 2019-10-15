pipeline {
    agent {
        node {
            label 'slave-0'
        }
    }
    environment {
        mavenHome=tool "Maven3"
        scannerHome = tool 'SonarQube'
        NODEJS_HOME = "${tool 'NodeJS LTS'}"
        PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Build using Maven') { 
            steps {
                sh "${mavenHome}/bin/mvn --version"
                sh "${mavenHome}/bin/mvn install"
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