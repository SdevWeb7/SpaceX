import { Link } from "react-router-dom";

function Home () {

   return (
      <main className={'main'}>
         <div className="background"></div>
         <div className="home-left">
            <p style={{letterSpacing: "2px"}}>SO, YOU WANT TO TRAVEL TO</p>

            <h1 style={{letterSpacing: "10px"}}>SPACE</h1>

            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
         </div>

         <div className="home-right">
            <Link to={'/destination'}>EXPLORE</Link>
         </div>
      </main>
   )
}

export default Home;