import React from 'react';
import { Modal, Label, Input, Button } from "../../Atoms/atoms"
interface Props {
    handleClose?: any,
    isOpen?: Boolean
}
export default function PriceTypeModal({ handleClose, isOpen = false }: Props) {
    return <Modal handleClose={handleClose} open={isOpen} width={"sm"}>
        <div className='flex justify-center bg-red-700 w-full h-8/12 p-4'>
            <Label classes={{ root: "text-white uppercase" }} value='Pricing Type' />
        </div>
        <div className='px-2 py-1'>
            <Label value='Pricing Type' />
            <Input props={{ multiline: true, rows: 5, classes: { root: "border-2 border-gray-200 w-full rounded px-2" } }} />
        </div>
        <div className='flex justify-end p-2 space-x-2'>
            <Button value='Cancel' classes={{ root: "w-32 rounded-full bg-red-700 text-white" }} onClick={handleClose} />
            <Button value='Ok' classes={{ root: "w-32 rounded-full bg-red-700 text-white" }} onClick={handleClose} />
        </div>
    </Modal>;
}
