---
title: More on: Cross-referencing
---
<<<<<<< HEAD
=======

## Suppressing the indent for one paragraph

 If you want to suppress that for a single case, you can use `\noindent`.
 This should be _very_ rarely used; most of the time, you should let LaTeX
 handle this automatically.

 ```latex
 \documentclass{article}
 \begin{document}
 One small paragraph, which we have filled out a little to make sure you can
 see the effect here!

<<<<<<< HEAD
 One small paragraph, which we have filled out a little to make sure you can
 see the effect here!
=======
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
One small paragraph, which we have filled out a little to make sure you can
see the effect here!
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers

 \noindent  One small paragraph, which we have filled out a little to make sure
 you can see the effect here!
 \end{document}
 ```
>>>>>>> 93f40640... Corrections from Barbara (2)
