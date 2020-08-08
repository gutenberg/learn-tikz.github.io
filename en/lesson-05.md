---
title: Using document classes to influence design
---
<<<<<<< HEAD
=======

One thing that may not be clear after
the prior lesson is the first line's
`article`.
This is a document *class*.
It gives the basic design of the document: margins, fonts,
spacing, etc.
For instance, LaTeX articles have no chapters and so the top-level
unit is `\section{..}`.

<<<<<<< HEAD
To get chapters, instead declare `\documentclass{book}`.
=======
You might have noticed that all of the LaTeX documents we have created
so far have started with a `\documentclass` line, and that
`\documentclass{article}` has been the far most common choice. (We needed
`\documentclass{report}` in [the previous lesson](lesson-04) to try out the
`\chapter` command.) This line is required in all LaTeX documents, and is
(almost) always the first command you should have.

The document class sets up the general layout of the document, for example

- design: margins, fonts, spacing, etc.
- whether chapters are available
- if the title should be on a separate page

Document classes can also add new commands more generally; that's particularly
true for specialist cases like creating presentation slides.

The document class line can also set _global options_: things that apply to
the document as a whole. These are given in square brackets:
`\documentclass[<options>]{<name>}`. This syntax, with optional information
given first in square brackets, is used in many LaTeX commands.

## The base classes

LaTeX is supplied with a set of standard classes, all of which look similar
but with some variations:

- `article`: short documents without chapters
- `report`: longer documents with chapters, single-sided printing
- `book`: longer documents with chapters, double-sided printing, with
  front- and back-matter (for example an index)
- `letter`: correspondence with no sections
- `slides`: for presentations (but see below)

The `article`, `report` and `book` classes have very similar commands available,
as we've already seen. When writing a `letter`, the commands available are
a bit different
>>>>>>> be339595... corrections from Barbara, and mention amscls

```latex
<<<<<<< HEAD
\documentclass{book}
=======
\documentclass{letter}
\usepackage[T1]{fontenc}
\begin{document}

\begin{letter}{Some Address\\Some Street\\Some City}

\opening{Dear Sir or Madam,}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers

<<<<<<< HEAD
\begin{document}
Hey world!
=======
The text goes Here

\closing{Yours,}

\end{letter}

\end{document}
```

See how ``\\`` is used to separate lines of the address; we'll look at line
breaking [a bit later](lesson-09). Also see how the `letter` class creates  a
new environment for each letter and has specialised commands.
>>>>>>> be339595... corrections from Barbara, and mention amscls

This is a first document.


% ================
\chapter{Chapter One}
Introduction to the first chapter.

<<<<<<< HEAD

\section{Title of the first section}
Text of material in the first section
=======
The American Mathematical Society provide variants of the standard
classes (`amsart`, `amsbook`) with a more traditional design closer to
that used in mathematics journal publications.

The two largest and most popular 'extended' classes are the KOMA-script bundle
and the memoir class. KOMA-Scipt offers a set of classes which 'parallel' the
standard ones: `scrartcl`, `scrreprt` and `scrbook`, while there is a single
`memoir` class that is most like an extension of `book`.

These extended classes have lots of customisation hooks, which we'll explore a
bit in an exercise. You might wonder how we can know about the hooks they
provide; we will cover that [in the last lesson](lesson-15), but you can always
jump ahead!
>>>>>>> be339595... corrections from Barbara, and mention amscls

Second paragraph.

<<<<<<< HEAD
\subsection{Subsection of the first section}
=======
Explore how changing the document class between the standard ones, the KOMA
bundle and `memoir` affects the appearance of the document.
>>>>>>> be339595... corrections from Barbara, and mention amscls

<<<<<<< HEAD
Text of material in the subsection.
=======
```latex
\documentclass{article} % Change the class here
\usepackage[T1]{fontenc}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers


% ================
\section{Second section}

Text of the second section.

\end{document}
```

LaTeX has hundreds of document classes available.
Many journals offer one for download that suits their requirements,
and similarly many universities have one for dissertations.
>>>>>>> 10ae12a9... More YAML adjustments
