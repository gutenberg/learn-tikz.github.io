---
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
title: "More on: Tables"
---


## The other preamble contents

As the lesson didn't cover all the available preamble-tokens, a few others are
explained with examples here.  You might want to revisit the tables at the start
of the lesson to get an overview of the things available. The short descriptions
provided there should suffice to understand what the different column types `m`,
`b`, `w`, and `W` do after you understood `l`, `c`, `r`, and `p`. If not you
might want to experiment a bit with them. What's still missing are the handy
other preamble-tokens `>`, `<`, `@`, `!`, and `|`. 

### Styling a column

Since `>` and `<` can be used to put things before and after the cell contents
of a column, you can use these to add commands which affect the look
of a column. For instance, if you want to italicize the first column and put a
colon after it, you can do the following:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

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
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
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
`\itshape` met tout le texte qui suit en italique, mais son effet est limité à
la cellule du tableau. Nous examinerons le formatage manuel des polices
[dans quelques leçons](lesson-11).

Souvent la première ligne d'un tableau est considérée comme un en-tête, et mise
en forme différemment du reste. Pour obtenir ce résultat, on peut utiliser
`\multicolumn`. Pensez aussi que cette commande peut être utilisée pour modifier
l'alignement d'une seule cellule ici :
=======
`\itshape` makes all the following text italic, but its effect is 'contained'
by the table cell. We will look at manual font formatting [in a few lessons
time](lesson-11).

You may want the first cell not to be affected
because it is the table head. Here `\multicolumn` may be used. Remember that
it can be used to change a single cell's alignment as shown below.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

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
  \multicolumn{1}{l}{Animal} & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
  \multicolumn{1}{l}{Animal} & Food  & Size   \\
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

### Modifier l'espacement des colonnes

Par défaut, LaTeX flanque chaque colonne d'un peu d'espace de chaque côté pour
la séparer des autres et rendre le tableau esthétique. Cet espace est défini par
la longueur `\tabcolsep`. Comme chaque colonne a cet espace de chaque côté, il y
a un `\tabcolsep` à chaque extrémité du tableau, et deux `\tabcolsep` entre les
différentes colonnes (un venant de chaque colonne). La largeur de cet espace
peut être changée avec `\setlength` :
=======
### Manipulating the space between columns

Usually LaTeX pads each column by some space on both sides to give a balanced
look and separate them. This space is defined with the length `\tabcolsep`. Due
to the fact that each column is padded on both sides you get one `\tabcolsep` on
either end of the table, and `2\tabcolsep` between two columns &ndash; one from
each column. You can adjust this space to any length using `\setlength`:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

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
Cet espace peut être remplacé par n'importe quoi, avec `@`. Cela supprimera
l'espace des deux colonnes voisines (ou celui à chaque extrémité du tableau),
et mettra à la place ce qui lui est passé en argument :
=======
You can change this space to something arbitrary using `@`. This will remove the
padding between two columns or on either end, and instead put anything in
between the columns you specify as an argument:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
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
(Nous verrons `\hspace` [très bientôt](lesson-11) ; vous devinez qu'il ajoute un
espacement horizontal).

Dans le préambule du tableau, `!` fait quelque chose d'assez similaire. La
différence est qu'il _ajoute_ son argument au centre de l'espace entre deux
colonnes, au lieu de le remplacer.
=======
(We'll see `\hspace` [again shortly](lesson-11); you might guess that it adds a
horizontal space.)

The `!` preamble token does something pretty similar. The difference is, that it
_adds_ its argument in center of the space between two columns.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
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
### Filets verticaux

L'utilisation de filets verticaux dans les tableaux est plutôt découragée
par les règles typographiques usuelles. Mais il peut arriver qu'on en ait
besoin :
=======
### Vertical rules

Sometimes you have to use vertical rules.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\[2pt]
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
=======
  Animal & Food  & Size   \\[2pt]
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

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
You might notice that the behavior of `|` is pretty similar to `!{decl}`; it
adds the vertical rule between two columns leaving the padding as it is. There
is a huge downside to this though; vertical rules don't work with the
horizontal rules provided by `booktabs`. You can use the horizontal rules
provided by LaTeX; those are `\hline` (corresponding to `\toprule`, `\midrule`, and
`\bottomrule`) and `\cline` (which behaves like `\cmidrule`). As shown above, vertical rules
will span any space specified in the optional argument to `\\`.

## Customizing `booktabs` rules

All the `booktabs` rules and also `\addlinespace` support an optional argument
in brackets with which you can specify the rule's thickness. In addition the
trimming provided by `\cmidrule` can be customized by specifying a length in
braces after `r` or `l`.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
<<<<<<< HEAD
  Animal     & Nourriture & Taille \\ \midrule[1pt]
  chien      & viande     & moyen  \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\ \bottomrule[2pt]
=======
  Animal & Food  & Size   \\ \midrule[1pt]
  dog    & meat  & medium \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule[2pt]
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD

## Alignement des nombres dans les colonnes

L'alignement des nombres dans les tableaux peut être géré par le type de colonne
`S`, fourni par le package `siunitx`.

Voici un exemple simple avec deux colonnes numériques alignées :
=======
## Numeric alignment in columns

The alignment of numbers in tables can be handled by the column type `S` 
that is provided by the `siunitx` package.

A simple example with two aligned numeric columns would be:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}
<<<<<<< HEAD

\begin{document}

\begin{tabular}{SS}
\toprule
{Quelques valeurs} & {D'autres valeurs} \\
=======
\begin{document}
\begin{tabular}{SS}
\toprule
{Values} &  {More Values} \\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
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
\end{document}
```

Note that any non-numeric cell must be "protected" by enclosing it in braces.

The `siunitx` package provides many possibilities for formatting the numbers in
different ways; see the [package
documentation](https://texdoc.net/pkg/siunitx).

## Specifying the total table width

The width of a `tabular` environment is automatically determined based
on the contents of the table. There are two commonly used mechanisms
to specify a different total width.

Note that it is almost always preferable to format the table to a
specified width as below (perhaps using a font size such as `\small` if
necessary) rather than scaling a table with `\resizebox` and similar
commands which will produce inconsistent font sizes and rule widths.

### `tabular*`

The `tabular*` environment takes an additional _width_ argument that
specifies the total width of the table. Stretchy space must be added
to the table using the `\extracolsep` command. This space is added
between all columns from that point in the preamble. It is almost
always used with `\fill`, a special space that stretches to be as large
as necessary.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

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
\begin{center}
=======
\begin{center}  
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

<<<<<<< HEAD
\begin{center}
=======
\begin{center}  
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
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
L'environnement `tabularx`, fourni par le package du même nom, a une syntaxe
similaire à `tabular*` mais au lieu d'ajuster l'espace inter-colonne, il ajuste
la largeur des colonnes spécifiées par un nouveau type de colonne, `X`. C'est
équivalent à une spécification `p{...}` mais sa largeur est déterminée
automatiquement.
=======
The `tabularx` environment, provided by the package of
the same name, has a similar syntax to `tabular*` but instead of
adjusting the inter-column space, adjusts the widths of columns
specified by a new column type, `X`. This is equivalent to a
specification of `p{...}` for an automatically determined width.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

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
\begin{center}
=======
\begin{center}  
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

<<<<<<< HEAD
\begin{center}
=======
\begin{center}  
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
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
Unlike the other forms discussed in these lessons, `tabularx` needs to
typeset the table several times with trial widths to determine the
final setting. This means that there are several restrictions on the
use of the environment; see the
[package documentation](https://texdoc.net/pkg/tabularx).

## Multi-page tables

A `tabular` forms an unbreakable box so it must be small enough to fit
on one page, and is often placed in a floating `table` environment.

Several packages provide variants with similar syntax that do allow
page breaking. Here we show the `longtable` package:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

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
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{longtable}

\end{document}
```

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
`longtable` is notable in that it preserves the column widths
over all pages of the table; however in order to achieve this it
may take several runs of LaTeX so that wide entries encountered later
in the table can affect the column widths in earlier pages.

## Table notes

It is quite common to need footnote-like marks in a table referring to
notes under the table. The `threeparttable` package simplifies the
markup for such tables, arranging that the notes are set in a
block the same width as the table. Refer to the
[package documentation](https://texdoc.net/pkg/threeparttable)
for full details, but we show a simple example here.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
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
   \caption{An Example}
   \begin{tabular}{ll}
    An entry & 42\tnote{1}\\
    Another entry & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] the first note.
   \item [2] the second note.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

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
## Typesetting in narrow columns

The default line breaking settings assume relatively long lines to
give some flexibility in choosing line breaks. The following example
shows some possible approaches. The first table shows interword spacing
stretched and TeX warns about Underfull lines. Using `\raggedright`
usually avoids this problem but may leave some lines ‘too ragged’. The
`\RaggedRight` command from the `ragged2e` package is a compromise;
it allows some raggedness in the line lengths, but will also
hyphenate where necessary, as shown in the third table.

Note the use of `\arraybackslash` here, which resets the definition of
`\\` so that it ends the table row.

An alternative technique, as shown in the fourth table, is to use a
smaller font so that the columns are not so narrow relative to the
text size.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

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
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
<<<<<<< HEAD
Two & A different long text set in a narrow paragraph, with some more hard to hyphenate words.
=======
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{tabular}

\end{table}

\end{document}
```

<<<<<<< HEAD
## Définir de nouveaux types de colonnes

Comme l'a montré [la leçon principale](lesson-08), le package`\array` permet des
constructions comme `>{\bfseries}c` pour formater une colonne centrée en gras.
On peut définir un nouveau type de colonne, avec `\newcolumntype` pour encapsuler
cette définition :
=======
## Defining new column types

As demonstrated in the [main lesson](lesson-08), the `array` package allows
constructs such as `>{\bfseries}c`  to denote a bold centered column.
It is often convenient to define a new column type to encapsulate such
use, for example
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\newcolumntype{B}{>{\bfseries}c}
```
<<<<<<< HEAD
qui permettra l'utilisation de `B` dans les préambules de tableaux pour spécifier
une colonne centrée en gras.


## Astuces pour diviser une cellule dans sa hauteur

Souvent, plutôt que de faire en sorte qu'une cellule s'étende sur plusieurs
lignes, il est préférable d'utiliser une seule ligne dans laquelle certaines
cellules sont divisées verticalement par l'utilisation d'environnements
`\tabular` imbriqués :
=======
would allow the use of `B` in table preambles to specify a bold
centered column.


## Vertical tricks

Often, rather than making a cell span multiple rows it is better to instead have
a single row in which some cells are split vertically by the use of nested
`tabular` environments.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

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
L'alignement vertical peut être contrôlé par un argument optionnel de
l'environnement `\tabular` ; cet argument peut valoir `t`, `c`, ou `b` pour
avoir un alignement eu haut (_**t**op_), au milieu (_**c**entered_) ou en bas
(_**b**ottom_) respectivement et s'utilise de cette façon :
=======
Note that you can control vertical alignment by an optional argument to the
`tabular`; it supports the usage of `t`, `c`, or `b` for top, centered, or
bottom aligned respectively and is used like this:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

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

## Espacement des lignes dans les tableaux

Dans la leçon principale, nous avons présenté `\addlinespace` du package
`booktabs`, qui sert à ajouter de l'espace entre des lignes spécifiques.

Il y a aussi deux paramètres généraux qui contrôlent l'espacement des lignes :
`\arraystretch` et `\extrarowheight` (ce dernier du package `array`).
=======
## Line spacing in tables

In the main lesson we demonstrated `\addlinespace` from the `booktabs`
package, which is useful for adding extra space between specific lines.

There are two general parameters that control line spacing,
`\arraystretch` and `\extrarowheight` (the latter from the `array`
package).
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\renewcommand\arraystretch{1.5}
```
<<<<<<< HEAD
augmentera de 50% l'espace entre les lignes.

Souvent, surtout quand on utilise `\hline`, il est préférable de simplement augmenter la hauteur des lignes, sans augmenter leur profondeur en-dessous de la ligne de base. Cet exemple illustre le paramètre `\extrarowheight` :
=======

will increase the baseline spacing by 50%.


Often, especially when using `\hline`, it is better just to increase
the height of rows, without increasing their depth below the baseline.
The following example demonstrates the `\extrarowheight` parameter.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

<<<<<<< HEAD
\begin{center}
\begin{tabular}{cc}
\hline
Carré & $x^2$ \\
\hline
Cube  & $x^3$ \\
=======

\begin{center}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\hline
\end{tabular}
\end{center}

<<<<<<< HEAD
=======

>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
<<<<<<< HEAD
Carré & $x^2$ \\
\hline
Cube  & $x^3$ \\
=======
Square& $x^2$\\
\hline
Cube& $x^3$\\
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\hline
\end{tabular}
\end{center}
\end{document}
```
