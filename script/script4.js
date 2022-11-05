function createPlayer(number) {
    return {
        number_of_tracks: number,
        currentTrack: 0,
        tracks: [],
        addtrack: function (music) {
            this.tracks.push(music);
        },
        random: function () {
           this.currentTrack = Math.floor(Math.random() * this.number_of_tracks);
           console.log(this.currentTrack);
        },
        previousTrack: function () {
            --this.currentTrack;
        },
        nextTrack: function () {
            ++this.currentTrack;
        },
        setTrack: function (number) {
            this.currentTrack = number;
        },
        printTrack: function () {
            console.log("The current track is " + this.currentTrack);
        }
    }
}
let track1 ={
    name:" Stressed out",
    author : "Twenty one pilots",
    length: 2.14,
    print : function (){
        console.log("The track" + this.name + " " + this.author + " " + this.length);
    }
}
let track2 ={
    name:"Consumane",
    author : "Twenty one pilots",
    length: 3.38,
    print : function (){
        console.log("The track" + this.name + " " + this.author + " " + this.length);
    }
}
let mp3 = createPlayer(2);
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

let mp3_1 = createPlayer(2);
mp3_1.addtrack(track1);
mp3_1.addtrack(track2);
mp3_1.printTrack();
mp3_1.tracks[mp3_1.currentTrack].print();
mp3_1.nextTrack();
mp3_1.printTrack();
mp3_1.tracks[mp3_1.currentTrack].print();
mp3_1.random();
mp3_1.printTrack();
mp3_1.tracks[mp3_1.currentTrack].print();
