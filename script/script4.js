function createPlayer(number) {
    this.number_of_tracks = number;
    this.currentTrack = 0;
    this.tracks = [];
    this.__sound_loudness = 12;
    this.addtrack = function (music) {
        this.tracks.push(music);
    };
    this.random = function () {
        this.currentTrack = Math.floor(Math.random() * this.number_of_tracks);
        console.log(this.currentTrack);
    };
    this.previousTrack = function () {
        --this.currentTrack;
    };
    this.nextTrack = function () {
        ++this.currentTrack;
    };
    this.setTrack = function (number) {
        this.currentTrack = number;
    };
    this.printTrack = function () {
        console.log("The current track is " + this.currentTrack);
    };
}

createPlayer.prototype.getLoudness = function () { // Публічний метод
    return this.__sound_loudness;
};
createPlayer.prototype.setLoudness = function (number) { // Публічний метод
    if (this.__sound_loudness_valid(number)) {
        this.__sound_loudness = number;
    }
};
createPlayer.prototype.__sound_loudness_valid = function (number) {
    if (number >= 0) {
        return true;
    } else {
        return false;
    }
};

function track(name, author, length) {
    this.name = name;
    this.author = author;
    this.length = length;
    this.print = function () {
        console.log("The track" + this.name + " " + this.author + " " + this.length);
    }
}

var slowed_track = {
    type: "Slowed + reverb",
    is_slowed: true
}
var beat_magico = {
    length: 3.02,
    author: "Duck"
}
let mp3 = new createPlayer(1);
mp3.addtrack(beat_magico);
console.log(mp3.tracks[mp3.currentTrack])
beat_magico.__proto__ = slowed_track;
console.log(mp3.tracks[mp3.currentTrack].is_slowed);

var track2 = Object.create(slowed_track);
track2.name = "PLSMRK";
track2.author = "Pls";
track2.length = 6.39;

mp3.addtrack(track2);
console.log(mp3.tracks[1]);
console.log(mp3.tracks[mp3.currentTrack].is_slowed);

function track() {
    name : "Acid rain";
    author : "Lorn";
    length : 2.53;
};

track.prototype = slowed_track;
var track3 = new track;
mp3.addtrack(track3);
console.log(mp3.tracks[2]);
console.log(track3.is_slowed);
/*
track1 = new track("Srtessed out","Twenty one pilots", 2.48);
track2 = new track("Consumane","Twenty one pilots",3.38)
let mp3 = new createPlayer(2);
console.log("The loudness" + mp3.getLoudness());
mp3.addtrack(track1);
mp3.addtrack(track2);
mp3.printTrack();
mp3.tracks[mp3.currentTrack].print();
mp3.setLoudness(14);
console.log("The loudness" + mp3.getLoudness());
mp3.nextTrack();
mp3.printTrack();
mp3.tracks[mp3.currentTrack].print();
mp3.random();
mp3.printTrack();
mp3.tracks[mp3.currentTrack].print();
*/
