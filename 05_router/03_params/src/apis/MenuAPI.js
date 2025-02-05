import menus from '../data/menu-detail.json';

/** menus라는 이름으로 json 데이터를 사용하겠다고 정의. */

export function getMenuList(){
    console.log('MenuAPI.js의 menus : ',menus);

    // menu-detail.json 여기있는 메뉴 데이터 통채로 return
    return menus;
}

// 전달받은 메뉴 코드를 기반으로 메뉴 상세 조회
export function getMenuByMenuCode(menuCode){

    // pathVariable 값은 문자열이기 때문에 정수값이 필요하면 변환 필요
    console.log('menuCode : ', menuCode);
    console.log(typeof menuCode);
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}

export function getSearchMenu(name){
    // 배열의 match 사용하기
    // → 포함 여부에 따라 인자가 포함되어 있으면 반환.
    return menus.filter(menu => menu.menuName.match(name));
}