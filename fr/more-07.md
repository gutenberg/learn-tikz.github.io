---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD

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
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Including graphics and making things 'float'"
=======
title: "Inclure des images et les faire � flotter �: pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
title: "Inclure des images et les faire � flotter �: pour aller plus loin"
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
---

## Nommer les fichiers d'images

LaTeX fonctionne sur de nombreuses plates-formes, les noms de fichiers m�ritent donc une r�flexion pour �tre portables d'un ordinateur � l'autre, surtout si vous collaborez avec d'autres personnes. Le plus s�r est de nommer vos graphiques simplement, en particulier sans espaces. Par exemple, si vous voulez organiser vos fichiers en conservant tous les graphiques dans un sous-r�pertoire, alors quelque chose comme `\includegraphics[width=30pt]{pics/mom.png}` est portable et devrait le rester dans le temps.

Les espaces dans les noms de fichiers sont souvent probl�matiques, m�me s'ils sont mieux pris en charge maintenant. De fa�on g�n�rale, si vous rencontrez des probl�mes et que vous avez des espaces dans un nom de fichier, commencez par supprimer ces espaces avant toute autre chose.

La prise en charge des caract�res accentu�s est quelque peu variable ; certains syst�mes, en particulier sous Windows, posent des probl�mes. Si vous rencontrez des probl�mes avec des noms de fichiers contenant des caract�res accentu�s, faites un test en utilisant uniquement des caract�res ASCII.


## Stocker les images dans un sous-r�pertoire

<<<<<<< HEAD
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
Une fa�on courante de ranger ses fichiers sources est de placer toutes les images dans un sous-r�pertoire. Vous pouvez alors les inclure par leur chemin relatif, comme illustr� ci-dessus ; notez que le caract�re `/` est utilis� pour s�parer des parties du chemin _m�me sous Windows_.

Si vous avez beaucoup d'images, vous souhaiterez peut-�tre d�finir � l'avance le sous-r�pertoire les contenant. Cela se fait en utilisant `\graphicspath`, qui n�cessite une entr�e (entre accolades `{...}`) pour chaque sous-r�pertoire. Par exemple, pour inclure les sous-r�pertoires `figs` et `pics`, on aurait :
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
Une fa�on courante de ranger ses fichiers sources est de placer toutes les images dans un sous-r�pertoire. Vous pouvez alors les inclure par leur chemin relatif, comme illustr� ci-dessus ; notez que le caract�re `/` est utilis� pour s�parer des parties du chemin _m�me sous Windows_.

Si vous avez beaucoup d'images, vous souhaiterez peut-�tre d�finir � l'avance le sous-r�pertoire les contenant. Cela se fait en utilisant `\graphicspath`, qui n�cessite une entr�e (entre accolades `{...}`) pour chaque sous-r�pertoire. Par exemple, pour inclure les sous-r�pertoires `figs` et `pics`, on aurait :
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
Notice in particular the trailing `/` in these.
=======
Notez que les noms de r�pertoires doivent se terminer par un `/` final.

>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
Notez que les noms de r�pertoires doivent se terminer par un `/` final.

>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

## Produire des graphiques

Comme nous l'avons vu, il est facile d'inclure dans un document LaTeX des images venant de la plupart des sources, y compris des graphiques de logiciels scientifiques. Dans ce cas, enregistrez-les plut�t au format PDF si vous le pouvez, car il s'agit d'un format p�renne et facile � manipuler (notamment, on peut le mettre � l'�chelle sans perte de qualit�). Si vous passez par des bitmaps, conservez une haute r�solution. Vous pouvez dessiner des images � la souris qui incluent des snippets LaTeX avec [Inkscape](https://inkscape.org/). Une alternative qui �tend ces techniques de dessin � trois dimensions est [Asymptote](https://www.ctan.org/pkg/asymptote). Ces deux logiciels produisent des fichiers que vous pourrez inclure dans votre document.

Vous pouvez �galement cr�er des dessins et graphiques parfaitement adapt�s � votre document LaTeX, utilisant la m�me police de caract�res, �ventuellement avec des formules math�matiques et des `\labels` auxquels avec vous pourrez vous r�f�rer en utilisant des packages LaTeX. Pour cela, vous pouvez dessiner directement � l'int�rieur de votre document, avec [Ti*k*Z](https://ctan.org/pkg/pgf) ou son alternative, [PSTricks](https://ctan.org/pkg/pstricks-base). Attention, c'est pratique et puissant, mais rend rapidement le code-source de vos documents plus complexe.


<<<<<<< HEAD
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

Le placement des flottants LaTeX est complexe, et parfois frustrant. La demande la plus courante consiste � placer l'image exactement l� o� elle se trouve dans le fichier d'entr�e. C'est ce que fait le package `float`.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
## Positionner des flottants

Le placement des flottants LaTeX est complexe, et parfois frustrant. La demande la plus courante consiste � placer l'image exactement l� o� elle se trouve dans le fichier d'entr�e. C'est ce que fait le package `float`.
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
<<<<<<< HEAD
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
=======
\usepackage{lipsum}  % Pour avoir du texte de remplissage
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
<<<<<<< HEAD
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
=======
  \caption{Une image d'exemple}
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
\end{figure}
\lipsum[8-15]
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
Note the `H` option, which puts the figure 'absolutely Here'.
However it is often not recommended to use `H`, because it may
create large portions of white space in your document.
=======
Notez l'option `H`, qui met l'image � absolument ici � (_**h**ere_). Cependant, en r�gle g�n�rale, il est d�conseill� d'utiliser `H`, car �a a tendance � laisser de grands espaces vides dans votre document.

>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

## D'autres types de flottants

Nous [allons bient�t voir](lesson-08) qu'on peut mettre des tableaux dans des flottants, dans un environnement `table`. Cependant, rien n'oblige � mettre les images dans des environnement `figures`, et les tableaux dans des environnements `tables` ; c'est juste une convention.

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
On peut d�finir d'autres types de flottants ; chaque type est ins�r� ind�pendamment. �a se fait avec le package [`trivfloat`](https://ctan.org/pkg/trivfloat), qui fournit une commande unique, `\trivfloat`, pour cr�er de nouveaux type d'environnements de flottants.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
Notez l'option `H`, qui met l'image � absolument ici � (_**h**ere_). Cependant, en r�gle g�n�rale, il est d�conseill� d'utiliser `H`, car �a a tendance � laisser de grands espaces vides dans votre document.


## D'autres types de flottants

Nous [allons bient�t voir](lesson-08) qu'on peut mettre des tableaux dans des flottants, dans un environnement `table`. Cependant, rien n'oblige � mettre les images dans des environnement `figures`, et les tableaux dans des environnements `tables` ; c'est juste une convention.

On peut d�finir d'autres types de flottants ; chaque type est ins�r� ind�pendamment. �a se fait avec le package [`trivfloat`](https://ctan.org/pkg/trivfloat), qui fournit une commande unique, `\trivfloat`, pour cr�er de nouveaux type d'environnements de flottants.
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
<<<<<<< HEAD
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
=======
\usepackage{lipsum}  % Pour avoir du texte de remplissage
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
<<<<<<< HEAD
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
=======
  \caption{Une image d'exemple}
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
\end{image}
\end{document}
```
=======
title: "More on: Including graphics and making things 'float' (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Inclure des images et les faire « flotter »: pour aller plus loin"
=======
title: "Inclure des images et les faire « flotter » : pour aller plus loin"
>>>>>>> faf19621... I've made spacing around : and ; consistent.
---

## Nommer les fichiers d'images

LaTeX fonctionne sur de nombreuses plates-formes, les noms de fichiers méritent donc une réflexion pour être portables d'un ordinateur à l'autre, surtout si vous collaborez avec d'autres personnes. Le plus sûr est de nommer vos graphiques simplement, en particulier sans espaces. Par exemple, si vous voulez organiser vos fichiers en conservant tous les graphiques dans un sous-répertoire, alors quelque chose comme `\includegraphics[width=30pt]{pics/mom.png}` est portable et devrait le rester dans le temps.
=======
>>>>>>> 5fff9b4b... Line wrapping to 80 columns.

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

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

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

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % Pour avoir du texte de remplissage
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Une image d'exemple}
\end{figure}
\lipsum[8-15]
\end{document}
```

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

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % Pour avoir du texte de remplissage
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Une image d'exemple}
\end{image}
\end{document}
```
>>>>>>> f133d525... Add more-01 to more-08 after reencoding in UTF-8.
