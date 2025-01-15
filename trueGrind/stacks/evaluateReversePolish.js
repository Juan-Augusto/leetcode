/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []
  for(let i = 0; i < tokens.length; i++){
      if(tokens[i] === "+"){ 
          stack.push(stack.pop() + stack.pop())
      }else if(tokens[i] === "-"){
          let a = stack.pop()
          let b = stack.pop()
          stack.push(b - a)
      }else if(tokens[i] === "*"){
          stack.push(stack.pop() * stack.pop())
      }else if(tokens[i] === "/"){
          let a = stack.pop()
          let b = stack.pop()
          stack.push(Math.trunc(b / a))
      }else stack.push(parseInt(tokens[i]))
  }
      return stack[0]
};



// RPN definition: A form of calculate mathematical expressions
// Instead of [(3 + 4) * 5] write it like this:
// 3 4 + 5 *
// No need for parenthesis because each mathematical expression is executed 
// in the order as you are reading it