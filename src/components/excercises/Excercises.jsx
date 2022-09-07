import { Button } from '@mui/material';
import useFetch from '../../hooks/generateData/useFetch';
import FilterExcercises from '../Input/FilterExcercises';
import SearchExcercise from '../Input/SearchExcercise';
import DetailsModal from '../singleExcercise/DetailsModal';
import SingleExcercise from '../singleExcercise/SingleExcercise';
import './Styles.css';

const Excercises = () => {
    const { data: excercises, status, setCurrentPage }
        = useFetch(process.env.REACT_APP_EXCERCISES_ENDPOINT);
    if (status === 'loading') {
        return <span>Cargando...</span>
    }

    return (
        <>
            <DetailsModal />
            <div className="container__form">
                <SearchExcercise />
                <FilterExcercises />
            </div>
            <div className="container__form" style={{ marginLeft: 30 }}>
                <Button type='button' id='btnPrimary' variant='outlined' onClick={() => setCurrentPage(currentPage => currentPage - 1)} color='secondary'>Anterior</Button>
                <Button type='button' variant='contained' onClick={() => setCurrentPage(currentPage => currentPage + 1)} >Siguiente</Button>
            </div>
            {excercises.results.data.length > 0
                ?
                <>

                    <div className='wrapper'>

                        {
                            excercises.results.data.map((excercise) => (
                                <SingleExcercise key={excercise.id} excercise={excercise} />
                            ))
                        }
                    </div>
                </>
                :
                <div className="container__form" style={{ marginLeft: 30 }}>
                    <span>No se encontraron registros...</span>
                </div>
            }

        </>
    )
}

export default Excercises