let mp3 = {
    number_of_tracks:0,
    currentTrack : 0,
    tracks: [],
    addtrack : function (music){
        this.tracks.push(music);
        this.number_of_tracks++;
    },
    random : function (){
        Math.floor(Math.random() * this.number_of_tracks);
    },
    previousTrack : function (){
        --this.currentTrack;
    },
    nextTrack : function (){
        ++this.currentTrack;
    },
    setTrack : function (number){
        this.currentTrack = number;
    },
    printTrack : function (){
        console.log("The current track is " + this.currentTrack);
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
mp3.addtrack(track1);
mp3.addtrack(track2);
mp3.printTrack();
mp3.tracks[mp3.currentTrack].print();
mp3.nextTrack();
mp3.printTrack();
mp3.tracks[mp3.currentTrack].print();
mp3.printTrack();
mp3.random();
mp3.tracks[mp3.currentTrack].print();
