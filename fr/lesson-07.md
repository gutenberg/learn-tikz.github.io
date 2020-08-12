---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
title: "Inclure des images et les faire Â« flotter Â»"
---

## Inclure des images

Pour insÃ©rer des images provenant d'autres logiciels que LaTeX, utilisez le
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
est un fichier PDF importÃ©.
\end{document}
```

Vous pouvez inclure des fichiers EPS, PNG, JPG et PDF. Si vous ne donnez pas
l'extension du nom de fichier, `graphicx` essaiera de la deviner. Mais si vous
disposez de plusieurs versions d'une image, vous pouvez la prÃ©ciser, par
exemple, `example-image.png`.

Vous pouvez remarquer que nous avons utilisÃ© ici un nouvel environnement,
`center`, pour centrer l'image horizontalement sur la page.
[Un peu plus tard](lesson-11), nous parlerons plus en dÃ©tail de l'espacement
et du positionnement.


## Modifier l'apparence des images

La commande `\includegraphics` a de nombreuses options pour contrÃ´ler la taille
et la forme des images incluses et pour rogner l'image insÃ©rÃ©e. Certaines de
ces options sont trÃ¨s utilisÃ©es, il est donc important de les connaÃ®tre.

Les choses les plus Ã©videntes Ã  dÃ©finir sont la largeur de l'image (`width`) et
sa hauteur (`height`), qui sont souvent donnÃ©es par rapport Ã  la largeur du
texte (`\textwidth`) ou Ã  sa hauteur (`\textheight`). LaTeX mettra
automatiquement l'image Ã  l'Ã©chelle pour que son rapport hauteur/largeur reste
correct.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
=======
title: "Including graphics and making things 'float'"
=======
title: "Inclure des images et les faire « flotter »"
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
---

## Inclure des images

Pour insérer des images provenant d'autres logiciels que LaTeX, utilisez le paquet `graphicx`, qui fournit la commande `\includegraphics`.

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

Vous pouvez inclure des fichiers EPS, PNG, JPG et PDF. Si vous ne donnez pas l'extension du nom de fichier, `graphicx` essaiera de la deviner. Mais si vous disposez de plusieurs versions d'une image, vous pouvez la préciser, par exemple, `example-image.png`.

Vous pouvez remarquer que nous avons utilisé ici un nouvel environnement, `center`, pour centrer l'image horizontalement sur la page. [Un peu plus tard](lesson-11), nous parlerons plus en détail de l'espacement et du positionnement.


## Modifier l'apparence des images

La commande `\includegraphics` a de nombreuses options pour contrôler la taille et la forme des images incluses et pour rogner l'image insérée. Certaines de ces options sont très utilisées, il est donc important de les connaître.

Les choses les plus évidentes à définir sont la largeur de l'image (`width`) et sa hauteur (`height`), qui sont souvent données par rapport à la largeur du texte (`\textwidth`) ou à sa hauteur (`\textheight`). LaTeX mettra automatiquement l'image à l'échelle pour que son rapport hauteur/largeur reste correct.

```latex
\documentclass{article}
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
<<<<<<< HEAD
<<<<<<< HEAD
Un peu de texte.
=======
Some text
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Un peu de texte.
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
Vous pouvez Ã©galement mettre Ã  l'Ã©chelle les images avec `scale`, ou les faire
pivoter avec `angle`. L'autre chose que vous pouvez faire est de dÃ©couper
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
=======
Vous pouvez également mettre à l'échelle les images avec `scale`, ou les faire pivoter avec `angle`. L'autre chose que vous pouvez faire est de découper (`clip`) ou de rogner (`trim`) une image.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
## Faire Â« flotter Â» les images

Traditionnellement, dans la composition de documents, et en particulier pour les
documents techniques, les images et les tableaux peuvent Ãªtre dÃ©placÃ©s une ou
quelques pages plus loin dans le document, ou regroupÃ©s Ã  plusieurs sur une
seule page, pour mieux utiliser l'espace disponible et ne pas laisser vides de
grands morceaux de pages. Ce type d'image ou de tableau s'appelle un _flottant_
(en anglais, Â« _float_ Â»).

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

Si l'on n'utilisait pas le mÃ©canisme des flottants, l'image apparaÃ®trait juste
sous le texte `Emplacement initial`. Mais quand on permet Ã  l'image de flotter,
elle est positionnÃ©e en haut de la deuxiÃ¨me page, car il n'y a pas de place pour
elle au bas de la premiÃ¨re page. L'option `ht` influence l'endroit oÃ¹ LaTeX peut
placer le flottant ; ces deux lettres signifient qu'il peut aller lÃ  oÃ¹ il se
trouve dans la source (donc Ã  cÃ´tÃ© de `Emplacement initial`) ou en haut d'une
page. Vous pouvez utiliser jusqu'Ã  quatre spÃ©cificateurs de position :

- `h` : ici, si possible (_**h**ere_),
- `t` : en haut d'une page (_**t**op of a page_),
- `b` : en bas d'une page (_**b**ttom of a page_),
- `p` : sur une page rÃ©servÃ©e pour les flottants (_**p**age_).

[Plus tard](lesson-09), nous verrons comment faire rÃ©fÃ©rence Ã  des flottants
dans votre texte, afin que le lecteur puisse les trouver facilement mÃªme s'ils
sont Ã©tÃ© dÃ©placÃ©s de quelques pages par LaTeX.

Vous avez sans doute remarquÃ© qu'ici nous avons centrÃ© l'image en utilisant la
commande `\centering` plutÃ´t que l'environnement `center`. Ã€ l'intÃ©rieur d'un
flottant, vous devez utiliser cette commande pour centrer horizontalement le
contenu ; cela Ã©vitera que le flottant et l'environnement `center` n'ajoutent
chacun un espace vertical supplÃ©mentaire disgracieux.


## Travaux pratiques

Essayez d'inclure une image que vous avez crÃ©Ã©e, en remplacement les images
standards que nous avons utilisÃ©es dans la dÃ©monstration.

Explorez ce que vous pouvez faire en utilisant les options `height`, `width`,
`angle` et `scale`.

Utilisez le package `lipsum` pour constuire un exemple assez long, puis placez
des flottants en utilisant les diffÃ©rents spÃ©cificateurs de position. Comment
les diffÃ©rents spÃ©cificateurs interagissent-ils entre eux ?
=======
## Making images float
=======
## Faire « flotter » les images
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

Traditionnellement, dans la composition de documents, et en particulier pour les documents techniques, les images et les tableaux peuvent être déplacés une ou quelques pages plus loin dans le document, ou regroupés à plusieurs sur une page, pour mieux utiliser l'espace disponible et ne pas laisser vides de grands morceaux de pages. Ce type d'image ou de tableau s'appelle un _flottant_.

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
  \caption{An example image}
\end{figure}

\lipsum[6-10] % Quelques paragraphes de texte
\end{document}
```

Si l'on n'utilisait pas le mécanisme des flottants, l'image appraîtrait juste sous le texte `Emplacement initial`. Mais quand on permet à l'image de flotter, elle est positionnée en haut de la deuxième page, car il n'y a pas de place pour elle au bas de la première page. L'option `ht` influence l'endroit où LaTeX peut placer le flottant ; ces deux lettres signifient qu'il peut aller là où il se trouve dans la source (donc à côté de `Emplacement initial`) ou en haut d'une page. Vous pouvez utiliser jusqu'à quatre spécificateurs de position :

- `h` : ici, si possible (_**h**ere_),
- `t` : en haut d'une page (_**t**op of a page_),
- `b` : en bas d'une page (_**b**ttom of a page_),
- `p` : sur une page réservée pour les flottants (_**p**age_).

[Plus tard](lesson-09), nous verrons comment faire référence à des flottants dans votre texte, afin que le lecteur puisse les trouver facilement même s'ils sont été déplacés de quelques pages.

Vous avez sans doute remarqué qu'ici nous avons centré l'image en utilisant la commande `\centering` plutôt que l'environnement `center`. À l'intérieur d'un flottant, vous devez utiliser cette commande pour centrer horizontalement le contenu ; cela évitera que le flottant et l'environnement `center` n'ajoutent chacun un espace vertical supplémentaire disgracieux.


## Travaux pratiques

Essayez d'inclure une image que vous avez créée, en remplacement les images standards que nous avons utilisées dans la démonstration.

Explorez ce que vous pouvez faire en utilisant les options `height`, `width`, `angle` et `scale`.

<<<<<<< HEAD
Use `lipsum` to make a reasonably long demonstration, then try out placing
floats using the different position specifiers. How do different
specifiers interact?
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
Utilisez le package `lipsum` pour constuire un exemple assez long, puisplacez des flotteurs en utilisant les différents spécificateurs de position. Comment les différents spécificateurs interagissent-ils entre eux ?
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
title: "Including graphics and making things 'float' (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Inclure des images et les faire « flotter »"
---

## Inclure des images

Pour insérer des images provenant d'autres logiciels que LaTeX, utilisez le paquet `graphicx`, qui fournit la commande `\includegraphics`.

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

Vous pouvez inclure des fichiers EPS, PNG, JPG et PDF. Si vous ne donnez pas l'extension du nom de fichier, `graphicx` essaiera de la deviner. Mais si vous disposez de plusieurs versions d'une image, vous pouvez la préciser, par exemple, `example-image.png`.

Vous pouvez remarquer que nous avons utilisé ici un nouvel environnement, `center`, pour centrer l'image horizontalement sur la page. [Un peu plus tard](lesson-11), nous parlerons plus en détail de l'espacement et du positionnement.


## Modifier l'apparence des images

La commande `\includegraphics` a de nombreuses options pour contrôler la taille et la forme des images incluses et pour rogner l'image insérée. Certaines de ces options sont très utilisées, il est donc important de les connaître.

Les choses les plus évidentes à définir sont la largeur de l'image (`width`) et sa hauteur (`height`), qui sont souvent données par rapport à la largeur du texte (`\textwidth`) ou à sa hauteur (`\textheight`). LaTeX mettra automatiquement l'image à l'échelle pour que son rapport hauteur/largeur reste correct.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Un peu de texte.
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

Vous pouvez également mettre à l'échelle les images avec `scale`, ou les faire pivoter avec `angle`. L'autre chose que vous pouvez faire est de découper (`clip`) ou de rogner (`trim`) une image.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Faire « flotter » les images

Traditionnellement, dans la composition de documents, et en particulier pour les documents techniques, les images et les tableaux peuvent être déplacés une ou quelques pages plus loin dans le document, ou regroupés à plusieurs sur une page, pour mieux utiliser l'espace disponible et ne pas laisser vides de grands morceaux de pages. Ce type d'image ou de tableau s'appelle un _flottant_.

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
  \caption{An example image}
\end{figure}

\lipsum[6-10] % Quelques paragraphes de texte
\end{document}
```

Si l'on n'utilisait pas le mécanisme des flottants, l'image appraîtrait juste sous le texte `Emplacement initial`. Mais quand on permet à l'image de flotter, elle est positionnée en haut de la deuxième page, car il n'y a pas de place pour elle au bas de la première page. L'option `ht` influence l'endroit où LaTeX peut placer le flottant ; ces deux lettres signifient qu'il peut aller là où il se trouve dans la source (donc à côté de `Emplacement initial`) ou en haut d'une page. Vous pouvez utiliser jusqu'à quatre spécificateurs de position :

- `h` : ici, si possible (_**h**ere_),
- `t` : en haut d'une page (_**t**op of a page_),
- `b` : en bas d'une page (_**b**ttom of a page_),
- `p` : sur une page réservée pour les flottants (_**p**age_).

[Plus tard](lesson-09), nous verrons comment faire référence à des flottants dans votre texte, afin que le lecteur puisse les trouver facilement même s'ils sont été déplacés de quelques pages.

Vous avez sans doute remarqué qu'ici nous avons centré l'image en utilisant la commande `\centering` plutôt que l'environnement `center`. À l'intérieur d'un flottant, vous devez utiliser cette commande pour centrer horizontalement le contenu ; cela évitera que le flottant et l'environnement `center` n'ajoutent chacun un espace vertical supplémentaire disgracieux.


## Travaux pratiques

Essayez d'inclure une image que vous avez créée, en remplacement les images standards que nous avons utilisées dans la démonstration.

Explorez ce que vous pouvez faire en utilisant les options `height`, `width`, `angle` et `scale`.

Utilisez le package `lipsum` pour constuire un exemple assez long, puisplacez des flotteurs en utilisant les différents spécificateurs de position. Comment les différents spécificateurs interagissent-ils entre eux ?
>>>>>>> 42e0f333... Add lessons 7, 8 and 9.
=======
title: "Including graphics and making things 'float' (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> ce039efd... Revert lesson 7 to English.
