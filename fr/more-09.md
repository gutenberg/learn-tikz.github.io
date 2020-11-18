---
<<<<<<< HEAD
<<<<<<< HEAD
title: "Références croisées : pour aller plus loin"
---

## Transformer les références croisées en liens hypertextes

Vous pouvez transformer vos références croisées en hyperliens cliquables en
utilisant le package `hyperref`. Dans la plupart des cas, `hyperref` doit être
chargé après tout autre package du préambule de votre document.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Cross-referencing"
---

## Making cross-references into links

You can make your cross-references into hyperlinks using the `hyperref` package.
In most cases, `hyperref` should be loaded after any other packages specified
in the document preamble.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[hidelinks]{hyperref}
<<<<<<< HEAD
<<<<<<< HEAD

\begin{document}

\section{Introduction}
Du texte passionnant avec une référence à la suite~\ref{sec:next}.

\section{La suite}
\label{sec:next}

Avec des détails.
\end{document}
```

Nous avons choisi de faire les liens de la même couleur que le texte normal ;
enlevez l'option `hidelinks` pour comprendre pourquoi ! &#128521;
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{document}

\section{Introduction}
Some exciting text with a reference~\ref{sec:next}.

\section{Next thing}
\label{sec:next}

More text here.
\end{document}
```

We have chosen to make the links the same color as the normal text; try removing
`hidelinks` to see why! 
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
