<?php

namespace Drupal\nble_pages\Plugin\migrate\process;

use Drupal\migrate\MigrateException;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;

/**
 * Gets the second last value of a source array.
 *
 * @MigrateProcessPlugin(
 *   id = "array_doublepop",
 *   handle_multiples = TRUE
 * )
 *
 * The "extract" plugin in core can extract array values when indexes are
 * already known. This plugin helps extract the second last value in an array by
 * performing two "pop" operations.
 *
 * @code
 *   last_author:
 *     plugin: array_doublepop
 *     source: authors
 * @endcode
 */
class ArrayDoublePop extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    if (!is_array($value) && count($value) < 2) {
      throw new MigrateException('Input should be an array with more than one value.');
    }
    array_pop($value);
    return array_pop($value);
  }

}
