---
<<<<<<< HEAD
<<<<<<< HEAD
title: "Bibliographies et références biblio"
=======
title: "Citations and references"
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
title: "Bibliographies et références biblio"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
---
<script>
preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

<<<<<<< HEAD
<<<<<<< HEAD
## Bases de données bibliographiques

Les références bibliographiques pourraient être incluses directement dans votre
document, mais en général vous les stockez dans un ou plusieurs fichiers
externes. Un tel fichier est appelé une _base de données bibliographique_,
contenant les informations dans un format facile à traiter. L'utilisation d'une
ou plusieurs bases de données bibliographiques vous permet de réutiliser les
informations dans plusieurs documents sans avoir à les ressaisir, et d'éviter
le formatage manuel des références.

Les bases de données bibliographiques pour LaTeX sont appelées
« fichiers BibTeX » et portent l'extension `.bib`. Elles contiennent une ou
plusieurs entrées, une pour chaque référence, et à l'intérieur de chaque entrée,
il y a une série de champs. Voyons un exemple :
=======
## Reference databases
=======
## Bases de données bibliographiques
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

Les références bibliographiques pourraient être incluses directement dans votre document, mais en général vous les stockez dans un ou plusieurs fichiers externes. Un tel fichier est appelé une _base de données bibliographique_, contenant les informations dans un format facile à traiter. L'utilisation d'une ou plusieurs bases de données bibliographiques vous permet de réutiliser les informations dans plusieurs documents sans avoir à les ressaisir, et d'éviter le formatage manuel des références.

<<<<<<< HEAD
Reference databases are normally referred to as 'BibTeX files' and have the
extension `.bib`. They contain one or more entries, one for each reference, and
within each entry there are a series of fields. Let us look at an example.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Les bases de données bibliographiques pour LaTeX sont appelées « fichiers BibTeX » et portent l'extension `.bib`. Elles contiennent une ou plusieurs entrées, une pour chaque référence, et à l'intérieur de chaque entrée, il y a une série de champs. Voyons un exemple:
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

<!-- {% raw %} -->
```
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======

>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->


<<<<<<< HEAD
<<<<<<< HEAD
Nous avons ici une entrée pour un article et d'une autre pour un livre ; ce sont
de loin les deux types les plus courants. Chaque type d'entrée dans la base de
données commence par un `@` et toutes les informations sont ensuite placées
entre deux accolades.

Les différents champs dont nous avons besoin sont donnés sous forme de paires
clef-valeur, à l'exception de ce que l'on appelle la « clef », c'est-à-dire le
nom de la citation. Vous pouvez utiliser ce que vous voulez, car il s'agit d'une
simple étiquette, mais nous avons choisi d'utiliser le nom d'un auteur plus
l'année : c'est une façon courante de faire.

Les champs à remplir dépendent du type d'entrée, mais la plupart d'entre eux
sont assez évidents. Notez bien que dans le champ `auteur`, chaque nom d'auteur
est séparé du suivant par `and`. C'est _essentiel_ : le format de la sortie doit
savoir quel auteur est lequel.
Vous remarquerez également que dans le titre de l'article, certaines entrées
sont entre accolades, afin d'éviter tout changement de casse.


L'édition manuelle des fichiers `.bib` est assez fastidieuse, c'est pourquoi la
plupart des gens utilisent un éditeur dédié. [JabRef](https://www.jabref.org/)
est largement utilisé et multiplateforme, mais il existe plusieurs autres
interfaces disponibles. Si la référence contient un DOI
(_Digital Object Identifier_), vous pouvez essayer [doi2bib](https://doi2bib.org/)
pour obtenir facilement l'entrée au format BibTeX. Mais n'oubliez pas de
vérifier que l'entrée est correcte et contient toutes les informations que vous
souhaitez avoir dans votre base de données!

Pour nos démonstrations, nous utiliserons la courte base de données d'exemple
montrée ci-dessus : nous l'avons enregistrée sous le nom de `learnnlatex.bib`.
=======
Nous avons ici une entrée pour un article et d'une autre pour un livre ; ce sont de loin les deux types les plus courants. Chaque type d'entrée dans la base de données commence par un `@` et toutes les informations sont ensuite placées entre deux accolades.

Les différents champs dont nous avons besoin sont donnés sous forme de paires clef-valeur, à l'exception de ce que l'on appelle la « clef », c'est-à-dire le nom de la citation. Vous pouvez utiliser ce que vous voulez, car il s'agit d'une simple étiquette, mais nous avons choisi d'utiliser le nom d'un auteur plus l'année : c'est une façon courante de faire.

Les champs à remplir dépendent du type d'entrée, mais la plupart d'entre eux sont assez évidents. Notez bien que dans le champ `auteur`, chaque nom d'auteur est séparé du suivant par `and`. C'est _essentiel_ : le format de la _sortie_ doit savoir quel auteur est lequel. Vous remarquerez également que dans le titre de l'article, certaines entrées sont entre accolades, afin d'éviter tout changement de casse.


L'édition manuelle des fichiers `.bib` est assez fastidieuse, c'est pourquoi la plupart des gens utilisent un éditeur dédié. [JabRef](https://www.jabref.org/) est largement utilisé et multiplateforme, mais il existe plusieurs autres interfaces disponibles. Si la référence contient un DOI (_Digital Object Identifier_), vous pouvez essayer [doi2bib](https://doi2bib.org/) pour obtenir facilement l'entrée au format BibTeX. Mais n'oubliez pas de vérifier que l'entrée est correcte et contient toutes les informations que vous souhaitez avoir dans votre base de données!

Pour nos démonstrations, nous utiliserons la courte base de données d'exemple affichée ci-dessus : nous l'avons enregistrée sous le nom de `learnnlatex.bib`.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.


## Extraire les données de la base bibligraphique

<<<<<<< HEAD
Pour insérer les informations bibliographiques dans votre document LaTeX, il y a
trois étapes. Tout d'abord, utilisez LaTeX pour compiler votre document, ce qui
crée un fichier avec la liste des références que votre document cite. Ensuite,
lancez un programme qui extrait de la base de données bibliographique les
entrées que vous utilisez et les met en ordre. Enfin, recompilez votre document
afin que LaTeX puisse utiliser ces informations pour insérer les références et
les mettre en forme. En général, il faut au moins deux compilations pour
résoudre toutes les références.

Pour la deuxième étape, deux systèmes sont largement utilisés : BibTeX et Biber.
Biber n'est utilisé qu'avec un package LaTeX appelé `biblatex`, alors que BibTeX
est utilisé soit sans package particulier, soit avec `natbib`.

Le lancement d'un second outil en plus de LaTeX est géré de différentes
façons par les différents éditeurs. Pour les exemples sur _learnlatex.org_,
nous avons écrit des scripts qui s'occupent de tout « en coulisses ».
Votre éditeur préféré peut avoir un seul bouton « faire ce qu'il faut »,
ou bien vous pouvez choisir de lancer BibTeX ou Biber manuellement entre les
exécutions de LaTeX.

Le format des citations et des références est indépendant de votre base de
données BibTeX, et il est défini par ce que l'on appelle un « style ». Nous
verrons qu'ils fonctionnent de façon légèrement différente dans la chaîne de
traitement BibTeX et dans `biblatex`, mais l'idée générale reste la même :
on peut choisir la façon dont les citations sont mises en forme.
=======
Pour insérer les informations bibliographiques dans votre document LaTeX, il y a trois étapes. Tout d'abord, utilisez LaTeX pour compiler votre document, ce qui crée un fichier avec la liste des références que votre document cite.  Ensuite, lancez un programme qui extrait de la base de données bibliographique les entrées que vous utilisez et les met en ordre.  Enfin, recompilez votre document afin que LaTeX puisse utiliser ces informations pour insérer les références et les mettre en forme. En général, il faut au moins deux compilations pour résoudre toutes les références.

Pour la deuxième étape, deux systèmes sont largement utilisés : BibTeX et Biber. Biber n'est utilisé qu'avec un package LaTeX appelé `biblatex`, alors que BibTeX est utilisé soit sans aucun paquet particulier, soit avec `natbib`.

Le lancement d'un second outil en plus de de LaTeX est géré de différentes façons par les différents éditeurs. Pour les exemples sur _learnlatex.org_, nous avons écrit des scripts qui s'occupent de tout « en coulisses ». Votre éditeur préféré peut avoir un seul bouton « faire ce qu'il faut », ou bien vous pouvez choisir de lancer BibTeX ou Biber manuellement entre les exécutions de LaTeX.

Le format des citations et des références est indépendant de votre base de données BibTeX, et il est défini par ce que l'on appelle un « style ». Nous verrons qu'ils fonctionnent de façon légèrement différente dans le flux de travail BibTeX et dans `biblatex`, mais l'idée générale reste la même : on peut choisir la façon dont les citations sont mises en forme.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.


## La chaîne de traitement BibTeX avec `natbib`

<<<<<<< HEAD
S'il est possible d'insérer des citations dans un document LaTeX sans qu'aucun
package ne soit chargé, les possibilités sont assez limitées. Nous utiliserons
plutôt le package `natbib`, qui nous permet de créer différents types de
citations et qui propose de nombreux styles.

Voici la structure de base de notre exemple :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
=======
This is an entry for an article and another for a book; these are by far the most common
types. Each database entry type starts with `@`, as shown, and all of the
information then sits within a brace pair.

The various fields we need are given in key-value format, apart from what is
known as the 'key': the 'name' of the citation. You can use whatever you like,
as it's just a label, but above we've chosen to use the name of an author plus
the year: this is a common approach.

Exactly which fields you need to give depends on the type of entry, but most of
these are quite obvious. You might notice that in the `author` field, each entry
is separated by `and`. This is _essential_: the format of the _output_ needs to
know which author is which. You might also notice that in the article title,
some entries are in an extra set of braces; these are there to prevent any
case-changing being applied.

Editing `.bib` files by hand is rather tedious, so most people use a dedicated
editor. [JabRef](https://www.jabref.org) is widely used and cross-platform,
but there are several other interfaces available.
If the reference contains a DOI (Digital Object Identifier), you may want to
try [doi2bib](https://doi2bib.org) to easily get the BibTeX entry. But make sure
to check if the entry is correct!

Here, we will use the short
example database above for our demonstrations: we have 'saved' it as
`learnlatex.bib`.

## Transferring information from the database

To get the information into your document there are three steps.
First, use LaTeX to compile your document, which creates a file with a
list of the references that your document cites.  Second, run a
program that takes information from the database of references, picks
out the ones that you use, and puts them in order.  Finally, compile
your document again so that LaTeX can use that information to resolve
your citations. Usually it will require at least two compilations to
resolve all the references.

For the second step, there are two systems in wide use: BibTeX and
Biber. Biber is only ever used with a LaTeX package called `biblatex`, whereas
BibTeX is used with either no packages at all or with `natbib`.

Running a second tool as well as LaTeX is handled in different ways by different
editors. For our online examples, there are some 'behind the scenes' scripts
that do everything in one go.
Your editor might have a single 'do stuff' button or you might have to
choose to run BibTeX or Biber manually between LaTeX runs.

The format of citations and references is independent of your BibTeX database,
and is set by what is known as a 'style'. We will see that these work slightly
differently in the BibTeX workflow and `biblatex`, but the general idea remains:
we can choose how citations appear.

## The BibTeX workflow with `natbib`

Whilst it is possible to insert citations into a LaTeX document without
any packages loaded, this is rather limited. Instead, we will use the
`natbib` package, which allows us to create different types of citation and
has a lot of styles available.

The basic structure of our input is as shown in this example.

```latex
\documentclass{article}
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
S'il est possible d'insérer des citations dans un document LaTeX sans qu'aucun paquet ne soit chargé, les possibilités sont assez limitées. Nous utiliserons plutôt le package `natbib`, qui nous permet de créer différents types de citations et qui propose de nombreux styles.

Voici la structure de base de notre exemple :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
\usepackage{natbib}

\begin{document}
The mathematics showcase is from \citet{Graham1995}, whereas
there is some chemistry in \citet{Thomas2008}.

Some parenthetical citations: \citep{Graham1995}
and then \citep[p.~56]{Thomas2008}.

\citep[See][pp.~45--48]{Graham1995}

Together \citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
Comme vous voyez, on peut citer les entrées de la base de données en donnant
simplement leur clef. Le package `natbib` offre des styles de citation textuelle
ou parenthésée, `\citet` ou `\citep`, respectivement. Le style de référence est
sélectionné par la ligne `\bibliographystyle` ; ici nous avons utilisé le style
`plainnat`. La bibliographie est finalement insérée par la ligne `\bibliography`,
qui choisit également la ou les bases de données à utiliser ; il s'agit d'une
liste de noms de fichiers séparés par des virgules.

Les numéros de pages peuvent être ajoutés à la citation avec un argument
optionnel. Si deux arguments facultatifs sont donnés, le premier est placé
devant l'étiquette de la citation pour une courte note et le second après
l'étiquette, pour une référence de page.

L'exemple ci-dessus utilise le style auteur-année, mais on peut demander des
citations numériques. Cela se fait en ajoutant l'option `numbers` à la ligne
chargeant le package `natbib`.


## La chaîne de traitement avec `biblatex`

Le package `biblatex` fonctionne légèrement différemment de `natbib`, car
on doit sélectionner les bases de données dans le préambule, puis insérer
la bibliographie dans le corps du document. Il y a quelques nouvelles
commandes pour cela :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
=======
You can see that we can cite different entries in the database by giving their
key. The `natbib` package offers both textual and parenthetical citation styles,
`\citet` and `\citep`, respectively. The reference style is selected by the
`\bibliographystyle` line; here we've used the `plainnat` style. The
bibliography is actually inserted by the `\bibliography` line, which also picks
the database(s) to use; this is a comma-separated list of names.
=======
Comme vous voyez, on peut citer les entrées de la base de données en donnant simplement leur clef. Le paquet `natbib` offre des styles de citation textuelle ou parenthésée, `\citet` ou `\citep`, respectivement. Le style de référence est sélectionné par la ligne `\bibliographystyle` ; ici nous avons utilisé le style `plainnat`. La bibliographie est finalement insérée par la ligne `\bibliography`, qui choisit également la ou les bases de données à utiliser ; il s'agit d'une liste de noms de fichiers séparés par des virgules.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

Les numéros de pages peuvent être ajoutés à la citation avec un argument optionnel. Si deux arguments facultatifs sont donnés, le premier est placé devant l'étiquette de la citation pour une courte note et le second après l'étiquette, pour une référence de page.

L'exemple ci-dessus utilise le style auteur-année, mais on peut des citations numériques. Cela se fait en ajoutant l'option `numbers` à la ligne chargeant le package `natbib`.


## La chaîne de traitement avec `biblatex`

Le package `biblatex` fonctionne légèrement différemment de `natbib`, car on doit sélectionner les bases de données dans le préambule, puis insérer la bibliographie dans le corps du document. Il y a quelques nouvelles commandes pour cela:

```latex
\documentclass{article}
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % file of reference info

\begin{document}
The mathematics showcase is from \autocite{Graham1995}.

Some more complex citations: \parencite{Graham1995} or
\textcite{Thomas2008} or possibly \citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[See][45-48]{Graham1995}

Together \autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
Notez que `\addbibresource` a besoin du _nom complet du fichier_ de la base de
données, alors que nous avions omis le `.bib` pour `\bibliography` avec `natbib`.
Remarquez aussi que `biblatex` utilise des noms plus longs pour ses commandes de
citation, mais ceux-ci sont du coup plus explicites.

Là encore, de courts textes avant et après la citation peuvent être insérés avec
les arguments optionnels. Notez aussi que les numéros de page n'ont pas besoin
d'être préfixés par `p.~` ou `pp.~`, car `\biblatex` s'occupe d'ajouter
automatiquement le préfixe approprié.

Dans `biblatex`, le style des références bibliographiques est choisi au chargement
du package. Ici, nous avons utilisé `authoryear`, mais il y a un style `numeric`,
et beaucoup d'autres.
=======
Notez que `\addbibresource` a besoin du _nom complet du fichier_ de la base de données, alors que nous avions omis le `.bib` pour `\bibliography` avec `natbib``. Remarquez aussi que `biblatex` utilise des noms plus longs pour ses commandes de citation, mais ceux-ci sont du coup plus explicites.

Là encore, de courts textes avant et après la citation peuvent être insérés avec les arguments optionnels. Notez aussi que les numéros de page n'ont pas besoin d'être préfixés par `p.~` ou `pp.~`, car `\biblatex` s'occupe d'ajouter automatiquement le préfixe approprié.

Dans `biblatex`, le style des références bibliographiques est choisi au chargement du package. Ici, nous avons utilisé `authoryear`, mais il y a un style `numeric`, et beaucoup d'autres.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.


## Choisir entre BibTeX et `biblatex`

<<<<<<< HEAD
Même si les chaînes de traitement BibTeX et `biblatex` reçoivent tous deux leurs
données depuis des fichiers BibTeX et peuvent produire une sortie globalement
similaire dans le document, elles utilisent des moyens complètement différents
pour produire ce résultat. Cela signifie qu'il existe des différences entre les
deux approches qui peuvent vous aider à choisir celle qui vous convient le mieux.

Dans la chaîne de traitement BibTeX, le style de la bibliographie est déterminé
par un fichier `.bst` (_**b**ibliography **st**yle_) que vous sélectionnez avec
la commande `\bibliographystyle`. Biblatex n'utilise pas de fichiers `.bst` et
a un principe différent. Si vous utilisez un modèle fourni avec un fichier `.bst`
ou si vous recevez un fichier `.bst` pour votre projet, vous devez utiliser
BibTeX et ne pourrez pas utiliser `biblatex`.

L'approche différente adoptée par `biblatex` permet que vous modifiiez la sortie
de la bibliographie et des commandes de citation directement dans le préambule
de votre document en utilisant des commandes LaTeX. Inversement, les
modifications des styles `.bst` de BibTeX nécessitent de travailler sur ces
fichiers externes et nécessitent de connaître le langage de programmation BibTeX.
D'une manière générale, on dit que `biblatex` est plus facile à personnaliser que BibTeX.

Dans `biblatex`, il est généralement plus facile d'implémenter des styles de
citation élaborés, avec un plus grand nombre de commandes de citation
différentes. Il offre également des fonctionnalités davantage liées au contexte.
En gros, cela est moins intéressant pour les styles courants dans les sciences
dures, mais devient pertinent pour les styles plus complexes utilisés dans
certains domaines des sciences humaines.

BibTeX ne peut trier correctement que des caractères US-ASCII et s'appuie sur
des solutions de contournement pour trier les caractères non US-ASCII. Avec
Biber, `biblatex` offre des capacités complètes de tri des caractères Unicode.
Ainsi, `biblatex` est généralement un meilleur choix si vous souhaitez trier
votre bibliographie dans un ordre non-ASCII/non-anglais.

La chaîne de traitement BibTeX existe depuis bien plus longtemps que le
`biblatex`, ce qui signifie que de nombreux éditeurs et revues s'attendent
à ce que les bibliographies soient générées avec BibTeX. Ces éditeurs ne peuvent
pas ou n'acceptent généralement pas les soumissions utilisant `biblatex`.

Au final : Vérifiez les instructions aux auteurs si vous soumettez à une revue
ou à un éditeur. Si vous recevez un fichier `.bst`, vous devez utiliser la
chaîne BibTeX. Si vous souhaitez une bibliographie et un style de citation
relativement simples et que vous n'avez besoin que d'un tri basé sur l'US-ASCII
anglais, BibTeX devrait suffire. Si par contre vous avez besoin d'un style de
citation plus complexe, d'un tri non anglais ou si vous souhaitez un accès plus
facile aux fonctions de personnalisation du style de citation et de
bibliographie, vous envisagerez plutôt d'utiliser `biblatex`.
=======
Même si les chaînes de traitement BibTeX et `biblatex` reçoivent tous deux leurs données depuis des fichiers BibTeX et peuvent produire une sortie globalement similaire dans le document, elles utilisent des moyens complètement différents pour produire ce résultat. Cela signifie qu'il existe des différences entre les deux approches qui peuvent vous aider à choisir celle qui vous convient le mieux.

Dans la chaîne de traitement BibTeX, le style de la bibliographie est déterminé par un fichier `.bst` (_**b**ibliography **st**yle_) que vous sélectionnez avec la commande `\bibliographystyle`. Biblatex n'utilise pas de fichiers `.bst` et a un principe différent. Si vous utilisez un modèle fourni avec un fichier `.bst` ou si vous recevez un fichier `.bst` pour votre projet, vous devez utiliser BibTeX et ne pourrez pas utiliser `biblatex`.

L'approche différente adoptée par `biblatex` permet que vous modifiiez la sortie de la bibliographie et des commandes de citation directement dans le préambule de votre document en utilisant des commandes LaTeX. Inversement, les modifications des styles `.bst` de BibTeX nécessitent de travailler sur ces fichiers externes et nécessitent de connaître le langage de programmation BibTeX. D'une manière générale, on dit que `biblatex` est plus facile à personnaliser que BibTeX.

Dans `biblatex`, il est généralement plus facile d'implémenter des styles de citation élaborés, avec un plus grand nombre de commandes de citation différentes. Il offre également des fonctionnalités davantage liées au contexte. En gros, cela est moins intéressant pour les styles courants dans les disciplines des sciences dures, mais devient pertinent pour les styles plus complexes utilisés dans certains domaines des sciences humaines.

BibTeX ne peut trier correctement que des caractères US-ASCII et s'appuie sur des solutions de contournement pour trier les caractères non US-ASCII. Avec Biber, `biblatex` offre des capacités complètes de tri des caractères Unicode. Ainsi, `biblatex` est généralement un meilleur choix si vous souhaitez trier votre bibliographie dans un ordre non-ASCII/non-anglais.

La chaîne de traitement BibTeX existe depuis bien plus longtemps que le `biblatex`, ce qui signifie que de nombreux éditeurs et revues s'attendent à ce que les bibliographies soient générées avec BibTeX. Ces éditeurs ne peuvent pas ou n'acceptent généralement pas les soumissions utilisant `biblatex`.

Au final : Vérifiez les instructions aux auteurs si vous soumettez à une revue ou à un éditeur. Si vous recevez un fichier `.bst`, vous devez utiliser la chaîne BibTeX. Si vous souhaitez une bibliographie et un style de citation relativement simples et que vous n'avez besoin que d'un tri basé sur l'US-ASCII anglais, BibTeX devrait suffire. Si par contre vous avez besoin d'un style de citation plus complexe, d'un tri non anglais ou si vous souhaitez un accès plus facile aux fonctions de personnalisation du style de citation et de bibliographie, vous envisagerez plutôt d'utiliser `biblatex`.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.


## Travaux pratiques

<<<<<<< HEAD
Essayez les exemples `natbib` et `biblatex`. Pour `natbib`, vous devrez exécuter
LaTeX, BibTeX, LaTeX, LaTeX ; pour `biblatex`, c'est LaTeX, Biber, LaTeX.
Découvrez comment faire cela dans votre éditeur, ou essayez les automatismes
d'Overleaf et LaTeX Online.

Regardez ce qui se passe lorsque vous créez de nouvelles entrées dans la base
de données et de nouvelles citations. Ajoutez une citation qui n'est pas dans
la base de données et observez comment elle apparaît. Expérimentez avec l'option
`numeric` de `natbib` et l'option `style=numeric` de `biblatex`.
=======
Notice that `\addbibresource` _requires_ the full database filename, whereas
we omitted the `.bib` for `\bibliography` with `natbib`. Also notice that
`biblatex` uses rather longer names for its citation commands, but these are
all quite easy to guess.

Again, short text before and after the citation can be inserted with
the optional arguments. Note that the page numbers need not be prefixed
with `p.~` or `pp.~` here, `biblatex` can automatically add the appropriate
prefix.


In `biblatex`, the reference style is picked when we load the package. Here,
we've used `authoryear`, but there is a `numeric` style and many others are
also available.

## Choosing between the BibTeX workflow and `biblatex`

Even though both the BibTeX workflow and `biblatex` get their input via BibTeX
files and can produce structurally similar output in the document, they use
completely different ways to produce this result. That means that there are
some differences between the two approaches that may help you choose which
one works best for you.

In the BibTeX workflow the bibliography style is ultimately decided
by a `.bst` file which you select with the `\bibliographystyle` command.
`biblatex` does not use `.bst` files and uses a different system.
If you are using a template that comes with a `.bst` file or are given a `.bst`
file for your project, you must use the BibTeX workflow and cannot use
`biblatex`.

The different approach `biblatex` takes implies that you can modify the output
of the bibliography and citation commands directly from your document preamble
using LaTeX-based commands. Modifications of BibTeX `.bst` styles on the other
hand usually require working with these external files and need knowledge of
the BibTeX programming language. Generally speaking, `biblatex` is said to be
easier to customise than the BibTeX workflow.

In `biblatex` it is generally easier to implement more elaborate citation
styles with a wider array of different citation commands. It also offers more
context-dependent features. Roughly speaking this is less interesting for
the styles common in many STEM subjects, but becomes relevant for some more
complex styles in some areas of the humanities.

BibTeX can only sort US-ASCII characters correctly and relies on workarounds
to provide US-ASCII-based sorting for non-US-ASCII characters.
With Biber `biblatex` offers full Unicode sorting capabilities. Thus `biblatex`
is usually a better choice if you want to sort your bibliography in a
non-ASCII/non-English order.

Having been around for much longer than `biblatex`, the BibTeX workflow is
more established than `biblatex`, meaning that many publishers and journals
expect bibliographies generated via the BibTeX workflow. Those publishers
cannot or generally do not accept submissions using `biblatex`.

The bottom line is: Check the author/submission guidelines if you are
submitting to a journal or publisher. If you are given a `.bst` file, you must
use the BibTeX workflow. If you want a relatively simple bibliography and
citation style and only need English US-ASCII-based sorting, the BibTeX workflow
should suffice. If you need a more complex citation style, non-English sorting
or want easier access to citation and bibliography style customisation features,
you will want to look into using `biblatex`.

## Exercises

Try out both the `natbib` and `biblatex` examples. For `natbib`, you'll need
to run LaTeX, BibTeX, LaTeX, LaTeX; for `biblatex`, it's LaTeX, Biber, LaTeX.
Find out how to do that in your editor, or try the Overleaf and LaTeX Online
automation.

See what happens when you create new database entries and new citations. Add
a citation that's not in the database and see how it appears. Experiment
with `natbib`'s `numeric` and `biblatex`'s `style=numeric` option.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Essayez les exemples `natbib` et `biblatex`. Pour `natbib`, vous devrez exécuter LaTeX, BibTeX, LaTeX, LaTeX ; pour `biblatex`, c'est LaTeX, Biber, LaTeX. Découvrez comment faire cela dans votre éditeur, ou essayez les automatismes de Overleaf et LaTeX Online.

Regardez ce qui se passe lorsque vous créez de nouvelles entrées dans la base de données et de nouvelles citations. Ajoutez une citation qui n'est pas dans la base de données et observez comment elle apparaît. Expérimentez avec l'option `numeric` de `natbib` et l'option `style=numeric` de `biblatex`.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
