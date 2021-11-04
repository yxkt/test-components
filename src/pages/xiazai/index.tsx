
import { request, } from "umi";
import { message, Empty } from 'antd';
export default function Index() {
    //url:后端接口路径
    //params:后端所需参数
    //options:其它可选参数
    const download = (url: string, params: any, options = {}) => {
        return request(url, {
            method: "post",
            data: { ...params },
            getResponse: true,
            skipBizError: true,
            responseType: "blob",
            ...options,
        })
            .then((res) => {
                const contentDisposition = res?.response?.headers?.get("content-disposition");
                if (contentDisposition) {
                    const filename = contentDisposition?.split(";")?.[1]?.split("=")?.[1];
                    // 兼容IE浏览器
                    if (navigator?.msSaveBlob) {
                        return navigator?.msSaveBlob(res?.data, filename);
                    }
                    const blobUrl = URL.createObjectURL(res?.data);
                    const link = document.createElement("a");
                    link.href = blobUrl;
                    link.download = filename ?? Date.now().toLocaleString();
                    link.click();
                    //可以return一个布尔值,当下载成功做其它操作
                } else {
                    // 接口返回的错误处理
                    const reader = new FileReader();//获取到错误信息
                    reader.onload = () => {
                        const res = JSON.parse(String(reader?.result));
                        message.error(res?.msg);
                    };
                    reader.readAsText(res?.data);
                    //可以return reader?.result,当下载失败做其它操作
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<a>'该页面为后端返回流时的下载方法，具体看代码，可以将download方法单独封装，然后export,在其他组件里面引用.' </a>} />
        </>
    )
}



// import React from 'react';
// import { render } from 'react-dom';
// import MonacoEditor from 'react-monaco-editor';

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             code: '// type your code...',
//         }
//     }
//     editorDidMount(editor, monaco) {
//         console.log('editorDidMount', editor);
//         editor.focus();
//     }
//     onChange(newValue, e) {
//         console.log('onChange', newValue,);
//     }
//     render() {
//         const code = this.state.code;
//         const options = {
//             selectOnLineNumbers: true
//         };
//         return (
//             <MonacoEditor
//                 width="800"
//                 height="600"
//                 language="javascript"
//                 theme="vs-dark"
//                 value={code}
//                 options={options}
//                 onChange={this.onChange}
//             // editorDidMount={this.editorDidMount}
//             />
//         );
//     }
// }







