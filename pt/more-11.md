---
title: "More on: Formatting: fonts and spacing (Portuguese)"
---
<<<<<<< HEAD
Translation to be added _after_ English text completed.
=======

## Suprimindo a indentação de um parágrafo

Se você quer omitir a indentação de um único parágrafo, você pode usar
`\noindent`.  Esse comando deve ser usado _raramente_;  na maioria das vezs você
deve deixar o LaTeX cuidar disso automaticamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Um pequeno parágrafo, que nós alongamos para ter certeza que você
consiga ver o efeito aqui!

Um pequeno parágrafo, que nós alongamos para ter certeza que você
consiga ver o efeito aqui!

\noindent  Um pequeno parágrafo, que nós alongamos para ter certeza que você
consiga ver o efeito aqui!
\end{document}
```
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
