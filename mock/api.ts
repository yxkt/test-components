export default {
    // 支持值为 Object 和 Array
    'GET /api/users': {
        data: [
            { name: '张三', age: 25, key: '1', address: '重庆市九龙坡区' },
            { name: '李四', age: 35, key: '2', address: '重庆市渝中区' }
        ]
        , msg: 'ok', code: 100200
    },

    // GET 可忽略
    '/api/users/1': { id: 1 },

    // 支持自定义函数，API 参考 express@4
    'POST /api/users/create': (req, res) => {
        // 添加跨域请求头
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('ok');
    },
}