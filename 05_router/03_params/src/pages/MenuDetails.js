import {useState , useEffect} from 'react';
/* MenuDetails 컴포넌트가 호출되는 시점은 pathVariable로
 menuCode가 넘어오는 시점이다. 해당 파라미터를 꺼내올 수 있는
 useParams라는 훅을 router 쪽에서 제공하고 있다. */
import {useParams} from 'react-router-dom';
import {getMenuByMenuCode} from '../apis/MenuAPI';

function MenuDetatils(){

    // useParams에 pathvariable이 들어있는 거 확인 (어디...?)
    // console.log('useParams : ',useParams);
    const {menuCode} = useParams();
    const [menu , setMenu] = useState({
        menuName : '',
        menuPrice : 0,
        categoryName : '',
        detail : {}
    });

    useEffect(()=>{
        setMenu(getMenuByMenuCode(menuCode));
    },[]);

    return(
        <>
            <h1>{menu.menuName} 상세 조회</h1>
            <h2>가격 : {menu.menuPrice}</h2>
            <h2>종류 : {menu.categoryName}</h2>
            <h2>설명 : {menu.detail.description}</h2>
            <img src={menu.detail.image} style={{maxWidth: 500}}></img>
        </>
    );

}

export default MenuDetatils;