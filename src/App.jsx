import React, { useEffect, useState } from 'react';
import useB58WTamil from './CustomHooks/useB58WTamil';

const App = () => {
  
  const [data] = useB58WTamil('https://666e5110f1e1da2be520015c.mockapi.io/api/users')

  return (
    <div>
      <h1>App Component</h1>
      {data && data.map((ele,index)=>{
        return(
          <div key={index} >
              <h1>{ele.name}</h1>
              <h2>{ele.username}</h2>
              <h2>{ele.email}</h2>
              <hr />
          </div>
        )
      })}
    </div>
  )
}

export default App