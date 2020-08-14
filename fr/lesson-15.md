---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Accessing documentation and getting help (French)"
=======
title: "Comprendre les erreurs"
>>>>>>> 08062c9f... French translation (#88)
=======
title: "Comprendre les erreurs"
>>>>>>> e2a0112e... French translation (#88)
---

Contrairement à un système de traitement de texte typique, LaTeX a un cycle
d'édition/exécution/visualisation plus proche de ce qu'on fait avec un
compilateur destiné à un langage de programmation ; comme en programmation,
l'utilisateur peut faire des erreurs pendant la saisie et doit donc lire et
comprendre les messages d'erreur renvoyés par le système pour corriger
rapidement les problèmes.

Cette page donne des exemples de quelques erreurs courantes. Chaque exemple
d'erreur comporte une explication sur la forme de son message.

Il sera instructif de tester les exemples mais vous apprendrez aussi beaucoup
si vous utilisez les fonctions d'édition de ce site web pour corriger les
documents et résoudre les problèmes.


## pdflatex not found

Une première erreur, fréquente quand on commence, est :
=======
title: "Dealing with errors"
=======
title: "Comprendre les erreurs"
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
---

Contrairement à un système de traitement de texte typique, LaTeX a un cycle d'édition/exécution/visualisation plus proche de ce qu'on fait avec un compilateur destiné à un langage de programmation ; comme en programmation, l'utilisateur peut faire des erreurs pendant la saisie et doit donc lire et comprendre les messages d'erreur renvoyés par le système pour corriger rapidement les problèmes.

Cette page donne des exemples de quelques erreurs courantes. Chaque exemple d'erreur comporte une explication sur la forme de son message.

Il sera instructif de tester les exemples mais vous apprendrez aussi beaucoup si vous utilisez les fonctions d'édition de ce site web pour corriger les documents et résoudre les problèmes.


## pdflatex not found

<<<<<<< HEAD
A common first error that people see when starting is:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Une première erreur, fréquente quand on commence, est :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

<<<<<<< HEAD
<<<<<<< HEAD
sous Windows ou
=======
on Windows or
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
sous Windows ou
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```
bash: pdflatex: command not found
```
{: .noedit :}

<<<<<<< HEAD
<<<<<<< HEAD
sous Linux.

Il ne s'agit pas d'une erreur de TeX mais d'une erreur du système d'exploitation,
indiquant que TeX n'est pas installé ou n'est pas trouvé. Une erreur courante
est d'installer un _éditeur_ tel que TeXworks ou TeXShop mais sans installer un
système TeX tel que TeX Live ou MiKTeX.


## Anatomie d'un message d'erreur de {{ site.tex }}
=======
on Linux.
=======
sous Linux.

Il ne s'agit pas d'une erreur de TeX mais d'une erreur du système d'exploitation, indiquant que TeX n'est pas installé ou n'est pas trouvé.  Une erreur courante est d'installer un _éditeur_ tel que TeXworks ou TeXShop mais sans installer un système TeX tel que TeX Live ou MiKTeX.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.


<<<<<<< HEAD
## Anatomy of a {{ site.tex }} error message
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
## Anatomie d'un message d'erreur de {{ site.tex }}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

My command is used here \mycommand.

\end{document}
```

<<<<<<< HEAD
produit un message de plusieurs lignes dans le fichier de log :
=======
This produces a multi-line message in the log file.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

produit un message de plusieurs lignes dans le fichier de log:

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}

<<<<<<< HEAD
<<<<<<< HEAD

* La première ligne, signalée par `!`, donne la nature générale de l'erreur
(commande non définie dans ce cas).
* Les deux lignes suivantes montrent la ligne que TeX était en train de traiter
quand l'erreur est apparue, avec un saut de ligne marquant l'emplacement exact
que TeX avait atteint. La commande indéfinie est le dernier jeton lu, donc le
dernier mot avant le saut de ligne, `\textbold` ici. Après le saut de ligne,
il y a les autres éléments `{hmmm}` qui ont peut-être été lus en argument mais
n'ont pas encore été exécutés par TeX.
* Il peut en général y avoir quelques lignes supplémentaires ici, montrant
davantage du contexte du message d'erreur.
* La dernière ligne commence par `l.` suivi d'un numéro de ligne, et ensuite la
ligne du fichier source où l'erreur est détectée.

* La dernière ligne est un `?`.  Si vous utilisez TeX de manière interactive,
il est possible d'entrer des instructions à TeX à ce stade, mais la plupart des
éditeurs et des systèmes en ligne exécutent TeX dans un mode qui ne s'arrête pas
aux erreurs et essaie de traiter la suite du document. En tapant `s` à l'invite,
vous indiquerez à TeX de continuer dans ce mode si vous travaillez de manière
interactive.

Notez ici que TeX ne voit pas l'erreur au moment où la définition est faite ;
et en fait, si `\mycommand` est définie mais jamais utilisée, aucune erreur
n'apparaît. Donc, bien que l'erreur soit signalée à la ligne 8, la « vraie »
erreur se trouve dans la définition à la ligne 3, il est donc important de lire
l'intégralité du message d'erreur.


Attention, certains éditeurs affichent une version « résumée » du journal des
erreurs. Cela peut être spécialement trompeur quand on se retrouve avec :

`line 8: undefined command: ...\mycommand`

car cela donne l'impression que `\mycommand` n'est pas définie.


## Accolades manquantes (ou en trop)
=======
* The first line, marked with `!`, gives the general nature of the error (undefined command in this case).
* The second pair of lines show the line that TeX was processing, with a line break marking the point
  that TeX had reached. The undefined command is the last token read so the last word before the line break,
  `\textbold` here. After the line break are the remaining tokens `{hmmm}` that have possibly been read as
  an argument but have not yet been executed by TeX.
* There may in general be some additional lines at this point, showing more context of the error message,
* The final line starts with `l.` followed by a line number, and then the line in the source file where the
  error is detected.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

* La première ligne, signalée par `!`, donne la nature générale de l'erreur (commande non définie dans ce cas).
* Les deux lignes suivantes montrent la ligne que TeX était en train de traiter quand l'erreur est apparue, avec un saut de ligne marquant l'emplacement exact que TeX avait atteint. La commande indéfinie est le dernier jeton lu, donc le dernier mot avant le saut de ligne, `\textbold` ici. Après le saut de ligne, il y a les autres éléments `{hmmm}` qui ont peut-être été lus en argument mais n'ont pas encore été exécutés par TeX.
* Il peut en général y avoir quelques lignes supplémentaires ici, montrant davantage du contexte du message d'erreur.
* La dernière ligne commence par `l.` suivi d'un numéro de ligne, et ensuite la ligne du fichier source où l'erreur est détectée.

* La dernière ligne est un `?`.  Si vous utilisez TeX de manière interactive, il est possible d'entrer des instructions à TeX à ce stade, mais la plupart des éditeurs et des systèmes en ligne exécutent TeX dans un mode qui ne s'arrête pas aux erreurs et essaie de traiter la suite du document. En tapant `s` à l'invite, vous indiquerez à TeX de continuer dans ce mode si vous travaillez de manière interactive.

Notez ici que TeX ne voit pas l'erreur au moment où la définition est faite ; et en fait, si `\mycommand` est définie mais jamais utilisée, aucune erreur n'apparaît. Donc, bien que l'erreur soit signalée à la ligne 8, la « vraie » erreur se trouve dans la définition à la ligne 3, il est donc important de lire l'intégralité du message d'erreur.


Attention, certains éditeurs affichent une version « résumée » du journal des erreurs. Cela peut être spécialement trompeur quand on se retrouve avec :

`line 8: undefined command: ...\mycommand`

car cela donne l'impression que `\mycommand` n'est pas définie.


<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
## Accolades manquantes (ou en trop)
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
Ici, l'erreur est une accolade `}` déséquilibrée, utilisée par erreur pour
terminer l'argument optionnel. L'accolade fermante fait échouer la lecture des
options par LaTeX et on obtient une erreur interne pas très utile :

=======
Here the error is a mismatched `}` used to end the optional
argument. The closing brace causes LaTeX's option parsing
to fail and you get an internal and not that helpful error: 
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Ici, l'erreur est une accolade `}` déséquilibrée, utilisée par erreur pour terminer l'argument optionnel. L'accolade fermante fait échouer la lecture des options par LaTeX et on obtient une erreur interne pas très utile :

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

<<<<<<< HEAD
<<<<<<< HEAD
Bien que la description de l'erreur ne soit pas très claire, les deux lignes
suivantes affichent avec précision l'emplacement de l'erreur grâce au saut de
ligne inséré pour indiquer jusqu'où TeX avait lu :
=======
While the error description is unhelpful; the following two
lines do accurately display the location of the error by the use of
the linebreak showing how far TeX had read:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Bien que la description de l'erreur ne soit pas très claire, les deux lignes suivantes affichent avec précision l'emplacement de l'erreur grâce au saut de ligne inséré pour indiquer jusqu'où TeX avait lu :
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


<<<<<<< HEAD
<<<<<<< HEAD
## Fichiers manquants
=======
## Missing files
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
## Fichiers manquants
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
produit le message d'erreur :
=======
This produces the error
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
produit le message d'erreur:
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

<<<<<<< HEAD
<<<<<<< HEAD
Note : la même erreur peut avoir deux causes différentes. Une simple faute de
frappe comme ici peut être corrigée en rectifiant le nom du package ; si le
fichier est vraiment manquant, il doit être installé sur le système.


## Lignes vides en mode mathématique
=======
Note: the same error may be caused by two different causes; a simple
typo as here, which may be corrected by fixing the package name, or
that the file really is missing and needs to be installed on the
current system.

## Blank lines in display math
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Note : la même erreur peut avoir deux causes différentes. Une simple faute de frappe comme ici peut être corrigée en rectifiant le nom du paquet ; si le fichier est vraiment manquant, il doit être installé sur le système.


## Lignes vides en mode mathématique
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
produit l'erreur plutôt ésotérique :
=======
Produces the slightly mysterious error
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
produit l'erreur plutôt mystérieuse:
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```
! Missing $ inserted.
```
{: .noedit :}

<<<<<<< HEAD
Mais la correction est simple : les lignes vides sont sont pas autorisées dans
un environnement mathématique. Il suffit de les supprimer (ou de les mettre en
commentaire).


## Travaux pratiques

Essayez de corriger les erreurs dans les exemples de cette page.

Écrivez de petits documents avec différentes erreurs et regardez comment la
forme des messages d'erreur vous renseigne sur ce qui s'est passé.

=======
But the fix is simple, blank lines are not allowed in math
environments and should be deleted.

Mais la correction est simple:  les lignes vides sont sont pas autorisées dans un environnement mathématique. Il suffit de les supprimer (ou de les mettre en commentaire).


## Travaux pratiques

Essayez de corriger les erreurs dans les exemples de cette page.

Écrivez de petits documents avec différentes erreurs et regardez comment la forme des messages d'erreur vous renseigne sur ce qui s'est passé.

<<<<<<< HEAD
Produce small documents with different errors and note the form of the error messages.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

<script>
  window.addEventListener('load', function(){
      if(editors['pre2'] != null) editors['pre2'].moveCursorTo(3, 31, false);
      if(editors['pre4'] != null) editors['pre4'].moveCursorTo(3, 18, false);
<<<<<<< HEAD
<<<<<<< HEAD
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(3, 20, false);
=======
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(3  , 20, false);
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(3, 20, false);
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
      if(editors['pre9'] != null) editors['pre9'].moveCursorTo(7, 0, false);
  }, false);
</script>
=======
title: "Dealing with errors (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Comprendre les erreurs"
---

Contrairement à un système de traitement de texte typique, LaTeX a un cycle d'édition/exécution/visualisation plus proche de ce qu'on fait avec un compilateur destiné à un langage de programmation ; comme en programmation, l'utilisateur peut faire des erreurs pendant la saisie et doit donc lire et comprendre les messages d'erreur renvoyés par le système pour corriger rapidement les problèmes.

Cette page donne des exemples de quelques erreurs courantes. Chaque exemple d'erreur comporte une explication sur la forme de son message.

Il sera instructif de tester les exemples mais vous apprendrez aussi beaucoup si vous utilisez les fonctions d'édition de ce site web pour corriger les documents et résoudre les problèmes.


## pdflatex not found

Une première erreur, fréquente quand on commence, est :

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

sous Windows ou

```
bash: pdflatex: command not found
```
{: .noedit :}

sous Linux.

Il ne s'agit pas d'une erreur de TeX mais d'une erreur du système d'exploitation, indiquant que TeX n'est pas installé ou n'est pas trouvé.  Une erreur courante est d'installer un _éditeur_ tel que TeXworks ou TeXShop mais sans installer un système TeX tel que TeX Live ou MiKTeX.


## Anatomie d'un message d'erreur de {{ site.tex }}

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

My command is used here \mycommand.

\end{document}
```

This produces a multi-line message in the log file.

produit un message de plusieurs lignes dans le fichier de log :

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}


* La première ligne, signalée par `!`, donne la nature générale de l'erreur (commande non définie dans ce cas).
* Les deux lignes suivantes montrent la ligne que TeX était en train de traiter quand l'erreur est apparue, avec un saut de ligne marquant l'emplacement exact que TeX avait atteint. La commande indéfinie est le dernier jeton lu, donc le dernier mot avant le saut de ligne, `\textbold` ici. Après le saut de ligne, il y a les autres éléments `{hmmm}` qui ont peut-être été lus en argument mais n'ont pas encore été exécutés par TeX.
* Il peut en général y avoir quelques lignes supplémentaires ici, montrant davantage du contexte du message d'erreur.
* La dernière ligne commence par `l.` suivi d'un numéro de ligne, et ensuite la ligne du fichier source où l'erreur est détectée.

* La dernière ligne est un `?`.  Si vous utilisez TeX de manière interactive, il est possible d'entrer des instructions à TeX à ce stade, mais la plupart des éditeurs et des systèmes en ligne exécutent TeX dans un mode qui ne s'arrête pas aux erreurs et essaie de traiter la suite du document. En tapant `s` à l'invite, vous indiquerez à TeX de continuer dans ce mode si vous travaillez de manière interactive.

Notez ici que TeX ne voit pas l'erreur au moment où la définition est faite ; et en fait, si `\mycommand` est définie mais jamais utilisée, aucune erreur n'apparaît. Donc, bien que l'erreur soit signalée à la ligne 8, la « vraie » erreur se trouve dans la définition à la ligne 3, il est donc important de lire l'intégralité du message d'erreur.


Attention, certains éditeurs affichent une version « résumée » du journal des erreurs. Cela peut être spécialement trompeur quand on se retrouve avec :

`line 8: undefined command: ...\mycommand`

car cela donne l'impression que `\mycommand` n'est pas définie.


## Accolades manquantes (ou en trop)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

Ici, l'erreur est une accolade `}` déséquilibrée, utilisée par erreur pour terminer l'argument optionnel. L'accolade fermante fait échouer la lecture des options par LaTeX et on obtient une erreur interne pas très utile :


```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

Bien que la description de l'erreur ne soit pas très claire, les deux lignes suivantes affichent avec précision l'emplacement de l'erreur grâce au saut de ligne inséré pour indiquer jusqu'où TeX avait lu :

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


## Fichiers manquants

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

produit le message d'erreur :

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Note : la même erreur peut avoir deux causes différentes. Une simple faute de frappe comme ici peut être corrigée en rectifiant le nom du paquet ; si le fichier est vraiment manquant, il doit être installé sur le système.


## Lignes vides en mode mathématique

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

produit l'erreur plutôt ésotérique :

```
! Missing $ inserted.
```
{: .noedit :}

But the fix is simple, blank lines are not allowed in math
environments and should be deleted.

Mais la correction est simple : les lignes vides sont sont pas autorisées dans un environnement mathématique. Il suffit de les supprimer (ou de les mettre en commentaire).


## Travaux pratiques

Essayez de corriger les erreurs dans les exemples de cette page.

Écrivez de petits documents avec différentes erreurs et regardez comment la forme des messages d'erreur vous renseigne sur ce qui s'est passé.


<script>
  window.addEventListener('load', function(){
      if(editors['pre2'] != null) editors['pre2'].moveCursorTo(3, 31, false);
      if(editors['pre4'] != null) editors['pre4'].moveCursorTo(3, 18, false);
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(3, 20, false);
      if(editors['pre9'] != null) editors['pre9'].moveCursorTo(7, 0, false);
  }, false);
</script>
>>>>>>> 17f865ba... Add all remaining lessons, in UTF-8.
