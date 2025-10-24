import student_data from "../db/DB";

//add

const add_st=(obj)=>{
  student_data.push(obj);
}

//update

//delete

const delete_st=(index)=>{
  student_data.splice(index,1);
}

//get all

const get_all=()=>{
   return student_data;
}

export {add_st,delete_st,get_all};