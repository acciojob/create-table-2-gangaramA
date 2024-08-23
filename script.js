function createTable() {
    // Get the number of rows and columns from the user
    var rows = prompt("Input number of rows");
    var columns = prompt("Input number of columns");

    // Get the table element by its ID
    var table = document.getElementById("myTable");

    // Clear the table content before adding new rows and columns
    table.innerHTML = "";

    // Loop through the number of rows
    for (var i = 0; i < rows; i++) {
        // Insert a new row at the end of the table
        var newRow = table.insertRow();

        // Loop through the number of columns for each row
        for (var j = 0; j < columns; j++) {
            // Insert a new cell in the current row
            var newCell = newRow.insertCell();
            // Set the text content of the cell
            newCell.textContent = "Row-" + i + " Column-" + j;
        }
    }
}

