---
<<<<<<< HEAD
title: "Utiliser les classes de documents pour changer l'apparence"
---

## Qu'est-ce qu'une classe de document?

Vous avez peut-être remarqué que tous les documents LaTeX que nous avons écrits
jusqu'à présent ont commencé par une ligne `\documentclass`, et que
`\documentclass{article}` a été le choix le plus courant (nous avons eu besoin
de `\documentclass{report}` dans [la leçon précédente](lesson-04) pour tester la
commande `\chapter`). Cette ligne est requise dans tous les documents LaTeX, et
est presque toujours la première commande à avoir.

La « classe de document » définit la présentation générale du document, notamment :
- l'apparence : marges, polices de caractères, espacements, etc.
- s'il y a des chapitres ou non,
- si le titre doit figurer sur une page séparée&hellip;

De façon plus général, les classes de documents peuvent également ajouter de
nouvelles commandes ; c'est particulièrement vrai pour les classes très
spécialisées comme celles destinées la création de diaporamas ou de lettres.

La ligne définissant classe de document peut également configurer des
_options globales_ : des paramètres qui s'appliquent au document dans son
ensemble. Ces options sont indiquées entre crochets :
`\documentclass[<options>]{<nom>}`. Cette syntaxe, avec les informations
optionnelles données en premier entre crochets, est utilisée dans de nombreuses
commandes LaTeX.


## Les classes de base

LaTeX est fourni avec un ensemble de classes standards, qui se ressemblent
beaucoup mais avec quelques variations :

- `article` : documents courts sans chapitres,
- `report` (rapport) : documents plus longs avec des chapitres, impression en recto seul,
- `book` (livre) : documents plus longs avec des chapitres, impression en recto-verso,
  avec des annexes au début et à la fin (par exemple un index),
- `letter` (lettre) : correspondance sans section,
- `slides` (diapositives) : pour les diaporamas (mais voir ci-dessous).

Les classes `article`, `report` et `book` proposent des commandes très similaires,
comme nous l'avons déjà vu. Pour l'écriture d'un document de classe `letter`,
les commandes disponibles sont un peu différentes :

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}

=======
title: "Using document classes to influence design"
---

## What a document class does

You might have noticed that all of the LaTeX documents we have created
so far have started with a `\documentclass` line, and that
`\documentclass{article}` has been the far most common choice. (We needed
`\documentclass{report}` in [the previous lesson](lesson-04) to try out the
`\chapter` command.) This line is required in all LaTeX documents, and is
(almost) always the first command you should have.

The document class sets up the general layout of the document, for example

- design: margins, fonts, spacing, etc.
- whether chapters are available
- if the title should be on a separate page

Document classes can also add new commands more generally; that's particularly
true for specialist cases like creating presentation slides.

The document class line can also set _global options_: things that apply to
the document as a whole. These are given in square brackets:
`\documentclass[<options>]{<name>}`. This syntax, with optional information
given first in square brackets, is used in many LaTeX commands.

## The base classes

LaTeX is supplied with a set of standard classes, all of which look similar
but with some variations:

- `article`: short documents without chapters
- `report`: longer documents with chapters, single-sided printing
- `book`: longer documents with chapters, double-sided printing, with
  front- and back-matter (for example an index)
- `letter`: correspondence with no sections
- `slides`: for presentations (but see below)

The `article`, `report` and `book` classes have very similar commands available,
as we've already seen. When writing a `letter`, the commands available are
a bit different

```latex
\documentclass{letter}
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\begin{document}

\begin{letter}{Some Address\\Some Street\\Some City}

\opening{Dear Sir or Madam,}

The text goes Here

\closing{Yours,}

\end{letter}

\end{document}
```

<<<<<<< HEAD
Regardez comment ``\\`` est utilisé pour séparer les lignes de l'adresse ; nous
verrons plus tard [comment se fait la séparation des lignes](lesson 11).
La classe `lettre` demande qu'on crée un nouvel environnement `letter` pour
chaque lettre et propose des commandes spécialisées.

Les classes standards `article`, `report` et `book` acceptent les options
`10pt`, `11pt` et `12pt` pour changer la taille de la police, et `twocolumn`
pour composer un document sur deux colonnes.


## Classes plus riches

Les classes de base sont très stables, mais cela implique qu'elles sont assez
conservatrices tant dans leur conception que dans la gamme des commandes
disponibles. Au fil du temps, un certain nombre de classes plus puissantes ont
été écrites, qui permettent de modifier l'apparence des documents sans devoir
faire les choses manuellement (ce que nous verrons
[un peu plus tard](lesson-11)).

L'_American Mathematical Society_ (AMS) fournit des variantes des classes
standards (`amsart`, `amsbook`) avec une conception plus traditionnelle, plus
proche de celle utilisée dans les publications des journaux de mathématiques.

Les deux classes « étendues » les plus polyvalentes et populaires sont le
package KOMA-Script et la classe `memoir`. KOMA-Script offre un ensemble de
classes parallèles aux classes standards : `scrartcl`, `scrreprt` et `scrbook`,
tandis que la classe `memoir`, unique, ressemble davantage à une extension de
la classe `book`.

Ces classes étendues ont de nombreuses possibilités de personnalisation, que
nous allons explorer un peu en travaux pratiques. Vous vous demandez peut-être
comment connaître toutes ces possibilités ; nous en parlerons
[dans une leçon ultérieure](lesson-15), mais vous pouvez toujours prendre de
l'avance !


## Diaporamas

La classe `slides` a été développée pour la réalisation de vraies diapositives
24&times;36 du milieu des années 80, elle ne dispose donc pas de fonctionnalités
pour la création de présentations interactives au format PDF. Il existe des
classes modernes qui font exactement cela : elles sont quelque peu spécialisées
par rapport aux documents LaTeX courants, c'est pourquoi nous les avons
couvertes [en approfondissement](more-05).


## Travaux pratiques

Faites des essais et découvrez comment le changement de classe entre celles
standards, celles du package KOMA-Script et `memoir` affecte l'apparence du
document.

```latex
\documentclass{article} % Changez la classe ici
\usepackage[T1]{fontenc}
=======
See how ``\\`` is used to separate lines of the address; we'll look at line
breaking [a bit later](lesson-11). Also see how the `letter` class creates  a
new environment for each letter and has specialised commands.

The standard `article`, `report` and `book` classes take the options `10pt`,
`11pt` and `12pt` to change font size, and `twocolumn` to make a two-column
document.

## Function-rich classes

The core classes are very stable, but that means they are also quite
conservative in both design and the range of commands available. Over time, a
number of more powerful classes have been written, that let you alter the design
without having to do things manually (which we'll mention [a bit
later](lesson-11)).

The American Mathematical Society provide variants of the standard
classes (`amsart`, `amsbook`) with a more traditional design closer to
that used in mathematics journal publications.

The two largest and most popular 'extended' classes are the KOMA-Script bundle
and the memoir class. KOMA-Script offers a set of classes which 'parallel' the
standard ones: `scrartcl`, `scrreprt` and `scrbook`, while there is a single
`memoir` class that is most like an extension of `book`.

These extended classes have lots of customisation hooks, which we'll explore a
bit in an exercise. You might wonder how we can know about the hooks they
provide; we will cover that [in a later lesson](lesson-15), but you can always
jump ahead!

## Presentations

The `slides` class was developed for making physical slides in the mid-1980s, so
doesn't have any features for creating interactive PDF-based presentations.
There are modern classes that do exactly that: they are somewhat specialist
compared to general LaTeX documents, so we've [covered them in the additional
information](more-05).

## Exercises

Explore how changing the document class between the standard ones, the KOMA
bundle and `memoir` affects the appearance of the document.

```latex
\documentclass{article} % Change the class here
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

\begin{document}

\section{Introduction}

<<<<<<< HEAD
Ceci est un exemple de document avec un texte sans
intérêt\footnote{et une note de bas de page}. Ce paragraphe
est assez long car nous aimerions voir comment rend
ce document quand il est composé sur deux colonnes.
=======
This is a sample document with some dummy
text\footnote{and a footnote}. This paragraph is quite
long as we might want to see the effect of making the
document have two columns.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

\end{document}
```

<<<<<<< HEAD
Ajoutez l'option de classe `twocolumn` et regardez comment elle change la mise
en page.

Changez la commande `\section` ci-dessus en `\chapitre` et observez l'effet des
options de classe suivantes sur l'utilisation de la classe `scrreprt` :

- `chapterprefix`,
- `headings=small`,
- `headings=big`,
- `numbers=enddot`.
=======
Add the class option `twocolumn` and see how the layout changes.

Change the `\section` above for `\chapter` and find out what effect the
following class options have when using the `scrreprt` class.

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
