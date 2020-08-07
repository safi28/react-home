import getCookie from './getCookie';

const userInfo = async (id) => {
  const response = await fetch(`http://localhost:9999/api/user/info/${id}`, {
    headers: {
      "Content-type": "multipart/form-data",
      'Authorization': getCookie('auth_cookie')
    },
  })
  return response.json()
};
export default userInfo
