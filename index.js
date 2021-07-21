const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

let [moo, neigh, baa, oink, cluck] = ['cow', 'horse', 'sheep', 'pig', 'chicken'];

let [bessie, dolly, babe, little] = ['cow', 'sheep', 'pig', 'chicken'];

let [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig'];

let [red, orange, yellow, green, blue, indigo, violet] = colors;

const newColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
let [r, o, y, g, b, v] = newColors;

let [indg] = ['indigo'];

let {muppetName, color, song, job, partner} = muppet;

let {album: {theMuppetMovie: {song2, song4}}, nestedJob, nestedPartner} = nestedMuppet;
// let {album: {theMuppetMovie: {song4}}} = nestedMuppet;
// let {nestedJob, nestedPartner} = nestedMuppet;
// let {nestedPartner} = nestedMuppet;
