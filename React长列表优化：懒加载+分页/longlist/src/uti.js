const usedata = ()=>{
     return fetch('/api/getMock').then(res => res.json())
    //  return fetch('http://localhost:8080/api/getMock').then(res => res.json())   CORS
   
}
export {usedata};