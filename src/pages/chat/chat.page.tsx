import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { User, Send, Phone, Video, MoreVertical, Settings, LogOut } from 'lucide-react';

export const ChatPage: FC = () => {
  const [message, setMessage] = useState('');

  const chats = [
    { id: 1, name: 'Alice Smith', lastMessage: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, name: 'Bob Johnson', lastMessage: 'Can we meet tomorrow?', time: 'Yesterday' },
    { id: 3, name: 'Carol Williams', lastMessage: 'Thanks for your help!', time: '2 days ago' },
    { id: 4, name: 'David Brown', lastMessage: 'See you later!', time: '1 week ago' },
  ];

  const messages = [
    { id: 1, sender: 'Alice', content: "Hi there! How's it going?", time: '10:30 AM' },
    {
      id: 2,
      sender: 'You',
      content: "Hey Alice! I'm doing well, thanks. How about you?",
      time: '10:31 AM',
    },
    {
      id: 3,
      sender: 'Alice',
      content: "I'm great! Just finished a big project at work.",
      time: '10:32 AM',
    },
    {
      id: 4,
      sender: 'You',
      content: "That's awesome! Congratulations on completing it.",
      time: '10:33 AM',
    },
    {
      id: 5,
      sender: 'Alice',
      content: 'Thank you! It was challenging but rewarding.',
      time: '10:34 AM',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left sidebar with chat list */}
      <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col max-w-[400px]">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Sybida</h2>
        </div>
        <ScrollArea className="flex-grow">
          {chats.map(chat => (
            <div key={chat.id} className="flex items-center p-4 hover:bg-gray-50 cursor-pointer">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <User className="text-gray-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-800">{chat.name}</h3>
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              </div>
              <span className="text-xs text-gray-500">{chat.time}</span>
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 border-t border-gray-200">
          <Button variant="outline" className="w-full mb-2 justify-start" onClick={() => {}}>
            <Settings className="mr-2 h-4 w-4" />
            My Account
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={() => {}}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Right side with current chat */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
              <User className="text-gray-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Alice Smith</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Chat messages */}
        <ScrollArea className="flex-1 p-4 bg-gray-50">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex mb-4 ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg ${msg.sender === 'You' ? 'bg-black text-white' : 'bg-white text-gray-800'}`}
              >
                <p>{msg.content}</p>
                <span className="text-xs text-gray-400 mt-1 block">{msg.time}</span>
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Message input */}
        <div className="bg-white p-4 border-t border-gray-200">
          <form
            onSubmit={e => {
              e.preventDefault();
              setMessage('');
            }}
            className="flex items-center"
          >
            <Input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-1 mr-2"
            />
            <Button type="submit">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
