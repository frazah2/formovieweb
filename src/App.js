
import { useEffect, useState } from 'react';
import './App.css';
import {BASE_URL,BACKDROP_BASE_URL} from './config';
import {MoviShowAPI} from '../src/seris/movi-show.js'
import MovieShowList from './component/moviList/MoviList.jsx';
import MovieDetail from './component/moviDetail/MoviDetail';

function App() {

  const [currentTVShow, setCurrentTVShow] = useState({})

  // console.log(`${BASE_URL}${currentTVShow.backdrop_path}`)

  async function fetchData(){
    try{
      const response = await MoviShowAPI.fetchPopular()
      setCurrentTVShow(response)
    }catch(error){
      console.log(error.message)
    }
    
  }



  useEffect(()=>{
    fetchData()
  },[])






  return (
    <div className="main" style={{backgroundImage: `url('${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}')`}}>
      <div className="header">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-0">
            <div className="col-xs-12 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2 ">
              <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/The_Garfield_Movie_logo.png" alt="logo" />
              </div>

            </div>


            <div className="col-xs-12 col-sm-8 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
              <div className="search">
                {/* sdsdsd */}
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <MovieDetail tvShow={currentTVShow} />

      <MovieShowList/> 


    </div>
  );
}

export default App;