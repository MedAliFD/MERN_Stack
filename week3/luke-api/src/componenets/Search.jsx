import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [results, setResults] = useState({});
  const [id, setId] = useState("");
  const [searchFor, setSearchFor] = useState("");
  const [showResults, setShowResults] = useState(false); // State to control div visibility

  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.py4e.com/api/${searchFor}/${id}`)
      .then(res => {
        console.log(res.data);
        setResults(res.data);
        setShowResults(true); // Show results after successful API call
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <label htmlFor="">Search for : </label>
          <select onChange={(e) => setSearchFor(e.target.value)}>
            <option>planets</option>
            <option>people</option>
          </select>
        </div>
        <div>
          <label htmlFor="">ID : </label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <br />

      {showResults && ( // Conditional rendering based on showResults state
        <div>
          {searchFor === "people" ? (
            <div>
              <h2>{results.name}</h2>
              <p>Height: {results.height}</p>
              <p>Mass: {results.mass}</p>
              <p>Hair Color: {results.hair_color}</p>
              <p>Skin Color: {results.skin_color}</p>
              
            </div>
          ) : (
            <div>
              <h2>{results.name}</h2>
              <p>Climate : {results.climate}</p>
              <p>Terrain : {results.terrain}</p>
              <p>Surface Water {results.surface_water ? "True" : "False"}</p>
              <p>Population : {results.population}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
