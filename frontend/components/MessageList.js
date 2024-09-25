const MessageList = ({ messages }) => {
    return (
      <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        {messages.map((msg) => (
          <div key={msg._id}>
            <strong>{msg.sender.username}: </strong>
            <span>{msg.content}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default MessageList;
  