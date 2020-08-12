---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Inclure des images et les faire Â« flotter Â» : pour aller plus loin"
---

## Nommer les fichiers d'images

LaTeX fonctionne sur de nombreuses plates-formes, les noms de fichiers mÃ©ritent
donc une rÃ©flexion pour Ãªtre portables d'un ordinateur Ã  l'autre, surtout si
vous collaborez avec d'autres personnes. Le plus sÃ»r est de nommer vos
graphiques simplement, en particulier sans espaces. Par exemple, si vous voulez
organiser vos fichiers en conservant tous les graphiques dans un sous-rÃ©pertoire,
alors quelque chose comme `\includegraphics[width=30pt]{pics/mom.png}` est
portable et devrait le rester dans le temps.

Les espaces dans les noms de fichiers sont souvent problÃ©matiques, mÃªme s'ils
sont de mieux en mieux pris en charge. De faÃ§on gÃ©nÃ©rale, si vous rencontrez des
problÃ¨mes et que vous avez des espaces dans un nom de fichier, commencez par
supprimer ces espaces avant toute autre chose.

La prise en charge des caractÃ¨res accentuÃ©s est variable ; certains systÃ¨mes,
en particulier sous Windows, posent des problÃ¨mes. Si vous utilisez des noms de
fichiers contenant des caractÃ¨res accentuÃ©s et que vous rencontrez des problÃ¨mes,
faites un test en utilisant uniquement des caractÃ¨res ASCII.


## Stocker les images dans un sous-rÃ©pertoire

Une faÃ§on courante de ranger ses fichiers sources est de placer toutes les images
dans un sous-rÃ©pertoire. Vous pouvez alors les inclure par leur chemin relatif,
comme illustrÃ© ci-dessus ; notez que le caractÃ¨re `/` est utilisÃ© pour sÃ©parer
des parties du chemin _mÃªme sous Windows_.

Si vous avez beaucoup d'images, vous souhaiterez peut-Ãªtre dÃ©finir Ã  l'avance le
sous-rÃ©pertoire les contenant. Cela se fait en utilisant `\graphicspath`, qui
nÃ©cessite une entrÃ©e pour chaque sous-rÃ©pertoire, entre accolades `{...}`. Par
exemple, pour inclure les sous-rÃ©pertoires `figs` et `pics`, on aurait :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Including graphics and making things 'float'"
=======
title: "Inclure des images et les faire « flotter »: pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
---

## Nommer les fichiers d'images

LaTeX fonctionne sur de nombreuses plates-formes, les noms de fichiers méritent donc une réflexion pour être portables d'un ordinateur à l'autre, surtout si vous collaborez avec d'autres personnes. Le plus sûr est de nommer vos graphiques simplement, en particulier sans espaces. Par exemple, si vous voulez organiser vos fichiers en conservant tous les graphiques dans un sous-répertoire, alors quelque chose comme `\includegraphics[width=30pt]{pics/mom.png}` est portable et devrait le rester dans le temps.

Les espaces dans les noms de fichiers sont souvent problématiques, même s'ils sont mieux pris en charge maintenant. De façon générale, si vous rencontrez des problèmes et que vous avez des espaces dans un nom de fichier, commencez par supprimer ces espaces avant toute autre chose.

La prise en charge des caractères accentués est quelque peu variable ; certains systèmes, en particulier sous Windows, posent des problèmes. Si vous rencontrez des problèmes avec des noms de fichiers contenant des caractères accentués, faites un test en utilisant uniquement des caractères ASCII.


## Stocker les images dans un sous-répertoire

<<<<<<< HEAD
If you have a lot of graphics, you might want to set up the subdirectory
in advance. That can be done using `\graphicspath`, which needs a braced entry
for each subdirectory. For example, to include both `figs` and `pics`
subdirectories, we would have:
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Une façon courante de ranger ses fichiers sources est de placer toutes les images dans un sous-répertoire. Vous pouvez alors les inclure par leur chemin relatif, comme illustré ci-dessus ; notez que le caractère `/` est utilisé pour séparer des parties du chemin _même sous Windows_.

Si vous avez beaucoup d'images, vous souhaiterez peut-être définir à l'avance le sous-répertoire les contenant. Cela se fait en utilisant `\graphicspath`, qui nécessite une entrée (entre accolades `{...}`) pour chaque sous-répertoire. Par exemple, pour inclure les sous-répertoires `figs` et `pics`, on aurait :
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Notez que les noms de rÃ©pertoires doivent se terminer par un `/` final.


## Produire des graphiques

Comme nous l'avons vu, il est facile d'inclure dans un document LaTeX des images
venant de la plupart des sources, y compris des graphiques de logiciels
scientifiques. Dans ce cas, enregistrez-les plutÃ´t au format PDF si vous le
pouvez, car il s'agit d'un format pÃ©renne et facile Ã  manipuler (notamment, on
peut le mettre Ã  l'Ã©chelle sans perte de qualitÃ©). Si vous passez par des bitmaps,
conservez une haute rÃ©solution. Vous pouvez dessiner des images Ã  la souris qui
incluent des bouts de code LaTeX avec [Inkscape](https://inkscape.org/). Une
alternative qui Ã©tend ces techniques de dessin Ã  trois dimensions est
[Asymptote](https://www.ctan.org/pkg/asymptote). Ces deux logiciels produisent
des fichiers que vous pourrez inclure dans votre document.

Vous pouvez Ã©galement crÃ©er des dessins et graphiques parfaitement adaptÃ©s Ã 
votre document LaTeX, utilisant la mÃªme police de caractÃ¨res, Ã©ventuellement
avec des formules mathÃ©matiques et des `\labels` auxquels avec vous pourrez faire
rÃ©fÃ©rence en utilisant des packages LaTeX. Pour cela, vous pouvez dessiner
directement Ã  l'intÃ©rieur de votre document, avec [Ti*k*Z](https://ctan.org/pkg/pgf)
ou son alternative, [PSTricks](https://ctan.org/pkg/pstricks-base). Attention,
c'est pratique et puissant, mais rend rapidement le code-source de vos documents
plus complexe.


## Positionner des flottants

Le placement des flottants LaTeX est complexe, et parfois frustrant. La demande
la plus courante consiste Ã  placer l'image exactement lÃ  oÃ¹ elle se trouve dans
le fichier d'entrÃ©e. C'est ce que fait le package `float`.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
Notice in particular the trailing `/` in these.
=======
Notez que les noms de répertoires doivent se terminer par un `/` final.

>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

## Produire des graphiques

Comme nous l'avons vu, il est facile d'inclure dans un document LaTeX des images venant de la plupart des sources, y compris des graphiques de logiciels scientifiques. Dans ce cas, enregistrez-les plutôt au format PDF si vous le pouvez, car il s'agit d'un format pérenne et facile à manipuler (notamment, on peut le mettre à l'échelle sans perte de qualité). Si vous passez par des bitmaps, conservez une haute résolution. Vous pouvez dessiner des images à la souris qui incluent des snippets LaTeX avec [Inkscape](https://inkscape.org/). Une alternative qui étend ces techniques de dessin à trois dimensions est [Asymptote](https://www.ctan.org/pkg/asymptote). Ces deux logiciels produisent des fichiers que vous pourrez inclure dans votre document.

Vous pouvez également créer des dessins et graphiques parfaitement adaptés à votre document LaTeX, utilisant la même police de caractères, éventuellement avec des formules mathématiques et des `\labels` auxquels avec vous pourrez vous référer en utilisant des packages LaTeX. Pour cela, vous pouvez dessiner directement à l'intérieur de votre document, avec [Ti*k*Z](https://ctan.org/pkg/pgf) ou son alternative, [PSTricks](https://ctan.org/pkg/pstricks-base). Attention, c'est pratique et puissant, mais rend rapidement le code-source de vos documents plus complexe.


<<<<<<< HEAD
LaTeX's float placement is complex.
The most common request is to have the figure placed
in the output exactly where it lies in the input.
The `float` package will do that.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
## Positionner des flottants

Le placement des flottants LaTeX est complexe, et parfois frustrant. La demande la plus courante consiste à placer l'image exactement là où elle se trouve dans le fichier d'entrée. C'est ce que fait le package `float`.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage{lipsum}  % Pour avoir du texte de remplissage
=======
\usepackage{lipsum}  % dummy text for filler
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage{lipsum}  % dummy text for filler
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
\usepackage{lipsum}  % Pour avoir du texte de remplissage
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  \caption{Une image d'exemple}
=======
  \caption{An example image}
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
  \caption{An example image}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
  \caption{Une image d'exemple}
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
\end{figure}
\lipsum[8-15]
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
L'option `H` met l'image Â« absolument ici Â» (_**h**ere_). Cependant,
en rÃ¨gle gÃ©nÃ©rale, il est dÃ©conseillÃ© d'utiliser `H`, car Ã§a a tendance Ã 
laisser de grands espaces vides dans votre document.


## D'autres types de flottants

Nous [allons bientÃ´t voir](lesson-08) qu'on peut mettre des tableaux dans des
flottants, dans un environnement `table`. Cependant, rien n'oblige Ã  mettre les
images dans des environnement `figures`, et les tableaux dans des environnements
`tables` ; c'est juste une convention.

On peut dÃ©finir d'autres types de flottants ; chaque type est insÃ©rÃ©
indÃ©pendamment. Ã‡a se fait avec le package [`trivfloat`](https://ctan.org/pkg/trivfloat),
qui fournit une commande unique, `\trivfloat`, pour crÃ©er de nouveaux type
d'environnements de flottants.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
Note the `H` option, which puts the figure 'absolutely Here'.
However it is often not recommended to use `H`, because it may
create large portions of white space in your document.
=======
Notez l'option `H`, qui met l'image « absolument ici » (_**h**ere_). Cependant, en règle générale, il est déconseillé d'utiliser `H`, car ça a tendance à laisser de grands espaces vides dans votre document.

>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

## D'autres types de flottants

Nous [allons bientôt voir](lesson-08) qu'on peut mettre des tableaux dans des flottants, dans un environnement `table`. Cependant, rien n'oblige à mettre les images dans des environnement `figures`, et les tableaux dans des environnements `tables` ; c'est juste une convention.

<<<<<<< HEAD
You might want to have other types of floating environment; each type is
inserted independently. You can do that using the
[`trivfloat`](https://ctan.org/pkg/trivfloat) package. This provides a single
command, `\trivfloat`, to make new types of float.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
On peut définir d'autres types de flottants ; chaque type est inséré indépendamment. Ça se fait avec le package [`trivfloat`](https://ctan.org/pkg/trivfloat), qui fournit une commande unique, `\trivfloat`, pour créer de nouveaux type d'environnements de flottants.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage{lipsum}  % Pour avoir du texte de remplissage
=======
\usepackage{lipsum}  % dummy text for filler
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage{lipsum}  % dummy text for filler
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
\usepackage{lipsum}  % Pour avoir du texte de remplissage
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  \caption{Une image d'exemple}
=======
  \caption{An example image}
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
  \caption{An example image}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
  \caption{Une image d'exemple}
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
\end{image}
\end{document}
```
