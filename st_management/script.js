function addSt_To_Table(f_name,l_name,address){
    let table_row="<tr><td>"+f_name+"</td><td>"+l_name+"</td><td>"+address+"</td></tr>";
    $('#t_body').append(table_row);
}


$('#student_save_btn').on('click',function (){//arrow fun tion returns -1 here
    let f_name=$('#f_name').val();
    let l_name=$('#l_name').val();
    let address=$('#address').val();
    console.log(f_name)
    console.log(l_name)
    console.log(address)

    addSt_To_Table(f_name,l_name,address);

});

// $('.table').on('click','tr',function (){
//    let result=$(this).index();
//    console.log(result)
// });

let result;

$('.table').on('click','tr',function (){
    result=$(this).children();
    let td1=result.eq(0).text();
    let td2=result.eq(1).text();
    let td3=result.eq(2).text();

    $("#f_name").val(td1);
    $("#l_name").val(td2);
    $("#address").val(td3);
});

$('#student_delete_btn').on('click',function (){
    result.remove();
    $("#btn_reset").click();
});