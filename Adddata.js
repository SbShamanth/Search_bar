import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Adddata(props) {
  const {data} = props;

const navigate = useNavigate();


const [name, setName] = useState('');
const [email, setEmail] = useState('');

const post=(e)=>{
  e.preventDefault();
  if(name===""  || email===""){
      alert('please fill all the inputs');
      return;
   }

props.post({name:name, email:email});
setName('');
setEmail('');
// navigate('/display')
}

return (
<div>
<h>
Add the data which you want to post in json server 
</h>

<div>
  <form onSubmit={post}>

    <div>
      <label >Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>

    <div>
      <label>Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div>
    <button type='submit'>
        POST
    </button>
  </div>

  </form>

  <br>
  </br>
</div>

<div>
<button  onClick={() => navigate('/search')}>
Search 
</button>
</div>

<br></br>

<div>
<button onClick={() => navigate('/display')}>
 Display
</button>
</div>

</div>

    );
  }
  
  export default Adddata;