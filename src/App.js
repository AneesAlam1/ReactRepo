import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import './mycss.css';

function App() {
  const [listitem, updatelist] = useState([]);
  const [todo, setTodo] = useState("");

  function AddItem() {
    if (todo.length > 0) {
      updatelist([...listitem, todo])
      setTodo("")
    } else {
      alert("Please add ToDo!!")
    }
  }

  function removeItem(e) {
    let currentItem = e.target.parentElement.innerText;
    const filteredItem = listitem.filter(item => {
      return item !== currentItem
    })
    updatelist([...filteredItem])
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
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label mb-3">Enter List For Rememeber</label>
                <input type="text" value={todo} className="form-control" id="text" onChange={(e) => { setTodo(e.target.value) }} />
                <div id="emailHelp" className="form-text fcolor">We'll Sure to remind you every thing</div>
                <br>
                </br>
                <button className="btn btn-success" onClick={(e) => AddItem(e)}>Add</button>
              </div>
            {/* input field close */}
            <ul className="list-group" style={{ height: "250px", overflowY: "auto" }}>
              {
                listitem.map(item => {
                  return <>
                    <li className="list-group-item">{item}
                      <input style={{ float: "right", fontSize: "10px" }}
                      type="button" className='btn btn-danger' value="X" onClick={(e) => { removeItem(e) }} />
                    </li>
                  </>
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
