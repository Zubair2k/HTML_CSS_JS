function myFunction() {
    var table,tr,td,input,ft,i,txtVal;
    input = document.getElementById("s1");
    ft = input.value.toUpperCase();
    table = document.getElementById("t1");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtVal = td.textContent || td.innerText;
        if (txtVal.toUpperCase().indexOf(ft) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }