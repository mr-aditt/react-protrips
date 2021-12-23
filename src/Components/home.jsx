import React from 'react';
import { Outlet} from "react-router-dom";
import { faSun, faMountain, faBeer} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './home.css'
import trips from '../Resources/trips.json'






function HOME() {
    let s=0,m=0,c=0;
    let sum = 0;
    trips.length>0?
    trips.map(item =>{
        console.log(item);
        if(item.type=='Tropic'){s+=1;}
        else if(item.type=='Trek'){m+=1;}
        else if(item.type=='Club'){c+=1;} 

        console.log(s,m,c);
        sum=s+m+c;
    }):
    console.log("No tip yet");

    
    return (
        <div>
            <div className="num-trips">
                <span className='total-trips'>{sum}</span>trips
            </div>
            <div className="summary">
                <div className="tropic">
                    <div>
                        <span className='trip-tropic'>{s}</span>
                        <FontAwesomeIcon icon={faSun} size="1x" color="white" className="indicate" /></div>
                    </div>
                <div className="trek">
                    <div>
                        <span className='trip-trek'>{m}</span>
                        <FontAwesomeIcon icon={faMountain} size="1x" color="white" className="indicate" /></div>
                    </div>
                <div className="club">
                    <div>
                        <span className='trip-club'>{c}</span>
                        <FontAwesomeIcon icon={faBeer} size="1x" color="white" className="indicate" /></div>
                    </div>
                </div>
            <Outlet />
        </div>
    );
}

export default HOME;