---
<<<<<<< HEAD
<<<<<<< HEAD
title: "Bibliographies et références biblio : pour aller plus loin"
---

## Le tri pour d'autres langues que l'anglais

Le programme BibTeX a été écrit principalement pour traiter des références en
anglais. Il est resté très limité dans sa gestion des caractères accentués, et
encore plus limité avec les lettres non-latines. En revanche, le programme Biber
a été écrit dès le départ pour gérer correctement toutes les langues, y compris
quand elles sont mélangées.

Donc si vous voulez trier votre bibliographie dans un ordre autre que l'ordre
anglais, vous avez vraiment intérêt à utiliser `biblatex` et Biber, plutôt que
`natbib` et BibTeX.


## Des hyperliens dans les bibliographies

Si vous chargez le package `hyperref`, [comme on l'a vu plus tôt](more-09), il
transformera automatiquement certaines parties de votre bibliographie en liens
hypertextes. C'est notamment utile pour les URL et les DOI.


## Les bonnes pratiques avec BibTeX peuvent dépendre des styles

La syntaxe globale des fichiers BibTeX est la même, que vous utilisiez la chaîne
BibTeX ou `biblatex`, mais les champs pris en charge (utilisés par le style) et
leur signification exacte peuvent non seulement varier entre BibTeX et `biblatex`,
mais aussi entre les différents styles BibTeX. Beaucoup de types d'entrées et de
champs sont communs à presque tous les styles, mais pas tous.

Par exemple l'URL : certains anciens styles BibTeX `.bst` (notamment les
« styles BibTeX standards », comme `plain.bst`, `unsrt.bst`&hellip;) sont
antérieurs à l'invention de l'URL et ne comportent pas de champ dédié à l'URL
d'une ressource en ligne. De nombreux styles plus récents possèdent, eux, un
champ `url` dédié. Une solution simple pour afficher l'URL avec les anciens
styles est d'utiliser le champ `howpublished`, mais avec les nouveaux styles,
il vaut bien sûr mieux utiliser le champ `url`, fait pour ça.

Pour mettre à profit tout le potentiel du style que vous aurez choisi, il vous
faudra découvrir l'ensemble des champs qu'il supporte et leur sémantique.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Citations and references"
---

## Dealing with non-English sorting

The BibTeX program was written primarily to deal with references in English. It
is very limited in handling accented characters, and even more limited with
non-Latin letters. In contrast, the Biber program was written from the start to
handle a mix of scripts properly.

This means that if you are sorting your bibliography, and you need to sort in
anything other than English order, you really should be using `biblatex` and
Biber, rather than `natbib` and BibTeX.

## Hyperlinks

If you load the `hyperref` package (as covered [earlier](more-09)), it will
automatically make some content in your bibliography into links. This is
particularly useful for URLs and DOIs.

## Differences in best practice for BibTeX input between styles

While the overall syntax of the BibTeX files is the same whether you use the
BibTeX workflow or `biblatex`, the set of fields that is supported (used by the
style) and their exact meaning may not only vary between the BibTeX workflow
and `biblatex`, but also between different BibTeX styles. A large 'core set' of
entry types and fields is the same for almost all styles, but there are
differences in some fields.

A common example is the URL. Some older BibTeX `.bst` styles (most notably
the 'standard BibTeX styles', e.g. `plain.bst`, `unsrt.bst`, ...) predate
the invention of the URL and have no dedicated field for the URL of an online
resource. Many newer styles _do_ have a dedicated `url` field. The workaround
to show the URL in the older styles is usually to use the `howpublished` field,
but with the newer styles it is of course preferable to use the dedicated
`url` field.

In order to be able to make use of the full potential of your used style you
will have to find out the set of fields it supports and their semantic.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
