---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Étendre les possibilités de LaTeX avec des packages : pour aller plus loin"
---

## Charger plusieurs packages à la fois

La commande `\usepackage` prend une liste de packages séparés par des virgules,
ce qui permet d'en charger plusieurs en une seule fois :
`\usepackage{color,graphicx}` par exemple. Dans ce cas, si vous passez des
options à `\usepackage`, elles s'appliqueront à tous les package de la liste,
ce qui n'est pas forcément ce que vous voulez. De plus, il est sans doute plus
<<<<<<< HEAD
facile de commenter les packages s'ils sont chargés séparément. Nous nous en
tiendrons donc ici à charger chaque package sur une ligne séparée.


## Le package `babel`

Nous avons présenté le package `babel` [dans la leçon principale](lesson-06)
comme un moyen de choisir différents motifs de césure. Il fait beaucoup plus
que cela, selon la ou les langues utilisées. Par exemple, en allemand, il
fournit des raccourcis pour créer des traits d'union conditionnels, et aussi
un moyen de taper rapidement des _umlauts_ (trémas) sans avoir besoin d'un
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
tiendrons donc ici à charger chaque package sur une ligne séparée.
>>>>>>> 5fff9b4b... Line wrapping to 80 columns.


## Le package `babel`

Nous avons présenté le package `babel` [dans la leçon principale](lesson-06)
comme un moyen de choisir différents motifs de césure. Il fait beaucoup plus
que cela, selon la ou les langues utilisées. Par exemple, en allemand, il
fournit des raccourcis pour créer des traits d'union conditionnels, et aussi
un moyen de taper rapidement des _umlauts_ (trémas) sans avoir besoin d'un
clavier allemand.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % 'ngerman' est l'option pour Babel

\begin{document}

H"ohe

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

H"ohe

\end{document}
```
>>>>>>> f133d525... Add more-01 to more-08 after reencoding in UTF-8.
