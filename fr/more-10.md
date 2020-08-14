---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Écrire les mathématiques : pour aller plus loin"
---

## Plus d'alignements avec `amsmath`

En plus de l'environnement `align*` présenté dans la leçon principale, `amsmath`
propose plusieurs autres constructions pour les mathématiques « en exergue »,
notamment `gather` pour les affichages multi-lignes qui ne nécessitent pas
d'alignement, et `multline` pour fractionner une grosse expression sur plusieurs
 lignes, en alignant la première ligne à gauche, et la dernière à droite. Dans
tous les cas, la forme étoilée (avec `*`) supprime la numérotation des
équations.
<<<<<<< HEAD
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Mathematics"
=======
title: "�crire les math�matiques:�pour aller plus loin"
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
En plus de l'environnement `align*` pr�sent� dans la le�on principale, `amsmath` propose plusieurs autres constructions pour les math�matiques � en exergue �, notamment `gather` pour les affichages multi-lignes qui ne n�cessitent pas d'alignement, et `multline` pour fractionner une grosse expression sur plusieurs lignes, en alignant la premi�re ligne � gauche, et la derni�re � droite. Dans tous les cas, la forme �toil�e (avec `*`) supprime la num�rotation des �quations.
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

### Les colonnes dans les alignements mathématiques

Les environnements d'alignement `amsmath` sont conçus pour considérer les
colonnes par paires, la première colonne de chaque paire étant alignée à droite
et la seconde à gauche. Cela permet d'afficher plusieurs équations, chacune
étant alignée sur son symbole de relation.
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

### Les colonnes dans les alignements math�matiques

Les environnements d'alignement `amsmath` sont con�us pour prendre des paires de colonnes, la premi�re colonne de chaque paire �tant align�e � droite et la seconde � gauche. Cela permet d'afficher plusieurs �quations, chacune �tant align�e sur son symbole de relation.
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
En outre, il existe des variantes des environnements mathématiques « en
exergue » se terminant par `ed`, qui permettent de composer une sous-formule
destinée à être incluse dans une formule plus grande. Par exemple, `aligned`
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

En outre, il existe des variantes des environnements math�matiques � en exergue � se terminant par `ed` qui font un sous-terme d'un affichage plus grand, par exemple, `aligned` et `gathered`. (_traduction en->fr � revoir_)

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
L'environnement `aligned` prend un argument optionnel similaire à `tabular`,
utile pour aligner une formule mathématique sur sa ligne supérieure. Comparez
par exemple les différents éléments de la liste :
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
L'environnement `aligned` prend un argument optionnel similaire � `tabular`, utile pour aligner une formule math�matique sur sa ligne sup�rieure. Comparez par exemple les diff�rents �l�ments de la liste :
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
## La gras en mode mathématique

En LaTeX standard, il y a deux façons de mettre en gras des symboles
mathématiques. Pour mettre une expression entière en gras, utilisez `\boldmath`
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
## La gras en mode math�matique

En LaTeX standard, il y a deux fa�ons de mettre en gras des symboles math�matiques. Pour mettre une expression enti�re en gras, utilisez `\boldmath` avant l'expression. La commande `\mathbf`, elle, est faite pour mettre des lettres individuelles ou des mots en romain gras.
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
Si vous souhaitez accéder à des symboles en gras (comme le ferait `\boldmath`)
dans une expression non-grasse, vous pouvez utiliser la commande `\bm` du package
`bm`. La commande `\bm` fonctionne également avec des symboles tels que `=` et
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
Si vous souhaitez acc�der � des symboles en gras (comme le ferait `\boldmath`) dans une expression non-grasse, vous pouvez utiliser la commande `\bm` du paquet `bm`. La commande `\bm` fonctionne �galement avec des symboles tels que `=` et les lettres grecques (alors que `\mathbf` n'avait aucun effet sur `\pi` dans l'exemple ci-dessus).

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

Le package `mathtools` charge `amsmath` et ajoute des fonctionnalités
supplémentaires, telles que des environnements pour les matrices comme
ceux de `amsmath`, mais permettant de spécifier l'alignement des colonnes.

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

Le paquet `mathtools` charge `amsmath` et ajoute des fonctionnalit�s suppl�mentaires, telles que des environnements pour les matrices, un peu comme ceux de `amsmath`, qui permettent de sp�cifier l'alignement des colonnes.

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
## Mathématiques et Unicode

Comme nous le verrons dans [la leçon 14](lesson-14), il existe des variantes de
moteurs TeX qui utilisent des polices OpenType. Par défaut, ces moteurs
utilisent toujours les polices mathématiques TeX classiques, mais vous pouvez
utiliser le package `unicode-math` pour utiliser des polices mathématiques
OpenType. Les détails de ce package ne sont pas couverts par ce cours et nous
vous renvoyons [à sa documentation](https://texdoc.net/pkg/unicode-math).
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
## Math�matiques et Unicode

Comme nous le verrons dans [la le�on 14](lesson-14), il existe des variantes de moteurs TeX qui utilisent des polices OpenType. Par d�faut, ces moteurs utilisent toujours les polices math�matiques TeX classiques, mais vous pouvez utiliser le package `unicode-math` pour utiliser des polices math�matiques OpenType. Les d�tails de ce paquet ne sont pas couverts par ce cours et nous vous renvoyons [� sa documentation](https://texdoc.net/pkg/unicode-math). Cependant, voici un petit exemple:
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
=======
title: "More on: Mathematics (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Écrire les mathématiques: pour aller plus loin"
=======
title: "Écrire les mathématiques : pour aller plus loin"
>>>>>>> faf19621... I've made spacing around : and ; consistent.
---

## Plus d'alignements avec `amsmath`

En plus de l'environnement `align*` présenté dans la leçon principale, `amsmath` propose plusieurs autres constructions pour les mathématiques « en exergue », notamment `gather` pour les affichages multi-lignes qui ne nécessitent pas d'alignement, et `multline` pour fractionner une grosse expression sur plusieurs lignes, en alignant la première ligne à gauche, et la dernière à droite. Dans tous les cas, la forme étoilée (avec `*`) supprime la numérotation des équations.
=======
>>>>>>> c1d94734... Line-wrapping at 80 columns.

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


### Les colonnes dans les alignements mathématiques

Les environnements d'alignement `amsmath` sont conçus pour prendre des paires de
colonnes, la première colonne de chaque paire étant alignée à droite et la
seconde à gauche. Cela permet d'afficher plusieurs équations, chacune étant
alignée sur son symbole de relation.

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

En outre, il existe des variantes des environnements mathématiques « en
exergue » se terminant par `ed`, qui permettent de composer une sous-formule
destinée à être incluse dans une formule plus grande. Par exemple, `aligned`
and `gathered` sont les variantes de `align` and `gather`, respectivement :

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

L'environnement `aligned` prend un argument optionnel similaire à `tabular`,
utile pour aligner une formule mathématique sur sa ligne supérieure. Comparez
par exemple les différents éléments de la liste :

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

## La gras en mode mathématique

En LaTeX standard, il y a deux façons de mettre en gras des symboles
mathématiques. Pour mettre une expression entière en gras, utilisez `\boldmath`
avant l'expression. La commande `\mathbf`, elle, est faite pour mettre des
lettres individuelles ou des mots en romain gras.

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

Si vous souhaitez accéder à des symboles en gras (comme le ferait `\boldmath`)
dans une expression non-grasse, vous pouvez utiliser la commande `\bm` du package
`bm`. La commande `\bm` fonctionne également avec des symboles tels que `=` et
les lettres grecques (alors que `\mathbf` n'avait aucun effet sur `\pi` dans
l'exemple ci-dessus).


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

## Le package `mathtools`

The package `mathtools` loads `amsmath` and adds several additional features,
 such as variants of the `amsmath` matrix environments that allow the column
alignment to be specified.

Le package `mathtools` charge `amsmath` et ajoute des fonctionnalités
supplémentaires, telles que des environnements pour les matrices, un peu comme
ceux de `amsmath`, qui permettent de spécifier l'alignement des colonnes.

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

## Mathématiques et Unicode

Comme nous le verrons dans [la leçon 14](lesson-14), il existe des variantes de
moteurs TeX qui utilisent des polices OpenType. Par défaut, ces moteurs
utilisent toujours les polices mathématiques TeX classiques, mais vous pouvez
utiliser le package `unicode-math` pour utiliser des polices mathématiques
OpenType. Les détails de ce package ne sont pas couverts par ce cours et nous
vous renvoyons [à sa documentation](https://texdoc.net/pkg/unicode-math).
Cependant, voici un petit exemple :

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
>>>>>>> 91fc72e5... Conversion of all files to UTF-8.
