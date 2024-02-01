
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Row,Col } from 'react-bootstrap';


function App() {
  const [value,setValue]=useState(" ")
  return (
    <div className="App">
       <h1>Calculator</h1>
       <div className='mb-4 mt-4 topInput' >
       <input  size='lg' type='text'  value={value} />
       </div>
       <Row className='row mx-auto py-3 '>
      
         <Col md="12" className=' first-row'>
         <input type='button'  value="AC"  className='reset' onClick={(e)=>setValue(" ")}/>
         <input type='button'  value="DE" className='delete'  onClick={(e)=>setValue(value.slice(0,-1))}/>
         <input type='button'  value="." onClick={(e)=>setValue(value + e.target.value)}/>
         <input type='button'  value="/" className='right-corner' onClick={(e)=>setValue(value +  e.target.value)}/>
         </Col>

         <Col md="12">
         <input type='button'  value="7" onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="8" onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="9" onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="*" className='right-corner' onClick={(e)=>setValue(value +  e.target.value)}/>
         </Col>

         <Col md="12">
         <input type='button'  value="4" onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="5" onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="6" onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="-" className='right-corner' onClick={(e)=>setValue(value +  e.target.value)}/>
         </Col>

         <Col md="12">
         <input type='button'  value="1" onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="2" onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="3" onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="+" className='right-corner'onClick={(e)=>setValue(value +  e.target.value)}/>
         </Col>
         <Col md="12" className='down'>
         <input type='button'  value="00" className='zero' onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="0" onClick={(e)=>setValue(value +  e.target.value)}/>
         <input type='button'  value="=" className='right-corner' onClick={(e)=>setValue(eval(value))}/>
    
         </Col>
        </Row>
    </div>
  );
}

export default App;
