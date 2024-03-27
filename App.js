import Search from './Search';
import Display from './Display';
import React, { useState,useEffect } from 'react';
import Adddata from './Adddata';
import Axiosdata from './Axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

const [data,setdata]=useState([]);

const post = async (data1) => {
  const response = await Axiosdata.post('http://localhost:3001/data',data1);
  setdata([...data, response.data]);
  };

  const fetchalldata=async ()=>{
    const response=await Axiosdata.get("http://localhost:3001/data");
    return response.data;
    };

const getalldata=async()=>{
      const alldata=await fetchalldata();
      if(alldata) 
          {
            setdata(alldata)
          }
        }

    useEffect(() => {
      getalldata();
    },[]);    
    
return (
    <div>

<Router>

    <Routes>
    <Route path='/add' exact  element={<Adddata data={data} post={post}/>}/>
    <Route  path='/' exact element={<Adddata data={data} post={post} />}/>
    <Route path='/display' exact element={<Display data={data} />}/>
    <Route path='/search' exact element={<Search/>}/>
    </Routes>

</Router>

    </div>
  );
}

export default App;
