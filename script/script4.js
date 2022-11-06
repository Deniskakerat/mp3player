function createPlayer(number) {
    this.number_of_tracks = number;
    this.currentTrack = 0;
    this.tracks = [];
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

function track(name,author,length){
    this.name= name;
    this.author= author;
    this.length= length;
    this.print = function () {
        console.log("The track" + this.name + " " + this.author + " " + this.length);
    }
}

track1 = new track("Srtessed out","Twenty one pilots", 2.48);
track2 = new track("Consumane","Twenty one pilots",3.38)
let mp3 = new createPlayer(2);
mp3.addtrack(track1);
mp3.addtrack(track2);
mp3.printTrack();
mp3.tracks[mp3.currentTrack].print();
mp3.nextTrack();
mp3.printTrack();
mp3.tracks[mp3.currentTrack].print();
mp3.random();
mp3.printTrack();
mp3.tracks[mp3.currentTrack].print();
