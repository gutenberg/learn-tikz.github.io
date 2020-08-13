---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Using the learnlatex.org site (French)"
=======
=======
>>>>>>> e2a0112e... French translation (#88)
title: "Utiliser le site learnlatex.org"
permalink: /fr/help
>>>>>>> 08062c9f... French translation (#88)
---

## Naviguer sur ce site web

Ce cours se compose de 16 leçons principales, accessibles à partir de la table
des matières de [la page d'accueil](/).

Chaque leçon a un lien avec vers une leçon d'approfondissement sur le même
sujet. Il est possible de suivre les 16 leçons _sans lire les leçons
d'approfondissement_.

À la fin du cours, il y a une leçon spécifique au français, et enfin une
galerie d'exemples de packages illustrant des utilisations de LaTeX
non couvertes par ce cours.


## Exécuter les exemples

Chaque exemple est constitué d'un petit document LaTeX complet, qui apparaît
dans la page sous cette forme :
=======
title: "Using the learnlatex.org site"
permalink: /en/help
---

## Navigating the site

The course consists of 16 core lessons that can be reached from the table
of contents on the [home page](/).

Each lesson has a link to one associated lesson on the same subject
that goes into greater depth. It should be possible to work through
all 16 lessons _without_  reading the additional lessons.

At the end of the course there are one or more lessons specific to the
language being used for the lessons, and finally a gallery of examples
of packages demonstrating LaTeX use not covered by this course.

## Running the examples

Each example consists of a complete small LaTeX document shown within
the page like this:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
<<<<<<< HEAD

\begin{document}
Texte d'exemple.
\end{document}
```

L'exemple est complet. Cependant, vous pouvez le modifier à votre guise pour
tester des choses, éventuellement dans le cadre d'un exercice proposé en fin de
leçon. L'éditeur utilisé est [ACE](https://ace.c9.io/).

Que le code-source de l'exemple ait été modifié ou non, il existe trois manières
de l'exécuter :

1. Utiliser le service **LaTeX Online**. Le bouton
   <button style="padding:0 1px;font-size:90%">LaTeX Online</button>
   soumettra le code au service [LaTeX CGI](https://latexcgi.xyz/)[^1].

   Le serveur _LaTeX CGI_ a été mis en place spécialement pour supporter ce
   site, et utilise notamment [PDF.js](https://mozilla.github.io/pdf.js/) pour
   afficher les fichiers PDF sur les navigateurs mobiles ou autres, dépourvus de
   lecteur PDF intégré.

   Le document PDF résultant (ou une partie du journal des erreurs)
   sera affiché dans la page, immédiatement sous l'exemple. Un bouton
   <button style="padding:0 1px;font-size:90%">Fermer l'affichage</button>
   apparaîtra pour que vous puissiez effacer cette sortie (ou la laisser
   en place et suivre le reste de la leçon).

   Notez que **LaTeX Online** ne nécessite ni connexion ou ni inscription
   d'aucune sorte, ce qui est très pratique pour les petits exemples, mais
   ni ce site ni les sites `latexcgi`, `latexonline.cc` ou `latex-on-http`
   ne proposent de mécanisme pour enregistrer votre document. Toute modification
   que vous auriez apportée à l'exemple est perdue quand vous quittez la page.


2. Utiliser le service **Overleaf**. Le bouton
   <button style="padding:0 1px;font-size:90%">Ouvrir dans Overleaf</button>
   soumettra le code à [Overleaf](https://www.overleaf.com/about).

   Si vous n'avez pas encore de compte, ou si les détails de votre compte n'ont
   pas déjà été enregistrés dans votre navigateur, vous serez redirigé vers une
   page de connexion où vous pourrez vous connecter ou vous inscrire sur
   Overleaf. Ce service est gratuit, mais vous devrez donner quelques
   informations personnelles (notamment une adresse mail) et accepter les
   conditions générales d'utilisation.

   Si votre compte Overleaf est déjà en cache dans votre navigateur, alors une
   page web Overleaf s'ouvrira dans un nouvel onglet, avec un nouveau projet
   contenant le code de l'exemple. À partir de là, vous pourrez le modifier dans
   Overleaf, qui lancera automatiquement LaTeX sur votre code en affichant le
   résultat ou le journal des erreurs.

   Overleaf a des fonctionnalités beaucoup plus évoluées que notre site web
   pour l'édition des documents, et vous pouvez enregistrer vos projets dans
   votre compte Overleaf pour y revenir plus tard.


3. Si vous avez un système TeX installé localement, vous pouvez copier le code
   de l'exemple à partir de la page, soit en le sélectionnant explicitement,
   soit en utilisant les raccourcis clavier de l'éditeur (ctrl-A ctrl-C dans
   Windows par exemple). Lancez alors votre éditeur local, et collez le code
   de l'exemple dans un document vierge.


## Choisir le moteur {{ site.tex }}

Quand vous compilerez les exemples par _LaTeX Online_, c'est le moteur `pdflatex`
qui sera utilisé par défaut, sauf si l'exemple charge le package `fontspec`,
auquel cas `xelatex` sera utilisé.

Vous pouvez forcer le choix de `pdflatex`, `xelatex`, `lualatex`, `platex` ou
`uplatex` en ajoutant dans le document un commentaire de la forme :

`% !TEX ` _any text_ `lualatex`

où l'espace blanc au début est facultatif et la casse sans importance.
_Tout texte_ entre le premier et le dernier mot est également ignoré. Cela
permet d'écrire `% !TEX program=pdflatex`, comme demandé par certains éditeurs
TeX, mais ne nécessite pas la chaîne `programme=`. Cette syntaxe est
actuellement limitée à la seule spécification d'un des cinq moteurs listés
ci-dessus.

Par exemple dans les exemples [de cette leçon](more-14), vous pouvez voir un tel
commentaire utilisé pour spécifier LuaLaTeX.

Si `platex` ou `uplatex` est demandé, alors le programme `dvipdfmx` sera
automatiquement lancé ensuite pour produire le résultat en PDF à partir
du fichier DVI généré par ces variantes.


## Choisir comment afficher le résultat

Si vous utilisez _LaTeX Online_, la sortie PDF sera affichée par défaut en
utilisant [PDF.js](https://mozilla.github.io/pdf.js/). Ce choix permet d'obtenir
un comportement cohérent sur le plus grand nombre de navigateurs.

Si vous préférez utiliser le lecteur PDF de votre navigateur (qu'il soit intégré
ou qu'il s'agisse d'une application externe que vous avez configurée), ajoutez
un commentaire de cette forme :

`% !TEX ` _any text_ `pdf`

Le comportement par défaut peut également être explicitement spécifié en
utilisant `pdfjs` dans le commentaire ci-dessus. Pour le débogage, vous pouvez
parfois souhaiter que le fichier journal soit renvoyé, même si le document
produit un PDF sans erreur. Cela peut être demandé en utilisant `log` dans ce
commentaire.

---

[^1]: Pendant le développement de ce site web, nous avons également utilisé
      [LaTeX.Online](https://latexonline.cc/) et
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http) et nous
      remercions chaleureusement les développeurs de ces services de les avoir
      adaptés à nos besoins pour permettre à nos exemples de fonctionner dès
      les premières phases de développement de _learnlatex.org_.
=======
\begin{document}
Example text.
\end{document}
```

The example is complete. However you may wish to edit it to make small
changes, perhaps as part of an Exercise set at the end of the lesson.
The editor being used is [ACE](https://ace.c9.io/).

Whether or not the code block has been edited, there are three basic ways that you can run the example.

1. Use a  **LaTeX Online** service. The <button style="padding:0 1px;font-size:90%">LaTeX Online</button> button
   will submit the code to the
   [LaTeX CGI](https://latexcgi.xyz/) service[^1].


   The LaTeX CGI service was developed specifically to support this site, and
   in particular makes use of [PDF.js](https://mozilla.github.io/pdf.js/)
   to enable display of PDF on mobile and other browsers without built in PDF readers.

   The resulting PDF document (or section of the error log) will be
   shown inline immediately below the example. A <button style="padding:0 1px;font-size:90%">Delete
   Output</button> button will be provided so that you may remove this output
   (or you may leave it in place and continue the rest of the lesson
   below).

   Note that **LaTeX Online** requires no login or signup of any sort
   so it is very convenient for small examples, but neither this site
   nor the `latexcgi`, `latexonline.cc` or `latex-on-http` sites
   provide any mechanism to save your document. Any changes that you
   make to the example are lost if you move off the page.


2. Use the **Overleaf** Service. The <button style="padding:0 1px;font-size:90%">Open in Overleaf</button>
   button will submit the code to [Overleaf](https://www.overleaf.com/about).

   If you do not have an account, or the account details are not
   already cached in your browser, then you will be redirected to a
   login page where you may login or register with Overleaf. This is a
   free service but does require you to give some details and agree to
   terms and conditions.

   If your Overleaf account is already cached in your browser, then
   Overleaf will be opened in a new tab, with a new
   project with the code. You may then edit it in
   Overleaf which will simultaneously run LaTeX on your code showing
   the resulting output or error log.

   The editing features in Overleaf are far more extensive than on this
   site, and you may save your project in your Overleaf account and
   return to it later.

3. If you have a TeX system installed locally, then you may copy the
   example code off the page, either explicitly selecting it, or by
   using select all keyboard shortcuts in the editor (ctrl-A Ctrl-C
   in windows for example). This will place the code in your operating system
   clipboard so you can start a blank document using your local
   editor, and paste in the text.


## Choosing the {{ site.tex }} engine

When submitting example documents, by default the
`pdflatex` engine will be used unless the example uses the `fontspec`
package in which case `xelatex` is used.

You can force the choice of `pdflatex`, `xelatex`, `lualatex`,
`platex` or `uplatex` by using a comment of the form:

`% !TEX ` _any text_ `lualatex`

where the white space at the start is optional and case is ignored as
is _any text_ between the first and last word.

This allows the form `% !TEX program=pdflatex` used by some TeX editors
but does not require the `program=` and is currently restricted to
specifying just one of the five engines that are supported on
the online systems being used.

You can see an example of a comment being used to specify LuaLaTeX in
[some of the examples on this site](more-14).

If `platex` or `uplatex` is specified; then the `dvipdfmx` program is
also used to produce the PDF result from the DVI file that these variants generate.


## Choosing how to display the output

If you use the LaTeX online system, then the PDF
output from running an example is shown using
[PDF.js](https://mozilla.github.io/pdf.js/) by default. This provides
consistent behavior over the widest range of browsers.

If you would prefer to use your browser's default PDF reader (either
its built in one, or an external application that you have configured)
then add a comment of the form:

`% !TEX ` _any text_ `pdf`

The default behavior can be explicitly specified by using `pdfjs` as
the final token. For debugging you may sometimes want the log file
returned, even if the document produces a PDF with
no errors. This can be specified by using `log` as the final token in
the comment.

---

[^1]: Note that during development of the site we have also used 
      [LaTeX.Online](https://latexonline.cc/) and
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)
      and we thank the developers of those services for making updates to enable
      the examples on this site to be available at an early stage.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
title: "Using the learnlatex.org site (French)"
permalink: /fr/help
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Using the learnlatex.org site"
=======
title: "Utiliser le site learnlatex.org"
>>>>>>> ceb6df50... Translation of the help file into French.
permalink: /fr/help
---

## Naviguer sur ce site web

Ce cours se compose de 16 leçons principales, accessibles à partir de la table des matières de [la page d'accueil](/).

Chaque leçon a un lien avec vers une leçon d'approfondissement sur le même sujet. Il est possible de suivre les 16 leçons _sans lire les leçons d'approfondissement_.

À la fin du cours, il y a un ou quelques leçons spécifiques à la langue choisie pour les cours (ici le français), et enfin une galerie d'exemples de packages illustrant des utilisations de LaTeX non couvertes par ce cours.


## Exécuter les exemples

Chaque exemple est constitué d'un petit document LaTeX complet, qui apparaît dans la page sous cette forme :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Example text.
\end{document}
```

L'exemple est complet. Cependant, vous pouvez le modifier à votre guise pour tester des choses, éventuellement dans le cadre d'un exercice proposé en fin de leçon. L'éditeur utilisé est [ACE](https://ace.c9.io/).

Que le code-source de l'exemple ait été modifié ou non, il existe trois manières de l'exécuter:

1. Utiliser le service **LaTeX Online**. Le bouton
   <button style="padding:0 1px;font-size:90%">LaTeX Online</button>
   soumettra le code au service [LaTeX CGI](https://latexcgi.xyz/)[^1].

   Le serveur _LaTeX CGI_ a été mis en place spécialement pour supporter ce site,
   et utilise notamment [PDF.js](https://mozilla.github.io/pdf.js/) pour afficher
   les fichiers PDF sur les navigateurs mobiles ou autres, dépourvus de lecteur PDF intégré.

   Le document PDF résultant (ou une partie du journal des erreurs)
   sera affiché dans la page, immédiatement sous l'exemple. Un bouton
   <button style="padding:0 1px;font-size:90%">Fermer l'affichage</button>
   apparaîtra pour que vous puissiez effacer cette sortie (ou la laisser
   en place et suivre le reste de la leçon).

   Notez que **LaTeX Online** ne nécessite aucune connexion ou inscription
   d'aucune sorte, ce qui est très pratique pour les petits exemples, mais
   ni ce site ni les sites `latexcgi`, `latexonline.cc` ou `latex-on-http`
   ne proposent de mécanisme pour enregistrer votre document. Toute modification
   que vous avez apporté à l'exemple est perdue quand vous quittez la page.


2. Utiliser le service **Overleaf**. Le bouton
   <button style="padding:0 1px;font-size:90%">Ouvrir dans Overleaf</button>
   soumettra le code à [Overleaf](https://www.overleaf.com/about).

   Si vous n'avez pas encore de compte, ou si les détails de votre compte n'ont pas déjà été enregistrés dans votre navigateur, vous serez redirigé vers une page de connexion où vous pourrez vous connecter ou vous inscrire sur Overleaf. Ce service est gratuit, mais vous devrez donner quelques information personnelles (notamment une adresse mail) et accepter les conditions générales d'utilisation.

   Si votre compte Overleaf est déjà en cache dans votre navigateur, alors une page web Overleaf s'ouvrira dans un nouvel onglet, avec un nouveau projet contenant le code de l'exemple. À partir de là, vous pourrez le modifier dans Overleaf, qui lancera automatiquement LaTeX sur votre code en affichant le résultat ou le journal des erreurs.

   Overleaf a des fonctionnalités beaucoup plus développées que notre site web pour l'édition des documents, et vous pouvez enregistrer vos projets dans votre compte Overleaf et y revenir plus tard.


3. Si vous avez un système TeX installé localement, vous pouvez copier le code
   de l'exemple à partir de la page, soit en le sélectionnant explicitement,
   soit en utilisant les raccourcis clavier de l'éditeur (ctrl-A ctrl-C dans
   Windows par exemple). Lancez alors votre éditeur local, et collez le code
   de l'exemple dans un document vierge.


## Choisir le moteur {{ site.tex }}

Quand vous compilerez les exemples, le moteur `pdflatex` sera utilisé par défaut, sauf si l'exemple utilise le paquet `fontspec`, auquel cas `xelatex` sera utilisé.

Vous pouvez forcer le choix de `pdflatex`, `xelatex`, `lualatex`, `platex` ou `uplatex` en ajoutant dans le document un commentaire de la forme :

`% !TEX ` _any text_ `lualatex`

où l'espace blanc au début est facultatif et la casse est sans importance. _Tout texte_ entre le premier et le dernier mot est également ignoré. Cela permet d'écrire `% !TEX program=pdflatex`, comme demandé par certains éditeurs TeX, mais ne nécessite pas la chaîne `programme=`. Cette syntaxe est actuellement limitée à la spécification d'un seul des cinq moteurs listés ci-dessus.

Par exemple dans les exemples [de cette leçon](more-14), vous pouvez voir un tel commentaire utilisé pour spécifier LuaLaTeX.

Si `platex` ou `uplatex` est demandé, alors le programme `dvipdfmx` est utilisé ensuite pour produire le résultat en PDF à partir du fichier DVI généré par ces variantes.


## Choisir comment afficher le résultat

Si vous utilisez _LaTeX Online_, la sortie PDF sera affichée par défaut en utilisant [PDF.js](https://mozilla.github.io/pdf.js/). Ce choix permet d'obtenir un comportement cohérent sur le plus grand nombre de navigateurs.

Si vous préférez utiliser le lecteur PDF de votre navigateur (qu'il soit intégré ou qu'il s'agisse d'une application externe que vous avez configurée), ajoutez un commentaire au formulaire :

`% !TEX ` _any text_ `pdf`

Le comportement par défaut peut également être explicitement spécifié en utilisant `pdfjs` dans le commentaire ci-dessus. Pour le débogage, vous pouvez parfois souhaiter que le fichier journal soit renvoyé, même si le document produit un PDF sans erreur. Cela peut être demandé en utilisant `log` dans ce commentaire.

---

<<<<<<< HEAD
[^1]: Note that during development of the site we have also used 
      [LaTeX.Online](https://latexonline.cc/) and
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)
      and we thank the developers of those services for making updates to enable
      the examples on this site to be available at an early stage.
>>>>>>> c93a54d4... Add 'help.md'.
=======
[^1]: Pendant le développement de ce site web, nous avons également utilisé
      [LaTeX.Online](https://latexonline.cc/) et
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http) et nous
      remercions chaleureusement les développeurs de ces services de les avoir
      adaptés à nos besoins pour permettre à nos exemples de fonctionner dès
      les premières phases de développement de _learnlatex.org_.
>>>>>>> ceb6df50... Translation of the help file into French.
