'use client';
import { Button } from '@/components/ui/button';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Project } from '@/generated/prisma/client';
import { JsonValue } from '@/generated/prisma/client/runtime/library';
import { useSlideStore } from '@/store/useSlideStore';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

type Props = {
  recentProjects: Project[];
};

export default function RecentOpen({ recentProjects }: Props) {
  const router = useRouter();
  const { setSlides } = useSlideStore();

  const recentOpenHander = (projectId: string, slides: JsonValue) => {
    if (!projectId || !slides) {
      toast.error('Project not found', {
        description: 'Please try again',
      });

      return;
    }

    setSlides(JSON.parse(JSON.stringify(slides)));
    router.push(`/presentation/${projectId}`);
  };
  return (
    recentProjects.length > 0 && (
      <SidebarGroup>
        <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>

        <SidebarMenu>
          {recentProjects.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                asChild
                tooltip={item.name}
                className={`hover:bg-primary-80`}
              >
                <Button
                  onClick={() => recentOpenHander(item.id, item.slides)}
                  variant={'link'}
                  className={`text-xs items-center justify-start`}
                >
                  <span>{item.name}</span>
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    )
  );
}
