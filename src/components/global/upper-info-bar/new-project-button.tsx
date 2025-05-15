'use client';

import { Button } from '@/components/ui/button';
import { User } from '@/generated/prisma/client';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NewProjectButton({ user }: { user: User }) {
  const router = useRouter();

  return (
    <Button
      className="rounded-lg font-semibold"
      disabled={!user.subscription}
      // onClick={() => router.push('/create-page')}
    >
      <Plus />
      New Project
    </Button>
  );
}
