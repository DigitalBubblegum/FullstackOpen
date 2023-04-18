import {useState} from 'react'
import countriesService from "./services/countriesService";
import CountryData from './components/CountryData';
function App() {
  //state
  const [form, setForm] = useState('enter a country')
  
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
    })
  }
  const handleLanguages = () => {
    const langArray = [];
    for (const [key,value] of Object.entries(returnedCountry.languages)) {
      console.log(`${value}`);
      langArray.push(value)
    }
    console.log(langArray);
    return langArray
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
      <CountryData returnedCountry ={returnedCountry} handleLanguages = {handleLanguages}/>
    </div>
  );
}
 
export default App;
