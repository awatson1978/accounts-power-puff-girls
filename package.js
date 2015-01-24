Package.describe({
  summary: "Adds Power Puff Girls to the Meteor.users collection.",

  // update this value before you run 'meteor publish'
  version: "1.0.0",

  // if this value isn't set, meteor will default to the directory name
  name: "awatson1978:accounts-power-puff-girls",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/accounts-power-puff-girls.git"
});

Package.on_use(function (api) {
  api.use('accounts-base@1.1.3');
  api.use('accounts-password@1.0.5');

  api.addFiles('initialize.users.js', 'server');

  api.addFiles('powerpuffs/blossom.jpg', "client", {isAsset: true});
  api.addFiles('powerpuffs/bubbles.jpg', "client", {isAsset: true});
  api.addFiles('powerpuffs/buttercup.jpg', "client", {isAsset: true});

});
