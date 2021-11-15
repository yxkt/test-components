import request from './request'
export const login = (data: any) => {
    return request.post('/1.1/login', { data })
}
//获取表格数据
export const getData = () => {
    return request.get('/1.1/classes/addTableData')
}
//添加表格数据
export const addData = (data: any) => {
    return request.post('/1.1/classes/addTableData?fetchWhenSave=true', { data })
}

//编辑表格数据
export const updateData = (objectId: string, data: any) => {
    return request.put(`/1.1/classes/addTableData/${objectId}`, { data })
}
//删除表格数据
export const deleteData = (objectId: string) => {
    return request.delete(`/1.1/classes/addTableData/${objectId}`)
}

//获取莫一条数据内容
export const getPresentData = (objectId: string) => {
    return request.get(`/1.1/classes/addTableData/${objectId}`)
}