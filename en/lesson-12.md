---
title: Citations and references
---
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<script>
preincludes = {
 "pre1": {
<<<<<<< HEAD
    "pre0": "document.bib"
=======
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
>>>>>>> 17af86e9... set up pre2
   }
}
</script>
>>>>>>> dff3f7e1... support multi-file examples via filecontents

<<<<<<< HEAD
For bibliographic citations, while
you can include reference sources directly in your document,
usually you will get that information from one or more external files.
Such a file is a database of references,
containing the information in a processing-friendly format.
It may have many entries; here is one.
=======
## Reference databases

For bibliographic citations, while you can include reference sources directly in
your document, usually you will get that information from one or more external
files. Such a file is a database of references, containing the information in a
processing-friendly format. Using one or more reference databases lets you
re-use information and avoid manual formatting.

Reference databases are normally refered to as 'BibTeX files' and have the
extension `.bib`. They contain one or more entries, one for each reference, and
within each entry there are a series of fields. Let us look at an example
.
>>>>>>> 336fb7f3... Corrections from Barbara (2)

<!-- {% raw %} -->
```
@BOOK
  {ConcreteMath,  % string to use for citation
  AUTHOR = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  TITLE = {Concrete Mathematics},
  PUBLISHER = {Addison-Wesley},
  DATE = 1995
  }
```
<!-- {% endraw %} -->

<<<<<<< HEAD
=======
This is an entry for an article and a book; these are by far the most common
types. Each database entry type starts with `@`, as shown, and all of the
information then sits within a brace pair.

The various fields we need are given in key-value format, apart from what is
known as the 'key': the 'name' of the citation. You can use whatever you like,
as it's just a label, but above we've chosen to use the name of an author plus
the year: this is a common approach.

Exactly which fields you need to give depends on the type of entry, but most of
these are quite obvious. You might notice that in the `author` field, each entry
is separated by `and`. This is _essential_: the format of the _output_ needs to
know which author is which. You might also notice that in the article title,
some entries are in an extra set of braces; these are there to prevent any
case-changing being applied.

Editing `.bib` files by hand is rather tedious, so most people use a dedicated
editor. [JabRef](https://www.jabref.org) is widely used and cross-platform,
but there are several other interfaces available. Here, we will use the short
example database above for our demonstrations; we have 'saved' it as
`learnlatex.bib`.

## Transferring information from the database

>>>>>>> 336fb7f3... Corrections from Barbara (2)
To get the information into your document there are three steps.
First, use LaTeX to compile your document, which creates a file with a
list of the references that your document cites.  Second, run a
program that takes information from the database of references, picks
out the ones that you use, and puts them in order.  Finally, compile
your document again so that LaTeX can use that information to resolve
your citations. Usually it will require at least two compilations to
resolve all the references.

For the second step there are two systems in wide use: BibTeX and
<<<<<<< HEAD
BibLaTeX.
We shall use BibLaTeX for this illustration
but the principles are the same.

In addition to putting the above material in a file `document.bib`,
create this LaTeX file.
=======
Biber. Biber is only ever used with a LaTeX package called `biblatex`, whereas
BibTeX is used with either no packages at all or with `natbib`.

Running a second tool as well as LaTeX is handled in different ways by different
editors. For our online examples, there are some 'behind the scenes' scripts
<<<<<<< HEAD
<<<<<<< HEAD
that do everything in one go; that's true for LaTeX-Online and Overleaf. Your
=======
that do everything in one go; that's true for LaTeX.Online and Overleaf. Your
>>>>>>> 1e1f1daa... Style 'LaTeX.Online'
editor might have a single 'do stuff' button or you might have to choose to run
BibTeX or Biber manually between LaTeX runs.
=======
that do everything in one go; that's true for
LaTeX.Online, LaTeX-on-HTTP and Overleaf.
Your editor might have a single 'do stuff' button or you might have to
choose to run BibTeX or Biber manually between LaTeX runs.
>>>>>>> 790d3101... 2 latex online services

The format of citations and references is independent of your BibTeX database,
and is set by what is known as a 'style'. We will see that these work slightly
differently in `natbib` and `biblatex`, but the general idea remains: we can
choose how citations appear.

## The `natbib` workflow

Whilst it is possible to insert citations into a LaTeX document without
any packages loaded, this is rather limited. Instead, we will use the
`natbib` package, which allows us to create differing types of citation and
has a lot of styles available.

The basic structure of our input is as shown in this example.

```latex
\documentclass{article}
\usepackage{natbib}

\begin{document}
The mathematics showcase is from \cite{Graham1995}, whereas
there is some chemistry in \cite{Thomas2008}.

Some more complex citations: \citep{Graham1995}, \citet{Thomas2008}.

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

You can see that we can `\cite` different entries in the database by giving their
key. The `natbib` package offers both textual and parenthetical citation styles,
`\citet` and `\citep`, respectively. The reference style is selected by the
`\bibliographystyle` line; here we've used the `plainnat` style. The
bibliography is actually inserted by the `\bibliography` line, which also picks
the database(s) to use; this is a comma-separated list of names.

The setup above uses author-year style, but we can make use of numeric
citations. That is done by adding the `numbers` option to the `natbib` line.

## The `biblatex` workflow

The `biblatex` package works slightly differently to `natbib`, as we select
the databases in the preamble but print it in the document body. There are
some new commands for this.
>>>>>>> 336fb7f3... Corrections from Barbara (2)

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{biblatex}
\addbibresource{document.bib} % file of reference info

\begin{document}
The mathematics showcase is from \cite{ConcreteMath}.

\printbibliography
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
When you compile this with LaTeX,
your editor may automatically detect that it has
references to resolve and do that for you, or you may need to
run the steps by hand.
In the latter case,
next run `biber document`,
and then compile with LaTeX twice more.
The result has the `\cite{...}` replaced with a reference, and
a list of references placed where the document source says
`\printbibliography`.
>>>>>>> 440b64f7... Remove titles covered by YAML
=======
Notice that `\addbibresource` _requires_ the full database filename, whereas
we omitted the `.bib` for `\bibliography` with `natbib`. Also notice that
`biblatex` uses rather longer names for its citation commands, but these are
all quite easy to guess.

In `biblatex`, the reference style is picked when we load the package. Here,
we've used `authoryear`, but there is a `numeric` style and many others are
also available.

## Exercises

Try out both the `natbib` and `biblatex` examples. For `natbib`, you'll need
to run LaTeX, BibTeX, LaTeX, LaTeX; for `biblatex`, it's LaTeX, Biber, LaTeX.
<<<<<<< HEAD
Find out how to do that in your editor, or try the Overleaf and LaTeX-Online
=======
Find out how to do that in your editor, or try the Overleaf and LaTeX Online
>>>>>>> 790d3101... 2 latex online services
automation.

See what happens when you create new database entries and new citations. Add
a citation that's not in the database and see how it appears. Experiment
with the `numeric` option to both packages.
>>>>>>> 336fb7f3... Corrections from Barbara (2)
