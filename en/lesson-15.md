---
title: Accessing documentation and getting help
---
<<<<<<< HEAD
=======


There are several ways to access the documentation of a package or class.

## `texdoc`

If you've installed a TeX distribution (_e.g._, TeXLive or MikTeX) and included
the documentation when you installed it you can access the locally saved
documentation using the `texdoc` command line tool. Using

<<<<<<< HEAD
<<<<<<< HEAD
<!-- {% raw %} -->
```
=======
```sh
>>>>>>> 56952370... Give highlighter some idea about shell commands
texdoc <pkg>
```
<!-- {% endraw %} -->
=======

`texdoc` < _pkg_ >

>>>>>>> f6ae357a... use single backtick to avoid edit/copy

will open the documentation of package `<pkg>`. The utility will search the
available documentation and open what it thinks is the closest match to your
search term. You can list and choose from among all the viable results it finds
using

<<<<<<< HEAD
<<<<<<< HEAD
<!-- {% raw %} -->
```
=======
```sh
>>>>>>> 56952370... Give highlighter some idea about shell commands
texdoc -l <pkg>
```
<!-- {% endraw %} -->
=======

<<<<<<< HEAD
`texdoc -l <` _pkg_ `>`
>>>>>>> f6ae357a... use single backtick to avoid edit/copy
=======
`texdoc -l` < _pkg_ >
>>>>>>> 4f936514... use single backtick to avoid edit/copy


## texdoc.net

This is a [homepage](https://texdoc.net/) which works similarly to the `texdoc` utility. You can search
for documentation they have available just like you would do with `texdoc -l`
and then choose from among the results.


## CTAN

CTAN is the Comprehensive TeX Archive Network. Most LaTeX packages are published
there. You can search the site for the package you want to access the
documentation of. Usually the packages are saved in `ctan.org/pkg/<pkg-name>`
and you can access the README and documentation of the packages stored on CTAN
there.
<<<<<<< HEAD
>>>>>>> d1b4e9ee... h1 heading added by page template
=======

## Getting help

There are various online forums for asking LaTeX questions; perhaps the most
popular today is [TeX - LaTeX StackExchange](https://tex.stackexchange.com).
Whenever you ask a question, it's best to first get your example clear: what is
normally known as a 'minimal working example' (MWE). This doesn't mean the code
works (as you wouldn't be asking otherwise!), but rather it means you've done
your best to make it clear, self-contained and minimal. The latter means 
having only enough content to show the issue.

How do you construct a MWE? Normally easiest is to start from

```latex
\documentclass{article}
\begin{document}
Text
\end{document}
```

and add lines one at a time until you show the issue. You can try to 'cut down'
your real file, but that can be a long process.

One thing you will want available is your log file; this is created by LaTeX
every time you run it, and has the same name as your input but ending `.log`.
Depending on your desktop interface, you might need to 'show extensions' to
work out which file it is.
>>>>>>> 257b5211... Corrections from Barbara (2)
