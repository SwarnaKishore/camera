
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

  
}//isClient

if (Meteor.isServer) {
 
}
