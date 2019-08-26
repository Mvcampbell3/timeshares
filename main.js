const weeks = 52;

function Timeshare(week, unit, price, sold) {
  this.week = week;
  this.unit = unit;
  this.price = price;
  this.sold = sold;
}

const timeshare_1 = new Timeshare(5, 513, 15900, true);
const timeshare_2 = new Timeshare(8, 212, 14900, true);

const timeshare_3 = new Timeshare(13, 531, 13900, false);
const timeshare_4 = new Timeshare(22, 132, 8500, false);
const timeshare_5 = new Timeshare(24, 111, 8500, false);

const timeshare_6 = new Timeshare(25, 113, 8500, false);
const timeshare_7 = new Timeshare(25, 133, 9000, false);
const timeshare_8 = new Timeshare(25, 431, 8500, false);

const timeshare_9 = new Timeshare(28, 214, 8500, false);
const timeshare_10 = new Timeshare(28, 432, 8500, false);
const timeshare_11 = new Timeshare(28, 433, 8500, false);

const timeshare_12 = new Timeshare(29, 423, 8500, false);
const timeshare_13 = new Timeshare(30, 521, 9000, false);
const timeshare_14 = new Timeshare(31, 423, 8500, false);

const timeshare_15 = new Timeshare(32, 132, 8500, false);
const timeshare_16 = new Timeshare(33, 111, 8500, false);

const timeshare_17 = new Timeshare(34, 114, 8500, false);
const timeshare_18 = new Timeshare(34, 214, 8500, false);
const timeshare_19 = new Timeshare(34, 224, 8500, false);
const timeshare_20 = new Timeshare(34, 234, 8500, false);

const timeshare_21 = new Timeshare(35, 132, 8500, false);
const timeshare_22 = new Timeshare(35, 423, 8500, true);

const timeshare_23 = new Timeshare(36, 121, 8500, false);
const timeshare_24 = new Timeshare(36, 132, 8500, false);
const timeshare_25 = new Timeshare(36, 234, 8500, false);
const timeshare_26 = new Timeshare(36, 412, 7000, false);
// Option for HUGE ONE BEDROOM
const timeshare_27 = new Timeshare(38, 213, 8500, false);
const timeshare_28 = new Timeshare(38, 531, 8500, false);

const timeshare_29 = new Timeshare(39, 114, 8500, false);
const timeshare_30 = new Timeshare(39, 413, 8500, false);
const timeshare_31 = new Timeshare(39, 431, 8500, false);

const timeshare_32 = new Timeshare(40, 531, 8500, false);

const timeshare_33 = new Timeshare(46, 231, 8500, false);

const timeshare_34 = new Timeshare(48, 321, 8500, false);

const timeshare_35 = new Timeshare(49, 112, 8500, false);
const timeshare_36 = new Timeshare(49, 521, 9500, false);

// 1st Week of September Labor day week is already taken

const timesharesALL = [
  timeshare_1,
  timeshare_2,
  timeshare_3,
  timeshare_4,
  timeshare_5,
  timeshare_6,
  timeshare_7,
  timeshare_8,
  timeshare_9,
  timeshare_10,
  timeshare_11,
  timeshare_12,
  timeshare_13,
  timeshare_14,
  timeshare_15,
  timeshare_16,
  timeshare_17,
  timeshare_18,
  timeshare_19,
  timeshare_20,
  timeshare_21,
  timeshare_22,
  timeshare_23,
  timeshare_24,
  timeshare_25,
  timeshare_26,
  timeshare_27,
  timeshare_28,
  timeshare_29,
  timeshare_30,
  timeshare_31,
  timeshare_32,
  timeshare_33,
  timeshare_34,
  timeshare_35,
  timeshare_36
]

// timesharesALL.forEach(one => console.log(one.week, one.unit, one.price))
// const fiveHun = timesharesALL.filter(one => one.unit > 500 && one.unit < 600)
// console.log(fiveHun);

// Sunday to sunday
const year = "2019";
const setInput = [
  `January 1, ${year}`,
  `January 2, ${year}`,
  `January 3, ${year}`,
  `January 4, ${year}`,
  `January 5, ${year}`,
  `January 6, ${year}`,
  `January 7, ${year}`,
  `January 8, ${year}`,
]

// 2019 starts Jan 6th Sunday

const weekOutput = document.getElementById("weeks");
let whichWeek = 1;
let filled = false;

function getStartWeek() {
  weekOutput.style.display = "block";
  let pickOne = null;
  let startWeek = null;
  let nextWeek = null;

  setInput.forEach((one, i) => {
    const testDate = new Date(one);
    const nextWeekStart = new Date();
    nextWeekStart.setTime(testDate.getTime() + (1000 * 60 * 60 * 24 * 7))
    if (testDate.getDay() === 0 && pickOne === null) {
      pickOne = i;
      startWeek = testDate
      nextWeek = nextWeekStart
    }
  })
  setUpWeeks(startWeek, nextWeek)
}

function setUpWeeks(startWeek, nextWeek) {
  if (filled) {
    weekOutput.innerHTML = `
      <div class="newWeek units">
        <div class="weekTop">
          <p>Week No.</p>
          <p>Start Date of Week</p>
          <p>Units</p>
        </div>
      </div>
    `;
    filled = false;
  }
  const numberUnits = timesharesALL.filter(one => one.week === whichWeek).length;
  const startYear = startWeek.getFullYear();
  const nextYear = nextWeek.getFullYear();
  console.log(startYear, nextYear)
  console.log(startWeek, nextWeek);
  const newWeek = document.createElement("div");
  newWeek.classList = numberUnits > 0 ? "newWeek units" : "newWeek";
  const weekTop = document.createElement("div");
  weekTop.classList = "weekTop";
  const weekBottom = document.createElement("div");
  weekBottom.classList = "weekBottom";

  const weekNumber = document.createElement("p");
  weekNumber.textContent = whichWeek;

  const newTitle = document.createElement("p");
  newTitle.classList = "weekTitle";
  const titleText = startWeek.toDateString().split(" ");
  const actualText = `${titleText[0]}, ${titleText[1]} ${titleText[2]}, ${titleText[3]}`
  newTitle.textContent = actualText;

  const howMany = document.createElement("p");
  howMany.textContent = numberUnits;

  const timeSharePlace = document.createElement("div");
  timeSharePlace.classList = "timeSharePlace";

  // ADD in the timeshares per week
  const thisWeekTimeShares = timesharesALL.filter(one => one.week === whichWeek);
  thisWeekTimeShares.forEach(timeShare => {
    const newTimeShare = document.createElement("div");
    newTimeShare.classList = "newTimeShare";
    const unitPlace = document.createElement("p");
    unitPlace.classList = "timeShareInfo";
    unitPlace.textContent = `Unit: ${timeShare.unit}`;
    const costPlace = document.createElement("p");
    costPlace.classList = "timeShareInto";
    costPlace.textContent = `Price: $${timeShare.price}`;
    const soldPlace = document.createElement("p");
    soldPlace.textContent = `Available: ${timeShare.sold ? "No" : "Yes"}`;
    soldPlace.classList = "timeShareInfo";

    newTimeShare.append(unitPlace, costPlace, soldPlace);
    timeSharePlace.append(newTimeShare);
  })

  weekTop.append(weekNumber, newTitle, howMany);
  weekBottom.append(timeSharePlace);
  newWeek.append(weekTop, weekBottom);
  weekOutput.append(newWeek);
  if (startYear === nextYear) {
    console.log("would continue")
    const futureWeek = new Date();
    futureWeek.setTime(nextWeek.getTime() + (1000 * 60 * 60 * 24 * 7));
    whichWeek++;
    setUpWeeks(nextWeek, futureWeek)
  } else {
    whichWeek = 1;
    filled = true;
    return console.log("done");
  }
}

const allWeeksBtn = document.getElementById("showWhole");
allWeeksBtn.addEventListener("click", getStartWeek)