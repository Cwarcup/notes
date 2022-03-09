## How to Incorporate jQuery

Most popular is to use googles CDN: [jQuery Download](https://jquery.com/download/) [google jQuery CDN](https://developers.google.com/speed/libraries#jquery)

Copy the latest scipt tag: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>`

Paste the script tag **above** your main JavaScript file. Remember, browser reads the HTML doc from top to bottom.
![jQuery](/images/jquery-script.png)

This will now allow you to actually use jQuery in your main JavaSCript file.

You can place the CDN script in the `<head>` element, but need to add an additional line in your JavaScript to ensure the CDN is loaded **before** the rest of the JavaScript.

Add

```
$(document).ready(function(){
    //...all your jQuery Code
    $('h1').css('color', 'red');
})
```

see [Simon-Game](https://github.com/Cwarcup/Web_Dev_Udemy/tree/main/Simon-Game) in WEB-DEV-UDEMY for examples of jQuery
