import React from "react";
import SlotM from "./SlotMach";



const App=()=>
{ return <>
<h1 className="heading_style">π°Welcome <span style={{fontWeight:'bold'}}>
    Slot Machine Game </span>π°π°</h1>
    <div className="slotMachine">
    <SlotM x="π" y="π" z="π"/>
    <hr />

    <SlotM x="π" y="π" z="π"/>
    < hr/>

    <SlotM x="π" y="π" z="π" />
    < hr />
    <SlotM x="π©π»ββ€οΈβπ¨π½" y="π©π»ββ€οΈβπ¨π½" z="π©π»ββ€οΈβπ¨π½" />
   </div>
</>;

};
export default App;