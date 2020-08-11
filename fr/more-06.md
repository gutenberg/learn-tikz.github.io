---
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
---

## Loading multiple packages

The `\usepackage` command takes a comma-separated list of packages, so you can
load several in one go: `\usepackage{color,graphicx}` for example. If you are
passing options to a package, they will apply to each of the packages in the list.
It's also easier to comment out packages if they are loaded
separately.  So we will stick to loading each package on a separate line.

## The `babel` package

We showed the `babel` package [in the main lesson](lesson-06) as a way to choose
different hyphenation patterns. It does a lot more than that, depending on the
language(s) being used. For example, in German, it provides some shorthands for
creating 'soft' hyphens, and also a way to quickly type umlauts without needing
a German keyboard.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[ngerman]{babel} % 'ngerman' est l'option pour Babel
=======
\usepackage[ngerman]{babel} % Notice that the option name is 'ngerman'
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[ngerman]{babel} % Notice that the option name is 'ngerman'
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

\begin{document}

H"ohe

\end{document}
```

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

## Global options

Sometimes, you want an option to be available to all of the packages you've
loaded. That is done by giving it on the `\documentclass` line: every package
can 'see' this list. So to pass the language of a document to all packages,
we might use:

```latex
\documentclass[ngerman]{article} % Notice that the option name is 'ngerman'
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

H"ohe

\end{document}
```
