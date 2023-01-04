import React,{useState} from 'react'

const Form = () => {
    const [data,setdata]=useState({
        username :'',
        password :''
        
})
const {username,password}=data;
 const changehandler=e=> {
   setdata({...data,[e.target.value]:[e.target.name]})
   
 }

  const submithandler=e=>{
    e.preventdefault()
   console.log(data)
  }


  return (
    <div>
      <center>
        <form onSubmit={submithandler}>
            <input type="text"  value={username} name="username" onChange={changehandler}></input><br></br>
            <input type="password"  value={password} name="password" onChange={changehandler}></input><br></br>
            <input type="submit" name="submit"></input>
        </form>
      </center>
    </div>
  )
}

export default Form
