$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "database.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});
  
  function processData(data) {
    var tableData = $.csv.toArray(data);
    alert(lines);
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }