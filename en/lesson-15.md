---
title: Accessing documentation and getting help
---
<<<<<<< HEAD
=======

<<<<<<< HEAD

There are several ways to access the documentation of a package or class.
=======
>>>>>>> e7ffa776... remove draft banner

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
<<<<<<< HEAD
<!-- {% endraw %} -->
=======

`texdoc` < _pkg_ >

>>>>>>> f6ae357a... use single backtick to avoid edit/copy
=======
{: .noedit :}

on linux.

This is
not a TeX error but an operating system error saying that TeX is not
installed or not found.  A common mistake is to install an _editor_
such a TeXworks or TeXShop but without installing a TeX system such as
TeX Live or MikTeX.

<<<<<<< HEAD
## Anatomy of a TeX error message
<div class="highlight">
<pre>
\documentclass{article}

\newcommand\mycommand<span style="color:red">\textbold</span>{hmmm}
=======
## Anatomy of a {{ site.tex }} error message

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\mycommand{\textbold{hmmm}}
>>>>>>> 00f7de68... remove 'by hand' formatting and use markdown code blocks, position cursor with ace API

\begin{document}

My command is used here \mycommand.

\end{document}
<<<<<<< HEAD
</pre>
</div>
>>>>>>> 7aa9176f... bring styling closer to rouge div layout
=======
```
>>>>>>> 00f7de68... remove 'by hand' formatting and use markdown code blocks, position cursor with ace API

will open the documentation of package `<pkg>`. The utility will search the
available documentation and open what it thinks is the closest match to your
search term. You can list and choose from among all the viable results it finds
using

<<<<<<< HEAD
<<<<<<< HEAD
<!-- {% raw %} -->
```
<<<<<<< HEAD
=======
```sh
>>>>>>> 56952370... Give highlighter some idea about shell commands
texdoc -l <pkg>
=======
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 My command is used here \mycommand
                                      .
? 
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
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

This is a [website](https://texdoc.net/) which works similarly to the `texdoc` utility. You can search
for documentation they have available just like you would do with `texdoc -l`
and then choose from among the results.


<<<<<<< HEAD
## CTAN
=======
## Mismatched braces

<<<<<<< HEAD
<div class="highlight">
<pre>
\documentclass{article}

=======

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

>>>>>>> 00f7de68... remove 'by hand' formatting and use markdown code blocks, position cursor with ace API
\begin{document}
>>>>>>> 7aa9176f... bring styling closer to rouge div layout

[CTAN](https://www.ctan.org) is the Comprehensive TeX Archive Network. Most LaTeX packages are published
there. You can search the site for a package to access its
documentation. Usually the packages are saved in `ctan.org/pkg/<pkg-name>`
and you can access the README and documentation of the packages stored on CTAN
there.
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1b4e9ee... h1 heading added by page template
=======
=======

<<<<<<< HEAD
## Books on LaTeX
=======
\end{document}
<<<<<<< HEAD
</pre>
</div>
>>>>>>> 7aa9176f... bring styling closer to rouge div layout

There are several books available that can help you learn more about LaTeX.
As a beginner, you will gain a lot from a structured beginners guide, as
those can give a lot more detail than we've covered here. You might also
want access to a reference with more detail and recommendations.

The LaTeX team have [a list of books](https://www.latex-project.org/help/books/)
largely written by members. The most notable are [Lamport's offical
guide](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)
and the comprehensive
[LaTeX Companion](https://www.informit.com/store/latex-companion-9780201362992).

Other books aimed at learning LaTeX include

- [_Guide to
  LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) by Helmut
  Kopka and Patrick Daly: available as an e-book
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/) by
  Nicola Talbot: available as a free e-book or low-cost printed edition
- [_Using LaTeX to write a PhD
  thesis_](https://www.dickimaw-books.com/latex/thesis/) by
  Nicola Talbot: available as a free e-book or low-cost printed edition
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide)
  by Stefan Kottwitz: available as an e-book and in print
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) by
  Marc van Dongen: available as an e-book and in print
>>>>>>> a1ee6fc9... Corrections from Barbara (5)

## Getting help

<<<<<<< HEAD
There are various online forums for asking LaTeX questions; perhaps the most
popular today is [TeX - LaTeX StackExchange](https://tex.stackexchange.com).
Whenever you ask a question, it's best to first get your example clear: what is
normally known as a 'minimal working example' (MWE). This doesn't mean the code
works (as you wouldn't be asking otherwise!), but rather it means you've done
your best to make it clear, self-contained and minimal. The latter means 
having only enough content to show the issue.

How do you construct a MWE? Normally easiest is to start from

```latex
=======
<div class="highlight">
<pre>
>>>>>>> 7aa9176f... bring styling closer to rouge div layout
\documentclass{article}
\begin{document}
Text
\end{document}
<<<<<<< HEAD
```
=======
</pre>
</div>
=======
```
>>>>>>> 00f7de68... remove 'by hand' formatting and use markdown code blocks, position cursor with ace API

Here the error is a similar mismatch, `}` is used to end the optional
argument. Here though the closing brace causes LaTeX's option parsing
to fail and you get an internal and not that helpful error  

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

although while the error description is unhelpful the following two
lines do accurately display the location of the error by the use of
the linebreak showing how far TeX had read:
```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


## Missing files

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

This produces the error

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Note the same error may be caused by two different causes; a simple
typo as here, which may be corrected by fixing the package name, or
that the file really is missing and needs to be installed on the
current system.

## Blank lines in display math

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

Produces the slightly mysterious error

```
! Missing $ inserted.
```
{: .noedit :}

But the fix is simple, blank lines are not allowed in math
environments and should be deleted.
>>>>>>> 7aa9176f... bring styling closer to rouge div layout

and add lines one at a time until you show the issue. You can try to
'cut down' your real file, but that can be a long process.

If you need more text to show page breaking and other effects, then
packages such as `lipsum` may be used to generate nonsense paragaraphs
of text while keeping your test file small.

<<<<<<< HEAD
One thing you will want available is your log file; this is created by LaTeX
every time you run it, and has the same name as your input but ending `.log`.
Depending on your desktop interface, you might need to 'show extensions' to
work out which file it is.
>>>>>>> 257b5211... Corrections from Barbara (2)
=======
Produce small documents with different errors and note the form of the error messages.

<script>
  window.addEventListener('load', function(){
      if(editors['pre2'] != null) editors['pre2'].moveCursorTo(3, 31, false);
      if(editors['pre4'] != null) editors['pre4'].moveCursorTo(3, 18, false);
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(3  , 20, false);
      if(editors['pre9'] != null) editors['pre9'].moveCursorTo(7, 0, false);
  }, false);
</script>
>>>>>>> 00f7de68... remove 'by hand' formatting and use markdown code blocks, position cursor with ace API
