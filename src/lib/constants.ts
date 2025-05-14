import { Home, LayoutTemplate, Settings, Trash2Icon } from 'lucide-react';

export const data = {
  user: {
    name: 'Kevin',
    email: 'k@example.com',
    avatar: '/avatars/shadcn.jpg',
  },

  navMain: [
    {
      title: 'Home',
      url: '/dashboard',
      icon: Home,
    },
    {
      title: 'Templates',
      url: '/templates',
      icon: LayoutTemplate,
    },
    {
      title: 'Trash',
      url: '/trash',
      icon: Trash2Icon,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings,
    },
  ],
};
