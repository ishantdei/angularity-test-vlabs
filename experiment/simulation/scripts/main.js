// THIS SINGLE FUNCTION WILL STOP THE setTimeOut Functions

function myStopFunction() {
  clearTimeout(myTimeout);
}

// STEP 2

function step2() {
  document.querySelector("#step1").style.visibility = "hidden";
  document.querySelector("#next-to-step2").style.visibility = "hidden";

  document.querySelector("#step2").style.visibility = "visible";
  document.querySelector("#arr1").style.visibility = "visible";
  document.querySelector("#trans1").style.visibility = "visible";
}

function movebeaker1Step2() {
  document.querySelector("#png1").style.visibility = "hidden";
  document.querySelector("#arr1").style.visibility = "hidden";
  document.querySelector("#trans1").style.visibility = "hidden";
  document.querySelector("#gif1").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step2, 2500);
}

function clickTare1Step2() {
  document.querySelector("#trans2").style.visibility = "hidden";
  document.querySelector("#gif1").style.visibility = "hidden";
  document.querySelector("#arr2").style.visibility = "hidden";
  document.querySelector("#png2").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting2Step2, 1000);
}

function movebeaker2Step2() {
  document.querySelector("#trans3").style.visibility = "hidden";
  document.querySelector("#arr3").style.visibility = "hidden";
  document.querySelector("#png2").style.visibility = "hidden";
  document.querySelector("#gif2").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting3Step2, 2500);
}

// TIME DELAY FUNCTION OF STEP 2

function myGreeting1Step2() {
  document.querySelector("#arr2").style.visibility = "visible";
  document.querySelector("#trans2").style.visibility = "visible";

  myStopFunction();
}

function myGreeting2Step2() {
  document.querySelector("#arr3").style.visibility = "visible";
  document.querySelector("#trans3").style.visibility = "visible";

  myStopFunction();
}

function myGreeting3Step2() {
  document.querySelector("#next-to-step3").style.visibility = "visible";

  myStopFunction();
}

// STEP 3

function step3() {
  document.querySelector("#gif2").style.visibility = "hidden";
  document.querySelector("#next-to-step3").style.visibility = "hidden";
  document.querySelector("#step2").style.visibility = "hidden";

  document.querySelector("#step3").style.visibility = "visible";
  document.querySelector("#png1-step3").style.visibility = "visible";
  document.querySelector("#arr1-step3").style.visibility = "visible";
  document.querySelector("#trans1-step3").style.visibility = "visible";
}

function movebeaker1Step3() {
  document.querySelector("#png1-step3").style.visibility = "hidden";
  document.querySelector("#arr1-step3").style.visibility = "hidden";
  document.querySelector("#trans1-step3").style.visibility = "hidden";
  document.querySelector("#gif1-step3").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step3, 13500);
}

// TIME DELAY FUNCTION OF STEP 3

function myGreeting1Step3() {
  document.querySelector("#next-to-step4").style.visibility = "visible";

  myStopFunction();
}

// STEP 4

function step4() {
  document.querySelector("#step3").style.visibility = "hidden";
  document.querySelector("#gif1-step3").style.visibility = "hidden";
  document.querySelector("#next-to-step4").style.visibility = "hidden";

  document.querySelector("#step4").style.visibility = "visible";
  document.querySelector("#png1-step4").style.visibility = "visible";
  document.querySelector("#arr1-step4").style.visibility = "visible";
  document.querySelector("#trans1-step4").style.visibility = "visible";
}

function movebeaker1Step4() {
  document.querySelector("#arr1-step4").style.visibility = "hidden";
  document.querySelector("#trans1-step4").style.visibility = "hidden";
  document.querySelector("#png1-step4").style.visibility = "hidden";

  document.querySelector("#gif1-step4").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step4, 3000);
}

// TIME DELAY FUNCTIONS OF STEP 4

function myGreeting1Step4() {
  document.querySelector("#next-to-step5").style.visibility = "visible";

  myStopFunction();
}

// STEP 5

function step5() {
  document.querySelector("#step4").style.visibility = "hidden";
  document.querySelector("#gif1-step4").style.visibility = "hidden";
  document.querySelector("#next-to-step5").style.visibility = "hidden";

  document.querySelector("#step5").style.visibility = "visible";
  document.querySelector("#png1-step5").style.visibility = "visible";
  document.querySelector("#arr1-step5").style.visibility = "visible";
  document.querySelector("#trans1-step5").style.visibility = "visible";
}

function moveplate1Step5() {
  document.querySelector("#png1-step5").style.visibility = "hidden";
  document.querySelector("#arr1-step5").style.visibility = "hidden";
  document.querySelector("#trans1-step5").style.visibility = "hidden";

  document.querySelector("#gif1-step5").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step5, 2500);
}

function clickTare1Step5() {
  document.querySelector("#gif1-step5").style.visibility = "hidden";
  document.querySelector("#arr2-step5").style.visibility = "hidden";
  document.querySelector("#trans2-step5").style.visibility = "hidden";

  document.querySelector("#gif2-step5").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting2Step5,2500);
}

// TIME DELAY FUNCTIONS OF STEP 5

function myGreeting1Step5() {
  document.querySelector("#arr2-step5").style.visibility = "visible";
  document.querySelector("#trans2-step5").style.visibility = "visible";

  myStopFunction();
}

function myGreeting2Step5(){
  document.querySelector("#next-to-step6").style.visibility = "visible";
}

// STEP 6

function step6(){
  document.querySelector("#step5").style.visibility = "hidden";
  document.querySelector("#gif2-step5").style.visibility = "hidden";
  document.querySelector("#next-to-step6").style.visibility = "hidden";

  document.querySelector("#step6").style.visibility = "visible";
  document.querySelector("#png1-step6").style.visibility = "visible";
  document.querySelector("#arr1-step6").style.visibility = "visible";
  document.querySelector("#trans1-step6").style.visibility = "visible";
}

function moveplate1Step6() {
  document.querySelector("#png1-step6").style.visibility = "hidden";
  document.querySelector("#arr1-step6").style.visibility = "hidden";
  document.querySelector("#trans1-step6").style.visibility = "hidden";

  document.querySelector("#gif1-step6").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step6, 2500);
}

// TIME DELAY FUNCTIONS OF STEP 6

function myGreeting1Step6(){
  document.querySelector("#next-to-step7").style.visibility = "visible";

  myStopFunction();
}

// STEP 7

function step7(){
  document.querySelector("#step6").style.visibility = "hidden";
  document.querySelector("#gif1-step6").style.visibility = "hidden";
  document.querySelector("#next-to-step7").style.visibility = "hidden";

  document.querySelector("#step7").style.visibility = "visible";
  document.querySelector("#png1-step7").style.visibility = "visible";
  document.querySelector("#assembleSieves1-step7").style.visibility = "visible";
}

function sieveAssemble1Step7(){
  document.querySelector("#png1-step7").style.visibility = "hidden";
  document.querySelector("#assembleSieves1-step7").style.visibility = "hidden";

  document.querySelector("#gif1-step7").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step7, 12000);
}

// TIME DELAY FUNCTIONS OF STEP 7

function myGreeting1Step7(){
  document.querySelector("#next-to-step8").style.visibility = "visible";

  myStopFunction();
}

// STEP 8

function step8(){
  document.querySelector("#step7").style.visibility = "hidden";
  document.querySelector("#gif1-step7").style.visibility = "hidden";
  document.querySelector("#next-to-step8").style.visibility = "hidden";

  document.querySelector("#step8").style.visibility = "visible";
  document.querySelector("#png1-step8").style.visibility = "visible";
  document.querySelector("#arr1-step8").style.visibility = "visible";
  document.querySelector("#trans1-step8").style.visibility = "visible";
}

function moveplate1Step8(){
  document.querySelector("#png1-step8").style.visibility = "hidden";
  document.querySelector("#arr1-step8").style.visibility = "hidden";
  document.querySelector("#trans1-step8").style.visibility = "hidden";

  document.querySelector("#gif1-step8").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step8, 8000);
}

// TIME DELAY FUNCTIONS OF STEP 8

function myGreeting1Step8(){
  document.querySelector("#next-to-step9").style.visibility = "visible";

  myStopFunction();
}

// STEP 9

function step9(){
  document.querySelector("#step8").style.visibility = "hidden";
  document.querySelector("#gif1-step8").style.visibility = "hidden";
  document.querySelector("#next-to-step9").style.visibility = "hidden";

  document.querySelector("#step9").style.visibility = "visible";
  document.querySelector("#png1-step9").style.visibility = "visible";
  document.querySelector("#arr1-step9").style.visibility = "visible";
  document.querySelector("#trans1-step9").style.visibility = "visible";
}

function moveSieves1Step9(){
  document.querySelector("#png1-step9").style.visibility = "hidden";
  document.querySelector("#arr1-step9").style.visibility = "hidden";
  document.querySelector("#trans1-step9").style.visibility = "hidden";

  document.querySelector("#gif1-step9").style.visibility = "visible";
  
  myTimeout = setTimeout(myGreeting1Step9, 1500);

}

function moveSieves2Step9(){
  document.querySelector("#gif1-step9").style.visibility = "hidden";
  document.querySelector("#arr2-step9").style.visibility = "hidden";
  document.querySelector("#trans2-step9").style.visibility = "hidden";

  document.querySelector("#gif2-step9").style.visibility = "visible";
  
  myTimeout = setTimeout(myGreeting2Step9, 3900);
}

function moveSieves3Step9(){
  document.querySelector("#gif2-step9").style.visibility = "hidden";
  document.querySelector("#arr3-step9").style.visibility = "hidden";
  document.querySelector("#trans3-step9").style.visibility = "hidden";

  document.querySelector("#gif3-step9").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting3Step9, 11000)
}

function moveSieves4Step9(){
  document.querySelector("#gif3-step9").style.visibility = "hidden";
  document.querySelector("#arr4-step9").style.visibility = "hidden";
  document.querySelector("#trans4-step9").style.visibility = "hidden";

  document.querySelector("#gif4-step9").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting4Step9, 4500)
}

function moveSieves5Step9(){
  document.querySelector("#gif4-step9").style.visibility = "hidden";
  document.querySelector("#arr5-step9").style.visibility = "hidden";
  document.querySelector("#trans5-step9").style.visibility = "hidden";

  document.querySelector("#png2-step9").style.visibility = "visible";
  // const titleStep9 = document.querySelector("#title-step9");
  // const content2Step9 = document.querySelector("#content2-step9");
  // content2Step9.textContent = "After the sieve shakeout, aggregates settle down according to there size";
  // titleStep9.appendChild(content2Step9);

  myTimeout = setTimeout(myGreeting5Step9, 1000);
}

// TIME DELAY FUNCTIONS OF STEP 9

function myGreeting1Step9(){
  document.querySelector("#arr2-step9").style.visibility = "visible";
  document.querySelector("#trans2-step9").style.visibility = "visible";

  myStopFunction();
}

function myGreeting2Step9(){
  document.querySelector("#arr3-step9").style.visibility = "visible";
  document.querySelector("#trans3-step9").style.visibility = "visible";

  myStopFunction();
}

function myGreeting3Step9(){
  document.querySelector("#arr4-step9").style.visibility = "visible";
  document.querySelector("#trans4-step9").style.visibility = "visible";

  myStopFunction();
}

function myGreeting4Step9(){
  document.querySelector("#arr5-step9").style.visibility = "visible";
  document.querySelector("#trans5-step9").style.visibility = "visible";

  myStopFunction();
}

function myGreeting5Step9(){
  document.querySelector("#next-to-step10").style.visibility = "visible";

  myStopFunction();
}

// STEP 10

function step10(){
  document.querySelector("#step9").style.visibility = "hidden";
  document.querySelector("#png2-step9").style.visibility = "hidden";
  // document.querySelector("#content2-step9").style.visibility = "hidden";
  document.querySelector("#next-to-step10").style.visibility = "hidden";

  document.querySelector("#step10").style.visibility = "visible";
  document.querySelector("#png1-step10").style.visibility = "visible";
  document.querySelector("#trans1-step10").style.visibility = "visible";
  document.querySelector("#arr1-step10").style.visibility = "visible";
}

function moveplate1Step10(){
  document.querySelector("#png1-step10").style.visibility = "hidden";
  document.querySelector("#trans1-step10").style.visibility = "hidden";
  document.querySelector("#arr1-step10").style.visibility = "hidden";

  document.querySelector("#gif1-step10").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step10, 500);
}

function moveplate2Step10(){
  document.querySelector("#arr3-step10").style.visibility = "hidden";
  document.querySelector("#trans3-step10").style.visibility = "hidden";

  document.querySelector("#gif3-step10").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting3Step10, 1500);
}

function moveplate3Step10(){
  document.querySelector("#arr5-step10").style.visibility = "hidden";
  document.querySelector("#trans5-step10").style.visibility = "hidden";

  document.querySelector("#gif5-step10").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting5Step10, 11000);
}

function moveRod1Step10(){
  document.querySelector("#arr2-step10").style.visibility = "hidden";
  document.querySelector("#trans2-step10").style.visibility = "hidden";

  document.querySelector("#gif2-step10").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting2Step10, 11500);
}

function moveRod2Step10(){
  document.querySelector("#arr4-step10").style.visibility = "hidden";
  document.querySelector("#trans4-step10").style.visibility = "hidden";

  document.querySelector("#gif4-step10").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting4Step10, 11000);
}

function moveRod3Step10(){
  document.querySelector("#arr6-step10").style.visibility = "hidden";
  document.querySelector("#trans6-step10").style.visibility = "hidden";

  document.querySelector("#gif6-step10").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting6Step10, 14000);
}
// Time Functions of STEP 10

function myGreeting1Step10(){
  document.querySelector("#arr2-step10").style.visibility = "visible";
  document.querySelector("#trans2-step10").style.visibility = "visible";

  myStopFunction();
}

function myGreeting2Step10(){
  document.querySelector("#arr3-step10").style.visibility = "visible";
  document.querySelector("#trans3-step10").style.visibility = "visible";

  myStopFunction();
}

function myGreeting3Step10(){
  document.querySelector("#arr4-step10").style.visibility = "visible";
  document.querySelector("#trans4-step10").style.visibility = "visible";

  myStopFunction();
}

function myGreeting4Step10(){
  document.querySelector("#arr5-step10").style.visibility = "visible";
  document.querySelector("#trans5-step10").style.visibility = "visible";

  myStopFunction();
}

function myGreeting5Step10(){
  document.querySelector("#arr6-step10").style.visibility = "visible";
  document.querySelector("#trans6-step10").style.visibility = "visible";

  myStopFunction();
}

function myGreeting6Step10(){
  document.querySelector("#next-to-step11").style.visibility = "visible";

  myStopFunction();
}

// STEP 11

function step11(){
  document.querySelector("#step10").style.visibility = "hidden";
  document.querySelector("#gif6-step10").style.visibility = "hidden";
  document.querySelector("#next-to-step11").style.visibility = "hidden";

  document.querySelector("#step11").style.visibility = "visible";

  document.querySelector("#png1-step11").style.visibility = "visible";
  document.querySelector("#arr1-step11").style.visibility = "visible";
  document.querySelector("#trans1-step11").style.visibility = "visible";
}

function movebeaker1Step11(){
  document.querySelector("#png1-step11").style.visibility = "hidden";
  document.querySelector("#arr1-step11").style.visibility = "hidden";
  document.querySelector("#trans1-step11").style.visibility = "hidden";

  document.querySelector("#gif1-step11").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step11, 2500);
}

// TIME FUNCTIONS OF STEP 11

function myGreeting1Step11(){
  document.querySelector("#next-to-step12").style.visibility = "visible"

  myStopFunction();
}

// STEP 12

function step12(){
  document.querySelector("#step11").style.visibility = "hidden";
  document.querySelector("#gif1-step11").style.visibility = "hidden";
  document.querySelector("#next-to-step12").style.visibility = "hidden";

  document.querySelector("#step12").style.visibility = "visible";

  document.querySelector("#png1-step12").style.visibility = "visible";
  document.querySelector("#arr1-step12").style.visibility = "visible";
  document.querySelector("#trans1-step12").style.visibility = "visible";
}