import { Button, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { ExcercisesContext } from '../../context/ExcercisesProvider';

const DetailsModal = () => {


    const MODAL_STYLES = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: '#282c34',
        border: '2px solid #fff',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    const { open, handleClose, excercise_details } = useContext(ExcercisesContext);
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...MODAL_STYLES, }} className='box_data' >
                {excercise_details}
                <br /><br />
                <Button
                    variant='contained'
                    id='btnPrimary'>
                    Crear Rutina
                </Button>
                <Button
                    variant='outlined'
                    id='btnSecondary'>
                    Ver Rutinas
                </Button>
            </Box>

        </Modal>
    )
}

export default DetailsModal