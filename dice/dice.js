"user scricpt"

    $("button").on("click", function(){
 
 let imge1 = Math.trunc(Math.random() * 6 + 1)
 let imge2 = Math.trunc(Math.random() * 6 + 1)



 let randomImge1 = "/dice/img/dice" + imge1 + ".gif"
 let randomImge2 = "/dice/img/dice" + imge2 + ".gif"


 $(".dice1").attr("src", randomImge1)
 $('.dice2').attr("src",  randomImge2)


//  if(imge1>imge2){
//     $("#result").removeclass("display-non");
// result.textContent = "Player 1 win";

//  }

let results;

if (imge1 > imge2) {
  results = "WIN player1st ";
  
} 
else
if(imge1==imge2){
    results = "Draw";
  }

else {
  results = "WIN player2nd ";
}

document.getElementById("win").innerHTML = results;

    });

   