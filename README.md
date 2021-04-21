# babypeachs-website

## Basic structure 

We will start by giving our website some basic structure in HTML. 
* Header area as an eye catcher `<header>`
* Main content divided in three sections `<main>`
  * About me area `<section class="aboutme">`
  * Skills/Passions area `<section class="skills">`
  * Projects area `<section class="projects">`
* Footer area containing social media links `<footer>`

### Custom font 

Next to the default fonts, many are available from [Google](https://fonts.google.com/). 
They are easy to use in CSS: 

```css
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro");

body {
  margin: 0;
  padding: 0;
  font-family: "Source Code Pro", monospace;
}
```

### Header area 

The header area will contain a basic background image. A good source for these is [Unsplash](https://unsplash.com/). 
Moreover it will contain a welcome line and a typing carousel.

For the styling we'll add a fixed height of `60vh` which means 60 percent of the view port. To center our text vertically and horizontally we'll use `flex` styling with `justify-content: center` (horizontal) and `align-items: center` (vertical). 

```css
header {
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
  background: url(https://raw.githubusercontent.com/gerhofer/babypeachs-website/master/assets/paint.jpg)
    no-repeat fixed;
  background-size: cover;
}
```

### About me section

The about me section consists of one image and a short paragraph. 
TO achieve a circular image we'll use `border: 50%;`. 
By using `flex: 1` on the image and `flex: 3` on the paragraphs we define the relation between the elements. The image will take a quarter of the widht and the paragrph the other three parts. 

### Font awesome 

A great place to start with free icons is [Font Awesome](https://fontawesome.com/). We just need to create an account and we'll receive a line to integrate our own hosted version of the font awesome icon library. We'll use these icons for our `my passions` section.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/babypeachs-website)