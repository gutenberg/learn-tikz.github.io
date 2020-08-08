---
title: Tables
---
<<<<<<< HEAD
=======


## Basic Tables

Tables in LaTeX are set using the `tabular` environment. This lesson will assume
you load the `array` package, which adds more functionality to LaTeX tables, and
which is not built into the LaTeX kernel only for historic reasons. So put the
following in your preamble and we're good to go:


```latex
\usepackage{array}
```
{: .noedit :}

In order to typeset a `tabular` we have to tell LaTeX how many columns will be
needed and how they should be aligned. This is done in a mandatory argument
&ndash; often referred to as the table preamble &ndash; to the `tabular`
environment, in which you specify the columns by using single letter names. The
available column types are:

<!-- don't line wrap this table, markdown seems to not support this -->

| type       | description |
| ---        |:-- |
| `l`        | left aligned column |
| `c`        | centred column |
| `r`        | right aligned column |
<<<<<<< HEAD
| `p{width}` | a column with fixed width `width`, the text will be automatically line wrapped and fully justified |
| `m{width}` | like `p`, but vertically centred compared to the rest of the row |
| `b{width}` | like `p`, but bottom aligned |
| `w{align}{width}` | prints the contents with a fixed `width`, silently overprinting if things get larger. You can choose the horizontal alignment using `l`, `c`, or `r`. |
| `W{align}{width}` | like `w`, but this will issue an overfull box warning if things get too wide. |
 
=======
| `p{width}` | a column with fixed width `width`; the text will be automatically line wrapped and fully justified |
| `m{width}` | like `p`, but vertically centered compared to the rest of the row |
| `b{width}` | like `p`, but bottom aligned |
| `w{align}{width}` | prints the contents with a fixed `width`, silently overprinting if things get larger. You can choose the horizontal alignment using `l`, `c`, or `r`. |
| `W{align}{width}` | like `w`, but this will issue an overfull box warning if things get too wide. |

In addition, a few other preamble-tokens are available which don't define a
column but might be useful as well:

<!-- don't line wrap this table, markdown seems to not support this -->

| type | description |
| ---  | :-- |
| `*{num}{string}` | repeats `string` for `num` times in the preamble. With this you can define multiple identical columns. |
| `>{decl}` | this will put `decl` before the contents of every cell in the following column (this is useful, e.g., to set a different font for this column) |
| `<{decl}` | this will put `decl` after the contents of each cell in the previous column |
| <span>`|`</span>  | add a vertical rule |
| `@{decl}` | replace the space between two columns with `decl` |
| `!{decl}` | add `decl` in the center of the existing space |

These two tables list all the available column types from LaTeX and the `array`
package. A few additional column types, from different packages, are presented
in the [further details page](en/more-08) for this lesson.

>>>>>>> c5fcfb8d... Corrections from Barbara (4)
The columns `l`, `c`, and `r` will have the natural width of the widest cell.
Each column has to be declared, so if you want three centred columns, you'd use
`ccc` in the table preamble. Spaces are ignored, so `c c c` is the same.

In a table body columns are separated using an ampersand `&` and a new row is
started using `\\`.

<<<<<<< HEAD
We got everything we need for our first little table. In the following code the
`&` and `\\` are aligned, this isn't necessary in LaTeX.
=======
We have everything we need for our first table. In the following code the
`&` and `\\` are aligned. This isn't necessary in LaTeX, but helps reading the
source.
>>>>>>> c5fcfb8d... Corrections from Barbara (4)

<!-- {% raw %} -->
```latex
<<<<<<< HEAD
=======
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
\begin{tabular}{lll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
```
<!-- {% endraw %} -->


<<<<<<< HEAD
## Adding Lines
=======
<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers

<<<<<<< HEAD
A word of advice prior to introducing lines: Lines should be used really
sparsely in tables, especially vertical ones often look unprofessional. In fact,
for professional tables you shouldn't use any of the standard lines, instead you
should skip this section and read about [`booktabs`](#booktabs).

Nevertheless LaTeX got you covered if you need lines. Vertical lines are part of
the column specification and hence should go into the preamble. To add a line
=======
A word of advice prior to introducing lines; lines should be used really
sparsely in tables, and normally vertical ones often look unprofessional. In fact,
for professional tables you shouldn't use any of the standard lines; instead you
should skip this section and read about
[`booktabs`](#tables-in-printing-quality-with-the-booktabs-package).

<<<<<<< HEAD
Nevertheless, LaTeX has got you covered if you need lines. Vertical lines are part of
the column specification and hence should go into the table preamble. To add a line
>>>>>>> f2ed2e63... corrections from Barbara
between two columns just add `|` between their specification. Please note that
vertical lines are only inserted if the cell to their left exists (except for a
vertical line left of the first column). Note how in the following example the
rightmost line will not appear in the last row.
=======
The issue is that the `l` type column typesets its contents in a single row at
its natural width, even if there is a page
border in the way. To overcome this you can use the `p` column. This
typesets its contents as paragraphs with the width you specify as an argument
and vertically aligns them at the top &ndash; which you'll want most of the
time. Compare the above outcome to the following:
>>>>>>> c5fcfb8d... Corrections from Barbara (4)

<!-- {% raw %} -->
```latex
<<<<<<< HEAD
\begin{tabular}{|l|ll|}
  Animal  & Food  & Size   \\
  dog     & meat  & medium \\
  horse   & hay   & large  \\
  frog    & flies & small  \\
  microbe & ???
=======
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
\end{tabular}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
Horizontal lines belong to a `tabular`'s body. In LaTeX there are two different
macros to add them, the first is `\hline` adding a line across the full width of
a `tabular`, the second is `\cline` which can be used to draw lines covering
only a specific range of columns.

`\cline` takes a mandatory argument that specifies the columns affected. It has
to be a range with a hyphen (`-`) as a separator between the first and the last
column number. You can specify multiple `\cline`s in the same row. Both an
`\hline` and a `\cline` have to be the first content of a new row (so directly
following `\\` or another `\hline` or `\cline`).

=======
If your table has many columns of the same type it is cumbersome to put that
many column definitions in the preamble.  You can make things easier
by using `*{num}{string}`, which repeats the `string`  `num` times.
So `*{6}{c}` is equivalent to `cccccc`. To show you that it works here is the first
table of this lesson with the newly learned syntax:
>>>>>>> c5fcfb8d... Corrections from Barbara (4)

<!-- {% raw %} -->
```latex
<<<<<<< HEAD
\begin{tabular}{lll}
  \hline
  \hline
=======
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
  Animal & Food  & Size   \\
  \hline
  dog    & meat  & medium \\
  \cline{1-2}
  horse  & hay   & large  \\
  \cline{1-1}\cline{3-3}
  frog   & flies & small  \\
  \hline
  \hline
\end{tabular}
```
<!-- {% endraw %} -->

<<<<<<< HEAD

## Short Cuts and other Preamble Content

The list of possible types in the table preamble above only showed the column
alignments available, but LaTeX has more things to offer in the preamble. What
is still missing is a way to change the horizontal space between two columns to
something arbitrary. This can be done with

type        | description
---         | :--
`@{decl}` | replace the space between two columns with `decl`
`!{decl}` | add `decl` in the centre of the existing space

In case you're wondering now, by default each column has a horizontal space of
the length `\tabcolsep` padded on both sides, resulting in a total of
`2\tabcolsep` between columns &ndash; one from each column &ndash; and a single
`\tabcolsep` on both outer ends. If we want to put a colon between the first
two columns and change the space between the latter two to `1cm` we could do so
by using
=======
## Adding rules (lines)

A word of advice prior to introducing rules; lines should be used really
sparsely in tables, and normally vertical ones look unprofessional. In fact,
for professional tables you shouldn't use any of the standard lines; instead you
should get familiar with the facilities of the `booktabs` package, which is why
it is covered here first. For the sake of completeness the standard
lines are shown in the [more-info](more-08) page.

`booktabs` provides four different types of lines. Each of those commands has to
be used as the first thing in a row or following another rule.
Three of the rule commands are: `\toprule`, `\midrule`, and
`\bottomrule`. From their names the intended place of use should be clear:
>>>>>>> c5fcfb8d... Corrections from Barbara (4)

<!-- {% raw %} -->
```latex
<<<<<<< HEAD
\begin{tabular}{l !{:} l @{\hspace{1cm}} l}
=======
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
=======
(We'll see `\hspace` [again shortly](lesson-11); you might guess that it adds a
horizontal space.)

>>>>>>> f2ed2e63... corrections from Barbara
In addition to all the aforementioned preamble content, we can use a few other
things as well

<!-- don't line wrap this table, markdown seems to not support this -->
type | description
---  | :--
`*{num}{string}` | repeats `string` for `num` times in the preamble. With this you can define multiple identical columns.
`>{decl}` | this will put `decl` before the contents of every cell in the following column (this is useful, *e.g.*, to set a different font for this column)
`<{decl}` | this will put `decl` after the contents of each cell in the previous column

The following example uses an italic font for the first column. Remember our
example with putting a colon in between the first two columns? How about we also
append that colon to the first column, so that things don't look as clunky.
=======
The fourth rule command provided by `booktabs` is `\cmidrule`. It can be used to
draw a rule that doesn't span the entire width of the table but only a specified
column range. A column range is entered as a number span: `{`_number_`-`_number_`}`.
Even if you only want to draw the rule for a single
column you need to specify that as a range (with both numbers matching).
>>>>>>> c5fcfb8d... Corrections from Barbara (4)

<!-- {% raw %} -->
```latex
<<<<<<< HEAD
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
=======
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
<<<<<<< HEAD
Note that each cell is a local group, so `\itshape` doesn't affect the other
columns and the above will be in principle the same as `{\itshape Animal:}` for
the first cell.
=======
`\itshape` makes all the following text italic, but its effect is 'contained'
by the table cell. We will look at manual font formatting [in a few lessons
time](lesson-11).
>>>>>>> f2ed2e63... corrections from Barbara


## Merging Cells

In LaTeX you can merge cells horizontally pretty easily. This is done by using
`\multicolumn{num}{align}{content}`. The first argument tells LaTeX how
many columns should be merged, the second argument is the cell type, which can
be anything legal in the preamble but _only a single column type_.

<!-- {% raw %} -->
```latex
\begin{tabular}{*{3}{l}}
  Animal  & Food  & Size   \\
  dog     & meat  & medium \\
  horse   & hay   & large  \\
  frog    & flies & small  \\
  microbe & \multicolumn{2}{c}{???} \\
\end{tabular}
```
<!-- {% endraw %} -->

Note that you have to specify vertical rules you want to apply to the right of
the `\multicolumn` in the `align` argument, _e.g._, `\multicolumn{2}{c|}{stuff}`
&ndash; but remember, don't use vertical rules.
<<<<<<< HEAD
>>>>>>> b46352be... ## for headings
=======


## Tables in Printing Quality with the `booktabs` Package

In this section we will briefly introduce the `booktabs` package, which aids
the author in the creation of beautifully typeset tables. "Beautiful" means
in this context that the table is well readable.

Let us start with a simple table:

=======
There is another useful feature of `\cmidrule`. You can shorten it on either end
with an optional argument enclosed in parentheses:
>>>>>>> c5fcfb8d... Corrections from Barbara (4)

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
=======
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers

\begin{document}
\begin{tabular}{@{} lll @{}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}

\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
Using the `\toprule`, `\midrule` and `\bottomrule` commands from the `booktabs` package we can add some
horizontal lines.
=======
You may have guessed that `r` and `l` mean the rule is shortened on its **r**ight
and **l**eft end, respectively.

Sometimes a rule would be too much of a separation for two rows but to get
across the meaning more clearly you want to separate them by some means. In this
case you can use `\addlinespace` to insert a small skip.
>>>>>>> c5fcfb8d... Corrections from Barbara (4)

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
=======
\usepackage[T1]{fontenc}
\usepackage{array}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
\usepackage{booktabs}

\begin{document}

\begin{tabular}{@{} lll @{}} \toprule
  Animal & Food  & Size   \\ \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule
\end{tabular}

\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
By default `\toprule` and `\bottomrule` are slightly thicker than the
`\midrule`. The thickness of the lines can be adjusted via the optional
parameter of these commands:
=======

## Merging cells

In LaTeX you can merge cells horizontally by using the `\multicolumn` command. It
has to be used as the first thing in a cell. `\multicolumn` takes three
arguments:

1. The number of cells which should be merged
2. The alignment of the merged cell
3. The contents of the merged cell

The alignment can contain anything legal in a `tabular`'s preamble, but _only a
single column type_.
>>>>>>> c5fcfb8d... Corrections from Barbara (4)

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
=======
\usepackage[T1]{fontenc}
\usepackage{array}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
\usepackage{booktabs}

\begin{document}

\begin{tabular}{@{} lll @{}} \toprule[2pt]
  Animal & Food  & Size   \\ \midrule[1pt]
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule[2pt]
\end{tabular}

\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
Even more, one can set a left and right indent for the `\midrule`, so
that this line is a little bit shorter as the `\toprule` and
`\bottomrule` of the table.
=======
You can also use `\multicolumn` on a single cell to prevent the
application of whatever you defined in the table preamble for the
current column.  The following uses this method to center the
table's head row:

>>>>>>> c5fcfb8d... Corrections from Barbara (4)

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
=======
\usepackage[T1]{fontenc}
\usepackage{array}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
\usepackage{booktabs}

\begin{document}

\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Animal & Food  & Size   \\ \cmidrule[1pt](rl){1-3}
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule[2pt]
\end{tabular}

\end{document}
```
<!-- {% endraw %} -->

<<<<<<< HEAD
The package also provides commands to increase or decrease the height
of a row. In the following example we increase the height of the
<<<<<<< HEAD
last row by 0.5 em, which is half of the width of the capital 'M'
in the currently used font.
=======
last row by 0.5ex, where `ex` is a unit that depends  on the current font.
>>>>>>> f2ed2e63... corrections from Barbara
=======
Merging cells vertically isn't supported by LaTeX.
Usually it suffices to leave cells empty to give the reader the
correct idea of what was meant without explicitly making cells span rows.
>>>>>>> c5fcfb8d... Corrections from Barbara (4)

<!-- {% raw %} -->
```latex
\documentclass{article}
<<<<<<< HEAD
=======
\usepackage[T1]{fontenc}
\usepackage{array}
>>>>>>> 7ea6c909... add [T1]{fontenc} and adjust error line numbers
\usepackage{booktabs}

\begin{document}

\begin{tabular}{@{} lll @{}} \toprule[2pt]
  Animal & Food  & Size   \\ \cmidrule[1pt](rl){1-3}
  dog    & meat  & medium \\
  horse  & hay   & large  \\ \addlinespace[0.5ex]
  frog   & flies & small  \\ \bottomrule[2pt]
\end{tabular}

\end{document}
```
<!-- {% endraw %} -->
>>>>>>> 259d15c5... Suppress end-of-column space when using booktabs
