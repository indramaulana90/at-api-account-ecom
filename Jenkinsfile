def getBuildNumber(buildNumber) {
    int value = buildNumber as Integer;
    deletedBuildNumber = value - 10;
    return deletedBuildNumber
}

pipeline {
    agent {
        node {
            label 'worker-at-test-ng'
        }
    }

    options {
        timestamps()
    }

    parameters {
        choice(
            name: 'CI_GIT_TYPE',
            choices: ['', 'branch', 'commit', 'tag'],
            description: 'Which Environment?'
        )
        string(
            name: 'CI_GIT_SOURCE',
            defaultValue: '',
            description: 'Which git source?'
        )
    }
	environment {
	    VAULT_TOKEN = credentials('vault_secret_token')
        VAULT_ADDR = "https://vault-internal.sinbad.web.id"
		SINBAD_REPO = 'at-api-seller-center'
		AWS_CREDENTIAL = 'automation_aws'
		SINBAD_ENV = "${env.JOB_BASE_NAME}"
		BUCKET_UPLOAD = "at-report"
		BUILD_NUMBER = "${env.BUILD_NUMBER}"
        AT_REPORT_BUCKET = "http://at-report.s3-website-ap-southeast-1.amazonaws.com"
		SLACK_CHANNEL = '#quality-report-at-api'
		DELETED_BUILD_NUMBER = "${getBuildNumber(BUILD_NUMBER)}";
	}
    stages {
        stage('Checkout') {
            steps {
                script {
                    if(params.CI_GIT_TYPE != '' || params.CI_GIT_SOURCE != '') {
                        if(params.CI_GIT_TYPE == 'branch' || params.CI_GIT_TYPE == ''){
                            checkout([
                                $class: 'GitSCM',
                                branches: [[name: "refs/remotes/origin/${params.CI_GIT_SOURCE}"]],
                                doGenerateSubmoduleConfigurations: scm.doGenerateSubmoduleConfigurations,
                                extensions: scm.extensions,
                                userRemoteConfigs: scm.userRemoteConfigs
                            ])
                        } else if(params.CI_GIT_TYPE == 'commit') {
                            checkout([
                                $class: 'GitSCM',
                                branches: [[name: "${params.CI_GIT_SOURCE}"]],
                                doGenerateSubmoduleConfigurations: scm.doGenerateSubmoduleConfigurations,
                                extensions: scm.extensions,
                                userRemoteConfigs: scm.userRemoteConfigs
                            ])
                        } else if(params.CI_GIT_TYPE == 'tag') {
                            checkout([
                                $class: 'GitSCM',
                                branches: [[name: "refs/tags/${params.CI_GIT_SOURCE}"]],
                                doGenerateSubmoduleConfigurations: scm.doGenerateSubmoduleConfigurations,
                                extensions: scm.extensions,
                                userRemoteConfigs: scm.userRemoteConfigs
                            ])
                        }
                    }

                    env.GIT_MESSAGE = sh(returnStdout: true, script: 'git log -1 --pretty=%B').trim()
                    env.GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD')
                    env.GIT_AUTHOR = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' ${env.GIT_COMMIT}").trim()
                }
            }
        }

        stage('Download ENV') {
            steps {
                script {
                    sh "vault kv get -format=json ${SINBAD_ENV}/${SINBAD_REPO} | jq -r .data.data.env > .env"
                }
            }
        }
        stage('Install') {
            steps {
                sh "npm ci"
            }
        }
        stage('Run G-Token') {
            steps {
                sh "npm run g-token"
            }
        }
        stage('API Testing') {
            steps {
                sh "npm run test"
            }
            post {
                always {
                    publishHTML (
                        target : [
                            allowMissing: false,
                            alwaysLinkToLastBuild: true,
                            keepAll: true,
                            reportDir: './reports',
                            reportFiles: 'jest_html_reporters.html',
                            reportName: 'API Test Report',
                            reportTitles: "API Test Report  ${env.JOB_BASE_NAME}"
                            ]
                    )
                    script {
						withAWS(credentials: "${AWS_CREDENTIAL}") {
						    s3Upload(bucket:"${BUCKET_UPLOAD}/at-api/${SINBAD_REPO}", workingDir : './reports', includePathPattern: '**/*')
							s3Upload(bucket:"${BUCKET_UPLOAD}/at-api/${SINBAD_REPO}/${BUILD_NUMBER}", workingDir : './reports', includePathPattern: '**/*')
							s3Delete(bucket:"${BUCKET_UPLOAD}", path: "at-api/${SINBAD_REPO}/${DELETED_BUILD_NUMBER}/")
						}
					}
                }
            }
        }
    }
        
	post {
		success {
			// junit '**/target/*.xml'
			slackSend color: '#8cff00', message: """
Hi Sailors
Testing Report is out!
Repo: ${SINBAD_REPO}
Environmnet: sandbox
Link Jenkins: ${BUILD_URL}
Link Report: ${AT_REPORT_BUCKET}/at-api/${SINBAD_REPO}/${BUILD_NUMBER}/jest_html_reporters.html""", channel: "${SLACK_CHANNEL}"
		}
		failure {
			slackSend color: '#ff0000', message: """
Hi Sailors
Testing Report is out!
Repo: ${SINBAD_REPO}
Environmnet: sandbox
Link Jenkins: ${BUILD_URL}
Link Report: ${AT_REPORT_BUCKET}/at-api/${SINBAD_REPO}/${BUILD_NUMBER}/jest_html_reporters.html""", channel: "${SLACK_CHANNEL}"
		}
	}
}
