function GetPrint()
{
    /*For Print*/
    window.print();
}

function BtnAdd()
{
    /*Add Button*/
    var v = $("#TRow").clone().appendTo("#TBody") ;
    $(v).find("input").val('');
    $(v).removeClass("d-none");
    $(v).find("th").first().html($('#TBody tr').length - 1);
}

function BtnDel(v)
{
    /*Delete Button*/
       $(v).parent().parent().remove(); 
       GetTotal();

        $("#TBody").find("tr").each(
        function(index)
        {
           $(this).find("th").first().html(index);
        }

       );
}

function Calc(v)
{
    /*Detail Calculation Each Row*/
    var index = $(v).parent().parent().index();
    
    var qty = document.getElementsByName("qty")[index].value;
    var rate = document.getElementsByName("rate")[index].value;
    var disc = document.getElementsByName("disc")[index].value;

    var amt = (qty * rate) - (qty * rate * disc/100);
    document.getElementsByName("amt")[index].value = amt.toFixed(2);

    GetTotal();
}

function GetTotal()
{
    /*Footer Calculation*/   

    var sum=0;
    var amts =  document.getElementsByName("amt");

    for (let index = 0; index < amts.length; index++)
    {
        var amt = amts[index].value;
        sum = +(sum) +  +(amt) ; 
    }

    document.getElementById("FTotal").value = sum.toFixed(2);
    document.getElementById("FGST").value = (sum*9/100).toFixed(2);
    document.getElementById("FCGST").value = (sum*9/100).toFixed(2);
    document.getElementById("I_GST").value = (sum*18/100).toFixed(2);
    document.getElementById("FNet").value = ((sum) + (sum*18/100)).toFixed(2);

}

// Date calculation

window.onload = function(e){ 
   // create a new `Date` object
const now = new Date();

// get the current date and time as a string
const date = new Date().toLocaleString('en-us',{day: 'numeric', month:'short', year:'numeric'});

// update the `textContent` property of the `span` element with the `id` of `datetime`
document.querySelector('#date').textContent = date;
var newDate = new Date(now.setMonth(now.getMonth()+1)).toLocaleString('en-us',{day: 'numeric', month:'short', year:'numeric'});
// newDate = newDate.setMonth(newDate.getMonth() + 1,newDate.getDay())
document.querySelector('#validTill').textContent = newDate
}

// For IGST
$(document).ready(function(){
    $("#igst_btn").click(function(){
      $("#igst").toggle();
    });
  });

// For cgst
$(document).ready(function(){
    $("#cgst_btn").click(function(){
      $(".cgst").toggle();
    });
  });
