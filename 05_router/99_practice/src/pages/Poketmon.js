import {useState , useEffect} from 'react';
import { getMonData } from '../api/data';
import List from '../pages/List';

function Poketmon(){

    const [items , setItems] = useState([]);

    useEffect(()=>{
        const asd = getMonData();
        console.log('asd', asd);
        setItems(getMonData());
        console.log('포켓몬페이지 겟몬데이타',getMonData()); // Poketmon 컴포넌트에서 추가

    },[]);

    // useEffect(()=>{
    //     console.log(items);
    // },[items])

    return (
        <>
        <h1>포켓몬 페이지</h1>
        <div>
            {items.map(list => <List key={list.menuCode} list={list} />)}
        </div>
        </>
    );

}

export default Poketmon;