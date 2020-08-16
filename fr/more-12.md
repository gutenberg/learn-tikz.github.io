---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD

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
=======
title: "Bibliographies et références biblio: pour aller plus loin"
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
---

## Le tri pour d'autres langues que l'anglais

Le programme BibTeX a été écrit principalement pour traiter des références en anglais. Il est resté très limité dans sa gestion des caractères accentués, et encore plus limité avec les lettres non-latines. En revanche, le programme Biber a été écrit dès le départ pour gérer correctement toutes les langues, y compris quand elles sont mélangées.

Donc si vous voulez triez votre bibliographie dans un ordre autre que l'ordre anglais, vous avez vraiment intérêt à utiliser `biblatex` et Biber, plutôt que `natbib` et BibTeX.


## Des hyperliens dans les bibliographies

Si vous chargez le paquet `hyperref`, [comme on l'a vu plus tôt](more-09), il transformera automatiquement certaines parties de votre bibliographie en liens hypertextes. C'est notamment utile pour les URL et les DOI.


## Les bonnes pratiques avec BibTeX peuvent dépendre des styles

<<<<<<< HEAD
In order to be able to make use of the full potential of your used style you
will have to find out the set of fields it supports and their semantic.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
La syntaxe globale des fichiers BibTeX est la même, que vous utilisiez la chaîne BibTeX ou `biblatex`, mais les champs pris en charge (utilisés par le style) et leur signification exacte peuvent non seulement varier entre BibTeX et `biblatex`, mais aussi entre les différents styles BibTeX. Beaucoup de types d'entrées et de champs sont communs à presque tous les styles, mais pas tous.

Par exemple l'URL: certains anciens styles BibTeX `.bst` (notamment les « styles BibTeX standards », comme `plain.bst`, `unsrt.bst`...) sont antérieurs à l'invention de l'URL et ne comportent pas de champ dédié à l'URL d'une ressource en ligne. De nombreux styles plus récents possèdent, eux, un champ `url` dédié. Une solution simple pour afficher l'URL avec les anciens styles est d'utiliser le champ `howpublished`, mais avec les nouveaux styles, il vaut bien sûr mieux utiliser le champ `url`, fait pour ça.

Pour mettre à profit tout le potentiel du style que vous aurez choisi, il vous faudra découvrir l'ensemble des champs qu'il supporte et leur sémantique.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
=======
title: "More on: Citations and references (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Bibliographies et références biblio: pour aller plus loin"
=======
title: "Bibliographies et références biblio : pour aller plus loin"
>>>>>>> faf19621... I've made spacing around : and ; consistent.
---

## Le tri pour d'autres langues que l'anglais

Le programme BibTeX a été écrit principalement pour traiter des références en anglais. Il est resté très limité dans sa gestion des caractères accentués, et encore plus limité avec les lettres non-latines. En revanche, le programme Biber a été écrit dès le départ pour gérer correctement toutes les langues, y compris quand elles sont mélangées.
=======
>>>>>>> 5fff9b4b... Line wrapping to 80 columns.

Donc si vous voulez triez votre bibliographie dans un ordre autre que l'ordre
anglais, vous avez vraiment intérêt à utiliser `biblatex` et Biber, plutôt que
`natbib` et BibTeX.


## Des hyperliens dans les bibliographies

Si vous chargez le package `hyperref`, [comme on l'a vu plus tôt](more-09), il
transformera automatiquement certaines parties de votre bibliographie en liens
hypertextes. C'est notamment utile pour les URL et les DOI.


## Les bonnes pratiques avec BibTeX peuvent dépendre des styles

<<<<<<< HEAD
La syntaxe globale des fichiers BibTeX est la même, que vous utilisiez la chaîne BibTeX ou `biblatex`, mais les champs pris en charge (utilisés par le style) et leur signification exacte peuvent non seulement varier entre BibTeX et `biblatex`, mais aussi entre les différents styles BibTeX. Beaucoup de types d'entrées et de champs sont communs à presque tous les styles, mais pas tous.

Par exemple l'URL : certains anciens styles BibTeX `.bst` (notamment les « styles BibTeX standards », comme `plain.bst`, `unsrt.bst`...) sont antérieurs à l'invention de l'URL et ne comportent pas de champ dédié à l'URL d'une ressource en ligne. De nombreux styles plus récents possèdent, eux, un champ `url` dédié. Une solution simple pour afficher l'URL avec les anciens styles est d'utiliser le champ `howpublished`, mais avec les nouveaux styles, il vaut bien sûr mieux utiliser le champ `url`, fait pour ça.

Pour mettre à profit tout le potentiel du style que vous aurez choisi, il vous faudra découvrir l'ensemble des champs qu'il supporte et leur sémantique.
>>>>>>> 91fc72e5... Conversion of all files to UTF-8.
=======
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
>>>>>>> 5fff9b4b... Line wrapping to 80 columns.
