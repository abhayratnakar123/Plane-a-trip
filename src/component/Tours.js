import Card from "./Card";


function Tours({tours,removeTour}) {

    return(
        <div>
            <div  className = "container">
              <h2 className ="title">Plane With Love</h2>
              </div>
               <div className = "cards">{

                //Har ak single tour ke liye card return kr diya
               tours.map( (tour) => {
                    // ...tours  => this is use for copy the object or cloling 
                    return <Card /*props*/ {...tour} removeTour={removeTour}></Card>
                }
                
                )
                }
               </div>
        </div>

    );

    
}

export default Tours;