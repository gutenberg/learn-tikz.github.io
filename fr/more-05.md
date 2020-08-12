---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Utiliser les classes de documents pour changer l'apparence : pour aller plus loin"
---

## Classes sp√©cifiques d'un journal

De nombreuses journaux scientifiques proposent leur classe LaTeX pour les
soumissions d'articles. Celle-ci donne g√©n√©ralement une mise en page proche de
celle du journal publi√©, bien que cela d√©pende de l'utilisation des polices de
caract√®res, etc. ; parfois, la mise en forme reste g√©n√©rique, mais l'utilisation
de la classe du journal facilite l'import de votre article dans leur cha√Æne de
traitement. Si une classe est disponible, elle est normalement mise √† disposition
directement par l'√©diteur du journal (sur son site web), qui doit donner les
d√©tails n√©cessaires √† son utilisation. Nombre d'entre elles sont √©galement
disponibles sur CTAN et dans les distributions TeX standards.


## Classes pour les diaporamas

Un domaine tr√®s particulier est la cr√©ation de diaporamas (pr√©sentations type
Microsoft Powerpoint). La classe `slides` avait √©t√© con√ßue pour la production
de diapositives 24x36mm et n'est pas vraiment faite pour les pr√©sentations
destin√©es √† un vid√©o-projecteur. Deux classes ont √©t√© d√©velopp√©es √† cet effet
et sont largement utilis√©es : `beamer` et `powerdot`. Actuellement, `beamer`
est la plus largement utilis√©e, voici donc un exemple de son fonctionnement :
=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Using document classes to influence design"
=======
title: "Utiliser les classes de documents pour changer l'apparence: pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
title: "Utiliser les classes de documents pour changer l'apparence: pour aller plus loin"
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
---

## Classes spÈcifiques d'un journal

De nombreuses journaux scientifiques proposent leur classe LaTeX pour les soumissions d'articles. Celle-ci donne gÈnÈralement une mise en page proche de celle du journal final, bien que cela dÈpende de l'utilisation des polices de caractËres, etc. ; parfois, la mise en forme reste gÈnÈrique, mais l'utilisation de la classe du journal facilite l'import de votre article dans leur chaÓne de traitement. Si une classe est disponible, elle est normalement mise ‡ disposition directement par l'Èditeur du journal (sur son site web), qui doit donner les dÈtails nÈcessaires ‡ son utilisation. Nombre d'entre elles sont Ègalement disponibles sur CTAN et dans des distributions TeX standards.


<<<<<<< HEAD
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

Un domaine trËs particulier est la crÈation de diaporamas (prÈsentations type Microsoft Powerpoint). La classe `slides` avait ÈtÈ conÁue pour la production de diapositives 24x36mm et n'est pas vraiment faite pour les prÈsentations destinÈes ‡ un vidÈo-projecteur. Deux classes ont ÈtÈ dÈveloppÈes ‡ cet effet et sont largement utilisÈes : `beamer` et `powerdot`. Actuellement, `beamer` est le plus largement utilisÈ, voici donc un exemple de son fonctionnement :
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
## Classes pour les diaporamas

Un domaine trËs particulier est la crÈation de diaporamas (prÈsentations type Microsoft Powerpoint). La classe `slides` avait ÈtÈ conÁue pour la production de diapositives 24x36mm et n'est pas vraiment faite pour les prÈsentations destinÈes ‡ un vidÈo-projecteur. Deux classes ont ÈtÈ dÈveloppÈes ‡ cet effet et sont largement utilisÈes : `beamer` et `powerdot`. Actuellement, `beamer` est le plus largement utilisÈ, voici donc un exemple de son fonctionnement :
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
\begin{frame}{Premi√®re diapositive}
  Un peu de texte.
\end{frame}

\begin{frame}{Deuxi√®me diapositive}
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
\begin{frame}{PremiËre diapositive}
  Un peu de texte
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
\begin{frame}{PremiËre diapositive}
  Un peu de texte
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
\end{frame}

\begin{frame}{DeuxiËme diapositive}
  Autre texte
  \begin{itemize}
<<<<<<< HEAD
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
=======
    \item<1-> Premier item,
    \item<2-> Second item.
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
  \end{itemize}
\end{frame}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Cela montre deux choses importantes. Premi√®rement, `beamer` divise un document
en `frames` (¬´ cadres ¬ª), chacun d'eux pouvant donner une diapositive ou
plusieurs. Deuxi√®mement, `beamer` ajoute des possibilit√©s √† la syntaxe LaTeX
de base pour permettre √† certaines parties du document d'appara√Ætre petit √†
petit, formant des animations. C'est un outil puissant, mais plus compliqu√©
que ce que nous pouvons couvrir ici :
[consultez cet article de blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/)
(en anglais) pour en savoir plus.


## Classe pour produire des images

Parfois vous devez composer une image (qui peut avoir un code-source tr√®s long)
avec LaTeX. Dans ce cas, souvent, vous ne voulez rien d'autre que l'image dans 
le PDF final, sans le reste de la page. Le plus simple est d'utiliser la classe
[`standalone`](https://ctan.org/pkg/standalone). Elle d√©finit automatiquement la
taille de la page pour qu'elle contienne tout juste le contenu imprim√©.
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
Cela montre deux choses importantes. PremiËrement, `beamer` divise un document en `frames` (´ cadres ª), chacun d'eux pouvant donner plus d'une diapositive. DeuxiËmement, `beamer` ajoute des possibilitÈs ‡ la syntaxe LaTeX normale pour permettre ‡ certaines parties du document d'apparaÓtre petit ‡ petit, formant des animations. C'est un outil puissant, mais plus compliquÈ que ce que nous pouvons couvrir ici : [consultez cet article de blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) pour en savoir plus.


## Classe pour produire des images
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.

Parfois vous devez composer une image (qui peut avoir un code-source trËs long) avec LaTeX. Dans ce cas, souvent, vous ne voulez rien d'autre que l'image dans le PDF final, sans le reste de la page. Le plus simple est d'utiliser la classe [`standalone`](https://ctan.org/pkg/standalone). Elle dÈfinit automatiquement la taille de la page pour qu'elle entoure le contenu imprimÈ.

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
=======
Cela montre deux choses importantes. PremiËrement, `beamer` divise un document en `frames` (´ cadres ª), chacun d'eux pouvant donner plus d'une diapositive. DeuxiËmement, `beamer` ajoute des possibilitÈs ‡ la syntaxe LaTeX normale pour permettre ‡ certaines parties du document d'apparaÓtre petit ‡ petit, formant des animations. C'est un outil puissant, mais plus compliquÈ que ce que nous pouvons couvrir ici : [consultez cet article de blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) pour en savoir plus.


## Classe pour produire des images

Parfois vous devez composer une image (qui peut avoir un code-source trËs long) avec LaTeX. Dans ce cas, souvent, vous ne voulez rien d'autre que l'image dans le PDF final, sans le reste de la page. Le plus simple est d'utiliser la classe [`standalone`](https://ctan.org/pkg/standalone). Elle dÈfinit automatiquement la taille de la page pour qu'elle entoure le contenu imprimÈ.

>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Un document tr√®s simple: il va tenir dans une toute petite bo√Æte!
=======
A simple document: this will be a very small box!
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
A simple document: this will be a very small box!
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
Un document trËs simple: il va tenir dans une toute petite boÓte!
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
Un document trËs simple: il va tenir dans une toute petite boÓte!
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
\end{document}
```
=======
title: "More on: Using document classes to influence design (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Utiliser les classes de documents pour changer l'apparence: pour aller plus loin"
---

## Classes sp√©cifiques d'un journal

De nombreuses journaux scientifiques proposent leur classe LaTeX pour les soumissions d'articles. Celle-ci donne g√©n√©ralement une mise en page proche de celle du journal final, bien que cela d√©pende de l'utilisation des polices de caract√®res, etc. ; parfois, la mise en forme reste g√©n√©rique, mais l'utilisation de la classe du journal facilite l'import de votre article dans leur cha√Æne de traitement. Si une classe est disponible, elle est normalement mise √† disposition directement par l'√©diteur du journal (sur son site web), qui doit donner les d√©tails n√©cessaires √† son utilisation. Nombre d'entre elles sont √©galement disponibles sur CTAN et dans des distributions TeX standards.


## Classes pour les diaporamas

Un domaine tr√®s particulier est la cr√©ation de diaporamas (pr√©sentations type Microsoft Powerpoint). La classe `slides` avait √©t√© con√ßue pour la production de diapositives 24x36mm et n'est pas vraiment faite pour les pr√©sentations destin√©es √† un vid√©o-projecteur. Deux classes ont √©t√© d√©velopp√©es √† cet effet et sont largement utilis√©es : `beamer` et `powerdot`. Actuellement, `beamer` est le plus largement utilis√©, voici donc un exemple de son fonctionnement :

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

\begin{frame}{Premi√®re diapositive}
  Un peu de texte
\end{frame}

\begin{frame}{Deuxi√®me diapositive}
  Autre texte
  \begin{itemize}
    \item<1-> Premier item,
    \item<2-> Second item.
  \end{itemize}
\end{frame}

\end{document}
```

Cela montre deux choses importantes. Premi√®rement, `beamer` divise un document en `frames` (¬´ cadres ¬ª), chacun d'eux pouvant donner plus d'une diapositive. Deuxi√®mement, `beamer` ajoute des possibilit√©s √† la syntaxe LaTeX normale pour permettre √† certaines parties du document d'appara√Ætre petit √† petit, formant des animations. C'est un outil puissant, mais plus compliqu√© que ce que nous pouvons couvrir ici : [consultez cet article de blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) pour en savoir plus.


## Classe pour produire des images

Parfois vous devez composer une image (qui peut avoir un code-source tr√®s long) avec LaTeX. Dans ce cas, souvent, vous ne voulez rien d'autre que l'image dans le PDF final, sans le reste de la page. Le plus simple est d'utiliser la classe [`standalone`](https://ctan.org/pkg/standalone). Elle d√©finit automatiquement la taille de la page pour qu'elle entoure le contenu imprim√©.


```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
Un document tr√®s simple: il va tenir dans une toute petite bo√Æte!
\end{document}
```
>>>>>>> f133d525... Add more-01 to more-08 after reencoding in UTF-8.
