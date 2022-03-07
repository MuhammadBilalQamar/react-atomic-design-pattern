import React from 'react';
import { Modal, Label, Button } from "../../Atoms/atoms"
import { LabelIconInput } from "../../Molecules"

import Search from '../../../assets/search.png';
interface Props {
    handleClose?: any,
    isOpen?: Boolean,
    handleReAssign?:any
}
export default function AssignModal({ handleClose,handleReAssign ,isOpen = false }: Props) {
    return <Modal handleClose={handleClose} open={isOpen} width={"md"}>
        <div className='flex justify-center bg-red-700 w-full h-8/12 p-4'>
            <Label classes={{ root: "text-white uppercase" }} value='Assign Pricing Request' />
        </div>
        <div className='px-2 py-1'>
            <LabelIconInput 
            labelValue='Assign User' 
            mainClass='flex items-center space-x-2 px-12' 
            imageSrc={Search} imageClasses='w-5'
            labelClasses={{root:"w-32"}} 
            inputclasses={{root:"w-full ml-2"}}
            inputWrapperClass='border border-red-700 rounded px-1 flex flex-row-reverse items-center w-full' />
        </div>
        <div className='flex justify-end p-2 space-x-2 pt-40'>
            <Button value='Submit' classes={{ root: "w-32 rounded-full bg-red-700 text-white" }} onClick={handleReAssign} />
            <Button value='Cancel' classes={{ root: "w-32 rounded-full bg-red-700 text-white" }} onClick={handleClose} />
        </div>
    </Modal>;
}
