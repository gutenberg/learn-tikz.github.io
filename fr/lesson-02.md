---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Travailler avec LaTeX"
---

Contrairement à de nombreux programmes informatiques, LaTeX n'est pas une
application unique. Au contraire, il est composé de plusieurs programmes
distincts qui fonctionnent ensemble. Il y a deux catégories indispensables :

- Un _système TeX_,
- Un éditeur de texte (plutôt un qui soit adapté à LaTeX).


## Les systèmes {{ site.tex }}

L'essentiel pour travailler avec LaTeX est de disposer d'un système TeX. Un
système TeX est un ensemble de programmes et de fichiers qui vont rester
« en coulisses » (vous n'aurez pas à les appeler directement), mais qui sont
nécessaires pour faire fonctionner LaTeX.

Il existe aujourd'hui deux grands systèmes TeX, [MiKTeX](https://www.miktex.org)
et [TeX Live](https://tug.org/texlive). Tous deux sont disponibles pour Windows,
MacOS et Linux. MiKTeX est tout de même plutôt orienté vers Windows ; pour
MacOS, TeX Live est inclus dans une collection plus vaste appelée
[MacTeX](http://www.tug.org/mactex/). Chaque système a
[ses avantages](https://tex.stackexchange.com/questions/20036), et vous pouvez
consulter quelques conseils supplémentaires
[sur le site du projet LaTeX](https://www.latex-project.org/get/).

Comme **TeX Live** est disponible sur toutes les plateformes courantes et qu'il
présente certains avantages en termes de performances, nous vous recommandons
de le choisir si vous ne savez pas trop quel système installer.


## Les éditeurs de texte

Les fichiers LaTeX sont simplement du texte brut, ils peuvent donc être ouverts
et modifiés avec n'importe quel éditeur de texte. Il est néanmoins plus pratique
d'avoir un éditeur conçu pour fonctionner avec LaTeX, car il offre des
fonctionnalités telles que la compilation de vos fichiers en un clic,
l'affichage intégré des fichiers PDF et la coloration syntaxique. Une
fonctionnalité très utile de tous les éditeurs LaTeX modernes est SyncTeX :
la possibilité de cliquer sur votre code source pour aller au point correspondant
dans le fichier PDF, ou l'inverse.

Il y a beaucoup plus d'éditeurs LaTeX que ce que nous pouvons espérer énumérer ici :
une liste quasiment exhaustive a été dressée
[sur StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
Un éditeur de base, [TeXworks](https://tug.org/texworks), est inclus dans
TeX Live et MiKTeX sous Windows et Linux, et
[TeXShop](https://pages.uoregon.edu/koch/texshop/) est inclus dans MacTeX.

Quel que soit l'éditeur que vous choisissez, nous vous recommandons de
l'installer _après_ votre système TeX, afin que l'éditeur puisse « trouver » le
système TeX et se configurer correctement tout seul.


## Travailler par internet

Il existe aujourd'hui plusieurs sites web qui vous évitent d'installer un
système TeX et un éditeur LaTeX. Ces sites permettent d'éditer vos fichiers
directement dans la page web, puis ils exécutent LaTeX sur leur serveur et
affichent le PDF obtenu.

Certains de ces sites combinent LaTeX avec une interface similaire à celle d'un
traitement de texte, tandis que d'autres s'attachent davantage à vous permettre
de voir le code LaTeX et sont donc plus proches d'une installation locale.

Dans certains cas, ces systèmes vous permettent d'utiliser LaTeX sans avoir
besoin de vous connecter, et nous utilisons l'un d'entre eux,
[LaTeX CGI](https://latexcgi.xyz), pour vous permettre de modifier et tester les
exemples du présent tutoriel. Mais pour travailler sur un projet complet, les
meilleurs systèmes en ligne exigent que vous vous inscriviez avant de les
utiliser. Cela vous permet d'enregistrer votre travail mais aussi de ne pas
surcharger les sites. Nous avons mis en place des liens pour que vous puissiez
éditer nos exemples en utilisant [Overleaf](https://www.overleaf.com), l'un des
principaux sites web pour LaTeX en ligne. Il y en a bien sûr d'autres, par
exemple [Papeeria](https://papeeria.com/).


## Travaux pratiques

Mettez en place une installation LaTeX locale _ou_ un compte avec un service
LaTeX en ligne. Si vous utilisez une installation locale, vous devrez également
choisir un éditeur : nous vous recommandons de commencer par TeXworks ou
TeXShop (voir ci-dessus), puis de vous tourner vers d'autres éditeurs plus
tard, lorsque vous saurez comment _vous_ travaillez le mieux avec LaTeX.

Vous pourrez faire [tous nos exercices dans votre navigateur](help.md), mais
nous voulons vous préparer à travailler sur de vrais documents, c'est donc le
moment idéal pour tout mettre en place.
=======
title: "Working with LaTeX"
=======
title: "Travailler avec LaTeX"
>>>>>>> e20f53d8... Translation of lessons 01 and 02 to French.
---

Unlike many computer programs, LaTeX is not a single application containing
'everything' in one. Instead, there are separate programs that work together.
We can divide those up into two things you actually need:

<<<<<<< HEAD
- A _TeX system_
- A text editor (often a LaTeX-specific one)

## {{ site.tex }} systems

The core of working with LaTeX is having a TeX system available. A TeX system is a set
of 'behind the scenes' programs and files that are needed to make LaTeX work, but
most of the time you don't directly 'run' this.

There are two major TeX systems available today,
[MiKTeX](https://www.miktex.org) and [TeX Live](https://tug.org/texlive). Both
are available for Windows, macOS and Linux.
MiKTeX has a strong background on Windows;
on macOS, TeX Live is bundled into a larger collection called [MacTeX](http://www.tug.org/mactex/).
There are [advantages to each
system](https://tex.stackexchange.com/questions/20036), and you might want to
look at [some more advice from the LaTeX
Project](https://www.latex-project.org/get/).

As TeX Live is available on all common platforms, and as it has some performance
advantages, we recommend that if you are unsure which system to install, you
choose TeX Live.

## Editors

LaTeX files are simply plain text, so they can be edited with any text editor.
However, it's most convenient to have an editor that is designed to work with
LaTeX, as they provide features like one-click compilation of your files,
built-in PDF viewers, and syntax highlighting. A really useful feature in all
modern LaTeX editors is SyncTeX: the ability to click on your source and go
straight to your PDF, or back the other way.

There are many more LaTeX editors than we can hope to list here: there is a
[comprehensive list on
StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
A basic editor, [TeXworks](https://tug.org/texworks), is included in TeX Live
and MiKTeX on Windows and Linux, and [TeXShop](https://pages.uoregon.edu/koch/texshop/)
is included in MacTeX.

Whichever editor you pick, we recommend you install it _after_ your TeX system,
so that the editor can 'find' the TeX system and set itself up correctly.

## Working online

There are several powerful online sites nowadays that allow you to avoid
the need to install a TeX system and LaTeX editor at all. These websites
work by letting you edit your files in the webpage, then they run LaTeX
behind the scenes, and display the PDF that is produced.

Some of these sites combine LaTeX with features similar to a word processor,
whereas others are more focused on letting you see the LaTeX code and
so are closer to having a local installation.

There are systems that let you run LaTeX without needing to be logged in, and we
are using one of those,
[LaTeX CGI](https://latexcgi.xyz), to let you
edit and test the examples we give. For more complete work, the best online
systems require that you register before you use them. That lets you save your
work but also helps the sites not get overloaded. We have set up links so you
can edit our examples using [Overleaf](https://www.overleaf.com), one of the
major websites for LaTeX online. There are of course others:
[Papeeria](https://papeeria.com/) is an example.

## Exercise

Get yourself set up with a local LaTeX installation _or_ an account with
an online LaTeX service. If you are using a local installation, you'll need
to pick an editor too: we recommend starting with either TeXworks or TeX Shop
(see above), then looking at other editors later once you know how _you_
work best with LaTeX.

You'll be able to [run all of our other exercises in your browser](help.md), but we want
to help you get working with real documents, so now is a great time to get
yourself ready.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Contrairement à de nombreux programmes informatiques, LaTeX n'est pas une application unique. Au contraire, il existe des programmes distincts qui fonctionnent ensemble. Nous pouvons les diviser en deux catégories dont vous avez réellement besoin :

- Un _système TeX_,
- Un éditeur de txte (plutôt un qui soit adapté à LaTeX).


## Les systèmes {{ site.tex }}

L'essentiel pour travailler avec LaTeX est de disposer d'un système TeX. Un système TeX est un ensemble de programmes et de fichiers qui vont rester « en coulisses » (vous n'aurez pas à les appeler directement), mais qui sont nécessaires pour faire fonctionner LaTeX.

Il existe aujourd'hui deux grands systèmes TeX, [MiKTeX](https://www.miktex.org) et [TeX Live](https://tug.org/texlive). Tous deux sont disponibles pour Windows, macOS et Linux. MiKTeX est tout de même plutôt orienté vers Windows ; pour MacOS, TeX Live est regroupé dans une collection plus vaste appelée [MacTeX](http://www.tug.org/mactex/). Chaque système a [des avantages](https://tex.stackexchange.com/questions/20036), et vous pouvez consulter [quelques conseils supplémentaires du projet LaTeX](https://www.latex-project.org/get/).

Comme **TeX Live** est disponible sur toutes les plateformes courantes et qu'il présente certains avantages en termes de performances, nous vous recommandons de le choisir si vous n'êtes pas sûr du système à installer.


## Les éditeurs de texte

Les fichiers LaTeX sont simplement du texte brut, ils peuvent donc être ouverts et modifiés avec n'importe quel éditeur de texte. Il est néanmoins plus pratique d'avoir un éditeur conçu pour fonctionner avec LaTeX, car il offre des fonctionnalités telles que la compilation de vos fichiers en un clic, l'affichage intégré des fichiers PDF et la coloration syntaxique. Une fonctionnalité très utile de tous les éditeurs LaTeX modernes est SyncTeX : la possibilité de cliquer sur votre code source pour aller au mpoint correspondant dans le fichier PDF, ou l'inverse.

Il y a beaucoup plus d'éditeurs LaTeX que ce que nous pouvons espérer énumérer ici : il existe une [liste complète sur StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides). Un éditeur de base, [TeXworks](https://tug.org/texworks), est inclus dans TeX Live et MiKTeX sous Windows et Linux, et [TeXShop](https://pages.uoregon.edu/koch/texshop/) est inclus dans MacTeX.

Quel que soit l'éditeur que vous choisissez, nous vous recommandons de l'installer _après_ votre système TeX, afin que l'éditeur puisse « trouver » le système TeX et se configurer correctement tout seul.


## Travailler par internet

Il existe aujourd'hui plusieurs sites web qui vous évitent d'installer un système TeX et un éditeur LaTeX. Ces sites permettent d'éditer vos fichiers directement dans la page web, puis ils exécutent LaTeX sur leur serveur et affichent le PDF obtenu.

Certains de ces sites combinent LaTeX avec une interface similaire à celle d'un traitement de texte, tandis que d'autres s'attachent davantage à vous permettre de voir le code LaTeX et sont donc plus proches d'une installation locale.

Dans certains cas, ces systèmes vous permettent d'utiliser LaTeX sans avoir besoin de vous connecter, et nous utilisons l'un d'entre eux, [LaTeX CGI](https://latexcgi.xyz), pour vous permettre de modifier et tester les exemples du présent tutoriel. Mais pour travailler sur un projet complet, les meilleurs systèmes en ligne exigent que vous vous inscriviez avant de les utiliser. Cela vous permet d'enregistrer votre travail mais aussi de ne pas surcharger les sites. Nous avons mis en place des liens pour que vous puissiez éditer nos exemples en utilisant [Overleaf](https://www.overleaf.com), l'un des principaux sites web pour LaTeX en ligne. Il y en a bien sûr d'autres, par exemple [Papeeria](https://papeeria.com/).


## Travaux pratiques

Mettez en place une installation LaTeX locale _ou_ un compte avec un service LaTeX en ligne. Si vous utilisez une installation locale, vous devrez également choisir un éditeur : nous vous recommandons de commencer par TeXworks ou TeX Shop (voir ci-dessus), puis de vous tourner vers d'autres éditeurs plus tard, lorsque vous saurez comment _vous_ travaillez le mieux avec LaTeX.

Vous pourrez [réaliser tous nos exercices dans votre navigateur](help.md), mais nous voulons vous aider à travailler sur de vrais documents, c'est donc le moment idéal pour vous préparer.
>>>>>>> e20f53d8... Translation of lessons 01 and 02 to French.
=======
title: "Working with LaTeX (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Travailler avec LaTeX"
---

Contrairement à de nombreux programmes informatiques, LaTeX n'est pas une application unique. Au contraire, il existe des programmes distincts qui fonctionnent ensemble. Il y a deux catégories indispensables :

- Un _système TeX_,
- Un éditeur de txte (plutôt un qui soit adapté à LaTeX).


## Les systèmes {{ site.tex }}

L'essentiel pour travailler avec LaTeX est de disposer d'un système TeX. Un système TeX est un ensemble de programmes et de fichiers qui vont rester « en coulisses » (vous n'aurez pas à les appeler directement), mais qui sont nécessaires pour faire fonctionner LaTeX.

Il existe aujourd'hui deux grands systèmes TeX, [MiKTeX](https://www.miktex.org) et [TeX Live](https://tug.org/texlive). Tous deux sont disponibles pour Windows, macOS et Linux. MiKTeX est tout de même plutôt orienté vers Windows ; pour MacOS, TeX Live est regroupé dans une collection plus vaste appelée [MacTeX](http://www.tug.org/mactex/). Chaque système a [des avantages](https://tex.stackexchange.com/questions/20036), et vous pouvez consulter [quelques conseils supplémentaires du projet LaTeX](https://www.latex-project.org/get/).

Comme **TeX Live** est disponible sur toutes les plateformes courantes et qu'il présente certains avantages en termes de performances, nous vous recommandons de le choisir si vous n'êtes pas sûr du système à installer.


## Les éditeurs de texte

Les fichiers LaTeX sont simplement du texte brut, ils peuvent donc être ouverts et modifiés avec n'importe quel éditeur de texte. Il est néanmoins plus pratique d'avoir un éditeur conçu pour fonctionner avec LaTeX, car il offre des fonctionnalités telles que la compilation de vos fichiers en un clic, l'affichage intégré des fichiers PDF et la coloration syntaxique. Une fonctionnalité très utile de tous les éditeurs LaTeX modernes est SyncTeX : la possibilité de cliquer sur votre code source pour aller au mpoint correspondant dans le fichier PDF, ou l'inverse.

Il y a beaucoup plus d'éditeurs LaTeX que ce que nous pouvons espérer énumérer ici : il existe une [liste complète sur StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides). Un éditeur de base, [TeXworks](https://tug.org/texworks), est inclus dans TeX Live et MiKTeX sous Windows et Linux, et [TeXShop](https://pages.uoregon.edu/koch/texshop/) est inclus dans MacTeX.

Quel que soit l'éditeur que vous choisissez, nous vous recommandons de l'installer _après_ votre système TeX, afin que l'éditeur puisse « trouver » le système TeX et se configurer correctement tout seul.


## Travailler par internet

Il existe aujourd'hui plusieurs sites web qui vous évitent d'installer un système TeX et un éditeur LaTeX. Ces sites permettent d'éditer vos fichiers directement dans la page web, puis ils exécutent LaTeX sur leur serveur et affichent le PDF obtenu.

Certains de ces sites combinent LaTeX avec une interface similaire à celle d'un traitement de texte, tandis que d'autres s'attachent davantage à vous permettre de voir le code LaTeX et sont donc plus proches d'une installation locale.

Dans certains cas, ces systèmes vous permettent d'utiliser LaTeX sans avoir besoin de vous connecter, et nous utilisons l'un d'entre eux, [LaTeX CGI](https://latexcgi.xyz), pour vous permettre de modifier et tester les exemples du présent tutoriel. Mais pour travailler sur un projet complet, les meilleurs systèmes en ligne exigent que vous vous inscriviez avant de les utiliser. Cela vous permet d'enregistrer votre travail mais aussi de ne pas surcharger les sites. Nous avons mis en place des liens pour que vous puissiez éditer nos exemples en utilisant [Overleaf](https://www.overleaf.com), l'un des principaux sites web pour LaTeX en ligne. Il y en a bien sûr d'autres, par exemple [Papeeria](https://papeeria.com/).


## Travaux pratiques

Mettez en place une installation LaTeX locale _ou_ un compte avec un service LaTeX en ligne. Si vous utilisez une installation locale, vous devrez également choisir un éditeur : nous vous recommandons de commencer par TeXworks ou TeX Shop (voir ci-dessus), puis de vous tourner vers d'autres éditeurs plus tard, lorsque vous saurez comment _vous_ travaillez le mieux avec LaTeX.

Vous pourrez [réaliser tous nos exercices dans votre navigateur](help.md), mais nous voulons vous aider à travailler sur de vrais documents, c'est donc le moment idéal pour vous préparer.
>>>>>>> 92644989... Add lessons 2 and 3.
