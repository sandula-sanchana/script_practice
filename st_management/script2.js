

// ==================== Add Student =======================

const add_student_record = (obj) => {
    let tbl_row = `<tr> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td> <tr>`;
    $("#student_tbl_body").append(tbl_row);
}

$("#student_save_btn").on("click", function () {
    console.log("save btn clicked!!!")
    let f_name = $("#f_name").val();
    let l_name = $("#l_name").val();
    let address = $("#address").val();

    let student_obj = new StudentDTO(f_name, l_name, address);
    add_student_record(student_obj);
});

// ==================== Select Student =======================

$("#student_tbl_body").on('click', 'tr', function () {
    tbl_row = $(this);

    // let result = $(this).index();
    let tds = $(this).children();

    let f_name = tds.eq(0).text(); // fname
    let l_last = tds.eq(1).text(); // lname
    let address = tds.eq(2).text(); // address

    $("#f_name").val(f_name);
    $("#l_name").val(l_last);
    $("#address").val(address);
});

// ==================== Remove Student =======================

$("#student_delete_btn").on('click', () => {
    tbl_row.remove();
    $("#student_reset_btn").click();
});

let tbl_row;