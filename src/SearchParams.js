import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  //const [animal, setAnimal] = useState("");
  //const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location value"
            onChange={event => {
              return setLocation(event.target.value);
            }}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        {/* <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            //onChange={event => setAnimal(event.target.value)}
            onBlure={event => setAnimal(event.target.value)}
          >
            <option> ALL </option>
            {ANIMALS.map(animal => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onBlur={event => setBreed(event.target.value)}
          >
            <option value="" className="">
              All
            </option>
            {breeds.map(breedString => {
              return (
                <option value={breedString} key={breedString}>
                  {breedString}
                </option>
              );
            })}
          </select>
        </label> */}
        <button> Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
