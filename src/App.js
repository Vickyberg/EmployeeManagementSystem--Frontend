import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from  './component/ListEmployeeComponent';
import HeaderComponents from './component/HeaderComponents';
import FooterComponent from './component/FooterComponent';

function App() {
  return (
    <div>
    <HeaderComponents/>
      <div className="container">
        <ListEmployeeComponent />
      
       </div>
       <FooterComponent/>
    </div>

  );
}

export default App;
