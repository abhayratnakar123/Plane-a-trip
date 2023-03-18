import React from "react";
import { useState } from "react";
import Tours from "./component/Tours";
import data from "./data"

const App = () => {
  //fetch data from data file
  const[tours,setTours] = useState (data);

  //remove tour logic use filitring
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);

  }

  // when all tour remove then 

  if(tours.length === 0) {
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <buttonc  className = "btn-white" onClick={()=> setTours(data)}>
          Refresh
        </buttonc>

      </div>
    )
  }

  return (
    <div className = "app">
      <Tours tours={tours} removeTour = {removeTour}> </Tours>
    </div>
  )
};

export default App;
