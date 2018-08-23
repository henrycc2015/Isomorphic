import {initData} from '../model/mock';
export const HOMEINIT = Symbol('HOMEINIT');//初始化数据

export const load=(name,initData)=>({
	type: HOMEINIT,
	name: name,
	initData: initData
});
export const getInitData = ()=>{
    return dispatch => {
        dispatch(load('initData',initData));
    }
}