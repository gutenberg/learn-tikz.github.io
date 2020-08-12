---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "S'organiser pour écrire un document long"
---
=======
title: "Structuring longer documents"
---

>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
title: "S'organiser pour écrire un document long"
---
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
<script>
preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

<<<<<<< HEAD
<<<<<<< HEAD
## Structurer son code source

Si vous rédigez un long document, vous aurez peut-être envie de diviser le
code-source en plusieurs fichiers, plus faciles à gérer. Par exemple, il est
très courant d'avoir un fichier principal (ou « racine »), puis un fichier
source par chapitre (pour un livre ou une thèse), ou par section significative
(pour un long article).

LaTeX permet de répartir le contenu d'un document dans plusieurs fichiers comme
on le souhaite. Il y a deux commandes importantes ici, `\input` et `\include`.
On peut utiliser `\input` pour faire appel à un fichier « comme s'il avait été
tapé ici », donc il peut être utilisé pour n'importe quel contenu. La commande
`\include`, elle, ne fonctionne que pour les chapitres : elle démarre une
nouvelle page et fait quelques ajustements internes. Mais elle a un gros
avantage : elle permet de sélectionner seulement les chapitres à inclure, de
sorte que vous pouvez travailler sur une partie de votre document plutôt que sur
l'ensemble.

Un document un peu long pourrait donc ressembler à ceci :
=======
## Structuring your sources
=======
## Structurer son code source
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

Si vous rédigez un long document, vous aurez peut-être envie de diviser le code-source en plusieurs fichiers, plus faciles à gérer. Par exemple, il est très courant d'avoir un fichier principal (ou « racine »), puis un fichier source par chapitre (pour un livre ou une thèse), ou par section significative (pour un long article).

LaTeX permet de répartir le contenu d'un document dans plusieurs fichiers comme on le souhaite. Il y a deux commandes importantes ici, `\input` et `\include`. On peut utiliser `\input` pour faire appel à un fichier « comme s'il avait été tapé ici », donc il peut être utilisé pour n'importe quel contenu. La commande `\include`, elle, ne fonctionne que pour les chapitres : elle démarre une nouvelle page et fait quelques ajustements internes. Mais elle a un gros avantage : elle permet de sélectionner seulement les chapitres à inclure, de sorte que vous pouvez travailler sur une partie de votre document plutôt que sur l'ensemble.

<<<<<<< HEAD
A longer document might therefore look something like the following:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Un document un peu long pourrait donc ressembler à ceci :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{A Sample Book}
\author{John Doe \and Joe Bloggs}

\IfFileExists{append.aux}
{
\includeonly{
%  front,
%  chap1,
  chap2,
%  append
  }
}
{
% Do a full document initially to generate
% all the aux files
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
Voici les différentes caractéristiques de ce fichier (tous les fichiers
utilisés se trouvent à la fin de cette page).
=======
Voici les différentes caractéristiques de ce fichier. (Les différents fichiers utilisés se trouvent à la fin de cette page).
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.


## Utiliser `\input`

<<<<<<< HEAD
La commande `\input` sert pour les parties d'un long fichier qui ne sont
_pas des chapitres séparés_. Dans l'exemple, nous l'avons utilisée pour séparer
les couvertures avant et arrière, ce qui permet de garder le fichier principal
court et clair, et permet également ces couvertures soient réutilisées pour un
autre document. Nous l'avons également employée pour les sections « hors chapitre »
au début de notre livre, comme la préface. Encore une fois, cela nous aide à
garder le fichier principal clair et compact.
=======
La commande `\input` sert pour les parties d'un long fichier qui ne sont _pas des chapitres séparés_. Dans l'exemple, nous l'avons utilisée pour séparer les couvertures avant et arrière, ce qui permet de garder le fichier principal court et clair, et permet également ces couvertures soient réutilisées pour un autre document. Nous l'avons également employée pour les sections « hors chapitre » au début de notre livre, comme la préface. Encore une fois, cela nous aide à garder le fichier principal clair et compact.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.


## Utiliser `\include` et `\includeonly`

<<<<<<< HEAD
La commande `\include` est faite pour les chapitres, nous l'avons donc utilisée
pour chaque chapitre complet ; elle démarre toujours une nouvelle page. Nous
avons sélectionné les chapitres qui seront réellement inclus à l'aide de la
commande `\includeonly`, qui, comme vous pouvez le voir, prend une liste de noms
de fichiers séparés par des virgules. Lorsque vous utilisez `\includeonly`, vous
pouvez réduire le temps nécessaire à la compilation et produire un PDF
« sélectif » pour la relecture. De plus, l'avantage principal de `\includeonly`
est que LaTeX utilisera toutes les informations des références croisées contenues
dans les fichiers `.aux` des autres fichiers inclus.
=======
La commande `\include` est faite pour les chapitres, nous l'avons donc utilisée pour chaque chapitre complet ; elle démarre toujours une nouvelle page. Nous avons sélectionné les chapitres qui seront réellement inclus à l'aide de la commande `\includeonly`, qui, comme vous pouvez le voir, prend une liste de noms de fichiers séparés par des virgules. Lorsque vous utilisez `\includeonly`, vous pouvez réduire le temps nécessaire à la compilation et produire un PDF « sélectif » pour la relecture. De plus, l'avantage principal de `\includeonly` est que LaTeX utilisera toutes les informations de référence croisée des fichiers `.aux` des autres fichiers inclus.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.


## Ajouter une table des matières

<<<<<<< HEAD
La commande `\tableofcontents` utilise les informations des commandes de
sectionnement pour remplir une table des matières. Elle possède son propre
fichier auxiliaire, avec l'extension `.toc` (_**t**able **o**f **c**ontents_),
de sorte que vous devrez sans doute lancer LaTeX deux fois pour avoir une table
de matières complète et à jour. La table est générée automatiquement à partir
des titres des sections et autres sous-sections. Il existe des commandes
similaires pour les `\listoffigures` et les `\listoftables`, pour la table de
figures et celle des tableaux, qui fonctionnent à partir des légendes des
l'environnements de flottants, et utilisent des fichiers avec l'extension
`.lof` et `.lot` respectivement.
=======
La commande `\tableofcontents` utilise les informations des commandes de sectionnement pour remplir une table des matières. Elle possède son propre fichier auxiliaire, avec l'extension `.toc` (_**t**able **o**f **c**ontents_), de sorte que vous devrez sans doute lancer LaTeX deux fois pour avoir une table de matières complète et à jour. La table est générée automatiquement à partir des titres des sections et autres sous-sections. Il existe des commandes similaires pour les `\listoffigures` et les `\listoftables`, pour la table de figures et celle des tableaux, qui fonctionnent à partir des légendes des l'environnements de flottants, et utilisent des fichiers avec l'extension `.lof` et `.lot` respectivement.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.


## Ajouter un préface et des annexes

<<<<<<< HEAD
Les commandes `\frontmatter`, `\mainmatter`, et `\backmatter` modifient la mise
en page. Par exemple, `\frontmatter` change la numérotation des pages en
chiffres romains pour la préface et la table des matières. La commande `\appendix`
change la numérotation en `A`, `B`, etc., pour les annexes ; donc par exemple 
dans le premier chapitre après `\appendix`, le titre sera _Appendix A_.

Si vous utilisez `\frontmatter` pour la préface, il vous faudra utiliser
`\mainmatter` pour commencer le corps de votre document à proprement parler.
=======
Les commandes `\frontmatter`, `\mainmatter`, et `\backmatter` modifient la mise en page. Par exemple, `\frontmatter` change la numérotation des pages en chiffres romains pour la préface et la table des matières. La commande `\appendix` change la numérotation en `A`, `B`, etc., pour les annexes; donc par exemple dans le premier chapitre après `\appendix`, le titre sera `Appendix A`.

Si vous utilisez `\frontmatter` pour la préface, il vous faudra utiliser `\mainmatter` pour commencer le corps de votre document à proprement parler.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.


## Travaux pratiques

<<<<<<< HEAD
Modifiez la structure de base du document d'exemple, essayez d'ajouter et de
supprimer des entrées pour `\includeonly` et regardez quel effet ça produit.

Ajoutez quelques flottants et demandez à LaTeX des listes des figures et des
tableaux. Si vous utilisez une instance de LaTeX installée localement, comptez
combien d'exécutions de LaTeX sont nécessaires (les systèmes en ligne relancent
LaTeX automatiquement, sans forcément le dire, de sorte que les exécutions
successives requises ne se voient pas).

=======
We'll look at the various aspects of this file below. (The various support files
are at the end of this page.)

## Using `\input`

The `\input` command is good for parts of a long file that are _not_ separate
chapters. In the example, we have used it to separate out the front- and
backcovers, keeping the main file short and clear, and also meaning we could
re-use the covers in another document. We've also used it for the 'non-chapter'
sections at the start of our 'book': things like the preface. Again, this is
to help keep the main file clear.

## Using `\include` and `\includeonly`

The `\include` command is good for chapters, so we have used it for each full
chapter; it always starts a new page. We have selected which chapters will
actually be typeset using `\includeonly`, which as you can see takes a
comma-separated list of file names. When you use `\includeonly`, you can shorten
how long your typesetting takes and produce a 'selective' PDF for proofreading.
In addition, the key advantage of `\includeonly` is that LaTeX will use all of
the cross reference information from the `.aux` files of other included files.

## Creating a table of contents

The `\tableofcontents` command uses the information from sectioning
commands to populate the table of contents.  It has its own auxiliary
file, with extension `.toc`, so you may need to run LaTeX twice to
resolve the information. The table is generated automatically from the
section titles. There are similar commands for `\listoffigures` and
`\listoftables`, which work from the float environment captions, and
use files with extension `.lof` and `.lot` respectively.

## Splitting the document into parts

The `\frontmatter`, `\mainmatter`, and `\backmatter` commands
affect the formatting.
For instance, `\frontmatter` changes the page numbering to
Roman numbers.
The `\appendix` command changes the numbering to `A`, `B`, etc.,
so for instance in the first chapter after `\appendix`,
the header says `Appendix A`.

## Exercises

Experiment with the basic structure of the demonstration document,
try adding and removing entries for `\includeonly` and see the effect.

Add some floats and produce a list of figures and tables.
If using a locally installed LaTeX, do you see
how many LaTeX runs are required? (The online systems re-run LaTeX
"behind the scenes" so the additional required runs are not so obvious.)
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Modifiez la structure de base du document d'exemple, essayez d'ajouter et de supprimer des entrées pour `\includeonly` et regardez quel effet ça produit.

Ajoutez quelques flottants et demandez à LaTeX des listes des figures et des tableaux. Si vous utilisez une instance de LaTeX installée localement, comptez d'exécutions de LaTeX sont nécessaires (les systèmes en ligne relancent LaTeX automatiquement, sans forcément le dire, de sorte que les exécutions successives requises ne se voient pas).

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Preface}
The preface text. See \cite{doody}.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Introduction}
The first chapter text.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Something}
The second chapter text.
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Appendix}
The first appendix text.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
The front cover
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
For \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
The back cover
\end{center}
```
<!-- {% endraw %} -->

----
=======
title: "Structuring longer documents (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
