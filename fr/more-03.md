---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Votre premier document avec LaTeX: pour aller plus loin"
---

## ExÃ©cuter LaTeX

[Comme vu prÃ©cÃ©demment](lesson-02), les documents LaTeX sont simplement du texte
en clair. Pour s'en rendre compte, essayez d'ouvrir votre premier document
dans un simple Ã©diteur de texte, par exemple sous Windows avec Notepad. Vous
verrez le mÃªme texte que dans un Ã©diteur LaTeX dÃ©diÃ©, mais sans la mise en
couleur des mots-clefs.

Vous pouvez Ã©galement compiler votre document LaTeX en PDF sans Ã©diteur ;
cela signifie utiliser l'invite de commande (dans le terminal), mais ne vous
inquiÃ©tez pas si vous n'Ãªtes pas familier avec cela. Si vous *Ãªtes familier*,
vous pouvez naviguer jusqu'au rÃ©pertoire contenant votre fichier source `.tex`
et lancer 

`pdflatex first`

ou

`pdflatex first.tex`

pour compiler votre PDF. Notez que l'extension `.tex` est optionnelle : LaTeX
supposera que les noms de fichiers se terminent par elle, sauf indication
contraire de votre part.


## CaractÃ¨res spÃ©ciaux

Si vous avez besoin de taper un caractÃ¨re spÃ©cial, la plupart du temps vous
pouvez simplement utiliser une barre oblique inversÃ©e devant ce caractÃ¨re, par
exemple `\{` est utilisÃ© pour obtenir un Â« { Â» littÃ©ral. Dans certains cas, vous
devrez utiliser une commande plus longue :

| Symbole | Commande courte (maths et texte) | Commande longue (texte seulement) |
| `{`     | `\{`            | `\textbraceleft`   |
| `}`     | `\}`            | `\textbraceright`  |
| `$`     | `\$`            | `\textdollar`      |
| `%`     | `\%`            |                    |
| `&`     | `\&`            |                    |
| `#`     | `\#`            |                    |
| `_`     | `\_`            | `\textunderscore`  |
| ``\``   |                 | `\textbackslash`   |
| `^`     |                 | `\textasciicircum` |
| `~`     |                 | `\textasciitilde`  |

Pour les trois derniers symboles, il n'y a pas de commandes courtes disponibles,
car `\\` est utilisÃ© pour indiquer un retour Ã  la ligne, et `\~` et `\^` sont
utilisÃ©s pour produire des accents tilde et circonflexe lorsqu'on utilise
uniquement des caractÃ¨res ASCII en entrÃ©e.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Your first LaTeX document"
=======
title: "Votre premier document avec LaTeX: pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
title: "Votre premier document avec LaTeX: pour aller plus loin"
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
---

## Exécuter LaTeX

[Comme vu plus haut](lesson-02), les documents LaTeX sont simplement du texte en clair. Pour s'en rendre compte, essayez d'ouvrir votre premier document dans un simple éditeur de texte, par exemple sous Windows avec Notepad. Vous verrez le même texte que dans un éditeur LaTeX dédié, mais sans aucune mise en couleur des mots-clefs.

Vous pouvez également compiler votre document LaTeX en PDF sans votre éditeur ; cela signifie utiliser l'invite de commande (dans le terminal), mais ne vous inquiétez pas si vous n'êtes pas familier avec cela. Si vous *êtes familier*, vous pouvez naviguer jusqu'au répertoire contenant votre fichier source `.tex` et lancer 

`pdflatex first`

ou

`pdflatex first.tex`

pour compiler votre PDF. Notez que l'extension `.tex` est optionnelle : LaTeX supposera que les fichiers se terminent par `.tex`, sauf indication contraire de votre part.
<<<<<<< HEAD


=======


>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
## Caractères spéciaux

If you need to type in a special character, most of the time you can simply
use a backslash in front of it, so for example `\{` is used to print a literal
`{`. There are a few cases where you need to use a longer command instead:

<<<<<<< HEAD
<<<<<<< HEAD
| Symbol | Short Command (math and text) | Long Command (for text only) |
| `{`    | `\{`          | `\textbraceleft`  |
| `}`    | `\}`          | `\textbraceright` |
| `$`    | `\$`          | `\textdollar`     |
| `%`    | `\%`          |                   |
| `&`    | `\&`          |                   |
| `#`    | `\#`          |                   |
| `_`    | `\_`          | `\textunderscore` |
| ``\``  |               | `\textbackslash`  |
| `^`    |               | `\textasciicircum`|
| `~`    |               | `\textasciitilde` |

For the last three symbols there are no short commands available,
because `\\` is used to indicate a linebreak and `\~` and `\^` are used
to produce tilde and circumflex accents when using only ASCII
characters as input.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
=======
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
Si vous avez besoin de taper un caractère spécial, la plupart du temps vous pouvez simplement utiliser une barre oblique inversée devant ce caractère, par exemple `\{` est utilisé pour imprimer un '{' littéral. Dans certains cas, vous devrez utiliser une commande plus longue :

| Symbole | Commande courte (maths et texte) | Commande longue (texte seulement) |
| `{`     | `\{`            | `\textbraceleft`   |
| `}`     | `\}`            | `\textbraceright`  |
| `$`     | `\$`            | `\textdollar`      |
| `%`     | `\%`            |                    |
| `&`     | `\&`            |                    |
| `#`     | `\#`            |                    |
| `_`     | `\_`            | `\textunderscore`  |
| ``\``   |                 | `\textbackslash`   |
| `^`     |                 | `\textasciicircum` |
| `~`     |                 | `\textasciitilde`  |

Pour les trois derniers symboles, il n'y a pas de commandes courtes disponibles, car `\\` est utilisé pour indiquer un retour à la ligne et `\~` et `\^` sont utilisés pour produire des accents tilde et circonflexe lorsqu'on utilise uniquement des caractères ASCII en entrée.
<<<<<<< HEAD
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
=======
title: "More on: Your first LaTeX document (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
