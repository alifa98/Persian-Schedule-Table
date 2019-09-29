/*
//     _    _ _   _____                _ _ 
//    / \  | (_) |  ___|_ _ _ __ __ _ (_|_)
//   / _ \ | | | | |_ / _` | '__/ _` || | |
//  / ___ \| | | |  _| (_| | | | (_| || | |
// /_/   \_\_|_| |_|  \__,_|_|  \__,_|/ |_|
//                                  |__/   
//      www.alifaraji.ir
//      Contact@alifaraji.ir 
*/

let data = [
    {
        fromHour: 8,
        fromMinute: 15,
        toHour: 9,
        toMinute: 20,
        title: "درس اول",
        description: "برنامه تست اول",
        days: [0, 1, 0, 1, 1, 1, 1]
    },

    {
        fromHour: 15,
        fromMinute: 16,
        toHour: 17,
        toMinute: 18,
        title: "درس دومم",
        description: "برنامه تست دوم",
        days: [1, 0, 1, 0, 1, 0, 0]
    }
];

for (index in data) {
    let elems = document.getElementsByClassName('contents');
    for (let i = 0; i < 7; i++) {
        let item = data[index];
        if (item.days[i] == 1) {
            let getTopMargin = 0; // create a logic for calc margin top for right positioning
            let htmlTag = "<div class='planItem'>"+item.title+"<div class='ctime'>"+item.fromHour+":"+item.fromMinute+" الی "+item.toHour+":"+item.toMinute+"</div>"+item.description+"</div>";

            elems[i].innerHTML += htmlTag;
        }
    }
}
