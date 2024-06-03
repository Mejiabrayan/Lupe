
'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import UseUser from '@/app/hook/UseUser';
import Image from 'next/image';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { protectedPaths } from '@/lib/constant';
import { ModeToggle } from './ModeToggle';
import GooeyButton from '../ui/GooeyButton';

import { NavMenu } from './NavMenu';

export default function Navbar() {
  // const { isFetching, data } = UseUser();
  // const queryClient = useQueryClient();
  // const router = useRouter();
  // const pathname = usePathname();
  // const navRef = useRef(null);

  // // if (isFetching) return <></>;

  // // const handleSignout = async () => {
  // //   const supabase = supabaseBrowser();
  // //   queryClient.clear();
  // //   await supabase.auth.signOut();
  // //   router.refresh();
  // //   if (protectedPaths.includes(pathname)) {
  // //     router.replace('/auth?next=' + pathname);
  // //   }
  // // };

  return (
    <nav className='z-10 flex sticky justify-between items-center bg-transparent text-black dark:text-white px-2 rounded-md h-20 mt-5'>
      <div className='flex items-center gap-2'>
        <Image
          src='/logo.png'
          alt='logo'
          width={40}
          height={40}
          priority={true}
          quality={100}
        />
        <Logo />
      </div>
      <div className='hidden md:flex lg:flex'>
        <NavMenu />
      </div>

      <div className='hidden md:flex lg:flex items-center gap-2'>
        <ModeToggle />

        <GooeyButton />
      </div>
      <Button className='md:hidden lg:hidden text-black'>Menu</Button>
    </nav>
  );
}

enum NavLinks {
  Home = '/',
  About = '/about',
  Contact = '/contact',
  Blog = '/blog',
  Subscription = '/subscription',
}

type CustomLinkProps = {
  href: string | NavLinks;
  children: React.ReactNode;
};

// const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => (
//   <Link
//     href={href}
//     className='uppercase font-light flex items-center text-black dark:text-white px-4 py-5 hover:underline transition-colors duration-200'
//   >
//     {children}
//   </Link>
// );

const Logo = () => {
  return (
    <h1 className='text-2xl font-medium text-black dark:text-white leading-loose'>
      Lupe.
    </h1>
  );
};
