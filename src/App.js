import './App.css';
import somevalue from './value';
import Parent from './parent';
import { useState } from 'react';

function App() {
    let anothervalue = useState(2);
    console.log("another value", anothervalue);
    return ( <
        somevalue.Provider value = { anothervalue } >
        <
        div > hello its me again

        <
        Parent > < /Parent> <
        /div>

        <
        /somevalue.Provider> 
    )
}
export default App;