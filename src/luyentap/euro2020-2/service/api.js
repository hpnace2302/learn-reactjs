// import axios from 'axios'
// import {helper} from '../helper/common'

// const getDataEuro2020 = async () => {
//   const url = `https://gw.vnexpress.net/football/standing?league_id=403`
//   const response = await axios.get(url)
//   const result = await response.data === 200 ? await response.data : {}
//   if (!helper.isEmptyObject(result)) {
//     let resultArray = result['data']['403']['data']
//     // săp xếp lại mảng theo group_id
//     resultArray.sort(helper.sortDataByGroupFootball)
//     return resultArray
//   }
//   return {}
// }

// export const api = {
//   getDataEuro2020
// }

import axios from 'axios';
import { helper } from '../helper/common';

const getDataEuro2020 = async () => {
  const url = `https://gw.vnexpress.net/football/standing?league_id=403`;
  const response = await axios.get(url);
  const result = await response.status === 200 ? await response.data : {};

  if(!helper.isEmptyObject(result)){
    let resultArray = result['data']['403']['data'];
    // sap xep lai mang theo group id
    resultArray.sort(helper.sortDataByGroupFootball);
    return resultArray;
  }
  return {};
}
export const api = {
  getDataEuro2020
}