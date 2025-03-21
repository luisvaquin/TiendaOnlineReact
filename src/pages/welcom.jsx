import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Flor } from './Flor';
import Carousel from '../components/Carousel';
import CarouselProducts from '../components/CarouselProducts';
import ImageCarousel from './carousell';

const Slider = () => {
    useEffect(() => {
        const slider = document.querySelector('#slider');
        setTimeout(function moveSlide() {
            const max = slider.scrollWidth - slider.clientWidth;
            const left = slider.clientWidth;

            if (max === slider.scrollLeft) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left, behavior: 'smooth' });
            }

            setTimeout(moveSlide, 3000);
        }, 0);
    }, []);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center" id="slider">  <div className="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl max-w-md"></h2>
            <Button variant="contained" color='secondary' onClick={handleOpen}>PARA LUCÍ</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <Flor />
                </div>
            </Modal>
            <ImageCarousel />

        </div>
            {/*<div className="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
                <h2 className="text-4xl max-w-md">Hola Doc</h2>
                <Button variant="contained">Click aca</Button>

            </div>

            <div className="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
                <h2 className="text-4xl max-w-md">Hola Miss</h2>
                <Button variant="contained" color='success'>Click aca</Button>

            </div> */}
        </div>
    );
};

export default Slider;