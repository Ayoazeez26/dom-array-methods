const displayList = document.querySelector('.namelist');
let dollarSign, comma;

displayList.innerHTML = `<p><strong>John French</strong> <span class="wealth">$450,000</span></p>
<p><strong>Billy Gilmour</strong> <span class="wealth">$620,000</span></p>
<p><strong>Frank Castle</strong> <span class="wealth">$970,000</span></p>
<p><strong>Mike Myers</strong> <span class="wealth">$230,000</span></p>`;

let wealthList = document.querySelectorAll('.wealth');

let wealthArray = Array.from(wealthList);

let wealthValue = wealthArray.map( e => e.textContent);

let wealthIndex = wealthValue.map(el => el.split('') );

wealthIndex.forEach(el => {
    // dollarSign = el.shift();
    // comma = el.splice(3,1);
    // console.log(el);

    el.join();
    console.log(el);
});

// for (let i = 0; i < wealthIndex.length; i++) {
//     wealthIndex[i].join('');
//     console.log(wealthIndex);
// }

// console.log(dollarSign, comma);