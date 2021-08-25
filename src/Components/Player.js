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
            <div>
                <h2>{name}</h2>
                <h3>{height} cm</h3>
                <h3>{weight} lbs</h3>
                <p>{foot} foot</p>
                <p>rating: {rating}</p>
                <img src={image} alt={name}></img>
                
                <button onClick={handleDelete}>Delete</button>
            </div>
    )
}

export default Player