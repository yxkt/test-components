import React from 'react'
import { Result, Button } from 'antd';
export default function Index() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="页面不存在"
        // extra={<Button type="primary">Back Home</Button>}
        />
    )
}
