---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Les tableaux"
---

## Tableaux simples

En LaTeX, un tableau se construit dans un environnement `tabular`. Cette leÃ§on
suppose que vous chargez le package `array`, qui ajoute des fonctionnalitÃ©s aux
tableaux de base de LaTeX. Il n'est pas intÃ©grÃ© dans le noyau LaTeX, mais c'est
uniquement pour des raisons historiques et vous avez intÃ©rÃªt Ã  le charger dÃ¨s
que vous utilisez des tableaux. Mettez donc ce qui suit dans votre prÃ©ambule et
nous serons prÃªts Ã  commencer :
=======
title: "Tables"
=======
title: "Les tableaux"
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
---


## Tableaux simples

<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
En LaTeX, un tableau se construit dans un environnement `tabular`. Cette leçon suppose que vous chargez le package `array`, qui ajoute des fonctionnalités aux tableaux LaTeX. Il n'est pas intégré dans le noyau LaTeX, mais c'est uniquement pour des raisons historiques et vous avez intérêt à le charger dès que vous utilisez des tableaux. Mettez donc ce qui suit dans votre préambule et nous sommes prêts à commencer :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\usepackage{array}
```
{: .noedit :}

<<<<<<< HEAD
<<<<<<< HEAD
Pour composer un tableau dans un environnement `tabular`, nous devons indiquer
Ã  LaTeX combien de colonnes seront nÃ©cessaires et comment elles doivent Ãªtre
alignÃ©es. Cela se fait dans un argument obligatoire de l'environnement &ndash;
souvent appelÃ© _prÃ©ambule_ du tableau &ndash; dans lequel vous spÃ©cifiez les
colonnes en utilisant des noms Ã  une lettre (les _preamble-tokens_). Les types
de colonnes disponibles sont les suivants :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type       | description |
| ---        |:-- |
| `l`        | colonne alignÃ©e Ã  gauche (_**l**eft_). |
| `c`        | colonne centrÃ©e (_**c**entered_). |
| `r`        | colonne alignÃ©e Ã  droite (_**r**ight_). |
| `p{width}` | colonne de largeur fixÃ©e, Ã©gale Ã  `width` ; le texte sera automatiquement justifiÃ©, avec des sauts de lignes si nÃ©cessaire. |
| `m{width}` | comme `p`, mais centrÃ© verticalement par rapport au reste de la ligne (_**m**iddle_). |
| `b{width}` | comme `p`, mais positionnÃ© en bas par rapport au reste de la ligne (_**b**ottom_). |
| `w{align}{width}` | fixe la largeur de la colonne Ã  `width`, mais le contenu peut dÃ©border s'il est trop grand. L'alignement horizontal `align` peut Ãªtre `l`, `c`, or `r`, comme dÃ©crit ci-dessus. |
| `W{align}{width}` | comme `w`, mais vous aurez un avertissement en cas de dÃ©bordement. |


En outre, il existe quelques autres _preamble-tokens_ qui ne dÃ©finissent pas une
colonne mais s'avÃ¨rent utiles :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type | description |
| ---  | :-- |
| `*{num}{string}` | rÃ©pÃ¨te `num` fois la chaÃ®ne `string` dans le prÃ©ambule. Permet de dÃ©finir plusieurs colonnes identiques. |
| `>{decl}` | ajoute la chaÃ®ne `decl` devant le contenu de chaque cellule de la colonne qui suit (permet par exemple de changer la police de cette colonne). |
| `<{decl}` | ajoute la chaÃ®ne `decl` aprÃ¨s le contenu de chaque cellule de la colonne qui prÃ©cÃ¨de. |
| <span>`|`</span>  | trace un trait vertical. |
| `@{decl}` | remplace l'espace entre deux colonne par la chaÃ®ne `decl`. |
| `!{decl}` | ajout la chaÃ®ne `decl` au centre de l'espace entre deux colonnes. |

Ces deux tableaux rÃ©pertorient tous les types de colonnes disponibles avec LaTeX
et le package `array`. Quelques types de colonnes supplÃ©mentaires, provenant
d'autres packages, sont prÃ©sentÃ©s [en approfondissement](more-08) de cette leÃ§on.

Les colonnes `l`, `c` et `r` auront la largeur naturelle de la cellule la plus
large. Chaque colonne doit Ãªtre dÃ©clarÃ©e, donc si vous voulez trois colonnes
centrÃ©es, vous utiliserez `ccc` dans le prÃ©ambule du tableau. Les espaces sont
ignorÃ©es, et `c c c` donne la mÃªme chose.

Dans le corps du tableau, les colonnes sont sÃ©parÃ©es par une esperluette `&` et
une nouvelle ligne est commencÃ©e avec `\\`. Il n'y a pas besoin de dÃ©clarer Ã 
l'avance le nombre de lignes du tableau.

Nous avons maintenant tout ce qu'il faut pour construire notre premier tableau.
Dans le code suivant, les `&` et `\\` sont alignÃ©s. Ce n'est pas nÃ©cessaire en
LaTeX, mais Ã§a aide Ã  lire le code source et Ã  dÃ©busquer les erreurs
Ã©ventuelles.
=======
In order to typeset a `tabular` we have to tell LaTeX how many columns will be
needed and how they should be aligned. This is done in a mandatory argument
&ndash; often referred to as the table preamble &ndash; to the `tabular`
environment, in which you specify the columns by using single-letter names,
called preamble-tokens. The available column types are:
=======
Pour composer un tableau dans un environnement `tabular`, nous devons indiquer à LaTeX combien de colonnes seront nécessaires et comment elles doivent être alignées. Cela se fait dans un argument obligatoire de l'environnement &ndash; souvent appelé _préambule_ du tableau &ndash; dans lequel vous spécifiez les colonnes en utilisant des noms à une lettre (les _preamble-tokens_). Les types de colonnes disponibles sont les suivants :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type       | description |
| ---        |:-- |
| `l`        | colonne alignée à gauche (_**l**eft_). |
| `c`        | colonne centrée (_**c**entered_). |
| `r`        | colonne alignée à droite (_**r**ight_). |
| `p{width}` | colonne de largeur fixée, égale à `width`; le texte sera automatiquement justifié, avec des saurs de lignes si nécessaire. |
| `m{width}` | comme `p`, mais centré verticalement par rapport au reste de la ligne. |
| `b{width}` | comme `p`, mais positionné en bas par rapport au reste de la ligne. |
| `w{align}{width}` | fixe la largeur de la colonne à `width`, mais le contenu peut déborder s'il est trop grand. L'alignement horizontal `align` peut être `l`, `c`, or `r`, comme décrit ci-dessus. |
| `W{align}{width}` | comme `w`, mais vous aurez un avertissement en ca de débordement. |


En outre, il existe quelques autres _preamble-tokens_ qui ne définissent pas une colonne mais s'avèrent utiles :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type | description |
| ---  | :-- |
| `*{num}{string}` | répète `num`  fois la chaîne `string` dans le préambule. Permet de définir plusieurs colonnes identiques. |
| `>{decl}` | ajoute la chaîne `decl` devant le contenu de chaque cellule de la colonne qui suit (permet par exemple de changer la police de cette colonne). |
| `<{decl}` | ajoute la chaîne `decl` après le contenu de chaque cellule de la colonne qui précède. |
| <span>`|`</span>  | trace un trait vertical. |
| `@{decl}` | remplace l'espace entre deux colonne par la chaîne `decl`. |
| `!{decl}` | ajout la chaîne `decl` au centre de l'espace entre deux colonnes. |

Ces deux tableaux répertorient tous les types de colonnes disponibles avec LaTeX et le package `array`. Quelques types de colonnes supplémentaires, provenant d'autres paquets, sont présentés [en approfondissement](more-08) de cette leçon.

Les colonnes `l`, `c` et `r` auront la largeur naturelle de la cellule la plus large. Chaque colonne doit être déclarée, donc si vous voulez trois colonnes centrées, vous utiliserez `ccc` dans le préambule du tableau. Les espaces sont ignorées, donc `c c c` donne la même chose.

Dans le corps du tableau, les colonnes sont séparées par une esperluette `&` et une nouvelle ligne est commencée avec `\\`. Il n'y a pas besoin de déclarer à l'avance le nombre de lignes du tableau.

<<<<<<< HEAD
We have everything we need for our first table. In the following code the
`&` and `\\` are aligned. This isn't necessary in LaTeX, but helps reading the
source.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Nous avons maintenant tout ce qu'il faut pour construire notre première table. Dans le code suivant, les `&` et `\\` sont alignés. Ce n'est pas nécessaire en LaTeX, mais ça aide à lire le code source et à trouver les erreurs éventuelles.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
Si une colonne de tableau contient beaucoup de texte, vous aurez du mal Ã  avoir
un joli rÃ©sultat avec seulement `l`, `c` et `r`. Regardez l'exemple suivant :
=======
If a table column contains a lot of text you will have issues to get that
right with only `l`, `c`, and `r`. See what happens in the following example:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Si une colonne de tableau contient beaucoup de texte, vous aurez du mal à avoir un beau résultat avec seulement `l`, `c` et `r`. Regardez l'exemple suivant :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Description \\
<<<<<<< HEAD
<<<<<<< HEAD
  Chien  & Le chien est un membre du genre Canis, qui fait partie des CanidÃ©s
           proches du loup, et est le carnivore terrestre le plus
           rÃ©pandu. \\
  Cat    & Le chat est une espÃ¨ce domestique de petit mammifÃ¨re carnivore. C'est
           la seule espÃ¨ce domestiquÃ©e de la famille des FÃ©lins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
=======
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  Cat    & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
Le problÃ¨me est qu'une colonne de type `l` dÃ©roule son contenu sur une seule
ligne, et prend sa largeur naturelle, mÃªme si la page n'est pas assez large.
Pour rÃ©soudre ce problÃ¨me, vous pouvez utiliser une colonne de type `p`.
Celle-ci met son contenu sous forme d'un paragraphe avec la largeur que vous
spÃ©cifiez, et aligne ce paragraphe verticalement en haut et en bas. Comparez
le rÃ©sultat de ce nouvel exemple avec le prÃ©cÃ©dent :
=======
The issue is that the `l` type column typesets its contents in a single row at
its natural width, even if there is a page
border in the way. To overcome this you can use the `p` column. This
typesets its contents as paragraphs with the width you specify as an argument
and vertically aligns them at the top &ndash; which you'll want most of the
time. Compare the above outcome to the following:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Le problème est qu'une colonne de type `l` déroule son contenu sur une seule ligne, et prend sa largeur naturelle, même si la page n'est pas assez large. Pour résoudre ce problème, vous pouvez utiliser une colonne de type `p`. Celle-ci met son contenu sous forme de paragraphes avec la largeur que vous spécifiez, et aligne ces paragraphe verticalement en haut et en bas. Comparez le résultat de ce nouvel exemple avec le précédent :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
<<<<<<< HEAD
<<<<<<< HEAD
  Chien  & Le chien est un membre du genre Canis, qui fait partie des CanidÃ©s
           proches du loup, et est le carnivore terrestre le plus
           rÃ©pandu. \\
  Chat   & Le chat est une espÃ¨ce domestique de petit mammifÃ¨re carnivore. C'est
           la seule espÃ¨ce domestiquÃ©e de la famille des FÃ©lins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
=======
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  Chat   & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
Si votre tableau comporte de nombreuses colonnes du mÃªme type, vous pouvez vous
faciliter la vie en utilisant `*{nombre}{chaÃ®ne}`, qui rÃ©pÃ¨te `nombre` de fois
la `chaÃ®ne`. Ainsi, `*{6}{c}` est Ã©quivalent Ã  `cccccc`. Pour vous montrer que
cela fonctionne, voici le premier tableau de cette leÃ§on avec cette nouvelle
syntaxe :
=======
If your table has many columns of the same type it is cumbersome to put that
many column definitions in the preamble.  You can make things easier
by using `*{num}{string}`, which repeats the `string`  `num` times.
So `*{6}{c}` is equivalent to `cccccc`. To show you that it works here is the first
table of this lesson with the newly learned syntax:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Si votre tableau comporte de nombreuses colonnes du même type, vous pouvez vous faciliter la viee en utilisant `*{nombre}{chaîne}`, qui répète `nombre` de fois la `chaîne`. Ainsi, `*{6}{c}` est équivalent à `cccccc`. Pour vous montrer que cela fonctionne, voici le premier tableau de cette leçon avec cette nouvelle syntaxe :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD

## Tirer des traits entre les lignes

Un conseil avant de parler des traits (ou _filets_) : ceux-ci doivent Ãªtre
utilisÃ©s parcimonieusement dans les tableaux, et de faÃ§on gÃ©nÃ©rale, les filets
verticaux donnent un rendu peu professionnel. En fait, pour obtenir des tableaux
au look professionnel, il vaut mieux se passer des filets fournis en standard
par LaTeX, et utiliser Ã  la place le package `booktabs`. C'est pourquoi nous en
parlons en premier lieu. Dans un souci d'exhaustivitÃ©, les filets standards sont
[prÃ©sentÃ©es en approfondissement](more-08).

Le package `booktabs` propose quatre types de filets diffÃ©rents. Chacune de ces
commandes doit Ãªtre utilisÃ©e au dÃ©but d'une ligne, ou juste aprÃ¨s un autre filet.
Les trois principales commandes sont : `\toprule` (pour le haut du tableau),
`\midrule` (pour le corps du tableau) et `\bottomrule` (pour le bas du tableau) :
=======
## Adding rules (lines)
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

## Tirer des traits entre les lignes

Un conseil avant de parler des traits : ceux-ci doivent être utilisés parcimonieusement dans les tableaux, et de façon générale, les traits verticaux donnent un rendu peu professionnel. En fait, pour obtenir des  tableaux au look professionnel, il vaut mieux se passer des traits fournis en standard par LaTeX, et utiliser à la place le package `booktabs`. C'est pourquoi nous en parlons en premier lieu. Par souci d'exhaustivité, les lignes standards sont [présentées en approfondissement](more-08).

`booktabs` provides four different types of lines. Each of those commands has to
be used as the first thing in a row or following another rule.
Three of the rule commands are: `\toprule`, `\midrule`, and
`\bottomrule`. From their names the intended place of use should be clear:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

Le package `booktabs` propose quatre types de traits différents. Chacune de ces commandes doit être utilisée au début d'une ligne, ou juste après un autre trait. Les trois principales commandes sont : `\toprule` (pour le haut du tableau), `\midrule` (pour le corps du tableau) et `\bottomrule` (pour le bas du tableau) :

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
La quatriÃ¨me commande fournie par `booktabs` pour tracer des filets est
`\cmidrule`. Elle peut Ãªtre utilisÃ©e pour tracer un filet qui ne couvre pas
toute la largeur du tableau mais seulement une plage de colonnes spÃ©cifiÃ©e.
La plage de colonnes est entrÃ©e avec les numÃ©ros des colonnes :
`{`_numÃ©ro_`-`_numÃ©ro_`}`. MÃªme si vous ne voulez dessiner le filet que pour
une seule colonne, vous devez la spÃ©cifier comme une plage (avec deux numÃ©ros
identiques : `{2-2}`).
=======
The fourth rule command provided by `booktabs` is `\cmidrule`. It can be used to
draw a rule that doesn't span the entire width of the table but only a specified
column range. A column range is entered as a number span: `{`_number_`-`_number_`}`.
Even if you only want to draw the rule for a single
column you need to specify that as a range (with both numbers matching).
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
La quatrième commande fournie par `booktabs` pour tracer des traits est `\cmidrule`. Elle peut être utilisée pour tirer un trait qui ne couvre pas toute la largeur du tableau mais seulement une plage de colonnes spécifiée. La plage de colonnes est entrée comme une plage de numéros de colonnes : `{`_numéro_`-`_numéro_`}`. Même si vous ne voulez dessiner le trait que pour une seule colonne, vous devez la spécifier comme une plage (avec deux numéros identiques: `{2-2}`).
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  \cmidrule{1-2}
  cheval     & foin       & gros   \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  grenouille & mouches    & petit  \\
=======
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  frog   & flies & small  \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD

Il existe une autre fonctionnalitÃ© de `\cmidrule` qui contribue Ã  un rendu de
qualitÃ©: on peut raccourcir le filet Ã  chaque extrÃ©mitÃ© avec un argument
optionnel entre parenthÃ¨ses :
=======
There is another useful feature of `\cmidrule`. You can shorten it on either end
with an optional argument enclosed in parentheses:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======

Il existe une autre fonctionnalité de `\cmidrule` qui contribue à un rendu de qualité: on peut raccourcir le trait à chaque extrémité avec un argument optionnel entre parenthèses :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  \cmidrule{1-2}
  cheval     & foin       & gros   \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  grenouille & mouches    & petit  \\
=======
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  frog   & flies & small  \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
Vous avez sans doute devinÃ© que `r` et `l` signifient que le filet est raccourci
Ã  son extrÃ©mitÃ© droite (_**r**ight_) et  gauche (_**l**eft_), respectivement.

Parfois, un trait serait une sÃ©paration trop forte entre deux lignes, mais vous
souhaitez quand mÃªme ajouter une forme de sÃ©paration pour aider Ã  la lecture du
tableau. Dans ce cas, vous pouvez utiliser `\addlinespace` pour insÃ©rer un petit
peu plus d'espace entre les lignes.
=======
You may have guessed that `r` and `l` mean the rule is shortened on its **r**ight
and **l**eft end, respectively.

Sometimes a rule would be too much of a separation for two rows but to get
across the meaning more clearly you want to separate them by some means. In this
case you can use `\addlinespace` to insert a small skip.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Vous avez sans doute deviné que `r` et `l` signifient que le trait est raccourci à son extrémité droite (_**r**ight_) et  gauche (_**l**eft_), respectivement.

Parfois, un trait serait une séparation trop forte entre deux lignes, mais vous souhaitez quand même ajouter une forme de séparation pour aider à la lecture du tableau. Dans ce cas, vous pouvez utiliser `\addlinespace` pour insérer un petit peu plus d'espace entre les lignes.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
<<<<<<< HEAD
<<<<<<< HEAD
  Chien  & Le chien est un membre du genre Canis, qui fait partie des CanidÃ©s
           proches du loup, et est le carnivore terrestre le plus
           rÃ©pandu. \\
  \addlinespace
  Chat   & Le chat est une espÃ¨ce domestique de petit mammifÃ¨re carnivore. C'est
           la seule espÃ¨ce domestiquÃ©e de la famille des FÃ©lins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
=======
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  \addlinespace
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  \addlinespace
  Chat   & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


<<<<<<< HEAD
<<<<<<< HEAD
## Fusionner des cellules

En LaTeX, vous pouvez fusionner des cellules horizontalement en utilisant la
commande `\multicolumn`. Elle doit apparaÃ®tre en premier dans une cellule.
`\multicolumn` prend trois arguments :

1. Le nombre de cellules Ã  fusionner,
2. L'alignement de la cellule rÃ©sultante,
3. Le contenu de la cellule rÃ©sultante.

L'alignement peut contenir tout ce qui est autorisÃ© dans le prÃ©ambule d'un
tableau, mais _seulement un seul type de colonne_:
=======
## Merging cells
=======
## Fusionner des cellules
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

En LaTeX, vous pouvez fusionner des cellules horizontalement en utilisant la commande `\multicolumn`. Elle doit apparaître en premier dans une cellule. `\multicolumn` prend trois arguments :

1. Le nombre de cellules à fusionner,
2. L'alignement de la cellule résultante,
3. Le contenu de la cellule résultante.

<<<<<<< HEAD
The alignment can contain anything legal in a `tabular`'s preamble, but _only a
single column type_.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
L'alignement peut contenir tout ce qui est autorisé dans le préambule d'un tableau, mais _seulement un seul type de colonne_:
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
  snark      & \multicolumn{2}{c}{unknown} \\
=======
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD

Vous pouvez Ã©galement utiliser `\multicolumn` sur une seule cellule pour empÃªcher
l'application de ce que vous avez dÃ©fini dans le prÃ©ambule du tableau pour la
colonne actuelle.  L'exemple suivant utilise cette mÃ©thode pour centrer la ligne
d'en-tÃªte du tableau :
=======
You can also use `\multicolumn` on a single cell to prevent the
application of whatever you defined in the table preamble for the
current column.  The following uses this method to center the
table's head row:

>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======

Vous pouvez également utiliser `\multicolumn` sur une seule cellule pour empêcher l'application de ce que vous avez défini dans le préambule du tableau pour la colonne actuelle.  L'exemple suivant utilise cette méthode pour centrer la ligne d'en-tête du tableau :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Nourriture} & \multicolumn{1}{c}{Taille} \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
  snark      & \multicolumn{2}{c}{unknown} \\
=======
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Food} & \multicolumn{1}{c}{Size} \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD

La fusion verticale des cellules n'est pas prise en charge par LaTeX. En gÃ©nÃ©ral,
il suffit de laisser les cellules vides pour donner au lecteur une idÃ©e correcte
de ce que l'on veut dire, sans que les cellules s'Ã©tendent rÃ©ellement sur
plusieurs lignes.
=======
Merging cells vertically isn't supported by LaTeX.
Usually it suffices to leave cells empty to give the reader the
correct idea of what was meant without explicitly making cells span rows.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======

La fusion verticale des cellules n'est pas prise en charge par LaTeX. En général, il suffit de laisser les cellules vides pour donner au lecteur une idée correcte de ce que l'on veut dire, sans que les cellules s'étendent réellement sur plusieurs lignes.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
<<<<<<< HEAD
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Groupe    & Animal    & Taille \\
  \midrule
  herbivore & cheval    & large  \\
            & chevreuil & medium \\
            & lapin     & small  \\
  \addlinespace
  carnivore & chien     & medium \\
            & chat      & small  \\
            & lion      & large  \\
  \addlinespace
  omnivore  & corneille & small  \\
            & ours      & large  \\
            & cochon    & medium \\
=======
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Group     & Animal & Size   \\
  \midrule
  herbivore & horse  & large  \\
            & deer   & medium \\
            & rabbit & small  \\
  \addlinespace
  carnivore & dog    & medium \\
            & cat    & small  \\
            & lion   & large  \\
  \addlinespace
  omnivore  & crow   & small  \\
            & bear   & large  \\
            & pig    & medium \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


<<<<<<< HEAD
<<<<<<< HEAD
## Travaux pratiques

Utilisez le premier exemple ci-dessus pour expÃ©rimenter avec les tableaux.
Essayez diffÃ©rents alignements en utilisant les types de colonnes `l`, `c`
et `r`. Que se passe-t-il si vous avez trop peu d'Ã©lÃ©ments dans une ligne
de tableau ? Et si vous en avez trop ? Essayez la commande `\multicolumn`
pour Ã©tendre le contenu sur plusieurs colonnes.
=======
## Exercises

Use the simple table example to start experimenting with tables. Try out
different alignments using the `l`, `c` and `r` column types. What happens if
you have too few items in a table row? How about too many? Experiment with the
`\multicolumn` command to span across columns.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
## Travaux pratiques

Utilisez le premier exemple ci-dessus pour expérimenter avec les tableaux. Essayez différents alignements en utilisant les types de colonnes `l`, `c` et `r`. Que se passe-t-il si vous avez trop peu d'éléments dans une ligne de tableau ? Et si vous en avez trop ? Essayez la commande `\multicolumn` pour étendre le contenu sur plusieurs colonnes.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
title: "Tables (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Les tableaux"
---


## Tableaux simples

En LaTeX, un tableau se construit dans un environnement `tabular`. Cette leçon suppose que vous chargez le package `array`, qui ajoute des fonctionnalités aux tableaux LaTeX. Il n'est pas intégré dans le noyau LaTeX, mais c'est uniquement pour des raisons historiques et vous avez intérêt à le charger dès que vous utilisez des tableaux. Mettez donc ce qui suit dans votre préambule et nous sommes prêts à commencer :

```latex
\usepackage{array}
```
{: .noedit :}

Pour composer un tableau dans un environnement `tabular`, nous devons indiquer à LaTeX combien de colonnes seront nécessaires et comment elles doivent être alignées. Cela se fait dans un argument obligatoire de l'environnement &ndash; souvent appelé _préambule_ du tableau &ndash; dans lequel vous spécifiez les colonnes en utilisant des noms à une lettre (les _preamble-tokens_). Les types de colonnes disponibles sont les suivants :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type       | description |
| ---        |:-- |
| `l`        | colonne alignée à gauche (_**l**eft_). |
| `c`        | colonne centrée (_**c**entered_). |
| `r`        | colonne alignée à droite (_**r**ight_). |
| `p{width}` | colonne de largeur fixée, égale à `width`; le texte sera automatiquement justifié, avec des saurs de lignes si nécessaire. |
| `m{width}` | comme `p`, mais centré verticalement par rapport au reste de la ligne. |
| `b{width}` | comme `p`, mais positionné en bas par rapport au reste de la ligne. |
| `w{align}{width}` | fixe la largeur de la colonne à `width`, mais le contenu peut déborder s'il est trop grand. L'alignement horizontal `align` peut être `l`, `c`, or `r`, comme décrit ci-dessus. |
| `W{align}{width}` | comme `w`, mais vous aurez un avertissement en ca de débordement. |


En outre, il existe quelques autres _preamble-tokens_ qui ne définissent pas une colonne mais s'avèrent utiles :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type | description |
| ---  | :-- |
| `*{num}{string}` | répète `num`  fois la chaîne `string` dans le préambule. Permet de définir plusieurs colonnes identiques. |
| `>{decl}` | ajoute la chaîne `decl` devant le contenu de chaque cellule de la colonne qui suit (permet par exemple de changer la police de cette colonne). |
| `<{decl}` | ajoute la chaîne `decl` après le contenu de chaque cellule de la colonne qui précède. |
| <span>`|`</span>  | trace un trait vertical. |
| `@{decl}` | remplace l'espace entre deux colonne par la chaîne `decl`. |
| `!{decl}` | ajout la chaîne `decl` au centre de l'espace entre deux colonnes. |

Ces deux tableaux répertorient tous les types de colonnes disponibles avec LaTeX et le package `array`. Quelques types de colonnes supplémentaires, provenant d'autres paquets, sont présentés [en approfondissement](more-08) de cette leçon.

Les colonnes `l`, `c` et `r` auront la largeur naturelle de la cellule la plus large. Chaque colonne doit être déclarée, donc si vous voulez trois colonnes centrées, vous utiliserez `ccc` dans le préambule du tableau. Les espaces sont ignorées, donc `c c c` donne la même chose.

Dans le corps du tableau, les colonnes sont séparées par une esperluette `&` et une nouvelle ligne est commencée avec `\\`. Il n'y a pas besoin de déclarer à l'avance le nombre de lignes du tableau.

Nous avons maintenant tout ce qu'il faut pour construire notre première table. Dans le code suivant, les `&` et `\\` sont alignés. Ce n'est pas nécessaire en LaTeX, mais ça aide à lire le code source et à trouver les erreurs éventuelles.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Si une colonne de tableau contient beaucoup de texte, vous aurez du mal à avoir un beau résultat avec seulement `l`, `c` et `r`. Regardez l'exemple suivant :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Description \\
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  Cat    & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Le problème est qu'une colonne de type `l` déroule son contenu sur une seule ligne, et prend sa largeur naturelle, même si la page n'est pas assez large. Pour résoudre ce problème, vous pouvez utiliser une colonne de type `p`. Celle-ci met son contenu sous forme de paragraphes avec la largeur que vous spécifiez, et aligne ces paragraphe verticalement en haut et en bas. Comparez le résultat de ce nouvel exemple avec le précédent :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  Chat   & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Si votre tableau comporte de nombreuses colonnes du même type, vous pouvez vous faciliter la viee en utilisant `*{nombre}{chaîne}`, qui répète `nombre` de fois la `chaîne`. Ainsi, `*{6}{c}` est équivalent à `cccccc`. Pour vous montrer que cela fonctionne, voici le premier tableau de cette leçon avec cette nouvelle syntaxe :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Tirer des traits entre les lignes

Un conseil avant de parler des traits : ceux-ci doivent être utilisés parcimonieusement dans les tableaux, et de façon générale, les traits verticaux donnent un rendu peu professionnel. En fait, pour obtenir des  tableaux au look professionnel, il vaut mieux se passer des traits fournis en standard par LaTeX, et utiliser à la place le package `booktabs`. C'est pourquoi nous en parlons en premier lieu. Par souci d'exhaustivité, les lignes standards sont [présentées en approfondissement](more-08).

`booktabs` provides four different types of lines. Each of those commands has to
be used as the first thing in a row or following another rule.
Three of the rule commands are: `\toprule`, `\midrule`, and
`\bottomrule`. From their names the intended place of use should be clear:

Le package `booktabs` propose quatre types de traits différents. Chacune de ces commandes doit être utilisée au début d'une ligne, ou juste après un autre trait. Les trois principales commandes sont : `\toprule` (pour le haut du tableau), `\midrule` (pour le corps du tableau) et `\bottomrule` (pour le bas du tableau) :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

La quatrième commande fournie par `booktabs` pour tracer des traits est `\cmidrule`. Elle peut être utilisée pour tirer un trait qui ne couvre pas toute la largeur du tableau mais seulement une plage de colonnes spécifiée. La plage de colonnes est entrée comme une plage de numéros de colonnes : `{`_numéro_`-`_numéro_`}`. Même si vous ne voulez dessiner le trait que pour une seule colonne, vous devez la spécifier comme une plage (avec deux numéros identiques: `{2-2}`).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


Il existe une autre fonctionnalité de `\cmidrule` qui contribue à un rendu de qualité: on peut raccourcir le trait à chaque extrémité avec un argument optionnel entre parenthèses :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Vous avez sans doute deviné que `r` et `l` signifient que le trait est raccourci à son extrémité droite (_**r**ight_) et  gauche (_**l**eft_), respectivement.

Parfois, un trait serait une séparation trop forte entre deux lignes, mais vous souhaitez quand même ajouter une forme de séparation pour aider à la lecture du tableau. Dans ce cas, vous pouvez utiliser `\addlinespace` pour insérer un petit peu plus d'espace entre les lignes.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  \addlinespace
  Chat   & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Fusionner des cellules

En LaTeX, vous pouvez fusionner des cellules horizontalement en utilisant la commande `\multicolumn`. Elle doit apparaître en premier dans une cellule. `\multicolumn` prend trois arguments :

1. Le nombre de cellules à fusionner,
2. L'alignement de la cellule résultante,
3. Le contenu de la cellule résultante.

L'alignement peut contenir tout ce qui est autorisé dans le préambule d'un tableau, mais _seulement un seul type de colonne_:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


Vous pouvez également utiliser `\multicolumn` sur une seule cellule pour empêcher l'application de ce que vous avez défini dans le préambule du tableau pour la colonne actuelle.  L'exemple suivant utilise cette méthode pour centrer la ligne d'en-tête du tableau :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Food} & \multicolumn{1}{c}{Size} \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


La fusion verticale des cellules n'est pas prise en charge par LaTeX. En général, il suffit de laisser les cellules vides pour donner au lecteur une idée correcte de ce que l'on veut dire, sans que les cellules s'étendent réellement sur plusieurs lignes.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Group     & Animal & Size   \\
  \midrule
  herbivore & horse  & large  \\
            & deer   & medium \\
            & rabbit & small  \\
  \addlinespace
  carnivore & dog    & medium \\
            & cat    & small  \\
            & lion   & large  \\
  \addlinespace
  omnivore  & crow   & small  \\
            & bear   & large  \\
            & pig    & medium \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Travaux pratiques

Utilisez le premier exemple ci-dessus pour expérimenter avec les tableaux. Essayez différents alignements en utilisant les types de colonnes `l`, `c` et `r`. Que se passe-t-il si vous avez trop peu d'éléments dans une ligne de tableau ? Et si vous en avez trop ? Essayez la commande `\multicolumn` pour étendre le contenu sur plusieurs colonnes.
>>>>>>> 42e0f333... Add lessons 7, 8 and 9.
=======
title: "Tables (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> db557e12... Revert lesson 8 to English.
=======
title: "Les tableaux"
---

## Tableaux simples

En LaTeX, un tableau se construit dans un environnement `tabular`. Cette leÃ§on
suppose que vous chargez le package `array`, qui ajoute des fonctionnalitÃ©s aux
tableaux LaTeX. Il n'est pas intÃ©grÃ© dans le noyau LaTeX, mais c'est uniquement
pour des raisons historiques et vous avez intÃ©rÃªt Ã  le charger dÃ¨s que vous
utilisez des tableaux. Mettez donc ce qui suit dans votre prÃ©ambule et nous
sommes prÃªts Ã  commencer :

```latex
\usepackage{array}
```
{: .noedit :}

Pour composer un tableau dans un environnement `tabular`, nous devons indiquer
Ã  LaTeX combien de colonnes seront nÃ©cessaires et comment elles doivent Ãªtre
alignÃ©es. Cela se fait dans un argument obligatoire de l'environnement &ndash;
souvent appelÃ© _prÃ©ambule_ du tableau &ndash; dans lequel vous spÃ©cifiez les
colonnes en utilisant des noms Ã  une lettre (les _preamble-tokens_). Les types
de colonnes disponibles sont les suivants :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type       | description |
| ---        |:-- |
| `l`        | colonne alignÃ©e Ã  gauche (_**l**eft_). |
| `c`        | colonne centrÃ©e (_**c**entered_). |
| `r`        | colonne alignÃ©e Ã  droite (_**r**ight_). |
| `p{width}` | colonne de largeur fixÃ©e, Ã©gale Ã  `width` ; le texte sera automatiquement justifiÃ©, avec des saurs de lignes si nÃ©cessaire. |
| `m{width}` | comme `p`, mais centrÃ© verticalement par rapport au reste de la ligne. |
| `b{width}` | comme `p`, mais positionnÃ© en bas par rapport au reste de la ligne. |
| `w{align}{width}` | fixe la largeur de la colonne Ã  `width`, mais le contenu peut dÃ©border s'il est trop grand. L'alignement horizontal `align` peut Ãªtre `l`, `c`, or `r`, comme dÃ©crit ci-dessus. |
| `W{align}{width}` | comme `w`, mais vous aurez un avertissement en ca de dÃ©bordement. |


En outre, il existe quelques autres _preamble-tokens_ qui ne dÃ©finissent pas une
colonne mais s'avÃ¨rent utiles :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type | description |
| ---  | :-- |
| `*{num}{string}` | rÃ©pÃ¨te `num` fois la chaÃ®ne `string` dans le prÃ©ambule. Permet de dÃ©finir plusieurs colonnes identiques. |
| `>{decl}` | ajoute la chaÃ®ne `decl` devant le contenu de chaque cellule de la colonne qui suit (permet par exemple de changer la police de cette colonne). |
| `<{decl}` | ajoute la chaÃ®ne `decl` aprÃ¨s le contenu de chaque cellule de la colonne qui prÃ©cÃ¨de. |
| <span>`|`</span>  | trace un trait vertical. |
| `@{decl}` | remplace l'espace entre deux colonne par la chaÃ®ne `decl`. |
| `!{decl}` | ajout la chaÃ®ne `decl` au centre de l'espace entre deux colonnes. |

Ces deux tableaux rÃ©pertorient tous les types de colonnes disponibles avec LaTeX
et le package `array`. Quelques types de colonnes supplÃ©mentaires, provenant
d'autres packages, sont prÃ©sentÃ©s [en approfondissement](more-08) de cette leÃ§on.

Les colonnes `l`, `c` et `r` auront la largeur naturelle de la cellule la plus
large. Chaque colonne doit Ãªtre dÃ©clarÃ©e, donc si vous voulez trois colonnes
centrÃ©es, vous utiliserez `ccc` dans le prÃ©ambule du tableau. Les espaces sont
ignorÃ©es, donc `c c c` donne la mÃªme chose.

Dans le corps du tableau, les colonnes sont sÃ©parÃ©es par une esperluette `&` et
une nouvelle ligne est commencÃ©e avec `\\`. Il n'y a pas besoin de dÃ©clarer Ã 
l'avance le nombre de lignes du tableau.

Nous avons maintenant tout ce qu'il faut pour construire notre premiÃ¨re table.
Dans le code suivant, les `&` et `\\` sont alignÃ©s. Ce n'est pas nÃ©cessaire en
LaTeX, mais Ã§a aide Ã  lire le code source et Ã  trouver les erreurs Ã©ventuelles.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Si une colonne de tableau contient beaucoup de texte, vous aurez du mal Ã  avoir
un beau rÃ©sultat avec seulement `l`, `c` et `r`. Regardez l'exemple suivant :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Description \\
  Chien  & Le chien est un membre du genre Canis, qui fait partie des CanidÃ©s
           proches du loup, et est le carnivore terrestre le plus
           rÃ©pandu. \\
  Cat    & Le chat est une espÃ¨ce domestique de petit mammifÃ¨re carnivore. C'est
           la seule espÃ¨ce domestiquÃ©e de la famille des FÃ©lins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Le problÃ¨me est qu'une colonne de type `l` dÃ©roule son contenu sur une seule
ligne, et prend sa largeur naturelle, mÃªme si la page n'est pas assez large.
Pour rÃ©soudre ce problÃ¨me, vous pouvez utiliser une colonne de type `p`.
Celle-ci met son contenu sous forme de paragraphes avec la largeur que vous
spÃ©cifiez, et aligne ces paragraphe verticalement en haut et en bas. Comparez
le rÃ©sultat de ce nouvel exemple avec le prÃ©cÃ©dent :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
  Chien  & Le chien est un membre du genre Canis, qui fait partie des CanidÃ©s
           proches du loup, et est le carnivore terrestre le plus
           rÃ©pandu. \\
  Chat   & Le chat est une espÃ¨ce domestique de petit mammifÃ¨re carnivore. C'est
           la seule espÃ¨ce domestiquÃ©e de la famille des FÃ©lins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Si votre tableau comporte de nombreuses colonnes du mÃªme type, vous pouvez vous
faciliter la viee en utilisant `*{nombre}{chaÃ®ne}`, qui rÃ©pÃ¨te `nombre` de fois
la `chaÃ®ne`. Ainsi, `*{6}{c}` est Ã©quivalent Ã  `cccccc`. Pour vous montrer que
cela fonctionne, voici le premier tableau de cette leÃ§on avec cette nouvelle
syntaxe :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Tirer des traits entre les lignes

Un conseil avant de parler des traits : ceux-ci doivent Ãªtre utilisÃ©s
parcimonieusement dans les tableaux, et de faÃ§on gÃ©nÃ©rale, les traits verticaux
donnent un rendu peu professionnel. En fait, pour obtenir des tableaux au look
professionnel, il vaut mieux se passer des traits fournis en standard par LaTeX,
et utiliser Ã  la place le package `booktabs`. C'est pourquoi nous en parlons en
premier lieu. Par souci d'exhaustivitÃ©, les lignes standards sont
[prÃ©sentÃ©es en approfondissement](more-08).

Le package `booktabs` propose quatre types de traits diffÃ©rents. Chacune de ces
commandes doit Ãªtre utilisÃ©e au dÃ©but d'une ligne, ou juste aprÃ¨s un autre trait.
Les trois principales commandes sont : `\toprule` (pour le haut du tableau),
`\midrule` (pour le corps du tableau) et `\bottomrule` (pour le bas du tableau) :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

La quatriÃ¨me commande fournie par `booktabs` pour tracer des traits est
`\cmidrule`. Elle peut Ãªtre utilisÃ©e pour tirer un trait qui ne couvre pas toute
la largeur du tableau mais seulement une plage de colonnes spÃ©cifiÃ©e. La plage
de colonnes est entrÃ©e comme une plage de numÃ©ros de colonnes :
`{`_numÃ©ro_`-`_numÃ©ro_`}`. MÃªme si vous ne voulez dessiner le trait que pour une
seule colonne, vous devez la spÃ©cifier comme une plage (avec deux numÃ©ros
identiques : `{2-2}`).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  \cmidrule{1-2}
  cheval     & foin       & gros   \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  grenouille & mouches    & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


Il existe une autre fonctionnalitÃ© de `\cmidrule` qui contribue Ã  un rendu de
qualitÃ©: on peut raccourcir le trait Ã  chaque extrÃ©mitÃ© avec un argument
optionnel entre parenthÃ¨ses :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  \cmidrule{1-2}
  cheval     & foin       & gros   \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  grenouille & mouches    & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Vous avez sans doute devinÃ© que `r` et `l` signifient que le trait est raccourci
Ã  son extrÃ©mitÃ© droite (_**r**ight_) et  gauche (_**l**eft_), respectivement.

Parfois, un trait serait une sÃ©paration trop forte entre deux lignes, mais vous
souhaitez quand mÃªme ajouter une forme de sÃ©paration pour aider Ã  la lecture du
tableau. Dans ce cas, vous pouvez utiliser `\addlinespace` pour insÃ©rer un petit
peu plus d'espace entre les lignes.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
  Chien  & Le chien est un membre du genre Canis, qui fait partie des CanidÃ©s
           proches du loup, et est le carnivore terrestre le plus
           rÃ©pandu. \\
  \addlinespace
  Chat   & Le chat est une espÃ¨ce domestique de petit mammifÃ¨re carnivore. C'est
           la seule espÃ¨ce domestiquÃ©e de la famille des FÃ©lins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Fusionner des cellules

En LaTeX, vous pouvez fusionner des cellules horizontalement en utilisant la
commande `\multicolumn`. Elle doit apparaÃ®tre en premier dans une cellule.
`\multicolumn` prend trois arguments :

1. Le nombre de cellules Ã  fusionner,
2. L'alignement de la cellule rÃ©sultante,
3. Le contenu de la cellule rÃ©sultante.

L'alignement peut contenir tout ce qui est autorisÃ© dans le prÃ©ambule d'un
tableau, mais _seulement un seul type de colonne_:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
  snark      & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


Vous pouvez Ã©galement utiliser `\multicolumn` sur une seule cellule pour empÃªcher
l'application de ce que vous avez dÃ©fini dans le prÃ©ambule du tableau pour la
colonne actuelle.  L'exemple suivant utilise cette mÃ©thode pour centrer la ligne
d'en-tÃªte du tableau :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Nourriture} & \multicolumn{1}{c}{Taille} \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
  snark      & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


La fusion verticale des cellules n'est pas prise en charge par LaTeX. En gÃ©nÃ©ral,
il suffit de laisser les cellules vides pour donner au lecteur une idÃ©e correcte
de ce que l'on veut dire, sans que les cellules s'Ã©tendent rÃ©ellement sur
plusieurs lignes.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Groupe    & Animal    & Taille \\
  \midrule
  herbivore & cheval    & large  \\
            & chevreuil & medium \\
            & lapin     & small  \\
  \addlinespace
  carnivore & chien     & medium \\
            & chat      & small  \\
            & lion      & large  \\
  \addlinespace
  omnivore  & corneille & small  \\
            & ours      & large  \\
            & cochon    & medium \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Travaux pratiques

<<<<<<< HEAD
<<<<<<< HEAD
Utilisez le premier exemple ci-dessus pour expérimenter avec les tableaux. Essayez différents alignements en utilisant les types de colonnes `l`, `c` et `r`. Que se passe-t-il si vous avez trop peu d'éléments dans une ligne de tableau ? Et si vous en avez trop ? Essayez la commande `\multicolumn` pour étendre le contenu sur plusieurs colonnes.
>>>>>>> 565f1adb... Add lesson 8.
=======
Utilisez le premier exemple ci-dessus pour expÃ©rimenter avec les tableaux. Essayez diffÃ©rents alignements en utilisant les types de colonnes `l`, `c` et `r`. Que se passe-t-il si vous avez trop peu d'Ã©lÃ©ments dans une ligne de tableau ? Et si vous en avez trop ? Essayez la commande `\multicolumn` pour Ã©tendre le contenu sur plusieurs colonnes.
>>>>>>> d297355f... Encoding of lesson 8 in UTF-8.
=======
Utilisez le premier exemple ci-dessus pour expÃ©rimenter avec les tableaux.
Essayez diffÃ©rents alignements en utilisant les types de colonnes `l`, `c`
et `r`. Que se passe-t-il si vous avez trop peu d'Ã©lÃ©ments dans une ligne
de tableau ? Et si vous en avez trop ? Essayez la commande `\multicolumn`
pour Ã©tendre le contenu sur plusieurs colonnes.
>>>>>>> c0850bfd... Translated some more examples. Fixed typos.
