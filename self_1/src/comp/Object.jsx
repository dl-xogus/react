import { NavLink } from 'react-router-dom'

function Object({ item }) {
    return (
        <figure className="obj">
            <NavLink to={`/view/${item.id}`}>
                <p className="img-wrap"><img src={item.thumbnail} /></p>
                <figcaption className="details">
                    <div className='top'>
                        <div>
                            <p className="title">{item.title}</p>
                            <p className="rating">★{item.rating.toFixed(1)}</p>
                        </div>
                        <p className='brand'>{item.brand}</p>
                    </div>

                    <div className="bot">
                        <b className="price">${item.price}</b>
                        <p className="brand">{item.category}</p>
                    </div>
                </figcaption>
            </NavLink>
        </figure>
    )
}

export default Object