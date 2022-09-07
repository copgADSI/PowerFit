import './Styles.css'

const SingleCheckbox = ({ filter }) => {
    return (
        <label htmlFor={filter.muscle}>
            <input
                type="checkbox"
                name="excercise_checkbox"
                id={filter.muscle}
                
            />
            {filter.muscle}
        </label>
    )
}

export default SingleCheckbox