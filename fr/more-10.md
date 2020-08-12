---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Ã‰crire les mathÃ©matiques :Â pour aller plus loin"
---

## Plus d'alignements avec `amsmath`

En plus de l'environnement `align*` prÃ©sentÃ© dans la leÃ§on principale, `amsmath`
propose plusieurs autres constructions pour les mathÃ©matiques Â« en exergue Â»,
notamment `gather` pour les affichages multi-lignes qui ne nÃ©cessitent pas
d'alignement, et `multline` pour fractionner une grosse expression sur plusieurs
 lignes, en alignant la premiÃ¨re ligne Ã  gauche, et la derniÃ¨re Ã  droite. Dans
tous les cas, la forme Ã©toilÃ©e (avec `*`) supprime la numÃ©rotation des
Ã©quations.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Mathematics"
=======
title: "Écrire les mathématiques: pour aller plus loin"
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
---

## Plus d'alignements avec `amsmath`

<<<<<<< HEAD
## Further `amsmath` alignments

In addition to the `align*` environment shown in the main lesson,
`amsmath` has several other display math constructs, notably `gather`
for multi-line displays that do not need alignment, and `multline` for
splitting a larger single expression over multiple lines, aligning the
first line to the left, and the last to the right. In all cases the `*`
form  omits the equation numbers by default.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
En plus de l'environnement `align*` présenté dans la leçon principale, `amsmath` propose plusieurs autres constructions pour les mathématiques « en exergue », notamment `gather` pour les affichages multi-lignes qui ne nécessitent pas d'alignement, et `multline` pour fractionner une grosse expression sur plusieurs lignes, en alignant la première ligne à gauche, et la dernière à droite. Dans tous les cas, la forme étoilée (avec `*`) supprime la numérotation des équations.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
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
<<<<<<< HEAD
<<<<<<< HEAD

### Les colonnes dans les alignements mathÃ©matiques

Les environnements d'alignement `amsmath` sont conÃ§us pour considÃ©rer les
colonnes par paires, la premiÃ¨re colonne de chaque paire Ã©tant alignÃ©e Ã  droite
et la seconde Ã  gauche. Cela permet d'afficher plusieurs Ã©quations, chacune
Ã©tant alignÃ©e sur son symbole de relation.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
### Columns in math alignments

The `amsmath` alignment environments are designed to take pairs of
columns with the first column of each pair aligned to the right and
the second aligned to the left. This allows multiple equations to be
shown, each aligned towards its relation symbol.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======

### Les colonnes dans les alignements mathématiques

Les environnements d'alignement `amsmath` sont conçus pour prendre des paires de colonnes, la première colonne de chaque paire étant alignée à droite et la seconde à gauche. Cela permet d'afficher plusieurs équations, chacune étant alignée sur son symbole de relation.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

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

<<<<<<< HEAD
<<<<<<< HEAD
En outre, il existe des variantes des environnements mathÃ©matiques Â« en
exergue Â» se terminant par `ed`, qui permettent de composer une sous-formule
destinÃ©e Ã  Ãªtre incluse dans une formule plus grande. Par exemple, `aligned`
and `gathered` sont les variantes de `align` and `gather`, respectivement :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

In addition there are variants of the display environments ending
in `ed` that make a subterm of a larger display for example, `aligned` and
`gathered`.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

En outre, il existe des variantes des environnements mathématiques « en exergue » se terminant par `ed` qui font un sous-terme d'un affichage plus grand, par exemple, `aligned` et `gathered`. (_traduction en->fr à revoir_)

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
L'environnement `aligned` prend un argument optionnel similaire Ã  `tabular`,
utile pour aligner une formule mathÃ©matique sur sa ligne supÃ©rieure. Comparez
par exemple les diffÃ©rents Ã©lÃ©ments de la liste :
=======
`aligned` takes a positional optional argument similar to `tabular`.
This is often useful to align an inline math formula on its top row;
compare the items in the list in the following example.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
`aligned` takes a positional optional argument similar to `tabular`.
This is often useful to align an inline math formula on its top row;
compare the items in the list in the following example.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
L'environnement `aligned` prend un argument optionnel similaire à `tabular`, utile pour aligner une formule mathématique sur sa ligne supérieure. Comparez par exemple les différents éléments de la liste :
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
## La gras en mode mathÃ©matique

En LaTeX standard, il y a deux faÃ§ons de mettre en gras des symboles
mathÃ©matiques. Pour mettre une expression entiÃ¨re en gras, utilisez `\boldmath`
avant l'expression. La commande `\mathbf`, elle, est faite pour mettre des
lettres individuelles ou des mots en romain gras.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Bold Math
Standard LaTeX has two methods to give bold symbols in math. To make
an entire expression bold, use `\boldmath` before entering the
expression. The command `\mathbf` is also available to set individual
letters or words in upright bold roman.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
## La gras en mode mathématique

En LaTeX standard, il y a deux façons de mettre en gras des symboles mathématiques. Pour mettre une expression entière en gras, utilisez `\boldmath` avant l'expression. La commande `\mathbf`, elle, est faite pour mettre des lettres individuelles ou des mots en romain gras.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % bad use of \mathbf
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Si vous souhaitez accÃ©der Ã  des symboles en gras (comme le ferait `\boldmath`)
dans une expression non-grasse, vous pouvez utiliser la commande `\bm` du package
`bm`. La commande `\bm` fonctionne Ã©galement avec des symboles tels que `=` et
les lettres grecques (alors que `\mathbf` n'avait aucun effet sur `\pi` dans
l'exemple ci-dessus).

=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
If you want to access bold symbols (as would be used by `\boldmath`)
within an otherwise normal weight expression, then you can use the
command `\bm` from the `bm` package. Note that `\bm` also works with
symbols such as `=` and Greek letters. (Note that `\mathbf` has no effect
on `\pi` in the example above.)
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Si vous souhaitez accéder à des symboles en gras (comme le ferait `\boldmath`) dans une expression non-grasse, vous pouvez utiliser la commande `\bm` du paquet `bm`. La commande `\bm` fonctionne également avec des symboles tels que `=` et les lettres grecques (alors que `\mathbf` n'avait aucun effet sur `\pi` dans l'exemple ci-dessus).

>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
## Le package `mathtools`

Le package `mathtools` charge `amsmath` et ajoute des fonctionnalitÃ©s
supplÃ©mentaires, telles que des environnements pour les matrices comme
ceux de `amsmath`, mais permettant de spÃ©cifier l'alignement des colonnes.

=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Mathtools
The package `mathtools` loads `amsmath` and adds several additional
features, such as variants of the `amsmath` matrix environments that
allow the column alignment to be specified.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
## Le package `mathtools`

The package `mathtools` loads `amsmath` and adds several additional
features, such as variants of the `amsmath` matrix environments that
allow the column alignment to be specified.

Le paquet `mathtools` charge `amsmath` et ajoute des fonctionnalités supplémentaires, telles que des environnements pour les matrices, un peu comme ceux de `amsmath`, qui permettent de spécifier l'alignement des colonnes.

>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
## MathÃ©matiques et Unicode

Comme nous le verrons dans [la leÃ§on 14](lesson-14), il existe des variantes de
moteurs TeX qui utilisent des polices OpenType. Par dÃ©faut, ces moteurs
utilisent toujours les polices mathÃ©matiques TeX classiques, mais vous pouvez
utiliser le package `unicode-math` pour utiliser des polices mathÃ©matiques
OpenType. Les dÃ©tails de ce package ne sont pas couverts par ce cours et nous
vous renvoyons [Ã  sa documentation](https://texdoc.net/pkg/unicode-math).
Cependant, voici un petit exemple :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Unicode Math

As will be seen in [Lesson 14](lesson-14), there are variant TeX
engines that use OpenType fonts. By default, these engines still use
classic TeX math fonts but you may use the `unicode-math` package
to use OpenType Math fonts. The details of this package are beyond
this course and we refer you to the
[package documentation](https://texdoc.net/pkg/unicode-math).
However, we give a small example here.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
## Mathématiques et Unicode

Comme nous le verrons dans [la leçon 14](lesson-14), il existe des variantes de moteurs TeX qui utilisent des polices OpenType. Par défaut, ces moteurs utilisent toujours les polices mathématiques TeX classiques, mais vous pouvez utiliser le package `unicode-math` pour utiliser des polices mathématiques OpenType. Les détails de ce paquet ne sont pas couverts par ce cours et nous vous renvoyons [à sa documentation](https://texdoc.net/pkg/unicode-math). Cependant, voici un petit exemple:
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

One two three
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Unicode Math Alphanumerics
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
