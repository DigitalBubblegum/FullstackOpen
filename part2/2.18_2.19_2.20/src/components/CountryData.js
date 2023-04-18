const CountryData = ({returnedCountry,handleLanguages}) => {
  // console.log(returnedCountry.name.common);
  console.log('size of array is ' + returnedCountry.length);
  console.log(returnedCountry);
  if (returnedCountry.length === 0) {
    return (
      <h2>
      Enter A country name
      </h2>
    )
  }
  else{
    console.log(returnedCountry.flags.png)
    console.log(returnedCountry.languages)
    
    return (
        <div>
          <h2>Official Name - {returnedCountry.name.official}</h2>
          <h3>Common Name - {returnedCountry.name.common}</h3>
          <p>Area - {returnedCountry.area}</p>
          <p>Capital - {returnedCountry.capital}</p>
          <p>Languages</p>
          <ol>
            {/* <li>{()=>handleLanguages}</li> */}
            {/* todo fix languages  */}
          </ol>
          <img src = {returnedCountry.flags.png} alt = {returnedCountry.flags.alt}></img>
          
        </div>
    )
  }
}
export default CountryData