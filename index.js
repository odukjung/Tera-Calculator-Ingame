module.exports = function Calculator(mod) {
	
	let total = 0
	
	mod.command.add(["+"], (arg_1, arg_2) => {
		
		let a = Number(arg_1)
		let b = Number(arg_2)
		
		total = a + b
			
	mod.command.message("[" + a + "]" + " + " + "[" + b + "]" + " = " +  total)
	})
	
	mod.command.add(["-"], (arg_1, arg_2) => {
		
		let a = Number(arg_1)
		let b = Number(arg_2)
		
		total = a - b
			
		mod.command.message("[" + a + "]" + " - " + "[" + b + "]" + " = " +  total)
	})
	
	mod.command.add(["*"], (arg_1, arg_2) => {
		
		let a = Number(arg_1)
		let b = Number(arg_2)
		
		total = a * b
			
		mod.command.message("[" + a + "]" + " * " + "[" + b + "]" + " = " +  total)
	})
	
	mod.command.add(["/"], (arg_1, arg_2) => {
		
		let a = Number(arg_1)
		let b = Number(arg_2)
		
		total = a / b
			
		mod.command.message("[" + a + "]" + " / " + "[" + b + "]" + " = " +  total)
	})
};
