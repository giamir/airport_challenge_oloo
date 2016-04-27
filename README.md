# Airport Challenge OLOO [![Build Status](https://travis-ci.org/giamir/airport_challenge_oloo.svg?branch=master)](https://travis-ci.org/giamir/airport_challenge_oloo) [![Coverage Status](https://coveralls.io/repos/github/giamir/airport_challenge_oloo/badge.svg?branch=master)](https://coveralls.io/github/giamir/airport_challenge_oloo?branch=master)

This repo provides a practical example of how to use the prototype chain mechanism in JS without faking classes. It embraces delegation oriented design using Kyle Simpson __OLOO style__ (objects linked to other objects).

It's an integration to my presentation:<br>
_JS: Leave the classes to those other languages_

[browse the slides](https://speakerdeck.com/giamir/js-leave-the-classes-to-those-other-languages)<br>
[watch the video](http://giamir.com) (15 mins)

It's also implementing _private members_ in JS to preserve encapsulation and do not expose the internal state of the objects. Thanks to Philip Walton for [this](http://philipwalton.com/articles/implementing-private-and-protected-members-in-javascript/) brilliant article which inspired me.

## Installation instructions

Clone from github and move into directory

```
$ git@github.com:giamir/airport_challenge_oloo.git
$ cd airport_challenge_oloo
```
You will need [node.js](https://nodejs.org/en/node.js) installed on your machine to try the application.<br>
Install all the dependencies for the application running

```
$ npm install
```

You can now try the app from terminal
```
$ node
```

### Usage example
```
> var Plane = require("./src/plane");
> var Airport = require("./src/airport");

> var boeing747 = Object.create(Plane);
> boeing747.init();

> var boeing787 = Object.create(Plane);
> boeing787.init();

> var airbusA320 = Object.create(Plane);
> airbusA320.init();

> var london = Object.create(Airport);
> london.init();
> london.land(boeing747)
> london.land(boeing787)

> london.planes();
[ { id: 1 }, { id: 0 } ]

> var pisa = Object.create(Airport);
> pisa.init({ capacity: 2 });
> pisa.land(airbusA320);

> pisa.planes();
[ { id: 2 } ]

> london.takeOff(boeing747);
Error: Unable to land or take off due to stormy weather

> london.takeOff(boeing747);

> london.planes();
[ { id: 1 } ]

> london.takeOff(boeing747);
Error: Unable to instruct plane to take off cause is not in the airport

> pisa.land(boeing787);
Error: Unable to land cause is not flying

> pisa.land(boeing747);

> pisa.planes();
[ { id: 0 }, { id: 2 } ]

> london.takeOff(boeing787);

> london.planes();
[]

> pisa.land(boeing787);
Error: Unable to land cause airport is full

```

## User Stories
> _From Makers Academy Airport Challenge Kata_

```
As an air traffic controller
So planes can land safely at my airport
I would like to instruct a plane to land

As an air traffic controller
So planes can take off safely from my airport
I would like to instruct a plane to take off

As an air traffic controller
So that I can avoid collisions
I want to prevent airplanes landing when my airport if full

As an air traffic controller
So that I can avoid accidents
I want to prevent airplanes landing or taking off when the weather is stormy

As an air traffic controller
So that I can ensure safe take off procedures
I want planes only to take off from the airport they are at

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
So the system is consistent and correctly reports plane status and location
I want to ensure a flying plane cannot take off and cannot be in an airport

As an air traffic controller
So the system is consistent and correctly reports plane status and location
I want to ensure a plane that is not flying cannot land and must be in an airport

As an air traffic controller
So the system is consistent and correctly reports plane status and location
I want to ensure a plane that has taken off from an airport is no longer in that airport
```

## OLOO Mental Maps





## Running tests

#### Testing Framework
`jasmine-node`


To run the full test suite

```
$ npm test
```

## Contributions

Feel free to get involved!

Lots of improvements can be done. If you have any suggestion open a pull request and I would be happy to merge it and add you to the contributors list.

### How to contribute

`Fork this repo`

```
$ git clone git@github.com:yourUserName/airport_challenge_oloo.git             # Clone your fork
$ cd airport_challenge_oloo                                                    # Change directory
$ git remote add upstream git@github.com:giamir/airport_challenge_oloo.git     # Assign original repository to a remote named 'upstream'
$ git fetch upstream                                                           # Pull in changes not present in your local repository
$ git checkout -b my-new-feature                                               # Create your feature branch
$ git commit -am 'Add some feature'                                            # Commit your changes
$ git push origin my-new-feature                                               # Push to the branch
```

Once you've pushed a feature branch to your forked repo, you're ready to open a pull request.

## Contributors

[Giamir Buoncristiani](https://github.com/giamir)
