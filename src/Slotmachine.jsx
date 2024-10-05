import React from "react";


const SlotMach = (props) => {
   
    // let x = '😂';
    // let y = '😂';
    // let z = '😂';
//   we have used the above through props and made attributes below

    // this can also be written like below
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
  
    let { x, y, z} = props;

    if ((props.x === props.y) && (props.y === props.z)) {
      return (
        <>
          <div className="slot_inner">
            <h1>
              {x} {y} {z}
            </h1>
            <h1> This is Matching</h1> <hr />
          </div>
        </>
      );
    }
    else {
      return (
        <>
          <div className="slot_inner">
            <h1> {x} {y} {z} </h1>
            <h1> This is  Not Matching</h1> <hr />
          </div>
        </>
      );
    }
  }
  export default SlotMach;