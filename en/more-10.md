---
title: More on: Math(s)
---

You may be interested in LaTeX because it is the standard for
writing mathematics.
We will use the `amsmath` package, developed
by the American Mathematical Society.

<<<<<<< HEAD
Edit the document to say this.
=======
## Further amsmath alignments

In addition to the `align*` environment shown in the main lesson,
`amsmath` has several other display math constructs, notably `gather`
for multi-line displays that do not need alignment, and `multline` for
splitting a larger single expression over multiple lines, aligning the
first line to the left, and the last to the right. In all cases the `*`
form  omits the equation numbers by default.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

Gather
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

<<<<<<< HEAD
In addition there are variants of the alignment environments ending
in `ed` that make a subterm of a larger display for example, `aligned` and
`gathered`.

# Bold Math
=======
### Columns in math alignments

The `amsmath` alignment environments are designed to take pairs of
columns with the first column of each pair aligned to the right and
the second aligned to the left. This allows multiple equations to be
shown, each aligned towards its relation symbol.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned equations
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```


In addition there are variants of the display environments ending
in `ed` that make a subterm of a larger display for example, `aligned` and
`gathered`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned:
\[
\left.\begin{aligned}
a&=b\\
c&=d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
b&=a\\
d&=c
\end{aligned}\right.
\]
\end{document}
```

`aligned` takes a positional optional argument similar to `tabular`.
This is often useful to align an inline math formula on its top row;
compare the items in the list in the following example.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
\begin{itemize}
\item 
$\begin{aligned}[t]
a&=b\\
c&=d
\end{aligned}$
\item 
$\begin{aligned}
a&=b\\
c&=d
\end{aligned}$
\end{itemize}
\end{document}
```

## Bold Math
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
Standard LaTeX has two methods to give bold symbols in math. To make
an entire expression bold, use `\boldmath` before entering the
expression. The command `\mathbf` is also available to set individual
letters or words in upright bold roman.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
\end{document}
```

If you want to access bold symbols (as would be used by `\boldmath`)
within an otherwise normal weight expression, then you can use the
command `\bm` from the `bm` package. Note that `\bm` also works with
symbols such as = and Greek letters.

>>>>>>> 9e864be0... comments from Barbara (2)
```latex
<<<<<<< HEAD
\documentclass{book}
\usepackage{amsmath,amssymb,amsthm}
=======
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{bm}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers

\begin{document}
Hey world!

This is displacement,
\( d(t) = v_0\cdot t\sin\theta - gt^2/2 \).


\chapter{Mathematical showcase}

<<<<<<< HEAD
Solve the following recurrence for \( n,k\geq 0 \):
\begin{align*}
  Q_{n,0} &= 1
  \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for \( n,k>0 \).}
\end{align*}
=======
\end{document}
```

## Mathtools
The package `mathtools` loads `amsmath` and adds several additional
features, such as variants of the `amsmath` matrix environments that
allow the column alignment to be specified.
```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{mathtools}

\begin{document}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers

Elementary calculus suffices to evaluate \( C \) if we are clever enough
to look at the double integral
\begin{equation*}
  C^2
  =\int_{-\infty}^{+\infty} e^{-x^2} \mathrm{d}x
   \int_{-\infty}^{+\infty} e^{-y^2} \mathrm{d}y\;.
\end{equation*}

<<<<<<< HEAD
Therefore
\begin{equation}
a\equiv b\pmod{m}
\qquad\Longleftrightarrow\qquad
a\equiv b \pmod{p^{m_p}}\quad\text{for all \( p \)}  
\end{equation}
if the prime factorization of \( m \) is $\prod_p p^{m_p}$.
=======
\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]
>>>>>>> 9e864be0... comments from Barbara (2)

\end{document}
```

<<<<<<< HEAD
Look first at the part before the chapter.
Write mathematics in the middle of text by putting it inside `\( ... \)`
(you can also put it inside `$ ... $`).
You must put any mathematical material at all inside
those markers, so for instance you would write `The number \( m \) is odd`.
Make subscripts as in `v_0` and make subscripts as in `t^2`.

Inside the chapter we are showing off so there is a lot to see.
Some things are: the command `\binom{n}{k}` produces a binomial coefficient.
The `\int` gives an integral, `\quad` produces some space,
and `\pmod{p}` produces the modulus notation using parentheses.

Others: put more than one thing in a superscript or subscript as
in `e^{-x^2}`, put text inside a mathematics area with `\text{...}`,
and you can put both a superscript and a subscript on the same
symbol, as we've done with the `int`.

This also shows environments for mathematics.
The `align*` environment makes the equations line up on the
ampersands, the `&` symbols.
Both `equation` and `equation*` give displayed equations,
but the former has a numbering tag while the
latter does not.

Back to the file's second line.
The `amssymb` package gives you access to the AMS's symbols.
For instance, get a blackboard boldface Z for the integers
with `$\mathbb{Z}$`.
The `amsthm` package gives you theorem environments,
but those go beyond the scope of this document.
=======
# Unicode Math

As will be seen in [Lesson 14](lesson-14), there are variant TeX
engines that use OpenType fonts. By default these engines still use
classic TeX math fonts but you may use the `unicode-math` package
to use OpenType Math fonts. The details of this package are beyond
this course and we refer you to the
[package documentation](https://texdoc.net/pkg/unicode-math)
however we give a small example here.

```
% !TEX xelatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

One two three
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

\end{document}
```
>>>>>>> b9c1b5d3... use Pagella as works with latexonline
