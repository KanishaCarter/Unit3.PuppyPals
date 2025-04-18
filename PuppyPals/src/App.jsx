import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick = {() => {console.log("puppy id: ", puppy.id)}}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
};




export default App;