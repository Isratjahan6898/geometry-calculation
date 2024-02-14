function setValueForBase(element){
    const setBase = document.getElementById(element);
    const setBaseValue = setBase.value;
    const base = parseFloat(setBaseValue);
    return base;
    
}

function setValueForHeight(element){
    const setHeight =document.getElementById(element);
    const setHeightValue = setHeight.value;
    const height =parseFloat(setHeightValue);
    return height;
}

function calculationTriangle(){
  const base=  setValueForBase('triangle-base');
    const height=  setValueForHeight('triangle-height');
    const result= 0.5 * base * height;
   

   const seeResult = document.getElementById('calculation-area');
    seeResult.innerText ='triangle result:' + ' '  +result;
    return result;

    

}