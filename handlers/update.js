const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;
  const { title, content } = JSON.parse(event.body);

  const params = {
    TableName: "NotesTable",
    Key: { noteId: id },
    UpdateExpression: "set title = :title, content = :content",
    ExpressionAttributeValues: {
      ":title": title,
      ":content": content,
    },
    ReturnValues: "ALL_NEW",
  };

  const result = await dynamoDB.update(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Note updated", updatedNote: result.Attributes }),
  };
};
