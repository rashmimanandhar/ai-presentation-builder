'use client';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Switch
        checked={theme === 'light'}
        className=" data-[state=checked]:bg-primary-80"
        aria-label="Toggle dark mode"
        onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      ></Switch>
    </div>
  );
};

export default ThemeSwitcher;
