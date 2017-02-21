# BP-slider
Free jQuery Linear Slider
#### Getting Started
To install the BP-slider you can download this repository

Next you need to include the CSS file in the <head> section of your HTML and you need to include the script before the </body> tag in your HTML. Note, Including CSS file part is optional.
Include JQuery file before our script file.

```
  <html>
  <head>
      ...
      <link rel="stylesheet" href="/path/to/BP-slider.css">
      ...
  </head>
  <body>
      <script src="/path/to/BP-slider.js"></script>
  </body>
  </html>
```
Next you need to set up your slider HTML where you want it to appear in your page. It should look something like this:
```
    <div class="button-holder">
      <div class="button" id="slideLeft">.../div>
      <div class="button" id="slideRight">...t</div>
    </div>
    <div class="Slide-holder">
      <div class="Slide-list">
        <div class="Slide-list-container">
          ....
        </div>
      </div>
      <div class="Slide-list">
        <div class="Slide-list-container">
          ....
        </div>
      </div>
      <div class="Slide-list">
        <div class="Slide-list-container">
          ....
        </div>
      </div>
    </div>
```
Note: For next or previous button you just need to use id.
Finally you can create your slider by using the following Javascript:
```
  $('body').slider();
```
Setting | Value | Description
------------ | ------------- | -------------
displayCount | integer | Total number of list to be displayed
cycleCount | integer | Total item to be scrolled while clicking next or back button
mesurementUnit | string | Measurement unit like "px, vw, em" for Slide-holder width
widthValue | integer | Value for actual width of Slide-holder
