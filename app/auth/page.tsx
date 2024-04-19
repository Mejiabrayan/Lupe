'use client';

import { Button } from '@/components/ui/button';
import { KeyRound } from 'lucide-react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { useSearchParams } from 'next/navigation';

export default function AuthPage() {
  const params = useSearchParams();
  const next = params.get('next') || '';

  const handleLoginWithOAuth = (provider: 'github' | 'google') => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + '/auth/callback?next=' + next,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="relative z-10 flex justify-between items-center max-w-3xl w-full rounded-md">
        <div className="rounded-md p-8 w-full max-w-md flex bg-[#1E1E1E]">
          <div className="flex flex-col gap-5 w-full">
            <Button
              className="w-full flex items-center gap-2"
              variant={'default'}
              onClick={() => handleLoginWithOAuth('github')}
            >
              <FaGithub /> Github
            </Button>
            <Button
              className="w-full flex items-center gap-2"
              variant={'default'}
              onClick={() => handleLoginWithOAuth('google')}
            >
              <FcGoogle /> Google
            </Button>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 right-50 -z-10 text-8xl text-black w-full">
          Sign up for access today
        </div>
      </div>
    </div>
  );
}