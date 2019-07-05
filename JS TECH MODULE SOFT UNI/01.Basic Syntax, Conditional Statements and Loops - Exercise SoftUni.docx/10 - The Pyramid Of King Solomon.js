'use strict';

function thePyramid(base, increment) { // todo приемаме базата и енкремента, който ще увеличаваме
    // извеждаме си изискуемия материал на променливи
    let stone = 0;
    let marble = 0;
    let lapis = 0;


//todo въртим while докъто стигнем злаотото, защот то може или да едно или да е две четно/нечетно

    //todo променливата степ ни трябва за изичсляване на височината на пирамидата
    let steps = 0;
    while(base > 2){
        // stoneBase = strana
        steps++;
        let stoneBase = base - 2; // на всяка стъпка намаляват
        stone += stoneBase ** 2 * increment;
        if(steps % 5 === 0){
           lapis += (stoneBase * 4 + 4) * increment;
        }else{
            marble += (stoneBase * 4 + 4) * increment;
        }
        base -= 2; // todo по дадените примери по условие
    }

    let gold = base * base * increment;
    steps++;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);

}

// thePyramid(11,1);
thePyramid(11, 0.75);