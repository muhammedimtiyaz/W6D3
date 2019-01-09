const APIUtil = {
  followUser: id => (
    $.ajax({
      dataType: 'json',
      method: 'POST', 
      url: `/users/${id}/follow`
    })
  ),

  unfollowUser: id => {
    return $.ajax({
      dataType: 'json',
      method: 'DELETE',
      url: `/users/${id}/follow`
    });
  }
};

module.exports = APIUtil;