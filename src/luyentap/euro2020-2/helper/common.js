function isEmptyObject(obj) {
    for(let prop in obj) {
        // kiểm tra trong obj có tồn tại key k ?
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
    // return true là obj rỗng
}

function sortDataByGroupFootball(a,b) {
  // a và b là các item liền kề nằm trong mảng
  if (a.group_id < b.group_id) {
    return -1
  } else if (a.group_id > b.group_id) {
    return 1
  } return 0
}

export const helper = {
  isEmptyObject,
  sortDataByGroupFootball
}
