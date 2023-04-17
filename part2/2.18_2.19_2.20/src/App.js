import {useState} from 'react'
import countriesService from "./services/countriesService";
import CountryData from './components/CountryData';
function App() {
  //state
  const [form, setForm] = useState('enter a country')
  // const [countryInfo, setCountryInfo] = useState('country information')
  const [returnedCountry, setReturnedCountry] = useState([])
  //function
  const handleFormChange = (event) => {
      console.log(event.target.value)
      setForm (event.target.value)
  }
  const fetchCountry = (event) => {
    event.preventDefault()
    countriesService.findCountries(form.toLowerCase())
      .then(response => {
      setReturnedCountry(response[0])
      // const name = response[0].name.official
      // setCountryInfo(name)
    })
  }

  console.log(returnedCountry);
  return (
    <div className="App">
      <h1 className='Heading1'>
        Find Countries
      </h1>
       <form onSubmit={fetchCountry}>
                <input value={form} onChange={handleFormChange} onClick={()=>setForm('')}/>
                <button type = "submit">save</button>
      </form>
      {/* <button onClick={handleFetchAll}>fetch all</button> */}
      {/* <h2>{countryInfo}</h2> */}
      <CountryData returnedCountry ={returnedCountry}/>
    </div>
  );
}
 
export default App;
