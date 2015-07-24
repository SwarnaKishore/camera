Photos = new Meteor.Collection("photos");
if (Meteor.isClient) {

  Template.takePhoto.events({
    'click .capture': function(){
      MeteorCamera.getPicture(function (error, data) {
        if (! error) {
          onSuccess(data);
        }
      });
    },
    'click #blur': function(){
      //console.log('button click method');
      //  Session.set('filters', 'blur');
      //  console.log(Session.get('filters'));
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
    },
    filters: function(){
      //return Session.get('filters');
     // console.log(Session.get('filters'));
    }


  });
  
}//isClient

if (Meteor.isServer) {
 
}
