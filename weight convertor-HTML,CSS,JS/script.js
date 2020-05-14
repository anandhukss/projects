function main(){
   result.value=input.value
}

function convert(){
   var input=document.getElementById('input')
   var result=document.getElementById('result')
   var inputType=document.getElementById('inputoption').value
   var resultType=document.getElementById('resultoption').value
   

   if (inputType=='centimeter' && resultType=='meter') {
      document.getElementById('result').value=Number(input.value)*0.01+'m'
   }
   
   else if (inputType=='centimeter' && resultType=='kilometer') {
      document.getElementById('result').value=Number(input.value)/100000+'km'
   }
   else if(inputType=='centimeter' && resultType=='centimeter')
   {
      result.value=input.value+'cm'
   }


   
   if (inputType=='meter' && resultType=='centimeter') {
      document.getElementById('result').value=Number(input.value)*100+'cm'
   }
   
   else if (inputType=='meter' && resultType=='kilometer') {
      document.getElementById('result').value=Number(input.value)/1000+'km'
   }
   else if(inputType=='meter' && resultType=='meter')
   {
      result.value=input.value+'m'
   }
   if (inputType=='kilometer' && resultType=='centimeter') {
      document.getElementById('result').value=Number(input.value)*100000+'cm'
   }
   
   else if (inputType=='kilometer' && resultType=='meter') {
      document.getElementById('result').value=Number(input.value)*1000+'m'
   }
   else if(inputType=='kilometer' && resultType=='kilometer')
   {
      result.value=input.value+'km'
   }


}
