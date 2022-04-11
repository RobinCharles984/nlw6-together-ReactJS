import {useState} from 'react'

export function Button() {
    let [contactor, counterer] = useState(0);    

    function counter(){
        counterer(contactor + 1);
        console.log(contactor);
    }

    return (
        <button onClick={counter}>{contactor}</button>
    );
}