---
<<<<<<< HEAD
<<<<<<< HEAD
title: "Travailler avec LaTeX : pour aller plus loin"
---

Pour la plupart de nos exemples, nous n'utilisons pas le programme `latex`
lui-même mais plutôt `pdflatex`. Il fait partie d'une famille de programmes
apparentés, qui sont tous des « descendants » de `latex`. Nous avons choisi
`pdflatex` parce que c'est peut-être le système le plus utilisé et qu'il produit
directement des fichiers PDF.


## Formats et moteurs

Comme [décrit plus haut](more-01), LaTeX est construit par-dessus un système
appelé TeX. Nous appelons LaTeX un « format » : une collection de macros
(instructions et commandes) que TeX comprend. Lorsque vous lancez `pdflatex`,
vous lancez _en réalité_ un programme appelé « pdfTeX » avec un « format LaTeX »
préchargé. Nous appelons pdfTeX un _moteur_, c'est à dire un programme qui
comprend les instructions TeX.

Il y a trois moteurs courants en usage aujourd'hui :

- pdfTeX,
- XeTeX,
- LuaTeX.

Nous aborderons [XeTeX et LuaTeX plus tard](lesson-14) : tout ce que nous devons
savoir pour l'instant est qu'ils sont capables de charger les polices du système
d'exploitation, alors que pdfTeX ne peut pas le faire.

Si vous êtes au Japon, ou si vous écrivez beaucoup de japonais, vous pouvez
aussi rencontrer pTeX et upTeX. Ce sont des moteurs spécialisés pour la
composition verticale. LuaTeX peut faire beaucoup de choses, mais pour le
moment, upTeX est le système le plus populaire pour le japonais.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Working with LaTeX"
---

For most of our examples, we don't use a program called `latex` but instead
one called `pdflatex`. This is one of a family of related programs, all
of which are 'descendants' of `latex`. We have chosen `pdflatex` because
it is perhaps the most widely-used system and directly produces PDF files.

## Formats and engines

As described [earlier](more-01), LaTeX is built on a system called TeX. We
call LaTeX a 'format': a collection of macros (instructions and commands) that
TeX understands. When you run `pdflatex`, you are _actually_ starting a
program called 'pdfTeX' with a pre-loaded 'LaTeX format'. We normally call
pdfTeX an _engine_: a program that understands TeX instructions.

There are three engines in common use today:

- pdfTeX
- XeTeX
- LuaTeX

We will cover [XeTeX and LuaTeX later](lesson-14): the main thing we need to
know now is that they are capable of loading operating system fonts, whereas
pdfTeX can't do that.

If you are in Japan, or writing lots of Japanese, you might also come across
pTeX and upTeX. These are specialised engines for vertical typesetting. LuaTeX
can also do a lot of this, but at the moment upTeX, in particular, is still
the most popular system for Japanese.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
