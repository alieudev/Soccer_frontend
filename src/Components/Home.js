import { useState } from 'react'

function Home() {
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name)
    }

    return (
        <div style={{linearGradient:'(rgb(0, 83, 160), rgb(253,190,17))'}}>
            <h1 style={{textAlign: "center"}}>Welcome to the Leicester City Manager App!</h1>
            <img className="team-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png" />
        </div>
    )
} 

export default Home;