const OldSongs = [
    {
        id: 0,
        favourite: false,
        SongName: "Pardesi Pardesi",
        artist: "Udit Narayan, Alka Yagnik, Sapna Awasthi",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FPardesi%20Pardesi%20(Raja%20Hindustani)%20320Kbps.mp3?alt=media&token=470ef3da-e5bc-4144-8a81-a9d3a5d88e63",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2Fpardesi.jpg?alt=media&token=fdb196e8-e60b-4aaf-914e-26f84a446905",
        genre: 'oldsongs',
        movieName:"Raja Hindustani",
    },
    {
        id: 1,
        favourite: false,
        SongName: "Pyaar Yeh Jaane Kaise ",
        artist: "Suresh Wadkar, Kavita Krishnamurthy",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FPyaar%20Yeh%20Jaane%20Kaise%20(Rangeela)%20320Kbps.mp3?alt=media&token=7d3c877b-8fbc-423a-8305-0d6d78a623cb",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2Frangila.jpg?alt=media&token=9ad83912-0720-40c1-9196-9f3120c1f53d",
        genre: 'oldsongs',
        movieName:"Rangeela",
    },
    {
        id: 2,
        favourite: false,
        SongName: "Dil Lagane Ki Na Do Saza",
        artist: "Lata Mangeshkar",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FDil%20Lagane%20Ki%20Na%20Do%20Saza%20(Anmol)%20320Kbps.mp3?alt=media&token=61169f7c-15f2-492e-b154-2d2bbd85e253",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2FDil%20Lagane%20Ki%20Na%20Do.jpg?alt=media&token=f8d52860-2a16-403d-bc5d-bbabe4b67557",
        genre: 'oldsongs',
        movieName:"Anmol",
    },
    {
        id: 3,
        favourite: false,
        SongName: " Mera Dil Bhi Kitna Pagal Hai",
        artist: "Kumar Sanu, Alka Yagnik",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FMera%20Dil%20Bhi%20Kitna%20Pagal%20Hai%20-%20Saajan%20-%20320Kbps.mp3?alt=media&token=b7f0e9b6-60ec-4063-9f82-b2f6dd811c73",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2Fmera%20dil%20bhi%20kitna%20pagal%20hai.jpg?alt=media&token=41afd9c7-57fd-4e29-9158-0259b4860167",
        genre: 'oldsongs',
        movieName:"Saajan",
    },
    {
        id: 4,
        favourite: false,
        SongName: " Tune Zindagi Mein Aake Female",
        artist: "Alka Yagnik",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FTune%20Zindagi%20Mein%20Aake%20Female%20-%20Humraaz%20-%20320Kbps.mp3?alt=media&token=1cbd1dfc-ea1a-4dca-b723-11d7e5bab229",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2FTune%20Zindagi%20Mein%20Aake.jpg?alt=media&token=2a655e0d-5428-4198-bb50-16da80b8f0f1",
        genre: 'oldsongs',
        movieName:"Humraaz",
    },
    {
        id: 5,
        favourite: false,
        SongName: " Bahut Pyar Karte Hai Female",
        artist: "Anuradha Paudwal",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FBahut%20Pyar%20Karte%20Hai%20Female%20-%20Saajan%20-%20320Kbps.mp3?alt=media&token=87055621-7728-4bd3-832d-77a8fd974ef0",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2Fbohut%20pyar%20karte%20hai.jpg?alt=media&token=9277fe06-d13e-4015-ae39-a04673cc674b",
        genre: 'oldsongs',
        movieName:"Saajan",
    },
    {
        id: 6,
        favourite: false,
        SongName: " Aanewali Hain Milan Ki",
        artist: "Abhijeet",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FAanewali%20Hain%20Milan%20Ki%20-%20Milan%20-%20320Kbps.mp3?alt=media&token=9cd24a95-6b82-4981-807a-9122034e4ae8",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2Fmilan%20ki%20raat.jpg?alt=media&token=19a034dd-3c15-4fec-bdc8-7244fb7e4a8f",
        genre: 'oldsongs',
        movieName:"Milan",
    },
    {
        id: 7,
        favourite: false,
        SongName: " Dil Ne Yeh Kaha Hain Dil Se",
        artist: "Udit Narayan, Alka Yagnik, Kumar Sanu",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FDil%20Ne%20Yeh%20Kaha%20Hain%20Dil%20Se%20-%20Dhadkan%20-%20320Kbps.mp3?alt=media&token=cf928000-44d3-4e73-8527-16ea5e6de342",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2FDil%20Ne%20Yeh%20Kaha%20Hain%20Dil.jpg?alt=media&token=9c745787-2e52-4294-80f4-9f09c170ac1f",
        genre: 'oldsongs',
        movieName:"Dhadkan",
    },

    {
        id: 8,
        favourite: false,
        SongName: " Kya Kare Kya Na Kare",
        artist: "Udit Narayan",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FKya%20Kare%20Kya%20Na%20Kare%20(Rangeela)%20320Kbps.mp3?alt=media&token=0706f159-cba7-49f0-be71-57983cf84caf",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2Frangila.jpg?alt=media&token=9ad83912-0720-40c1-9196-9f3120c1f53d",
        genre: 'oldsongs',
        movieName:"Rangeela",
    },
    {
        id: 9,
        favourite: false,
        SongName: "  Mera Mann ",
        artist: "Udit Narayan, Alka Yagnik",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FMera%20Mann%20(Mann)%20320Kbps.mp3?alt=media&token=da66c0f6-b5d5-4796-a052-98a79616b665",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2Fmera%20mann.jpg?alt=media&token=e8ca9788-c628-4f04-8202-16a2c5b49f88",
        genre: 'oldsongs',
        movieName:"Mann",
    },
    {
        id: 10,
        favourite: false,
        SongName: "Chaaha Hai Tujhko ",
        artist: "Udit Narayan, Anuradha Paudwal",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FChaaha%20Hai%20Tujhko%20(Mann)%20320Kbps.mp3?alt=media&token=41665252-09e4-44ce-b679-ceaca8e557d4",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2Fchaha%20hai%20tujhko.jpg?alt=media&token=a829b874-c8c7-438b-bd8f-ba87532266dc",
        genre: 'oldsongs',
        movieName:"Mann",
    },
    {
        id: 11,
        favourite: false,
        SongName: "  Ek Dilruba Hai",
        artist: "Udit Narayan",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FEk%20Dilruba%20Hai%20(Bewafaa)%20320Kbps.mp3?alt=media&token=e63acb2b-9c84-4c10-9197-76b34ecf4e79",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2Fek%20dilruba%20hai.jpg?alt=media&token=bbb8c1b1-5cfb-4490-b3ef-526578eb1b51",
        genre: 'oldsongs',
        movieName:"Bewafaa",
    },
    {
        id: 12,
        favourite: false,
        SongName: " Hum Yaar Hai Tumhare",
        artist: "Udit Narayan, Alka Yagnik, Kumar Sanu",
        song: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20songs%2FHum%20Yaar%20Hai%20Tumhare%20(HMBPK)%20320Kbps.mp3?alt=media&token=516fe760-15d0-49eb-be4e-489588f032ea",
        img_src: "https://firebasestorage.googleapis.com/v0/b/react-music-player-5aaa7.appspot.com/o/old%20images%2Fhum%20yar%20hai%20tumhare.jpg?alt=media&token=ab567b73-7340-4aab-9fad-5fb0c4478237",
        genre: 'oldsongs',
        movieName:"HMBPK",
    },
]
export { OldSongs };