
import ReactJson from 'react-json-view'
// import Button from 'yx-component'

export default function IndexPage() {

  return (
    <div>
      {/* <Button /> */}
      <h1>将对象变为JSON格式。<span>地址:https://github.com/mac-s-g/react-json-view</span></h1>
      <ReactJson src={{ name: 'yy', age: 10, gz: 5000, obj: { name1: 'xx', age: 20, gz: 6000 } }} />
    </div>
  );
}
