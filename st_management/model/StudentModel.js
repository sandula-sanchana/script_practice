import student_data from "../db/DB.js";
import StudentDTO from "../dto/StudentDTO.js";

//add

const add_st=(f_name,l_name,address)=>{
    let student_obj = new StudentDTO(f_name, l_name, address);
    student_data.push(student_obj);
}

//update

//delete

const delete_st=(index)=>{
  student_data.splice(index,1);
}
//get a student

const get_a_st=(index)=>{
    return student_data[index];
}

//get all

const get_all=()=>{
   return student_data;
}

export {add_st,delete_st,get_all,get_a_st};