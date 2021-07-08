function isEmptyObject(obj) {
  for(let prop in obj) {
      // hasOwnProperty kiểm tra obj có tồn tại key k ?
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
  // return true là obj rỗng
}

export const helper = {
  isEmptyObject
}