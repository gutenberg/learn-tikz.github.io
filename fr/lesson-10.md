---
<<<<<<< HEAD
title: "Écrire les mathématiques"
---

## Le mode mathématique

Vous pouvez écrire les formules mathématiques en LaTeX de manière logique et
relativement simple dans ce que l'on appelle le « mode mathématique ». En mode
mathématique, les espaces sont ignorées et l'espacement automatique des
caractères est (quasiment toujours) correct. Il existe deux formes de mode
mathématique : « en ligne » et « en exergue ».

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Une phrase avec des maths en ligne: $y = mx + c$.
Une autre phrase avec des maths en ligne: $5^{2}=3^{2}+4^{2}$.


Un deuxième paragraphe, contenant des maths en exergue:
\[
  y = mx + c
\]
Regardez comment le paragraphe se poursuit après la formule mathématique.
\end{document}
```

Vous pouvez voir ailleurs des formules mathématiques similaires à celles de
LaTeX, par exemple avec le système MathJax, qui sert à écrire des formules
dans des pages web. La syntaxe de ces systèmes peut être légèrement différente
de la syntaxe utilisée par LaTeX car ils n'utilisent pas LaTeX pour la
compilation. Nos exemples sont tous en code LaTeX correct, donc si vous voyez
quelque chose de différent dans un autre contexte, c'est peut-être parce que
ça n'utilise pas vraiment LaTeX.


## Mode mathématique « en ligne » et notations

Comme vous pouvez le voir ci-dessus, le mode mathématique en ligne est encadré
par des symboles dollar simples (`$ ... $`). Il est également possible d'utiliser
la notation `\( ... \)`. Des expressions simples sont saisies sans aucune balise
spéciale, et vous verrez que la formule est correctement espacée et que les
variables sont notées en italique.

Le mode mathématique en ligne restreint la taille verticale de l'expression afin
que, dans la mesure du possible, la formule ne perturbe pas l'interligne du
paragraphe.

Notez que _tous_ les mathématiques doivent être marquées comme des mathématiques,
même si c'est un seul caractère, utilisez `... $2$ ...` et non `... 2 ...`, dans
votre texte, sinon, par exemple, quand vous avez besoin d'un nombre négatif et
que vous avez besoin de mathématiques pour obtenir un signe moins,
le `... $-2$ ...` utilisera des chiffres mathématiques qui peuvent ne pas être
de la même police que les chiffres du texte (selon la classe du document).
Inversement, prenez garde aux symboles spécifiques du mode mathématique qui
apparaîtraient dans du texte brut (par exemple si vous copiez du texte venant
d'ailleurs) : si votre texte contient des valeurs monétaires avec des `$` ou des
noms de fichiers avec des `_`, vous aurez des erreurs. Il faudra le corriger en
utilisant `\$` et `\_`, respectivement.


On peut facilement ajouter des indices et des exposants, en utilisant `_` et `^`,
respectivement :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Indice $a_{b}$ et exposant $a^{b}$.
\end{document}
```

(Vous trouverez des exemples où les indices et exposants sont notés sans
accolades, mais ce n'est pas la syntaxe officielle et peut avoir des effets
secondaires ; utilisez donc toujours des accolades.)

Il existe de très nombreuses de commandes spécialisées en mode mathématique.
Certaines d'entre elles sont assez faciles à deviner, par exemple `\sin` et
`\log` pour le sinus et le logarithme ou `\theta` pour la lettre grecque
correspondante.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Un peu de maths: $y = 2 \sin \theta^{2}$.
\end{document}
```

Nous ne pouvons pas couvrir ici toutes les commandes standards du mode
mathématique LaTeX, mais il existe de nombreuses ressources sur internet les
répertoriant. Vous pouvez rechercher visuellement des commandes pour les
symboles du mode mathématique en utilisant
[l'outil graphique Detexify](https://detexify.kirelabs.org/classify.html).


## Mathématiques « en exergue »

Vous pouvez utiliser exactement les mêmes commandes pour le mode mathématique
« en exergue » que pour le mode « en ligne ». Les mathématiques « en exergue »
sont sur leur propre ligne, centrées par défaut et destinées aux grandes
équations qui font quand même « partie d'un paragraphe ». Notez que les
environnements mathématiques en exergue ne permettent pas à un paragraphe de
se terminer à l'intérieur des mathématiques, donc il ne doit pas y avoir de
lignes blanches dans le code-source de ces environnements.

Le paragraphe doit toujours avoir commencé _avant_ les mathématiques en exergue,
donc ne laissez pas de ligne blanche avant l'environnement mathématique
d'affichage. Si vous avez besoin de plusieurs lignes de mathématiques, n'utilisez
pas plusieurs environnements mathématiques consécutifs (cela produirait un
espacement incohérent) ; utilisez un des environnements mathématiques
multi-lignes, comme `align` du package `amsmath` décrit plus loin.

Ce mode est notamment utile pour les intégrales :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Paragraphe à propos d'une formule volumineuse:
=======
title: "Mathematics"
---

## Math mode

You can mark up mathematics in LaTeX in a logical way in what is known as
'math mode'. In math mode, spaces are ignored and the correct spacing between
characters is (almost always) applied. There are two forms of math mode: inline
and display.

```latex
\documentclass{article}
\begin{document}
A sentence with inline mathematics: $y = mx + c$.
A second sentence with inline mathematics: $5^{2}=3^{2}+4^{2}$.


A second paragraph containing display math.
\[
  y = mx + c
\]
See how the paragraph continues after the display.
\end{document}
```

You may see 'LaTeX-like' mathematical input in other places, for example
the MathJax system for placing equations in web pages. These systems often
accept slight variations on LaTeX's syntax as they do not actually use LaTeX
'behind the scenes'. Our examples are all 'correct' LaTeX, so if you see
something different in another context, it might be because the example is not
really using LaTeX.

## Inline math mode and mathematical notation

As you can see above, inline math mode is marked using a pair of dollar
symbols (`$...$`). It is also possible to use the notation `\( ... \)`.
Simple expressions are entered without any special markup, and you'll see
that the math is spaced out nicely and has letters in italic.

Inline math mode restricts vertical size of the expression so that as
far as possible the formula does not disturb the linespacing of the
paragraph.

Note that _all_ mathematics should be marked up as math, even if it is
a single character  use `... $2$ ...`   not `... 2 ...` otherwise, for
example, when you need a negative number and need math to get a minus
sign the `... $-2$ ...` may use math digits which may not be the same
font as the text digits (depending on the document class).
Conversely
beware of math mode constructs appearing in plain text copied from
elsewhere such as  monetary values using `$` or filenames using `_` (which
may be marked up as `\$` and `\_` respectively).

We can easily add superscripts and subscripts; these are marked using `^` and
`_`, respectively.

```latex
\documentclass{article}
\begin{document}
Superscripts $a^{b}$ and subscripts $a_{b}$.
\end{document}
```

(You might see examples where simple super- and subscripts are entered without
braces, but that is not the official syntax and can go wrong; always use
braces.)

There are a _lot_ of specialist math mode commands. Some of them are quite
easy, for example `\sin` and `\log` for sine and logarithm or `\theta` for the
Greek letter.

```latex
\documentclass{article}
\begin{document}
Some mathematics: $y = 2 \sin \theta^{2}$.
\end{document}
```

We cannot cover all the standard LaTeX math mode commands here, but there are
many online resources listing the standard set. You can look up commands for
math mode symbols using the
[Detexify](https://detexify.kirelabs.org/classify.html) tool.


## Display mathematics

You can use exactly the same commands for display math mode as for
inline work. Display math mode is set centered by default and is meant
for larger equations that are 'part of a paragraph'. Note that
display math environments do not allow a paragraph to end within the
mathematics, so you may not have blank lines within the source of the
display.

The paragraph should always be started _before_ the display so do not
leave a blank line before the display math environment. If you need
several lines of mathematics, do not use consecutive display math
environments (this produces inconsistent spacing); use one of the
multi-line display environments such as `align` from the `amsmath`
package described later.

It's particularly useful for integrations, for example:

```latex
\documentclass{article}
\begin{document}
A paragraph about a larger equation
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

<<<<<<< HEAD
Vous voyez comment la notation des indices et exposants est utilisée pour fixer
les limites de l'intégrale?

Nous avons inséré un espacement manuel ici : `\,` ajoute une espace fine avant
le `dx`, dont nous avons besoin pour que cela ne ressemble pas à un produit.

On a l'habitude de souvent numéroter les formules. Ça se fait automatiquement
avec l'environnement `equation`. Essayons de reprendre le même exemple :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Paragraphe à propos d'une formule volumineuse:
=======
Notice here how sub-/superscript notation is used to set the limits on the
integration.

We've added one piece of manual spacing here: `\,` makes a thin space before the
`dx`, which we need so it does not look like a product.

You often want a numbered equation, which is created using the `equation`
environment. Let's try the same example again:

```latex
\documentclass{article}
\begin{document}
A paragraph about a larger equation
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

<<<<<<< HEAD
Le numéro de la formule est incrémenté automatiquement et peut être un simple
nombre ordinal comme dans cet exemple ou peut être préfixé par le numéro de la
section, donc _(2.5)_ pour la 5<sup>e</sup> équation de la section 2.
Les détails de la mise en forme sont définis par la classe de document et
ne sont pas décrits ici.


## Le package `amsmath`

L'écriture mathématique est très riche, ce qui signifie que les outils intégrés
au noyau LaTeX ne peuvent pas tout couvrir. Le package `amsmath` étend le
support du noyau pour couvrir beaucoup plus de notations. Le
[Guide de l'utilisateur d'`amsmath`](http://texdoc.net/pkg/amsmath) contient
beaucoup plus d'exemples que nous ne pouvons en montrer dans cette leçon.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Résoudre la récurrence suivante pour $ n,k\geq 0 $:
=======
The equation number is incremented automatically and may be a simple
number as in this example or may be prefixed by section number, so
(2.5) for the 5th equation in section 2. The details of the formatting
are set up by the document class and not described here.


## The `amsmath` package

Mathematical notation is very rich, and this means that the tools built
into the LaTeX kernel can't cover everything. The `amsmath` package
extends the core support to cover a lot more ideas.
The [`amsmath` User Guide](http://texdoc.net/pkg/amsmath)
contains many more examples than we can show in this lesson.


```latex
\documentclass{article}
\usepackage{amsmath}

\begin{document}
Solve the following recurrence for $ n,k\geq 0 $:
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n$, $k>0$.}
\end{align*}
\end{document}
```

<<<<<<< HEAD
L'environnement `\align*` fait que les équations s'alignent sur les esperluettes
(les symboles `&`), comme dans un tableau. Remarquez comment nous avons utilisé
`\quad` pour insérer une grande espace, et `\text` pour mettre du texte normal
dans le mode mathématique. Nous avons également utilisé une autre commande en
mode mathématique: `\binom`, pour une binomiale.

Nous avons utilisé ici `align*` (avec une étoile), ce qui fait que l'équation
n'est pas numérotée. La plupart des environnements mathématiques numérotent
les équations par défaut, et la variante étoilée (avec un `*`) désactive cette
numérotation.

Le package propose également plusieurs autres environnements bien pratiques,
par exemple pour les matrices :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

=======
The `align*` environment makes the equations line up on the ampersands, the `&`
symbols, just like a table. Notice how we've used `\quad` to insert a bit of
space, and `\text` to put some normal text inside math mode. We've also used
another math mode command, `\binom`, for a binomial.

Notice that here we used `align*`, and the equation didn't come out numbered.
Most math environments number the equations by default, and the starred variant
(with a `*`) disables numbering.

The package also has several other convenient environments, for
example for matrices.

```latex
\documentclass{article}
\usepackage{amsmath}
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\begin{document}
AMS matrices.
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```


<<<<<<< HEAD
## Les fontes en mode mathématique

Contrairement au texte normal, les changements de police en mode mathématique
véhiculent généralement une signification très particulière. Elles sont donc la
plupart du temps écrites explicitement. Vous aurez besoin d'un petit ensemble
de commandes :

- `\mathrm` : romain (droit),
- `\mathit` : italique, espacé comme du texte,
- `\mathbf` : gras,
- `\mathsf` : sans empattements,
- `\mathtt` : chasse fixe (type machine à écrire),
- `\mathbb` : « gras de tableau noir », avec des doubles traits (fourni pas le package `amsfonts`).

Chacune d'entre elles prend des lettres latines comme argument, ainsi nous
pourrions écrire une matrice de cette façon :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
La matrice $\mathbf{M}$.
\end{document}
```

Notez que, par défaut, l'italique mathématique sépare les lettres par des
espaces, considérant implicitement qu'il s'agit d'un produit de variables.
Utilisez `\mathit` pour mettre un mot complet en italique sans séparer
ses lettres.

Les commandes de police `\math..` utilisent les polices spéciales pour les
mathématiques. Parfois, vous devez intégrer à une formule un mot qui fait partie
de la phrase englobant la formule, et qui a besoin de la police du texte
courant ; pour cela vous pouvez utiliser `\text{...}` (qui est fourni par le
package `amsmath`) ou les styles de police faits pour le texte,
comme `\textrm{...}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
$\text{bad use } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{bad use } size \neq \mathit{size} \neq \mathrm{size} $}
\end{document}
```

Si vous avez besoin de mettre d'autres symboles en gras, lisez
[la leçon d'approfondissenement](more-10).


## Travaux pratiques

Essayez de faire quelques exercices de base en mode mathématique : reprenez les
exemples et passez d'un mode mathématique « en ligne » à un mode mathématique
« en exergue ». Observez les effets.

Essayez d'ajouter d'autres lettres grecques, en minuscules et en majuscules.
Vous devriez être capable de deviner les noms.

Expérimentez les commandes de changement de police : que se passe-t-il lorsque
vous essayez de les imbriquer ?

Les mathématiques « en exergue » sont centrées par défaut ; essayez d'ajouter
l'option de classe de document `[fleqn]` (_flush left equation_) à certains des
exemples ci-dessus pour voir un alignement différent. De même, les numéros
d'équation sont généralement à droite. Essayez d'ajouter l'option de classe de
document `[leqno]` (_left equation number_).
=======
## Fonts in math mode

Unlike normal text, font changes in math mode often convey very specific meaning.
They are therefore often written explicitly. There are a set of commands you need
here:

- `\mathrm`: roman (upright)
- `\mathit`: italic spaced as 'text'
- `\mathbf`: boldface
- `\mathsf`: sans serif
- `\mathtt`: monospaced (typewriter)
- `\mathbb`: double-struck (blackboard bold) (provided by the `amsfonts` package)

Each of these takes Latin letters as an argument, so for example we might
write a matrix as

```latex
\documentclass{article}
\begin{document}
The matrix $\mathbf{M}$.
\end{document}
```

Note that the default math italic separates letters so that they may
be used to denote a product of variables. Use `\mathit` to make a word italic.

The `\math..` font commands use fonts specified for math
use. Sometimes you need to embed a word that is part of the outer
sentence structure and needs the current text font, for that you can
use `\text{...}` (which is provided by the `amsmath` package) or
specific font styles such as `\textrm{..}`.

```latex
\documentclass{article}
\usepackage{amsmath}
\begin{document}

$\text{bad use } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{bad use } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```


If you need to make other
symbols bold, [see the extra details](more-10).

## Exercises

Try out some basic math mode work: take the examples and switch between
inline and display math modes. Can you see what effect this has.

Try adding other Greek letters, both lower- and uppercase. You should be
able to guess the names.

Experiment with the font changing commands: what happens when you try to
nest them?

Displayed math is centered by default; try adding the document class
option `[fleqn]` (flush
left equation) option to some of the above examples to see a different
layout. Similarly equation numbers are usually on the
right. Experiment with adding the `[leqno]` (left equation numbers)
document class option.
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
