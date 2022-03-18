
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'kumasagati',
  applicationName: 'learning-serverless-basics',
  appUid: 'fYGXcHXd2Gb60kshSZ',
  orgUid: '1bfad294-b21e-42d7-a2b1-be0158144102',
  deploymentUid: '4431bb5e-b577-4ea3-bf42-a94a785b0851',
  serviceName: 'learning-serverless-basics',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.1.5',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'learning-serverless-basics-dev-createUser', timeout: 6 };

try {
  const userHandler = require('./handler.js');
  module.exports.handler = serverlessSDK.handler(userHandler.createUser, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}