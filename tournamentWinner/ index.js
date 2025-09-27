competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

result = [0, 0, 1]

winer = {}


for (let row = 0; row < competitions.length; row++) {
    if (result[row] == 0) {
        const wonTeam = 1
        if (!winer[competitions[row][wonTeam]]) {
            winer[competitions[row][wonTeam]] = 3
        } else {
            winer[competitions[row][wonTeam]] = winer[competitions[row][wonTeam]] + 3
        }
    } else {
        const wonTeam = 0
        if (!winer[competitions[row][wonTeam]]) {
            winer[competitions[row][wonTeam]] = 3
        } else {
            winer[competitions[row][wonTeam]] = winer[competitions[row][wonTeam]] + 3
        }
    }
}

let maxKey = Object.entries(winer).reduce((a, b) => (a[1] > b[1] ? a : b))[0];

return maxKey;