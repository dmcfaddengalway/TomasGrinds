var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();

function renderCalendar(daysInMonth, startOfMonth) {
  var startOfMonth = startOfMonth;
  var numOfDays = daysInMonth;
  var renderNum = 1;

  for (var i = 0; i <= 5; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j <= 6; j++) {
      if (i === 0 && j < startOfMonth) {
        var td = document.createElement("td");
        td.classList.add("empty");
        row.append(td);
      } else if (renderNum > numOfDays) {
        var td = document.createElement("td");
        td.classList.add("empty");
        row.append(td);
        break;
      } else {
        var td = document.createElement("td");
        td.textContent = renderNum;
        if (renderNum == today.getDate()) {
          td.classList.add("today");
        } else {
          td.classList.add("anyday");
        }
        row.append(td);
        renderNum++;
      }
    }
    tableBody.append(row);
  }
}
