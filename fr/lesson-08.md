---
<<<<<<< HEAD
title: "Les tableaux"
---

## Tableaux simples

En LaTeX, un tableau se construit dans un environnement `tabular`. Cette leçon
suppose que vous chargez le package `array`, qui ajoute des fonctionnalités aux
tableaux de base de LaTeX. Il n'est pas intégré dans le noyau LaTeX, mais c'est
uniquement pour des raisons historiques et vous avez intérêt à le charger dès
que vous utilisez des tableaux. Mettez donc ce qui suit dans votre préambule et
nous serons prêts à commencer :
=======
title: "Tables"
---


## Basic tables

Tables in LaTeX are set using the `tabular` environment. This lesson will assume
you load the `array` package, which adds more functionality to LaTeX tables, and
which is not built into the LaTeX kernel only for historic reasons. So put the
following in your preamble and we're good to go:

>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\usepackage{array}
```
{: .noedit :}

<<<<<<< HEAD
Pour composer un tableau dans un environnement `tabular`, nous devons indiquer
à LaTeX combien de colonnes seront nécessaires et comment elles doivent être
alignées. Cela se fait dans un argument obligatoire de l'environnement &ndash;
souvent appelé _préambule_ du tableau &ndash; dans lequel vous spécifiez les
colonnes en utilisant des noms à une lettre (les _preamble-tokens_). Les types
de colonnes disponibles sont les suivants :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type       | description |
| ---        |:-- |
| `l`        | colonne alignée à gauche (_**l**eft_). |
| `c`        | colonne centrée (_**c**entered_). |
| `r`        | colonne alignée à droite (_**r**ight_). |
| `p{width}` | colonne de largeur fixée, égale à `width` ; le texte sera automatiquement justifié, avec des sauts de lignes si nécessaire. |
| `m{width}` | comme `p`, mais centré verticalement par rapport au reste de la ligne (_**m**iddle_). |
| `b{width}` | comme `p`, mais positionné en bas par rapport au reste de la ligne (_**b**ottom_). |
| `w{align}{width}` | fixe la largeur de la colonne à `width`, mais le contenu peut déborder s'il est trop grand. L'alignement horizontal `align` peut être `l`, `c`, or `r`, comme décrit ci-dessus. |
| `W{align}{width}` | comme `w`, mais vous aurez un avertissement en cas de débordement. |


En outre, il existe quelques autres _preamble-tokens_ qui ne définissent pas une
colonne mais s'avèrent utiles :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type | description |
| ---  | :-- |
| `*{num}{string}` | répète `num` fois la chaîne `string` dans le préambule. Permet de définir plusieurs colonnes identiques. |
| `>{decl}` | ajoute la chaîne `decl` devant le contenu de chaque cellule de la colonne qui suit (permet par exemple de changer la police de cette colonne). |
| `<{decl}` | ajoute la chaîne `decl` après le contenu de chaque cellule de la colonne qui précède. |
| <span>`|`</span>  | trace un trait vertical. |
| `@{decl}` | remplace l'espace entre deux colonne par la chaîne `decl`. |
| `!{decl}` | ajout la chaîne `decl` au centre de l'espace entre deux colonnes. |

Ces deux tableaux répertorient tous les types de colonnes disponibles avec LaTeX
et le package `array`. Quelques types de colonnes supplémentaires, provenant
d'autres packages, sont présentés [en approfondissement](more-08) de cette leçon.

Les colonnes `l`, `c` et `r` auront la largeur naturelle de la cellule la plus
large. Chaque colonne doit être déclarée, donc si vous voulez trois colonnes
centrées, vous utiliserez `ccc` dans le préambule du tableau. Les espaces sont
ignorées, et `c c c` donne la même chose.

Dans le corps du tableau, les colonnes sont séparées par une esperluette `&` et
une nouvelle ligne est commencée avec `\\`. Il n'y a pas besoin de déclarer à
l'avance le nombre de lignes du tableau.

Nous avons maintenant tout ce qu'il faut pour construire notre premier tableau.
Dans le code suivant, les `&` et `\\` sont alignés. Ce n'est pas nécessaire en
LaTeX, mais ça aide à lire le code source et à débusquer les erreurs
éventuelles.
=======
In order to typeset a `tabular` we have to tell LaTeX how many columns will be
needed and how they should be aligned. This is done in a mandatory argument
&ndash; often referred to as the table preamble &ndash; to the `tabular`
environment, in which you specify the columns by using single-letter names,
called preamble-tokens. The available column types are:

<!-- don't line wrap this table, markdown seems to not support this -->

| type       | description |
| ---        |:-- |
| `l`        | left aligned column |
| `c`        | centered column |
| `r`        | right aligned column |
| `p{width}` | a column with fixed width `width`; the text will be automatically line wrapped and fully justified |
| `m{width}` | like `p`, but vertically centered compared to the rest of the row |
| `b{width}` | like `p`, but bottom aligned |
| `w{align}{width}` | prints the contents with a fixed `width`, silently overprinting if things get larger. You can choose the horizontal alignment using `l`, `c`, or `r`. |
| `W{align}{width}` | like `w`, but this will issue an overfull box warning if things get too wide. |

In addition, a few other preamble-tokens are available which don't define a
column but might be useful as well:

<!-- don't line wrap this table, markdown seems to not support this -->

| type | description |
| ---  | :-- |
| `*{num}{string}` | repeats `string` for `num` times in the preamble. With this you can define multiple identical columns. |
| `>{decl}` | this will put `decl` before the contents of every cell in the following column (this is useful, e.g., to set a different font for this column) |
| `<{decl}` | this will put `decl` after the contents of each cell in the previous column |
| <span>`|`</span>  | add a vertical rule |
| `@{decl}` | replace the space between two columns with `decl` |
| `!{decl}` | add `decl` in the center of the existing space |

These two tables list all the available column types from LaTeX and the `array`
package. A few additional column types, from different packages, are presented
in the [further details page](more-08) for this lesson.

The columns `l`, `c`, and `r` will have the natural width of the widest cell.
Each column has to be declared, so if you want three centered columns, you'd use
`ccc` in the table preamble. Spaces are ignored, so `c c c` is the same.

In a table body columns are separated using an ampersand `&` and a new row is
started using `\\`.

We have everything we need for our first table. In the following code the
`&` and `\\` are aligned. This isn't necessary in LaTeX, but helps reading the
source.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
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
Si une colonne de tableau contient beaucoup de texte, vous aurez du mal à avoir
un joli résultat avec seulement `l`, `c` et `r`. Regardez l'exemple suivant :
=======
If a table column contains a lot of text you will have issues to get that
right with only `l`, `c`, and `r`. See what happens in the following example:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Description \\
<<<<<<< HEAD
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  Cat    & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
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
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
Le problème est qu'une colonne de type `l` déroule son contenu sur une seule
ligne, et prend sa largeur naturelle, même si la page n'est pas assez large.
Pour résoudre ce problème, vous pouvez utiliser une colonne de type `p`.
Celle-ci met son contenu sous forme d'un paragraphe avec la largeur que vous
spécifiez, et aligne ce paragraphe verticalement en haut et en bas. Comparez
le résultat de ce nouvel exemple avec le précédent :
=======
The issue is that the `l` type column typesets its contents in a single row at
its natural width, even if there is a page
border in the way. To overcome this you can use the `p` column. This
typesets its contents as paragraphs with the width you specify as an argument
and vertically aligns them at the top &ndash; which you'll want most of the
time. Compare the above outcome to the following:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
<<<<<<< HEAD
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  Chat   & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
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
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
Si votre tableau comporte de nombreuses colonnes du même type, vous pouvez vous
faciliter la vie en utilisant `*{nombre}{chaîne}`, qui répète `nombre` de fois
la `chaîne`. Ainsi, `*{6}{c}` est équivalent à `cccccc`. Pour vous montrer que
cela fonctionne, voici le premier tableau de cette leçon avec cette nouvelle
syntaxe :
=======
If your table has many columns of the same type it is cumbersome to put that
many column definitions in the preamble.  You can make things easier
by using `*{num}{string}`, which repeats the `string`  `num` times.
So `*{6}{c}` is equivalent to `cccccc`. To show you that it works here is the first
table of this lesson with the newly learned syntax:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
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

## Tirer des traits entre les lignes

Un conseil avant de parler des traits (ou _filets_) : ceux-ci doivent être
utilisés parcimonieusement dans les tableaux, et de façon générale, les filets
verticaux donnent un rendu peu professionnel. En fait, pour obtenir des tableaux
au look professionnel, il vaut mieux se passer des filets fournis en standard
par LaTeX, et utiliser à la place le package `booktabs`. C'est pourquoi nous en
parlons en premier lieu. Dans un souci d'exhaustivité, les filets standards sont
[présentées en approfondissement](more-08).

Le package `booktabs` propose quatre types de filets différents. Chacune de ces
commandes doit être utilisée au début d'une ligne, ou juste après un autre filet.
Les trois principales commandes sont : `\toprule` (pour le haut du tableau),
`\midrule` (pour le corps du tableau) et `\bottomrule` (pour le bas du tableau) :
=======
## Adding rules (lines)

A word of advice prior to introducing rules; lines should be used really
sparsely in tables, and normally vertical ones look unprofessional. In fact,
for professional tables you shouldn't use any of the standard lines; instead you
should get familiar with the facilities of the `booktabs` package, which is why
it is covered here first. For the sake of completeness the standard
lines are shown in the [more-info](more-08) page.

`booktabs` provides four different types of lines. Each of those commands has to
be used as the first thing in a row or following another rule.
Three of the rule commands are: `\toprule`, `\midrule`, and
`\bottomrule`. From their names the intended place of use should be clear:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
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
La quatrième commande fournie par `booktabs` pour tracer des filets est
`\cmidrule`. Elle peut être utilisée pour tracer un filet qui ne couvre pas
toute la largeur du tableau mais seulement une plage de colonnes spécifiée.
La plage de colonnes est entrée avec les numéros des colonnes :
`{`_numéro_`-`_numéro_`}`. Même si vous ne voulez dessiner le filet que pour
une seule colonne, vous devez la spécifier comme une plage (avec deux numéros
identiques : `{2-2}`).
=======
The fourth rule command provided by `booktabs` is `\cmidrule`. It can be used to
draw a rule that doesn't span the entire width of the table but only a specified
column range. A column range is entered as a number span: `{`_number_`-`_number_`}`.
Even if you only want to draw the rule for a single
column you need to specify that as a range (with both numbers matching).
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
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

Il existe une autre fonctionnalité de `\cmidrule` qui contribue à un rendu de
qualité: on peut raccourcir le filet à chaque extrémité avec un argument
optionnel entre parenthèses :
=======
There is another useful feature of `\cmidrule`. You can shorten it on either end
with an optional argument enclosed in parentheses:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
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
Vous avez sans doute deviné que `r` et `l` signifient que le filet est raccourci
à son extrémité droite (_**r**ight_) et  gauche (_**l**eft_), respectivement.

Parfois, un trait serait une séparation trop forte entre deux lignes, mais vous
souhaitez quand même ajouter une forme de séparation pour aider à la lecture du
tableau. Dans ce cas, vous pouvez utiliser `\addlinespace` pour insérer un petit
peu plus d'espace entre les lignes.
=======
You may have guessed that `r` and `l` mean the rule is shortened on its **r**ight
and **l**eft end, respectively.

Sometimes a rule would be too much of a separation for two rows but to get
across the meaning more clearly you want to separate them by some means. In this
case you can use `\addlinespace` to insert a small skip.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
\usepackage[T1]{fontenc}
=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
<<<<<<< HEAD
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  \addlinespace
  Chat   & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
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
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


<<<<<<< HEAD
## Fusionner des cellules

En LaTeX, vous pouvez fusionner des cellules horizontalement en utilisant la
commande `\multicolumn`. Elle doit apparaître en premier dans une cellule.
`\multicolumn` prend trois arguments :

1. Le nombre de cellules à fusionner,
2. L'alignement de la cellule résultante,
3. Le contenu de la cellule résultante.

L'alignement peut contenir tout ce qui est autorisé dans le préambule d'un
tableau, mais _seulement un seul type de colonne_:
=======
## Merging cells

In LaTeX you can merge cells horizontally by using the `\multicolumn` command. It
has to be used as the first thing in a cell. `\multicolumn` takes three
arguments:

1. The number of cells which should be merged
2. The alignment of the merged cell
3. The contents of the merged cell

The alignment can contain anything legal in a `tabular`'s preamble, but _only a
single column type_.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
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

Vous pouvez également utiliser `\multicolumn` sur une seule cellule pour empêcher
l'application de ce que vous avez défini dans le préambule du tableau pour la
colonne actuelle.  L'exemple suivant utilise cette méthode pour centrer la ligne
d'en-tête du tableau :
=======
You can also use `\multicolumn` on a single cell to prevent the
application of whatever you defined in the table preamble for the
current column.  The following uses this method to center the
table's head row:

>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
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

La fusion verticale des cellules n'est pas prise en charge par LaTeX. En général,
il suffit de laisser les cellules vides pour donner au lecteur une idée correcte
de ce que l'on veut dire, sans que les cellules s'étendent réellement sur
plusieurs lignes.
=======
Merging cells vertically isn't supported by LaTeX.
Usually it suffices to leave cells empty to give the reader the
correct idea of what was meant without explicitly making cells span rows.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
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
## Travaux pratiques

Utilisez le premier exemple ci-dessus pour expérimenter avec les tableaux.
Essayez différents alignements en utilisant les types de colonnes `l`, `c`
et `r`. Que se passe-t-il si vous avez trop peu d'éléments dans une ligne
de tableau ? Et si vous en avez trop ? Essayez la commande `\multicolumn`
pour étendre le contenu sur plusieurs colonnes.
=======
## Exercises

Use the simple table example to start experimenting with tables. Try out
different alignments using the `l`, `c` and `r` column types. What happens if
you have too few items in a table row? How about too many? Experiment with the
`\multicolumn` command to span across columns.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
