import React from 'react'
import Player from './Player'
import { Link } from 'react-router-dom'
import { GiSoccerKick } from 'react-icons/gi';



function PlayersList({ playerList, setPlayerList }) {


    const playerListInfo = playerList.map((eachPlayer) => {
        return (<Player 
            key = {eachPlayer.id}
            id = {eachPlayer.id}
            name={eachPlayer.name} 
            image={eachPlayer.image}
            weight={eachPlayer.weight}
            height={eachPlayer.height}
            foot={eachPlayer.foot}
            rating={eachPlayer.rating}
            setPlayers={setPlayerList}
            playerList={playerList}
        />)
    })

    return (
        <div className="container">        
            <div className='add_player_btn'>
                <button className='add_player_btn' >
                    <Link  to={'/manage_team/add_player'} style={{textDecoration: 'none'}}>
                        <text className='soccer_dude' style={{fontSize: '25px', marginBottom: '10px'}}>+</text>
                        <GiSoccerKick size={50} className='soccer_dude'/>
                    </Link>
                </button>
            </div>
            <br />
            {playerListInfo}
        </div>
    )
}

export default PlayersList;
