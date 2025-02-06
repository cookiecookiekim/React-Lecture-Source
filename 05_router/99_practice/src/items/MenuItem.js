import {NavLink} from 'react-router-dom';

function MenuItem ({menu , index}) {
    return(
    <>
        <NavLink to={`/menu/${index}`}>
        <div>
            <h3> 이름 : {menu.name}</h3>
            <h3> url : {menu.url}</h3>
        </div>
        </NavLink>
    </>
    );
}

export default MenuItem;