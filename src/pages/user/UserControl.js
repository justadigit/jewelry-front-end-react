//logout
export const handleLogout = (navigate) => {
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('name');
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('token');
  if (!sessionStorage.length > 0) {
    navigate('/');
  }
};
//Detail Request
export const handleDetail = (pId, navigate) => {
  navigate(`/user/post/${pId}`);
};
//Delete Request
export function handleDelete(
  postId,
  user,
  setHold,
  axios,
  setRefreshKey,
  toast
) {
  setHold(true);
  axios({
    method: 'delete',
    url: `${process.env.REACT_APP_API_ENDPOINT}/api/post/${postId}/${user.userId}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  })
    .then((response) => {
      setRefreshKey((oldKey) => oldKey + 1);
      toast.success(response.data.message);
      //console.log(response.data);
      setHold(false);
    })
    .catch((err) => {
      console.log(err);
      toast.success(err.message);
      setHold(false);
    });
}
