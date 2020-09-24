---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Étendre les possibilités de LaTeX avec des packages : pour aller plus loin"
=======
title: "Étendre les possibilités de LaTeX avec des packages et des définitions : pour aller plus loin"
>>>>>>> bafc011f... Translation of new parts into French.
---

## Charger plusieurs packages à la fois

La commande `\usepackage` prend une liste de packages séparés par des virgules,
ce qui permet d'en charger plusieurs en une seule fois :
`\usepackage{color,graphicx}` par exemple. Dans ce cas, si vous passez des
options à `\usepackage`, elles s'appliqueront à tous les package de la liste,
ce qui n'est pas forcément ce que vous voulez. De plus, il est sans doute plus
<<<<<<< HEAD
<<<<<<< HEAD
facile de commenter les packages s'ils sont chargés séparément. Nous nous en
tiendrons donc ici à charger chaque package sur une ligne séparée.


## Le package `babel`

Nous avons présenté le package `babel` [dans la leçon principale](lesson-06)
comme un moyen de choisir différents motifs de césure. Il fait beaucoup plus
que cela, selon la ou les langues utilisées. Par exemple, en allemand, il
fournit des raccourcis pour créer des traits d'union conditionnels, et aussi
un moyen de taper rapidement des _umlauts_ (trémas) sans avoir besoin d'un
<<<<<<< HEAD
clavier allemand.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Extending LaTeX using packages"
=======
title: "Étendre les possibilités de LaTeX avec des packages: pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
title: "Étendre les possibilités de LaTeX avec des packages: pour aller plus loin"
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
---

## Charger plusieurs packages à la fois

La commande `\usepackage` prend une liste de packages séparés par des virgules, ce qui permet d'en charger plusieurs en une seule fois : `\usepackage{color,graphicx}` par exemple. Dans ce cas, si vous passez des options à `\usepackage`, elles s'appliqueront à tous les package de la liste, ce qui n'est pas forcément ce que vous voulez. De plus, il est sans doute plus facile de commenter les packages s'ils sont chargés séparément.  Nous nous en tiendrons donc ici à charger chaque package sur une ligne séparée.


<<<<<<< HEAD
<<<<<<< HEAD
We showed the `babel` package [in the main lesson](lesson-06) as a way to choose
different hyphenation patterns. It does a lot more than that, depending on the
language(s) being used. For example, in German, it provides some shorthands for
creating 'soft' hyphens, and also a way to quickly type umlauts without needing
a German keyboard.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
## Le package `babel`

Nous avons présenté le paquet `babel` [dans la leçon principale](lesson-06) comme un moyen de choisir différents motifs de césure. Il fait beaucoup plus que cela, selon la ou les langues utilisées. Par exemple, en allemand, il fournit des raccourcis pour créer des traits d'union conditionnels, et aussi un moyen de taper rapidement des _umlauts_ (trémas) sans avoir besoin d'un clavier allemand.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
## Le package `babel`

Nous avons présenté le paquet `babel` [dans la leçon principale](lesson-06) comme un moyen de choisir différents motifs de césure. Il fait beaucoup plus que cela, selon la ou les langues utilisées. Par exemple, en allemand, il fournit des raccourcis pour créer des traits d'union conditionnels, et aussi un moyen de taper rapidement des _umlauts_ (trémas) sans avoir besoin d'un clavier allemand.
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[ngerman]{babel} % 'ngerman' est l'option pour Babel
=======
\usepackage[ngerman]{babel} % Notice that the option name is 'ngerman'
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[ngerman]{babel} % Notice that the option name is 'ngerman'
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
\usepackage[ngerman]{babel} % 'ngerman' est l'option pour Babel
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
\usepackage[ngerman]{babel} % 'ngerman' est l'option pour Babel
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

\begin{document}

H"ohe

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
D'autres paramètres linguistiques apportent des modifications à la mise en
forme : par exemple, dans la typographie française traditionnelle, il y a une
espace avant certains signes de ponctuation, comme `:`, et celle-ci est ajoutée
automatiquement si vous chargez `babel` avec l'option `french`.


## Options globales

Parfois, vous souhaitez qu'une option soit disponible pour tous les packages que
vous avez chargés. Pour ce faire, il suffit de le signaler sur la ligne
`\documentclass` : ainsi, chaque package peut « voir » cette liste. Donc, pour
passer la langue d'un document à tous les packages, on peut utiliser :

```latex
\documentclass[ngerman]{article} % 'ngerman' est l'option pour tous les packages
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
Other language settings make design changes: for example, in traditional
French typography, there is a space before some punctuation signs, like `:`,
and this is added automatically if you load `babel` with the option `french`.
=======
D'autres paramètres linguistiques apportent des modifications à la mise en forme : par exemple, dans la typographie française traditionnelle, il y a une espace avant certains signes de ponctuation, comme `:`, et celle-ci est ajoutée automatiquement si vous chargez `babel` avec l'option `french`.

>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
D'autres paramètres linguistiques apportent des modifications à la mise en forme : par exemple, dans la typographie française traditionnelle, il y a une espace avant certains signes de ponctuation, comme `:`, et celle-ci est ajoutée automatiquement si vous chargez `babel` avec l'option `french`.

>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

## Options globales

Parfois, vous souhaitez qu'une option soit disponible pour tous les packages que vous avez chargés. Pour ce faire, il suffit de le signaler sur la ligne `\documentclass` : ainsi, chaque package peut « voir » cette liste. Donc, pour passer la langue d'un document à tous les paquets, on peut utiliser :

```latex
<<<<<<< HEAD
<<<<<<< HEAD
\documentclass[ngerman]{article} % Notice that the option name is 'ngerman'
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
\documentclass[ngerman]{article} % 'ngerman' est l'option pour tous les packages
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
\documentclass[ngerman]{article} % 'ngerman' est l'option pour tous les packages
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

H"ohe

\end{document}
```
=======
title: "More on: Extending LaTeX using packages (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Étendre les possibilités de LaTeX avec des packages: pour aller plus loin"
=======
title: "Étendre les possibilités de LaTeX avec des packages : pour aller plus loin"
>>>>>>> faf19621... I've made spacing around : and ; consistent.
---

## Charger plusieurs packages à la fois

La commande `\usepackage` prend une liste de packages séparés par des virgules, ce qui permet d'en charger plusieurs en une seule fois : `\usepackage{color,graphicx}` par exemple. Dans ce cas, si vous passez des options à `\usepackage`, elles s'appliqueront à tous les package de la liste, ce qui n'est pas forcément ce que vous voulez. De plus, il est sans doute plus facile de commenter les packages s'ils sont chargés séparément.  Nous nous en tiendrons donc ici à charger chaque package sur une ligne séparée.
=======
facile de commenter les packages s'ils sont chargés séparément.  Nous nous en
=======
facile de commenter les packages s'ils sont chargés séparément. Nous nous en
>>>>>>> c0850bfd... Translated some more examples. Fixed typos.
tiendrons donc ici à charger chaque package sur une ligne séparée.
>>>>>>> 5fff9b4b... Line wrapping to 80 columns.


## Le package `babel`

Nous avons présenté le package `babel` [dans la leçon principale](lesson-06)
comme un moyen de choisir différents motifs de césure. Il fait beaucoup plus
que cela, selon la ou les langues utilisées. Par exemple, en allemand, il
fournit des raccourcis pour créer des traits d'union conditionnels, et aussi
un moyen de taper rapidement des _umlauts_ (trémas) sans avoir besoin d'un
clavier allemand.
=======
clavier allemand. Observez aussi que le titre de la table des matières,
généré par la commande `\tableofcontents`, est changé en sa version allemande
_Inhaltsverzeichnis_.

>>>>>>> bafc011f... Translation of new parts into French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % 'ngerman' est l'option pour Babel

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.


\end{document}
```

D'autres paramètres linguistiques apportent des modifications à la mise en
forme : par exemple, dans la typographie française traditionnelle, il y a une
espace avant certains signes de ponctuation, comme `:`, et celle-ci est ajoutée
automatiquement si vous chargez `babel` avec l'option `french`.


## Options globales

Parfois, vous souhaitez qu'une option soit disponible pour tous les packages que
vous avez chargés. Pour ce faire, il suffit de le signaler sur la ligne
`\documentclass` : ainsi, chaque package peut « voir » cette liste. Donc, pour
passer la langue d'un document à tous les packages, on peut utiliser :

```latex
\documentclass[ngerman]{article} % 'ngerman' est l'option pour tous les packages
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```
<<<<<<< HEAD
>>>>>>> f133d525... Add more-01 to more-08 after reencoding in UTF-8.
=======

## Davantage de définitions

`\newcommand` permet de définir des commandes ayant un maximum de neuf arguments,
le premier pouvant être optionnel.

En reprenant l'exemple de la leçon principale, on pourrait rendre la couleur
optionnelle, en utilisant du bleu par défaut:

```
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

Tout sur les \kw{pommes} et les \kw[red]{oranges}.

\end{document}
```

Les arguments optionnels sont délimités par `[]` et s'ils sont omis, la valeur
par défaut spécifiée dans la définition est utilisée.


## `\NewDocumentCommand`

À partir de la version de LaTeX d'octobre 2020, un nouveau système de définition
de commandes est intégré. Dans les versions précédentes, ce système était
disponible via le package `xparse`, que nous utilisons ici pour la compatibilité.

Voici l'exemple ci-dessus, réécrit en utilisant `\NewDocumentCommand` :

```
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xparse} % Only needed for older LaTeX releases
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

Tout sur les \kw{pommes} et les \kw[red]{oranges}.

\end{document}
```

Tout comme `\newcommand`, `\NewDocumentCommand` prend le nom de la commande à
définir (ici `\kw`) puis la définition à proprement parler, en utilisant `#1` à
`#9` pour les arguments, mais la différence réside dans la façon dont les
arguments sont spécifiés.

Contrairement à `\newcommand` où seul le nombre d'arguments était précisé, en
fournissant éventuellement une valeur par défaut pour le premier, avec
`\NewDocumentCommand`, chaque argument est spécifié par une lettre. Ainsi, une
commande à deux arguments serait décrite par `{mm}` plutôt que par `[2]`. Cela
peut paraître plus verbeux mais permet de définir beaucoup plus de types de
commandes. Dans l'exemple ci-dessus, le premier argument est optionnel, par
défaut bleu (`O{blue}`), et le second argument est obligatoire (`m`, comme
_mandatory_).
>>>>>>> bafc011f... Translation of new parts into French.
