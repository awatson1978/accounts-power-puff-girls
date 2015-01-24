// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    var userId = null;

    // crate our administrator
    userId = Accounts.createUser({
      username: 'blossom',
      password: 'blossom',
      email: 'blossom@test.org',
      profile: {
        name: 'Blossom',
        role: 'Superhero',
        avatar: '/packages/awatson1978_accounts-power-puff-girls/powerpuffs/blossom.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'bubbles',
      password: 'bubbles',
      email: 'bubbles@test.org',
      profile: {
        name: 'Bubbles',
        role: 'Superhero',
        avatar: '/packages/awatson1978_accounts-power-puff-girls/powerpuffs/bubbles.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'buttercup',
      password: 'buttercup',
      email: 'buttercup@test.org',
      profile: {
        name: 'Buttercup',
        role: 'Superhero',
        avatar: '/packages/awatson1978_accounts-power-puff-girls/powerpuffs/buttercup.jpg'
      }
    });
    console.info('Account created: ' + userId);


  }
});
