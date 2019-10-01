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



// {
//     id: 1,
//     fromHour: 8,
//     fromMinute: 16,
//     toHour: 16,
//     toMinute: 20,
//     title: "درس first",
//     description: "برنامه تست اول",
//     days: [1, 0, 1, 0, 0, 0, 0]
// },
// {
//     id: 2,
//     fromHour: 8,
//     fromMinute: 15,
//     toHour: 9,
//     toMinute: 20,
//     title: "درس اول",
//     description: "برنامه تست اول",
//     days: [0, 1, 0, 1, 1, 1, 1]
// },

// {
//     id: 5,
//     fromHour: 15,
//     fromMinute: 16,
//     toHour: 17,
//     toMinute: 18,
//     title: "درس دومم",
//     description: "برنامه تست دوم",
//     days: [1, 0, 1, 0, 1, 0, 0]
// }

let sortedData = [];
let minHour = 0;
let maxHour = 0;
let unitHeight = 0; // mm


function hasConflict(newSortedData) {
    //return true or false;
}
function submitItem(newItem) {
    let newSortedData = [...sortedData];
    newSortedData.push(newItem);
    newSortedData = newSortedData.sort(function (a, b) {
        if (a.fromHour < b.fromHour) {
            return -1;
        } else if (a.fromHour > b.fromHour) {
            return 1;
        } else {
            if (a.fromMinute < b.fromMinute) {
                return -1;
            }
            else if (a.fromMinute > b.fromMinute) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    if (hasConflict(newSortedData)) {
        return false;
    }
    prepareDrawVars();
    draw();
    return true;
}
//After sorting call this method to set min and max hour and unit height
function prepareDrawVars() {
    minHour = sortedData[0].fromHour;
    maxHour = sortedData[0].toHour;
    for (item in sortedData) {
        if (maxHour < item.toHour) {
            maxHour = item.toHour;
        }
    }
}
function heightCalc(item){
    //use unit height
}
function marginCalc(item){
    // use min and max hour
}
function getHTMLtag(){
    //use heightCalc() and marginCalc() and genetare a div with description and return a String.
}
function draw(){
    // fill an array of tags by getHTMLtag() for every day and after loop push all tags in HTML
}

for (index in data) {
    let elems = document.getElementsByClassName('contents');
    for (let i = 0; i < 7; i++) {
        let item = data[index];
        if (item.days[i] == 1) {
            let getTopMargin = 0; // create a logic for calc margin top for right positioning
            let htmlTag = "<div class='planItem'>" + item.title + "<div class='ctime'>" + item.fromHour + ":" + item.fromMinute + " الی " + item.toHour + ":" + item.toMinute + "</div>" + item.description + "</div>";

            elems[i].innerHTML += htmlTag;
        }
    }
}
