import useFetch from '../../hooks/generateData/useFetch'
import './Styles.css'
const SearchExcercise = () => {
  const { setSearch } = useFetch();
  return (
    <input
      type="text"
      id='inputSearch'
      placeholder="Buscar ejecicio"
      onChange={e => setSearch(e.target.value)}
    />
  )
}

export default SearchExcercise