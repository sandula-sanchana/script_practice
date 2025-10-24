import StudentDTO from "../dto/StudentDTO.js"; //         ./ > same folder
import {delete_st, get_all,add_st,get_a_st} from "../model/StudentModel.js";




// const add_student_record = (obj) => {
//     let tbl_row = `<tr> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td> <tr>`;
//     $("#student_tbl_body").append(tbl_row);
// }

let index;
let selected_obj;
let students;

const add_student_record = () => {
    $('#student_tbl_body').empty();
    students=get_all();
    students.map((obj)=>{
        let tbl_row = `<tr> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td> </tr>`;
        $("#student_tbl_body").append(tbl_row);
    });

}

$("#student_save_btn").on("click", function () {
    console.log("save btn clicked!!!")
    let f_name = $("#f_name").val();
    let l_name = $("#l_name").val();
    let address = $("#address").val();


    add_st(f_name,l_name,address)
    add_student_record();
    //add_student_record(student_obj);
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
