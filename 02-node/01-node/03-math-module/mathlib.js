module.exports = function () {
	return {
		add: function(a, b) {
			return a + b;
		},
		multiply: function(a, b) {
			return a * b;
		},
		square: function(a) {
			return a * a;
		},
		random: function(a, b) {
			return Math.floor(Math.random() * 35) + 1;
		}
	};
};

/////////typescript solution from platform////////

// export class MathLibrary {
//     add(a: number, b: number): number {
//       return a + b;
//     }
  
//     multiply(a: number, b: number): number {
//       return a * b;
//     }
  
//     square(a: number): number {
//       return a * a;
//     }
  
//     random(a: number, b: number): number {
//       return Math.floor(Math.random() * 35) + 1;
//     }
//   }