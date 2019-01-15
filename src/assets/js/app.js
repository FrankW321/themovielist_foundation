import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;
//sweetalert
import swal from 'sweetalert2';


import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import 'tablesaw/dist/tablesaw.jquery';
import libs from './lib/dependencies';
window.libs = libs;



$(document).foundation();

$('#contact-form')
.on("invalid.zf.abide", function (ev, elem) {
  swal(
    'Oops...',
    'Something went wrong!',
    'error'
  )
})
.on("formvalid.zf.abide", function(ev,frm) {
  swal(
    'Good job!',
    'You submitted',
    'success'
  );
})

 





 /*  .on("valid.zf.abide", function(ev,elem) {
      swal(
     'Good job!',
     'You submitted the form!',
     'success'
    );
  }) */

/* // form validation passed, form will submit if submit event not returned false
.on("formvalid.zf.abide", function (ev, frm) {
  var form = $(this);
  $.ajax({
    type: form.attr('method'),
    url: form.attr('action'),
    data: form.serialize(),
    success: function(data){
      var result = data;
      var response = JSON.parse(result);
      console.log(response);
      swal(
        'Good job!',
        'You submitted the form!',
        'success'
       );
    }
  })
})

  swal(
    'Good job!',
    'You submitted the form!',
    'success'
  );

// to prevent form from submitting upon successful validation
.on("submit", function (ev) {
  ev.preventDefault();
  console.log("Submit for form id " + ev.target.id + " intercepted");
}); */



libs.AOS.init();

// SVG Injector
// Elements to inject
var mySVGsToInject = document.querySelectorAll('img.inject-me');

// Options
var injectorOptions = {
  evalScripts: 'once',
  pngFallback: 'assets/png'
};

var afterAllInjectionsFinishedCallback = function (totalSVGsInjected) {
  // Callback after all SVGs are injected
  console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
};

var perInjectionCallback = function (svg) {
  // Callback after each SVG is injected
  console.log('SVG injected: ' + svg);
};

// create injector configured by options
var injector = new libs.svgInjector(injectorOptions);

// Trigger the injection
injector.inject(
  mySVGsToInject,
  afterAllInjectionsFinishedCallback,
  perInjectionCallback
);

// slick carousel
$(".content-carousel").slick({
  // normal options...
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  // the magic
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: true
    }
  }, {
    breakpoint: 300,
    settings: "unslick" // destroys slick
  }]
});

// tablesaw table plugin
$(function () {
  $(document)
    .foundation()
    .trigger('enhance.tablesaw');
});

var TablesawConfig = {
  swipeHorizontalThreshold: 15
};

// app dashboard toggle
$('[data-app-dashboard-toggle-shrink]').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
});
