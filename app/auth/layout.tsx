import React from 'react';

export default function defaultAuthLayout({
  children,
}: React.PropsWithChildren) {
  return <main className='min-h-screen'>{children}</main>;
}
