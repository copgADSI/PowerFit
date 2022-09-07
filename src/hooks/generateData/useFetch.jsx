import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { ExcercisesContext } from "../../context/ExcercisesProvider";

export const useFetch = (url) => {
    
    const [search, setSearch] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const {setFilters} = useContext(ExcercisesContext)

    const getData = async (current_page) => {
        const response_data = await fetch(
            String(url).concat(`?page=${current_page}`));
        const data = await response_data.json();
        setFilters(data.muscles_groups);
        return data;
    }

    const {
        data,
        status
    } = useQuery(['results', currentPage, search], () => getData(currentPage),{
        //select: (employees) => employees.filter((employee) => employee.name.includes('domi') ),
    });

    return { data, status, search, setSearch, setCurrentPage }
}

export default useFetch