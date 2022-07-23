import { useContext } from 'react';
import somevalue from './value';

function Parent() {
    let value = useContext(somevalue)
    return (

        <
        div > hello its me again from parent { value[0] } <
        br / >
        <
        button onClick = {
            () => { value[1](++value[0]) } } > update < /button> <
        /div>


    )
}
export default Parent;