export const playerListReducer = (state = {qb:[], rb: [], wr:[], te: [], def: []}, action) => {
    switch(action.type){
        case "CREATE_PLAYERS_LIST":{
            let newState = {...state};
            action.players.forEach(player => {
                switch(player.position){
                    case "QB":
                        newState.qb.push(player);
                        break;
                    case "RB":
                        newState.rb.push(player);
                        break;
                    case "TE":
                        newState.te.push(player);
                        break;
                    case "DST":
                        newState.def.push(player);
                        break;
                    case "WR":
                        newState.wr.push(player);
                        break;
                    default:{
                        break;
                    }
                }
                
            });
            console.log(newState);
            return newState;
        }
        default:{
            return state;
        }
    }
}