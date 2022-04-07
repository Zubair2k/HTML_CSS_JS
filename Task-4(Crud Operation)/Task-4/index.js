var selectedRow = null

function onFeedbackSubmit() {
    if (validate()) {
        var Data = readData();
        if (selectedRow == null)
            insertRecord(Data);
        else
            updateRecord(Data);
        resetValueForm();
    }
}

function validate() {
    var isValid = true;
    if (document.getElementById("feedback").value == ""){
        isValid = false;
        document.getElementById("feedbackValidationError").classList.remove("hide");
    } else {
        if (!document.getElementById("feedbackValidationError").classList.contains("hide"))
            document.getElementById("feedbackValidationError").classList.add("hide");
    }

    return isValid;
}

function readData() {
    var Data = {};
    Data["fname"] = document.getElementById("fname").value;
    Data["lname"] = document.getElementById("lname").value;
    Data["mail"] = document.getElementById("mail").value;
    Data["phonenumber"] = document.getElementById("phonenumber").value;
    Data["feedback"] = document.getElementById("feedback").value;
    return Data;
}

function insertRecord(data1) {
    var table = document.getElementById("feedbackdetails").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data1.fname;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data1.lname;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data1.mail;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data1.phonenumber;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data1.feedback;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function updateRecord(Data) {
    selectedRow.cells[0].innerHTML = Data.fname;
    selectedRow.cells[1].innerHTML = Data.lname;
    selectedRow.cells[2].innerHTML = Data.mail;
    selectedRow.cells[3].innerHTML = Data.phonenumber;
    selectedRow.cells[4].innerHTML = Data.feedback;
}

function resetValueForm() {
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("mail").value="";
    document.getElementById("phonenumber").value="";
    document.getElementById("feedback").value="";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phonenumber").value = selectedRow.cells[3].innerHTML;
    document.getElementById("feedback").value = selectedRow.cells[4].innerHTML;
}

function onDelete(td) {
    if (confirm('Want to delete this record ?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("feedbackdetails").deleteRow(row.rowIndex);
        resetValueForm();
    }
}
