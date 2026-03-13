/* Index.js */
import { NavLink } from 'react-router-dom'

function Index() {
    return (
        <div className='works'>
            <h2>Works</h2>
            <div>
                <figure>
                    <NavLink to='/sub/web'>
                        <p>computer</p>
                        <figcaption>WEB</figcaption>
                    </NavLink>
                </figure>

                <figure>
                    <NavLink to='/sub/mobile'>
                        <p>mobile</p>
                        <figcaption>MOBILE</figcaption>
                    </NavLink>
                </figure>
            </div>
        </div>
    )
}

export default Index