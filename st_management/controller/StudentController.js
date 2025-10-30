import StudentDTO from "../dto/StudentDTO.js"; //         ./ > same folder
import {delete_st, get_all,add_st,get_a_st,update_st} from "../model/StudentModel.js";




// const add_student_record = (obj) => {
//     let tbl_row = `<tr> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td> <tr>`;
//     $("#student_tbl_body").append(tbl_row);
// }

let index;

const add_student_record = () => {
    $('#student_tbl_body').empty();
    let students=get_all();
    students.map((obj)=>{
        let tbl_row = `<tr> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td></tr>`;
        $("#student_tbl_body").append(tbl_row);
    });

}

$("#student_save_btn").on("click", function () {
    console.log("save btn clicked!!!")
    let f_name = $("#f_name").val();
    let l_name = $("#l_name").val();
    let address = $("#address").val();

    if (f_name === "") {
        Swal.fire("Error", "First Name cannot be empty!", "error");
        return;
    }

    if (l_name === "") {
        Swal.fire("Error", "Last Name cannot be empty!", "error");
        return;
    }

    if (address === "") {
        Swal.fire("Error", "Address cannot be empty!", "error");
        return;
    }

    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(f_name)) {
        Swal.fire("Error", "First Name should contain only letters!", "error");
        return;
    }
    if (!nameRegex.test(l_name)) {
        Swal.fire("Error", "Last Name should contain only letters!", "error");
        return;
    }

    const addressRegex = /^[A-Za-z0-9\s,.\-\/#]+$/;

    if(!addressRegex.test(address)){
        Swal.fire("Error","not a valid address","error")
        return;
    }


    add_st(f_name,l_name,address)
    add_student_record();
    //add_student_record(student_obj);
});

$('#student_update_btn').on('click',function (){
    var f_name=$('#f_name').val().trim();
    var l_name=$('#l_name').val().trim();
    var address=$('#address').val().trim();
    if (f_name === "") {
        Swal.fire("Error", "First Name cannot be empty!", "error");
        return;
    }

    if (l_name === "") {
        Swal.fire("Error", "Last Name cannot be empty!", "error");
        return;
    }

    if (address === "") {
        Swal.fire("Error", "Address cannot be empty!", "error");
        return;
    }

    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(f_name)) {
        Swal.fire("Error", "First Name should contain only letters!", "error");
        return;
    }
    if (!nameRegex.test(l_name)) {
        Swal.fire("Error", "Last Name should contain only letters!", "error");
        return;
    }

    const addressRegex = /^[A-Za-z0-9\s,.\-\/#]+$/;

    if(!addressRegex.test(address)){
        Swal.fire("Error","not a valid address","error")
        return;
    }

    update_st(f_name,l_name,address,index);
    add_student_record();
    Swal.fire("Success", "Student updated successfully!", "success");

});



$("#student_tbl_body").on('click', 'tr', function () {
    index=$(this).index();
    let student=get_a_st(index);
    $("#f_name").val(student.f_name);
    $("#l_name").val(student.l_name);
    $("#address").val(student.address);
});



$("#student_delete_btn").on('click', () => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            delete_st(index);
            add_student_record();
            $("#student_reset_btn").click();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });

});
