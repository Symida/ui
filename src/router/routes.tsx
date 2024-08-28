import { ChatPage } from '@/pages/chat/chat.page';
import { HomePage } from '@/pages/home/home.page';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
];
