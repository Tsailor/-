import './App.css';
import Picker from './Picker';
import { WhiteSpace, Button } from 'antd-mobile';
import { useEffect, useState } from 'react';
// import ButtonExample from './ButtonExample'
function App() {
  const maxPassengerNum = 10;
  const [adultNum, setAdultNum] = useState(1);
  const [childrenNum, setChildrenNum] = useState(0);

  return (
    <div className="App">
      <h3>Picker Component</h3>
      <div>mobile</div>
      <Button type="warning">warning disabled</Button>
      <WhiteSpace />

      <Picker
        title="请选择乘车人数"
        extra="1人乘坐"
        maxPassengerNum={maxPassengerNum}
        value={[adultNum, childrenNum]}
        //    onChange={v => console.log(v)}
        onOk={(v) => {
          console.log(v);
          setAdultNum(v[0]);
          setChildrenNum(v[1]);
        }}
      ></Picker>
    </div>
  );
}

export default App;
