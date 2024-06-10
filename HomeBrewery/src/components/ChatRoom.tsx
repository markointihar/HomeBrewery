import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../css/chatroom.css'

import io from 'socket.io-client';

const socket = io('https://home-brewery-server.vercel.app', { transports: ['websocket', 'polling'] });



const ChatRoom = () => {
    const { roomId } = useParams();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
    const [username, setUsername] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
        if (username && !isConnected) {
          socket.emit('new-user', username);
        }
    
        socket.emit('joinRoom', roomId);
    
        socket.on('chat-message', (data: { message: string; name: string }) => {
          setMessages((prevMessages) => [...prevMessages, `${data.name}: ${data.message}`]);
        });
    
    
        return () => {
          socket.off('chat-message');
          socket.off('user-connected');
          socket.off('user-disconnected');
        };
      }, [roomId, username, isConnected]);
    
      const sendMessage = () => {
          socket.emit('new-user', username);
          
    
        if (message.trim()) {
          socket.emit('send-chat-message', message);
          setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
          setMessage('');
        }
        setIsConnected(true);
      };
    
      return (
        <>
            <div className='chat-container'>
            <h1>Chat Room</h1>
            <p>Napiši username in počakaj da se ti pridruži strokovnjak</p>
            <div className='sporocila'>
                {messages.map((msg, index) => {
                    const className = msg.startsWith('You:') ? 'your-message' : 'other-message';
                    return (
                        <div className={className} key={index}>
                        {msg}
                        </div>
                    );
                })}
            </div>
            <div className='forma'>
                {!isConnected && (      
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
        </>
        
      );
    };

export default ChatRoom;
