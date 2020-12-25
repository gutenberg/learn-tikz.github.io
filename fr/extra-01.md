---
lang: "fr"
title: "Exemples avancés, comme sources d'inspiration"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "Exemples LaTeX"
toc-description: "Exemples avancés, comme sources d'inspiration"
---

Ce cours a donné un aperçu des principales fonctionnalités de Ti_k_Z.
Mais Ti_kZ_ dispose d'une vaste panoplie d'extensions et est utilisé
dans d'innombrables domaines. Nous présentons ici quelques exemples
supplémentaires, sans explications supplémentaires.


## Le ParaTriCube


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tikz}
\usetikzlibrary{calc}
\usepackage{verbatim}

\begin{comment}
:Title: The ParaTriCube
:Tags: Paths, Scopes, Clipping, Macros, Decorations
:Author: Jacques Duma
:Site: http://math.et.info.free.fr/TikZ/index.html

Paradoxical triangle made of nine paradoxical cubes.
\end{comment}

\begin{document}

% Paradoxical cube
%: \ParaCube[<TikZ options>]{<line color>}{<frame color>}
\newcommand{\ParaCube}[3][scale=1]
{\begin{scope}[#1,scale=.03,shift={(-79,-87)},even odd rule,draw=#2,line join=round]
\draw[fill=#3]
  (94,15.5)--(90,62.9)--(104,59.2)--(107,20.3)--(101,7)--cycle;
\draw (100.4,14.4)--(96.9,61.1);
\draw[fill=#3]
  (64,159.8)--(68,112)--(55,115.1)--(52,154.9)--(59,161)--cycle;
\draw (57.6,159.8)--(61.2,113.6);
\draw[fill=#3] (10,30)--(64,77)--(154,53)--(101,7)--(10,30)--cycle
  (24,33)--(66,69)--(140,50)--(100,14)--(24,33)--cycle;
\draw[fill=#3] (147,145)--(57,168)--(4,121)--(94,99)--(147,145)--cycle
  (17,124)--(59,161)--(134,142)--(94,106)--(17,124)--cycle;
\draw[fill=#3] (56,100.5)--(58,80)--(16,44)--(11,111)--(88,93)--
  (89,77.2)--(95.8,75.4)--(94,99)--(4,121)--(10,30)--
  (64,77)--(62.3,99)--(56,100.5);
\draw[fill=#3] (103,73.6)--(101,94)--(140,129)--(145,63)--
  (70,82)--(69,97.5)--(62.3,99)--(64,77)--(154,53)--
  (147,145)--(94,99)--(95.8,75.4)--(103,73.6);
\end{scope}}

% Paradoxical triangle made of 9 paradoxical cubes
%: \ParaTriCube[<TikZ options>]{<lc1>}{<fc1>}{<lc2>}{<fc2>}{<lc3>}{<fc3>}
% <lci> <fci> line color and frame color of i-th cube of a triangle side
\newcommand{\ParaTriCube}[7][shift={(0,0)}]{\begin{scope}[#1,shift={(-6.8,-4.8)},scale=.95]
% side one
\ParaCube [shift={(8.9,11.6)}]{#2}{#3}
\ParaCube [shift={(6.1,8.6)}]{#4}{#5}
\ParaCube [shift={(3.3,5.6)}]{#6}{#7}
% side two
\ParaCube [shift={(0.5,2.6)}]{#2}{#3}
\ParaCube [shift={(4,1.9)}]{#4}{#5}
\ParaCube [shift={(7.5,1.2)}]{#6}{#7}
% side three
\ParaCube [shift={(11,0.5)}]{#2}{#3}
\ParaCube [shift={(10.3,4.2)}]{#4}{#5}
\ParaCube [shift={(9.6,7.9)}]{#6}{#7}
% clip outline of last cube
\clip [shift={(7.23,5.29)},scale=0.03](9,30)--(101,7)--(154,53)--(147,146)--(57,169)--(3,122)--(9,30);
% redraw the first two cubes
\ParaCube [shift={(8.9,11.6)}]{#2}{#3}
\ParaCube [shift={(6.1,8.6)}]{#4}{#5}
\end{scope}}

\begin{document}

\pagestyle{empty}

\begin{center}
\begin{tikzpicture}
  \ParaCube [shift={(-5,8)},scale=1.5,ultra thick] {black}{yellow!50}
  \ParaTriCube {red}{white} {green!25!black}{white} {blue}{white}
\end{tikzpicture}
\end{center}
\end{document}
```


## Des sphères percées

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{tikz}
\usepackage{verbatim}

\begin{comment}
:Title: Spheres
:Tags: 3D, Foreach, Transparency, Coordinate systems, Macros, Geomety, Mathematics
:Author: Jacques Duma
:Site: http://math.et.info.free.fr/TikZ/index.html

Three drilled spheres with north-south hole, using coordinate systems to modify axis direction.
\end{comment}

%: Styles for XYZ-Coordinate Systems
%: isometric  South West : X , South East : Y , North : Z
\tikzset{isometricXYZ/.style={x={(-0.866cm,-0.5cm)}, y={(0.866cm,-0.5cm)}, z={(0cm,1cm)}}}

%: isometric South West : Z , South East : X , North : Y
\tikzset{isometricZXY/.style={x={(0.866cm,-0.5cm)}, y={(0cm,1cm)}, z={(-0.866cm,-0.5cm)}}}

%: isometric South West : Y , South East : Z , North : X
\tikzset{isometricYZX/.style={x={(0cm,1cm)}, y={(-0.866cm,-0.5cm)}, z={(0.866cm,-0.5cm)}}}

\begin{document}

\pagestyle{empty}

%: sphere one
\begin{tikzpicture} [scale=5,isometricXYZ,ultra thick,opacity=.45,line join=round]
\def\h{7.5}
\foreach \t in {-135,-120,...,35}
  \foreach \f in {165,150,...,5}
    \draw [blue,fill=yellow]
          ({sin (\f-\h)*cos(\t-\h)},{sin(\f-\h)*sin(\t-\h)},{cos(\f-\h)})
       -- ({sin(\f-\h)*cos(\t+\h)},{sin(\f-\h)*sin(\t+\h)},{cos(\f-\h)})
       -- ({sin(\f+\h)*cos(\t+\h)},{sin(\f+\h)*sin(\t+\h)},{cos(\f+\h)})
       -- ({sin(\f+\h)*cos(\t-\h)},{sin(\f+\h)*sin(\t-\h)},{cos(\f+\h)})
       -- cycle;
\foreach \t in {210,195,...,40}
  \foreach \f in {165,150,...,5}
    \draw [blue,fill=yellow]
          ({sin (\f-\h)*cos(\t-\h)},{sin(\f-\h)*sin(\t-\h)},{cos(\f-\h)})
       -- ({sin(\f-\h)*cos(\t+\h)},{sin(\f-\h)*sin(\t+\h)},{cos(\f-\h)})
       -- ({sin(\f+\h)*cos(\t+\h)},{sin(\f+\h)*sin(\t+\h)},{cos(\f+\h)})
       -- ({sin(\f+\h)*cos(\t-\h)},{sin(\f+\h)*sin(\t-\h)},{cos(\f+\h)})
       -- cycle;
\end{tikzpicture}

%: sphere two
\begin{tikzpicture} [scale=5,isometricYZX,line join=round]
\def\h{5.75}
\foreach \t in {-135,-120,...,35}
  \foreach \f in {165,150,...,5}
    \draw [fill=blue!20]
          ({sin (\f-\h)*cos(\t-\h)},{sin(\f-\h)*sin(\t-\h)},{cos(\f-\h)})
       -- ({sin(\f-\h)*cos(\t+\h)},{sin(\f-\h)*sin(\t+\h)},{cos(\f-\h)})
       -- ({sin(\f+\h)*cos(\t+\h)},{sin(\f+\h)*sin(\t+\h)},{cos(\f+\h)})
       -- ({sin(\f+\h)*cos(\t-\h)},{sin(\f+\h)*sin(\t-\h)},{cos(\f+\h)})
       -- cycle;
\foreach \t in {210,195,...,40}
  \foreach \f in {165,150,...,5}
    \draw [fill=blue!20]
          ({sin (\f-\h)*cos(\t-\h)},{sin(\f-\h)*sin(\t-\h)},{cos(\f-\h)})
       -- ({sin(\f-\h)*cos(\t+\h)},{sin(\f-\h)*sin(\t+\h)},{cos(\f-\h)})
       -- ({sin(\f+\h)*cos(\t+\h)},{sin(\f+\h)*sin(\t+\h)},{cos(\f+\h)})
       -- ({sin(\f+\h)*cos(\t-\h)},{sin(\f+\h)*sin(\t-\h)},{cos(\f+\h)})
       -- cycle;
\end{tikzpicture}

%: sphere three
\begin{center}
\begin{tikzpicture} [scale=5,isometricZXY,ultra thin,even odd rule,line join=round]
\def\h{8.25}
\def\k{5}
\foreach \t in {-133,-115,...,33}
  \foreach \f in {162,144,...,18}
    \draw [fill=red!50]
          ({sin (\f-\h)*cos(\t-\h)},{sin(\f-\h)*sin(\t-\h)},{cos(\f-\h)})
       -- ({sin(\f-\h)*cos(\t+\h)},{sin(\f-\h)*sin(\t+\h)},{cos(\f-\h)})
       -- ({sin(\f+\h)*cos(\t+\h)},{sin(\f+\h)*sin(\t+\h)},{cos(\f+\h)})
       -- ({sin(\f+\h)*cos(\t-\h)},{sin(\f+\h)*sin(\t-\h)},{cos(\f+\h)})
       -- cycle
          ({sin (\f-\k)*cos(\t-\k)},{sin(\f-\k)*sin(\t-\k)},{cos(\f-\k)})
       -- ({sin(\f-\k)*cos(\t+\k)},{sin(\f-\k)*sin(\t+\k)},{cos(\f-\k)})
       -- ({sin(\f+\k)*cos(\t+\k)},{sin(\f+\k)*sin(\t+\k)},{cos(\f+\k)})
       -- ({sin(\f+\k)*cos(\t-\k)},{sin(\f+\k)*sin(\t-\k)},{cos(\f+\k)})
       -- cycle;
\foreach \t in {209,191,...,33}
  \foreach \f in {162,144,...,18}
    \draw [fill=red!50]
          ({sin (\f-\h)*cos(\t-\h)},{sin(\f-\h)*sin(\t-\h)},{cos(\f-\h)})
       -- ({sin(\f-\h)*cos(\t+\h)},{sin(\f-\h)*sin(\t+\h)},{cos(\f-\h)})
       -- ({sin(\f+\h)*cos(\t+\h)},{sin(\f+\h)*sin(\t+\h)},{cos(\f+\h)})
       -- ({sin(\f+\h)*cos(\t-\h)},{sin(\f+\h)*sin(\t-\h)},{cos(\f+\h)})
       -- cycle
          ({sin (\f-\k)*cos(\t-\k)},{sin(\f-\k)*sin(\t-\k)},{cos(\f-\k)})
       -- ({sin(\f-\k)*cos(\t+\k)},{sin(\f-\k)*sin(\t+\k)},{cos(\f-\k)})
       -- ({sin(\f+\k)*cos(\t+\k)},{sin(\f+\k)*sin(\t+\k)},{cos(\f+\k)})
       -- ({sin(\f+\k)*cos(\t-\k)},{sin(\f+\k)*sin(\t-\k)},{cos(\f+\k)})
       -- cycle;
\end{tikzpicture}
\end{center}

\end{document}
```

## Une horloge


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{tikz}
\usetikzlibrary{calc,arrows}

\usepackage{verbatim}

\begin{comment}
:Title: Clock
:Tags: Foreach, Node positioning, Coordinate calculations, Macros, Decorations
:Author: Jacques Duma
:Site: http://math.et.info.free.fr/TikZ/index.html

Display time with the LaTeX command \Clock.
\end{comment}

%: \Clock [shift={(<x>,<y>)}] {<radius>} {<hours>}{<miutes>}{<seconds>}
\newcommand{\Clock}[5][shift={(0,0)}]%
{\begin{scope}[#1,scale={#2/5},transform shape]
% background
\fill[color=yellow!50] (0,0) circle (5);
% minutes ticks
\foreach \a in {1,2,...,60}
   \draw[blue] ($(6*\a:4.5)$) -- ($(6*\a:5)$);
% hours ticks
\foreach \a in {5,10,...,60} \draw[blue,fill,line width={#2*.4pt}]
      ($(6*\a:3.5)$) circle (2pt) -- ($(6*\a:5)$);
% hours digits
\foreach \a in {1,2,...,12}
   \node[text=blue,fill=yellow!50]
        at ($(90-\a*30:4.3)$) {\Large \bf \a};
% hours hand
\draw[->,>=stealth',line width={#2*1.3pt}]
   (0,0) -- ($(450-30*#3-0.5*#4-0.0083*#5:3.25)$);
% minutes hand
\draw[line width={#2*1.1pt},gray]
   (0,0) -- ($(450-6*#4-0.1*#5:4.2)$);
\draw[->,>=stealth',line width={#2*.7pt}]
   (0,0) -- ($(450-6*#4-0.1*#5:4.45)$);
% seconds hand
\draw[>->,>=stealth',line width={#2*.6pt},color=gray!80!blue]
   ($(270-6*#5:1)$) -- ($(450-6*#5:4.4)$);
% clock center
\draw[blue,line width={#2*.2pt},fill=gray] (0,0) circle (.2);
\draw[blue,fill] (0,0) circle (.1);
% clock border
\draw[blue,line width={#2*.6pt}] (0,0) circle (5);
\end{scope}}

\begin{document} 

\pagestyle{empty}

\begin{center}
\begin{tikzpicture}
  \Clock {6} {11}{20}{39}
  \Clock [shift={(-4,-8)}] {1.5} {3}{7}{12}
  \Clock [shift={(3,-9)}] {3} {8}{33}{54}
\end{tikzpicture}
\end{center}
 
\end{document}
```
