import Immutable from 'immutable'
// 不可变， react  state 改变会rerender 页面重绘
// 要是state没有变  没必要去rerender  性能问题
// 浅拷贝，深拷贝  可能会导致不可控  不知道某个json对象在哪里被改变了
// redux 使用immutable来实现不可变的state
// 业界认为  可变的状态state是万恶之源
// Map 
const initialState = Immutable.fromJS({
    newUser: null,
    error: null,
    saveSuccess: false,
    token: null,
    currentUser: null
})

export const users = ( (state = initialState, action = {}) =>{
    switch (action.type) {
        case REGISTER_USER:
            // 生成一个新的状态  合并到原来的状态上
            return state.merge({
                'newUser': action.data,
                'saveSuccess': false,
                'error': null
            })
        case REGISTER_USER_SUCCESS:
            return 
        default:
            return state
    }
} )