---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
title: "S'organiser pour écrire un document long: pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
title: "S'organiser pour écrire un document long: pour aller plus loin"
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
---

## Ajouter un index

Selon le type de document que vous rédigez, vous pouvez vouloir un index. Sa construction est automatisée par le package `imakeidx`, et ça fonctionne en interne un peu comme une bibliographie: LaTeX écrit puis relit des fichiers auxiliaires. Vous aurez besoin de trois instructions :

<<<<<<< HEAD
<<<<<<< HEAD
- The `\makeindex` command, which enables creation of an index
- The `\index` command, which marks up index entries
- The `\printindex` command, which prints the index
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
- La commande `\makeindex`, qui initialise la création d'un index,
- La commande `\index`, qui permet de définir les entrées de l'index au fil du texte,
- La commande `\printindex`, qui insère l'index dans le document.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
- La commande `\makeindex`, qui initialise la création d'un index,
- La commande `\index`, qui permet de définir les entrées de l'index au fil du texte,
- La commande `\printindex`, qui insère l'index dans le document.
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

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
=======
Nous avons illustré ici deux fonctionnalités de la création d'un index : la subdivision en utilisant `!`, et l'affichage de quelque chose de différent du « texte de tri » d'une entrée d'index en utilisant `@`. On peut personnaliser beaucoup de choses dans un index ; testez l'exemple et regardez comment ça fonctionne.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
Nous avons illustré ici deux fonctionnalités de la création d'un index : la subdivision en utilisant `!`, et l'affichage de quelque chose de différent du « texte de tri » d'une entrée d'index en utilisant `@`. On peut personnaliser beaucoup de choses dans un index ; testez l'exemple et regardez comment ça fonctionne.
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
=======
title: "More on: Structuring longer documents (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "S'organiser pour écrire un document long: pour aller plus loin"
---

## Ajouter un index

Selon le type de document que vous rédigez, vous pouvez vouloir un index. Sa construction est automatisée par le package `imakeidx`, et ça fonctionne en interne un peu comme une bibliographie: LaTeX écrit puis relit des fichiers auxiliaires. Vous aurez besoin de trois instructions :

- La commande `\makeindex`, qui initialise la création d'un index,
- La commande `\index`, qui permet de définir les entrées de l'index au fil du texte,
- La commande `\printindex`, qui insère l'index dans le document.

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

Nous avons illustré ici deux fonctionnalités de la création d'un index : la subdivision en utilisant `!`, et l'affichage de quelque chose de différent du « texte de tri » d'une entrée d'index en utilisant `@`. On peut personnaliser beaucoup de choses dans un index ; testez l'exemple et regardez comment ça fonctionne.
>>>>>>> 91fc72e5... Conversion of all files to UTF-8.
