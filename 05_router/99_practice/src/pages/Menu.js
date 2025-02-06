import {useEffect , useState} from 'react';
import {getMenuList} from '../apis/MenuAPI';
import MenuItem from '../items/MenuItem';

function Menu (){

    const [factor , setFactor] = useState([]);

    useEffect(()=>{
        async function fetchMethod (){

            const data = await getMenuList();

            console.log('메뉴 페이지에서 data : ', data.results);
            setFactor(data.results);
        }
        fetchMethod();
    },[]);

    return(
    <>
        <div>
        <ul>
            <li>
            {factor.map((menu, idx) => (<MenuItem key={idx} menu={menu} index={idx} />))}

            </li>
        </ul>    
        </div>
    </>
    );
}

export default Menu;