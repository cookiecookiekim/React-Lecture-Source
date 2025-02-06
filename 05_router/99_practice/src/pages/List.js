import Poketmon from '../pages/Poketmon';

function List ({list}){
    console.log('List 페이지에서 list : ', list);
    return(
        <>
        <h1>List 페이지</h1>
        <div>
            <h3>특성 1</h3>
            <h3>특성 2</h3>
            <h3>특성 3</h3>
        </div>
        </>
);
}
export default List;