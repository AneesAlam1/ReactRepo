import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import './mycss.css';

function App() {
  const [listitem, updatelist] = useState([]);
  const [todo, setTodo] = useState("");

  function AddItem(e) {
    e.preventDefault();
    updatelist([...listitem,todo])
    setTodo("")
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
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label mb-3">Enter List For Rememeber</label>
                <input type="text" value={todo} className="form-control" id="text" onChange={(e) => { setTodo(e.target.value) }} />
                <div id="emailHelp" className="form-text fcolor">We'll Sure to remind you every thing</div>
                <br>
                </br>
                <button className="btn btn-success" onClick={(e) => AddItem(e)}>Add</button>
              </div>
            </form>
            {/* input field close */}
            <ul className="list-group">
              {
                listitem.map(item => {
                  return <li key={item} className="list-group-item">{item}</li>
                })
              } 
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
