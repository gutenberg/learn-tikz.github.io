---
title: Math(s)
---
<<<<<<< HEAD
=======

<<<<<<< HEAD
You may be interested in LaTeX because it is the standard for
writing mathematics.
We will use the `amsmath` package, developed
by the American Mathematical Society.
=======
## Math mode

You can mark up mathematics in LaTeX in a logical way in what is known as
'math mode'. In math mode, spaces are ignored and the correct spacing between
characters is (almost always) applied. There are two forms of math mode: inline
and display.

```latex
\documentclass{article}
\begin{document}
A sentence with inline mathematics: $y = mx + c$.

A second paragraph containing display maths
\[
  y = mx + c
\]
See how the paragraph continues after the display.
\end{document}
```

You may see 'LaTeX-like' mathematical input in other places, for example
the MathJaX system for placing equations in web pages. These systems often
accept slight variations on LaTeX's syntax as they do not actually use LaTeX
'behind the scenes'. Our examples are all 'correct' LaTeX, so if you see
something different in another context, it might be because the example is not
really using LaTeX.

## Inline math mode and mathematical notation

As you can see above, inline math mode is marked using a pair of dollar
symbols (`$...$`). It is also possible to use the notation `\( ... \)`.
Simple text is entered without any special markup, and you'll see that it's
spaced out nicely and has letters in italic; this is normal for mathematics.

We can easily add superscripts and subscripts; these are marked using `^` and
`_`, respectively.

```latex
\documentclass{article}
\begin{document}
Superscripts $a^{b}$ and subscripts $a_{b}$.
\end{document}
```

(You might see examples where simple super- and subscripts are entered without
braces, but that is not the official syntax and can go wrong; always use
braces.)

There are a _lot_ of specialist math mode symbol commands. Some of them are quite
easy, for example `\sin` and `\log` for sine and logarithm or `\theta` for the
Greek letter.

```latex
\documentclass{article}
\begin{document}
Some symbols: $y = 2 \sin \theta^{2}$.
\end{document}
```

We cannot cover all the standard LaTeX math mode commands here, but there are
many online resources listing the standard set. You can look up math mode
symbols using the great
[Detexify](https://personaljournal.ca/paulsutton/detexify) tool.

## Display mathematics

You can use exactly the same commands for display math mode as for inline
work. Display math mode is set centered and is meant to be 'part of a paragraph'
where the equation is larger. It's particularly useful for e.g. integrations
>>>>>>> bcc55465... comments from Barbara (2)

Edit the document to say this.
```latex
\documentclass{book}
\usepackage{amsmath,amssymb,amsthm}

\begin{document}
Hey world!

This is displacement,
\( d(t) = v_0\cdot t\sin\theta - gt^2/2 \).


\chapter{Mathematical showcase}

Solve the following recurrence for \( n,k\geq 0 \):
\begin{align*}
  Q_{n,0} &= 1
  \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for \( n,k>0 \).}
\end{align*}

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
- `\mathrm`: roman (upright)
- `\mathit`: italic spaced as 'text'
- `\mathbf`: boldface
- `\mathsf`: sanserif
- `\mathtt`: monospaced (typewriter)
- `\mathbb`: double-struck ('blackboard bold')

Each of these takes Latin letters as an argument, so for example we might
write a matrix as
>>>>>>> bcc55465... comments from Barbara (2)

\end{document}
```

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
>>>>>>> a70db997... Top-level titles will come from YAML
