---
title: Logical structure
---
<<<<<<< HEAD
<<<<<<< HEAD
=======

LaTeX focuses on the logical structure of your document,
more than on visual detail.

You probably have used a word processor.
There, to start a section most people enter the title,
back up and highlight that,
click to make it in a larger size and bold,
and insert a new line.
But in LaTeX you enter `\section{title}` and the system
handles the font changes, vertical space, etc.
The one command is easier, and makes the output uniform throughout
the document.

Edit the file to say this, then save.
(Or, you can simply copy and paste it.)
=======

LaTeX provides ways to concentrate on the logical structure of your document, as well as the
ability to directly set the appearance. Most of the time, it's much better to use
methods that focus on structure, as that makes it easy to reuse or alter
appearance when you have to.

## A first example

We'll start with an example contrasting one of the most common logical markup
commands in LaTeX, `\emph`, with simply making something italic. (In print,
that's usually how things are emphasised.)

>>>>>>> ff71cd22... comments from Barbara (2)
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
\usepackage[T1]{fontenc}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
\begin{document}
Some text with \emph{emphasis and \emph{nested} content}.

Some text in \textit{italic and \textit{nested} content}.
\end{document}
```

You can probably guess that `\textit` is a command to make text italic, but it
_always_ makes things italic, so it doesn't work for nested material. See how
`\emph` _does_ know about nesting. There are also places where emphasis  isn't
the same as italic; for example, in presentations color is usually a better
option. With logical markup, we don't have to worry about that detail in the
body of the document.

We will look at [manual formatting later](lesson-11), but for the moment we'll
add `\textbf` to commands we know: it makes text bold.

## Sectioning commands

You probably have used a word processor, where  to start a section most people
enter the title text then simply make it bigger and bold, and follow it with a
new line. In LaTeX, using logical markup is actually _easier_ than doing the
formatting by hand; we can use the `\section` command. This handles the font
changes, vertical space, etc., and keeps the output uniform throughout the
document.

```latex
\documentclass{article}
<<<<<<< HEAD
>>>>>>> a04e83de... corrections from Barbara
=======
\usepackage[T1]{fontenc}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
\begin{document}
Hey world!

This is a first document.

% ================
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

<<<<<<< HEAD
LaTeX numbers the sections and subsections and includes the
titles in boldface.
How to modify their look is beyond this this document but the point is that
the system does this for you.

Notice the line before the sections starting with
a percent sign, `%`.
The percent sign marks the rest of the line as a comment
so that LaTeX ignores the equal signs.
(It is only here as an example,
but you might enter that to help find the sections
while you are editing.)
>>>>>>> a70db997... Top-level titles will come from YAML
=======
Using the standard `article` setup, LaTeX numbers the sections and subsections
and includes the titles in boldface. We'll think a bit about changing design [in
the next lesson](lesson-05).

LaTeX can divide up documents into quite a few levels

- `\chapter` (but we need `\documentclass{report}` or `\documentclass{book}` for this)
- `\section`
- `\subsection`
- `\subsubsection`

We can go further: the next one 'down' is `\paragraph`, but almost always that's
too much 'detail' in sections. (Yes, `\paragraph` is a section command, _not_ a
way to start a new paragraph!)

You might wonder about the title of a document. There are some special
commands for that, but not all documents use them, so we've
[covered that in the parallel extra lesson](more-04).

## Lists

The other very common place you'll want logical markup is writing lists.
There are two common types of list built in to LaTeX.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Ordered
\begin{enumerate}
  \item An entry
  \item Another One
  \item Wow! Three entries
\end{enumerate}

Unordered
\begin{itemize}
  \item An entry
  \item Another One
  \item Wow! Three entries
\end{itemize}

\end{document}
```

Notice that we use `\item` to start each entry, and that the marker used  for
each type of list is added automatically.

## Exercises

Experiment with different sectioning levels. Try using `\documentclass{report}`
instead of `\documentclass{article}` and adding `\chapter` commands. How
do they look? Try out `\paragraph` and (even) `\subparagraph` to see they work:
as standard they _don't_ add numbers.

Make some lists, and nest one list inside another. How does the format of the
numbers or markers change? You can only go to four levels with standard LaTeX,
<<<<<<< HEAD
but more than four levels of nestings tends to be a bad sign anyway!
>>>>>>> a04e83de... corrections from Barbara
=======
but more than four levels of nesting tends to be a bad sign anyway!
>>>>>>> 0cf5aa41... corrections from Barbara
