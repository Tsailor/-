import React , { Component } from 'react';
import { Upload, message } from 'antd';
import FilePregress from './filepregress.js'
import style from './index.css';
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  // onChange(info) {
  //     console.log("133")
  //   const { status } = info.file;
  //   if (status !== 'uploading') {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (status === 'done') {
  //     message.success(`${info.file.name} file uploaded successfully.`);
  //   } else if (status === 'error') {
  //     message.error(`${info.file.name} file upload failed.`);
  //   }
  // },
  beforeUpload(file) {
    console.log('beforeUpload', file);
  },
  onStart: (file) => {
    console.log('onStart', file.name);
  },
  onSuccess(file) {
    console.log('onSuccess', file);
  },
  onProgress(step, file) {
    console.log('onProgress', Math.round(step.percent), file.name);
  },
  onError(err) {
    console.log('onError', err);
  },
};
  
class FilePage extends Component {
    constructor(){
      super();
      this.state = {
         showPregress : true, 
         fileInfo : ""
      }
    }
    render(){
        return(
        <div className = {style.fileinput}>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text ">Click or drag file to this area to upload</p>
            </Dragger>
            { showPregress ? <FilePregress/> : null }
        </div>
      
        )
    }
}
export default FilePage;

