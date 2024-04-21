import './App.css';
import { useState } from "react"
import Axios from "axios"

function App() {

  const [pokemons, setPokemons]= useState([])


  const axiosPokemons = ()=> {
    Axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=850')
    .then(response=>{
      setPokemons(response.data.results)
    })
    .catch (err=>{console.log(err)})
  }

  return (
    <fieldset className='App'>
      <h1>Axios API </h1>
      <hr />
      <button onClick={axiosPokemons}>Fetch Pokemon</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>
              Pokemons names
            </th>
          </tr>
        </thead>
        <tbody>
          { pokemons?.map((pokemon,id) => {
              return (
                <tr key={id}>
                  <td>
                    {pokemon.name}
                  </td>
                </tr>
              )
            
          })
        }
        </tbody>
      </table>



    </fieldset>
    
  );
}

export default App;
