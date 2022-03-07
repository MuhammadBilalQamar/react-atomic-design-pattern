import React from 'react';
import { QueueHeader, Sidebar } from '../../Organisms';
interface Props {
  children?: any;
}
export default function PricingQueueTemplate({ children }: Props) {
  return (
    <div className='flex h-screen'>
      <div className='flex-1 flex flex-col overflow-hidden'>
        <QueueHeader />
        <div className='h-screen flex flex-auto flex-shrink-0 antialiased bg-white  text-black dark:text-white'>
          <Sidebar />
          <div className='flex flex-col w-full bg-white overflow-x-hidden'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
