import React , { Component } from 'react';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import style from './index.css';
class FileInput  extends Component {

    render(){
        const { Dragger } = Upload;

        const props = {
            name: 'file',
            multiple: false,
           // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange(info) {
                console.log(info)
                // const { status } = info.file;
                // if (status !== 'uploading') {
                //     console.log(info.file, info.fileList);
                // }
                // if (status === 'done') {
                //     console.log(" file uploaded successfully.");
                // } else if (status === 'error') {
                //     console.log("file upload failed.");
                // }
            },
            customRequest(){
                console.log(1)
            }
        
        };
        return(
                <Dragger   >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                </Dragger>
         
        )
    }
}
export default FileInput;

