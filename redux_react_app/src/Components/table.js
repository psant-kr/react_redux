import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Table = () => {
    const myState = useSelector((state) =>
        state.changeTheNumber
    );
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div style={{width: '100%', height: '100vh', backgroundColor: 'lightgoldenrodyellow'}}>
            <div style={{fontSize: '40px', fontWeight: 'bold', paddingTop: '50px', color: 'darkblue'}}>Table
                of {myState}</div>
            <div className={`div`}>
                <button className={`btn1`}><Link className={`link`} to="/"> Back </Link>
                </button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>

                <table>
                    {arr.map(ele => (
                        <tr>
                            <td>{myState} * {ele} = {ele * myState}</td>
                        </tr>
                    ))}
                    {/*<div>{myState} * 1 = {1 * myState}</div>*/}
                    {/*<div>{myState} * 2 = {2 * myState}</div>*/}
                    {/*<div>{myState} * 3 = {3 * myState}</div>*/}
                    {/*<div>{myState} * 4 = {4 * myState}</div>*/}
                    {/*<div>{myState} * 5 = {5 * myState}</div>*/}
                    {/*<div>{myState} * 6 = {6 * myState}</div>*/}
                    {/*<div>{myState} * 7 = {7 * myState}</div>*/}
                    {/*<div>{myState} * 8 = {8 * myState}</div>*/}
                    {/*<div>{myState} * 9 = {9 * myState}</div>*/}
                    {/*<div>{myState} * 10 = {10 * myState}</div>*/}
                </table>
            </div>

            < /div>

                )

                }

                export default Table;
