import {useSearchParams} from 'react-router-dom'; // 쿼리 스트링은 useSearchParam
import {useState, useEffect} from 'react';
import boxStyle from './Menu.module.css';
import {getSearchMenu} from '../apis/MenuAPI';
import MenuItem from '../items/MenuItem';

function MenuSearchResult () {

    // console.log('useSearchParams : ',useSearchParams());
    // 쿼리스트링은 여러개를 보낼 수 있으며 값을 추출하는 방식은 get("key");
    const [searchParam] = useSearchParams();
    console.log(searchParam.get('menuName'));
    const menuName = searchParam.get('menuName');

    const [menuList, setMenuList] = useState([]);

    useEffect(()=>{
        setMenuList(getSearchMenu(menuName));
    } , []);

    return(
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
            </div>
        </>
    );

}

export default MenuSearchResult;