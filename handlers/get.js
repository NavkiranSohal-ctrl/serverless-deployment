const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;

  const params = {
    TableName: "NotesTable",
    Key: { noteId: id },
  };

  const result = await dynamoDB.get(params).promise();

  if (!result.Item) {
    return { statusCode: 404, body: JSON.stringify({ error: "Note not found" }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result.Item),
  };
};

