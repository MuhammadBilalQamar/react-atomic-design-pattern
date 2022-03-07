import React from 'react';
import { Modal, Label, Button } from "../../Atoms/atoms"
import { LabelInput } from "../../Molecules"
interface Props {
    handleClose?: any,
    isOpen?: Boolean,
    handleReAssign?: any
}
export default function AssignModal({ handleClose, handleReAssign, isOpen = false }: Props) {
    return <Modal handleClose={handleClose} open={isOpen} width={"md"}>
        <div className='flex items-center space-x-3 px-8 pt-8'>
            <div className='w-4/12 border border-red-700'>
                <Label value='Request ID' classes={{ root: "bg-red-700 text-white py-2 text-center" }} />
                <div className='h-44 overflow-auto'>
                    <Label value='900424732' classes={{ root: "text-red-700 text-sm px-2 py-2" }} />
                </div>
            </div>
            <div className='w-8/12'>
                <Label value='Select a reason' classes={{ root: "bg-red-700 text-white py-2 text-left pl-4" }} />
                <div className='h-44 px-2 py-2 overflow-auto'>
                    <LabelInput
                        mainClass='flex items-center justify-between px-2 py-2 bg-gray-200 border-b border-red-700'
                        labelValue='Old Usage'
                        labelClasses={{ root: "text-sm  w-full" }}
                        inputClasses={{ root: "w-12" }}
                        inputProps={{ type:"checkbox"}}
                    />
                </div>
            </div>
        </div>
        <LabelInput
            mainClass='px-8 '
            labelValue='Others( Please Specify below)'
            labelClasses={{ root: "text-sm  py-3" }}
            placeholder=''
            inputClasses={{ root: "border border-red-700 w-full rounded p-3" }}
            inputProps={{ multiline: true, rows: 5 }}
        />
        <div className='flex justify-end px-8 py-6 space-x-2'>
            <Button value='Send Void Mail' classes={{ root: "w-40 rounded-full bg-red-700 text-white" }} onClick={handleClose} />
            <Button value='Cancel' classes={{ root: "w-40 rounded-full bg-red-700 text-white" }} onClick={handleClose} />
        </div>
    </Modal>;
}
