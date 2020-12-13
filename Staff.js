import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

const Staff = () => {
    const [list, setList] = useState([
        {id:uuid(), Name: 'Karen Erickson ++ ', Position: 'Field Consultant ++ ', Service: '31 years'},
        {id:uuid(), Name: 'Dan Douvan ++ ', Position: 'Field Consultant ++ ', Service: '34 years'},
        {id:uuid(), Name: 'Abdul Abdally ++ ', Position: 'Market Manager ++ ', Service: '27 years'},
        {id:uuid(), Name: 'Manav Chabra ++ ', Position: 'Field Consultant ++ ', Service: '14 years'},
        {id:uuid(), Name: 'Sam Halabi ++ ', Position: 'Field Consultant ++ ', Service: '24 years'},
    ])
    const addStaff = () => {
        setList([...list, {id:uuid(), Name: 'Jamie Martin ++ ', Position:'Field Consultant ++ ', Service: '20 years'}])
    };
    return (
        <div className='container'>
            <h1 className='mt-5'>Here is a List of Senior Employees at 7-Eleven Inc. Ontario, Canada:</h1>
            <hr/>
            <p>Ontario market is one of the 5 markets of 7-Eleven Canada Inc. 7-Eleven is a multinational convenience store chain with majority of stores having gas stations. The motto here is to provide everything imaginable within a small convenient store. This requires skills in multiple lines of operations, product knowledge and handling and selling of such variety of products and services.</p>
            <ul>
            {list.map(list => {
                return( <li key={list.id}>{list.Name}{list.Position}{list.Service}</li>)
            })}
            </ul>
            <button className= 'btn btn-success' onClick={addStaff}>Add Staff</button>
        </div>
       )
    }

export default Staff;
