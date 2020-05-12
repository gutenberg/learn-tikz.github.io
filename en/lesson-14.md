---
title: Selecting fonts and using Unicode engines
---


XeLaTeX example

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}

\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<<<<<<< HEAD
<<<<<<< HEAD
=======
LuaLaTeX example

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ \pi \approx \directlua{ tex.print(math.pi) } $

\end{document}
```
>>>>>>> a57288b5... remove debug print from lualatex example
=======

When switching between languages it is usually important to also
change things like hyphenation patterns and so on, and the `babel` and
`polyglossia` packages both provide robust features to do this.


>>>>>>> 28b8a843... move directlua example to more-
