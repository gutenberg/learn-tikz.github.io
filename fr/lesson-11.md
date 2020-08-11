---
<<<<<<< HEAD
<<<<<<< HEAD
title: "Mise en forme du texte: fontes et espacements"
---

## Espacement des paragraphes

Nous avons dÃ©jÃ  vu qu'une ligne blanche dans votre saisie gÃ©nÃ¨rera un nouveau
paragraphe en LaTeX. ConformÃ©ment aux usages typographiques, ce nouveau
paragraphe commence par une indentation (ou retrait de paragraphe). Un autre
style possible est de ne pas avoir d'indentations pour les paragraphes, mais
plutÃ´t d'avoir une Â« ligne blanche Â» entre eux. On peut obtenir ce rÃ©sultat
en utilisant le package `parskip`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
\usepackage{lipsum} % Pour avoir du texte de remplissage

=======
title: "Formatting: fonts and spacing"
=======
title: "Mise en forme du texte: fontes et espacements"
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
---

## Espacement des paragraphes

Nous avons déjà vu qu'une ligne blanche dans votre saisie générera un nouveau paragraphe en LaTeX. Conformément aux usages typographiques, ce nouveau paragraphe commence par une indentation (ou retrait de paragraphe). Un autre style possible est de ne pas avoir d'indentations pour les paragraphes, mais plutôt d'avoir une « ligne blanche » entre eux. On peut obtenir ce résultat en utilisant le package `parskip`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
<<<<<<< HEAD
\usepackage{lipsum} % Just for some filler text
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage{lipsum} % Pour avoir du texte de remplissage

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{document}
\lipsum
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
## InsÃ©rer un saut de ligne

La plupart du temps, il ne faut pas ajouter de force une coupure de ligne
dans LaTeX : en fait, c'est presque toujours d'un nouveau paragraphe dont
vous avez besoin, ou bien du package `parskip` pour apparaÃ®tre une
Â« ligne blanche Â» entre les paragraphes, comme vu ci-dessus. 

Il y a seulement quelques endroits oÃ¹ l'usage de `\\` est conseillÃ© pour
commencer une nouvelle ligne sans commencer un nouveau paragraphe :

- Ã€ la fin des lignes d'un tableau,
- Dans l'environnement `center`,
- En poÃ©sie (dans un environnement `verse`).

Presque toujours, si vous n'Ãªtes pas dans un de ces cas particuliers,
**vous ne devriez pas** utiliser `\\`.


## InsÃ©rer une espace

On peut insÃ©rer une espace fine (d'environ la moitiÃ© de la largeur normale)
en utilisant `\,`. En mode mathÃ©matique, il y a aussi d'autres commandes :
`\.`, `\:` et `\;`, et une pour l'espace nÃ©gative : `\!`.

TrÃ¨s rarement, par exemple lors de la crÃ©ation d'une page de titre, on a avoir
besoin d'ajouter un espace horizontal ou vertical explicite. Les commandes
`\hspace` and `\vspace` sont faite pour Ã§a :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Un peu de texte \hspace{1cm} encore du texte.

\vspace{10cm}

Et encore davantage de texte.
\end{document}
```


## Mettre en forme le texte de faÃ§on explicite

Nous avons vu [il y a quelque temps](lesson-03) que le plus souvent, il est
prÃ©fÃ©rable de s'appuyer sur la structure logique du document. Mais il arrive
parfois que l'on veuille mettre le texte en gras, en italique, en interligne
simple, etc. Il existe deux types de commandes pour cela : une pour les textes
courts, et une pour le texte Â« courant Â».

Pour les petits fragments de texte, nous utilisons les commandes `\textbf`,
`\textit`, `\textrm`, `\textsf`, `\texttt` et `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

=======
## Forcing a new line
=======
## Insérer un saut de ligne

La plupart du temps, il ne faut pas ajouter de force une coupure de ligne dans LaTeX : en fait, c'est presque toujours d'un nouveau paragraphe dont vous avez besoin, ou bien du package `parskip` pour apparaître une « ligne blanche » entre les paragraphes, comme vu ci-dessus. 
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

Il y a seulement quelques endroits où l'usage de `\\` est conseillé pour commencer une nouvelle ligne sans commencer un nouveau paragraphe :

- À la fin des lignes d'un tableau,
- Dans l'environnement `center`,
- En poésie (dans un environnement `verse`).

Presque toujours, si vous n'êtes pas dans un de ces cas particuliers, **vous ne devriez pas** utiliser `\\`.


## Insérer une espace

On peut insérer une espace fine (d'environ la moitié de la largeur normale) en utilisant `\,`. En mode mathématique, il y a aussi d'autres commandes : `\.`, `\:` et `\;`, et une pour l'espace négative : `\!`.

Très rarement, par exemple lors de la création d'une page de titre, on a avoir besoin d'ajouter un espace horizontal ou vertical explicite. Les commandes `\hspace` and `\vspace` sont faite pour ça:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Un peu de texte \hspace{1cm} encore du texte.

\vspace{10cm}

Et encore davantage de texte.
\end{document}
```


## Mettre en forme le texte de façon explicite

Nous avons vu [il y a quelque temps](lesson-03) que le plus souvent, il est préférable de s'appuyer sur la structure logique du document. Mais il arrive parfois que l'on veuille mettre le texte en gras, en italique, en interligne simple, etc. Il existe deux types de commandes pour cela : une pour les textes courts, et une pour le texte « courant ».

Pour les petits fragments de texte, nous utilisons les commandes `\textbf`, `\textit`, `\textrm`, `\textsf`, `\texttt` et `\textsc`.

```latex
\documentclass{article}
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{document}
Let's have some font fun: \textbf{bold}, \textit{italic}, \textrm{roman},
\textsf{sans serif}, \texttt{monospaced} and \textsc{small caps}.
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
Pour le texte courant, on utilise des commandes qui changent la police en cours ;
les commandes ici sont par exemple `\bfseries` et `\itshape`. Comme l'effet de
ces commandes n'a pas de fin prÃ©dÃ©finie, on doit les placer dans un _groupe_ si
on veut Ã©viter qu'elles ne s'appliquent pas Ã  l'ensemble du document. Les
environnements LaTeX sont des groupes, tout comme les cellules des tableaux, ou
bien on peut simplement utiliser les accolades `{...}` pour crÃ©er un groupe
explicite.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Un peu de texte normal.

{\itshape

Ã€ partir d'ici, le texte est en italique.

Vous voyez: l'effet n'est pas limitÃ© Ã  un paragraphe.
=======
For running text, we use commands that alter the font setup; the commands
here are for example `\bfseries` and `\itshape`. Because these don't 'stop',
we need to place them in a _group_ if we want to prevent them from applying to
the whole document. LaTeX environments are groups, as are table cells,
or we can use `{...}` to make an explicit group.
=======
Pour le texte courant, on utilise des commandes qui changent la police en cours ; les commandes ici sont par exemple `\bfseries` et `\itshape`. Comme l'effet de ces commandes n'a pas de fin prédéfinie, on doit les placer dans un _groupe_ si on veut éviter qu'elles ne s'appliquent pas à l'ensemble du document. Les environnements LaTeX sont des groupes, tout comme les cellules des tableaux, ou bien on peut simplement utiliser les accolades `{...}` pour créer un groupe explicite.

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Un peu de texte normal.

{\itshape

À partir d'ici, le texte est en italique.

<<<<<<< HEAD
So it this: the effect is not limited to a paragraph.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Vous voyez: l'effet n'est pas limité à un paragraphe.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

}
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
On peut rÃ©gler la taille des caractÃ¨res de la mÃªme maniÃ¨re, avec des commandes
qui s'appliquent Â« Ã  partir d'ici Â». Elles dÃ©finissent des tailles relatives par
rapport Ã  la taille de base : les plus courantes sont `\huge`, `\large`,
`\normalsize`, `\small` et `\footnotesize`. Il est important de terminer le
paragraphe _avant_ de modifier la taille de la police de caractÃ¨res Ã  nouveau ;
regardez comment nous ajoutons un `\par` explicite (coupure de paragraphe) ici :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Du texte normal.

\begin{center}
{\itshape\large Du texte mis en forme\par}
Normal Ã  nouveau
{\bfseries\small Enfin du texte plus petit\par}
=======
We can set font size in a similar way; these commands all work on an ongoing
basis. The sizes we set are relative: `\huge`, `\large`, `\normalsize`,
`\small` and `\footnotesize` are common. It's important to finish a paragraph
_before_ changing the font size back; see how we add an explicit `\par`
(paragraph break) here.
=======
On peut régler la taille des caractères de la même manière, avec des commandes qui s'appliquent « à partir d'ici ». Elles définissent des tailles relatives par rapport à la taille de base: les plus courantes sont `\huge`, `\large`, `\normalsize`, `\small` et `\footnotesize`. Il est important de terminer le paragraphe _avant_ de modifier la taille de la police de caractères à nouveau ; regardez comment nous ajoutons un `\par` explicite (coupure de paragraphe) ici:
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Du texte  normal.

\begin{center}
<<<<<<< HEAD
{\itshape\large Some text\par}
Normal text
{\bfseries\small Much smaller text\par}
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
{\itshape\large Du texte mis en forme\par}
Normal à nouveau
{\bfseries\small Enfin du texte plus petit\par}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{center}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD

## Travaux pratiques

ExpÃ©rimentez le formatage manuel : crÃ©ez un environnement `titlepage`, pour une
page de titre et essayez d'insÃ©rer diffÃ©rents espaces et de modifier la police.
Que se passe-t-il lorsque vous combinez des changements de police ? En quoi
est-ce diffÃ©rent du mode mathÃ©matique ?

Que se passe-t-il si vous changez la taille de la police d'un grand paragraphe
(essayez avec `\tiny` puis avec `\huge`) mais que vous n'Ã©mettez pas de `\par`
final avant de fermer le groupe ?
=======
## Exercises
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

## Travaux pratiques

Expérimentez le formatage manuel : créez un environnement `titlepage`, pour une page de titre et essayez d'insérer différents espaces et de modifier la police. Que se passe-t-il lorsque vous combinez des changements de police ? En quoi est-ce différent du mode mathématique ?

<<<<<<< HEAD
What happens if you change the font size of a large paragraph (try with
`\tiny` then with `\huge`) but don't issue a final `\par` before closing
the group?
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Que se passe-t-il si vous changez la taille de la police d'un grand paragraphe (essayez avec `\tiny` puis avec `\huge`) mais que vous n'émettez pas de `\par` final avant de fermer le groupe ?
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
