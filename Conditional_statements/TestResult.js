let responceCode=200;

if(responceCode>=100 && responceCode<=199){
     console.log("Informational Responce");
     
}
else{
   if(responceCode>=200 && responceCode<=299){
    console.log("successful Responce");
   }
   else{
    if(responceCode>=300 && responceCode<=399){
       console.log("Redirectional Responce");
    }
    else{
        if(responceCode>=400 && responceCode<=499){
           console.log("Client Error");
        }
        else{
           if(responceCode>=500 && responceCode<=599){
            console.log("Server Error");
            
           }
           else{

            console.log("Unknown status code.....");
           }

        }
        }
   }

}