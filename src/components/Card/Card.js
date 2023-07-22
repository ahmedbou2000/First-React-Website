import './Card.css'
import { FaStar, FaDownload } from 'react-icons/fa'


const Card = (props) => {
    return (
        <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-popular-item-image ' src={props.image} alt="game img" />
                <div className='most-popular-item-content '>
                    <h4 className='most-popular-item-title'>
                        {props.gameInfos.name} <br />
                        <span className=''>sandbox</span>
                    </h4>
                    <ul>
                        <li>
                            <span style={{ color: "yellow" }}>
                                <FaStar />
                            </span>
                            <span>{props.gameInfos.rating}</span>
                        </li>
                        <li>
                            <span style={{ color: "hotpink" }}>
                                <FaDownload />
                            </span>
                            <span>{props.gameInfos.size}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card