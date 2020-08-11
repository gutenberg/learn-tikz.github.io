---
<<<<<<< HEAD
<<<<<<< HEAD
title: "S'organiser pour écrire un document long : pour aller plus loin"
---

## Ajouter un index

Selon le type de document que vous rédigez, vous pouvez vouloir un index. Sa
construction est automatisée par le package `imakeidx`, et ça fonctionne en
interne un peu comme une bibliographie : LaTeX écrit puis relit des fichiers
auxiliaires. Vous aurez besoin de trois instructions :

- La commande `\makeindex`, qui initialise la création d'un index,
- La commande `\index`, qui permet de définir les entrées de l'index au fil du texte,
- La commande `\printindex`, qui insère l'index dans le document.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Structuring longer documents"
---

## Making an index

Depending on the type of document you are writing, you might want to include
an index. This is a bit like making a bibliography, as it uses auxiliary files.
Luckily, this is all automated by the `imakeidx` package. We need three
instructions to LaTeX:

- The `\makeindex` command, which enables creation of an index
- The `\index` command, which marks up index entries
- The `\printindex` command, which prints the index
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Some text about Foo\index{foo}.
More text\index{baz!bar}.
Even more text\index{alpha@$\alpha$}.
More text about a different part of baz\index{baz!wibble}.

\clearpage
Some text about Foo\index{foo} again, on a different page.
Even more text\index{beta@$\beta$}.
Even more text\index{gamma@$\gamma$}.
\printindex
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
Nous avons illustré ici deux fonctionnalités de la création d'un index : la
subdivision en utilisant `!`, et l'affichage de quelque chose de différent du
« texte de tri » d'une entrée d'index en utilisant `@`. On peut personnaliser
beaucoup de choses dans un index ; testez l'exemple et regardez comment ça
fonctionne.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
We've shown two features of indexing here: subdivision using `!`, and printing
something different from the 'sort text' of an index entry using `@`. There
is a lot of customisation possible with an index; try out the example and see
how it works.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
