import axios from 'axios'
import {helper} from '../helpers/common' 

const getDataEuro2020 = async () => {
    const url = `https://gw.vnexpress.net/football/standing?league_id=403`
    const response = await axios.get(url)
    const result = await response.status === 200 ? await response.data : {}
    if (!helper.isEmptyObject(result)) {
        let resultArray = result['data']['403']['data']
        // sắp xếp lại mảng theo group_id
        resultArray.sort(helper.sortDataByGroupFootball)
        return resultArray
    }
    return {}
}

export const api = {
    getDataEuro2020
}