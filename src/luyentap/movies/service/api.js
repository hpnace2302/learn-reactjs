import axios from 'axios'
import jwt from 'jsonwebtoken'

const SERECT_KEY_TOKEN = 'reactJS-2105'
// key này bên backend quyết định
// họ sẽ cung cấp cho bên phía frontend
// key này 2 bên sẽ bảo mật - k để lộ

const searchMoviesByKeyWord = async (key,page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${key}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`
  const response = await axios.get(url)
  const result = response.status === 200 ? response.data : {}
  return result
}

const getDataMoviesById = async (id = 0) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&append_to_response=videos,images&include_image_language=en,null`
  const response = await axios.get(url)
  const result = response.status === 200 ? response.data : {}
  return result
}

const checkLoginUser = (user, pass) => {
  // khi mà user gửi username, password lên server (backend api)
  // backend api sẽ kiểm tra xem account có tồn tại k ?
  // backend sẽ trả về thông tin user đó dưới dạng mã hoá token
  // client-frontend sẽ nhận được token đó và giải mã ra để có đc các thông tin của ng đăng nhập
  // giữa backend và frontend cần có cơ chế mã hoá và giải mã chung
  // sử dụng jsonwebtoken
  // vì k có api login từ backend nên mình tự fix
  let token = null;
  if (user === "admin" && pass === "123") {
    // mã hoá thông tin thành token trả về
    token = jwt.sign({
      id: 1,
      user: user,
      fullname: "Đăng Phong",
      email: "hpnace2302@gmail.com",
      phone: "012345",
      address: "Hà Nội"
    }, SERECT_KEY_TOKEN)
  }
  return token
}

export const api = {
  searchMoviesByKeyWord,
  getDataMoviesById,
  checkLoginUser
}