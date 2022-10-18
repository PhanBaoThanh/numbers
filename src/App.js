import './App.scss';
import {useState,useLayoutEffect} from 'react'
function App() {
  const [success,setSuccess] = useState(0)
  const [working,setWorking] = useState(0)
  const [happy,setHappy] = useState(0)

  useLayoutEffect(() => {
    if(success < 500){
      setTimeout(() => {
        setSuccess(prev => prev + 1)
      },1)
    }
  },[success])  

  useLayoutEffect(() => {
    if(working < 17140){
      setTimeout(() => {
        setWorking(prev => prev + 1)
      },0)
    }
  },[working]) 

  useLayoutEffect(() => {
    if(happy < 1500){
      setTimeout(() => {
        setHappy(prev => prev + 1)
      },1)
    }
  },[happy]) 

  return (
    <div className="App">
      <div className='container'>
        <div className='item yellow'>
          <p className='number'>{success}+</p>
          <p className='text'>Succeeded Projects</p>
        </div>

        <div className='item green'>
          <p className='number'>{working}+</p>
          <p className='text'>Working Hours Spent</p>
        </div>

        <div className='item purple'>
          <p className='number'>{happy}+</p>
          <p className='text'>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default App;
