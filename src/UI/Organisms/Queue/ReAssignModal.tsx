import React from 'react';
import { Modal, Label ,Button} from "../../Atoms/atoms"
interface Props {
    handleClose?: any,
    isOpen?: Boolean
}
export default function ReAssignModal({ handleClose, isOpen = false }: Props) {
    return <Modal handleClose={handleClose} open={isOpen} width={"xs"}>
        <div className='flex justify-center bg-red-700 w-full h-8/12 p-4'>
            <Label classes={{root:"text-white uppercase"}} value='Assign Pricing Request'/>
        </div>
        <div className='px-6 py-6'>
            <Label value='This request(S) is already assigned. Do you want reassign?' classes={{root:"text-red-700 text-xl"}}/>
            <Label value='900424736 (smartin)' classes={{root:"text-red-700 text-md py-4 px-2"}}/>
        </div>
        <div className='flex justify-end p-2 space-x-2'>
              <Button value='Cancel' classes={{root:"w-32 rounded-full bg-red-700 text-white"}} onClick={handleClose}/>
              <Button value='Ok' classes={{root:"w-32 rounded-full bg-red-700 text-white"}} onClick={handleClose}/>
        </div>
    </Modal>;
}
