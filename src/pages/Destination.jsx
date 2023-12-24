import { useEffect, useState } from "react";

function Destination () {
   const [destination, setDestination] = useState(null)
   const [index, setIndex] = useState(0)


   useEffect(() => {
      fetch('/data.json').then(d => d.json()).then(jsonData => setDestination(jsonData.destinations[index]))
   }, [index])

   const changeDestination = (index) => {
      setIndex(index)
   }

   return (
      <main className={'main-destination'}>
         <div className="background-destination"></div>


         <div className="destination-left">
            <div className="title"><p><span>01</span>PICK YOUR DESTINATION</p></div>
            <img src={ destination ? destination.images.png : ''} alt="a" />
         </div>



         <div className="destination-right">
            <div className="change-destination">
               <p className={index === 0 ? 'active' : ''} onClick={() => changeDestination(0)}>MOON</p>
               <p className={index === 1 ? 'active' : ''} onClick={() => changeDestination(1)}>MARS</p>
               <p className={index === 2 ? 'active' : ''} onClick={() => changeDestination(2)}>EUROPA</p>
               <p className={index === 3 ? "active" : ""} style={{marginRight: 0}} onClick={() => changeDestination(3)}>TITAN</p>
            </div>

            <h1>{destination ? destination.name.toUpperCase() : ''}</h1>

            <p className={'destination-desc'}>{destination ? destination.description : ""}</p>

            <div className="details">
               <div className="distance-container">
                  <label htmlFor={'distance-input'}>AVG. DISTANCE</label>
                  <p id={'distance-input'} type="text" disabled={true}>{destination ? destination.distance : ""}</p>
               </div>

               <div className="travel-time-container">

                  <label htmlFor={'travel-time-input'}>EST. TRAVEL TIME</label>
                  <p id={'travel-time-input'} type="text" disabled={true}>{destination ? destination.travel : ""}</p>
               </div>
            </div>
         </div>

      </main>
   )
}

export default Destination;