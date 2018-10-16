# MediaWiki Highlighting

Provides [Visual Studio Code](https://code.visualstudio.com/) with syntax highlighting for MediaWiki markup.

**Note**: This extension is currently in a pre-release state and has known issues and missing features.

## Installation

To manually build the project, use:

```bash
gulp
```

## Planned Features

* Provide support for various HTML tags allowed in MediaWiki markup. Possibly mark other tags as invalid. [Reference](https://www.mediawiki.org/wiki/Help:Formatting/en#HTML_tags)
* Allow for the use of the `<html>` MediaWiki tag for use when `$wgRawHtml` is enabled. [Reference](https://www.mediawiki.org/wiki/Manual:$wgRawHtml)

## Known Issues

* The default theme for Visual Studio Code doesn't have styling for `punctuation.definition.list` or `markup.list` and as such lists are currently using `markup.bold`.

## Release Notes

None are currently available.