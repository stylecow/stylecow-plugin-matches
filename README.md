stylecow plugin matches
=======================

Stylecow plugin to add support for :matches() selector function to all browsers

More info about :matches() (available in CSS Selectors Level 4): http://www.w3.org/TR/2011/WD-selectors4-20110929/#matches

You write:

```css
body :matches(p, a) {
	color: blue;
}
p {
	a :matches(span, strong) {
		color: red;
	}
}
h1 :matches(em, strong):matches(.one, .two) {
	color: yellow;
}
```

And stylecow converts to:

```css
body p, body a {
	color: blue;
}
p {
	a span, a strong {
		color: red;
	}
}
h1 em.one, h1 em.two, h1 strong.one, h1 strong.two {
	color: yellow;
}
```
