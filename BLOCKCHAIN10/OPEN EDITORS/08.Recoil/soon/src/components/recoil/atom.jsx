import {atom, selector} from "recoil";

// 스토어 하나 생성
export const contentState = atom({
    key : "content",
    default : {
        name :"test",
        status : "테스트중",
        massage : "테스트 메시지",
        pageIndex : 0
    }
})

// 스토어의 값을 가지고 연산을 해보자
// 페이지네이션으로 페이지의 게시판 정보들을 가지고 오는 경우를 만들어보자
// 다른 스토어의 값으로 연산을 통해 전역상태로 유지 selector
export const pagination = selector({
    key : "pagination",
    get : async ({get})=>{
        // get 받은 인자값은 다른 스토어의 값을 참조할수있는 메서드
        await new Promise((res,rej)=>{
            setTimeout(()=>{
                res();
            }, 1000)
        })
        const {pageIndex} = get(contentState);
        return `page${pageIndex} 번째 리스트`
    },
    set : ({set, get}, newState)=>{
        // set 다른 스토어의 값을 변경할경우
        // void 함수여야 한다(반환값 없는 함수)
        console.log(newState);
        // get도 필요한데?
        // get도 가지고와서 사용할수있다.
        const content = get(contentState);
        // 첫번째 인자가 상태를 변경하고싶은 스토어를 전달
        // 두번째 인자값이 업데이트할 내용
        set(contentState, {...content, pageIndex: newState.pageIndex})
    }
})

const pagination2 = selector({
    key : "pagination2",
    get : ({})=>{

    },
    set : ({}) =>{

    }
})
// const app = ({key1 : newKeyName, key2}) =>{
//     key1
//     key2
// }
// const temp = {
//     key1 : "",
//     key2 : ""
// }
// const {key1, key2} = temp;

// app(temp)