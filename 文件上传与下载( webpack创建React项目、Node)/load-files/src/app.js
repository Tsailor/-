import React from 'react'
import { Button, DatePicker } from 'antd';
// import 'antd/dist/antd.css'
import './index.css';
class App extends React.Component {
  render() {
    return(
      <div>
          <Button type="primary">PRESS ME</Button>
          <DatePicker placeholder="select date" />
      </div>
      
    )
  }
}

export  default App