---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Utiliser les classes de documents pour changer l'apparence : pour aller plus loin"
---

## Classes spÃ©cifiques d'un journal

De nombreuses journaux scientifiques proposent leur classe LaTeX pour les
soumissions d'articles. Celle-ci donne gÃ©nÃ©ralement une mise en page proche de
celle du journal publiÃ©, bien que cela dÃ©pende de l'utilisation des polices de
caractÃ¨res, etc. ; parfois, la mise en forme reste gÃ©nÃ©rique, mais l'utilisation
de la classe du journal facilite l'import de votre article dans leur chaÃ®ne de
traitement. Si une classe est disponible, elle est normalement mise Ã  disposition
directement par l'Ã©diteur du journal (sur son site web), qui doit donner les
dÃ©tails nÃ©cessaires Ã  son utilisation. Nombre d'entre elles sont Ã©galement
disponibles sur CTAN et dans les distributions TeX standards.


## Classes pour les diaporamas

Un domaine trÃ¨s particulier est la crÃ©ation de diaporamas (prÃ©sentations type
Microsoft Powerpoint). La classe `slides` avait Ã©tÃ© conÃ§ue pour la production
de diapositives 24x36mm et n'est pas vraiment faite pour les prÃ©sentations
destinÃ©es Ã  un vidÃ©o-projecteur. Deux classes ont Ã©tÃ© dÃ©veloppÃ©es Ã  cet effet
et sont largement utilisÃ©es : `beamer` et `powerdot`. Actuellement, `beamer`
est la plus largement utilisÃ©e, voici donc un exemple de son fonctionnement :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Using document classes to influence design"
=======
title: "Utiliser les classes de documents pour changer l'apparence: pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
---

## Classes spécifiques d'un journal

De nombreuses journaux scientifiques proposent leur classe LaTeX pour les soumissions d'articles. Celle-ci donne généralement une mise en page proche de celle du journal final, bien que cela dépende de l'utilisation des polices de caractères, etc. ; parfois, la mise en forme reste générique, mais l'utilisation de la classe du journal facilite l'import de votre article dans leur chaîne de traitement. Si une classe est disponible, elle est normalement mise à disposition directement par l'éditeur du journal (sur son site web), qui doit donner les détails nécessaires à son utilisation. Nombre d'entre elles sont également disponibles sur CTAN et dans des distributions TeX standards.


<<<<<<< HEAD
One area that needs a lot of special treatment is creating presentations. The `slides`
class was written for making 'classical' printed slides, and it does not
have any special support for on-screen presentations. Two classes
have been developed to do just that, and that are widely used:
`beamer` and `powerdot`. As `beamer` is probably the more common one, we will
give you an example of how it works:
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
## Classes pour les diaporamas

Un domaine très particulier est la création de diaporamas (présentations type Microsoft Powerpoint). La classe `slides` avait été conçue pour la production de diapositives 24x36mm et n'est pas vraiment faite pour les présentations destinées à un vidéo-projecteur. Deux classes ont été développées à cet effet et sont largement utilisées : `beamer` et `powerdot`. Actuellement, `beamer` est le plus largement utilisé, voici donc un exemple de son fonctionnement :
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
\begin{frame}{PremiÃ¨re diapositive}
  Un peu de texte.
\end{frame}

\begin{frame}{DeuxiÃ¨me diapositive}
  Et maintenant une liste:
  \begin{itemize}
    \item<1-> Premier item,
    \item<2-> Second item.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{frame}{A first frame}
  Some text
=======
\begin{frame}{Première diapositive}
  Un peu de texte
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
\end{frame}

\begin{frame}{Deuxième diapositive}
  Autre texte
  \begin{itemize}
<<<<<<< HEAD
    \item<1-> First item
    \item<2-> Second item
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
    \item<1-> Premier item,
    \item<2-> Second item.
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
  \end{itemize}
\end{frame}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Cela montre deux choses importantes. PremiÃ¨rement, `beamer` divise un document
en `frames` (Â« cadres Â»), chacun d'eux pouvant donner une diapositive ou
plusieurs. DeuxiÃ¨mement, `beamer` ajoute des possibilitÃ©s Ã  la syntaxe LaTeX
de base pour permettre Ã  certaines parties du document d'apparaÃ®tre petit Ã 
petit, formant des animations. C'est un outil puissant, mais plus compliquÃ©
que ce que nous pouvons couvrir ici :
[consultez cet article de blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/)
(en anglais) pour en savoir plus.


## Classe pour produire des images

Parfois vous devez composer une image (qui peut avoir un code-source trÃ¨s long)
avec LaTeX. Dans ce cas, souvent, vous ne voulez rien d'autre que l'image dans 
le PDF final, sans le reste de la page. Le plus simple est d'utiliser la classe
[`standalone`](https://ctan.org/pkg/standalone). Elle dÃ©finit automatiquement la
taille de la page pour qu'elle contienne tout juste le contenu imprimÃ©.
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
This shows two important ideas. First, `beamer` divides a document into frames,
each of which can make more than one slide (page). Second, `beamer` adds to the
normal LaTeX syntax to allow parts of the source to appear 'a bit at a time'.
This is powerful but more complicated than we can cover here: take a look  at
[this blog
entry](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) for
more.
=======
Cela montre deux choses importantes. Premièrement, `beamer` divise un document en `frames` (« cadres »), chacun d'eux pouvant donner plus d'une diapositive. Deuxièmement, `beamer` ajoute des possibilités à la syntaxe LaTeX normale pour permettre à certaines parties du document d'apparaître petit à petit, formant des animations. C'est un outil puissant, mais plus compliqué que ce que nous pouvons couvrir ici : [consultez cet article de blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) pour en savoir plus.


## Classe pour produire des images
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

Parfois vous devez composer une image (qui peut avoir un code-source très long) avec LaTeX. Dans ce cas, souvent, vous ne voulez rien d'autre que l'image dans le PDF final, sans le reste de la page. Le plus simple est d'utiliser la classe [`standalone`](https://ctan.org/pkg/standalone). Elle définit automatiquement la taille de la page pour qu'elle entoure le contenu imprimé.

<<<<<<< HEAD
There are occasions when you need to make an image (which might be text-heavy)
using LaTeX. Often, you do not want anything other than the content itself on
the 'page'. That is easiest to do using the [`standalone`](https://ctan.org/pkg/standalone)
class. It automatically sets the size of the page to surround the printed content.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Un document trÃ¨s simple: il va tenir dans une toute petite boÃ®te!
=======
A simple document: this will be a very small box!
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
A simple document: this will be a very small box!
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Un document très simple: il va tenir dans une toute petite boîte!
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
\end{document}
```
