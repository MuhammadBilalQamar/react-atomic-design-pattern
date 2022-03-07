import React from 'react';
import { Button } from '../../Atoms/atoms';
import { Box } from '@mui/material';

interface Props {
  handleAssign?: any;
  handleUnAssign?: any;
}
export default function FooterButton({ handleAssign, handleUnAssign }: Props) {
  // common styles
  const redRoundedBtn =
    'uppercase text-white bg-red-700 rounded-full w-36 text-xs py-2';

  const Identifier = ({ txt, styles }: any) => (
    <Box
      className={`border-2 border-red-700 rounded-md text-sm leading-5 p-2 ${styles}`}
    >
      {txt.toUpperCase()}
    </Box>
  );

  return (
    <div className='py-4 px-4 flex items-center justify-between'>
      <div className=' space-x-3 flex items-center'>
        <Button
          onClick={handleAssign}
          value='Assign'
          classes={{
            root: `${redRoundedBtn}`
          }}
        />
        <Button
          onClick={handleUnAssign}
          value='unAssign'
          classes={{
            root: `${redRoundedBtn}`
          }}
        />
        <Button
          value='Void request'
          classes={{
            root: `${redRoundedBtn}`
          }}
        />
      </div>
      <div className='flex space-x-3'>
        <Identifier txt='Automated Pricing' styles='bg-AutomatedPricing' />
        <Identifier txt='Manual Pricing' styles='bg-ManualPricing' />
        <Identifier txt='UDM Review' styles='bg-UdmReview' />
        <Identifier txt='VPA Review' styles='bg-VpaReview' />
      </div>
    </div>
  );
}
