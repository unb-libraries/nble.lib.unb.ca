#!/usr/bin/env sh
#
# Convenience script to test migration defined in this module. Should not be used in production.
#
# Migration requires several libraries/modules, including Querypath. To install:
#   composer require drupal/migrate_plus drupal/migration_tools drupal/migrate_tools querypath/querypath drupal/redirect
$DRUSH pmu nble_pages
$DRUSH en nble_pages
$DRUSH migrate-rollback nble_images
$DRUSH migrate-import nble_images
$DRUSH migrate-rollback nble_pages
$DRUSH migrate-import nble_pages
