---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Les tables : pour aller plus loin"
---

## D'autres options dans le préambule des tableaux

La leçon principale n'ayant pas couvert tous les options disponibles pour les
en-têtes de tableaux, quelques autres sont expliquées ici avec des exemples.
N'hésitez pas à revoir le début de la leçon pour avoir en tête toutes les
possibilités existantes. Les courtes descriptions fournies devraient suffire
à comprendre ce que font les différents types de colonnes `m`, `b`, `w`, et
`W` après que vous ayez compris `l`, `c`, `r`, et `p`. Si ce n'est pas le cas,
utilisez les exemples pour expérimenter un peu. Il restera ensuite à voir les
autres « _preamble-tokens_ » disponibles, bien pratiques : `>`, `<`, `@`, `!` et `|`.


### Mettre en forme une colonne

`>` et `<` peuvent être utilisés pour insérer des éléments avant et après le
contenu de chaque cellule d'une colonne. Vous pouvez donc les utiliser pour
_ajouter des commandes_ qui changent la mise en forme de la colonne. Par exemple,
ceci mettra en italique la première colonne et insérera un deux-points après :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Tables"
=======
title: "Les tables: pour aller plus loin"
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
---

## D'autres options dans le préambule des tableaux

La leçon n'ayant pas couvert tous les options disponibles pour les en-têtes de tableaux, quelques autres sont expliqués ici avec des exemples.  N'hésitez pas à revoir le début de la leçon pour avoir en tête toutes les possibilités existantes. Les courtes descriptions fournies devraient suffire à comprendre ce que font les différents types de colonnes `m`, `b`, `w`, et `W` après que vous ayez compris `l`, `c`, `r`, et `p`. Si ce n'est pas le cas, utilisez les exemples pour expérimenter un peu. Il restera ensuite à voir les autres « _preamble-tokens_ » disponibles, bien pratiques : `>`, `<`, `@`, `!` et `|`.


### Mettre en forme une colonne

<<<<<<< HEAD
Since `>` and `<` can be used to put things before and after the cell contents
of a column, you can use these to add commands which affect the look
of a column. For instance, if you want to italicize the first column and put a
colon after it, you can do the following:
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
`>` et `<` peuvent être utilisées pour insérer des éléments avant et après le contenu de chaque cellule d'une colonne. Vous pouvez donc les utiliser pour _ajouter des commandes_ qui changent la mise en forme de la colonne. Par exemple, ceci mettra en italique la première colonne et insérera un deux-points après :
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
<<<<<<< HEAD
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
`\itshape` met tout le texte qui suit en italique, mais son effet est limité à
la cellule du tableau. Nous examinerons le formatage manuel des polices
[dans quelques leçons](lesson-11).

Souvent la première ligne d'un tableau est considérée comme un en-tête, et mise
en forme différemment du reste. Pour obtenir ce résultat, on peut utiliser
`\multicolumn`. Pensez aussi que cette commande peut être utilisée pour modifier
l'alignement d'une seule cellule ici :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
`\itshape` makes all the following text italic, but its effect is 'contained'
by the table cell. We will look at manual font formatting [in a few lessons
time](lesson-11).

You may want the first cell not to be affected
because it is the table head. Here `\multicolumn` may be used. Remember that
it can be used to change a single cell's alignment as shown below.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
`\itshape` met tout le texte qui suit en italique, mais son effet est limité à la cellule du tableau. Nous examinerons le formatage manuel des polices [dans quelques leçons](lesson-11).

Souvent la première ligne d'un tableau est considérée comme un en-tête, et mise en forme différemment du reste. Pour obtenir ce résultat, on peut utiliser `\multicolumn`. Pensez aussi que cette commande peut être utilisée pour modifier l'alignement d'une seule cellule ici:
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
<<<<<<< HEAD
<<<<<<< HEAD
  \multicolumn{1}{l}{Animal} & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
  \multicolumn{1}{l}{Animal} & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

### Modifier l'espacement des colonnes

Par défaut, LaTeX flanque chaque colonne d'un peu d'espace de chaque côté pour
la séparer des autres et rendre le tableau esthétique. Cet espace est défini par
la longueur `\tabcolsep`. Comme chaque colonne a cet espace de chaque côté, il y
a un `\tabcolsep` à chaque extrémité du tableau, et deux `\tabcolsep` entre les
différentes colonnes (un venant de chaque colonne). La largeur de cet espace
peut être changée avec `\setlength` :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
### Manipulating the space between columns

Usually LaTeX pads each column by some space on both sides to give a balanced
look and separate them. This space is defined with the length `\tabcolsep`. Due
to the fact that each column is padded on both sides you get one `\tabcolsep` on
either end of the table, and `2\tabcolsep` between two columns &ndash; one from
each column. You can adjust this space to any length using `\setlength`:
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======

### Modifier l'espacement des colonnes

Par défaut, LaTeX flanque chaque colonne d'un peu d'espace de chaque côté pour la séparer des autres et rendre le tableau esthétique. Cet espace est défini par la longueur `\tabcolsep`. Comme chaque colonne a cet espace de chaque côté, il y a un `\tabcolsep` à chaque extrémité du tableau, et deux `\tabcolsep` entre les différentes colonnes (un venant de chaque colonne). La largeur de cet espace peut être changé avec `\setlength` :
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
<<<<<<< HEAD
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Cet espace peut être remplacé par n'importe quoi, avec `@`. Cela supprimera
l'espace des deux colonnes voisines (ou celui à chaque extrémité du tableau),
et mettra à la place ce qui lui est passé en argument :
=======
You can change this space to something arbitrary using `@`. This will remove the
padding between two columns or on either end, and instead put anything in
between the columns you specify as an argument:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
You can change this space to something arbitrary using `@`. This will remove the
padding between two columns or on either end, and instead put anything in
between the columns you specify as an argument:
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Cet espace peut être remplacé par n'importe quoi, avec `@`. Cela supprimera l'espace des deux colonnes voisines (ou celui à chaque extrémité du tableau), et mettra à la place ce qui lui est passé en argument :
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
<<<<<<< HEAD
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
(Nous verrons `\hspace` [très bientôt](lesson-11) ; vous devinez qu'il ajoute un
espacement horizontal).

Dans le préambule du tableau, `!` fait quelque chose d'assez similaire. La
différence est qu'il _ajoute_ son argument au centre de l'espace entre deux
colonnes, au lieu de le remplacer.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
(We'll see `\hspace` [again shortly](lesson-11); you might guess that it adds a
horizontal space.)

The `!` preamble token does something pretty similar. The difference is, that it
_adds_ its argument in center of the space between two columns.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
(Nous verrons `\hspace` [très bientôt](lesson-11) ; vous devinez qu'il ajoute un espacement horizontal).

Dans le préambule du tableau, `!` fait quelque chose d'assez similaire. La différence est qu'il _ajoute_ son argument au centre de l'espace entre deux colonnes, au lieu de le remplacer.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
<<<<<<< HEAD
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
### Filets verticaux

L'utilisation de filets verticaux dans les tableaux est plutôt découragée
par les règles typographiques usuelles. Mais il peut arriver qu'on en ait
besoin :
=======
### Vertical rules

Sometimes you have to use vertical rules.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
### Vertical rules

Sometimes you have to use vertical rules.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
### Traits verticaux

L'utilisation de traits verticaux dans les tableaux est plutôt découragée
par les règles typographiques usuelles. Mais il peut arriver qu'on en ait
besoin:
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
<<<<<<< HEAD
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\[2pt]
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
  Animal & Food  & Size   \\[2pt]
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Le comportement de `|` est assez similaire à celui de `!{arg}` : il ajoute un
filet vertical entre deux colonnes en laissant intact l'espacement initial.
Il a cependant un inconvénient : ces filets verticaux ne fonctionnent pas avec
les filets horizontaux de `booktabs`. Vous pouvez cependant l'utiliser avec
les filets horizontaux fournis par LaTeX, par les commandes `\hline`
(correspondant to `\toprule`, `\midrule` et `\bottomrule`) et `\cline` (qui se
comporte comme `\cmidline`). Comme on le voit, les filets verticaux couvrent
bien tout espace ajouté par l'argument optionnel de `\\`.


## Personnaliser les filets de `booktabs`

Tous les filets fournis par le package `booktabs`, ainsi que `\addlinespace`,
acceptent un argument optionnel entre crochets pour spécifier l'épaisseur du
trait. En outre, le petit retrait de `\cmidrule` peut être personnalisé en
spécifiant une longueur entre accolades après `r` ou `l`.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
You might notice that the behavior of `|` is pretty similar to `!{decl}`; it
adds the vertical rule between two columns leaving the padding as it is. There
is a huge downside to this though; vertical rules don't work with the
horizontal rules provided by `booktabs`. You can use the horizontal rules
provided by LaTeX; those are `\hline` (corresponding to `\toprule`, `\midrule`, and
`\bottomrule`) and `\cline` (which behaves like `\cmidrule`). As shown above, vertical rules
will span any space specified in the optional argument to `\\`.
=======
Le comportement de `|` est assez similaire à celui de `!{arg}`: il ajoute un trait vertical entre deux colonnes en laissant intact l'espacement initial. Il a cependant un inconvénient : ces traits verticaux ne fonctionnent pas avec les traits horizontaux de `booktabs`. Vous pouvez cependant l'utiliser avec les traits horizontaux fournis par LaTeX, par les commandes `\hline` (correspondant to `\toprule`, `\midrule` et `\bottomrule`) et `\cline` (qui se comporte comme `\cmidline`). Comme on le voit, les traits verticaux couvrent bien tout espace ajouté par l'argument optionnel de `\\`.

>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

## Personnaliser les traits de `booktabs`

<<<<<<< HEAD
All the `booktabs` rules and also `\addlinespace` support an optional argument
in brackets with which you can specify the rule's thickness. In addition the
trimming provided by `\cmidrule` can be customized by specifying a length in
braces after `r` or `l`.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Tous les traits fournis par le package `booktabs`, ainsi que `\addlinespace`, acceptent un argument optionnel entre crochets pour spécifier l'épaisseur du trait. En outre, le petit retrait de `\cmidrule` peut être personnalisé en spécifiant une longueur entre accolades après `r` ou `l`.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
<<<<<<< HEAD
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\ \midrule[1pt]
  chien      & viande     & moyen  \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\ \bottomrule[2pt]
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
  Animal & Food  & Size   \\ \midrule[1pt]
  dog    & meat  & medium \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule[2pt]
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

## Alignement des nombres dans les colonnes

L'alignement des nombres dans les tableaux peut être géré par le type de colonne
`S`, fourni par le package `siunitx`.

Voici un exemple simple avec deux colonnes numériques alignées :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Numeric alignment in columns
=======
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

## Alignement des nombres dans les colonnes

<<<<<<< HEAD
A simple example with two aligned numeric columns would be:
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
L'alignement des nombres dans les tableaux peut être géré par le type de colonne `S`, fourni par le package `siunitx`.

Voici un exemple simple avec deux colonnes numériques alignées:
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}
<<<<<<< HEAD
<<<<<<< HEAD

\begin{document}

\begin{tabular}{SS}
\toprule
{Quelques valeurs} & {D'autres valeurs} \\
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{document}
\begin{tabular}{SS}
\toprule
{Values} &  {More Values} \\
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}
<<<<<<< HEAD
<<<<<<< HEAD

\end{document}
```

Notez que toute cellule non numérique doit être « protégée » en la mettant entre
accolades.

Le package `siunitx` offre de nombreuses possibilités de formatage des nombres
de différentes manières ;
[voir sa documentation](https://texdoc.net/pkg/siunitx).


## Fixer la largeur totale d'un tableau

La largeur d'un environnement `tabular` est automatiquement déterminée en
fonction du contenu du tableau. Il existe deux mécanismes principaux pour
spécifier une largeur totale différente de cette largeur naturelle.

Notez qu'il vaut toujours mieux de formater le tableau à une largeur fixée comme
ci-dessous (en utilisant une taille de police telle que `\small` si nécessaire)
plutôt que de mettre à l'échelle un tableau avec `\resizebox` ou commandes
similaires, qui produiront des tailles de police et des épaisseurs de traits
incohérentes.


### `tabular*`

L'environnement `tabular*` prend un argument supplémentaire (_width_) qui fixe
la largeur totale du tableau. Pour donner de l'élasticité à l'ensemble, un
espace extensible doit être ajouté à la table en utilisant la commande
`\extracolsep`. Cet espace est ajouté entre toutes les colonnes à partir de ce
point dans le préambule. Il est presque toujours utilisé avec `\fill`, un espace
spécial qui s'étire pour être aussi large que nécessaire.

=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{document}
```

Notez que toute cellule non numérique doit être « protégée » en la mettant entre accolades.

Le paquet `siunitx` offre de nombreuses possibilités de formatage des nombres de différentes manières ;  [voir sa documentation](https://texdoc.net/pkg/siunitx).


## Fixer la largeur totale d'un tableau

La largeur d'un environnement `tabular` est automatiquement déterminée en fonction du contenu du tableau. Il existe deux mécanismes principaux pour spécifier une largeur totale différente de cette largeur naturelle.

Notez qu'il vaut toujours mieux de formater le tableau à une largeur fixée comme ci-dessous (en utilisant une taille de police telle que `\small` si nécessaire) plutôt que de mettre à l'échelle un tableau avec `\resizebox` ou commandes similaires, qui produiront des tailles de police et des épaisseurs de traits incohérentes.


### `tabular*`

<<<<<<< HEAD
The `tabular*` environment takes an additional _width_ argument that
specifies the total width of the table. Stretchy space must be added
to the table using the `\extracolsep` command. This space is added
between all columns from that point in the preamble. It is almost
always used with `\fill`, a special space that stretches to be as large
as necessary.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
L'environnement `tabular*` prend un argument supplémentaire (_width_) qui fixe la largeur totale du tableau. Pour donner de l'élasticité à l'ensemble, un espace extensible doit être ajouté à la table en utilisant la commande `\extracolsep`. Cet espace est ajouté entre toutes les colonnes à partir de ce point dans le préambule. Il est presque toujours utilisé avec `\fill`, un espace spécial qui s'étire pour être aussi large que nécessaire.

>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

<<<<<<< HEAD
<<<<<<< HEAD
\begin{center}
=======
\begin{center}  
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\begin{center}  
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

<<<<<<< HEAD
<<<<<<< HEAD
\begin{center}
=======
\begin{center}  
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\begin{center}  
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
L'environnement `tabularx`, fourni par le package du même nom, a une syntaxe
similaire à `tabular*` mais au lieu d'ajuster l'espace inter-colonne, il ajuste
la largeur des colonnes spécifiées par un nouveau type de colonne, `X`. C'est
équivalent à une spécification `p{...}` mais sa largeur est déterminée
automatiquement.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
The `tabularx` environment, provided by the package of
the same name, has a similar syntax to `tabular*` but instead of
adjusting the inter-column space, adjusts the widths of columns
specified by a new column type, `X`. This is equivalent to a
specification of `p{...}` for an automatically determined width.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
L'environnement `tabularx`, fourni par le paquet du même nom, a une syntaxe similaire à `tabular*` mais au lieu d'ajuster l'espace inter-colonne, il ajuste la largeur des colonnes spécifiées par un nouveau type de colonne, `X`. C'est équivalent à une spécification `p{...}` mais sa largeur est déterminée automatiquement.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

<<<<<<< HEAD
<<<<<<< HEAD
\begin{center}
=======
\begin{center}  
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\begin{center}  
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

<<<<<<< HEAD
<<<<<<< HEAD
\begin{center}
=======
\begin{center}  
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\begin{center}  
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
À la différence des autres packages abordés dans cette leçon, `tabularx` doit
compiler le tableau plusieurs fois, en essayant différentes largeurs, pour
déterminer le réglage final. Ça implique plusieurs restrictions sur
l'utilisation de l'environnement ;
[voir sa documentation](https://texdoc.net/pkg/tabularx).


## Les tableaux sur plusieurs pages

Un environnement `tabular` forme une boîte incassable, il doit donc être
suffisamment petit pour tenir sur une page, et est souvent placé dans un
environnement `table` pour en faire un flottant.

Plusieurs packages fournissent des variantes avec une syntaxe similaire, mais
permettant des sauts de page. Nous présentons ici le package `longtable` :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
Unlike the other forms discussed in these lessons, `tabularx` needs to
typeset the table several times with trial widths to determine the
final setting. This means that there are several restrictions on the
use of the environment; see the
[package documentation](https://texdoc.net/pkg/tabularx).
=======
À la différence des autres packages abordés dans cette leçon, `tabularx` doit compiler le tableau plusieurs fois, en essayant différentes largeurs, pour déterminer le réglage final. Ça implique plusieurs restrictions sur l'utilisation de l'environnement ; [voir sa documentation](https://texdoc.net/pkg/tabularx).

>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

## Les tableaux sur plusieurs pages

Un environnement `tabular` forme une boîte incassable, il doit donc être suffisamment petit pour tenir sur une page, et est souvent placé dans un environnement `table` pour en faire un flottant.

<<<<<<< HEAD
Several packages provide variants with similar syntax that do allow
page breaking. Here we show the `longtable` package:
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Plusieurs packages fournissent des variantes avec une syntaxe similaire, mais permettant des sauts de page. Nous présentons ici le package `longtable` :
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```
\documentclass{article}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{A Long Table}\\
Left Side & Right Side\\
\hline
\endhead
\hline
\endfoot
<<<<<<< HEAD
<<<<<<< HEAD
aa & bb\\
Entry & b\\
a & b\\
a & b\\
a & b\\
a & b\\
a & bbb\\
a & b\\
a & b\\
a & b\\
a & b\\
a & b\\
a & b\\
a & b b b b b b\\
a & b b b b b\\
a & b b\\
A Wider Entry & b\\
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
aa & bb\\  
Entry & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
A Wider Entry & b\\  
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{longtable}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Le package `longtable` est remarquable parce qu'il préserve la largeur des
colonnes sur toutes les pages du tableau ; cependant, pour y parvenir, il faut
parfois plusieurs exécutions de LaTeX, pour que les éventuelles grandes
cellules rencontrées tardivement dans le tableau puissent affecter la largeur
des colonnes depuis la première page.


## Notes de bas de tableau

Il est assez courant d'avoir besoin de notes de bas de tableau, avec des appels
de note dans le tableau. Le package `threeparttable` simplifie la composition
de ce genre de tableaux, en faisant en sorte que les notes soient placées dans
un bloc de la même largeur que le tableau lui-même. Reportez-vous
[à sa documentation](https://texdoc.net/pkg/threeparttable) pour plus de détails,
mais voici un exemple simple :

=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
`longtable` is notable in that it preserves the column widths
over all pages of the table; however in order to achieve this it
may take several runs of LaTeX so that wide entries encountered later
in the table can affect the column widths in earlier pages.
=======
Le package `longtable` est remarquable parce qu'il préserve la largeur des colonnes sur toutes les pages du tableau ; cependant, pour y parvenir, il faut parfois plusieurs exécutions de LaTeX, pour que les éventiuelles grandes cellules rencontrées tardivement dans le tableau puissent affecter la largeur des colonnes depuis la première page.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.


<<<<<<< HEAD
It is quite common to need footnote-like marks in a table referring to
notes under the table. The `threeparttable` package simplifies the
markup for such tables, arranging that the notes are set in a
block the same width as the table. Refer to the
[package documentation](https://texdoc.net/pkg/threeparttable)
for full details, but we show a simple example here.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
## Notes de bas de tableau

Il est assez courant d'avoir besoin de notes de bas de tableau, avec des appels de note dans le tableau. Le package `threeparttable` simplifie la composition de ce genre de tableaux, en faisant en sorte que les notes soient placées dans un bloc de la même largeur que le tableau lui-même. Reportez-vous [à sa documentation](https://texdoc.net/pkg/threeparttable) pour plus de détails, mais voici un exemple simple:

>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
<<<<<<< HEAD
<<<<<<< HEAD
   \caption{Un exemple}
   \begin{tabular}{ll}
    Voyelles          & A noir\tnote{1}\\
    Mon rêve familier & Je fais souvent ce rêve\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] Arthur Rimbaud.
   \item [2] Paul Verlaine.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
   \caption{An Example}
   \begin{tabular}{ll}
    An entry & 42\tnote{1}\\
    Another entry & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] the first note.
   \item [2] the second note.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
## Composer dans des colonnes étroites

Les paramètres par défaut pour les sauts de ligne supposent des colonnes
relativement larges pour avoir une certaine souplesse dans le choix des sauts de
ligne. L'exemple suivant montre quelques approches possibles. Le premier tableau
montre l'étirement des espaces entre les mots et TeX avertit de l'existence de
lignes mal remplies. L'utilisation de `\raggedright` évite généralement ce
problème mais peut donne des longueurs de lignes très irrégulières, et une
apparence déchiquetée au paragraphe. La commande `\RaggedRight` du package
`ragged2e` est un compromis ; elle permet une certaine irrégularité dans la
longueur des lignes, mais elle insérera aussi une coupure de mot si nécessaire,
comme le montre le troisième tableau.

Notez l'utilisation de `\arraybackslash` ici, qui réinitialise la définition de
`\\` pour terminer la ligne du tableau.

Une autre technique, comme le montre le quatrième tableau, consiste à utiliser
une police plus petite afin que les colonnes ne soient pas aussi étroites par
rapport à la taille du texte.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Typesetting in narrow columns
=======
## Composer dans des colonnes étroites
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

Les paramètres par défaut pour les sauts de ligne supposent des colonnes relativement larges pour avoir une certaine souplesse dans le choix des sauts de ligne. L'exemple suivant montre quelques approches possibles. Le premier tableau montre l'étirement des espaces entre les mots et TeX avertit de l'existence de lignes mal remplies. L'utilisation de `\raggedright` évite généralement ce problème mais peut donne des longueurs de lignes très irrégulières, et une apparence déchiquetée au paragraphe. La commande `\RaggedRight` du paquet `ragged2e` est un compromis ; elle permet une certaine irrégularité dans la longueur des lignes, mais elle insérera aussi une coupure de mot si nécessaire, comme le montre le troisième tableau.

Notez l'utilisation de `\arraybackslash` ici, qui réinitialise la définition de `\\` pour terminer la ligne du tableau.

<<<<<<< HEAD
An alternative technique, as shown in the fourth table, is to use a
smaller font so that the columns are not so narrow relative to the
text size.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Une autre technique, comme le montre le quatrième tableau, consiste à utiliser une police plus petite afin que les colonnes ne soient pas aussi étroites par rapport à la taille du texte.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
<<<<<<< HEAD
<<<<<<< HEAD
Two & A different long text set in a narrow paragraph, with some more hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more hard to hyphenate words.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
<<<<<<< HEAD
<<<<<<< HEAD
Two & A different long text set in a narrow paragraph, with some more hard to hyphenate words.
=======
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\end{tabular}

\end{table}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
## Définir de nouveaux types de colonnes

Comme l'a montré [la leçon principale](lesson-08), le package`\array` permet des
constructions comme `>{\bfseries}c` pour formater une colonne centrée en gras.
On peut définir un nouveau type de colonne, avec `\newcolumntype` pour encapsuler
cette définition :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Defining new column types

As demonstrated in the [main lesson](lesson-08), the `array` package allows
constructs such as `>{\bfseries}c`  to denote a bold centered column.
It is often convenient to define a new column type to encapsulate such
use, for example
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
## Définir de nouveaux types de colonnes

Comme l'a montré [la leçon principale](lesson-08), le package`\array` permet des constructions comme `>{\bfseries}c` pour formater une colonne centrée en gras. On peut définir un nouveau type de colonne, avec `\newcolumntype` pour encapsuler cette définition :
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\newcolumntype{B}{>{\bfseries}c}
```
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
qui permettra l'utilisation de `B` dans les préambules de tableaux pour spécifier
une colonne centrée en gras.


## Astuces pour diviser une cellule dans sa hauteur

Souvent, plutôt que de faire en sorte qu'une cellule s'étende sur plusieurs
lignes, il est préférable d'utiliser une seule ligne dans laquelle certaines
cellules sont divisées verticalement par l'utilisation d'environnements
`\tabular` imbriqués :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
would allow the use of `B` in table preambles to specify a bold
centered column.
=======
qui permettra l'utilisation de `B` dans les préambules de tableaux pour spécifier une colonne centrée en gras.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.


## Astuces pour diviser une cellule dans sa hauteur

<<<<<<< HEAD
Often, rather than making a cell span multiple rows it is better to instead have
a single row in which some cells are split vertically by the use of nested
`tabular` environments.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Souvent, plutôt que de faire en sorte qu'une cellule s'étende sur plusieurs lignes, il est préférable d'utiliser une seule ligne dans laquelle certaines cellules sont divisées verticalement par l'utilisation d'environnements `\tabular` imbriqués:
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
L'alignement vertical peut être contrôlé par un argument optionnel de
l'environnement `\tabular` ; cet argument peut valoir `t`, `c`, ou `b` pour
avoir un alignement eu haut (_**t**op_), au milieu (_**c**entered_) ou en bas
(_**b**ottom_) respectivement et s'utilise de cette façon :
=======
Note that you can control vertical alignment by an optional argument to the
`tabular`; it supports the usage of `t`, `c`, or `b` for top, centered, or
bottom aligned respectively and is used like this:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Note that you can control vertical alignment by an optional argument to the
`tabular`; it supports the usage of `t`, `c`, or `b` for top, centered, or
bottom aligned respectively and is used like this:
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
L'alignement vertical peut être contrôlé par un argument optionnel de l'environnement `\tabular` ; cet argument peut valoir `t`, `c`, ou `b` pour avoir un alignement supérieur (_**t**op_), centré (_**c**entered_) ou inférieur (_**b**ottom_) respectivement et s'utilise de cette façon :
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

## Espacement des lignes dans les tableaux

Dans la leçon principale, nous avons présenté `\addlinespace` du package
`booktabs`, qui sert à ajouter de l'espace entre des lignes spécifiques.

Il y a aussi deux paramètres généraux qui contrôlent l'espacement des lignes :
`\arraystretch` et `\extrarowheight` (ce dernier du package `array`).
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Line spacing in tables
=======
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

## Espacement des lignes dans les tableaux

<<<<<<< HEAD
There are two general parameters that control line spacing,
`\arraystretch` and `\extrarowheight` (the latter from the `array`
package).
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Dans la leçon principale, nous avons présenté  `\addlinespace` du package `booktabs`, qui sert à ajouter de l'espace entre des lignes spécifiques.

Il y a aussi deux paramètres généraux qui contrôlent l'espacement des lignes: `\arraystretch` et `\extrarowheight` (ce dernier du paquet `array`).
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\renewcommand\arraystretch{1.5}
```
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
augmentera de 50% l'espace entre les lignes.

Souvent, surtout quand on utilise `\hline`, il est préférable de simplement augmenter la hauteur des lignes, sans augmenter leur profondeur en-dessous de la ligne de base. Cet exemple illustre le paramètre `\extrarowheight` :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

will increase the baseline spacing by 50%.


Often, especially when using `\hline`, it is better just to increase
the height of rows, without increasing their depth below the baseline.
The following example demonstrates the `\extrarowheight` parameter.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
augmentera de 50% l'espace entre les lignes.

Souvent, surtout quand on utilise `\hline`, il est préférable de simplement augmenter la hauteur des lignes, sans augmenter leur profondeur en dessous de la ligne de base. Cet exemple illustre le paramètre `\extrarowheight`:
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
\begin{center}
\begin{tabular}{cc}
\hline
Carré & $x^2$ \\
\hline
Cube  & $x^3$ \\
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

=======
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
\begin{center}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\hline
\end{tabular}
\end{center}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
<<<<<<< HEAD
<<<<<<< HEAD
Carré & $x^2$ \\
\hline
Cube  & $x^3$ \\
=======
Square& $x^2$\\
\hline
Cube& $x^3$\\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Square& $x^2$\\
\hline
Cube& $x^3$\\
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\hline
\end{tabular}
\end{center}
\end{document}
```
=======
title: "More on: Tables (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Les tables: pour aller plus loin"
=======
title: "Les tables : pour aller plus loin"
>>>>>>> faf19621... I've made spacing around : and ; consistent.
---

## D'autres options dans le préambule des tableaux

La leçon n'ayant pas couvert tous les options disponibles pour les en-têtes de tableaux, quelques autres sont expliqués ici avec des exemples.  N'hésitez pas à revoir le début de la leçon pour avoir en tête toutes les possibilités existantes. Les courtes descriptions fournies devraient suffire à comprendre ce que font les différents types de colonnes `m`, `b`, `w`, et `W` après que vous ayez compris `l`, `c`, `r`, et `p`. Si ce n'est pas le cas, utilisez les exemples pour expérimenter un peu. Il restera ensuite à voir les autres « _preamble-tokens_ » disponibles, bien pratiques : `>`, `<`, `@`, `!` et `|`.


### Mettre en forme une colonne

`>` et `<` peuvent être utilisées pour insérer des éléments avant et après le contenu de chaque cellule d'une colonne. Vous pouvez donc les utiliser pour _ajouter des commandes_ qui changent la mise en forme de la colonne. Par exemple, ceci mettra en italique la première colonne et insérera un deux-points après :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
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

`\itshape` met tout le texte qui suit en italique, mais son effet est limité à la cellule du tableau. Nous examinerons le formatage manuel des polices [dans quelques leçons](lesson-11).

Souvent la première ligne d'un tableau est considérée comme un en-tête, et mise en forme différemment du reste. Pour obtenir ce résultat, on peut utiliser `\multicolumn`. Pensez aussi que cette commande peut être utilisée pour modifier l'alignement d'une seule cellule ici :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{Animal} & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### Modifier l'espacement des colonnes

Par défaut, LaTeX flanque chaque colonne d'un peu d'espace de chaque côté pour la séparer des autres et rendre le tableau esthétique. Cet espace est défini par la longueur `\tabcolsep`. Comme chaque colonne a cet espace de chaque côté, il y a un `\tabcolsep` à chaque extrémité du tableau, et deux `\tabcolsep` entre les différentes colonnes (un venant de chaque colonne). La largeur de cet espace peut être changé avec `\setlength` :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

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

Cet espace peut être remplacé par n'importe quoi, avec `@`. Cela supprimera l'espace des deux colonnes voisines (ou celui à chaque extrémité du tableau), et mettra à la place ce qui lui est passé en argument :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(Nous verrons `\hspace` [très bientôt](lesson-11) ; vous devinez qu'il ajoute un espacement horizontal).

Dans le préambule du tableau, `!` fait quelque chose d'assez similaire. La différence est qu'il _ajoute_ son argument au centre de l'espace entre deux colonnes, au lieu de le remplacer.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### Traits verticaux

L'utilisation de traits verticaux dans les tableaux est plutôt découragée
par les règles typographiques usuelles. Mais il peut arriver qu'on en ait
besoin :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Animal & Food  & Size   \\[2pt]
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Le comportement de `|` est assez similaire à celui de `!{arg}` : il ajoute un trait vertical entre deux colonnes en laissant intact l'espacement initial. Il a cependant un inconvénient : ces traits verticaux ne fonctionnent pas avec les traits horizontaux de `booktabs`. Vous pouvez cependant l'utiliser avec les traits horizontaux fournis par LaTeX, par les commandes `\hline` (correspondant to `\toprule`, `\midrule` et `\bottomrule`) et `\cline` (qui se comporte comme `\cmidline`). Comme on le voit, les traits verticaux couvrent bien tout espace ajouté par l'argument optionnel de `\\`.


## Personnaliser les traits de `booktabs`

Tous les traits fournis par le package `booktabs`, ainsi que `\addlinespace`, acceptent un argument optionnel entre crochets pour spécifier l'épaisseur du trait. En outre, le petit retrait de `\cmidrule` peut être personnalisé en spécifiant une longueur entre accolades après `r` ou `l`.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Animal & Food  & Size   \\ \midrule[1pt]
  dog    & meat  & medium \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Alignement des nombres dans les colonnes

L'alignement des nombres dans les tableaux peut être géré par le type de colonne `S`, fourni par le package `siunitx`.

Voici un exemple simple avec deux colonnes numériques alignées :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{Values} &  {More Values} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}
\end{document}
```

Notez que toute cellule non numérique doit être « protégée » en la mettant entre accolades.

Le package `siunitx` offre de nombreuses possibilités de formatage des nombres de différentes manières ;  [voir sa documentation](https://texdoc.net/pkg/siunitx).


## Fixer la largeur totale d'un tableau

La largeur d'un environnement `tabular` est automatiquement déterminée en fonction du contenu du tableau. Il existe deux mécanismes principaux pour spécifier une largeur totale différente de cette largeur naturelle.

Notez qu'il vaut toujours mieux de formater le tableau à une largeur fixée comme ci-dessous (en utilisant une taille de police telle que `\small` si nécessaire) plutôt que de mettre à l'échelle un tableau avec `\resizebox` ou commandes similaires, qui produiront des tailles de police et des épaisseurs de traits incohérentes.


### `tabular*`

L'environnement `tabular*` prend un argument supplémentaire (_width_) qui fixe la largeur totale du tableau. Pour donner de l'élasticité à l'ensemble, un espace extensible doit être ajouté à la table en utilisant la commande `\extracolsep`. Cet espace est ajouté entre toutes les colonnes à partir de ce point dans le préambule. Il est presque toujours utilisé avec `\fill`, un espace spécial qui s'étire pour être aussi large que nécessaire.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

L'environnement `tabularx`, fourni par le package du même nom, a une syntaxe similaire à `tabular*` mais au lieu d'ajuster l'espace inter-colonne, il ajuste la largeur des colonnes spécifiées par un nouveau type de colonne, `X`. C'est équivalent à une spécification `p{...}` mais sa largeur est déterminée automatiquement.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

À la différence des autres packages abordés dans cette leçon, `tabularx` doit compiler le tableau plusieurs fois, en essayant différentes largeurs, pour déterminer le réglage final. Ça implique plusieurs restrictions sur l'utilisation de l'environnement ; [voir sa documentation](https://texdoc.net/pkg/tabularx).


## Les tableaux sur plusieurs pages

Un environnement `tabular` forme une boîte incassable, il doit donc être suffisamment petit pour tenir sur une page, et est souvent placé dans un environnement `table` pour en faire un flottant.

Plusieurs packages fournissent des variantes avec une syntaxe similaire, mais permettant des sauts de page. Nous présentons ici le package `longtable` :

```
\documentclass{article}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{A Long Table}\\
Left Side & Right Side\\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
Entry & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
A Wider Entry & b\\  
\end{longtable}

\end{document}
```

Le package `longtable` est remarquable parce qu'il préserve la largeur des colonnes sur toutes les pages du tableau ; cependant, pour y parvenir, il faut parfois plusieurs exécutions de LaTeX, pour que les éventiuelles grandes cellules rencontrées tardivement dans le tableau puissent affecter la largeur des colonnes depuis la première page.


## Notes de bas de tableau

Il est assez courant d'avoir besoin de notes de bas de tableau, avec des appels de note dans le tableau. Le package `threeparttable` simplifie la composition de ce genre de tableaux, en faisant en sorte que les notes soient placées dans un bloc de la même largeur que le tableau lui-même. Reportez-vous [à sa documentation](https://texdoc.net/pkg/threeparttable) pour plus de détails, mais voici un exemple simple :


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{An Example}
   \begin{tabular}{ll}
    An entry & 42\tnote{1}\\
    Another entry & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] the first note.
   \item [2] the second note.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## Composer dans des colonnes étroites

Les paramètres par défaut pour les sauts de ligne supposent des colonnes relativement larges pour avoir une certaine souplesse dans le choix des sauts de ligne. L'exemple suivant montre quelques approches possibles. Le premier tableau montre l'étirement des espaces entre les mots et TeX avertit de l'existence de lignes mal remplies. L'utilisation de `\raggedright` évite généralement ce problème mais peut donne des longueurs de lignes très irrégulières, et une apparence déchiquetée au paragraphe. La commande `\RaggedRight` du package `ragged2e` est un compromis ; elle permet une certaine irrégularité dans la longueur des lignes, mais elle insérera aussi une coupure de mot si nécessaire, comme le montre le troisième tableau.

Notez l'utilisation de `\arraybackslash` ici, qui réinitialise la définition de `\\` pour terminer la ligne du tableau.

Une autre technique, comme le montre le quatrième tableau, consiste à utiliser une police plus petite afin que les colonnes ne soient pas aussi étroites par rapport à la taille du texte.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\end{table}

\end{document}
```

## Définir de nouveaux types de colonnes

Comme l'a montré [la leçon principale](lesson-08), le package`\array` permet des constructions comme `>{\bfseries}c` pour formater une colonne centrée en gras. On peut définir un nouveau type de colonne, avec `\newcolumntype` pour encapsuler cette définition :

```latex
\newcolumntype{B}{>{\bfseries}c}
```
qui permettra l'utilisation de `B` dans les préambules de tableaux pour spécifier une colonne centrée en gras.


## Astuces pour diviser une cellule dans sa hauteur

Souvent, plutôt que de faire en sorte qu'une cellule s'étende sur plusieurs lignes, il est préférable d'utiliser une seule ligne dans laquelle certaines cellules sont divisées verticalement par l'utilisation d'environnements `\tabular` imbriqués :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

L'alignement vertical peut être contrôlé par un argument optionnel de l'environnement `\tabular` ; cet argument peut valoir `t`, `c`, ou `b` pour avoir un alignement supérieur (_**t**op_), centré (_**c**entered_) ou inférieur (_**b**ottom_) respectivement et s'utilise de cette façon :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Espacement des lignes dans les tableaux

Dans la leçon principale, nous avons présenté  `\addlinespace` du package `booktabs`, qui sert à ajouter de l'espace entre des lignes spécifiques.

Il y a aussi deux paramètres généraux qui contrôlent l'espacement des lignes : `\arraystretch` et `\extrarowheight` (ce dernier du package `array`).

```latex
\renewcommand\arraystretch{1.5}
```
augmentera de 50% l'espace entre les lignes.

Souvent, surtout quand on utilise `\hline`, il est préférable de simplement augmenter la hauteur des lignes, sans augmenter leur profondeur en dessous de la ligne de base. Cet exemple illustre le paramètre `\extrarowheight` :

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}

\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
>>>>>>> f133d525... Add more-01 to more-08 after reencoding in UTF-8.
