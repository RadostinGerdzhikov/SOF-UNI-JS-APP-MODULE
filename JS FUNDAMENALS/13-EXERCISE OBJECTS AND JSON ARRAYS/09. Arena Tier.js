function arena(input) {
    input.pop();
    let gladiators = new Map();

    for (let inputRow of input) {
        let tokens = inputRow.split(/\s*->\s*/g);
        if(tokens.length === 3){
            let[name, technique, skill] = tokens;
            skill = +skill;

            if(!gladiators.has(name)){
                gladiators.set(name,new Map());
            }
            let techniques = gladiators.get(name);
            if(!techniques.has(technique)){
                techniques.set(technique,0);
            }

            let oldSkill = techniques.get(technique);
            if(skill > oldSkill){
                techniques.set(technique,skill)
            }

        }else{
            let [gladiator1,gladiator2] = inputRow.split(/\s*vs\s*/g);

            battle(gladiator1,gladiator2);

        }
    }
    // let sortedGladiators = [...gladiators].sort(sortedGladiators);
    let sortedGladiators = [...gladiators].sort(compareGladiators);

    // Обикаля се с loop  i  в лупа с едеструктурриа

    for (let [name, technuquesMap] of sortedGladiators) {
        let totalSkill = [...technuquesMap]
            .map(e => e[1])
            .reduce((c,d)=> c + d);
        console.log(`${name}: ${totalSkill} skill`);

        let sortedTechnuques = [...technuquesMap].sort(compareTechniques);
        for (let [techniqueName, techniqueSkill] of sortedTechnuques) {
            console.log(`- ${techniqueName} <!> ${techniqueSkill}`);
        }
    }
    function battle(glad1,glad2) {
        if(gladiators.has(glad1) && gladiators.has(glad2)){
            let glad1Techniques = gladiators.get(glad1);
            let glad2Techniques = gladiators.get(glad2);
            let secondKeys = [...glad2Techniques.keys()];
            let common = [...glad1Techniques.keys()].filter(g=>secondKeys.includes(g));


            let firstGladiatorTotalSkill = 0;
            let secondGladiatorTotalSkill = 0;

            for (let t of common) {
                // тук сме във вложения мап / за всяка техника взима скилла
                firstGladiatorTotalSkill += glad1Techniques.get(t);
                secondGladiatorTotalSkill += glad2Techniques.get(t);

            }

            if(firstGladiatorTotalSkill > secondGladiatorTotalSkill){
                gladiators.delete(glad2);
            }
            if(firstGladiatorTotalSkill < secondGladiatorTotalSkill){
                gladiators.delete(glad1);
            }
        }
    }
    // ordered by total skill in desecending order, then ordered by name in ascending order
    function compareGladiators(a,b) {
        let nameA = a[0];
        let nameB = b[0];

        let aTechniques = a[1];
        let bTechniques = b[1];

        let aTech = [...aTechniques]
            .map(e => e[1])
            .reduce((c,d)=> c + d, 0) ;

        let btch = [...bTechniques]
            .map(e => e[1])
            .reduce((c,d) => c + d,0);

        let firstCriteria = btch - aTech;
        if(firstCriteria === 0){
            return nameA.localeCompare(nameB);
        }
        return firstCriteria;

    }
    // print their technique and skill, ordered desecending, then ordered by technique name in ascending order

    function compareTechniques(a,b) {
        let firstCriteria = b[1] - a[1];

        if(firstCriteria === 0){
            let techniqueNameA = a[0];
            let techniqueNameB  = b[0];

            return techniqueNameA.localeCompare(techniqueNameB);
        }

        return firstCriteria;
    }
}
