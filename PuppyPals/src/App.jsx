import { puppyList } from './data.js';
import { useState } from 'react';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log(featuredPup);

  return (
    <div className="App">
      {featPupId && <p>Featured Puppy ID: {featPupId}</p>}

      {puppies.map((puppy) => {
        return (
          <p 
            
          key={puppy.id}
          onClick={() => {setFeatPupId(puppy.id); }} > {puppy.name}

          </p> );
      })}
  
    </div>
  );
}

export default App;
