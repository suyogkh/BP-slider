# BP-slider
Free jQuery Linear Slider
##### Demo
This is a codepen [demo for BP-slide !](http://codepen.io/suyogkh/pen/evNgyB)

#### Getting Started
To install the BP-slider you can download this repository

Next you need to include the CSS file in the <head> section of your HTML and you need to include the script before the </body> tag in your HTML.

Note, Including CSS file part is optional.

Include JQuery file before our script file.

```
  <html>
  <head>
      ...
      <link rel="stylesheet" href="/path/to/BP-slider.min.css">
      ...
  </head>
  <body>
      <script src="/path/to/BP-slider.min.js"></script>
  </body>
  </html>
```
Next you need to set up your slider HTML where you want it to appear in your page. It should look something like this:
```
  <div class="Slide slider1">
    <div class="button-holder">
      <div class="button slideLeft">...</div>
      <div class="button slideRight">...</div>
    </div>
    <div class="Slide-holder">
      <div class="Slide-list">
        <div class="Slide-list-container">
          ...
        </div>
      </div>
      <div class="Slide-list">
        <div class="Slide-list-container">
          ...
        </div>
      </div>
    </div>
  </div>
  <div class="Slide slider2">
    <div class="button-holder">
      <div class="button slideLeft">...</div>
      <div class="button slideRight">...</div>
    </div>
    <div class="Slide-holder">
      <div class="Slide-list">
        <div class="Slide-list-container">
          ...
        </div>
      </div>
      <div class="Slide-list">
        <div class="Slide-list-container">
          ...
        </div>
      </div>
    </div>
  </div>
```
Note: For next or previous button you just need to use slideLeft, slideRight class to change slide.
Finally you can create your slider by using the following Javascript:
```
  $('.slider1').slider({
      displayCount : 2,
      cycleCount : 1,
      mesurementUnit : "vw",
      widthValue : 80
    })
    $('.slider2').slider()
```
Default Value
```
  $('.slider1').slider({
    displayCount : 1,
    cycleCount : 1,
    mesurementUnit : "vw",
    widthValue : 80,
    autoSlide: false,
    slideDuration: 2000
  })
```
Setting | Value | Description
------------ | ------------- | -------------
displayCount | integer | Total number of list to be displayed
cycleCount | integer | Total item to be scrolled while clicking next or back button
mesurementUnit | string | Measurement unit like "px, vw, em" for Slide-holder width
widthValue | integer | Value for actual width of Slide-holder
autoSlide | Boolean | Value to start or remove auto slide
slideDuration | integer | Value for auto slide duration in millisecond
