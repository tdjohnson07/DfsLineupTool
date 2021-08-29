  
import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { CSVReader } from 'react-papaparse';
import {createPlayerLists} from '../actions/actions';
import {Col} from 'react-bootstrap';

export function PlayerList(){
    const players = useSelector(state => state.playerListReducer);
    const [playerlist, setplayerlist] = useState([]);
    const positions = ['def', 'qb','rb','wr','te']

    return(
        <div>
            <ul className="playerlist">
                {positions.map((p,index) => <li key={index} onClick={() => setplayerlist(players[p]) }>{p.toLocaleUpperCase()}</li>)}
            </ul>
            <ul>
                {playerlist.map((p,index) => <li key={index}>{p.name},{p.team}, {p.matchup}, {p.value}<button>Add To List</button></li>)}
            </ul>
        </div>
    )
}

export default PlayerList;