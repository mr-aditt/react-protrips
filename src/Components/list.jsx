import React from 'react';
import trips from '../Resources/trips.json'
import './home.css'

function List(){
    console.log(trips);
    return (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Place</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            {trips.map((item,idx)=>{
                console.log("TABEL: ",item);
                return (<tr className='trips-data' key={idx}>
                    <td>{item.date}</td>
                    <td>{item.place}</td>
                    <td>{item.type}</td>
                </tr>)
            })}
        </tbody>
    </table>
    )
}
    
export default List;