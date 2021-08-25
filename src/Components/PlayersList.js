import { useState, useEffect } from 'react'
import Player from './Player'
import { useHistory } from 'react-router-dom'

function PlayersList() {
    const history = useHistory();
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [foot, setFoot] = useState('')
    const [rating, setRating] = useState('')
    const [playerList, setPlayerList] = useState([])

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:9292/players`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                Accept: 'application/json' 
            },
            body: JSON.stringify({
                name,
                height,
                weight,
                foot,
                rating
          })
        });
          const parsedBody = await res.json();
          setPlayerList([parsedBody, ...playerList]);
          history.push('/manage_team');
    }

    useEffect(() => {
        fetch(`http://localhost:9292/players`)
        .then(r => r.json())
        .then(setPlayerList)
    }, [])

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
        <div>
            <form onSubmit={handleSubmit}> 
                <label> Name:
                    <input type='text' onChange={(e) => setName(e.target.value)}/>
                </label> 
                <label> Height:
                    <input type='text' onChange={(e) => setHeight(e.target.value)}/>
                </label>
                <label> Weight:
                    <input type='text' onChange={(e) => setWeight(e.target.value)}/>
                </label>
                <label> Foot:
                    <input type='text' onChange={(e) => setFoot(e.target.value)}/>
                </label>
                <label> Rating:
                    <input type='text' onChange={(e) => setRating(e.target.value)}/>
                </label>
                <input type='submit' value ="Submit"/>
            </form>

            {playerListInfo}

        </div>
    )
}

export default PlayersList;