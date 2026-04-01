import React from 'react'
import Feature from './Components/Work/Feature'
import Featurework from './Components/Work/Featurework'
import GetStarted from './Components/Work/GetStarted'

const App = () => {
  return (
    <div className='min-h-screen bg-[linear-gradient(135deg,#0A0E27_0%,#000000_50%,#0D1B3A_100%)]'>
          <Feature/>
          <Featurework/>
          <GetStarted/>
    </div>
  )
}

export default App