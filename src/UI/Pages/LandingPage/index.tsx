import React from 'react';
import { LandingTemplate } from '../../Templates';
import { Image, Label } from '../../Atoms/atoms';
import { IconButton } from '../../Molecules';
import { Link } from 'react-router-dom';
import Right from '../../../assets/right.svg';
import Banner from '../../../assets/Banner.jpg';

import { disclaimer } from '../../../Constant/common';

export default function Landing() {
  return (
    <LandingTemplate>
      <div className='mt-3 '>
        <div className='w-8/12 mx-auto'>
          <Image
            src={Banner}
            alt='banner'
            classes='w-full h-[72vh] rounded-md'
          />
          <div className='mt-3 flex justify-end'>
            <Link to='/queue'>
              <IconButton
                buttonClasses={{
                  root: 'rounded-full uppercase px-10 bg-red-700 text-white'
                }}
                buttonValue='Start'
                imageSrc={Right}
                imageClasses='w-4 ml-2'
              />
            </Link>
          </div>
          <Label
            value={disclaimer}
            classes={{ root: 'text-sm text-center mt-3 text-red-700' }}
          />
        </div>
      </div>
    </LandingTemplate>
  );
}
