/* 메뉴들을 보여주는 페이지 */
/* /menu 요청이 들어오면 보여줄 페이지 */
import boxStyle from './Menu.module.css';
import {useEffect , useState} from 'react'; // package에 있는 이름으로 삽입
import {getMenuList} from '../apis/MenuAPI';
import MenuItem from '../items/MenuItem';
import {useNavigate} from 'react-router-dom';

function Menu(){

    const [menuList , setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    // 마운트 시점에 동작 (메뉴 전체 조회)
    useEffect(() => {
        /* Menu 컴포넌트는 마운트 되는 시점에 데이터를 가져와,
            state에 담아 줄 것. */

        // 이번에는 fetch 사용 안 하고 분리하기
        setMenuList(getMenuList());
    });

    const changeHandler = e => setSearchValue(e.target.value);
    // 검색하기 버튼 누르면 다른 페이지로 검색 결과 보여줄 것
    const clickHandler = () => {
        // 관리하고 있는 값을 쿼리스트링으로 전달
        navigate(`/menu/search?menuName=${searchValue}`)
    }

    return(
        <>
            <h1>Menu 페이지 전체 메뉴 조회</h1>
            <div>
                <input type='search' name="menuName"
                onChange={changeHandler}/>
                <button
                    onClick={clickHandler}>메뉴 이름 검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
            </div>
        </>
    );
}

export default Menu;