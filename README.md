# html-include.js
a javascript/JQuery plugin to include html partials files into a single html file like PHP

#Usage
1 - include the html-include.js file in the main html file.

2 - use include tag and put the path of the file to include in the src attribute.

#### The main.html file :

```html
<!--  location : / -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <link rel="stylesheet" href="css-example.css">
</head>
<body>

    <include  src="partials/header.html" ></include> <!--  includes header-->

    <article class="content">
        <h2>Content</h2>
        What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea. 
        Resilient... highly contagious. 
        Once an idea has taken hold of the brain it's almost impossible to eradicate. 
        An idea that is fully formed - fully understood - that sticks; right in there somewhere.
    </article>

    <include src="partials/footer.html"></include> <!--  includes footer-->

    <script src="html-include.js" type="text/javascript"></script>
</body>
</html>
```

#### The header.html file :

```html
<!--  location : /partials/header.html -->
<header id="header" >
    <nav>
        <ul>
            <li><a href="">item1</a></li>
            <li><a href="">item2</a></li>
            <li><a href="">item3</a></li>
        </ul>
    </nav>
</header>
```

#### The footer.html file :

```html
<!--  location : /partials/footer.html -->
<footer>
    &copy; cpoyright html-include.js
</footer>
```

#### Open main.html file and you'll get the result : 

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <link rel="stylesheet" href="css-example.css">
    </head>
    <body>
        <!-- ******************** marker-begin header.html ******************* -->
        <header id="header">
            <nav>
                <ul>
                    <li><a href="">item1</a></li>
                    <li><a href="">item2</a></li>
                    <li><a href="">item3</a></li>
                </ul>
            </nav>
        </header>
        <!-- ***** marker-end header.html **** -->

        <article class="content">
            <h2>Content</h2>
            What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea. 
            Resilient... highly contagious. 
            Once an idea has taken hold of the brain it's almost impossible to eradicate. 
            An idea that is fully formed - fully understood - that sticks; right in there somewhere.
        </article>

        <!-- ******************** marker-begin footer.html ******************* -->    
        <footer>
            © cpoyright html-include.js
        </footer>
        <!-- ***** marker-end footer.html **** -->

        <script src="html-include.js" type="text/javascript"></script>

    </body>
</html>
```
#Demo
http://netfox01.github.io/html-include.js/

#Options: 
**marke**r : wrap the included file content with the comments `<!-- ***** marker-begin filename.html ******* -->` and `<!-- ***** marker-end filename.html ******* -->`

default : true

values : true, false

example : `<include marker="false" src="partials/footer.html"></include>`

#installing :
There is 2 js files :
- **html-include.jquery.js** requires JQuery dependency for contributions purposes . 
- **html-include.js** no dependency required  for using purpose. 

## Compatibility on local
###  mozilla firefox
Works fine, just open the main file in the browser

###  google chrome
chrome doesn't allow loading files from local with the url begining with (file:///...).

the solution is to use a webserver with a [google chrome extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?utm_source=chrome-app-launcher-info-dialog).

[how to start a webserver in 3mins](https://www.youtube.com/watch?v=AK6swHiPtew)
