---
<<<<<<< HEAD
title: "Utiliser les classes de documents pour changer l'apparence : pour aller plus loin"
---

## Classes spécifiques d'un journal

De nombreuses journaux scientifiques proposent leur classe LaTeX pour les
soumissions d'articles. Celle-ci donne généralement une mise en page proche de
celle du journal publié, bien que cela dépende de l'utilisation des polices de
caractères, etc. ; parfois, la mise en forme reste générique, mais l'utilisation
de la classe du journal facilite l'import de votre article dans leur chaîne de
traitement. Si une classe est disponible, elle est normalement mise à disposition
directement par l'éditeur du journal (sur son site web), qui doit donner les
détails nécessaires à son utilisation. Nombre d'entre elles sont également
disponibles sur CTAN et dans les distributions TeX standards.


## Classes pour les diaporamas

Un domaine très particulier est la création de diaporamas (présentations type
Microsoft Powerpoint). La classe `slides` avait été conçue pour la production
de diapositives 24x36mm et n'est pas vraiment faite pour les présentations
destinées à un vidéo-projecteur. Deux classes ont été développées à cet effet
et sont largement utilisées : `beamer` et `powerdot`. Actuellement, `beamer`
est la plus largement utilisée, voici donc un exemple de son fonctionnement :
=======
title: "More on: Using document classes to influence design"
---

## Journal-specific classes

Many academic journals provide LaTeX classes for submissions. These
typically set up the layout to be similar to the final journal,
although that does depend on font usage, etc. If there is a class
available, it is normally provided directly by the editorial office,
who should give appropriate detail on what features it has. Many of
these are also available on CTAN and in standard TeX distributions.

## Classes for presentations

One area that needs a lot of special treatment is creating presentations. The `slides`
class was written for making 'classical' printed slides, and it does not
have any special support for on-screen presentations. Two classes
have been developed to do just that, and that are widely used:
`beamer` and `powerdot`. As `beamer` is probably the more common one, we will
give you an example of how it works:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

<<<<<<< HEAD
\begin{frame}{Première diapositive}
  Un peu de texte.
\end{frame}

\begin{frame}{Deuxième diapositive}
  Et maintenant une liste:
  \begin{itemize}
    \item<1-> Premier item,
    \item<2-> Second item.
=======
\begin{frame}{A first frame}
  Some text
\end{frame}

\begin{frame}{A second frame}
  Different text
  \begin{itemize}
    \item<1-> First item
    \item<2-> Second item
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
  \end{itemize}
\end{frame}

\end{document}
```

<<<<<<< HEAD
Cela montre deux choses importantes. Premièrement, `beamer` divise un document
en `frames` (« cadres »), chacun d'eux pouvant donner une diapositive ou
plusieurs. Deuxièmement, `beamer` ajoute des possibilités à la syntaxe LaTeX
de base pour permettre à certaines parties du document d'apparaître petit à
petit, formant des animations. C'est un outil puissant, mais plus compliqué
que ce que nous pouvons couvrir ici :
[consultez cet article de blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/)
(en anglais) pour en savoir plus.


## Classe pour produire des images

Parfois vous devez composer une image (qui peut avoir un code-source très long)
avec LaTeX. Dans ce cas, souvent, vous ne voulez rien d'autre que l'image dans 
le PDF final, sans le reste de la page. Le plus simple est d'utiliser la classe
[`standalone`](https://ctan.org/pkg/standalone). Elle définit automatiquement la
taille de la page pour qu'elle contienne tout juste le contenu imprimé.
=======
This shows two important ideas. First, `beamer` divides a document into frames,
each of which can make more than one slide (page). Second, `beamer` adds to the
normal LaTeX syntax to allow parts of the source to appear 'a bit at a time'.
This is powerful but more complicated than we can cover here: take a look  at
[this blog
entry](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) for
more.

## A class for images

There are occasions when you need to make an image (which might be text-heavy)
using LaTeX. Often, you do not want anything other than the content itself on
the 'page'. That is easiest to do using the [`standalone`](https://ctan.org/pkg/standalone)
class. It automatically sets the size of the page to surround the printed content.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
<<<<<<< HEAD
Un document très simple: il va tenir dans une toute petite boîte!
=======
A simple document: this will be a very small box!
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\end{document}
```
