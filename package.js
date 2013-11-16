Package.describe({
  summary: "Adds Power Puff Girls to the Meteor.users collection."
});

Package.on_use(function (api) {
  api.add_files('bootstrap.users.js', 'server');

  api.add_files('powerpuffs/blossom.jpg', "client", {isAsset: true});
  api.add_files('powerpuffs/bubbles.jpg', "client", {isAsset: true});
  api.add_files('powerpuffs/buttercup.jpg', "client", {isAsset: true});

});


