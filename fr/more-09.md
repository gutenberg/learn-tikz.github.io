---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
title: "R�f�rences crois�es: pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
title: "R�f�rences crois�es: pour aller plus loin"
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
---

## Transformer les r�f�rences crois�es en hyperliens

<<<<<<< HEAD
<<<<<<< HEAD
You can make your cross-references into hyperlinks using the `hyperref` package.
In most cases, `hyperref` should be loaded after any other packages specified
in the document preamble.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Vous pouvez transformer vos r�f�rences crois�es en hyperliens cliquables en utilisant le package `hyperref`. Dans la plupart des cas, `hyperref` doit �tre charg� apr�s tout autre package du pr�ambule de votre document.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
Vous pouvez transformer vos r�f�rences crois�es en hyperliens cliquables en utilisant le package `hyperref`. Dans la plupart des cas, `hyperref` doit �tre charg� apr�s tout autre package du pr�ambule de votre document.
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

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

<<<<<<< HEAD
<<<<<<< HEAD
We have chosen to make the links the same color as the normal text; try removing
`hidelinks` to see why! 
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Nous avons choisi de faire les liens de la m�me couleur que le texte normal ; enlevez l'option `hidelinks` pour comprendre pourquoi !     :)
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
Nous avons choisi de faire les liens de la m�me couleur que le texte normal ; enlevez l'option `hidelinks` pour comprendre pourquoi !     :)
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
=======
title: "More on: Cross-referencing (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Références croisées: pour aller plus loin"
---

## Transformer les références croisées en liens hypertextes

Vous pouvez transformer vos références croisées en hyperliens cliquables en utilisant le package `hyperref`. Dans la plupart des cas, `hyperref` doit être chargé après tout autre package du préambule de votre document.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{Introduction}
Some exciting text with a reference~\ref{sec:next}.

\section{Next thing}
\label{sec:next}

More text here.
\end{document}
```

Nous avons choisi de faire les liens de la même couleur que le texte normal ; enlevez l'option `hidelinks` pour comprendre pourquoi !  \U0001f601
>>>>>>> 91fc72e5... Conversion of all files to UTF-8.
