---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Structure logique de votre document : pour aller plus loin"
---

## Titre du document

LaTeX offre un balisage logique pour le titre des documents : trois commandes
pour définir les « méta-données » et une pour les utiliser.
<<<<<<< HEAD
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Logical structure"
=======
title: "Structure logique de votre document: pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
title: "Structure logique de votre document: pour aller plus loin"
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
---

## Titre du document

<<<<<<< HEAD
<<<<<<< HEAD
LaTeX offers some logical markup for the title of documents: three commands
to set up 'meta-data' and one to use it.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
LaTeX offre un balisage logique pour le titre des documents : trois commandes pour définir les « méta-données » et une pour les utiliser.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
LaTeX offre un balisage logique pour le titre des documents : trois commandes pour définir les « méta-données » et une pour les utiliser.
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
<<<<<<< HEAD
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
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{document}
\author{U.~N.~Tel \and M.~Illevache}
\title{Ma vie}
\date{1st April 2020}
\maketitle

Du texte banal.
\end{document}
```

Comme vous pouvez le voir, les commandes `\author`, `\title` et `\date` enregistrent les informations, et `\maketitle` les utilise. Vous pouvez également séparer plusieurs auteurs avec `\and`. Les commandes `\author`, `\title` et `\date` doivent évidemment précéder `\maketitle`. Ici, nous les avons mises dans le corps du document ; elles peuvent aussi être utilisées dans le préambule, mais si vous utilisez les raccourcis `babel`, elles ne seront pas actives à cet endroit.

L'apparence de la sortie de `\maketitle` dépend de la classe du document ([voir la leçon 5](lesson-05)). Il existe un environnement `titlepage` pour une mise en page personnalisée, mais ça dépasse la cadre de cette introduction.  Si vous voulez faire vos propres maquettes de documents, vous pouvez soit utiliser une classe personnalisable, comme `memoir`, soit partir d'une des classes de base de LaTeX, comme `book`, et l'adapter à vos besoins.

<<<<<<< HEAD
<<<<<<< HEAD
## Descriptive lists
In addition to the "ordered" and "unordered" types of lists, LaTeX provides
another one, less common: the "descriptive lists".
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
=======
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

## Listes descriptives

Outre les types de listes « ordonnées » et « non ordonnées », LaTeX en fournit une autre, moins courante : les « listes descriptives ».
<<<<<<< HEAD
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
<<<<<<< HEAD
<<<<<<< HEAD

\begin{document}

\begin{description}
\item[Chien:] Le chien est un membre du genre Canis, qui fait partie des canidés
  proches du loup, et est le carnivore terrestre le plus répandu.
\item[Chat:] Le chat est une espèce domestique de petit mammifère carnivore.
  C'est la seule espèce domestiquée de la famille des Félins et on l'appelle
  souvent le chat domestique pour le distinguer des autres membres de la
  famille, tous sauvages.
<<<<<<< HEAD
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{document}

\begin{description}
<<<<<<< HEAD
\item[Dog:] member of the genus Canis, which forms part of the wolf-like canids,
  and is the most widely abundant terrestrial carnivore.
\item[Cat:] domestic species of small carnivorous mammal. It is the only
  domesticated species in the family Felidae and is often referred to as the
  domestic cat to distinguish it from the wild members of the family.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
\item[Chien:] Le chien est un membre du genre Canis, qui fait partie des canidés
  proches du loup, et est le carnivore terrestre le plus répandu.
\item[Chat:] Le chat est une espèce domestique de petit mammifère carnivore.
  C'est la seule espèce domestiquée de la famille des Félins et on l'appelle
  souvent le chat domestique pour le distinguer des autres membres de la
  famille, tous sauvages.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
\end{description}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

## Travaux pratiques

Essayez de changer les informations passées à `\author`, `\title` and `\date` et
observez la sortie de `\maketitle`. Quels champs sont obligatoires? Toutes ces
commandes doivent-elles comporter un auteur, un titre ou une date dans leur
argument ?

Dressez des listes descriptives, et imbriquez certaines d'entre elles dans
d'autres (ordonnées, non ordonnées ou descriptives).
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Exercises
=======
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

## Travaux pratiques

Essayez de changer les informations passées à`\author`, `\title` and `\date` et observez la sortie de `\maketitle`. Quels champs sont obligatoires? Toutes ces commandes doivent-elles comporter un auteur, un titre et une date dans leur argument ?

<<<<<<< HEAD
Make some descriptive lists, and nest some of them inside another ones (ordered,
unordered or descriptive).
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Dressez des listes descriptives, et imbriquez certaines d'entre elles dans d'autres (ordonnées, non ordonnées ou descriptives).
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======

## Travaux pratiques

Essayez de changer les informations passées à`\author`, `\title` and `\date` et observez la sortie de `\maketitle`. Quels champs sont obligatoires? Toutes ces commandes doivent-elles comporter un auteur, un titre et une date dans leur argument ?

Dressez des listes descriptives, et imbriquez certaines d'entre elles dans d'autres (ordonnées, non ordonnées ou descriptives).
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
=======
title: "More on: Logical structure (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Structure logique de votre document: pour aller plus loin"
=======
title: "Structure logique de votre document : pour aller plus loin"
>>>>>>> faf19621... I've made spacing around : and ; consistent.
---

## Titre du document

LaTeX offre un balisage logique pour le titre des documents : trois commandes pour définir les « méta-données » et une pour les utiliser.
=======
>>>>>>> 5fff9b4b... Line wrapping to 80 columns.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

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

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

\begin{description}
\item[Chien:] Le chien est un membre du genre Canis, qui fait partie des canidés
  proches du loup, et est le carnivore terrestre le plus répandu.
\item[Chat:] Le chat est une espèce domestique de petit mammifère carnivore.
  C'est la seule espèce domestiquée de la famille des Félins et on l'appelle
  souvent le chat domestique pour le distinguer des autres membres de la
  famille, tous sauvages.
\end{description}

\end{document}
```


## Travaux pratiques

Essayez de changer les informations passées à `\author`, `\title` and `\date` et
observez la sortie de `\maketitle`. Quels champs sont obligatoires? Toutes ces
commandes doivent-elles comporter un auteur, un titre ou une date dans leur
argument ?

<<<<<<< HEAD
Dressez des listes descriptives, et imbriquez certaines d'entre elles dans d'autres (ordonnées, non ordonnées ou descriptives).
>>>>>>> f133d525... Add more-01 to more-08 after reencoding in UTF-8.
=======
Dressez des listes descriptives, et imbriquez certaines d'entre elles dans
d'autres (ordonnées, non ordonnées ou descriptives).
>>>>>>> 5fff9b4b... Line wrapping to 80 columns.
