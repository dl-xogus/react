import List from './List'
import CountList from './CountList'

function Props() {
    let data = [
        { id: 111, title: '아바타', photo: './imgs/logo192.png' },
        { id: 222, title: '슈퍼맨', photo: './imgs/logo192.png' },
        { id: 333, title: '해안선', photo: './imgs/logo192.png' }
    ];
    
    let count = [
        {id: 11, value: 10},
        {id: 22, value: 100}
    ];

    return (
        <div className='App'>
            <h2>Props</h2>
            <ul>
                {   // innerHTML이 아닌 태그 영역 안에서 바로 출력 가능
                    data.map(function (item) {      // forEach 대신 반복출력
                        return <List key={item.id} obj={item}/>
                    })
                }
            </ul>

            <div>
                {
                    count.map(function (item) {
                        return <CountList key={item.id} obj={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Props