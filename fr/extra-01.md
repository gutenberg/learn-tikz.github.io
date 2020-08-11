---
<<<<<<< HEAD
<<<<<<< HEAD
title: "Exemples avancés, comme sources d'inspiration"
---

Ce cours a donné un aperçu des principales fonctionnalités de LaTeX.
Mais LaTeX dispose d'une vaste panoplie d'extensions et est utilisé
dans d'innombrables domaines. Nous présentons ici quelques exemples
supplémentaires, sans explications, mais avec des liens vers la documentation
des packages utilisés sur [texdoc.net](https://texdoc.net). Les exemples
sont tirés des documentations en question, sauf indication contraire.

_Nota bene:_ Ce n'est pas parce que nous illustrons un package ici que
nous souhaitons spécialement le conseiller par rapport à d'autres packages
similaires. Il s'agit simplement d'un petit échantillon un peu arbitraire,
pour vous donner envie de poursuivre vos expérimentations avec LaTeX.


## Chimie
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "Examples for further study"
---

This course has given an overview of the core features of LaTeX.
LaTeX has vast array of extension packages and is used in many subject
areas.  We give here some examples, with no explanation here but links
to the package documentation at [texdoc.net](https://texdoc.net).
The examples are taken from the package documentation unless otherwise noted.

**Note** that inclusion here is not intended as an endorsement of the
  package over other similar packages, we just aim for a small sample
  showing a range of areas not otherwise covered in this course.

## Chemistry
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

### [`mhchem`](https://texdoc.net/pkg/mhchem)

```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{mhchem}
\begin{document}
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD

## Linguistique

### [`forest`](https://texdoc.net/pkg/forest)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Linguistics
### [`forest`](https://texdoc.net/pkg/forest)
```latex
\documentclass{article}
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{forest}
\begin{document}
\begin{forest}
[VP
  [DP[John]]
  [V’
    [V[sent]]
    [DP[Mary]]
    [DP[D[a]][NP[letter]]]
  ]
]
\end{forest}
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
## Échecs
=======
## Chess
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
## Chess
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- not 2017 -->
### [`xskak`](https://texdoc.net/pkg/xskak)
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{xskak}
\begin{document}
\newchessgame
\mainline{1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6}

\xskakset{moveid=2w}%
\chessboard[setfen=\xskakget{nextfen}]\\[1ex]
Position after 2.\,\xskakget{lan}
\end{document}
```


<<<<<<< HEAD
<<<<<<< HEAD
## Poésie

### [`memoir`](https://texdoc.net/pkg/memoir)

```latex
\documentclass{memoir}
\usepackage[T1]{fontenc}
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Poetry

### [`memoir`](https://texdoc.net/pkg/memoir)


```latex
\documentclass{memoir}
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{document}
\settowidth{\versewidth}{Nay, nay, I leave thee not,
                                       thou goest too}
\begin{verse}[\versewidth]
\ldots \\*
His judgement rendered, he dissolved the Thing. \\*
\flagverse{Ingeborg} And your decision? \\*
\flagverse{Fridthjof} \vinphantom{And your decision?}

                                   Have I ought to choose? \\*
Is not mine honour bound by his decree? \\*
And that I will redeem through Angantyr \\*
His paltry gold doth hide in Nastrand’s flood. \\*
Today will I depart. \\*
\flagverse{Ingeborg} \vinphantom{Today will I depart.}

                                 And Ingeborg leave? \\*
\flagverse{Fridthjof} Nay, nay, I leave thee not,

                                   thou goest too. \\*
\flagverse{Ingeborg} Impossible! \\*
\flagverse{Fridthjof} \vinphantom{Impossible!}

                                   O! hear me, ere thou answerest.
\end{verse}
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD

## Dessin

<!-- not 2017 -->
### [`tikz`](https://texdoc.net/pkg/tikz)

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Drawing
<!-- not 2017 -->
### [`tikz`](https://texdoc.net/pkg/tikz)


<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{tikz}
\usetikzlibrary {perspective}

\begin{document}

\newcommand\simplecuboid[3]{%
\fill[gray!80!white] (tpp cs:x=0,y=0,z=#3)
-- (tpp cs:x=0,y=#2,z=#3)
-- (tpp cs:x=#1,y=#2,z=#3)
-- (tpp cs:x=#1,y=0,z=#3) -- cycle;
x
\fill[gray] (tpp cs:x=0,y=0,z=0)
-- (tpp cs:x=0,y=0,z=#3)
-- (tpp cs:x=0,y=#2,z=#3)
-- (tpp cs:x=0,y=#2,z=0) -- cycle;
\fill[gray!50!white] (tpp cs:x=0,y=0,z=0)
-- (tpp cs:x=0,y=0,z=#3)
-- (tpp cs:x=#1,y=0,z=#3)
-- (tpp cs:x=#1,y=0,z=0) -- cycle;}
\newcommand{\simpleaxes}[3]{%
\draw[->] (-0.5,0,0) -- (#1,0,0) node[pos=1.1]{x};
\draw[->] (0,-0.5,0) -- (0,#2,0) node[pos=1.1]{y};
\draw[->] (0,0,-0.5) -- (0,0,#3) node[pos=1.1]{z};}
\begin{tikzpicture}[3d view]
   \simplecuboid{2}{2}{2}
   \simpleaxes{2}{2}{2}
\end{tikzpicture}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD

## Tracé de fonction mathématique

### [`pgfplots`](https://texdoc.net/pkg/plots)

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Function plotting
### [`pgfplots`](https://texdoc.net/pkg/plots)


<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{pgfplots}
\pgfplotsset{width=7cm,compat=1.17}

\begin{document}

\begin{tikzpicture}
<<<<<<< HEAD
<<<<<<< HEAD
\begin{axis}
    % density of Normal distribution:
    \addplot [red,
              domain=-3e-3:3e-3,
              samples=201,
             ]
       {exp(-x^2 / (2e-3^2)) / (1e-3 * sqrt(2*pi))} ;
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{axis}[]
      % density of Normal distribution:
      \addplot [
            red,
            domain=-3e-3:3e-3,
            samples=201,
      ]
            {exp(-x^2 / (2e-3^2)) / (1e-3 * sqrt(2*pi))};
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{axis}
\end{tikzpicture}

\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD

## Musique

### [`musixtex`](https://texdoc.net/pkg/musixtex)

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Music


### [`musixtex`](https://texdoc.net/pkg/musixtex)


<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{musixtex}

\begin{document}

\begin{music}
\parindent10mm
\instrumentnumber{1}
% a single instrument
\setname1{Piano}
% whose name is Piano
\setstaffs1{2}
% with two staffs
\generalmeter{\meterfrac44}
% 4/4 meter chosen
\startextract
% starting real score
\Notes\ibu0f0\qb0{cge}\tbu0\qb0g|\hl j\en
\Notes\ibu0f0\qb0{cge}\tbu0\qb0g|\ql l\sk\ql n\en
\bar
\Notes\ibu0f0\qb0{dgf}|\qlp i\en
\notes\tbu0\qb0g|\ibbl1j3\qb1j\tbl1\qb1k\en
\Notes\ibu0f0\qb0{cge}\tbu0\qb0g|\hl j\en
\zendextract
% terminate excerpt
\end{music}

\end{document}
```
<!-- {% endraw %} -->
