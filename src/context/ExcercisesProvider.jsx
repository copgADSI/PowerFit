import { createContext, useState } from "react"

export const ExcercisesContext = createContext();
const ExcercisesProvider = ({ children }) => {

    const [modal, setModal] = useState({
        open: false,
        excercise_data: ""
    });
    const [filters, setFilters] = useState([]);
    const [userLogged, setUserLogged] = useState({
        data: "",
        access_token: ""
    });
    
    const handleOpen = (e) => {
        const excercise_details = e.target.getAttribute('excercise_details')
        setModal({ open: true, excercise_data: excercise_details });
    };

    const handleClose = () => {
        setModal({ open: false, excercise_data: "" });
    };

    return <ExcercisesContext.Provider value={{
        filters,
        setFilters,
        handleOpen,
        handleClose,
        open: modal.open,
        excercise_details: modal.excercise_data,
        userLogged,
        setUserLogged
    }}>
        {children}
    </ExcercisesContext.Provider>
}

export default ExcercisesProvider