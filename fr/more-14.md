---
<<<<<<< HEAD
<<<<<<< HEAD
title: "Choisir des polices de caractères et utiliser Unicode : pour aller plus loin"
---

## Lua

Le moteur LuaTeX donne accès aux polices OpenType de la même manière que XeTeX,
et le package `fontspec` fonctionnent aussi bien avec l'un qu'avec l'autre,
pour la plupart des usages.

LuaTeX étend les fonctionnalités TeX d'autres façons, notamment en intégrant le
langage de script Lua. Ce langage permet de programmer dans un style plus
familier aux habitués des langages de programmation courants. Dans LuaTeX,
il offre la possibilité d'accéder aux rouages internes de TeX et de modifier
leur comportement par du code Lua.

Nous ne parlerons pas de la programmation en Lua ici, mais voici un exemple
de calcul de 2π :

=======
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
title: "More on: Selecting fonts and using Unicode engines"
---




## Lua

The LuaTeX engine provides access to OpenType fonts in a similar way
to XeTeX, and most uses of the `fontspec` package work equally well
with either engine.

LuaTeX also extends TeX in other ways, notably by embedding the Lua
scripting language. This may be used for programming in a style more
familiar to people used to ‘mainstream’ programming languages. It also
offers the possibility to access inner workings of the TeX system and
modify the behaviour by substituting new code written in Lua.

Lua programming is not covered by this course but a simple example to
calculate 2π is shown here.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

