'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import UseUser from '@/app/hook/UseUser';

export default function Profile() {
    const {} = UseUser()
  return (
    <React.Fragment>
      <Link href='/auth'>
        <Button variant={'outline'}>Signin</Button>
      </Link>
    </React.Fragment>
  );
}
