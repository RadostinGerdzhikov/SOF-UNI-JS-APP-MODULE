function pyramid(base, increment){
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let heightPyramid = 0;
    let steps = 0;

    while(base  2){
        steps++;
        let baseStone = base - 2;
        stone += baseStone  2  increment;
        if(steps % 5 === 0){
            lapis += (baseStone  4 + 4)  increment;
        }else{
            marble += (baseStone  4 + 4)  increment;
        }

        base -= 2;
    }

     steps++;
    gold = base  2  increment;
    heightPyramid = steps  increment;

    console.log(`Stone required ${Math.ceil(stone)}`);
    console.log(`Marble required ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required ${Math.ceil(lapis)}`);
    console.log(`Gold required ${Math.ceil(gold)}`);
    console.log(`Final pyramid height ${Math.floor(heightPyramid)}`);
