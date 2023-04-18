const CountryData = ({returnedCountry}) => {
  //functions
    const handleLanguages = () => {
    const langArray = [];
    for (const [key,value] of Object.entries(returnedCountry.languages)) {
      // console.log(`${value}`);
      langArray.push(value)
    }
    // console.log(langArray);
    return langArray
  }

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
    const langArray =  handleLanguages()
    return (
      <div>
        <h2>Official Name - {returnedCountry.name.official}</h2>
        <h3>Common Name - {returnedCountry.name.common}</h3>
        <p>Area - {returnedCountry.area}</p>
        <p>Capital - {returnedCountry.capital}</p>
        <p>Languages</p>
        <ol>
          {/* {langArray.forEach(element => {
              <li>{element}</li>
              console.log(element);
              }
            )} */}
            {/* todo fix langarray list */}
          {langArray.forEach(i => {
          <li>{i}</li>
          console.log(i);
            }
          )}
        </ol>
        <img
          src={returnedCountry.flags.png}
          alt={returnedCountry.flags.alt}
        ></img>
      </div>
    );
  }
}
export default CountryData