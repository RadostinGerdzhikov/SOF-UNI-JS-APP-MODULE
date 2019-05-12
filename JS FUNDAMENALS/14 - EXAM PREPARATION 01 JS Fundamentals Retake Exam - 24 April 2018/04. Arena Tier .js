'use strict';
function printGladiators(input) {
    input.pop();
    let gladiators = new Map();

    for (let gladiator of input) {

        gladiator = gladiator.split(/\s*->\s*/g);

        if(gladiator.length === 3){
            let [gladiatorName, gladiatorTechnique, skill] = gladiator;

            skill = +skill;

            if(!gladiators.has(gladiatorName)){
                gladiators.set(gladiatorName,new Map());
            }

            let innerGladiatorsMap = gladiators.get(gladiatorName);

            if(!innerGladiatorsMap.has(gladiatorTechnique)){
                innerGladiatorsMap.set(gladiatorTechnique, 0);
            }

            let oldSkill = innerGladiatorsMap.get(gladiatorTechnique);
            if(skill > oldSkill){
                innerGladiatorsMap.set(gladiatorTechnique,skill);
            }

        }else{
            let[gladiator1, gladiator2] = gladiator[0].split(/\s*vs\s*/g);
            battle(gladiator1,gladiator2);
        }
    }

    // console.log(gladiators);
    // console.log([...gladiators]);

    let sortedGladiators = [...gladiators].sort(compareGladiators);
    //console.log(sortedGladiators);

    for (let [name, techniquesMap] of sortedGladiators){
        let totalSkill = [...techniquesMap]
            .map(e=>e[1])
            .reduce((c,d) => c+d);

        console.log(`${name}: ${totalSkill} skill`);


        let sortedTechniques = [...techniquesMap].sort(sortTechniques);

        for (let [techniqueName, techniqueSkill] of sortedTechniques) {
            console.log(`- ${techniqueName} <!> ${techniqueSkill}`);
        }
    }


    // 1 ordered by total skill in desecending order,
    // 2 ordered by name in ascending order.
    // 3 Foreach gladiator print their technique and skill,
    // ordered desecending,
    // 4 then ordered by technique name in ascending order



    function sortTechniques(a,b) {
        let nameTechniqueA = a[0];
        let nameTechniqueB = b[0];

        let techniqueSkillA = a[1];
        let techniqueSkillB = b[1];

        let firstCriteria = techniqueSkillB - techniqueSkillA;
        if(firstCriteria === 0){
            return nameTechniqueA.localeCompare(nameTechniqueB);
        }

        return firstCriteria;

    }





    function compareGladiators(a,b){
        let nameA = a[0];
        let nameB = b[0];

        // console.log(nameA);
        // console.log(nameB);

        let aTechniques = a[1];
        let bTechniques = b[1];

        let aTech = [...aTechniques]
            .map(e => e[1])
            .reduce((c,d) => c + d,0);

        let bTech = [...bTechniques]
            .map( e=> e[1])
            .reduce((c,d) => c + d,0);

        let firstCriteria = bTech - aTech;

        if(firstCriteria === 0){
            return nameA - nameB;
        }

        return firstCriteria;

    }

    function battle(gladiator1,gladiator2){
        if(gladiators.has(gladiator1) && gladiators.has(gladiator2)){
            let gladiator1Technique = gladiators.get(gladiator1);
            let gladiator2Techniques = gladiators.get(gladiator2);

            let keys2 = [...gladiator2Techniques.keys()];
            let common = [...gladiator1Technique.keys()].filter(t => keys2.includes(t));

            let firstGSkill = 0;
            let secondGSkill = 0;

            for (let t of common) {
                firstGSkill += gladiator1Technique.get(t);
                secondGSkill += gladiator2Techniques.get(t);
            }

            if(firstGSkill > secondGSkill){
                gladiators.delete(gladiator2);
            }

            if(firstGSkill < secondGSkill){
                gladiators.delete(gladiator1);
            }
        }
    }
}