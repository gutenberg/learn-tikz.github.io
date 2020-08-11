---
<<<<<<< HEAD
title: "Structure logique de votre document : pour aller plus loin"
---

## Titre du document

LaTeX offre un balisage logique pour le titre des documents : trois commandes
pour définir les « méta-données » et une pour les utiliser.
=======
title: "More on: Logical structure"
---

## Document titles

LaTeX offers some logical markup for the title of documents: three commands
to set up 'meta-data' and one to use it.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
<<<<<<< HEAD

\begin{document}

\author{U.~N.~Tel \and M.~Illevache}
\title{Ma vie}
\date{1er avril 2020}

\maketitle

Du texte banal.
\end{document}
```

Comme vous pouvez le voir, les commandes `\author`, `\title` et `\date`
enregistrent les informations, et `\maketitle` les utilise. Vous pouvez
également séparer plusieurs auteurs avec `\and`. Les commandes `\author`,
`\title` et `\date` doivent évidemment précéder `\maketitle`. Ici, nous les
avons mises dans le corps du document ; elles peuvent aussi être utilisées
dans le préambule, mais si vous utilisez les raccourcis `babel`, elles ne seront
pas actives à cet endroit.

L'apparence de la sortie de `\maketitle` dépend de la classe du document
([voir la leçon 5](lesson-05)). Il existe un environnement `titlepage` pour
une mise en page personnalisée, mais ça dépasse la cadre de cette introduction.
Si vous voulez faire vos propres maquettes de documents, vous pouvez soit
utiliser une classe personnalisable, comme `memoir`, soit partir d'une des
classes de base de LaTeX, comme `book`, et l'adapter à vos besoins.


## Listes descriptives

Outre les types de listes « ordonnées » et « non ordonnées », LaTeX en fournit
une autre, moins courante : les « listes descriptives ».
=======
\begin{document}
\author{A.~N.~Other \and D.~Nobacon}
\title{Some things I did}
\date{1st April 2020}
\maketitle

Some normal text.
\end{document}
```

As you can see, the commands `\author`, `\title` and `\date` save information,
and `\maketitle` uses it. You can also separate multiple authors with `\and`.
The commands `\author`, `\title` and `\date` need to come before `\maketitle`.
Here, we've given them in the document body: they can also be used in the
preamble, but if you use `babel` shortcuts they won't be active there.

The design provided by `\maketitle` depends on the document class (see [lesson
5](lesson-05)). There is a `titlepage` environment for when you want to do
custom design, but this is out of the scope of this introduction.  If you want
to do your own document designs you can either use a customisable class, such
as `memoir`, or start with one of LaTeX's base classes, like `book` and use it
as a starting point.

## Descriptive lists
In addition to the "ordered" and "unordered" types of lists, LaTeX provides
another one, less common: the "descriptive lists".
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
<<<<<<< HEAD

\begin{document}

\begin{description}
\item[Chien:] Le chien est un membre du genre Canis, qui fait partie des canidés
  proches du loup, et est le carnivore terrestre le plus répandu.
\item[Chat:] Le chat est une espèce domestique de petit mammifère carnivore.
  C'est la seule espèce domestiquée de la famille des Félins et on l'appelle
  souvent le chat domestique pour le distinguer des autres membres de la
  famille, tous sauvages.
=======
\begin{document}

\begin{description}
\item[Dog:] member of the genus Canis, which forms part of the wolf-like canids,
  and is the most widely abundant terrestrial carnivore.
\item[Cat:] domestic species of small carnivorous mammal. It is the only
  domesticated species in the family Felidae and is often referred to as the
  domestic cat to distinguish it from the wild members of the family.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{description}

\end{document}
```

<<<<<<< HEAD

## Travaux pratiques

Essayez de changer les informations passées à `\author`, `\title` and `\date` et
observez la sortie de `\maketitle`. Quels champs sont obligatoires? Toutes ces
commandes doivent-elles comporter un auteur, un titre ou une date dans leur
argument ?

Dressez des listes descriptives, et imbriquez certaines d'entre elles dans
d'autres (ordonnées, non ordonnées ou descriptives).
=======
## Exercises

Try setting up different `\author`, `\title` and `\date` information to test
out `\maketitle`. Which of them do you _have_ to give? Do the commands have to
have an author, a title and a date in them?

Make some descriptive lists, and nest some of them inside another ones (ordered,
unordered or descriptive).
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
