import React from "react";
import SlotM from "./SlotMach";



const App=()=>
{ return <>
<h1 className="heading_style">🎰Welcome <span style={{fontWeight:'bold'}}>
    Slot Machine Game </span>🎰🎰</h1>
    <div className="slotMachine">
    <SlotM x="😄" y="😄" z="😄"/>
    <hr />

    <SlotM x="😊" y="😂" z="😊"/>
    < hr/>

    <SlotM x="🍎" y="🍌" z="🍎" />
    < hr />
    <SlotM x="👩🏻‍❤️‍👨🏽" y="👩🏻‍❤️‍👨🏽" z="👩🏻‍❤️‍👨🏽" />
   </div>
</>;

};
export default App;