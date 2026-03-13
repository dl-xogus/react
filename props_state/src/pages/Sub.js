/* Sub.js */
import { useParams } from 'react-router-dom'
import data from '../data.json'
import List from "../comp/List"

function Sub() {
    let { type } = useParams();       // useParams() : 파라미터의 값을 얻을 수 있음

    return (
        <div className='list'>
            <h2>{type} List</h2>
            <List d={data[type]} />
        </div>
    )
}

export default Sub