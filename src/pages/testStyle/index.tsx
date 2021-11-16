import { Button, Input, Select, } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Option } = Select;
export default function Index() {

    return (
        <>
            <Button type='primary' id='mainAction'>主要操作</Button>
            <Button type="default" id='assistAction'>辅助操作</Button>
            <br /> <br /> <br />
            <Button type="primary" id='mainAction'>确定</Button>
            <Button type="default" id='cancelBtn'>取消</Button>
            <br /> <br /> <br />
            <p>主要按钮（小尺寸）</p>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <Button type="primary" id='mainBtnH50'>大型按钮</Button>
                <Button type="primary" id='mainBtnH50NoBor'>大型按钮</Button>
                <Button type="primary" id='mainBtnH40'>中型按钮</Button>
                <Button type="primary" id='mainBtnH40NoBor'>中型按钮</Button>
                <Button type="primary" id='mainBtnH30'>小型按钮</Button>
                <Button type="primary" id='mainBtnH30NoBor'>小型按钮</Button>
            </div>
            <p>次要按钮（小尺寸）</p>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <Button type="default" id='minorBtnH50'>大型按钮</Button>
                <Button type="default" id='minorBtnH50NoBor'>大型按钮</Button>
                <Button type="default" id='minorBtnH40NoBor'>中型按钮</Button>
                <Button type="default" id='minorBtnH40'>中型按钮</Button>
                <Button type="default" id='minorBtnH30NoBor'>小型按钮</Button>
                <Button type="default" id='minorBtnH30'>小型按钮</Button>
            </div>
            <p>主要按钮（大尺寸）</p>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <Button type="primary" id='mainBtnH44'>主要按钮</Button>
                <Button type="primary" id='mainBtnH44NoBorder'>次要按钮</Button>
                <Button type="primary" id='mainBtnH60'>主要按纽描述文本</Button>
            </div>
            <p>次要按钮（大尺寸）</p>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <Button type="default" id='minorBtnH44'>次要按钮</Button>
                <Button type="default" id='minorBtnH44NoBorder'>次要按钮</Button>
                <Button type="default" id='minorBtnH60'>次要按钮按纽描述文本</Button>
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
