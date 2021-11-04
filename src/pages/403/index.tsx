import React from 'react'
import { Result, Button } from 'antd';
export default function Index() {
    return (
        <Result
            status="403"
            title="403"
            subTitle="无访问权限"
        // extra={<Button type="primary">Back Home</Button>}
        />
    )
}
