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
    stages {
        stage('Build using npm') { 
            steps {
                sh "${mavenHome}/bin/mvn --version"
				sh "npm --version"
				sh "npm i @angular/cli"
            }
        }
        stage('SonarQube analysis') { 
            steps {
				withSonarQubeEnv('SonarQube_TESTS') {
				sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=sleroy:sample-project -Dsonar.projectName=SampleProject -Dsonar.projectVersion=1.0 -Dsonar.sources=front-end -Dsonar.sourceEncoding=UTF-8"
				} 
            }
        }
    }
}
