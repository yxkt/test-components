import { Button, Input, Select, } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Option } = Select;
export default function Index() {

    return (
        <>
            <Button type='primary' className='mainAction'>主要操作</Button>
            <Button type="default" className='assistAction'>辅助操作</Button>
            <br /> <br /> <br />
            <Button type="primary" className='mainAction'>确定</Button>
            <Button type="default" className='cancelBtn'>取消</Button>
            <br /> <br /> <br />
            <p>主要按钮（小尺寸）</p>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <Button type="primary" className='mainBtnH50'>大型按钮</Button>
                <Button type="primary" className='mainBtnH50NoBor'>大型按钮</Button>
                <Button type="primary" className='mainBtnH40'>中型按钮</Button>
                <Button type="primary" className='mainBtnH40NoBor'>中型按钮</Button>
                <Button type="primary" className='mainBtnH30'>小型按钮</Button>
                <Button type="primary" className='mainBtnH30NoBor'>小型按钮</Button>
            </div>
            <p>次要按钮（小尺寸）</p>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <Button type="default" className='minorBtnH50'>大型按钮</Button>
                <Button type="default" className='minorBtnH50NoBor'>大型按钮</Button>
                <Button type="default" className='minorBtnH40NoBor'>中型按钮</Button>
                <Button type="default" className='minorBtnH40'>中型按钮</Button>
                <Button type="default" className='minorBtnH30NoBor'>小型按钮</Button>
                <Button type="default" className='minorBtnH30'>小型按钮</Button>
            </div>
            <p>主要按钮（大尺寸）</p>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <Button type="primary" className='mainBtnH44'>主要按钮</Button>
                <Button type="primary" className='mainBtnH44NoBorder'>次要按钮</Button>
                <Button type="primary" className='mainBtnH60'>主要按纽描述文本</Button>
            </div>
            <p>次要按钮（大尺寸）</p>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <Button type="default" className='minorBtnH44'>次要按钮</Button>
                <Button type="default" className='minorBtnH44NoBorder'>次要按钮</Button>
                <Button type="default" className='minorBtnH60'>次要按钮按纽描述文本</Button>
            </div>
            <br /><br />
            <Input className='input' placeholder='请输入姓名' prefix={<UserOutlined />} />
            <br /><br />
            <Select defaultValue="lucy" style={{ width: 120 }} >
                <Option value="jack">第一选项</Option>
                <Option value="lucy">第二选项</Option>
                <Option value="Yiminghe">第三选项</Option>
            </Select>
        </>
    )
}
