// import { creatStore} from 'redux';
// const initialState = {
//     value : 0
// };

// function appReducer (prevState = initialState, action) {
//     switch (action.type){
//         case 'increment':
//             return {
//                 ...prevState,
//                 value: prevState.value + 1
//             };
//             case 'decrement':
//                 return {
//                     ...prevState,
//                     value:prevState.value -1
//                 };
//                 default:
//                     return prevState
//     }
// }
// const store = creatStore(appReducer);
// export default store;

//                    .......................

import React, {useState} from 'react'

const initialState = [
    {
        name:'house',
        rooms: [
        {
        name: 'room1',
        text: 'Room1'
        }
       ] 
    },
    {
        name: 'car',
        text: 'i20'
    }
];

function RoomName(props){
    const {
        data
    } = props;

    return (
        <div>
            <div>Update Room Name</div>
            <input value = {data.text} />
        </div>
    )
}
function CarName(props){
    const {
        data
    } = props;

    return (
        <div>
            <div>Update Car Name</div>
            <input value = {data.text} />
        </div>
    )
}

export default function Test(){
    const [info,setInfo] = useState(initialState);

    return (
        <div>
            <RoomName data = {info[0].rooms[0]} />
            <CarName data = {info[1]} />
        </div>
    )
}

//