import { puppyList } from './data.js';
import { useState } from 'react';
import './index.css';


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      <h1 className="title">Puppy Bowl</h1>

      <div className="App">
        {/* Featured puppy details */}
        {featuredPup && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}

        {/* Clickable puppy names */}
        {puppies.map((puppy) => (
          <p 
            key={puppy.id} 
            onClick={() => setFeatPupId(puppy.id)}
            className="puppy-list"
          >
            {puppy.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
