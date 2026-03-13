import { NavLink, useParams } from 'react-router-dom'

function ProductView({ products }) {
    let { id } = useParams();
    let obj = products.find((item) => id == item.id);

    return (
        <div className="view">
            <a className="img-wrap" href={obj.images} target='_blank'><img src={obj.images} alt="" /></a>

            <div className="right">
                <div className="top">
                    <p className="category">{obj.category}</p>
                    <p className="title">{obj.title}</p>
                    <p className="rating">★{obj.rating}</p>
                    <div>
                        <p className="price">${obj.price}</p>
                        <p className='stock'>남은 개수 : <span>{obj.stock}</span>개</p>
                    </div>
                    <p className="description">{obj.description}</p>
                </div>
                <div>
                    <p className="brand">{obj.brand}</p>
                    <NavLink to='/'>
                        <button>Home</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProductView