---
<<<<<<< HEAD
title: "Votre premier document avec LaTeX"
---

Notre premier document LaTeX va être très simple : l'idée est de vous montrer
à quoi ressemble un document et comment le compiler avec succès. C'est aussi
votre première chance de [voir comment utiliser les exemples de
`learnlatex.org`](help).

Si vous utilisez une installation LaTeX locale, créez dans votre éditeur un
nouveau fichier appelé `first.tex`, et copiez-collez le texte ci-dessous ou
tapez-le. Si vous utilisez le système en ligne, vous pouvez simplement cliquer
sur les boutons _LaTeX Online_ ou _Open in Overleaf_ dans l'exemple pour l'essayer !
Nous vous suggérons d'essayer les options en ligne même si vous avez configuré
LaTeX localement ; c'est une bonne occasion de voir comment fonctionnent les
différentes possibilités.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Bonjour tout le monde!

C'est mon premier document LaTeX.
\end{document}
```

Enregistrez le fichier et compilez-le pour obtenir document PDF ; si vous
utilisez une installation LaTeX locale, le bouton exact à presser dépendra de
l'éditeur que vous avez choisi. Vous devriez obtenir un fichier PDF qui
contient le texte ci-dessus _plus_ un numéro de page ; LaTeX l'ajoute
automatiquement.

Visualisez la sortie `first.pdf` avec le programme que vous préférez pour la
visualisation des PDF. Ça a l'air pas mal, félicitations !


## En cas d'erreur

Les erreurs, ça arrive. Vérifiez que vous avez saisi chaque ligne du fichier
texte exactement comme indiqué ci-dessus. Parfois, des modifications apparemment
mineures dans la saisie entraînent des modifications importantes dans le
résultat, jusqu'à empêcher le document de compiler. Si vous êtes bloqué, essayez
d'effacer complètement le document et de le copier à nouveau à partir des lignes
ci-dessus.

Si LaTeX arrête de compiler votre document et affiche un message se terminant
par un point d'interrogation, vous pouvez sortir en tapant `x` et `<Enter>`.

Les messages d'erreur de LaTeX essaient d'être utiles, mais ils ne sont pas du
même genre que les messages des traitements de texte. Certains éditeurs rendent
également difficile l'accès aux messages d'erreur complets, ce qui peut masquer
des détails importants. LaTeX crée toujours un journal de ce qu'il fait (un
fichier de _log_) ; il s'agit d'un fichier texte dont le nom se termine par
`.log`. Vous pouvez toujours y lire le texte complet des messages d'erreur et,
en cas de problème, les utilisateurs experts de LaTeX vous demanderont souvent
une copie de ce fichier journal.


## Ce qui s'est passé

Le premier document montre les bases. Les documents LaTeX sont un mélange de
texte et de commandes. Les commandes commencent par une barre oblique inversée
(``\``) et ont parfois des arguments entre accolades `{...}` (ou parfois des
arguments optionnels entre crochets `[...]`). Après avoir demandé à LaTeX
de compiler votre fichier, vous obtenez en sortie un fichier PDF.

Chaque document LaTeX comporte un `\begin{document}` (son début) et un
`\end{document}` (sa fin). Entre ces deux, il y a le _corps du document_, qui
contient votre texte. Ici, le corps comporte deux paragraphes (en LaTeX, vous
séparez les paragraphes par une ou plusieurs lignes blanches). Avant le
`\begin{document}` se trouve le _préambule du document_, qui contient le code
permettant de définir sa mise en page. La commande `\usepackage` sera décrite
dans [une leçon ultérieure](lesson-06) ; sous la forme utilisée ici
(`\usepackage[T1]{fontenc}`), elle apparaît dans la plupart des exemples de ce
site et sert à configurer l'encodage des polices.

LaTeX a d'autres paires `\begin{...}` et `\end{...}` ; celles-ci sont appelées
_environnements_. Vous devez les faire correspondre pour que pour chaque
`\begin{xx}`, il y ait un `\end{xx}`. Si vous les emboîtez, alors vous devez
avoir `\end{yy}` &hellip; `\end{xx}` pour correspondre à `\begin{xx}` &hellip; `\begin{yy}`,
c'est-à-dire que les ouvertures et fermetures doivent se correspondre dans
l'ordre.

On peut ajouter des commentaires à un fichier LaTeX en les faisant commencer par
`%` ; utilisons cela pour montrer la structure :

```latex
\documentclass[a4paper,12pt]{article} % La classe de document et ses options
\usepackage[T1]{fontenc}
% Un commentaire de le préambule

\begin{document}
% Ceci est un commentaire
Voici    un document très
simple\footnote{Avec une note de bas de page.}.

Et là, un nouveau paragraphe.
\end{document}
```

Vous pouvez voir ci-dessus que nous avons deux paragraphes : remarquez à nouveau
l'utilisation d'une ligne blanche pour cela. Remarquez également que les espaces
multiples sont traités comme une seule espace.

Vous pouvez aussi parfois vouloir une espace « dure » qui n'est jamais coupée
entre deux lignes (appelée pour ça _espace insécable_) : en LaTeX, ce type
d'espace est représenté par `~`, qui « lie » deux morceaux de texte ensemble.
Nous nous en servirons plus tard dans le cours pour insérer des références
croisées.


## Catactères spéciaux

Vous avez sans doute remarqué que les caractères ``\``, `{` et `}` ont une
signification particulière pour LaTeX. Un ``\`` démarre une instruction pour
LaTeX : une « commande ». Les accolades `{` et `}` sont utilisés pour encadrer
les _arguments obligatoires_, c'est à dire des informations requises par les
commandes.

D'autres caractères ont une signification particulière ; nous venons de voir
que `~` est une espace insécable, par exemple. Presque tous ces caractères sont
_très rares_ dans un texte normal, c'est pourquoi ils ont été choisis pour avoir
des significations spéciales. Si vous avez besoin de faire apparaître un de ces
caractères spéciaux dans votre document, nous avons mis quelques informations
[dans la leçon d'approfondissement](more-03).


## Travaux pratiques

Expérimentez le système d'édition et de compilation en ligne ; cliquez sur le
bouton pour commpiler le contenu, puis éditez-le dans la page web et
compilez-le à nouveau.

Essayez d'ajouter du texte à votre premier document, de le compiler et de voir
les changements dans votre PDF. Faites des paragraphes différents et ajoutez des
espaces variables. Explorez le fonctionnement de votre éditeur ; cliquez sur
votre fichier source et trouvez comment aller à la ligne correspondante dans
votre PDF. Essayez d'ajouter des espaces insécables et voyez comment ils
modifient la position des sauts de lignes.
=======
title: "Your first LaTeX document"
---

Our first LaTeX document is going to be very simple: the idea is to show you
how a document looks and how to typeset it successfully. It is also your
first chance to [see how to use the examples here on `learnlatex.org`](help).

If you are using a local LaTeX installation, in your editor create a new file
called `first.tex`, and either copy–paste the text below or type it in.
If you are using the online system, you can just click on the ‘LaTeX Online’
or ‘Open in Overleaf’ buttons in the
example to try it out! We suggest you try out the online options even if you
have set up LaTeX locally; this is a good chance to see how the different
options work.
```latex
\documentclass{article}

\begin{document}
Hey world!

This is a first document.
\end{document}
```
Save the file and typeset it to a PDF document; if you are using a local LaTeX
installation, the exact button to press will depend on the editor you have
picked. You should get a PDF file that contains the text above _plus_ a page
number; LaTeX adds that automatically.

View the output `first.pdf` with
whatever program you prefer for PDF viewing.
Looks great; congratulations!

## Handling errors

Errors happen.
Check that you have entered each line in the text file exactly as written above.
Sometimes seemingly small input changes give large changes in the
result, including causing a document to not work.
If you are stuck, try erasing the document and copying it fresh from the
lines above.

If your LaTeX typesetting run ends with a question mark then you can get out by
typing `x` and `<Enter>`.

LaTeX's error messages try to be helpful, but they are not the same as messages
in word processors. Some editors also make it hard to see the 'full' text of an
error, which can hide key details. LaTeX always creates a log of what it is
doing; this is a text file ending in `.log`. You can always see the full  error
messages there, and if you have a problem, expert LaTeX users will often ask for a
copy of your log file.

## What you've got

The first document shows the basics.
LaTeX documents are a mixture of text and commands.
The commands start with a backslash
and sometimes have arguments in curly braces
(or sometimes optional arguments in square brackets).
Then you get an output PDF by telling LaTeX to typeset your file.

Every LaTeX document has a `\begin{document}` and a matching
`\end{document}`.
Between these two is the *document body*, where your content goes.
Here the body has two paragraphs (in LaTeX you separate paragraphs
with one or more blank lines).
Before `\begin{document}` is the *document preamble*,
which has code to set up the document layout.

LaTeX has other `\begin{...}` and `\end{...}` pairs; these are
called *environments*.
You must match them so that for every `\begin{x}` there has to be an `\end{x}`.
If you nest them, then you must have `\end{y} ... \end{x}` to match
`\begin{x} ... \begin{y}`, i.e. the `\begin` and `\end` statements matching
in order.

We can add comments to a LaTeX file by starting them with `%`; let's use
that to show the structure:
```latex
\documentclass[a4paper,12pt]{article} % The document class with options
% A comment in the preamble
\begin{document}
% This is a comment
This is   a simple
document\footnote{with a footnote}.

This is a new paragraph.
\end{document}
```
You can see above that we've got two paragraphs: notice the use of a blank  line
to do that. Also notice that multiple spaces are treated as a single space.

You might also sometimes want a 'hard' space that does not break over lines: in
LaTeX we can create that using `~`, 'tying' two pieces of text together. That's
particularly useful when we start creating cross-references later in the course.

## Special characters

You've probably spotted that ``\``, `{` and `}` have a special meaning to LaTeX.
A ``\`` starts an instruction to LaTeX: a 'command'. The curly brace characters
 `{` and `}` are used to show _mandatory arguments_: information that commands
 require.

There are some other characters with special meaning; we've just seen that `~`
is a 'hard' space, for example. Almost all of these characters  are _very_
uncommon in normal text, which is why they were chosen for special meanings.
If you do need to show one of these special characters, we've put some
[information in the further details page](more-03).

## Exercise

Experiment with the online editing and typesetting system; click the
button to typeset the content, then edit it in the webpage and re-typeset it.

Try adding text to your first document, typesetting and seeing the changes in
your PDF. Make some different paragraphs and add variable spaces. Explore how
your editor works; click on your source and find how to go to the same line  in
your PDF. Try adding some hard spaces and see how they influence line-breaking.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
