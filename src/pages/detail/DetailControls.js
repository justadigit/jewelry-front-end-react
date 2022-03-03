import axios from 'axios';

export const handleComment = (
  commentInput,
  setCommentInput,
  pid,
  setHold,
  setRefreshKey,
  toast
) => {
  if (sessionStorage.length < 4) {
    toast.warn('You need to Login');
  } else {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + sessionStorage.getItem('token');
    let comment = commentInput;
    const userId = sessionStorage.getItem('userId');
    const name = sessionStorage.getItem('name');
    const postId = pid;
    let data = JSON.stringify({ comment, userId, name, postId });
    setHold(true);
    axios({
      method: 'post',
      url: 'https://jewelry-third-step.herokuapp.com/api/comment',
      data: data,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
        setRefreshKey((oldKey) => oldKey + 1);
        setHold(false);
        toast.info('Your comment added!');
        setCommentInput('');
      })
      .catch((err) => {
        console.log(err.message);
        toast.error('Something Wrong!');
      });
    setHold(false);
  }
};

export const handleDelete = (
  commenterId,
  cId,
  setRefreshKey,
  setHold,
  toast
) => {
  axios.defaults.headers.common['Authorization'] =
    'Bearer ' + sessionStorage.getItem('token');

  axios({
    method: 'delete',
    url: `https://jewelry-third-step.herokuapp.com/api/comment/${commenterId}/${cId}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      console.log(response.data);
      toast.info('Your comment Deleted!');
      setRefreshKey((oldKey) => oldKey + 1);
    })
    .catch((err) => {
      console.log(err.message);
      toast.error('Something Wrong!');
    });
};
