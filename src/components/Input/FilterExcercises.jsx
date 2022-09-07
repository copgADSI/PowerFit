import { useContext } from "react";
import { ExcercisesContext } from "../../context/ExcercisesProvider";
import SingleCheckbox from "./SingleCheckbox";
import './Styles.css'

const FilterExcercises = () => {
    const { filters } = useContext(ExcercisesContext);
    return (
        <div className="form_filter_container">
            {Object.values(filters).map((filter) => (
                <SingleCheckbox key={filter.id} filter={filter} />
            ))}
        </div>
    );
}

export default FilterExcercises