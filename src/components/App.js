import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import Container from "./Container";

function App() {
  const [dogs, setDogs] = useState([])
  const [currentDog, setCurrentDog] = useState("")
  const [filter, setFilter] = useState(false)
  const [filteredDogs, setFilteredDogs] = useState(dogs)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(r => r.json())
    .then(d => {
      setDogs(d)
      setFilteredDogs(d)
    })
  }, [])

  function spanClick(dog) {
    setCurrentDog(dog)
  }

  function dogClick() {
    fetch(`http://localhost:3001/pups/${currentDog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isGoodDog: !currentDog.isGoodDog
      })
    })
    .then(r => r.json())
    .then(d => {
      setDogs(dogs.map(dog => {
        if(dog.id === d.id) {
          return { ...d, isGoodDog: d.isGoodDog }
        } else {
          return dog
        }
      }))
      setCurrentDog(d)
    })
  }

  function filterClick() {
    setFilter(() => !filter)
    !filter ? setFilteredDogs(dogs.filter(dog => dog.isGoodDog)) : setFilteredDogs(dogs)
  }

  return (
    <div className="App">
      <Filter filter={filter} onFilterClick={filterClick}/>
      <DogBar dogs={filteredDogs} onSpanClick={spanClick} />
      <Container currentDog={currentDog} onDogClick={dogClick} />
    </div>
  );
}

export default App;
