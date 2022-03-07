import React from 'react';
import { Label, Avatar } from '../../Atoms/atoms';
import Logo from '../../../assets/logo.png';

import { brandName, greetings } from '../../../Constant/common';

import { Link } from 'react-router-dom';

export default function LandingHeader() {
  return (
    <div className='flex justify-between items-center shadow py-2 px-12 border-b border-red-700 bg-light'>
      <Link to='/'>
        <Avatar src={Logo} classes={{ root: 'h-14 w-16' }} />
      </Link>
      <Label
        value={brandName}
        classes={{ root: 'text-xl font-medium mb-0 text-red-700' }}
      />
      <div className='flex space-x-2'>
        <Label
          value={greetings}
          classes={{ root: 'font-medium mb-0 text-red-700' }}
        />
        <Label
          value='XXXX XXXX'
          classes={{ root: 'font-medium mb-0 text-red-700' }}
        />
      </div>
    </div>
  );
}
