import { Button } from 'antd';
import React from 'react'

export default function Index() {
    return (
        <>
            <Button type="primary" className='mainAction'>主要操作</Button>
            <Button type="primary" className='assistAction'>辅助操作</Button>
            <br /> <br /> <br />
            <Button type="primary" className='mainAction'>确定</Button>
            <Button type="primary" className='cancelBtn'>取消</Button>

        </>
    )
}
