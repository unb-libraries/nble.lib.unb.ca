/**
 * @file
 * Global nble_lib_unb_ca utilities.
 *
 */
(function ($, Drupal) {
    'use strict';

    Drupal.behaviors.nble_lib_unb_ca = {
        attach: function (context, settings) {
            var glossary = $(".block-system-main-block .glossary-listing");
            if (typeof glossary !== "undefined") {
                var letter = $(location).attr("href").split('/').pop();
                if (letter !== null) {
                    var className = "alpha-bg-" + letter;
                    $(glossary).addClass(className);
                }
            }
        }
    };
})(jQuery, Drupal);