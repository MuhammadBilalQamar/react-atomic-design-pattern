import React from 'react';
import { Modal, Image, Label } from '../../Atoms/atoms';
import Cross from '../../../assets/cancel.png';
interface Props {
  handleClose?: any;
  isOpen?: Boolean;
  row?: object;
}
export default function DetailModal({
  handleClose,
  isOpen = false,
  row = {}
}: Props) {
  const [firstHalf, setFirstHalf] = React.useState<any>([]);
  const [secondHalf, setsecondHalf] = React.useState<any>([]);

  React.useEffect(() => {
    if (isOpen) {
      const p = Object.entries(row);

      const arrLength = p.length,
        mid = Math.ceil(arrLength / 2);

      setFirstHalf(p.slice(0, mid));
      setsecondHalf(p.slice(mid, arrLength));
    }
  }, [isOpen]);

  const RenderItem = ({ name, value }: any) => (
    <div className='grid grid-cols-2 border border-white'>
      <Label
        value={name}
        classes={{ root: 'bg-red-700 text-white py-3 px-3 text-sm' }}
      />
      <Label
        value={typeof value === 'boolean' ? (value ? 'true' : 'false') : value}
        classes={{ root: 'text-red-700 py-3 px-3 text-sm' }}
      />
    </div>
  );

  return (
    <Modal handleClose={handleClose} open={isOpen} width={'lg'}>
      <div className='flex justify-end bg-light w-full h-8/12 p-4'>
        <Image src={Cross} classes='w-6 cursor-pointer' onClick={handleClose} />
      </div>
      <div className='grid grid-cols-2 px-6 pb-6  bg-light'>
        {/* first half */}
        <div>
          {firstHalf.map((item: any, key: number) => (
            <RenderItem key={key} name={item[0]} value={item[1]} />
          ))}
        </div>

        {/* second half  */}
        <div>
          {secondHalf.map((item: any, key: number) => (
            <RenderItem key={key} name={item[0]} value={item[1]} />
          ))}
        </div>
      </div>
    </Modal>
  );
}
