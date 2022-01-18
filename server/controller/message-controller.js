import Message from "../model/messages.js";
import conversation from "../model/conversation.js";

export const newMessage = async (request, response) => {
  const newMessages = new Message(request.body);
  // console.log(request.body, newMessage)
  try {
    await newMessages.save();
    await conversation.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });
    response.status(200).json("Messages saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};
export const getMessages = async (request, response) => {
  try {
    const messagees = await Message.find({ conversationId: request.params.id });
    // console.log(messagees);
    response.status(200).json(messagees);
  } catch (error) {
    response.status(500).json(error);
  }
};
