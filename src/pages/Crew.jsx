import { useEffect, useState } from "react";

function Crew () {
   const [crew, setCrew] = useState(null)
   const [index, setIndex] = useState(0)


   useEffect(() => {
      fetch('/data.json').then(d => d.json()).then(jsonData => setCrew(jsonData.crew[index]))
   }, [index])

   console.log(crew)
   const changeCrew = (index) => {
      setIndex(index)
   }
   return (
      <main className={'main-crew'}>
         <div className="background-crew"></div>


         <div className="crew-left">
            <p className="title"><span className={'title-span'}>02</span> MEET YOUR CREW</p>

            <div className="container-desc">
               <p className="role">{crew && crew.role}</p>
               <h1>{crew && crew.name}</h1>
               <p>{crew && crew.bio}</p>

               <div className="change-crew">
                  <div className={`button-change ${index === 0 ? 'active' : ''}`} onClick={() => changeCrew(0)}></div>
                  <div className={`button-change ${index === 1 ? 'active' : ''}`} onClick={() => changeCrew(1)}></div>
                  <div className={`button-change ${index === 2 ? 'active' : ''}`} onClick={() => changeCrew(2)}></div>
                  <div className={`button-change ${index === 3 ? 'active' : ''}`} onClick={() => changeCrew(3)}></div>
               </div>
            </div>
         </div>


         <div className="crew-right">
            <img src={crew ? crew.images.png : ""} alt="a" />
         </div>

      </main>
   )
}

export default Crew;