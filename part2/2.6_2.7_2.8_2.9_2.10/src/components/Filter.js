const Filter = ({newFilter,handleFilterChange,showAll,setShowAll}) => {
  return(
    <div>
      Filter <input value={newFilter} onChange={handleFilterChange}/>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'filter' : 'all' }
      </button>
    </div>
  )
}

export default Filter