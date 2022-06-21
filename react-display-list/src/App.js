import React from 'react'

function App() {
  const names = 
  [ 'Ed', 'John', 'Dave', 'Emily']

  const namesMapped = names.map(name => {
    return (
      <div>
        <ul>
          <li>{name}</li>
        </ul>
      </div>
    )
  })

  return (
    <div className="App">
        {namesMapped}
    </div>
  );
}

export default App;
