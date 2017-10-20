/**
 * @file
 * Attaches behaviors for the Conversational Form module.
 */

(function ($, Drupal, document) {

  'use strict';

  /**
   * Attaches the conversational functionality on document load.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attach conversational functionality to form.
   */
  Drupal.behaviors.social_tour = {
    attach: function (context) {
      $('body').once('social_conversational_form').each(function () {
        // Initiate conversational form.
        $("form.user-register-form").conversationalForm({
          robotImage: '/profiles/contrib/social/themes/socialblue/favicon.ico',
          userImage: '/profiles/contrib/social/themes/socialbase/assets/images/icons/icon-account_circle.svg',
          submitCallback: function(){
            this.addRobotChatResponse("Alright, thanks for registering {firstname}");
            this.formEl.submit();
          },
          userInterfaceOptions:{
            controlElementsInAnimationDelay: 150,
            robot: {
              robotResponseTime: 250,
              chainedResponseTime: 750
            },
            user:{
              showThumb: false
            }
          }
        });
      });
    }
  };

})(jQuery, Drupal, document);
