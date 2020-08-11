---
<<<<<<< HEAD
title: "Références croisées"
---

## Étiquettes et références : comment fonctionnent `\label` et `\ref`?

Quand on rédige un document, quelle que soit sa longueur, on fait souvent
référence à des éléments tels que des figures, des tableaux ou des équations.
Heureusement, LaTeX peut ajouter automatiquement les bonnes références ;
il suffit de quelques commande simples. Pour que LaTeX se souvienne d'un endroit
dans votre document, vous devez l'« étiqueter », puis à d'autres endroits,
vous y ferez référence:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Bonjour tout le monde!

C'est mon premier document LaTeX.

\section{Titre de la première section}

Texte de la première section.


\subsection{Sous-section de la première section}
\label{subsec:etiquette1}

Texte de la sous-section.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:etiquette2}
\end{equation}

Dans la sous-section~\ref{subsec:etiquette1}, nous avons l'équation~\ref{eq:etiquette2}.
\end{document}
```

Il y a deux commandes `\label{...}` : l'une après la sous-section et l'autre
dans l'environnement de l'équation. Les commandes `\ref{...}` de la dernière
phrase utilisent les noms des étiquettes ainsi définies. Lorsqu'on l'exécute,
LaTeX enregistre les informations sur les étiquettes dans un fichier auxiliaire.
Pour `\label{subsec:labelone}`, LaTeX sait qu'il est maintenant dans une
sous-section et il enregistre donc le numéro de la sous-section.
Pour `\label{eq:labeltwo}`, LaTeX sait que l'environnement d'intérêt le plus
récent est une équation, il enregistre donc les informations relatives à cette
équation. Lorsqu'on demande la référence avec `\label{...}`, LaTeX l'obtient
à partir du fichier auxiliaire.

Les chaînes `subsec:` et `eq:` ne sont pas utilisées par LaTeX ; il s'agit juste
d'une convention pour vous aider à retrouver facilement ce à quoi vous faite
référence pendant que vous écrivez (vous pouvez choisir une autre convention).
LaTeX garde seulement une trace de ce qu'il a traité le plus récemment.

Parfois, vos références apparaissent dans la sortie PDF sous forme de doubles
points d'interrogation en gras, **??**. L'explication est qu'en raison de la
création de ce fichier auxiliaire, la première fois que vous compilez un
document, l'étiquette n'a pas encore été enregistrée. Lancez LaTeX une fois de
plus et vous serez prêt. (D'habitude, pendant l'écriture, vous lancerez LaTeX
plusieurs fois de toutes façons, donc en pratique, ce n'est pas un problème).

Remarquez les tildes (`~`) avant les références. La tilde représente une espace
qui ne sera jamais utilisée pour mettre une coupure de ligne (une
_espace insécable_). Ici, elle sert donc à empêcher LaTeX de mettre le mot
« sous-section » et son numéro sur deux lignes distinctes (ou « équation » et
son numéro), ce qui serait inesthétique.


## Où mettre les `\label`?

La commande `\label` se réfère toujours à l'entité numérotée précédente : une
section, une équation, un flottant, etc. Cela signifie que la commande `\label`
doit toujours venir **après** la chose à laquelle vous voulez faire référence.
En particulier, lorsque vous créez des flottants, le `\label` doit venir
**après** (ou mieux, dans), la commande `\caption`, mais à l'intérieur de
l'environnement du flottant.


## Travaux pratiques

Essayez d'ajouter de nouvelles parties numérotées (sections, sous-sections,
listes&hellip;) au document de test et comptez combien d'exécutions sont
nécessaires pour faire fonctionner les commandes `\label`.

Ajoutez des flottants et voyez ce qui se passe quand vous mettez `\label`
_avant_ la commande `\caption` au lieu d'après. Pouvez-vous prédire le résultat ?

Que se passe-t-il si vous mettez un `\label` pour une équation après le
`\end{equation}`?
=======
title: "Cross-referencing"
---

## The `\label` and `\ref` mechanism

When you are writing a document of any length, you'll want to refer to numbered
items such as figures, tables or equations. Luckily, LaTeX can automatically add
the right numbers; we just have to set things up. To have LaTeX remember a spot
in your document you have to label it, and then in other places, you refer to it.

```latex
\documentclass{article}

\begin{document}
Hey world!

This is a first document.

\section{Title of the first section}

Text of material for the first section.


\subsection{Subsection of the first section}
\label{subsec:labelone}

Text of material for the first subsection.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}

In subsection~\ref{subsec:labelone} is equation~\ref{eq:labeltwo}.
\end{document}
```

There are two `\label{...}` commands, one after the subsection
and one inside the equation environment.
They are associated with the last sentence's `\ref{...}` commands.
When you run LaTeX, it saves information about the labels to an auxiliary file.
For `\label{subsec:labelone}`, LaTeX knows that it is now in a subsection and
so it saves the subsection's number.
For `\label{eq:labeltwo}`, LaTeX knows that the most recent environment
of interest is an equation so it saves the information for that equation.
When you ask for the reference, LaTeX gets it from the auxiliary file.

The `subsec:` and `eq:` aren't used by LaTeX;
rather, it just keeps track of what it has most
recently processed.
But when you are writing these help you remember what the label
is about.

You may see references that show in an output PDF
as boldface double question marks, **??**.
The explanation is that because of this auxiliary file work,
the first time that you compile a document the label has not
yet been saved.
Run LaTeX one more time and you'll be all set.
(Usually while writing you will run LaTeX several times anyway,
so in practice this is not a bother.)

Notice the tie (`~`) characters before the references.
You don't want a line break between `subsection` and its number, or
between `equation` and its number.
Putting in a tie means LaTeX won't break the line there.

## Where to put `\label`

The `\label` command always refers to the previous numbered entity:
a section, an equation, a float, etc. That means that `\label` always has to
come _after_ the thing you want to refer to. In particular, when you create
floats, the `\label` has to come _after_ (or better, in), the `\caption` command,
but within the float environment.

## Exercises

Try adding new numbered parts (sections, subsections, enumerated lists) to
the test document and finding out how many runs are needed to make `\label`
commands work.

Add some floats and see what happens when you put `\label` _before_ the
`\caption` instead of after; can you predict the result?

What happens if you put a `\label` for an equation _after_ the `\end{equation}`?
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
