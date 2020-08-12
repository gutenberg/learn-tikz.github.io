---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "More on: Accessing documentation and getting help (French)"
=======
title: "Comprendre les erreurs : pour aller plus loin"
>>>>>>> 08062c9f... French translation (#88)
=======
title: "Comprendre les erreurs : pour aller plus loin"
>>>>>>> e2a0112e... French translation (#88)
---

## Les erreurs à la fermeture des environnements

Certains environnements (notamment les alignements `amsmath` et les tableaux
`tabularx`) scannent le corps entier de l'environnement avant de traiter le
contenu. Ça signifie que toute erreur _dans_ l'environnement sera signalée au
niveau de sa dernière ligne. Cependant, comme nous l'avons vu dans la leçon
principale, l'affichage du contexte d'erreur par TeX permet toujours de
localiser l'erreur.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Dealing with errors"
=======
title: "Comprendre les erreurs: pour aller plus loin"
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
---

## Les erreurs à la fermeture des environnements

<<<<<<< HEAD
Some environments (notably `amsmath` alignments and `tabularx` tables)
scan the whole environment body before processing the content. This means that
any error within the environment is reported on the last line. However, as seen in the
main lesson, TeX's display of the error context should still pinpoint the error location.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Certains environnements (notamment les alignements `amsmath` et les tableaux `tabularx`) scannent le corps entier de l'environnement avant de traiter le contenu. Ça signifie que toute erreur _dans_ l'environnement sera signalée au niveau de sa dernière ligne. Cependant, comme nous l'avons vu dans la leçon principale, l'affichage du contexte d'erreur par TeX permet toujours de localiser l'erreur.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Ici, l'erreur sera signalée à la ligne 12 :
=======
Here the error will be reported on line 11
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Here the error will be reported on line 11
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Ici, l'erreur sera signalée à la ligne 12:
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```
l.12 \end{align}
```
{: .noedit :}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Bien que la véritable erreur se trouve à la ligne 10, comme le montrent les
lignes de contexte :
=======
Although the real error is on line 9 as shown by the context lines:

>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Although the real error is on line 9 as shown by the context lines:

>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Bien que la véritable erreur se trouve à la ligne 10, comme le montrent les lignes de contexte :
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
## Erreurs en cascade

En exécutant LaTeX en interactif depuis la ligne de commande, il est possible
d'arrêter le traitement à la première erreur avec `x`, d'éditer le document et
de relancer LaTeX. Cependant, si vous passez outre l'erreur ou si vous utilisez
un éditeur ou un système en ligne qui le fait pour vous, alors LaTeX essaiera
de retomber sur ses pieds ; cependant, cela peut entraîner l'apparition
d'erreurs ultérieures.

Ne vous préoccupez donc pas trop du _nombre_ d'erreurs signalées et
concentrez-vous toujours sur la correction de la première erreur.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Spurious errors due to earlier errors

When calling LaTeX interactively from the command line it is possible
to stop the processing at the  first error with `x`, edit the document
and re-run. However if you scroll past the error or use an editor or
online system that does this for you then TeX will try to recover;
however this may lead to several more errors being reported.
=======
## Erreurs en cascade
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

En exécutant LaTeX en interactif depuis la ligne de commande, il est possible d'arrêter le traitement à la première erreur avec `x`, d'éditer le document et de relancer LaTeX. Cependant, si vous passez outre l'erreur ou si vous utilisez un éditeur ou un système en ligne qui le fait pour vous, alors LaTeX essaiera de retomber sur ses pieds ; cependant, cela peut entraîner l'apparition d'erreurs ultérieures.

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Ne vous préoccupez donc pas trop du _nombre_ d'erreurs signalées et concentrez-vous toujours sur la correction de la première erreur.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Text_word  $\alpha + \beta$.

More text.
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
L'erreur ici est le caractère _underscore_ `_` qui doit être saisi comme `\_`.

TeX le signale correctement avec le _premier_ message d'erreur :
=======
The error here is the underscore `_` which should be entered as `\_`.

TeX does report this correctly with the _first_ error message
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
The error here is the underscore `_` which should be entered as `\_`.

TeX does report this correctly with the _first_ error message
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
L'erreur ici est le caractère underscore `_` qui doit être saisi comme `\_`.

TeX le signale correctement avec le _premier_ message d'erreur:
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Cependant, si à l'invite `?`, vous tapez <entrée>, TeX corrige en ajoutant
un `$` de sorte que le `_` est vu en mode mathématique comme un indice. Le mode
mathématique continue, puis se termine au `$` suivant, donc l'`\alpha` qui vient
après est vu en mode texte, générant une autre erreur :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
However if you scroll past the `?` prompt then TeX recovers by adding
a `$` so the `_` is seen in math mode as a subscript. The math mode
then continues until the `$` which ends math, so the following
`\alpha` is seen in text mode generating another error
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Cependant, si vous à l'invite `?`, vous tapez <entrée>, TeX corrige en ajoutant un `$` de sorte que le `_` est vu en mode mathématique comme un indice. Le mode mathématique continue, puis se termine au `$` suivant, donc l'`\alpha` qui vient après est vu en mode texte, générant une autre erreur :
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
## Des erreurs qui ne lancent pas le mode interactif

Si vous compilez cet exemple avec le bouton _LaTeX Online_, vous aurez par
défaut un fichier PDF ; pour voir le message d'erreur dans le journal, il faut
ajouter `% !TEX log`.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
## Errors that do not trigger an error prompt

Some errors, especially errors that are not detected until the end of the file,
do not generate an error prompt but just give a warning in the log.

If you try this example using the LaTeX CGI server it will return a PDF by default;
to see the error message in the log add `%!TeX log`.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
## Des erreurs qui ne lancent pas le mode interactif

Si vous compilez cet exemple avec le bouton _LaTeX Online_, vous aurez par défaut un fichier PDF ; pour voir le message d'erreur dans le journal, il faut ajouter `% !TEX log`.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Text {\large some large text) normal size?

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Dans cet exemple, le changement de taille est fermé par erreur avec une
parenthèse `)` au lieu d'une accolade `}`. Mais l'erreur n'est pas détectée
avant la fin du fichier, au moment TeX s'aperçoit qu'il y a encore un groupe
non fermé. Il rapporte ici la ligne à laquelle le groupe a été ouvert `{`. Il
ne peut pas détecter l'erreur réelle car la parenthèse `)` est considérée
comme du « texte normal », parfaitement valide.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
In this example the size change was mistakenly ended with `)` rather
than `}`. This is not detected until the end of the file when TeX
detects that there is still an unclosed group. It reports here the
line at which the group was opened `{` It can not detect the actual
error as the `)` is seen as "normal text".
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Dans cet exemple, le changement de taille est fermé par erreur avec une parenthèse `)` au lieu d'une accolade `}`. Mais l'erreur n'est pas détectée avant la fin du fichier, au moment TeX s'aperçoit qu'il y a encore un groupe non fermé. Il rapporte ici la ligne à laquelle le groupe a été ouvert `{`. Il ne peut pas détecter l'erreur réelle car la parenthèse `)` est considérée comme du « texte normal », parfaitement valide.
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.

```
(\end occurred inside a group at level 1)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
### simple group (level 1) entered at line 6 ({)
=======
### simple group (level 1) entered at line 5 ({)
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
### simple group (level 1) entered at line 5 ({)
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
### simple group (level 1) entered at line 6 ({)
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
      if(editors['pre0'] != null) editors['pre0'].moveCursorTo(8, 15, false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5,  false);
=======
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5, false);
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5, false);
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5,  false);
>>>>>>> 34d927e0... End of translation of the supplemental lessons into French.
      if(editors['pre6'] != null) editors['pre6'].moveCursorTo(4, 30, false);
  }, false);
</script>
=======
title: "More on: Dealing with errors (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Comprendre les erreurs: pour aller plus loin"
---

## Les erreurs à la fermeture des environnements

Certains environnements (notamment les alignements `amsmath` et les tableaux `tabularx`) scannent le corps entier de l'environnement avant de traiter le contenu. Ça signifie que toute erreur _dans_ l'environnement sera signalée au niveau de sa dernière ligne. Cependant, comme nous l'avons vu dans la leçon principale, l'affichage du contexte d'erreur par TeX permet toujours de localiser l'erreur.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

Ici, l'erreur sera signalée à la ligne 12:

```
l.12 \end{align}
```
{: .noedit :}

Bien que la véritable erreur se trouve à la ligne 10, comme le montrent les lignes de contexte :

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## Erreurs en cascade

En exécutant LaTeX en interactif depuis la ligne de commande, il est possible d'arrêter le traitement à la première erreur avec `x`, d'éditer le document et de relancer LaTeX. Cependant, si vous passez outre l'erreur ou si vous utilisez un éditeur ou un système en ligne qui le fait pour vous, alors LaTeX essaiera de retomber sur ses pieds ; cependant, cela peut entraîner l'apparition d'erreurs ultérieures.

Ne vous préoccupez donc pas trop du _nombre_ d'erreurs signalées et concentrez-vous toujours sur la correction de la première erreur.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Text_word  $\alpha + \beta$.

More text.
\end{document}
```

L'erreur ici est le caractère underscore `_` qui doit être saisi comme `\_`.

TeX le signale correctement avec le _premier_ message d'erreur:

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

Cependant, si vous à l'invite `?`, vous tapez <entrée>, TeX corrige en ajoutant un `$` de sorte que le `_` est vu en mode mathématique comme un indice. Le mode mathématique continue, puis se termine au `$` suivant, donc l'`\alpha` qui vient après est vu en mode texte, générant une autre erreur :

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


## Des erreurs qui ne lancent pas le mode interactif

Si vous compilez cet exemple avec le bouton _LaTeX Online_, vous aurez par défaut un fichier PDF ; pour voir le message d'erreur dans le journal, il faut ajouter `% !TEX log`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Text {\large some large text) normal size?

\end{document}
```

Dans cet exemple, le changement de taille est fermé par erreur avec une parenthèse `)` au lieu d'une accolade `}`. Mais l'erreur n'est pas détectée avant la fin du fichier, au moment TeX s'aperçoit qu'il y a encore un groupe non fermé. Il rapporte ici la ligne à laquelle le groupe a été ouvert `{`. Il ne peut pas détecter l'erreur réelle car la parenthèse `)` est considérée comme du « texte normal », parfaitement valide.

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 6 ({)
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
      if(editors['pre0'] != null) editors['pre0'].moveCursorTo(8, 15, false);
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5,  false);
      if(editors['pre6'] != null) editors['pre6'].moveCursorTo(4, 30, false);
  }, false);
</script>
>>>>>>> 91fc72e5... Conversion of all files to UTF-8.
