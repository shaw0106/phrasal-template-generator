var newName = alert('Let’s make a story together!');
var newColour = prompt('Pick a colour (orange, indigo, etc.)');
var newCreature = prompt('Pick a creature (dragon, mothra, etc.)');
var newAd = prompt('An adjective (beautiful, super, etc.)');
var newVerb = prompt('A past tense verb (ran, burped, etc.)');
var newStory = prompt('Which story would you like? \n a) Snacking \n b) Escaping \n c) Winning');

if (newStory == 'a') {
  document.write('After snacking on ' + newAd + ' treats, the ' + newColour + ' bellied ' + newCreature + ' ' + newVerb + ' for hours.');
}

if (newStory == 'b') {
  document.write('Ameilia ' + newVerb + ' through the ' + newAd + ' ' + newColour + ' nebula escaping the space ' + newCreature);
}

if (newStory == 'c') {
  document.write('Jackson chose his ' + newAd + ', ' + newColour + ', ' + newCreature + ' card and ' + newVerb + ' it to the table knowing he won.');
}

document.write('After snacking on ' + newAd + ' treats, the ' + newColour + ' bellied ' + newCreature + ' ' + newVerb + ' for hours.');
document.write('Ameilia ' + newVerb + ' through the ' + newAd + ' ' + newColour + ' nebula escaping the space ' + newCreature);
document.write('Jackson chose his ' + newAd + ', ' + newColour + ', ' + newCreature + ' card and ' + newVerb + ' it to the table knowing he won.');
