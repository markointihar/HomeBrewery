import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import io from 'socket.io-client';

const socket = io('http://localhost:3000');



const ChatRoom = () => {
    const { roomId } = useParams();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        socket.emit('joinRoom', roomId);

        socket.on('message', (message: string) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('message');
        };
    }, [roomId]);

    const sendMessage = () => {
        socket.emit('message', { room: roomId, message });
        setMessage('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Enter message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatRoom;
