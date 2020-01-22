//                ****** 
//  this is only for testing "useContext";
//

import React, {useContext} from "react";
//import Manager from "./manager.js"

const AppContext = React.createContext();

function App(){
    return(
        <AppContext.Provider value={{username:"jack"}}>
        <div>
          <Manager/>
        </div>
    </AppContext.Provider>
    )
}

const Manager= () => {
    const { username } = useContext(AppContext)
  
    return (
      <div className="messages">
        <h1>Messages</h1>
        <p>1 message for {username}</p>
        <p className="message">useContext is awesome!</p>
      </div>
    )
}

export default App;

// import React , {useContext} from "react";
// import ReactDOM from "react-dom";

// //创建 Context
// const NumberContext = React.createContext();
// // 它返回一个具有两个值的对象
// // { Provider, Consumer }

// function App() {
    


//   // 使用 Provider 为所有子孙代提供 value 值 
//   return (
//     <NumberContext.Provider value={{username:"jack"}}>
//       <div>
//         <Display />
//       </div>
//     </NumberContext.Provider>
//   );
// }

// function Display() {
//     const {username} = useContext(NumberContext);
//     return <div>The answer is {username}.</div>;
//   }


// function Display() {
//     // 使用 Consumer 从上下文中获取 value
//     return (
//       <NumberContext.Consumer>
//         {value => <div>The answer is {value}.</div>}
//       </NumberContext.Consumer>
//     );
//   }
// export default App;