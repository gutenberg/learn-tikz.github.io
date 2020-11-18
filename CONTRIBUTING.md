---
title: CONTRIBUTING
permalink: /CONTRIBUTING
---

# Contributing to learnlatex.org

Thanks for considering contributing to learnlatex.org: feedback, fixes and
ideas are all useful.

## ChangeLog, commit messages and authors

Please note any significant change to the content of questions in
[`CHANGELOG.md`](CHANGELOG.md), including which lesson is changed in the
format `L-<number>`.

Commit messages where the content of a single lesson is changed should start
with `L-<name>`. Changes to the _content_ of lessons should always be made in
separate commits: formatting, typos or other 'non-significant' changes can be
made for multiple lessons in one go.

If you are making a significant change to the content, please make sure you
add yourself to the [contributors list](AUTHORS.md).

## Formatting

The site is written in [GitHub-flavoured
Markdown](https://guides.github.com/features/mastering-markdown/), and uses the
[GitHub Pages](https://pages.github.com/) system to convert this to web pages.
In general, Markdown is easy to use, and offers enough formatting power to make
the site useful. There are a few things to watch out for

- The Jekyll 'back-end' used by GitHub Pages is somewhat picky about unbalanced
  braces (`{` and `}`), even in code blocks. That's because it is looking for
  some instructions of its own there. To turn this off, surround the relevant
  parts of your source with

  <code>&lt;!-- &#x7b;&#x25; raw &#x25;&#x7d; --&gt;</code>

  and

  <code>&lt;!-- &#x7b;&#x25; endraw &#x25;&#x7d; --&gt;</code>

  (Typically these will go just before and after the
  <code>&#96;&#96;&#96;</code> lines.)

- Only use block quotes for real quotations: use code markup for terminal
  output and similar

- We use the following HTML entities for special characters:
  - `&hellip;` Ellipsis
  - `&mdash;` Em-dash
  - `&ndash;` En-dash
  - `&nbsp;` Non-breaking space

- quotes you can use ASCII double and single quotes, which will be changed
  to typographical quotes: `"abc" 'abc' abc's` produces "abc" 'abc' abc's.

- Please wrap source lines to keep them below 80 characters long
<<<<<<< HEAD
=======

## Language

At present, we have full content only in English, but the longer-term plan is
to add additional languages: notice that the content is within a `/en/` tree.
There are sample translations unde `de`, `fr` and `pt` but only teh page titles are translated until the English version is more stable.

For the avoidance of doubt, we are using US English spelling (and idiom)
on the site, as this is the most widely-understood approach.

If you do plan to contribute a translation then please contact the
site maintainers by opening an
[issue](https://github.com/learnlatex/learnlatex.github.io/issues).

The lessons `lesson-`1&ndash;15 and extended lessons `more-`1&ndash;15
should be translated fairly closely.  Additional lessons `language-`\*
may be added that need not be translations of the English text, but
have information specific to the language being used.

The translation should be placed in a two-letter directory using the
ISO 639-1 language code.  The yml `langs` array in `_config.yml` will
need to be extended to include the language.

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
A test site showing the language switching (but without real
translated text) is [viewable](https://davidcarlisle.github.io/ll)
>>>>>>> bebe68f8... language switching notes
=======
>>>>>>> 9e0bbbb5... remove link  to ll test site as language switching now enabled here
=======
See also the [specific guidelines for translators](TRANSLATIONS).
>>>>>>> abf0fa15... link to TRANSLATORS
=======
See also the [specific guidelines for translators](TRANSLATIONS.md).
>>>>>>> 006a9def... relative links issue #79
