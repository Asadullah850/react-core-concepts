
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <Loadedata></Loadedata>
    </div>
  );
}
function Loadedata() {
  const [users, setUsers] = useState([])
  useEffect( ( ) =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);
  return (
    <div className="">
      <h2>Extranel Function</h2>
      <p>Total Users:= {users.length}</p>
      {
        users.map(u => <UsersInfo name={u.name} email={u.email} website={u.website}></UsersInfo>)
      }
    </div>
  )
}
function UsersInfo(props){
    return(
      <div className="product">
        <h3>User Name: {props.name}</h3>
        <p>Email: {props.email}</p>
        <p>WebSite: {props.website}</p>
      </div>
    )
  }
function Counter(props){
  // const abc = useState(99)
  const [count, setCount] = useState(0)
  const incrised = () => setCount(count + 1);
  const dicrised = () => setCount(count - 1);
  return(
    <div className="">
      <h3>Count: {count}</h3>
      <button onClick={incrised}>Incrise</button>
      <button onClick={dicrised} type="submit">dicrised</button>
    </div>
  )
}
// function App() {
//   const phoneStore = [
//     {name:'Iphone',price:'150000',colour:'Off White'},
//     {name:'Samsung',price:'75000',colour:'Purple golde'},
//     {name:'htc',price:'85000',colour:'Sweet white'},
//     {name:'vivo',price:'35000',colour:'Purplee Blue'},
//     {name:'Motorla',price:'45000',colour:'Sweet Black'},
//     {name:'Lg',price:'55000',colour:'Gray'},
//   ]
//   return (
//     <div className="App">
//       {
//         phoneStore.map(p =><Product name={p.name} price={p.price} colour={p.colour}></Product>)
//       }
    
//     </div>
//   );
// }
// function Product(props){
//   return(
//     <div className="product">
//       <h3>Product: {props.name}</h3>
//       <p>Price: {props.price}</p>
//       <p>Colour: {props.colour}</p>
//     </div>
//   )
// }
export default App;
