import { useState, useEffect } from 'react'

function Home() {
    const [leagueData, setLeagueData] = useState([])

    useEffect(() => {
        fetch(`https://data.football-api.com/v3/standings/1204?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`)
        .then(r => r.json())
        .then(data => setLeagueData(data))
      }, [])

    return (
        <>
            <div style={{linearGradient:'(rgb(0, 83, 160), rgb(253,190,17))'}}>
                <h1 style={{textAlign: "center"}}>Welcome to the Leicester City Manager App!</h1>
                <img className="team-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png" alt='leicester-city-logo'/>
            </div>
            <div className='premier-table'>
                <img className='league-logo' src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png' alt='premier-league-logo'/>
                <h1 className='premier-league'>Premier League Table 2021/2022</h1>
            {leagueData.map(league => {
                return (
                    <h2 key={league.team_id} className='each-team' style={{textAlign: 'center'}}> {league.position}. {league.team_name} {league.overall_w}W {league.overall_d}D {league.overall_l}L {league.gd}GD  {league.points}PTS</h2> 
                )
            })}
            </div>
        </>
    )
} 

export default Home;
