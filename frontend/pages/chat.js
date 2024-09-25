import { useEffect, useState } from 'react';
import axios from 'axios';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  const fetchMessages = async () => {
    const response = await axios.get('http://localhost:5000/api/messages', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setMessages(response.data);
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000); // Polling for new messages
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async () => {
    await axios.post('http://localhost:5000/api/messages', { content }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setContent('');
    fetchMessages();
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput content={content} setContent={setContent} onSend={handleSendMessage} />
    </div>
  );
};

export default Chat;
