import React from 'react';
import { Label, Avatar, Image } from '../../Atoms/atoms';
import Logo from '../../../assets/logo.png';
import Home from '../../../assets/home.png';
import Menu from '../../../assets/menu.png';

import { brandName } from '../../../Constant/common';

import { Link } from 'react-router-dom';

export default function QueueHeader() {
  return (
    <div className='flex justify-between items-center shadow py-0 px-12 border-b border-red-700 bg-light w-full'>
      <Link to='/'>
        <Avatar src={Logo} classes={{ root: 'w-20 h-20' }} />
      </Link>

      <Label
        value={brandName}
        classes={{ root: 'text-2xl font-medium mb-0 text-red-700' }}
      />
      <div className='flex space-x-2 items-center'>
        <Image src={Menu} classes='w-5 -mb-2' />
        <Link to='/'>
          <Image src={Home} classes='w-5' />
        </Link>
      </div>
    </div>
  );
}
