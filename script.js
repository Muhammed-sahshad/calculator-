
var oldValue
var newValue
var result
var flag=0
function clicked(val){
 document.getElementById("screen").value+=val
}
function allClear(){
    document.getElementById("screen").value=''
}
function equalClicked(){
    newValue = document.getElementById("screen").value
    newValue=parseFloat(newValue)
    if(flag==1){
        result=oldValue+newValue
        document.getElementById("screen").value=result
    }else if(flag==2){
        result=oldValue-newValue
        document.getElementById("screen").value=result
    }else if(flag==3){
        result=oldValue*newValue
        document.getElementById("screen").value=result
    }else if(flag==4){
        result=oldValue/newValue
        document.getElementById("screen").value=result
    }
}
function plusClicked(){
    flag=1
  oldValue = document.getElementById("screen").value
  oldValue=parseFloat(oldValue)
  document.getElementById("screen").value=''
}
function minusClicked(){
    flag=2
  oldValue = document.getElementById("screen").value
  oldValue=parseFloat(oldValue)
  document.getElementById("screen").value=''
}
function multiplyClicked(){
    flag=3
  oldValue = document.getElementById("screen").value
  oldValue=parseFloat(oldValue)
  document.getElementById("screen").value=''
}
function divisionClicked(){
    flag=4
  oldValue = document.getElementById("screen").value
  oldValue=parseFloat(oldValue)
  document.getElementById("screen").value=''
}
function percentageClicked(){
  newValue=document.getElementById("screen").value
  newValue=parseFloat(newValue)
  result=oldValue*newValue/100
  document.getElementById("screen").value=result
  oldValue=0
  newValue=0
}


