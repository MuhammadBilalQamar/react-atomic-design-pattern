import React from 'react';
import { Label } from '../../Atoms/atoms';
import { Link } from 'react-router-dom';
import Routes from '../../../Constant/SidebarRoutes';
export default function Sidebar() {
  return (
    <div className='bg-red-lightShade flex flex-col  w-48 h-full bg-lighShadded shadow  flex-col justify-between hidden sm:flex pl-6 py-12 pb-8'>
      <div className='border-l-2 border-red-700 h-full relative pt-2 pb-12'>
        <div className='absolute left-0 top-0 bg-red-700 w-6 h-6 rounded-full -mt-6 -ml-3 '></div>
        {Routes?.map(val => {
          return (
            <Link to={val.link}>
              <div className='flex items-center cursor-pointer py-2'>
                <div
                  className={`w-10 pb-0.5  ${
                    window.location.pathname === val.link
                      ? 'bg-green-600'
                      : 'bg-red-700'
                  }`}
                ></div>
                <Label
                  value={val.name}
                  classes={{ root: 'ml-1 text-red-700 w-40 text-sm' }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
