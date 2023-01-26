import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Table from "./Components/table";
import {Link} from "react-router-dom";
import Home from "./Components/home";


const App = () => {
    // const myState = useSelector((state) =>
    //     state.changeTheNumber
    // );
    //
    // const dispatch = useDispatch();
    return (

        <div className={`main`}>
            <BrowserRouter>
                {/*<h1 className={`h1`}>Increment/Decrement Counter</h1>*/}
                {/*<h3 className={`h3`}>Using React and Redux</h3>*/}
                {/*<div className={`div`}>*/}
                {/*    <button className={`btn`} onClick={() => dispatch(decNumber())}><span>-</span></button>*/}
                {/*    <input className={`input`} type="text" value={myState}/>*/}
                {/*    <button className={`btn`} onClick={() => dispatch(incNumber())}><span>+</span></button>*/}
                {/*</div>*/}
                {/*<div className={`div`}>*/}
                {/*    <button className={`btn1`}><Link className={`link`} to="/table"> Click to view table of <span>{myState}</span></Link>*/}
                {/*    </button>*/}
                {/*</div>*/}

                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/table' element={<Table/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
