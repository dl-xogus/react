/* List.js */
function List({ d }) {
    return (
        <div>
            {
                d.map((item) =>
                    <figure key={item.id}>
                        <a href={item.url} target="_blank">
                            <p>image</p>
                            <figcaption>{item.title}</figcaption>
                        </a>
                    </figure>
                )
            }
        </div>
    )
}

export default List