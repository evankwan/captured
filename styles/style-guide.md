# Captured Style Guide
## External Stylesheets
Do **NOT** use inline styles or embedded styles. Link to external stylesheets in the head of the HTML page.

```
<!-- good -->
<link rel=”stylesheet” href=”styles.css”>

<!-- not good -->
<h1 style=”color:blue;text-align:center;”>This is a heading</h1>
```

## CSS Formatting
### Selectors
HTML element selectors must be in lowercase
```
body {
```

Class names should be in camelCase
```
.myClassName {
```

ID names should not be used for styling, and if used in the stylesheet, should be listed in camelCase
```
#myIdName {
```

Functions, mixins, and variables should be listed in camelCase
```
/* good */
@mixin fontSize($font-size) {

/* not good */
@mixin font-size($font-size) {
```

Grouped CSS selectors should be on their own line
```
/* good */
body, 
div {

/* not good */
body, div {
```

### Spacing
A single space should be included between the last selector and the opening curly bracket of the rule
```
/* good */
.myClassName {

/* not good */
.myClassName{
```

### Property Ordering
If a CSS rule includes more than one property, the properties should be listed in alphabetical order
```
/* good */
h1 {
   background: black;
   font-size: 20px;
   width: 100px;
}

/* not good */
h1 {
   background: black;
   width: 100px;
   font-size: 20px;
}
```

If a CSS rule includes a mixin, the mixin should be used at the top of the rule with an empty line separating it from the other properties
```
/* good */
h1 {
   @include setFont(2rem, bold);

   background-color: black;
   width: 100px;
}

/* not good */
h1 {
   background: black;
   width: 100px;
   @include setFont(2rem, bold);
}
```