// import React from 'react'

// const Table = () => {
//   return  React.createElement("table",{}, React.createElement("thead",{style:{background:"red",color:"white"}},
//     React.createElement("td",{},"ID"),React.createElement("td",{},"Name"),React.createElement("td",{},"Salary")),
//     React.createElement("tbody",{style:{background:"blue",color:"white"}},React.createElement("tr",{},
//          React.createElement("td",{},"01"),React.createElement("td",{},"HAri"),React.createElement("td",{},"20000"),

//     ),React.createElement("tr",{},
//         React.createElement("td",{},"02"),React.createElement("td",{},"AMRIN"),React.createElement("td",{},"20000"),

//    ),React.createElement("tr",{},
//     React.createElement("td",{},"01"),React.createElement("td",{},"NARUTO"),React.createElement("td",{},"20000"),

// ),React.createElement("tr",{},
//     React.createElement("td",{},"01"),React.createElement("td",{},"LUFFY"),React.createElement("td",{},"20000"),

// )))


// }


// export default Table


// import React from 'react'
// import { useState } from 'react';

// const Table = () => {
//     let [count,setCount]=useState(0)    
//     function Increment(){
//         setCount(count+1)
//     }
//     function Decrement(){
//         setCount(count-1)
//     }
//     function Reset(){
//         setCount(0)
//     }
//   return (
// <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
//   <h1 style={{color:"black",border:"none",height:"30px",width:"90px",display:"flex",justifyContent:"center",alignItems:"center"}}>{count}</h1>
//  <div> <button onClick={Increment} style={{background:"green",color:"white",border:"none",height:"30px",width:"30px"}}>+</button>
//   <button onClick={Decrement}style={{background:"red",color:"white",border:"none",height:"30px",width:"30px"}}>-</button>
//   <button onClick={Reset} style={{background:"blue",color:"white",border:"none",height:"30px",width:"30px"}}>0</button></div>
// </div>
//   )
// }
// export default Table

// -------------------------------------------------------------------------------
// import React, { Component } from 'react'

// export default class Table extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       count: 0
//     }
//   }
//   Increment=()=>{
//    this.setState({count:this.state.count+1})
// }
//  Decrement=()=>{
//   this.setState({count:this.state.count-1})

// }
//  Reset=()=>{
//   this.setState({count:0})
  
// }

//   render() {
//     return (  

//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
//         <h1 style={{ color: "black", border: "none", height: "30px", width: "90px", display: "flex", justifyContent: "center", alignItems: "center" }}>{this.state.count}</h1>
//         <div> <button onClick={this.Increment} style={{ background: "green", color: "white", border: "none", height: "30px", width: "30px" }}>+</button>
//           <button onClick={this.Decrement} style={{ background: "red", color: "white", border: "none", height: "30px", width: "30px" }}>-</button>
//           <button onClick={this.Reset} style={{ background: "blue", color: "white", border: "none", height: "30px", width: "30px" }}>0</button></div>
//       </div>

//     )
//   }
// }
// ----------------------------------------------------------------------------------------------
// import React from 'react'
// import { useState } from 'react';

// const Table = () => {
//     let [count,setCount]=useState(0)    
//     function Increment(){
//         setCount(count=>count+1)
//     }
//     function Decrement(){
//         setCount(count=>count-1)
//     }
//     function Reset(){
//         setCount(0)
//     }
//     let getcolor=()=>{
//       if(count<0){
//         return "red"
//       }
//       else if(count>0){
//         return "green"
//       }
//       else
//       {
//         return "blue"
//       }
//     }
//   return (
// <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
//   <h1 style={{color:getcolor(),border:"none",height:"50px",width:"50px",display:"flex",justifyContent:"center",
//     alignItems:"center", border:"1px solid black", borderRadius:"50%"}}>{count}</h1>
    
//  <div> <button onClick={Increment} style={{background:"green",color:"white",border:"none",height:"30px",width:"30px"}}>+</button>
//   <button onClick={Decrement}style={{background:"red",color:"white",border:"none",height:"30px",width:"30px"}}>-</button>
//   <button onClick={Reset} style={{background:"blue",color:"white",border:"none",height:"30px",width:"30px"}}>0</button></div>
// </div>
//   )
// }
// export default Table
// ----------------------------------------------------------------------------------------------
// import React, { useState } from 'react'

// const Table = () => {
//   let [text,updatedText]= useState("Hello");
  
//   let resetText=(e)=>{
//     updatedText(e.target.value)
//   }
//   let reset=()=>{
//     updatedText("I am reseted")
//   }
  
  
//   return (
//     <div>
//       <input type="text" value={text} onChange={resetText} />
//       <p>my name is:{text}</p>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Table
// ------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react'

// const Table = () => {
//   let [liked,setliked]=useState(false)
//   let checked =(e)=>{
//     setliked(e.target.value)
//   }
//   return (
//     <div>
//       <input type="checkbox" checked={liked} onChange={checked}/>i like this 
//       <h1>{liked ?"liked":"notliked"}</h1>
//     </div>
//   )
// }

// export default Table
// -----------------------------------------------------------------------------------------
// import React, { useState } from 'react'

// const Table = () => {
//   let [text,updatedText]= useState("Hariharan");

//   let reset=()=>{
//     updatedText("Rohit")
//   }
//   let changed=()=>{
//     updatedText("hari")
//   }
//   return (
//     <div>
//         <h1 onChange={reset}>Name: {text}</h1>
//       {/* <p>my name is:{text}</p> */}
//       <button onClick={reset}>change</button>
//       <button onClick={changed}>previous</button>
//     </div>
//   )
// }

// export default Table

// ------------------------------------------------------
// import React, { Component } from 'react'

// export default class Table extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        Names: "Hariharan"   
//     }
//   }
//    revert=()=>{
//    this.setState({Names:"hinata"})
// }
//  change=()=>{
//   this.setState({Names:"Hariharan"})

// }
  
//   render() {
//     return (
//       <div>
//                  <h1 onChange={this.change}>Name: {this.state.Names}</h1>
//                  <button onClick={this.revert}>change</button>
//                     <button onClick={this.change}>previous</button>
//       </div>
//     )
//   }
// }
// -----------------------------------------------------------------------------------------



