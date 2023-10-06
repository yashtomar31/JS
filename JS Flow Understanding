JS has Javascript Execution Context
Java is single threaded language.

Phase 1 
*It has global Execution Context - {},[this] (In browser we get Global EC as windows)
*Function Exectution Context
*Eval Execution Context

Phase 2
1)Memory Creation Phase - creatuib of memory allocation
2) Execution phase


Running of following code
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

Running of code goes as follows

1) Global Execution (this)
2) Memory Phase
  Val1 - > undefined // we start with variable memory allocation
  Val2 - > undefined 
  addum - > defination
  result1 - > undefined
  result2 - > undefined
3) Execution Phase
  Val1 - 10
  val2 - 5
  function we already added then skip to result1 line
  addNum - so we are callion addNum now, so now we create a new executional context, so new variable environement+ execution thread. We repeat memory phase, execution phase for this function call
            1)Memory Phase
              val1 - undefined
              val2 - undefined
              total - undefined
            2)Execution Phase
              num1 - 10
              num2 - 5
              totl - 15 (get returns to global execution phase of parent
  ********* Now this execution context gets deleted
  result1 - 15
  addNum(for result 2) create new execution context again for this call,
          1)Memory Phase
              val1 - undefined
              val2 - undefined
              total - undefined
          2)Execution Phase
              num1 - 10
              num2 - 5
              totl - 15 (get returns to global execution phase of parent
  result2- 15




  



