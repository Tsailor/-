import React, { useEffect, useState } from 'react';
import { PickerView, Icon } from 'antd-mobile';
const containerStyle = {
  position: 'relative',
};
const icon = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '-20px',
};
const maskStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 99,
  background: 'rgba(0, 0, 0, 0.4)',
};
const container = {
  position: 'fixed',
  height: '286px',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  background: '#f5f5f9',
};
const header = {
  height: '86px',
  width: '100%',
  backgroundImage: 'linear-gradient(to bottom, #e7e7e7, #e7e7e7, transparent, transparent)',
  backgroundPosition: 'bottom',
  backgroundSize: '100% 1PX',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
};
const box = {
  width: '50px',
  height: '100%',
  fontWeight: '600',
  lineHeight: '86px',
  fontSize: '0.30rem',
  verticalAlign: 'middle',
  textAlign: 'center',
};
const titleBox = {
  height: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
};
const boxOk = {
  color: '#3391E8',
  width: '50px',
  height: '100%',
  fontWeight: '600',
  lineHeight: '86px',
  fontSize: '0.30rem',
  verticalAlign: 'middle',
  textAlign: 'center',
};
const titlestyle = {
  fontSize: '0.36rem',
  color: '#333',
  height: '26px',
  lineHeight: '26px',
};
const subtitle = {
  fontSize: '0.3rem',
  lineHeight: '20px',
  height: '20px',
};
const desc = {
  height: '50px',
  width: '100%',
  zIndex: 101,
  lineHeight: '50px',
  display: 'flex',
  fontSize: '0.36rem',
  position: 'absolute',
};
const picktype = {
  display: '1',
  width: '50%',
  height: '100%',
};
const body = {
  height: '200px',
  position: 'relative',
};
const Picker = props => {
    const {title,extra,maxPassengerNum, value,  onOk,} = props;
  
  const [picerVisible, setPickerVisible] = useState(false);
  const [data, setdata] = useState([]);
  const [ pickValue,setpickValue] = useState([]);
  const [extraDesc,setExtraDesc] = useState(extra);
  const showPickerView = () => {
    setPickerVisible(true);
  };
  useEffect(() => {
    let dataSource = [];
    for (let i = 1; i <= maxPassengerNum; i++) {
      let _children = [];
      for (let j = 0; j <= maxPassengerNum - i; j++) {
        _children.push({
          label: `${j} 人`,
          value: j,
          key: i + '_' + j,
        });
      }
      dataSource.push({
        label: `${i} 人`,
        value: i,
        key: i,
        children: _children,
      });
      setdata(dataSource);
    }
  }, [maxPassengerNum]);
  
  useEffect(()=>{
    setpickValue(value)
  },[picerVisible])
  return (
    <div style={containerStyle} onClick={() => showPickerView()}>
      <span >{extraDesc || "1人乘坐"}</span>
      <Icon style={icon} type="right" size="xs" />
      {picerVisible ? (
        <div style={maskStyle}>
          <div style={container}>
            <div style={header}>
              <div style={box} onClick={(e)=>{
                  e.stopPropagation()
                  setPickerVisible(false)
              }}>取消</div>
              <div style={titleBox}>
                <div style={titlestyle}>{title}</div>
                <div style={subtitle}>一人一座，请为1.2米以下儿童半价购票</div>
                <div style={subtitle}>最多可选{maxPassengerNum}人</div>
              </div>
              <div style={boxOk}
                 onClick={(e)=>{
                     e.stopPropagation();
                     onOk(pickValue);
                     setExtraDesc(`${pickValue[0] + pickValue[1]}`+`人乘坐`)
                     setPickerVisible(false);
                 }}
              >确定</div>
            </div>
            <div style={body}>
              <div style={desc}>
                <div style={picktype}>成人</div>
                <div style={picktype}>儿童</div>
              </div>
              <PickerView
                data={data}
                value={pickValue}
                cols={2}
                onChange={v => {
                    setpickValue(v)
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default React.memo(Picker);
