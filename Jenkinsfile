pipeline {
  agent {
    node {
      label 'docker-agent'
    }

  }
  stages {
    stage('npm install') {
      steps {
        sh 'npm i'
      }
    }
    stage('build') {
      steps {
        script {
          if (env.BRANCH_NAME == 'master') {
            sh 'npm run build'
            sh '''docker build -t codeanker/dlrg-landestool:$(echo ${BRANCH_NAME} | sed "s/\\//-/g") .'''
          } else {
            sh 'npm run build'
            sh '''docker build -t codeanker/dlrg-landestool:$(echo ${BRANCH_NAME} | sed "s/\\//-/g") .'''
          }
        }
      }
    }
    stage('deploy') {
      steps {
        archiveArtifacts 'dist/**/*'
        withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          sh 'docker login -u $USERNAME -p $PASSWORD'
          sh '''docker push codeanker/dlrg-landestool:$(echo ${BRANCH_NAME} | sed "s/\\//-/g")'''
        }
      }
    }
  }
}
