import { useState } from 'react'
//import pages
import HandelEvent from './pages/HandleEvent'
import ComposeComponent from './pages/ComposeComponent,'
import ConditionRendering from './pages/ConditionRendering'
import UserGreeting from './pages/UserGreeting'
import GuestGreeting from './pages/GuestGreeting'
import List from './pages/List'
import LiftingStateUp from './pages/LiftingStateUp'
function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  function toggleShow(){
    setShow(prevState => !prevState)
  }
  return (
    <>
      <h3>handleClick</h3>
      <HandelEvent/>
      <h3>ComposeComponent</h3>
      <ComposeComponent/>

      <h3>ConditionRendering</h3>
      <ConditionRendering/>
      <h3>USER/GUEST-GREETING</h3>
      {show ? <UserGreeting toggleShow={toggleShow} /> : <GuestGreeting toggleShow={toggleShow}/>  }
      
      <h3>LIST</h3>
      <List/>
      <h3>Lifting State Up</h3>
      <LiftingStateUp/>
    </>
  )
}

export default App
