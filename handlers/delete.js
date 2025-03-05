const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;

  const params = {
    TableName: "NotesTable",
    Key: { noteId: id },
  };

  await dynamoDB.delete(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Note deleted" }),
  };
};

