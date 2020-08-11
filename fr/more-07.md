---
<<<<<<< HEAD
title: "Inclure des images et les faire « flotter » : pour aller plus loin"
---

## Nommer les fichiers d'images

LaTeX fonctionne sur de nombreuses plates-formes, les noms de fichiers méritent
donc une réflexion pour être portables d'un ordinateur à l'autre, surtout si
vous collaborez avec d'autres personnes. Le plus sûr est de nommer vos
graphiques simplement, en particulier sans espaces. Par exemple, si vous voulez
organiser vos fichiers en conservant tous les graphiques dans un sous-répertoire,
alors quelque chose comme `\includegraphics[width=30pt]{pics/mom.png}` est
portable et devrait le rester dans le temps.

Les espaces dans les noms de fichiers sont souvent problématiques, même s'ils
sont de mieux en mieux pris en charge. De façon générale, si vous rencontrez des
problèmes et que vous avez des espaces dans un nom de fichier, commencez par
supprimer ces espaces avant toute autre chose.

La prise en charge des caractères accentués est variable ; certains systèmes,
en particulier sous Windows, posent des problèmes. Si vous utilisez des noms de
fichiers contenant des caractères accentués et que vous rencontrez des problèmes,
faites un test en utilisant uniquement des caractères ASCII.


## Stocker les images dans un sous-répertoire

Une façon courante de ranger ses fichiers sources est de placer toutes les images
dans un sous-répertoire. Vous pouvez alors les inclure par leur chemin relatif,
comme illustré ci-dessus ; notez que le caractère `/` est utilisé pour séparer
des parties du chemin _même sous Windows_.

Si vous avez beaucoup d'images, vous souhaiterez peut-être définir à l'avance le
sous-répertoire les contenant. Cela se fait en utilisant `\graphicspath`, qui
nécessite une entrée pour chaque sous-répertoire, entre accolades `{...}`. Par
exemple, pour inclure les sous-répertoires `figs` et `pics`, on aurait :
=======
title: "More on: Including graphics and making things 'float'"
---

## Naming graphics files

LaTeX works on many computer platforms so
file names deserve some thought.
Safest is to name your graphics simply, in particular without spaces.
For example, if you want to organize your files by keeping all
graphics in a subdirectory, then something like
`\includegraphics[width=30pt]{pix/mom.png}`
is portable and future-proof.

Spaces in file names are traditionally somewhat problematic, but are now
generally supported. However, if you have spaces in the name, and you have
issues, you may wish to try removing the spaces as the first step.

Accented character support is somewhat variable; there are issues with some
systems, particularly on Windows. If you find issues with accented characters
in file names, try using only ASCII characters for a test.

## Storing graphics in a subdirectory

A common way to lay out source files is to put all graphics into a subdirectory.
You can then include the relative path, as is shown above; notice that the
`/` character is used to separate parts of the path _even on Windows_.

If you have a lot of graphics, you might want to set up the subdirectory
in advance. That can be done using `\graphicspath`, which needs a braced entry
for each subdirectory. For example, to include both `figs` and `pics`
subdirectories, we would have:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
Notez que les noms de répertoires doivent se terminer par un `/` final.


## Produire des graphiques

Comme nous l'avons vu, il est facile d'inclure dans un document LaTeX des images
venant de la plupart des sources, y compris des graphiques de logiciels
scientifiques. Dans ce cas, enregistrez-les plutôt au format PDF si vous le
pouvez, car il s'agit d'un format pérenne et facile à manipuler (notamment, on
peut le mettre à l'échelle sans perte de qualité). Si vous passez par des bitmaps,
conservez une haute résolution. Vous pouvez dessiner des images à la souris qui
incluent des bouts de code LaTeX avec [Inkscape](https://inkscape.org/). Une
alternative qui étend ces techniques de dessin à trois dimensions est
[Asymptote](https://www.ctan.org/pkg/asymptote). Ces deux logiciels produisent
des fichiers que vous pourrez inclure dans votre document.

Vous pouvez également créer des dessins et graphiques parfaitement adaptés à
votre document LaTeX, utilisant la même police de caractères, éventuellement
avec des formules mathématiques et des `\labels` auxquels avec vous pourrez faire
référence en utilisant des packages LaTeX. Pour cela, vous pouvez dessiner
directement à l'intérieur de votre document, avec [Ti*k*Z](https://ctan.org/pkg/pgf)
ou son alternative, [PSTricks](https://ctan.org/pkg/pstricks-base). Attention,
c'est pratique et puissant, mais rend rapidement le code-source de vos documents
plus complexe.


## Positionner des flottants

Le placement des flottants LaTeX est complexe, et parfois frustrant. La demande
la plus courante consiste à placer l'image exactement là où elle se trouve dans
le fichier d'entrée. C'est ce que fait le package `float`.
=======
Notice in particular the trailing `/` in these.

## Producing graphics

As discussed, LaTeX easily uses graphics from most sources, including plots from
scientific software. When you do that, you probably want to save as a PDF if you
can, as this is a scalable format. If you do need to create a bitmap, aim for
high resolution. You can make mouse-created graphics that include LaTeX snippets
with [Inkscape](https://inkscape.org/). An alternative that in addition extends
those drawing techniques to three dimensions is
[Asymptote](https://www.ctan.org/pkg/asymptote). These two produce their output
as files that you include in your document.

You can also create graphics such as drawings that are especially suited to
LaTeX, with very high precision as well as equations and labels that match your
document. You can draw graphics directly inside your document, which is
convenient although at the cost of more complex documents with larger
requirements, by using [Ti*k*Z](https://ctan.org/pkg/pgf). An alternative is
[PSTricks](https://ctan.org/pkg/pstricks-base).

## Placing floats

LaTeX's float placement is complex.
The most common request is to have the figure placed
in the output exactly where it lies in the input.
The `float` package will do that.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
<<<<<<< HEAD
\usepackage{lipsum}  % Pour avoir du texte de remplissage
=======
\usepackage{lipsum}  % dummy text for filler
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
<<<<<<< HEAD
  \caption{Une image d'exemple}
=======
  \caption{An example image}
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{figure}
\lipsum[8-15]
\end{document}
```

<<<<<<< HEAD
L'option `H` met l'image « absolument ici » (_**h**ere_). Cependant,
en règle générale, il est déconseillé d'utiliser `H`, car ça a tendance à
laisser de grands espaces vides dans votre document.


## D'autres types de flottants

Nous [allons bientôt voir](lesson-08) qu'on peut mettre des tableaux dans des
flottants, dans un environnement `table`. Cependant, rien n'oblige à mettre les
images dans des environnement `figures`, et les tableaux dans des environnements
`tables` ; c'est juste une convention.

On peut définir d'autres types de flottants ; chaque type est inséré
indépendamment. Ça se fait avec le package [`trivfloat`](https://ctan.org/pkg/trivfloat),
qui fournit une commande unique, `\trivfloat`, pour créer de nouveaux type
d'environnements de flottants.
=======
Note the `H` option, which puts the figure 'absolutely Here'.
However it is often not recommended to use `H`, because it may
create large portions of white space in your document.

## Other types of float

We will [see soon](lesson-08) that we can put tables in floats; they will go
into a `table` environment. However, we don't _have_ to put graphics in the
`figure` environment or tables in the `table` environment; this is just
convention.

You might want to have other types of floating environment; each type is
inserted independently. You can do that using the
[`trivfloat`](https://ctan.org/pkg/trivfloat) package. This provides a single
command, `\trivfloat`, to make new types of float.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
<<<<<<< HEAD
\usepackage{lipsum}  % Pour avoir du texte de remplissage
=======
\usepackage{lipsum}  % dummy text for filler
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
<<<<<<< HEAD
  \caption{Une image d'exemple}
=======
  \caption{An example image}
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{image}
\end{document}
```
