
if (Meteor.isClient) {



  Template.takePhoto.events({
    'click .capture': function(){
      MeteorCamera.getPicture(function (error, data) {
        Session.set('photo', data);
      });
    },
      'click #blur': function(){
      $( "img" ).removeClass( "grayscale invert brightness" ).addClass( "blur" );
    },

    'click #grayscale': function(){
       $( "img" ).removeClass( "blur invert brightness" ).addClass( "grayscale" );
      
    },

    'click #invert': function(){
      $( "img" ).removeClass( "blur grayscale brightness" ).addClass( "invert" );
  
    },

    'click #brightness': function(){
      $( "img" ).removeClass( "grayscale invert blur" ).addClass( "brightness" );
     
    }
  });


Template.takePhoto.helpers({
  'photo': function(){
    return Session.get('photo');
  }
});

Template.applyFilters.events({
'change input[type=range]': function(){

  Meteor.call('editImage');
  
},
'mousemove input[type=range]': function(){
  Meteor.call('editImage');
},

'reset #reset' : function(){
  setTimeout(function() {
    Meteor.call('editImage');
  }, 0);
}

});


  
}//isClient

if (Meteor.isServer) {

  Meteor.methods({
    'editImage': function(){
        var gs = $("#gs").val(); // grayscale
  var blur = $("#blur").val(); // blur
  var br = $("#br").val(); // brightness
  var ct = $("#ct").val(); // contrast
  var huer = $("#huer").val(); //hue-rotate
  var opacity = $("#opacity").val(); //opacity
  var invert = $("#invert").val(); //invert
  var saturate = $("#saturate").val(); //saturate
  var sepia = $("#sepia").val(); //sepia

  $("#imageContainer img").css(
    "filter", 'grayscale(' + gs+
    '%) blur(' + blur +
    'px) brightness(' + br +
    '%) contrast(' + ct +
    '%) hue-rotate(' + huer +
    'deg) opacity(' + opacity +
    '%) invert(' + invert +
    '%) saturate(' + saturate +
    '%) sepia(' + sepia + '%)'
  );

  $("#imageContainer img").css(
    "-webkit-filter", 'grayscale(' + gs+
    '%) blur(' + blur +
    'px) brightness(' + br +
    '%) contrast(' + ct +
    '%) hue-rotate(' + huer +
    'deg) opacity(' + opacity +
    '%) invert(' + invert +
    '%) saturate(' + saturate +
    '%) sepia(' + sepia + '%)'
  );
    }
});
 
}
