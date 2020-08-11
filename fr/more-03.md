---
<<<<<<< HEAD
<<<<<<< HEAD
title: "Votre premier document avec LaTeX: pour aller plus loin"
---

## Exécuter LaTeX

[Comme vu précédemment](lesson-02), les documents LaTeX sont simplement du texte
en clair. Pour s'en rendre compte, essayez d'ouvrir votre premier document
dans un simple éditeur de texte, par exemple sous Windows avec Notepad. Vous
verrez le même texte que dans un éditeur LaTeX dédié, mais sans la mise en
couleur des mots-clefs.

Vous pouvez également compiler votre document LaTeX en PDF sans éditeur ;
cela signifie utiliser l'invite de commande (dans le terminal), mais ne vous
inquiétez pas si vous n'êtes pas familier avec cela. Si vous *êtes familier*,
vous pouvez naviguer jusqu'au répertoire contenant votre fichier source `.tex`
et lancer 

`pdflatex first`

ou

`pdflatex first.tex`

pour compiler votre PDF. Notez que l'extension `.tex` est optionnelle : LaTeX
supposera que les noms de fichiers se terminent par elle, sauf indication
contraire de votre part.


## Caractères spéciaux

Si vous avez besoin de taper un caractère spécial, la plupart du temps vous
pouvez simplement utiliser une barre oblique inversée devant ce caractère, par
exemple `\{` est utilisé pour obtenir un « { » littéral. Dans certains cas, vous
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
car `\\` est utilisé pour indiquer un retour à la ligne, et `\~` et `\^` sont
utilisés pour produire des accents tilde et circonflexe lorsqu'on utilise
uniquement des caractères ASCII en entrée.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Your first LaTeX document"
---

## Running LaTeX

As [detailed earlier](lesson-02), LaTeX documents are simply plain text. To see
this, try opening your first document in a simple text editor, for example
on Windows using Notepad. You should see the same text as in a dedicated LaTeX
editor, but without any highlight of keywords.

You can also convert to PDF without your editor; this means using the Command
Prompt/Terminal, so don't worry if you are not familiar with this. If you
*are*, you can navigate to the directory containing your `.tex` source file and
run

`pdflatex first`

or

`pdflatex first.tex`

to typeset your PDF. Notice that the `.tex` extension is optional: LaTeX will
assume files end with `.tex` unless you specify otherwise.

## Special characters

If you need to type in a special character, most of the time you can simply
use a backslash in front of it, so for example `\{` is used to print a literal
`{`. There are a few cases where you need to use a longer command instead:

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
