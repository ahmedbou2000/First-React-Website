import './MostPopular.css'
import Card from '../Card/Card'
import fortnite from './../../assets/images/fortnite.jpg'
import gta5 from './../../assets/images/gta5.jpg'
import PES2022 from './../../assets/images/PES 2022.jpg'
import Cyberpunk from './../../assets/images/Cyberpunk.jpg'

const MostPopular = () => {
    // listes des jeux : 
    const listOfGames = [
        {
            name: "GTA V",
            rating: 4.5,
            size: "10 MB",
            image: gta5
        },
        {
            name: "PES 2022",
            rating: 4.2,
            size: "9.8 MB",
            image: PES2022
        },
        {
            name: "Fortnite",
            rating: 4.7,
            size: "11 MB",
            image: fortnite
        },
        {
            name: "Cyberpunk 2023",
            rating: 4.4,
            size: "8.5 MB",
            image: Cyberpunk
        }
    ];

    return (
        <>
            <div className='section-wrapper mt-3 '  >
                <div className='section-header'>
                    <h4>Most Popular</h4>
                </div>

                {console.log(listOfGames.length)}
                <div className='most-popular-items'>
                    {listOfGames.map(game=>{
                        return <Card gameInfos = {game} key={game.name} image = {game.image} />
                    })}
                </div>


            </div>
        </>
    )
}

export default MostPopular