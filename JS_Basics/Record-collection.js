// Record Collection

//You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

// Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

// If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

// Your function must always return the entire collection object.

// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
  if (value === '') {
      delete collection[id][prop];
    } else {
      if (prop !== 'tracks') {
        collection[id][prop] = value;
      } else {
        collection[id].hasOwnProperty('tracks') ? collection[id].tracks.push(value) : collection[id].tracks = [value];
      }
    }
  
    return collection;
  }
  //console.log(updateRecords(1245, "tracks", "I love You"));
  //updateRecords(5439, "artist", "ABBA");
  //console.log(updateRecords(5439, "artist", "ABBA"));
  console.log(updateRecords(2468, "artist", "Quency"))