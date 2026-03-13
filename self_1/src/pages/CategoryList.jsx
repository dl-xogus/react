import { useParams } from 'react-router-dom'
import Object from '../comp/Object';

function CategoryList({ products }) {
    let { category } = useParams();
    let obj = products.filter((item) => category == item.category);

    return (
        <div className="list">
            {
                obj.map((item) => <Object key={item.id} item={item}/>)
            }
        </div>
    )
}

export default CategoryList