export const Playlist: string[] = [
    "Song 1- Artist A",
    "Song 2- Artist B",
    "Song 3- Artist C",
    "Song 4- Artist D",
    "Song 5- Artist E"
];


export function printPlaylist(Playlist: string[]) {
    console.log("Playlist: " );
    for(let i = 0; i < Playlist.length; i++) {
        console.log("♡ " + Playlist[i]);
    }
}

