<?php

namespace Drupal\nble_pages\Plugin\migrate\process;

use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;

/**
 * Strip out odd and malformed recursive strings from NBLE image links.
 *
 * @MigrateProcessPlugin(
 *   id = "strip_bad_nble_relative",
 *   handle_multiples = TRUE
 * )
 *
 * NBLE has relative and confusing links to its img srcs. This fixes the URLs
 * after extraction from DOM.
 *
 * @code
 *   last_author:
 *     plugin: strip_bad_nble_relative
 *     source: authors
 * @endcode
 */
class StripBadNbleRelativeStrings extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    return preg_replace('/\.\.\/\.\.\/\.\.\/\.\.\/STUSubSites\/nble\/[a-z]\//', '', $value);
  }

}
