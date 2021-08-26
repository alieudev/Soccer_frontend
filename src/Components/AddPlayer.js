import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function AddPlayer({playerList, setPlayerList}) {
    const history = useHistory();
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [foot, setFoot] = useState('')
    const [rating, setRating] = useState('')
    const [imageUrl, setImageUrl] = useState('')

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
                rating,
                imageUrl
          })
        });
          const parsedBody = await res.json();
          setPlayerList([parsedBody, ...playerList]);
          history.push('/manage_team');
    }

    return (
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
            <label> Image URL:
                <input type='text' onChange={(e) => setImageUrl(e.target.value)}/>
            </label>
            <input type='submit' value ="Submit"/>
        </form>
    )
}

export default AddPlayer;