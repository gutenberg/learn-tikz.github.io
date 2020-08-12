---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Mise en forme du texte : fontes et espacements -- Pour aller plus loin"
---

## Supprimer l'indentation d'un paragraphe particulier

Si vous voulez supprimer l'indentation d'un seul paragraphe, vous pouvez le
prÃ©cÃ©der de `\noindent`. C'est Ã  rÃ©server pour les cas exceptionnels ;
en gÃ©nÃ©ral, LaTeX sait s'en occuper automatiquement.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Formatting: fonts and spacing"
=======
title: "Mise en forme du texte: fontes et espacements -- Pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
---

## Supprimer l'indentation d'un paragraphe particulier

<<<<<<< HEAD

If you want to suppress indentation for a single paragraph, you can use
`\noindent`.
This should be _very_ rarely used; most of the time, you should let LaTeX
handle this automatically.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Si vous voulez supprimer l'indentation d'un seul paragraphe, vous pouvez le précéder de `\noindent`. C'est à réserver pour les cas exceptionnels; en général, LaTeX sait s'en occuper automatiquement.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

\begin{document}
Un bref paragraphe, que nous avons un peu rempli pour que vous puissiez
en voir l'effet ici !

Un bref paragraphe, que nous avons un peu rempli pour que vous puissiez
en voir l'effet ici !

\noindent Un bref paragraphe, que nous avons un peu rempli pour que
vous puissiez en voir l'effet ici !
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======

>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
\begin{document}
Un bref paragraphe, que nous avons un peu rempli pour que vous puissiez
en voir l'effet ici !

Un bref paragraphe, que nous avons un peu rempli pour que vous puissiez
en voir l'effet ici !

<<<<<<< HEAD
\noindent  One small paragraph, which we have filled out a little to make sure
you can see the effect here!
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
\noindent  Un bref paragraphe, que nous avons un peu rempli pour que
vous puissiez en voir l'effet ici !
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
\end{document}
```
