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

Will open the documentation of package `<pkg>`. The utility will search the
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

This is a [homepage](https://texdoc.net/) which works similar to the `texdoc` utility. You can search
for documentation they have available just like you would do with `texdoc -l`
and then choose from among the results.


## CTAN

CTAN is the Comprehensive TeX Archive Network. Most LaTeX packages are published
there. You can search the site for the package you want to access the
documentation of. Usually the packages are saved in `ctan.org/pkg/<pkg-name>`
and you can access the README and documentation of the packages stored on CTAN
there.
>>>>>>> d1b4e9ee... h1 heading added by page template
