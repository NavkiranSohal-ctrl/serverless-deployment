const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  const { title, content } = JSON.parse(event.body);
  const noteId = uuidv4();

  const params = {
    TableName: "NotesTable",
    Item: {
      noteId,
      title,
      content,
      createdAt: new Date().toISOString(),
    },
  };

  await dynamoDB.put(params).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "Note created", noteId }),
  };
};
