---
<<<<<<< HEAD
title: "Mise en forme du texte : fontes et espacements -- Pour aller plus loin"
---

## Supprimer l'indentation d'un paragraphe particulier

Si vous voulez supprimer l'indentation d'un seul paragraphe, vous pouvez le
précéder de `\noindent`. C'est à réserver pour les cas exceptionnels ;
en général, LaTeX sait s'en occuper automatiquement.
=======
title: "More on: Formatting: fonts and spacing"
---

## Suppressing the indent for one paragraph


If you want to suppress indentation for a single paragraph, you can use
`\noindent`.
This should be _very_ rarely used; most of the time, you should let LaTeX
handle this automatically.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
<<<<<<< HEAD

\begin{document}
Un bref paragraphe, que nous avons un peu rempli pour que vous puissiez
en voir l'effet ici !

Un bref paragraphe, que nous avons un peu rempli pour que vous puissiez
en voir l'effet ici !

\noindent Un bref paragraphe, que nous avons un peu rempli pour que
vous puissiez en voir l'effet ici !
=======
\begin{document}
One small paragraph, which we have filled out a little to make sure you can
see the effect here!

One small paragraph, which we have filled out a little to make sure you can
see the effect here!

\noindent  One small paragraph, which we have filled out a little to make sure
you can see the effect here!
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{document}
```
