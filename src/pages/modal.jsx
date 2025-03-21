
import React from 'react'
import { Modal } from '@mui/material'
import { Flor } from './Flor'
import { Button } from '@mui/material'
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
const ModalImageLu = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="contained" color='secondary'
                onClick={handleOpen}>PARA LUCÍ
                <SwipeUpIcon className='ml-[10px]' />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
            >
                <div>
                    <Flor />
                </div>
            </Modal>
        </>

    )
}

export default ModalImageLu