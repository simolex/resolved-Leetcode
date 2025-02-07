/**
 * 649. Dota2 Senate
 *
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let n = senate.length;

    let candidates = senate.split("");
    let { R: Radiant, D: Dire } = candidates.reduce(
        (dota, s, i) => {
            dota[s].push(i);
            return dota;
        },
        { R: [], D: [] }
    );

    let pntCandidates = 0;
    let indexRadiant, indexDire;
    while (pntCandidates < Radiant.length && pntCandidates < Dire.length) {
        indexRadiant = Radiant[pntCandidates];
        indexDire = Dire[pntCandidates];
        pntCandidates++;

        if (indexRadiant < indexDire) {
            Radiant.push(indexRadiant + n);
        } else {
            Dire.push(indexDire + n);
        }
    }

    return pntCandidates === Dire.length ? "Radiant" : "Dire";
};

console.log(predictPartyVictory("RD"));
console.log(predictPartyVictory("RDD"));
console.log(predictPartyVictory("R"));
console.log(predictPartyVictory("DDRRR"));
