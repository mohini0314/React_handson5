import './App.css';
import { AddColorGreen, AddColorRed } from './Components/AddColor';
import HOC from './Components/HOC';
import PureFunc from './Components/PureFunc';


function App() {
  return (
    <div className="App">
      <div className="App-header">
      <h1 className='Higher-Order'>Example of Higher-Order Function Component</h1>
      <AddColorGreen value = {<HOC/>}/>
      <AddColorRed value = {<HOC/>}/>
      <div className='head2'><h1>Example of pure Function Component</h1></div>
  
     <div className='Pure'>
        <h1>Spiced Chai Recipe</h1>
        <h2>For two</h2>
        <PureFunc drinkers={2} />
        <h2>For a gathering</h2>
        <PureFunc drinkers={4} />
        </div>

      </div>
    </div>
  );
}

export default App;
