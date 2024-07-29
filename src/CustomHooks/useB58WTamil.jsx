import React, { useEffect, useState } from 'react'

const useB58WTamil = (url) => {
  const [data ,setdata] = useState(null)
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(value=>setdata(value))
  },[url])
  return [data]
}

export default useB58WTamil