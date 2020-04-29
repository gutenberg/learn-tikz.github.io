---
title: Including graphics and making things 'float'
---
<<<<<<< HEAD
=======

To bring in graphics from outside LaTeX, use the `graphicx`
package

<!-- {% raw %} -->
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
<!-- {% endraw %} -->

You can include PNG, JPG, and PDF files.
If you have more than one version of a graphic then you can write,
<<<<<<< HEAD
for instance, `example-image.png`.
The `\includegraphics` command has [many options](more-07.html).
=======
for instance, `example-image.png`. (The `graphicx` package will try to
guess the extention if you do not give one.)

## Altering graphic appearance

The `\includegraphics` command has many options to control
the size and shape of included images, and to trim down material. Some of
these are used a lot, so are worth being aware of.

The most obvious thing to set is the `width` or the `height` of an
image, which are often given relative to the `\textwidth` and
`\textheight`. LaTeX will automatically scale the image so that the aspect
ratio stays correct.

```latex
\documentclass{article}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Some text
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

You can also `scale` images, or rotate them by an `angle`. The other thing you
might want to do is to `clip` and `trim` an image.

```latex
\documentclass{article}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Making images float
>>>>>>> dd9cc1b3... Ensure graphics are centred

Traditionally in typesetting, particularly with technical documents,
graphics may move to another spot in the document.
This is called a *float*.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{mwe}  % gives example images
\usepackage{lipsum}  % produce dummmy text as filler

\begin{document}
\lipsum[1-4]

Test location.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{Test image}\label{fig:example}
\end{figure}

\lipsum[6-10]
\end{document}
```
<!-- {% endraw %} -->

Here LaTeX moves the graphic and the caption
away from the `Test location` text to the top of the second page,
because there isn't room for it on the bottom of the first page.
The `ht` influences where LaTeX can place the float; these two
letters mean that it can go where it is in the source (next to
`Test location`) or to the top of a page.
<<<<<<< HEAD


### More

You can read [more](more-07.html) on graphics and floats.
>>>>>>> 440b64f7... Remove titles covered by YAML
=======
>>>>>>> 38c3cf73... 'More' link now automated
