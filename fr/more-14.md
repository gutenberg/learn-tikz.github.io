---
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
title: "Choisir des polices de caractères et utiliser Unicode: pour aller plus loin"
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
---

=======
title: "Choisir des polices de caractères et utiliser Unicode: pour aller plus loin"
---

>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.
## Lua

Le moteur LuaTeX donne accès aux polices OpenType de la même manière que XeTeX, et le package `fontspec` fonctionnent aussi bien avec l'un qu'avec l'autre, pour la plupart des usages.

LuaTeX étend les fonctionnalités TeX d'autres façons, notamment en intégrant le langage de script Lua. Ce langage permet de programmer dans un style plus familier aux personnes habituées aux langages de programmation courants. Dans LuaTeX, il offre la possibilité d'accéder aux rouages internes de TeX et de modifier leur comportement par du code Lua.

Nous ne parlerons pas de la programmation en Lua ici, mais voici un exemple de calcul de 2π :

<<<<<<< HEAD
<<<<<<< HEAD
Lua programming is not covered by this course but a simple example to
calculate 2π is shown here.
<<<<<<< HEAD
>>>>>>> 7231b5ea... Copy of English files (en/*) to fr/ directory, for translation.
=======
>>>>>>> eb42fac9... Translation of lessons 05-16 (except 10 and 12) to French.
=======
>>>>>>> b410f7ef... Translation of remaining lessons into French + all the "more" lessons except 08, 10 and 15.
=======
>>>>>>> 90a16055... Translation of remaining lessons into French + all the "moree" lessons except 08, 10 and 15.

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

=======
title: "More on: Selecting fonts and using Unicode engines (French)"
---
Translation to be added _after_ English text completed.
>>>>>>> a00a654b... Test of Github pages with original English files.
=======
title: "Choisir des polices de caractères et utiliser Unicode: pour aller plus loin"
---

## Lua

Le moteur LuaTeX donne accès aux polices OpenType de la même manière que XeTeX, et le package `fontspec` fonctionnent aussi bien avec l'un qu'avec l'autre, pour la plupart des usages.

LuaTeX étend les fonctionnalités TeX d'autres façons, notamment en intégrant le langage de script Lua. Ce langage permet de programmer dans un style plus familier aux personnes habituées aux langages de programmation courants. Dans LuaTeX, il offre la possibilité d'accéder aux rouages internes de TeX et de modifier leur comportement par du code Lua.

Nous ne parlerons pas de la programmation en Lua ici, mais voici un exemple de calcul de 2π :


```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

>>>>>>> 91fc72e5... Conversion of all files to UTF-8.
