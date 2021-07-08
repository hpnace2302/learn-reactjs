import axios from 'axios'

const getDataUser = async () => {
    const url = `http://localhost:3000/songs`
    const response = await axios.get(url)
    const result = response.status === 200 ? response.data : {}
    return result;
}

export const api = {
    getDataUser
}