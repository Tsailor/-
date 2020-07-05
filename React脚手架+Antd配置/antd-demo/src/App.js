import React from 'react';
import { Button } from 'antd'
import { PageHeader } from 'antd';
function App() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
