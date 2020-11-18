---
title: learnlatex.org
---

## Welcome to learnlatex.org!

This site aims to help you take the first steps with LaTeX, a document
preparation system designed to produce high-quality typeset output. LaTeX can
be scary for new users as it is _not_ a word processor, and because it is not a
single program. Our aim here is to help you get started without trying to show
you _everything_ in one go.

To do that, we have taken around 15 of the most important things you'll need to
know, and made them into short 'lessons'. Each lesson is very focussed, so they
should not take too long to cover. In each lesson, we've given examples of what
you'd write, and they are available so you can try them out online.

We know that people will want to know more than we can cover in 15 short
lessons. To help guide you when you need more information, we have therefore
including a 'going further' page for each lesson. This extra information is
there to support you when you need the detail, but should not get in your
way if you do not.

## How the examples work

To support your learning, the site includes lots of examples. In
[Lesson 2](en/lesson-02) we will talk about how you use LaTeX both online and with
a local installation on your own PC. To get you started, we have set up
our examples so you can edit and run them _in the page_ they are on. We
have also linked them to [Overleaf](https://www.overleaf.com), one of the
most popular online LaTeX editing sites. But don't worry, you can also
use the examples on your own machine. You can read more about how to use the
examples [in the site help](en/help).

## The lessons

<ul>
{%- for page in site.pages | sort: 'path' -%}
{%- if page.path  contains "en/lesson" %}
<li><a href="{{page.path | replace: '.md',''}}">
<b>
{% if page.path contains "en/lesson-0" %}
&#160;{{page.path | replace: '.md','' | replace: 'en/lesson-0',''}}
{% else %}
{{page.path | replace: '.md','' | replace: 'en/lesson-',''}}
{% endif %}
</b>
&mdash; {{page.title}}</a></li>
{%- endif -%}
{%- endfor -%}
</ul>

<<<<<<< HEAD
## Getting help and going further



=======
## Going further

The focussed lessons here are not meant to cover everything you'll ever need to
know about LaTeX; we want to give you enough to get started and to _understand_
examples and advice elsewhere. We cover getting more information in [the last
lesson](lesson-15), but it's worth saying now that getting access to a book
about LaTeX is still the  best way to learn the detail. We've given some
recommendations in the last lesson.
>>>>>>> 40839694... Extend the index
