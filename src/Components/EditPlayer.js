import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

function EditPlayer({ setPlayerList, players, player = {} }) {
    const history = useHistory()
    const [name, setName] = useState(player.name)
    const [height, setHeight] = useState(player.height)
    const [weight, setWeight] = useState(player.weight)
    const [foot, setFoot] = useState(player.foot)
    const [rating, setRating] = useState(player.rating)

    console.log(players)

    const {id} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:9292/players/${player.id}`, {
            method: 'PATCH',
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
          setPlayerList(players.map(player => player.id === parseInt(id) ? parsedBody : player));
          history.push('/manage_team');
    }

    useEffect(() => {
        setName(player.name);
        setHeight(player.height);
        setWeight(player.weight);
        setFoot(player.foot)
        setRating(player.rating)
      }, [player])

    return (
        <div className="player-forms">
            <h2>Edit a Player</h2>
            <form onSubmit={handleSubmit}>
                <label> 
                    Name:
                </label>
                <input value={name} type='text' onChange={(e) => setName(e.target.value)} />
                <label> 
                    Height:
                </label>
                <input value={height} type='text' onChange={(e) => setHeight(e.target.value)} />
                <label> 
                    Weight: 
                </label>
                <input value={weight} type='text' onChange={(e) => setWeight(e.target.value)} />
                <label> 
                    Foot:
                </label>
                <input value={foot} type='text' onChange={(e) => setFoot(e.target.value)} />
                <label> 
                    Rating:
                </label>
                <input value={rating} type='text' onChange={(e) => setRating(e.target.value)} />
                <br></br>
                <input type='submit' value="Submit" />
            </form>
        </div>
    )
}

export default EditPlayer