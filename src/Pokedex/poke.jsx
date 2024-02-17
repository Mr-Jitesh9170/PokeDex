import { useState } from "react"
import "./poke.scss"
import { useEffect } from "react";

export const PokeDex = () => {
  const [api, setApi] = useState([]);
  const callApi = async () => {
    try {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      let result = await res.json();
      setApi(result.results)
      console.log(result.results[0].url)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    callApi();
  }, [])

  return (
    <div className="pokebox-container">
      <h1>PokeDex</h1>
      <div className="pokedex-content">
        {
          api.map((_, i) => {
            return (
              <div className="card">
                <img width={80} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} alt="" />
                <b>#0{i}</b>
                <p>{_.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}