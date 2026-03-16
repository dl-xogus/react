import useStore from '../store'

function Item() {

    const { data, update } = useStore();        // store에서 꺼낼 때

    return (
        <div>
            {data}
            <button onClick={update}>
                변경
            </button>
        </div>
    )
}

export default Item