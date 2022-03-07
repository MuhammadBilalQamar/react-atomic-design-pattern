import * as React from 'react';
import { Dialog } from '@mui/material';
interface Props {
    open?: any,
    handleClose?: any,
    children?: any,
    classes?: object,
    width?: any
}
export default function BasicModal({ open = false, handleClose = () => { }, children, classes, width = 'sm' }: Props) {
    return (
        <div>
            <Dialog
                classes={classes}
                open={open}
                onClose={handleClose}
                aria-labelledby="Dialog-Dialog-title"
                aria-describedby="Dialog-Dialog-description"
                fullWidth={true}
                maxWidth={width}
            >
                <div>
                    {children}
                </div>
            </Dialog>
        </div>
    );
}