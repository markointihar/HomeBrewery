import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../css/chatroom.css'



interface ChatroomProps {
  ablyClient: any;
}

const ChatRoom = ({ablyClient} : ChatroomProps) => {
  const { roomId } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [username, setUsername] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
      const channel = ablyClient.channels.get(`room-${roomId}`);

      channel.subscribe('send-chat-message', (message: any) => {
          setMessages((prevMessages) => [...prevMessages, `${message.data.name}: ${message.data.message}`]);
      });

      if (username && !isConnected) {
          channel.publish('new-user', { name: username });
          setIsConnected(true);
      }

      return () => {
          channel.unsubscribe();
      };
  }, [ablyClient, roomId, isConnected]);

  const sendMessage = () => {
      const channel = ablyClient.channels.get(`room-${roomId}`);

      if (message.trim()) {
          channel.publish('send-chat-message', { message, name: username });
          setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
          setMessage('');
      }
  };

  return (
      <div className='chat-container'>
          <h1>Chat Room</h1>
          <p>Napiši username in počakaj da se ti pridruži strokovnjak</p>
          <div className='sporocila'>
              {messages.map((msg, index) => {
                  //const className = msg.startsWith('You:') ? 'your-message' : 'other-message';

                  let messageClass = '';
                  if (msg.startsWith('You:')) {
                      messageClass = 'your-message';
                  } else if(msg.startsWith(username)){
                      messageClass = 'moj';
                  } else {
                      messageClass = 'other-message';
                  }

                  return (
                      <div className={messageClass} key={index}>
                          {msg}
                      </div>
                  );
              })}
          </div>
          <div className='forma'>
              {messages.length == 0 && (
                  <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                  />
              )}
              <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Napiši sporočilo..."
              />
              <button onClick={sendMessage}>Send</button>
          </div>
      </div>
  );
    };

export default ChatRoom;
