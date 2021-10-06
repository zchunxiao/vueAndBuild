import requset from "@/request";



//获取首页数据
export const fetchList = (params)=> requset.post('ruban/api/res/dataList?code='+params);

