import jwt from 'jsonwebtoken'
const SERECT_KEY_TOKEN = 'reactJS-2105'

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

// save token localStorage
function saveTokenLocalStorage(token) {
  if (token !== null && token !== "") {
    window.localStorage.setItem("token_login", token)
  }
}

// get token localStorage
function getTokenStorage() {
  let token = window.localStorage.getItem("token_login")
  return token
}

// giải mã token
function dercryptToken() {
  let  encryptedToken = getTokenStorage()
  let decoded = {};
  if (encryptedToken !== null && encryptedToken !== "") {
    decoded = jwt.verify(encryptedToken, SERECT_KEY_TOKEN)
  }
  return decoded
}

// get email login 
function getEmailUser() {
  const infoUser = dercryptToken()
  if (infoUser.hasOwnProperty('email')) {
    return infoUser.email
  }
  return null
}

function getIdUser() {
  const infoUser = dercryptToken()
  if (infoUser.hasOwnProperty('id')) {
    return parseInt(infoUser.id)
  }
  return 0
}

// remove token localStorage
function removeToken() {
  window.localStorage.removeItem('token_login')
}

function fakeAuthLogin() {
  let user = getEmailUser()
  let id = getIdUser()
  if (user !== null && id > 0) {
    return true
  }
  return false
}

export const helper = {
  isEmptyObject,
  saveTokenLocalStorage,
  getEmailUser,
  removeToken,
  fakeAuthLogin
}


