pipeline {
    agent {
        node {
            label 'slave-0'
        }
    }
    environment {
        MAVEN_HOME = "${tool 'Maven3'}"
        PATH="${env.MAVEN_HOME}/bin:${env.PATH}"
        nexusConfiguration = """\\
    <server>\\
        <id>nexus</id> \\
        <username>technical</username>\\
        <password>sOWkEAutHzbCB84O</password>\\
    </server>"""
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
        stage('Deploy artifactory') {
            steps {
                sh """ grep "<id>nexus</id>" ${MAVEN_HOME}/conf/settings.xml \\
                    && grep "<username>technical</username>" ${MAVEN_HOME}/conf/settings.xml \\
                    && grep "<password>sOWkEAutHzbCB84O</password>" \\
                    ${MAVEN_HOME}/conf/settings.xml &&
                    echo "Nexus configuration has been already set" ||
                    sed -i '/<\\/servers>/i ${nexusConfiguration}' ${MAVEN_HOME}/conf/settings.xml"""
                sh "mvn clean install -Dmaven.test.skip=true"
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
