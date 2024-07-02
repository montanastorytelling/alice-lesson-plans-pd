# Instructions for Contribution:

1. After cloning the repo, add new sites as markdown files in the `_docs/`
   directory. Docs are in markdown and built into the site automatically.
2. When you're happy with your changes, push to the `gh-pages` branch of the
   repository and view them
[here](https://montanastorytelling.github.io/alice-lessons-pd/).

# Local builds

If you want to preview your changes before pushing to the gh-pages branch, you
can use jekyll to do so. Once you have jekyll installed ([see
instructions](https://jekyllrb.com/docs/installation/)), you can simply run
`jekyll serve` in your terminal and then open the locally served site in your
browser(something like: http://127.0.0.1:4000/alice-lessons-pd/).

## Writing a page

Every page starts with a header so that the site can incorporate it properly.
This is in the format:

```
---
title: CS Background
layout: post
post-image: "any link to an image, must be url, either within our site or somewhere else"
description: Doing nifty stuff in a time crunch
tags:
- lessons
- yadayadayada
---
```

See any of the existing pages for examples.

## Other Fun .md Formatting Tips for Tutorials:

If you have question/answer stuff and want to hide answers, consider using a dropdown:

<details>
<summary>How do I dropdown?</summary>
<br>
This is how you dropdown.

```
<details>
<summary>How do I dropdown?</summary>
<br>
This is how you dropdown.
</details>
```

</details>

If you want to put text in a box, try this html:

___
**Objectives**
> - Learn stuff
> - Have fun
> - Eat bagels
___

# Dependencies

The site is built using the [bootstrap](https://getbootstrap.com/) framework
and [bootswatch](https://bootswatch.com/) themes. Additionally, the
[bulma](https://bulma.io/) css framework is pulled in as a dependency.
Thus, css formatting from these three frameworks are available.

