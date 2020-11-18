---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Structure logique de votre document"
---

LaTeX vous permet de vous concentrer sur la structure logique de votre document,
et vous laisse en même temps la possibilité de choisir son apparence. La plupart
du temps, il est préférable maintenir une certaine séparation du fond (le
contenu) et de la forme (l'apparence), en privilégiant un balisage qui décrit la
structure de votre document, car cela permet de réutiliser ou de modifier
facilement l'apparence lorsque vous souhaitez le faire.


## Premier exemple

Nous allons commencer par un exemple qui compare deux façons de mettre du texte
en évidence : l'une par le balisage logique, avec `\emph`, l'autre par la simple
mise en italique, puisqu'en édition, c'est généralement par l'italique que le
texte est mis en évidence.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Voici un peu de texte \emph{mis en évidence et \emph{imbriqué} dans le reste}.

Voici un peu de texte \textit{mis en italique et \textit{imbriqué} dans le reste}.
\end{document}
```

Vous avez deviné que `\textit` est une commande pour mettre le texte en italique,
mais elle met _toujours_ son contenu en italique, donc elle ne fonctionne pas
pour des textes imbriqués. Voyez comment `\emph` gère l'imbrication. Il y a
aussi des cas où on veut autre chose que de l'italique pour mettre du texte en
évidence ; par exemple, dans les présentations, la couleur ou le gras sont de
meilleurs choix. Avec le balisage logique, nous n'avons pas à nous soucier de ce
détail dans le corps du document, ce sera géré automatiquement, ou bien nous
pourrons décider de ça plus tard, en modifiant un seul paramètre.

Nous parlerons [du formatage manuel plus tard](lesson 11), mais pour l'instant
nous ajoutons `\textbf` aux commandes que nous connaissons : il met le texte
en gras.


## Commandes de sectionnement

Vous avez probablement déjà utilisé un traitement de texte. Avec ce genre de
logiciel, pour commencer une section, la plupart des gens entrent le texte du
titre, puis le rendent simplement plus grand et plus gras, et le font suivre d'une nouvelle
ligne. En LaTeX, l'utilisation du balisage logique est beaucoup plus facile que
ce formatage manuel : il suffit d'utiliser la commande `\section`. Celle-ci gère
les changements de police, les espaces verticaux, etc., et permet de garder une
sortie uniforme dans tout le document. Elle permet également de produire
automatiquement une table des matières.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Bonjour tout le monde!

C'est mon premier document LaTeX.

\section{Titre de la première section}

Texte de la première section.

Second paragraphe
(les retraits de paragraphes ont pour l'instant une apparence étrange,
mais on verra plus tard comment respecter les règles de typographie françaises).

\subsection{Sous-section de la première section}

Texte de la sous-section.

\section{Seconde section}

Texte de la seconde section.
=======
title: "Logical structure"
=======
title: "Structure logique de votre document"
>>>>>>> 7469f067... Translation of lessons 03 and 04 to French.
---

LaTeX vous permet de se concentrer sur la structure logique de votre document, et vous laisse en même temps la possibilité de choisir son apparence. La plupart du temps, il est préférable maintenir une certaine séparation du fond (le contenu) et de la forme (l'apparence), en privilégiant un balisage qui décrit la structure de votre document, car cela permet de réutiliser ou de modifier facilement l'apparence lorsque vous souhaitez le faire.


## Premier exemple

We'll start with an example contrasting one of the most common logical markup
commands in LaTeX, `\emph`, with simply making something italic. (In print,
that's usually how things are emphasised.)

Nous allons commencer par un exemple qui compare deux façons de mettre du texte en évidence:
l'une par le balisage logique, avec `\emph`, l'autre par la simple mise en italique, puisqu'en édition,
c'est généralement par l'italique que le texte est mis en évidence.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Voici un peu de texte \emph{mis en évidence et \emph{imbriqué} dans le reste}.

Voici un peu de texte \textit{mis en italique et \textit{imbriqué} dans le reste}.
\end{document}
```

Vous avez deviné que `\textit` est une commande pour mettre le texte en italique, mais elle  met _toujours_ son contenu en italique, donc elle ne fonctionne pas pour des textes imbriqués. Voyez comment `\emph` gère l'imbrication. Il y a aussi des cas où on veut autre chose que de l'italique pour mettre du texte en évidence ; par exemple, dans les présentations, la couleur ou le gras sont de meilleurs choix. Avec le balisage logique, nous n'avons pas à nous soucier de ce détail dans le corps du document, ce sera géné automatiquement, ou bien nous pourrons décider de ça plus tard, en modifiant un seul paramètre.

Nous parlerons [du formatage manuel plus tard](lesson 11), mais pour l'instant nous ajoutons `\textbf` aux commandes que nous connaissons : il met le texte en gras.


## Commandes de sectionnement

Vous avez probablement déjà utilisé un traitement de texte. Avec ces logiciels, pour commencer une section, la plupart des gens entrent le texte du titre, puis le rendent simplement plus grand et plus gras, et le font suivre d'une nouvelle ligne. En LaTeX, l'utilisation du balisage logique est beaucoup plus facile que ce formatage manuel: il suffit d'utiliser la commande `\section`. Celle-ci gère les changements de police, les espaces verticaux, etc., et permet de garder une sortie uniforme dans tout le document. Elle permet également de produire automatiquement une table des matières.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Hey world!

This is a first document.

\section{Title of the first section}

Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.

\section{Second section}

Text of the second section.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
En utilisant la configuration par défaut d'un `article`, LaTeX numérote les
sections et les sous-sections et inclut les titres en gras. Nous réfléchirons
à changer l'apparence de notre document [dans la prochaine leçon](lesson-05).

LaTeX peut diviser les documents en plusieurs niveaux

- `\chapter` (si on utilise `\documentclass{book}` or `\documentclass{report}`),
- `\section`,
- `\subsection`,
- `\subsubsection`.

On peut aller plus loin : la subdivision suivante est le `\paragraph`, mais si
vous en arrivez là, c'est peut-être que votre plan est trop détaillé, à vous de
voir. (Oui, `\paragraph` est une commande de sectionnement, _pas_ une façon de
commencer un nouveau paragraphe.)

Comment définir le titre d'un document par le balisage logique? Il existe des
commandes spéciales pour ça, mais tous les documents ne les utilisent pas,
c'est pourquoi nous en parlons dans [la leçon d'approfondissement](more-04).


## Les listes

Vous aurez aussi souvent besoin d'un balisage logique pour dresser des listes.
Il existe deux types de listes courantes intégrées à LaTeX.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Les listes ordonnées, numérotées:
\begin{enumerate}
  \item Une entrée,
  \item Une autre entrée,
  \item Et de trois!
\end{enumerate}

Les listes non ordonnées:
\begin{itemize}
  \item Une entrée,
  \item Une autre entrée,
  \item Et de trois!
=======
Using the standard `article` setup, LaTeX numbers the sections and subsections
and includes the titles in boldface. We'll think a bit about changing design [in
the next lesson](lesson-05).
=======
En utilisant la configuration par défaut d'un `article`, LaTeX numérote les sections et les sous-sections et inclut les titres en gras. Nous réfléchirons à changer l'apparence de notre document [dans la prochaine leçon](lesson-05).
>>>>>>> 7469f067... Translation of lessons 03 and 04 to French.

LaTeX peut diviser les documents en plusieurs niveaux

- `\chapter` (si on utilise `\documentclass{book}` or `\documentclass{report}`),
- `\section`,
- `\subsection`,
- `\subsubsection`.

On peut aller plus loin : la subdivision suivante est le `\paragraph`, mais si vous en arrivez là, c'est peut-être que votre plan est trop détaillé, à vous de voir. (Oui, `\paragraph` est une commande de sectionnement, _pas_ une façon de commencer un nouveau paragraphe.)

Vous vous demandez peut-être si on peut définir le titre d'un document par un balisage logique? En effet, il existe des commandes spéciales pour ça, mais tous les documents ne les utilisent pas, c'est pourquoi nous en parlons [dans la leçon d'approfondissement](more-04).

## Les listes

Vous aurez aussi souvent besoin d'un balisage logique pour dresser des listes. Il existe deux types de listes courantes intégrées à LaTeX.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Les listes ordonnées, numérotées:
\begin{enumerate}
  \item Une entrée,
  \item Une autre entrée,
  \item Et de trois!
\end{enumerate}

Les listes non ordonnées:
\begin{itemize}
<<<<<<< HEAD
  \item An entry
  \item Another One
  \item Wow! Three entries
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
  \item Une entrée,
  \item Une autre entrée,
  \item Et de trois!
>>>>>>> 7469f067... Translation of lessons 03 and 04 to French.
\end{itemize}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
On utilise `\item` pour commencer chaque entrée, et le numéro ou la puce est
ajouté automatiquement devant chacune.


## Travaux pratiques

Expérimentez avec différents niveaux de sectionnement. Essayez d'utiliser
`\documentclass{report}` au lieu de `\documentclass{article}` et ajoutez des
chapitres avec la commande `\chapter`. De quoi ont-ils l'air ? Essayez les
commandes `\paragraph` et même `\subparagraph` pour voir si elles fonctionnent :
par défaut, elles n'ajoutent ni numérotation, ni saut de ligne.

Faites des listes, et emboîtez les unes dans les autres. Comment le format des
chiffres ou des marqueurs change-t-il ? On ne peut utiliser que quatre niveaux
d'imbrication avec le LaTeX standard, mais si vous devez aller plus loin, c'est
soit que vous avez un besoin particulier et que les listes ne sont pas le bon
outil, soit que vous devriez repenser la structure de vos listes.
=======
Notice that we use `\item` to start each entry, and that the marker used  for
each type of list is added automatically.
=======
On utilise `\item` pour commencer chaque entrée, et le numéro ou la puce est ajouté automatiquement devant chacune.
>>>>>>> 7469f067... Translation of lessons 03 and 04 to French.


## Travaux pratiques

Expérimentez avec différents niveaux de sectionnement. Essayez d'utiliser `\documentclass{report}` au lieu de `\documentclass{article}` et ajoutez des chapitres avec la commande `\chapter`. De quoi ont-ils l'air ? Essayez les commandes `\paragraph` et même `\subparagraph` pour voir si elles fonctionnent : par défaut, elles n'ajoutent ni numérotation, ni saut de ligne.

Make some lists, and nest one list inside another. How does the format of the
numbers or markers change? You can only go to four levels with standard LaTeX,
but more than four nested lists tends to be a bad sign anyway!
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======

Faites des listes, et emboîtez les unes dans les autres. Comment le format des chiffres ou des marqueurs change-t-il ? Vous ne pouvez utiliser que quatre niveaux d'imbrication avec le LaTeX standard, mais si vous devez aller plus loin, c'est soit que vous avez un besoin particulier et que les listes ne sont pas le bon outil, soit que vous devriez repenser la structure de ces listest.
>>>>>>> 7469f067... Translation of lessons 03 and 04 to French.
=======
title: "Logical structure (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
