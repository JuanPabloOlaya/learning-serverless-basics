'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!!!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.helloUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:'Hello New User!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.createUser = async ({ body }) => {
    const { name } = JSON.parse(body);

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message:'Hello New User!',
                input: `Hello, ${name}`,
            },
            null,
            2
        ),
    };
};
