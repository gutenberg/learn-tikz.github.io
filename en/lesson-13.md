---
title: Structuring longer documents
---
<<<<<<< HEAD
=======

<script>
preincludes = {
 "pre0": {
    "pre1": "pref.tex",
    "pre2": "chap1.tex",
    "pre3": "chap2.tex",
    "pre4": "append.tex",
    "pre5": "frontcover.tex",
    "pre6": "dedication.tex",
    "pre7": "copyright.tex",
    "pre8": "backcover.tex",
   }
}
</script>

<<<<<<< HEAD
This is the skeleton of a book.
It includes front and back covers, preface, table of contents,
chapters, and appendix, a bibliography, and an index.
=======
## Structuring your sources

When you are writing a longer document, it's likely you'll want to split up
the source into multiple files. For example, it's very common to have
one 'main'/'root' file, then one source file per chapter (for a book or thesis),
or per significant section (for a long article).

LaTeX allows us to split up sources in a controlled way. There are two important
commands here, `\input` and `\include`. We can use `\input` to make a file work
'as though it was typed in here', so it can be used for (essentially) any
material. The `\include` command works for chapters only: it starts a new page
and makes some internal adjustments. But it has a big advantage: it allows us to
be selective in which chapters to include, so you can work on part of your
document rather than the whole thing.

A longer document might therefore look something like the following
>>>>>>> 76c0ac2e... Corrections from Barbara (2)

<!-- pre0 {% raw %} -->
```latex
\documentclass[titlepage]{book}
\usepackage{makeidx}\makeindex

\title{Life at Sea}
\author{John Aubrey and Stephen Maturin}

\includeonly{% comment out lines to reduce output
  pref,
  chap1,
  chap2,
  append
  }

\begin{document}
\frontmatter
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\include{pref}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\bibliographystyle{apalike}
\addcontentsline{toc}{chapter}{Bibliography}
\bibliography{document}
\addcontentsline{toc}{chapter}{Index}
\printindex
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
=======
We'll look at the various aspects of this file below. (The various support files
are at the end of this page.)

## Using `\input`

The `\input` command is good for parts of a long file that are _not_ separate
chapters. In the example, we have used it to separate out the front- and
backcovers, keeping the main file short and clear, and also meaning we could
re-use the covers in another document. We've also used it for the 'non-chapter'
sections at the start of our 'book': things like the preface. Again, this is
to help keep the main file clear.

## Using `\include` and `\includeonly`

The `\include` command is good for chapters, so we have used it for each full
chapter; it always starts a new page. We have selected which chapters will
actually be typeset using `\includeonly`, which as you can see takes a
comma-separated list of file names. When you use `\includeonly`, you can shorten
how long your typesetting takes and produce a 'selective' PDF for proofreading.
In addition, the key advantage of `\includeonly` is that LaTeX will use all of
the cross reference information from the `.aux` files of other included files.
>>>>>>> 76c0ac2e... Corrections from Barbara (2)

LaTeX lets you split a large document into several files.
This simplifies editing, speeds processing, and lets multiple authors work
simultaneously.
The above file `document.tex` is referred to as the *root*.
It has four included files, `pref.tex`, `chap1.tex`, `chap2.tex`,
and `append.tex`.

Notice the `\includeonly{...}`.
If you compile the root document, and then use percent signs to
comment out all of the lines inside `\includeonly`
except for the one with `chap1` and compile again,
then your output will show only the material from the first chapter.
So it will be faster to compile and shorter to print.
In addition, the key advantage of `\includeonly` is that LaTeX will
use all of the cross reference information from other
included files.

The `\include{...}` command always starts a new page.
To bring in material without that page use `\input{...}`
(although you lose the referencing advantage of `\includeonly`).

Notice also that
in the preamble, the `\title{...}` and `\author{...}` commands remember the
information, and after the `\begin{document}` the `\maketitle`
puts that information into the output.
(Because of the first line's `[titlepage]` that will appear on a
separate page.)

<<<<<<< HEAD
The `\tableofcontents` command uses the information from
sectioning commands to populate the table of contents.
It has its own auxiliary file, so you may need to run
LaTeX twice to resolve the information.
Add information to that auxiliary file using the
`\addcontentsline{...}`.
=======
The `\tableofcontents` command uses the information from sectioning
commands to populate the table of contents.  It has its own auxiliary
file, with extension `.toc`, so you may need to run LaTeX twice to
resolve the information. The table is generated automatically from the
section titles. There are similar commands for `\listoffigures` and
`\listoftables`, which work from the float environment captions, and
use files with extension `.lof` and `.lot` respectively.

## Splitting the document into parts
>>>>>>> 76c0ac2e... Corrections from Barbara (2)

The `\frontmatter`, `\mainmatter`, and `\backmatter` commands
affect the formatting.
For instance, `\frontmatter` changes the page numbering to
Roman numbers.
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
## Exercises
>>>>>>> a545fb3e... Corrections from Barbara (2)


>>>>>>> 5b2cddbd... raw
=======
>>>>>>> 440b64f7... Remove titles covered by YAML
=======
The `appendix` command changes the numbering to `A`, `B`, etc.,
so for instance in the first chapter after it the header says `Appendix A`. 



----

#### pref.tex
<!-- pre1 {% raw %} -->
```latex
\chapter*{Preface}
The preface text.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Introduction}
The first chapter text.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Something}
The second chapter text.
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre4 {% raw %} -->
```latex
\chapter*{Appendix}
The first appendix text.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre5 {% raw %} -->
```latex
\begin{center}
The front cover
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
\large
For \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
The back cover
\end{center}
```
<!-- {% endraw %} -->

----

>>>>>>> 7c4c718b... filecontents
