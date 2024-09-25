const MessageInput = ({ content, setContent, onSend }) => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        onSend();
      }
    };
  
    return (
      <div>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={onSend}>Send</button>
      </div>
    );
  };
  
  export default MessageInput;
  