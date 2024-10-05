import React from "react";

import SlotMach from "./Slotmachine";



const App = () => {
  return <>
    <h1 className=" Heading_style"> 🎰 Welcome to <span className='Slot'> Slot Machine Game 🎰</span></h1>
    <div className="Slots_all">
      <SlotMach x='😂' y='😂' z='😂' />    <hr />
      <SlotMach x='💖' y='🤦‍♀️' z='😢'/>    <hr />
      <SlotMach x='🎁' y='🎈' z='🧶'/>    <hr />
      <SlotMach x='🥶' y='🥶' z='😂'/>    <hr />
      <SlotMach x='😎' y='😎' z='😎'/>    <hr />
    </div>
  </>;
}
export default App;