---
<<<<<<< HEAD
<<<<<<< HEAD
title: "Choisir des polices de caractères et utiliser Unicode"
---

Lorsque TeX et LaTeX ont commencé à être largement utilisés, ils ne traitaient
en général que les langues européennes, même s'il était déjà possible d'utiliser
d'autres alphabets par exemple pour le grec et le russe.


À l'origine, les accents et les lettres accentuées étaient saisis en utilisant
des séquences de contrôle ou des macros telles que `\c{c}` pour « ç » et `\'e`
pour « é ». Certaines personnes continuent à utiliser ces méthodes de saisie,
par habitude ou parce qu'elles sont plus commodes sur certains claviers,
mais ce n'est généralement plus utile, et on peut actuellement taper ces
symboles directement avec les touches de son clavier.

Avant Unicode, LaTeX fournissait déjà le support de nombreux types d'*encodage
de fichiers* qui permettaient d'écrire du texte dans différentes langues en
natif ; par exemple, en utilisant l'encodage `latin1` les utilisateurs français
pouvaient (et peuvent toujours) écrire `déjà vu` et LaTeX traduisait en interne
les lettres accentuées en commandes TeX pour produire la sortie correcte sans
la gymnastique précédente (`d\'ej\`a{} vu`), depuis longtemps inutile.

Cette approche est toujours utilisée en LaTeX moderne quand on utilise le moteur
`pdflatex`. Par défaut, tous les fichiers sont supposés être en Unicode (encodés
en UTF-8), sauf indication contraire. Bien que ce moteur soit limité aux polices
8&nbsp;bits, la plupart des langues européennes sont supportées.

La sélection des polices avec `pdflatex` utilise un mécanisme robuste, et de nos
jours il existe de nombreuses polices prêtes à l'emploi dans une distribution
LaTeX standard. Par exemple, les polices TeX Gyre sont une suite de polices
d'excellente qualité, dérivées de polices très répandues, comme Times, Helvetica,
Palatino, et d'autres. Charger ces polices est aussi simple que de charger
n'importe quel package, quand on connaît son nom, avec le nom approprié. Ainsi
avec TeX Gyre, pour avoir une police similaire à Times, il faut appeler
« Termes » :

=======
title: "Selecting fonts and using Unicode engines"
---

When TeX and LaTeX first started being widely used they largely only handled
European languages out of the box, although there was some capability for using
other alphabets such as Greek and Russian.

Originally, accents and accented letters were typed using control sequences or
macros such as `\c{c}` for ‘ç’ and `\'e` for ‘é’. While some people continue to
use these input methods because they can be easier to type, others wanted to be
able to use the keys on their keyboards to input such symbols directly.

Before Unicode, LaTeX provided support for many types of *file encoding* that
allowed text to be written in various languages natively — for example, using
the `latin1` encoding French users could write ‘`déjà vu`’ and LaTeX would
internally translate the accented letters into TeX commands to produce the
correct output.

This approach is still in use in modern LaTeX when using the `pdflatex` engine.
By default all files are assumed to be Unicode (UTF-8 encoded) unless otherwise
specified. Although this engine is limited to 8-bit fonts, most European
languages can be supported.

Font selection with `pdflatex` uses the robust LaTeX font selection scheme, and
nowadays there are many fonts ready-to-use in a standard LaTeX distribution. For
example, the TeX Gyre fonts are a suite of high-quality fonts based on common
fonts that most people are familiar with such as Times, Helvetica, Palatino, and
others. To load these fonts, it is as simple as loading a package with the
appropriate name. For a Times lookalike, the TeX Gyre name is Termes:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
title: "Choisir des polices de caractères et utiliser Unicode"
---

Lorsque TeX et LaTeX ont commencé à être largement utilisés, ils ne traitaient en général que les langues européennes, même s'il était déjà possible d'utiliser d'autres alphabets par exemple pour le grec et le russe.


À l'origine, les accents et les lettres accentuées étaient tapés en utilisant des séquences de contrôle ou des macros telles que `\c{c}` pour « ç » et `\'e` pour « é ». Certaines personnes continuent à utiliser ces méthodes de saisie, par habitude ou parce qu'elles sont plus faciles à taper sur certains claviers, d'autres voulaient pouvoir utiliser les touches de leur clavier pour saisir directement de tels symboles.

Avant Unicode, LaTeX fournissait déjà le support de nombreux types d'*encodage de fichiers* qui permettaient d'écrire du texte dans différentes langues en natif ; par exemple, en utilisant l'encodage `latin1` les utilisateurs français pouvaient (et peuvent toujours) écrire `déjà vu` et LaTeX traduisait en interne les lettres accentuées en commandes TeX pour produire la sortie correcte sans la gymnastique précédente (`d\'ej\`a{} vu`), depuis longtemps inutile.

Cette approche est toujours utilisée en LaTeX moderne quand on utilise le moteur `pdflatex`. Par défaut, tous les fichiers sont supposés être Unicode (encodés en UTF-8), sauf indication contraire. Bien que ce moteur soit limité aux polices 8 bits, la plupart des langues européennes sont supportées.

La sélection des polices avec `pdflatex` utilise un mécanisme robuste, et de nos jours il existe de nombreuses polices prêtes à l'emploi dans une distribution LaTeX standard. Par exemple, les polices TeX Gyre sont une suite de polices d'excellente qualité, dérivées de polices très répandues, comme Times, Helvetica, Palatino, et d'autres. Charger ces polices est aussi simple que de charger n'importe quel package, quand on connaît son nom, avec le nom approprié. Ainsi avec TeX Gyre, pour avoir une police similaire à Times, il faut appeler « Termes » :

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\usepackage{tgtermes}
```
{: .noedit :}

<<<<<<< HEAD
<<<<<<< HEAD
Avec `pdflatex`, la plupart des polices sont accessibles par des packages. Vous
pouvez consulter le [Catalogue des polices LaTeX](https://www.tug.org/FontCatalogue/)
ou la [page CTAN sur le thème des polices](https://www.ctan.org/topic/font)
(en anglais) pour voir quelques options disponibles. Vous pouvez également
rechercher sur internet la police que vous souhaitez, et chercher ensuite une
version de package compatible avec `pdflatex`. Pour certaines polices
propriétaires, il existe un clone approprié, qui pour la plupart des applications
est assez similaire à l'original.
=======
Avec `pdflatex`, la plupart des polices sont accessibles par des packages. Vous pouvez consulter le [Catalogue des polices LaTeX](https://www.tug.org/FontCatalogue/) ou la [page CTAN sur le thème des polices](https://www.ctan.org/topic/font) (en anglais) pour voir quelques options disponible.  Vous pouvez également rechercher sur internet la police que vous souhaitez, et chercher ensuitye une version de package compatible avec `pdflatex`. Pour certaines polices propriétaires, il existe un clone approprié, qui pour la plupart des applications est assez similaire à l'original.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.


## L'ère Unicode

<<<<<<< HEAD
Comme `pdflatex` est limité aux encodages de fichiers et aux polices 8&nbsp;bits,
il ne peut pas utiliser nativement les polices OpenType modernes et passer
facilement d'une langue à l'autre en utilisant des différents alphabets (ou
« scripts », pour utiliser le terme technique). Il y a deux remplacements pour
pdfTeX qui utilisent nativement des entrées Unicode et les polices modernes :
XeTeX et LuaTeX. Pour LaTeX, elles sont généralement invoquées dans votre
éditeur en utilisant les moteurs `xelatex` et `lualatex` respectivement.

Avec ces moteurs, la sélection de la police est effectuée au moyen du package
`fontspec`, et pour les documents simples elle peut être aussi triviale ça :

=======
For `pdflatex`, most fonts are accessible through packages.  You can have a look
at [The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) or the
[CTAN page on the ‘Font’ topic](https://www.ctan.org/topic/font) to see some
options.  You can also search on the Internet for the font you want, and look
for a `pdflatex`-compatible package version.  If you want to use a proprietary
font, you can search for a suitable clone, which for most applications is
similar enough to the original.

## The Unicode era

As `pdflatex` is limited to 8-bit file encodings and 8-bit fonts, it cannot
natively use modern OpenType fonts and easily switch between multiple languages
that use different alphabets (or scripts, to use the technical term). There are
two replacements for pdfTeX that natively use Unicode input and modern fonts:
XeTeX and LuaTeX. For LaTeX, these are typically invoked in your editor using
the engines `xelatex` and `lualatex` respectively.

In these engines, font selection is performed by the `fontspec` package, and for
simple documents can look as easy as:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Comme `pdflatex` est limité aux encodages de fichiers et aux polices 8 bits, il ne peut pas utiliser nativement les polices OpenType modernes et passer facilement d'une langue à l'autre en utilisant des différents alphabets (ou « scripts », pour utiliser le terme technique). Il y a deux remplacements pour pdfTeX qui utilisent nativement des entrées Unicode et les polices modernes : XeTeX et LuaTeX. Pour LaTeX, elles sont généralement invoquées dans votre éditeur en utilisant les moteurs `xelatex` et `lualatex` respectivement.

Avec ces moteurs, la sélection de la police est effectuée au moyen du package `fontspec`, et pour les documents simples elle peut être aussi triviale ça :

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

<<<<<<< HEAD
<<<<<<< HEAD
Cela permet de sélectionner la police TeX Gyre Termes, comme dans l'exemple
`pdflatex` ci-dessus. Mais cette approche fonctionne pour **toutes** les polices
OpenType. De plus, les polices disponibles pour `pdflatex` restent disponibles
pour `xelatex` et `lualatex` grâce à leurs packages respectifs (ou en chargeant
la police avec `fontspec`, si vous l'avez installée sur votre ordinateur). Le
[Catalogue des polices LaTeX](https://www.tug.org/FontCatalogue/) donne la liste
des polices disponibles au format OpenType, vous pouvez donc l'utiliser pour
rechercher des polices, ainsi que la [page CTAN](https://www.ctan.org/topic/font)
mentionnée plus haut.

Après avoir sélectionné une police, le texte de votre document peut être saisi
directement en Unicode dans le code source. Voici un exemple présentant des
lettres latines et grecques ainsi que des idéogrammes CJK :
=======
This selects the TeX Gyre Termes font, as in the `pdflatex` example above.
Notably, this approach works for *any* OpenType font.  Some fonts available for
`pdflatex` are also available to `xelatex` and `lualatex` through their
respective packages as well, or by loading any font you have installed on your
computer by using `fontspec` as shown above.
[The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) also shows fonts
with OpenType formats available, so you can use that as a resource for looking
up fonts, as well as the [CTAN page](https://www.ctan.org/topic/font) mentioned
earlier.

Having selected a font,
input can now be typed directly in plain Unicode into a source document. Here is
an example showing some Latin and Greek letters as well as some CJK ideographs:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Cela permet de sélectionner la police TeX Gyre Termes, comme dans l'exemple `pdflatex` ci-dessus. Mais cette approche fonctionne pour **toutes** les polices OpenType.  De plus, les polices disponibles pour `pdflatex` restent disponibles pour `xelatex` et `lualatex` grâce à leurs packages respectifs (ou en chargeant la police avec `fontspec`, si vous l'avez installée sur votre ordinateur). Le [Catalogue des polices LaTeX](https://www.tug.org/FontCatalogue/) donne la liste des polices disponibles au format OpenType, vous pouvez donc l'utiliser pour rechercher des polices, ainsi que la [page CTAN](https://www.ctan.org/topic/font) mentionnée plus haut.

Après avoir sélectionné une police, le texte de votre document peut être saisi directement en Unicode dans le code source. Voici un exemple présentant des lettres latines et grecques ainsi que des idéogrammes CJK :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
Lors du passage d'une langue à l'autre, il est important de modifier également
des éléments comme les motifs de césure, etc. Les packages `babel` et
`polyglossia` sont là pour s'occuper de ça de façon robuste.
=======
When switching between languages it is usually important to also
change things like hyphenation patterns and so on, and the `babel` and
`polyglossia` packages both provide robust features to do this.


>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Lors du passage d'une langue à l'autre, il est important de modifier également des éléments comme les motifs de césure, etc. Les packages `babel` et `polyglossia` sont là pour s'occuper de ça de façon robuste.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
