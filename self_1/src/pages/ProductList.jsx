import Object from '../comp/Object'

function ProductList({ obj }) {
    return (
        <div className="list">
            {
                obj.map((item) => <Object key={item.id} item={item}/>)
            }
        </div>
    )
}

export default ProductList