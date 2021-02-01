import  React , {useState} from 'react';
import './App.css'

const App = () => {
  let initialState = 0;
  const [num, setNum] = useState(initialState)
  
  const increNumber = () => {
    setNum(num + 1)
  }

  const decreNumber = () => {
    if(num > 0) {
      setNum(num -1)
    }else {
      alert('Sorry , You cannot go beyond zero 😪' )
      setNum(0)
    }
  }

  return (
    <>
      <div className="main_div">
        <div className="child_div">
          <h1 className="h1"> {num} </h1>

          <div className="div_btns">
            <button onClick = {increNumber}> Increment </button>
            <button onClick = {decreNumber }> Decrement </button>
          </div>  
        </div>
      </div>
    </>
  )
}

export default App;