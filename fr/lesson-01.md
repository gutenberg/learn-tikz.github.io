---
<<<<<<< HEAD
title: "Qu'est-ce que LaTeX, et comment ça marche?"
---

Contrairement aux traitements de texte courants tels que Microsoft Word ou
LibreOffice Writer, LaTeX ne fournit pas lui-même de WYSIWYG (« _What You See
Is What You Get_ », c'est-à-dire « ce que vous voyez est ce que vous obtenez »
ou « tel écran, tel écrit »). Avec LaTeX, on prend du texte simple et on
l'enrichit avec des balises. Ce balisage indique à LaTeX la signification
logique de certains éléments du texte, comme en HTML.

Par exemple dans un document HTML, l'élément `<h2>` indique une nouvelle
section. En LaTeX, pour avoir le même résultat, on utiliserait la commande
`\section`.


## La chaîne de traitement {{ site.latex }}

Comme les fichiers LaTeX ne sont pas le document lui-même mais plutôt des
instructions disant ce que doit être chaque partie du document, vous ne donnez
normalement pas à vos lecteurs votre fichier LaTeX lui-même. Au lieu de cela,
après avoir écrit votre _fichier source_ LaTeX, vous lancez LaTeX sur le fichier (en
utilisant par exemple un programme appelé `pdflatex`) pour produire un fichier
PDF. C'est ce PDF que vous allez fournir à vos lecteurs.

Ce processus porte différents noms : comme l'utilisation de LaTeX est un peu
comme la programmation, on appelle souvent cela « compiler » votre document,
le terme de « composition » serait sans doute plus exact.


## Compilations multiples avec {{ site.latex }}

Pour les documents simples, on n'a besoin de compiler le fichier qu'une seule
fois pour obtenir le PDF complet. Mais une fois que vous aurez commencé à
ajouter des éléments plus complexes, comme des références croisées, des
citations, des figures et des tables des matières, il vous faudra peut-être
faire tourner LaTeX plusieurs fois sur votre document. Nous vous dirons quand
ce sera le cas.


## {{ site.latex }} ou pdf{{ site.latex }} ou&hellip;

[Dans la prochaine leçon](lesson-02), nous allons voir que LaTeX n'est pas un
programme unique. Pour simplifier les choses, nous allons nous concentrer sur un
programme LaTeX particulier, pdfLaTeX, pour créer vos PDF. Plus tard dans le
cours, nous jetterons un œil à d'autres programmes, et vous comprendez quand les
utiliser.
=======
title: "What is LaTeX and how does it work?"
---

Unlike common word processors such as Microsoft Word or LibreOffice Writer, LaTeX
usually does not provide WYSIWYG ('What You See Is What You Get'). With LaTeX
one takes plain text and enriches it with markup. This markup tells LaTeX
about the logical meaning of certain elements of the text, similar to the way
HTML does.

Take for example the element  `<h2>`  indicating a new section in an HTML document.
LaTeX also has a command for this; here one would use the `\section` command.

## The {{ site.latex }} workflow

Because LaTeX files are not the document itself but rather instructions
on what each part of the document should be, you don't normally give other
people your LaTeX file itself. Instead, after writing your LaTeX _source_, you
run LaTeX on the file (normally using a program called `pdflatex`) to
create a PDF file. This PDF is then what you send to others.

Different people use different ways to describe this process. As using LaTeX
is a bit like programming, it's often called 'compiling' your document, although
'typesetting' is more accurate.

## Multiple {{ site.latex }} runs

For simple files, you only need to typeset your file once to get the completed
PDF. But once you start adding more complicated things, like cross-references,
citations, figures, and tables of contents, you might need to run LaTeX more
than once. We'll tell you when that's the case.

## {{ site.latex }} or pdf{{ site.latex }} or ...

In the [next lesson](lesson-02), we are going to see that LaTeX is not a
single program. To keep things simple, we are going to focus on one particular
LaTeX program, pdfLaTeX, for creating your PDFs. We will look at some other
programs, and why you might want to use them, later in the course.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
