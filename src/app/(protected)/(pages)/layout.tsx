import { getRecentProjects } from '@/actions/projects';
import { onAuthenticateUser } from '@/actions/user';
import AppSidebar from '@/components/global/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { get } from 'http';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const recentProjects = await getRecentProjects();
  const checkUser = await onAuthenticateUser();
  if (!checkUser.user) {
    redirect('/sign-in');
  }
  return (
    <>
      <SidebarProvider>
        <AppSidebar
          recentProjects={recentProjects.data || []}
          user={checkUser.user}
        />
      </SidebarProvider>
    </>
  );
};

export default Layout;
