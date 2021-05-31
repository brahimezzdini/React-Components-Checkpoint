import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="container mt-5 ">
        <div style={{textAlign:'center' ,backgroundColor:'#007bff  ', color:'white', width:'100%'}} className="card ">
              <h1>React Components Checkpoint</h1>
        </div>


        
        <div style={{marginTop:'15px',textAlign:'center' ,backgroundColor:'yellow  ' , width:'100%'}} className="card ">
          <br/>
          <ProfilePhoto/>
          <br/>
          <FullName/>
          <br/>
          <Address/>
        </div>
    </div>
      
  );
}

export default App;
