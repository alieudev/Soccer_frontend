import { useState} from 'react'

function Home() {
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Player Name:
                    <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
} 

export default Home;