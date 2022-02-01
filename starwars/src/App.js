import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //* creating state
  const [charactersData, setCharacters] = useState([])

  //* useEffect() is ran everytime the page is rendered (opened) or refreshed
  useEffect(() => {

    //* calling an async function so it is ran and the other code wont wait 
    async function getData(){
      //* waiting for the data to be sent back
      const response = await axios.get('https://swapi.dev/api/people')

      //* putting the response into state
      setCharacters(response.data.results)
    }
    getData()

  }, [])

  useEffect(() => {
    console.log(charactersData);
  }, [charactersData]);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <ul>
        {charactersData.map((char) => {
          return (
            <li>{char.name}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
