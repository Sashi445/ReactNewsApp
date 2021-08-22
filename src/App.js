import React, {useState, useEffect} from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  const initialState = {
    loading : true,
    error : false,
    message : "None",
    articles : []
  }

  const [newsState, setNewsState] = useState(initialState);


  useEffect(() => {
    const getNewsItems =  async () => {
      try{
          const response = await axios.get(" https://newsapi.org/v2/top-headlines?country=us&apiKey=56e048e588d742a1b9a51aafc13188c7");
          setNewsState(prevState => ({
            ...prevState,
            loading : false,
            message : "success",
            articles : response.data.articles
          }));
      }catch(ex){
        let message = "";
        if(ex.response){
          message = `[${ex.response.status}] : ${ex.response.data.message} : [${ex.response.data.status}]`
        }else{
            message = "SERVER DOWN!"
        }
        setNewsState({
          loading : false,
          message : message,
          error : true,
        });
      }
      
  
    };
    getNewsItems();
  },  []);

  if(newsState.error){
    return <div>
      <h3>{newsState.message}</h3>
    </div>
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        {(!newsState.loading && !newsState.error) ? <Home articles={newsState.articles} /> : <p>Loading!</p>}
      </div>
    </div>
  );
}

export default App;
