**accounts-power-puff-girls** is a Meteorite package to populate your Meteor.users() collection with Power Puff Girls!


------------------------
### Installation

First, install the accounts-power-puff-girls package from the command line, like so:

````
meteor add awatson1978:accounts-power-puff-girls
````



------------------------
### Default User Record Schema  

The user objects are have a fairly simple document schema that looks like the following:
````js
{
  username: 'blossom',
  password: 'blossom',
  email: 'blossom@test.org',
  profile: {
    name: 'Blossom',
    role: 'Superhero',
    avatar: '/packages/awatson1978_accounts-power-puff-girls/powerpuffs/blossom.jpg'
  }
}
````

------------------------
### Default Usernames and Passwords  

Usernames and passwords for all the users should be the same.  All emails will be at the ``test.org`` domain.


------------------------
### Users List

Blossom  
Bubbles  
Buttercup  


------------------------
### Example Usage  

````html
{{#each userList}}
{{profile.name}}<br>
{{/each}}
````

````js
if (Meteor.isClient) {
  Meteor.subscribe("users");

  Template.registerHelper('userList', function(){
    return Meteor.users.find();
  });
}

if (Meteor.isServer) {
  Meteor.publish("users", function(){
    return Meteor.users.find();
  });
}
````



------------------------
### License

Images are copyright.  Don't use in production without permission.  This package is for private, non-commercial use only.
