import { useEffect, useState } from "react";
import { debounce } from "../components/debounce.jsx";

function Technology () {
   const [technology, setTechnology] = useState(null)
   const [index, setIndex] = useState(0)
   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

   useEffect(() => {
      fetch('/data.json').then(d => d.json()).then(jsonData => setTechnology(jsonData.technology[index]))
   }, [index])

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth)
      };
      const debounceResize = debounce(handleResize, 15);
      window.addEventListener('resize', debounceResize);

      return () => {
         window.removeEventListener('resize', debounceResize);
      };
   }, [])

   const changeTechnology = (index) => {
      setIndex(index)
   }

   return (
      <main className={'main-technology'}>
         <div className="background-technology"></div>


         <div className="technology-left">
            <div className="title-techno">
               <p><span className={'span-title'}>03</span> SPACE LAUNCH 101</p>
            </div>

            <div className="container-desc">
               <div className="change-techno">
                  <div className={`button-change ${index === 0 ? 'active' : ''}`} onClick={() => changeTechnology(0)}>1</div>
                  <div className={`button-change ${index === 1 ? 'active' : ''}`} onClick={() => changeTechnology(1)}>2</div>
                  <div className={`button-change ${index === 2 ? 'active' : ''}`} onClick={() => changeTechnology(2)}>3</div>
               </div>
               <div className="desc">
                  <p>The terminology...</p>
                  <h1>{technology ? technology.name.toUpperCase() : ''}</h1>
                  <p className={'destination-desc'}>{technology ? technology.description : ""}</p>
               </div>
            </div>

         </div>



         <div className="technology-right">
            {technology && <img src={windowWidth >= 860 ? technology.images.portrait : technology.images.landscape} alt="a" />}
         </div>
      </main>
   )
}

export default Technology;