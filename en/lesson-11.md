---
title: Cross-referencing
---
<<<<<<< HEAD
=======

To have LaTeX remember a spot in your document you label it,
and then in other places you refer to it.

Change the document to this.
```latex
\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}

\begin{document}
Hey world!

This is a first document.


\section{Title of the first section}

Text of material for the first section.


\subsection{Subsection of the first section}\label{subsec:labelone}

<<<<<<< HEAD
<<<<<<< HEAD
Text of material for the first subsection.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}
=======
For running text, we use commands that alter the font set up: the commands
=======
For running text, we use commands that alter the font setup; the commands
>>>>>>> ce8dc718... Corrections from Barbara (3)
here are for example `\bfseries` and `\itshape`. Because these don't 'stop',
we need to place them in a _group_ if we want to prevent them applying to
the whole document. LaTeX environments are groups, as are table cells,
or we can use `{...}` to make an explicit group.

```latex
\documentclass{article}
\begin{document}
Normal text.

{\itshape

This text is italic.

So it this: the effect is not limited to a paragraph.

}
\end{document}
```

We can set font size in a similar way; these commands all work on an ongoing
basis. The sizes we set are relative: `\huge`, `\large`, `\normalsize`,
`\small` and `\footnotesize` are common. It's important to finish a paragraph
_before_ changing the font size back; see how we add an explicit `\par`
(paragraph) here.

```latex
\documentclass{article}
\begin{document}
Normal text.

\begin{center}
{\itshape\large Some text\par}
Normal text
{\bfseries\small Much smaller text\par}
\end{center}
>>>>>>> 95d515f2... Corrections from Barbara (2)

In subsection~\ref{subsec:labelone} is equation~\ref{eq:labeltwo}.
\end{document}
```

There are two `\label{...}` commands, one after the subsection
and one inside the equation environment.
They are associated with the last sentence's `\ref{...}` commands.
When you run LaTeX, it saves information in the labels to an auxiliary file.
For `\label{subsec:labelone}` LaTeX knows that it is now in a subsection and
so it saves the subsection's number.
For `\label{eq:labeltwo}` LaTeX knows that the most recent environment
of interest is an equation so it saves the information for the equation.
When you ask for the reference, LaTeX gets it from the auxiliary file.
(The `subsec:` and `eq:` aren't used by LaTeX;
rather, it just keeps track of what it has most
recently processed.
But when you are writing these help you remember what the label
is about.)

You may see references that show in an output PDF
as boldface double question marks, **??**.
The explanation is that because of this auxiliary file work,
the first time that you compile a document the label has not
yet been saved.
Run LaTeX once more time and you'll be all set.
(Usually while writing you will run LaTeX a number of times anyway,
so in practice this is not a bother.)

Notice the twiddles, the `~` characters before the references.
You don't want a line break between `subsection` and its number, or
between `equation` and its number.
Putting in a twiddle means LaTeX won't break the line there.
>>>>>>> a70db997... Top-level titles will come from YAML
