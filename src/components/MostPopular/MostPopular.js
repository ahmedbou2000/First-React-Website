import './MostPopular.css'
import manette from '../../assets/images/manette.jpg'

const MostPopular = () => {
    return (
        <>
            <div className='section-wrapper mt-3 '  >
                <div className='section-header'>
                    <h4>Most Popular</h4>
                </div>

                <div className='most-popular-items'>
                    <div className='most-popular-item'>
                        <div className='card-wrapper'>
                            <img className='most-popular-item-image ' src={manette} alt="game img" />
                            <div className='most-popular-item-content '>
                                <h4 className='most-popular-item-title'>
                                    Fortnite <br/>
                                    <span className=''>sandbox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.8</span>
                                    </li>
                                    <li>
                                        <span>2.3M</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='most-popular-item'>
                        <div className='card-wrapper'>
                            <img className='most-popular-item-image ' src={manette} alt="game img" />
                            <div className='most-popular-item-content '>
                                <h4 className='most-popular-item-title'>
                                    Fortnite <br/>
                                    <span className=''>sandbox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.8</span>
                                    </li>
                                    <li>
                                        <span>2.3M</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='most-popular-item'>
                        <div className='card-wrapper'>
                            <img className='most-popular-item-image ' src={manette} alt="game img" />
                            <div className='most-popular-item-content '>
                                <h4 className='most-popular-item-title'>
                                    Fortnite <br/>
                                    <span className=''>sandbox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.8</span>
                                    </li>
                                    <li>
                                        <span>2.3M</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='most-popular-item'>
                        <div className='card-wrapper'>
                            <img className='most-popular-item-image ' src={manette} alt="game img" />
                            <div className='most-popular-item-content '>
                                <h4 className='most-popular-item-title'>
                                    Fortnite <br/>
                                    <span className=''>sandbox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.8</span>
                                    </li>
                                    <li>
                                        <span>2.3M</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='most-popular-item'>
                        <div className='card-wrapper'>
                            <img className='most-popular-item-image ' src={manette} alt="game img" />
                            <div className='most-popular-item-content '>
                                <h4 className='most-popular-item-title'>
                                    Fortnite <br/>
                                    <span className=''>sandbox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.8</span>
                                    </li>
                                    <li>
                                        <span>2.3M</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MostPopular