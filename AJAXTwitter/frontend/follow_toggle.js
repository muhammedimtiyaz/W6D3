const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = $el.data().userId;
    this.followState = $el.data().initialFollowState;
    
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
    } else if (this.followState === 'unfollowing') {
      this.$el.text("Unfollowing!");
    } else if (this.followState === 'following') {
      this.$el.text("Following!");
    } else {
      this.$el.text("Unfollow!");
    }
  }

  handleClick(e) {
    const that = this; 
    e.preventDefault();
    
    if (this.followState === "unfollowed") {
      this.followState = "following"; 
      this.$el.prop("disabled", true);
      this.render(); 

      APIUtil.followUser(this.userId).then( () => {
        that.$el.prop("disabled", false); 
        that.followState = "followed";
        that.render(); 
      });
    } else {
      this.followState = "unfollowing";
      this.$el.prop("disabled", true);
      this.render();

      APIUtil.unfollowUser(this.userId).then( () => {
        that.$el.prop("disabled", false); 
        that.followState = "unfollowed";
        that.render();
      });
    }
  }
}


module.exports = FollowToggle;
  


// this.followState === "unfollowed" ? 'POST' : 'DELETE'

// //success
// this.followState === "unfollowed" ? this.followState = 'followed' : this.followState = 'unfollow';
// this.render();

// $.ajax({
//     dataType: 'JSON',
//     method: this.followState === "unfollowed" ? 'POST' : 'DELETE',
//     url: `/users/${this.userId}/follow`,
//     success: () => {
//       this.followState === "unfollowed" ? this.followState = 'followed' : this.followState = 'unfollow';
//       this.render();
//     }
//   });