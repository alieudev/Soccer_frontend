import { Link } from 'react-router-dom';

function Player({ id, name, height, weight, foot, rating, setPlayers, playerList, image }) {

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:9292/players/${id}`, {
            method: 'DELETE',
            headers: { Accept: 'application/json' }
        })

        const parsedBody = await res.json();

        setPlayers(playerList.filter((player) => player.id !== parsedBody.id));
    }

    return (
            <div className='player-display'>
                <img src={image} alt={name} className='player-image'></img>
                <h2 style={{textAlign: "center"}}>{name}</h2>
                <ul className='player-list'>
                    <li><text style={{fontWeight: "bold"}}>Height:</text> {height} cm</li>
                    <li><text style={{fontWeight: "bold"}}>Weight:</text> {weight} lbs</li>
                    <li><text style={{fontWeight: "bold"}}>Foot:</text> {foot}</li>
                    <li><text style={{fontWeight: "bold"}}>Rating:</text> {rating}</li>
                    <br />
                    <button className='btn' onClick={handleDelete}>Delete</button>
                    <button className='btn'><Link to={`/manage_team/${id}/edit`}  style={{textDecoration: 'none', color: 'black'}} >Edit Player</Link> </button>
                </ul>
            </div>
    )
}

export default Player