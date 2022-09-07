import { Button } from '@mui/material'
import { useContext } from 'react';
import { ExcercisesContext } from '../../context/ExcercisesProvider';
import './Styles.css'

const SingleExcercise = ({ excercise }) => {
    const { handleOpen } = useContext(ExcercisesContext);
    return (
        <div className="excercise_card">
            <span key={excercise.id}>
                {excercise.name}
            </span><br />
            <img src={excercise.gif} alt="" />
            <br />

            <Button
                onClick={handleOpen}
                excercise_details={excercise.description}
                variant='contained'
                id='btnPrimary'>
                Detalles
            </Button>
        </div>
    )
}

export default SingleExcercise