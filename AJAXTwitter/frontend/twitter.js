const FollowToggle = require('./follow_toggle.js');

const bindingEvents = () => {
  const $buttons = $('.follow-toggle');

  $buttons.each((_idx, el) => {     
    new FollowToggle($(el));
  });

 

















};

$(bindingEvents);