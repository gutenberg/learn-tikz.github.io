---
title: Extending LaTeX using packages
---
<<<<<<< HEAD
=======

After having declared a class, in the preamble
you can modify the document in relatively small ways by using
*packages*.

<<<<<<< HEAD
For example, we can change the margins with a new second line.
=======
- Change how some parts of LaTeX work
- Add new commands to LaTeX
- Change document design

## Changing how LaTeX works

The LaTeX 'kernel' (the core of LaTeX) is rather limited in user customisation,
and so some add-on packages deal with very common ideas. The first is to
change how LaTeX hyphenates material. Different languages have different rules,
so it's important to tell LaTeX which one to use. This is handled by the `babel`
package.

```latex
\documentclass{article}

%\usepackage[french]{babel}

\usepackage[width = 6cm]{geometry} % To force hyphenation here

\begin{document}

This is a lot of filler which is going to demonstrate how LaTeX hyphenates
material, and which will be able to give us at least one hyphenation point.
This is a lot of filler which is going to demonstrate how LaTeX hyphenates
material, and which will be able to give us at least one hyphenation point.

\end{document}
```

Try un-commenting the (clearly misleading) line to load `babel` and see the
effect. (The standard hyphenation rules are US English; use the `UKenglish`
option to tell `babel` if you are in UK.)

The `babel` package does a lot more than hyphenation, depending on the language
involved: we've given [some more details](more-06) if you need them.

## Changing design

It's useful to be able to adjust some aspects of design independent of the
document class. The most obvious one are the page margins. We've just used
the `geometry` package in the example above, but let's now have an example
specifically about margins.
>>>>>>> efa53f6a... corrections from Barbara

```latex
\documentclass{book}
\usepackage[margin=1in]{geometry}

\begin{document}
Hey world!

This is a first document.


% ================
\chapter{Chapter One}
Introduction to the first chapter.


\section{Title of the first section}
Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.


% ================
\section{Second section}

Text of the second section.

\end{document}
```

One of LaTeX's strengths is that you can choose from
thousands of packages, including ones for writing
mathematical text, for hyperlinking, for sophisticated capabilities
with color, etc.
We will introduce some of these in later lessons.
>>>>>>> 10ae12a9... More YAML adjustments
