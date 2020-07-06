import React from 'react'
import Preview from './preview.js';
import FilePage from './filepage.js'
// import 'antd/dist/antd.css'
import style from './index.css';
class App extends React.Component {

  render() {
    console.log(style.preview)
    const header =<h2 className={style.fileheader}>文件的上传、下载、预览</h2>
    return(
      <div>
          {/* {header} */}
          <h2 className={style.header}>文件的上传、下载、预览</h2>
          <div className={style.wrap}>
            <FilePage />
            <Preview className ={style.preview}/>
          </div>
          
      </div>
      
    )
  }
}

export  default App