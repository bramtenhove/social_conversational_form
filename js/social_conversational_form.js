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
        console.log('Initial load.');
      });
    }
  };

})(jQuery, Drupal, document);
