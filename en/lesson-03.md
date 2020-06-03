---
title: Your first LaTeX document
---

<<<<<<< HEAD
In your editor open a new file `first.tex`.
Enter the text as it is written below, or you can
copy and paste from here.
=======
Our first LaTeX document is going to be very simple: the idea is to show you
how a document looks and how to typeset it successfully. It is also your
first chance to [see how to use the examples here on `learnlatex.org`](help).

If you are using a local LaTeX installation, in your editor create a new file
called `first.tex`, and either copy–paste the text below or type it in.
<<<<<<< HEAD
<<<<<<< HEAD
If you are using the online system, you can just click on the buttons in the
=======
If you are using the online system, you can just click on the ‘LaTeX.Online’
=======
If you are using the online system, you can just click on the ‘LaTeX Online’
>>>>>>> 790d3101... 2 latex online services
or ‘Open in Overleaf’ buttons in the
>>>>>>> 1e1f1daa... Style 'LaTeX.Online'
example to try it out! We suggest you try out the online options even if you
have set up LaTeX locally; this is a good chance to see how the different
options work.
>>>>>>> 55a095f3... Add cross-refs to the help page
```latex
\documentclass{article}

\begin{document}
Hey world!

This is a first document.
\end{document}
```
<<<<<<< HEAD
Save the file.
Compile it, that is, turn it into a PDF document.
(If you have errors, see the subsection below.)
=======
Save the file and typeset it to a PDF document; if you are using a local LaTeX
installation, the exact button to press will depend on the editor you have
picked. You should get a PDF file that contains the text above _plus_ a page
number; LaTeX adds that automatically.

>>>>>>> 8c49207f... corrections from Barbara
View the output `first.pdf` with
whatever program you prefer for PDF viewing.
Looks great; congratulations!



## Handling errors

Errors happen.
Check that you have entered the file lines exactly.
Sometimes seemingly small input changes give large changes in the
result, including causing a document to not work.
If you are stuck, try erasing the document and copying it fresh from the
lines above.

If your invocation of LaTeX ends with a question mark then you can get out by
typing `x` and `Enter`.

LaTeX's error messages can be hard to understand.
If you know someone with some experience, of course that's great.
If not, try putting the error message into a search engine; lots
of people have seen this error before and you'll find the answer there.



<<<<<<< HEAD
=======
LaTeX's error messages try to be helpful, but they are not the same as messages
in word processors. Some editors also make it hard to see the 'full' text of an
error, which can hide key details. LaTeX always creates a log of what it is
doing; this is a text file ending in `.log`. You can always see the full  error
messages there, and if you have a problem, expert LaTeX users will often ask for a
copy of your log file.
>>>>>>> 8c49207f... corrections from Barbara

## What you've got

The first document shows the basics.
LaTeX documents are  a mixture of text and commands.
The commands start with a backslash
and sometimes have arguments in curly braces
(or sometimes optional arguments in square brackets).
Then you get an output PDF by telling LaTeX to process your file.

Every LaTeX document has a `\begin{document}` and a matching
`\end{document}`.
Between these two is the *document body*, where your content goes.
Here the body has two paragraphs (in LaTeX you separate paragraphs
with a blank line).
Before the `\begin{document}` is the *document preamble*,
which has code to set up the document layout.

LaTeX has other `\begin{...}` and `\end{...}` pairs; these are
called *environments*.
You must match them, so that for every `\begin{x}` there is an `\end{x}`.
You must also nest them, so that if you have
`\begin{x}  ... \begin{y}` then you must have
`\end{y}  ... \end{x}`.

<<<<<<< HEAD
=======
We can add comments to a LaTeX file by starting them with `%`; let's use
that to show the structure:
```latex
\documentclass[a4paper,12pt]{article} % The document class with options
% A comment in the preamble
\begin{document}
% This is a comment
This is   a simple
document\footnote{with a footnote}.
>>>>>>> 8c49207f... corrections from Barbara


## (Material below here will be folded into other lessons later)

The other thing we added is a title and table of contents.
In the preamble, the `\title{...}` and `\author{...}` commands store the
information, and after the `\begin{document}` the `\maketitle`
cause LaTeX to put that information into the output.

The `\tableofcontents` command uses the section and subsection information
to populate the table.
Because it uses its own auxiliary file, here also you may need to run
LaTeX twice to resolve the information.


<<<<<<< HEAD
=======
There are some other characters with special meaning; we've just seen that `~`
is a 'hard' space, for example. Almost all of these characters  are _very_
uncommon in normal text, which is why they were chosen for special meanings.
If you do need to show one of these special characters, we've put some
[information in the further details page](more-03).
>>>>>>> 8c49207f... corrections from Barbara



<<<<<<< HEAD
## Citations

Finally, edit the file to say this.

```latex
\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}

\title{Hey world!}
\author{Stephen Maturin}

\begin{document}
\maketitle
\tableofcontents
\newpage
This is a first document, \( a^2+b^2 = f_0^2 \).
The mathematics is taken from \cite{ConcreteMath}.

% ================
\section{Title of the first section}

Solve the following recurrence for \( n,k\geq 0 \):
\begin{align*}
  Q_{n,0} &= 1
  \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for \( n,k>0 \).}
\end{align*}

\subsection{Subsection of the first section}

Elementary calculus suffices to evaluate \( C \) if we are clever enough
to look at the double integral
\begin{equation*}
  C^2
  =\int_{-\infty}^{+\infty} e^{-x^2} \mathrm{d}x
   \int_{-\infty}^{+\infty} e^{-y^2} \mathrm{d}y\;.
\end{equation*}

% ================
\section{Second section}
\label{sec:labelone}

Therefore
\begin{equation}
a\equiv b\pmod{m}
\qquad\Longleftrightarrow\qquad
a\equiv b \pmod{p^{m_p}}\quad\text{for all \( p \)}
\label{eq:labeltwo}
\end{equation}
if the prime factorization of \( m \) is $\prod_p p^{m_p}$.

In Section~\ref{sec:labelone} is equation~\ref{eq:labeltwo}.

\begin{thebibliography}{9}
\bib item{ConcreteMath}
Ronald L. Graham, Donald E. Knuth, and Oren Patashnik,
\textit{Concrete Mathematics},
Addison-Wesley, Reading, MA, 1995.
\end{thebibliography}
\end{document}
```

As earlier, you may need to compile the document
twice to resolve cross-references.
(In the `\begin{thebibliography}{9}` line,
the `9` tells LaTeX that
no reference is wider than the digit 9.)  
=======
Try adding text to your first document, typesetting and seeing the changes in
your PDF. Make some different paragraphs and add variable spaces. Explore how
your editor works; click on your source and find how to go to the same line  in
your PDF. Try adding some hard spaces and see how they influence line-breaking.
>>>>>>> 8c49207f... corrections from Barbara
