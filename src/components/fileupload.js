  
import React, {  } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { CSVReader } from 'react-papaparse';
import {createPlayerLists} from '../actions/actions';

export function Fileupload(){
    const dispatch = useDispatch();

    const handleOnDrop = (data) => {
        let players = [];
        data.forEach((data, index) => {
            if(index <= 1){
                //first two lines of file aren't used
                return;
            }
            let player = {name: data.data[12], team: data.data[17], position: data.data[10], matchup: data.data[16], avgPts: data.data[18], value: parseInt(data.data[15]) }
            players.push(player);
        });

        console.log(players);
        dispatch(createPlayerLists(players));
      };

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err);
      };
    
    const handleOnRemoveFile = (data) => {
        console.log(data);
      };

    return(
        <div>
            <h5>Click and Drag Upload</h5>
                <CSVReader onDrop={handleOnDrop} onError={handleOnError} addRemoveButton onRemoveFile={handleOnRemoveFile}>
                    <span>Drop CSV file here or click to upload.</span>
                </CSVReader>
        </div>
    )
}

export default Fileupload;