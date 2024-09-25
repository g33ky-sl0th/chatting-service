const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  const { content } = req.body;
  const message = new Message({ sender: req.user.id, content });
  
  await message.save();
  res.status(201).json(message);
};

exports.getMessages = async (req, res) => {
  const messages = await Message.find().populate('sender', 'username');
  res.json(messages);
};
