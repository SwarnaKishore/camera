Photos = new Meteor.Collection("photos");

if (Meteor.isClient) {
  Template.takePhoto.events({
    'click .capture': function(){
      MeteorCamera.getPicture(function (error, data) {
        if (! error) {
          onSuccess(data);
        }
      });
    }
  });


  var onSuccess = function (imageData) {
    Photos.insert({
      image: imageData,
      createdAt: new Date(),
    });

  };


    Template.list.helpers({
    photos: function () {
      return Photos.find({}, {sort: {"createdAt": -1}});
    }
  });
  
}//isClient

if (Meteor.isServer) {
 
}
