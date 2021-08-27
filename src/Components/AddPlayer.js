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

    // console.log(playerList)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && height && weight && foot && rating && imageUrl) {
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
        } else {
            window.alert("You Must Fill Out All Fields!")
        }
    }

    return (
        <div className="player-forms">
            <h2>Add a Player</h2>
            <form onSubmit={handleSubmit} className='form-submit'> 
                <label> 
                    Name: 
                </label> 
                <input type='text' onChange={(e) => setName(e.target.value)}/>
                <br></br>
                <label> 
                    Height:
                </label>
                <input type='text' onChange={(e) => setHeight(e.target.value)}/>
                <br></br>
                <label> 
                    Weight: 
                </label>
                <input type='text' onChange={(e) => setWeight(e.target.value)}/>
                <br></br>
                <label> 
                    Foot: 
                </label>
                <input type='text' onChange={(e) => setFoot(e.target.value)}/>
                <br></br>
                <label> 
                    Rating: 
                </label>
                    <input type='text' onChange={(e) => setRating(e.target.value)}/>
                <br></br>
                <label> 
                    Image URL: 
                </label>
                <input type='text' onChange={(e) => setImageUrl(e.target.value)}/>
                <br></br>
                <input type='submit' value ="Submit"/>
            </form>
        </div>
    )
}

export default AddPlayer;