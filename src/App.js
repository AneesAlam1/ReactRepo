import logo from './logo.svg';
import React, { useState } from 'react'; 
import './App.css';
import './mycss.css';

function App() {
   const[listitem,updatelist]=useState("List will be create"); 
   
   const process=(event)=>{
         updatelist(event.target.value);
   }

  return (
    <>
    <div className="container-fluid background">
      <div className="Row ht"></div>
      <div className="row">
        <div className="col-sm-4">

        </div>
        <div className="col-sm-4 center">
          <h2>To Do App</h2>
          {/* inputfield */}
          <form>
          <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label mb-3">Enter List For Rememeber</label>
    <input type="text" class="form-control" id="text" onChange={process}/>
    <div id="emailHelp" class="form-text fcolor">We'll Sure to remind you every thing</div>
    <br>
    </br>
    <button className="btn btn-success">Add</button>
  </div>
  
        </form>
        {/* input field close */}
        <ul class="list-group">
        <li class="list-group-item">{listitem}</li>
        
        </ul>
        </div>
        <div className="col-sm-4">
          {/* Last Extra div         */}
        </div>

      </div>

    </div>
    </>
  );
}

export default App;
