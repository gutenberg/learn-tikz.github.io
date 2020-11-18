---
title: More on: Extending LaTeX using packages
---
<<<<<<< HEAD
=======

## Loading multiple packages

The `\usepackage` command takes a comma-separated list of packages, so you can
load several in one go: `\usepackage{color,graphicx}` for example. If you are
passing options to a package, they will apply to each of the packages in the list.
It's also easier to comment out packages if they are loaded separately. So we
will stick to loading each package on a separate line.

## The `babel` package

We showed the `babel` package [in the main lesson](lesson-06) as a way to choose
different hyphenation patterns. It does a lot more than that, depending on the
language(s) being used. For example, in German, it provides some shorthands for
creating 'soft' hyphens, and also a way to quickly type umlauts without needing
a German keyboard.

```latex
\documentclass{article}

\usepackage[ngerman]{babel} % Notice that the option name is 'ngerman'

\begin{document}

H"ohe

\end{document}
```

Other language settings make design changes: for example, in traditional
French typography, there is a space before `:`, and this is added if you
load `babel` with the option `french`.
>>>>>>> 3b5c2b8f... corrections from Barbara
