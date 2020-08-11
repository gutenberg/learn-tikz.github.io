---
<<<<<<< HEAD
title: "Inclure des images et les faire « flotter »"
---

## Inclure des images

Pour insérer des images provenant d'autres logiciels que LaTeX, utilisez le
package `graphicx`, qui fournit la commande `\includegraphics`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
Cette image
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
est un fichier PDF importé.
\end{document}
```

Vous pouvez inclure des fichiers EPS, PNG, JPG et PDF. Si vous ne donnez pas
l'extension du nom de fichier, `graphicx` essaiera de la deviner. Mais si vous
disposez de plusieurs versions d'une image, vous pouvez la préciser, par
exemple, `example-image.png`.

Vous pouvez remarquer que nous avons utilisé ici un nouvel environnement,
`center`, pour centrer l'image horizontalement sur la page.
[Un peu plus tard](lesson-11), nous parlerons plus en détail de l'espacement
et du positionnement.


## Modifier l'apparence des images

La commande `\includegraphics` a de nombreuses options pour contrôler la taille
et la forme des images incluses et pour rogner l'image insérée. Certaines de
ces options sont très utilisées, il est donc important de les connaître.

Les choses les plus évidentes à définir sont la largeur de l'image (`width`) et
sa hauteur (`height`), qui sont souvent données par rapport à la largeur du
texte (`\textwidth`) ou à sa hauteur (`\textheight`). LaTeX mettra
automatiquement l'image à l'échelle pour que son rapport hauteur/largeur reste
correct.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
=======
title: "Including graphics and making things 'float'"
---

## Including graphics

To bring in graphics from outside LaTeX, use the `graphicx`
package, which adds the command `\includegraphics` to LaTeX.

```latex
\documentclass{article}
\usepackage{graphicx}

\begin{document}
This picture
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
is an imported PDF.
\end{document}
```

You can include EPS, PNG, JPG, and PDF files.
If you have more than one version of a graphic then you can write,
for instance, `example-image.png`. (The `graphicx` package will try to
guess the extension if you do not give one.)

You'll notice we've used a new environment here, `center`, to place the image
horizontally centered on the page. [A bit later](lesson-11), we'll talk more
about spacing and positioning.

## Altering graphic appearance

The `\includegraphics` command has many options to control
the size and shape of the included images and to trim down material. Some of
these are used a lot, so they are worth being aware of.

The most obvious thing to set is the `width` or the `height` of an
image, which are often given relative to the `\textwidth` and
`\textheight`. LaTeX will automatically scale the image so that the aspect
ratio stays correct.

```latex
\documentclass{article}
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
<<<<<<< HEAD
Un peu de texte.
=======
Some text
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

<<<<<<< HEAD
Vous pouvez également mettre à l'échelle les images avec `scale`, ou les faire
pivoter avec `angle`. L'autre chose que vous pouvez faire est de découper
(`clip`) ou de rogner (`trim`) une image.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
=======
You can also `scale` images, or rotate them by an `angle`. The other thing you
might want to do is to `clip` and `trim` an image.

```latex
\documentclass{article}
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

<<<<<<< HEAD
## Faire « flotter » les images

Traditionnellement, dans la composition de documents, et en particulier pour les
documents techniques, les images et les tableaux peuvent être déplacés une ou
quelques pages plus loin dans le document, ou regroupés à plusieurs sur une
seule page, pour mieux utiliser l'espace disponible et ne pas laisser vides de
grands morceaux de pages. Ce type d'image ou de tableau s'appelle un _flottant_
(en anglais, « _float_ »).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % Pour avoir du texte de remplissage

\begin{document}
\lipsum[1-4] % Quelques paragraphes de texte

Emplacement initial
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{Une image d'exemple}
\end{figure}

\lipsum[6-10] % Quelques paragraphes de texte
\end{document}
```

Si l'on n'utilisait pas le mécanisme des flottants, l'image apparaîtrait juste
sous le texte `Emplacement initial`. Mais quand on permet à l'image de flotter,
elle est positionnée en haut de la deuxième page, car il n'y a pas de place pour
elle au bas de la première page. L'option `ht` influence l'endroit où LaTeX peut
placer le flottant ; ces deux lettres signifient qu'il peut aller là où il se
trouve dans la source (donc à côté de `Emplacement initial`) ou en haut d'une
page. Vous pouvez utiliser jusqu'à quatre spécificateurs de position :

- `h` : ici, si possible (_**h**ere_),
- `t` : en haut d'une page (_**t**op of a page_),
- `b` : en bas d'une page (_**b**ttom of a page_),
- `p` : sur une page réservée pour les flottants (_**p**age_).

[Plus tard](lesson-09), nous verrons comment faire référence à des flottants
dans votre texte, afin que le lecteur puisse les trouver facilement même s'ils
sont été déplacés de quelques pages par LaTeX.

Vous avez sans doute remarqué qu'ici nous avons centré l'image en utilisant la
commande `\centering` plutôt que l'environnement `center`. À l'intérieur d'un
flottant, vous devez utiliser cette commande pour centrer horizontalement le
contenu ; cela évitera que le flottant et l'environnement `center` n'ajoutent
chacun un espace vertical supplémentaire disgracieux.


## Travaux pratiques

Essayez d'inclure une image que vous avez créée, en remplacement les images
standards que nous avons utilisées dans la démonstration.

Explorez ce que vous pouvez faire en utilisant les options `height`, `width`,
`angle` et `scale`.

Utilisez le package `lipsum` pour constuire un exemple assez long, puis placez
des flottants en utilisant les différents spécificateurs de position. Comment
les différents spécificateurs interagissent-ils entre eux ?
=======
## Making images float

Traditionally in typesetting, particularly with technical documents,
graphics may move to another spot in the document.
This is called a *float*. Images are normally included as floats so they do
not leave large gaps in the page.

```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{lipsum}  % produce dummy text as filler

\begin{document}
\lipsum[1-4] % Just a few filler paragraphs

Test location.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{An example image}
\end{figure}

\lipsum[6-10] % Just a few filler paragraphs
\end{document}
```

Here LaTeX moves the graphic and the caption
away from the `Test location` text to the top of the second page,
because there isn't room for it on the bottom of the first page.
The `ht` influences where LaTeX can place the float; these two
letters mean that it can go where it is in the source (next to
`Test location`) or to the top of a page. You can use up to four position
specifiers

- `h` 'Here' (if possible)
- `t` Top of the page
- `b` Bottom of the page
- `p` A dedicated page only for floats

[Later](lesson-09), we will see how to cross-reference floats so you can point
to them from your text.

You'll probably spot that we've centered the image here using `\centering`
rather than the `center` environment. Inside a float, you should use
`\centering` if you want to horizontally center content; this avoids both
the float and `center` environment adding extra vertical space.

## Exercises

Try including an image you have created, replacing the 'standard' ones we have
used in the demonstration.

Explore what you can do using the `height`, `width`, `angle` and `scale` keys.

Use `lipsum` to make a reasonably long demonstration, then try out placing
floats using the different position specifiers. How do different
specifiers interact?
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
