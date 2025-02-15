# Advanced Web Developer Bootcamp

This course is broken into 4 major parts that cover different technologies.
CSS, JS, SVG & D3, React.

- [x] CSS Animations
- [x] CSS Flexbox
- [x] CSS Project
- [x] Async JS
- [x] AJAX
- [x] AJAX Projects
- [x] Testing w/ Jasmine
- [x] Advanced Array Methods
- [x] Closure & 'this'
- [x] OOP w/ JS
- [x] Creating APIs
- [ ] SPA w/ NodeJS
- [ ] ES2015
- [ ] Guess the Password Refactor
- [ ] ES2016, ES2017
- [ ] D3 and the DOM
- [ ] D3 and Data
- [ ] SVG and D3
- [ ] Intermediate D3
- [ ] Advanced D3
- [ ] D3 Climate Dashboard
- [ ] Intro to React & JSX
- [ ] CRA and Props
- [ ] React & State
- [ ] Virtual DOM & React Events
- [ ] Component Lifecycle
- [ ] React & Auth
- [ ] React Router
- [ ] React & Redux

## CSS

### Why Animations Matter

Animations

- Makes it more engaging for the user
- They add context: UI and actions are connected
- Visual actions that is clearer - tell the user something
- 'Deceiving' the user that your service/process is fast.
- Lend your site/company some credibility and professionalism

**Gettings things to move is easy** BUT **Planning how they should move is hard**

How do we start/trigger our animations?
`Pseudoclasses` -> special selectors that you add on to another selector that specifies a special state.
e.g. `nth-child`, `not()`

#### Hover

`div:hover{ background: purple; }`

#### Focus

Triggers when an element received focus: clicks or taps on an element.
Only applies on buttons, inputs, textareas etc.

#### Active

Triggers when an element is 'being activated by user'. Applies not just on form elements

### Transform

'lets you move, warp, rotate and scale elements'.
`transform: [type of transform]`

#### Translation

Shifting positions on the X and Y scale
If there's 2 different applications, we'll need to transform origin as the 2nd translate will be applied on the first origin of the element.

#### Scaling

Scale(2) doubles the size of the element on the width and height values. You can pass in 2 values for `scale(x,y)`.
It will take the initial origin (middle of the element) and scale it evenly from there.
We can use `transform-origin: 0 0` or `transform-origin: left top` to set origin to the top left corner.
`transform-origin: left` only secures the left position, and does not affect the Y axis.

#### Rotations

`transform: rotate(45deg)` rotates the element clockwise, with the transform-origin at the center point.

`-ve` numbers change it to anti-clockwise.

#### Vendor prefixes

Different CSS code works/don't work on different browsers.
Hence, to make sure that your code works across all browsers, we add these prefixes before css code.

**auto-prefixers** help you to do that.

#### CSS Transitions

**4 Usual Transition properties**
transition-duration

- time taken for the transition to finish. `transition-duration: 2s`

transition-property

- the property of the element that transition is applied to. `transition-property: background, border-radius`

transition-timing-function

- controls the journey and speed variation of the animation. For values go to [easing.net] `transition-timing-function: ease-in, ease-in-out`

transition-delay

- seconds before the animation starts. `transition-delay: 2s, 0.5s`

**Additional animation properties**
animation-iteration-count

- How many times does it repeat?

animation-fill-mode

- How an animation applies styles before and after the animation
- `forwards` stays at the end,`backwards` applied 0% immediately,`both` combined forward + backwards,`none`

animation-direction

- `forward`, `reverse`, `alternate`

animation-play-state

- `paused` or `running`

**Transition Shorthand**
`transition: [property] [duration] [timing-function] [delay]`
`transition: background 1.5s ease-in 1`

**What should be transitioned? (Performance)**

- transform: translate();
- transform: scale();
- transform: rotate();
- opacity

#### Animation Keyframes

Transitions allow us to animate only a single state change, start -> end
Keyframes allow for _multi-state animations_, where there can be as many states as we want.

2 Steps: define & assign.

```css
@keyframes [name] {
	0% {
		color: red;
		font-size: 20px;
	}
	25% {
		color: orange;
	}
	100% {
		color: blue;
	}
}
```

#### Animation Shorthand

You can also do a shorthand for animations:
`animation: [animation-duration] [animation-delay] [animation-name]`
The rest of shorthand properties have no order whatsoever.

### Flexbox

**Container Properties**
flex-direction
justify-content
flex-wrap
align-items
align-content

**Flex Item Properties**
order
flex
flex-grow
flex-shrink
align-self

Flex container -> container w the `display: flex;` property
Flex items -> items inside the flex container, their behavior is different.
`flex-direction: row (default) / row-reverse / column / column-reverse`
Flex-wrap - can only stay in one line? or can it be on multiple lines.
`flex-wrap: no-wrap (default) / wrap / wrap-reverse (left to right, but upwards)`
`justify-content` follows main axis.
`align-items` follows cross axis : `stretch (default) / flex-start / flex-end / center / baseline`
`align-self` for singular items, used to override styles.
`order` for singular items, default value is 0 for all items.
`flex: [flex-grow] [flex-shrink] [flex-basis]`
`flex-grow`: How unused space should be spread amongst flex items, in ratios.
`flex-shrink`: How items should shrink when there isn't enough space in container. Default 1, higher number = shrink faster.
`flex-basis`: ideal size of item before placed into flex container, like width for rows, height for columns. Replaces height value.

## JS

===============================

### Async Functions

===============================

callback function -> a function that is passed into another function as a parameter

higher order function -> a function that accepts a callback as a parameter

Callbacks are used for:

- advanced array methods
- Browser events
- AJAX Requests
- React Dev

forEach will implement your function with 3 params at each time.

The stack is an ordered data structure
It keeps track of function invocations
Part of the JS runtime

_Heap_ -> an area in memory where your data is stored.

_Event Loop_ -> Functionality in JS Runtime that checks the queue when the stack is empty
If stack is empty, front of queue is placed in stack.

_Queue_ -> ordered list of functions waiting to be placed on the stack (First In First Out)

setTimeout -> invoke once after timeout
setInterval -> keep invoking every interval

**Countdown Sequence**

```js
function countDown(seconds){
	let intervalID = setInterval(function() {
		seconds--;
		if(seconds > 0){
			console.log("Timer: ',seconds);
		} else{
			console.log('Ring Ring Ring');
			clearInterval(intervalID);
		}
	}, 1000)
}
```

Javascript is **single-threaded**, Code execution is linear, and code that is running cannot be interrupted by something else going on in the program.

===============================

### AJAX

===============================

Asynchronous Javascript and XML

Ajax is not a library/framework/technology.

It's an approach that allows websites to send and request data from a server _in the background_ without disturbing the current page -> Single Page Apps

**JSON and XML**
XML has a HTML structure to represent data, compared to JSON which uses object notation. It's easier to use with JS.

Making requests with JS:

- XML HTTP Request (XHR)

Every request has a readyState (0-4)

```js
let XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
	if (XHR.readyState == 4) {
		if (XHR.status == 200) {
			console.log(XHR.responseText);
		} else {
			console.log("There was a problem..");
		}
	}
};

XHR.open("GET", "https://api.github.com/zen");
XHR.send();
```

- Fetch API

```js
fetch(url)
	.then(function(res) {
		console.log(res);
		return response.json()
	})
	.then(function(data){
		// Actual data after promise resolves
	});
	.catch(function(error) {
		console.log(error);
	});
```

**Fetch Options**

```js
fetch(url, {
	method: "POST",
	body: JSON.stringify({
		name: "blue",
		login: "bluecat"
	})
});
```

If it's a JSON that is requested, a promise will be returned as the response object.
Hence, you need to do `return response.json()` to access the data.

- 3rd Party Lib

**jQuery and AJAX**

### \$.ajax

```js
$("#btn").click(function() {
	$.ajax({
		method: "GET",
		url: "https://baconipsum.com/api/?type=meat-and-filler"
	})
		.done(function(data) {
			console.log(data);
		})
		.fail(function() {
			alert("OH NO! Failed!");
		});
});
```

^This is just generating an XHR behind the scenes.

**Axios**
Lightweight request library that helps you make XHR from browser, without extra jQuery weight.

```js
axios
	.get(url)
	.then(function(res) {
		console.log(res.data);
	})
	.catch(function(e) {
		console.log(e);
	});
```

_Handling Errors with Axios_
axios has `err.response` and `err.request` that allows you to check if error is in response or request.

```js
var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

let XHRbtn = document.querySelector("#xhr");
let fetchbtn = document.querySelector("#fetch");
let jquerybtn = document.querySelector("#jquery");
let axiosbtn = document.querySelector("#axios");
let display = document.querySelector("#quote");

XHRbtn.addEventListener("click", function() {
	let XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function() {
		if (XHR.readyState == 4 && XHR.status == 200) {
			let quote = JSON.parse(XHR.responseText)[0];
			display.innerText = quote;
		}
	};
	XHR.open("GET", url);
	XHR.send();
});

fetchbtn.addEventListener("click", function() {
	fetch(url)
		.then(function(req) {
			req.json().then(function(data) {
				display.innerText = data[0];
			});
		})
		.catch(function() {
			alert("ERROR");
		});
});

$("#jquery").click(function() {
	$.getJSON(url).done(function(data) {
		$("#quote").text(data[0]);
	});
});

axiosbtn.addEventListener("click", function() {
	axios
		.get(url)
		.then(function(res) {
			display.innerText = res.data[0];
		})
		.catch(function(err) {
			alert("ERROR!");
		});
});
```

===============================

### Testing

===============================

**Using Jasmine**
Tests will be written externally in spec files.

Essential Keywords
`describe` - let me describe **\_ to you
`it` - let me tell you about \_\_**
`expect` - here's what I expect

```js
let earth = {
	isRound: true,
	numberFromSun: 3
};

describe("Earth", function() {
	it("is round", function() {
		expect(earth.isRound).toBe(true);
	});
	it("is the third planet from the sun", function() {
		expect(earth.numberFromSun.toBe(3));
	});
});
```

**Matchers**
function that we attach to the result of functions.
`toBe`, `not.toBe` (===) compares references
`toBeCloseTo`(similar, accept 2nd par for precisions)
`toBeDefined` (not undefined)
`toBeFalsey`,`toBeTruthy`
`toBeGreaterThan`,`toBeLessThan`
`toContain` (check if present, array)
`toEqual` -> compares values

jasmine.any() -> check type

**Hooks**

```js
let arr;
BeforeEach(function() {
	arr = [1, 3, 5];
});

// runs after it, useful for teardown
afterEach(function() {
	count = 0;
});
```

`beforeAll`,`afterAll` -> runs after all tests, does not reset in between

_Pending Specs_

```js
// xit instead of it
xit('can start with an xit', function(){

})

//No function
it('is a pending test if there is no callback function)

//Include pending();
it('is pending if the pending function is invoked inside the callback',function(){
	pending();
})
```

Ok to use more than 1 `expect` function, but must be testing same functionality.
Separate diff functionalities into diff `expect` blocks

**Mocking**
Fake object that poses as a function. Takes place of real object.
These are called Spies.

A spy can stub(mimic) any function and track calls to it and all args.
Spies only exists in the describe or it block in which its defined.
Spies are removed after each spec.
There are special matches for interacting with spies.

```js
function add(a, b, c) {
	return a + b + c;
}

describe("add", function() {
	let addSpy, result;
	beforeEach(function() {
		addSpy = spyOn(window, "add");
		result = addSpy();
	});
	// Testing parameters
	it("can have params tested", function() {
		expect(addSpy).toHaveBeenCalled();
		expect(addSpy).toHaveBeenCalledWith(1,2,3);
	});
	// Testing Return Value
	it('can have a return value tested',function(){
		expect(result.toEqual(6);)
		// Testing number of calls, or if it's called
		expect(addSpy.calls.any()).toBe(true);
		expect(addSpy.calls.count()).toBe(1);
	});
});
```

**Jasmine Clock**

- Jasmine Clock is for testing time-dependent code
- installed by invoking jasmine.clock().install()
- uninstall clock after you are done to restore original functions.

```js
describe("a simple setTimeout", function() {
	let sample;
	beforeEach(function() {
		sample = jasmine.createSpy("sampleFunction");
		jasmine.clock().install();
	});
	afterEach(function() {
		jasmine.clock().uninstall();
	});
	if('is only invoked after 1000 milliseconds',function(){
		setTimeout(function(){
			sample();
		},1000);
		jasmine.clock().tick(999);
		expect(sample).not.toHaveBeenCalled();
		jasmine.clock().tick(1);
		expect(sample).toHaveBeenCalled();
	})
});
```

Can do the same for `setInterval`, check how many times function has been called.

_Testing Async Code_

- Jasmine has support for running specs that require testing async code.
- `beforeAll`, `afterAll` `beforeEach`, `afterEach` and `it` take an optional single argument (normally called `done`) that should be called when async work is complete.
- A test will not complete until its `done` is called.

```js
function getUserInfo(username) {
	return $.getJSON("http://api.github.com/users/" + username);
}

describe("#getUserInfo", function() {
	it("returns the correct name for the user", function(done) {
		getUserInfo("elle").then(function(data) {
			expect(data.name).toBe("Elle Stone");
			done();
		});
	});
});
```

**TDD - Test Driven Development**

1. Write the tests
2. See the tests fail
3. Write code to pass the tests
4. Refactor code as necessary
5. Repeat

**BDD - Behavior Driven Development**
A subset of TDD. Not mutually exclusive with TDD.
Helpful when testing design of the software.

**Summary**

- Unit testing involved testing pieces of functionality
- Jasmine is a framework that allows us to easily write unit tests
- Jasmine has quite a few matchers for testing almost any kind of expectation
- Using beforeEach/afterEach/beforeAll/afterAll hooks can help reduce duplication and confusion
- Jasmine provides spies for mimicking the behavior of a function
- Jasmine provides a clock oject for testing timers and a callback function for testing asynchronous code
- Unit testing is just one part of testing applications

===============================

### Advanced Array Functions

===============================

**forEach**

- Iterates through an array (you can turn a collection into an array and use it)
- Runs a callback function on each value in the array
- Always returns undefined

```js
[1, 2, 3].forEach(function(value, index, array) {
	//callback function executed 3 times since there are 3 values in the array
});

function doubleValues(arr) {
	let newArr = [];
	arr.forEach(val => {
		newArr.push(val * 2);
	});
	return newArr;
}

function onlyEvenValues(arr) {
	let newArr = [];
	arr.forEach(val => {
		if (val % 2 === 0) {
			newArr.push(val);
		}
	});
	return newArr;
}
```

**Map**

- Creates a new array
- Iterates through an array
- Runs a callback function for each value in the array
- Pushes result of the callback function to the new array
- Returns new array (same length)

```js
let arr = [1, 2, 3];

arr.map(function(value, index, array) {
	return value * 2;
});
```

_We could use forEach to overwrite values or change smth internally. But if you want a NEW array, or an array with the same length, you need to use map._

```js
function doubleValues(arr) {
	return arr.map(function(val) {
		return val * 2;
	});
}

function valTimesIndex(arr) {
	return arr.map(function(val, ind) {
		return val * ind;
	});
}

function extractKey(arr, key) {
	return arr.map(function(val) {
		return val[key];
	});
}
```

**filter**

- Creates a new array
- Iterates through an array
- Runs a callback function on each value in the array
- If callback fn returns true, value added to new array
- Else if callback fn returns false, value ignored from array
- Result will always be a boolean

```js
let arr = [1, 2, 3];

arr.filter(function(value, index, array) {
	// If you have if statements here
	// Try to re-evaluate your code beforehand, such that only 1 expression exists here

	return value > 2;
});

function divisibleByThree(arr) {
	return arr.filter(function(value) {
		return value % 3 === 0;
	});
}
divisibleByThree([1, 2, 3, 4, 5, 6, 7, 8, 9]); //[3,6,9]

function filterByValue(arr, key) {
	return arr.filter(function(val) {
		return val[key] !== undefined;
	});
}

function find(arr, searchValue) {
	return arr.filter(function(val) {
		return val === searchValue;
	})[0];
}

function removeVowels(str) {
	let vowels = "aeiou";
	return str
		.toLowerCase()
		.split("")
		.filter(function(val) {
			return vowels.indexOf(val) === -1;
		})
		.join("");
}
```

**reduce**

- Accepts a callback fn and optional 2nd parameter
- Iterates through an array
- Runs a callback on each value in the array
- First arg to callback is often called accumulator
- Returned value from callback is added to value of accumulator

```js
[1, 2, 3].reduce(function(accumulator, nextValue, index, array) {});

function sumOddNumbers(arr) {
	return arr.reduce(function(accumulator, nextValue) {
		if (nextValue % 2 !== 0) {
			accumulator += nextValue;
		}
		return accumulator;
	}, 0);
}
sumOddNumbers([1, 2, 3, 4, 5]);

function addKeyAndValue(arr, key, value) {
	return arr.reduce(function(acc, next, index) {
		acc[index][key] = value;
		return acc;
	}, acc);
}

function partition(arr, cb) {
	return arr.reduce(
		function(arr, next) {
			if (cb(next)) {
				acc[0].push(next);
			} else {
				acc[1].push(next);
			}
			return acc;
		},
		[[], []]
	);
}
```

===============================

### Closures & `this`

===============================

A **Closure** is a function that makes use of variables defined in outer functions that have previously returned

```js
function outer(a) {
	return function inner(b) {
		return a + b;
	};
}

outer(5)(5); //10
```

Inside, we make use of the var `a` even though outer function has returned alrdy.

- need to return inner function for this to work
- Not necessary, but recommend that you name your functions
- Only variables used in inner functions are remembered.
- do not exist if you do not return inner function, or you don't use variables returned by an outer function.
- JS will only rmb values being used inside of inner function, not all variables defined in outer function

```js
function outerFn() {
	let data = "something from outerFn";
	let fact = "Remember Me!";

	return function innerFn() {
		return fact;
	};
}
```

1 Common use is to use closures to create private variables - not accessible from the outside.

```js
function counter() {
	let count = 0;
	return function inner() {
		count++;
		return count;
	};
}

let counter1 = counter();
```

**The keyword `this`**

`this` is

- A reserved keyword in JS
- Usually determined by how a function is called (execution context)
- 4 rules (global, object/implicit, explicit, new)

_Global_ - when `this` is not inside of a declared object
Refers to the window object. Every variable you declare in the global scope is attached to the window object.

```js
function whatisThis() {
	return this;
}

whatisThis(); //window

function variablesInThis() {
	this.person = "Elie";
}

variablesInThis(); //keyword this inside the function is the window

console.log(person); //Elie;
```

'use strict' helps us prevent common mistakes like accidentally declaring global variables in functions.

_Implicit/Object_ - when the keyword `this` is inside of a **declared object**
The value of a keyword `this` will always be the closest parent object.

```js
let person = {
	firstName: "Elie",
	sayHi: function() {
		return "Hi" + this.firstName;
	},
	determineContext: function() {
		return this === person;
	}
};

person.sayHi(); //'Hi Elie'
person.determineContext(); //true

let person = {
	firstName: "Elie",
	determineContext: this
};
```

Value of the `this` here will still be the global object since **there is no function**

_Explicit Binding_

- used to set the value of the keyword `this`
- Done by using `call`, `apply`,`bind`, only used on functions.
- this has precedence over the first 2 rules.

**call** params (no limit) : (thisArg,a,b,c,d.....) , invokes immediately
**apply** params(2): (thisArg,[a,b,c,d]), invokes immediately
**bind** params (no limit) : (thisArg,a,b,c,d.....), DOES NOT invoke immediately.

```js
// Call can be used to avoid duplication.
// E.g. if `this` points to 'dog' inside of 'person'

person.dog.sayHello.call(person); //Hello Colt
person.dog.determineContext.call(person); //true

// Or create a standalone function that can be used in many different classes.

function sayHi() {
	return "Hi" + this.firstName;
}

let colt = {
	firstName: "Colt"
};

let elie = {
	firstName: "Elie"
};

sayHi.call(colt);
sayHi.call(elie);

// Apply is used when a function does not accept an array, apply will spread out values in an array for us.

function addNumbers(a, b, c, d) {
	return this.firstName + "just calculated" + (a + b + c + d);
}

let colt = {
	firstName: "Colt"
};

let elie = {
	firstName: "Elie"
};

addNumbers.call(elie, 1, 2, 3, 4);
addNumbers.apply(elie, [1, 2, 3, 4]);

let nums = [5, 7, 1, 4, 2];
Math.max(nums); //NaN

Math.max.apply(this, nums);

// Bind is like call
// bind returns a function with the context of `this` bound already.
//call and apply executes a function right away, which defeats the purpose of a setTimeout.

let colt = {
	firstName: "Colt",
	sayHi: function() {
		setTimeout(function() {
			console.log("Hi" + this.firstName);
		}, 1000);
	}
};

colt.sayHi(); //Hi undefined (1000ms later)

let colt = {
	firstName: "Colt",
	sayHi: function() {
		setTimeout(
			function() {
				console.log("Hi" + this.firstName);
			}.bind(this),
			1000
		);
	}
};

colt.sayHi(); //Hi Colt (1000 ms later)
```

**Summary**

```js
function arrayFrom(arrayLikeObject) {
	return [].slice.call(arrayLikeObject);
}

function SumEvenArguments() {
	let newArgs = [].slice.call(arguments);
	return newArgs.reduce(function(acc, next) {
		if (next % 2 == 0) {
			return acc + next;
		}
		return acc;
	}, 0);
}

function invokeMax(fn, num) {
	let max = 0;
	return function() {
		if (max >= num) {
			return "Maxed Out!";
		}
		max++;
		return fn.apply(this, arguments);
	};
}

function once(fn, thisArg) {
	let hasBeenCalled = false;
	return function() {
		if (!hasBeenCalled) {
			hasBeenCalled = true;
			return fn.apply(thisArg, arguments);
		}
	};
}

function bind(fn, thisArg) {
	let outerArgs = [].slice.call(arguments, 2);
	return function() {
		let innerArgs = [].slice.call(arguments);
		let allArgs = outerArgs.concat(innerArgs);
		return fn.apply(thisArg, allArgs);
	};
}

function flip(fn, thisArg) {
	let outerArgs = [].slice.call(arguments, 2);
	return function() {
		let innerArgs = [].slice.call(arguments);
		let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
		return fn.apply(thisArg, allArgs.reverse());
	};
}
```

**The new keyword**

- a new object is created
- refers to the new object created

```js
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

let elie = new Person("Elie", "Schoppik");

// Typically the `this`above refers to the global object.
// But when we declare elie as a `new` Person, it now points to the newly created object.
```

===============================

### OOP With Javascript

===============================

Javascript does not have classes built into it - so we mimic it with functions and objects.

This is used to practise DRY coding methodology, and introduce heirachy into our objects.

```js
function House(bedrooms, bathrooms, numSqft) {
	this.bedrooms = bedrooms;
	this.bathrooms = bathrooms;
	this.numSqft = numSqft;
}

let firstHouse = House(2, 2, 1000);
firstHouse; //undefined
```

`firstHouse` is not define because

- We are not returning anything from the function so our House function remains undefined
- We are not explicitly binding the keyword `this` or placing it inside a declared object. This means the value of the keyword `this` will be the global object, which is not what we want.

The `new` keyword - our solution to the problem.

- It first creates an empty object
- It sets the keyword `this` to be that empty object
- Adds the line `return this` to the end of the function, which follows it
- It adds a property on the empty object called `__proto__`, which links the prototype property on the constructor function to the empty object

```js
let firstHouse = new House(2, 2, 1000);
firstHouse.bedrooms; // 2
firstHouse.bathrooms; // 2
firstHouse.numSqft; // 1000
```

```js
function Dog(name, age) {
	this.name = name;
	this.age = age;
	this.bark = function() {
		console.log(this.name + "just barked!");
	};
}
```

_Refactoring with Multiple Constructors_

```js
function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}

function Motorcycle(make, model, year) {
	//Instead of duplicating Car constructor, we change the value of `this`
	// Borrow code inside Car function using `call`
	Car.call(this, make, model, year);
	this.numWheels = 2;

	//or

	Car.apply(this, [make, model, year]);
	this.numWhelels = 2;
}

// or
// Using apply with `arguments`, no need to pass in parameters
function Motorcycle() {
	Car.apply(this, arguments);
	this.numWheels = 2;
}
```

**Prototypes**

```js
function Person(name) {
	this.name = name;
}

let elie = new Person("Elie");
let colt = new Person("Colt");

Person.prototype.isInstructor = true;

colt.isInstructor; // true
elie.isInstructor; // true
```

`__proto__` : dunder proto

- used by JS to find methods or properties. If possible, proceeds up another level of `.__proto__` until no more levels exist. If not found, JS returns undefined.

All objects created by the same constructor using the new keyword have a shared prototype.

```js
function Person(name) {
	this.name = name;
	this.sayHi = function() {
		return "Hi " + this.name;
	};
}

// Everytime we make an object using the `new` keyword we have to define the sayHi function again.

// We can define it only ONCE inside the prototype, to be shared among all created objects.

function Person(name) {
	this.name = name;
}

Person.prototype.sayHi = function() {
	return "Hi " + this.name;
};
```

_Prototypal Inheritance_
The passing of methods and properties from one class to another.

Assign the prototype property of one object to be another's
Inheritance should only affect the object below

```js
Student.prototype.status = function() {
	return "I am currently a student";
};

let elie = new Person("elie", "Schoppik");
elie.status(); // 'I am currently a student'
```

We can't just assign objects to each other as we'll be assigning reference.

We should use `Object.create`
`new` will do almost the same thing, but add additional unnecessary properties on the prototype object.

```js
function Student(firstName, lastName) {
	return Person.apply(this, arguments);
}
Student.prototype = Object.create(Person.prototype);

Student.prototype.status = function() {
	return "I am currently a student!";
};

Student.prototype.constructor; //Person
Student.prototype.constructor = Student; //Resetting the constructor
```

Summary: 2 parts of Inheritance

1. Set the prototype to be an **object created** with another prototype
2. Reset the constructor property

```js
// Vehicle constructor
function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

// Declaring start function on Vehicle prototype
Vehicle.prototype.start = function() {
	return "VROOM!";
};

// Declaring toString function on vehicle prototype
Vehicle.prototype.toString = function() {
	return (
		"The make, model and year are " +
		this.make +
		" " +
		this.model +
		" " +
		this.year
	);
};

function Car(make, model, year) {
	Vehicle.apply(this, arguments);
	this.numWheels = 4;
}

// Create Car prototype from Vehicle prototype in order to inherit prototype methods
Car.prototype = Object.create(Vehicle.prototype);

// Reset constructor
Car.prototype.constructor = Car;

function Motorcycle(make, model, year) {
	Vehicle.apply(this, arguments);
	this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;
```

===============================

### Node, Express, Mongo

===============================

1. Setting up node `npm init`
2. Install Express `npm i -D express`
3. index.js for Express code

```js
let express = require("express"),
	app = express();

const port = "3000";

app.get("/", function(req, res) {
	res.send({ message: "Hi there from Express!" });
	// res.json()
});

app.listen(port, function() {
	console.log("App is running on port" + port);
});
```

4. Run index.js (Test that server works)
5. Install Mongo

```bash
sudo apt-get install -y mongodb-org
mkdir data
echo 'mongod --bind_ip=$IP --dbpath=[path of data file] --nojournal --rest "$@"' > mongod
npm i -D mongoose
chmod a+x mongod
```

6. Define schema

models/index.js

```js
let mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect("mongodb://localhost/todo-api");

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
```

models/todo.js

```js
let mongoose = require("mongoose");

let todoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: "Name cannot be blank!"
	},
	completed: {
		type: Boolean,
		default: false
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});

let Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
```

7. Define Routes as Helpers

helpers/todos.js

```js
exports.getTodos = function(req, res) {
	db.Todo.find()
		.then(todos => {
			res.json(todos);
		})
		.catch(err => {
			res.send(err);
		});
};
```

routes/todos.js

```js
router
	.route("/")
	.get(helpers.getTodos)
	.post(helpers.createTodos);

router
	.route("/:todoId")
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.put(helpers.deleteTodo);

module.exports = router;
```

===============================

### Single-Page App

===============================

- Serve Static Files
  > Make sure you have included Bodyparser

```js
bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

```js
// Everything in these folders will be served as static files
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
```

_Note: Potential CSS Error: Unable to load CSS due to MIME type Mismatch_ - just need to restart server to allow app to recognize the new static directories added.

Front-end code in app.js

`event.stopPropagation();` stops event from bubbling up to parent DOM elements.

===============================

### ES2015 Part 1

===============================

**const**

- unable to change the value of primitives
- Able to change value when dealing with array or object. Still can't be redeclared

**let**

- There were function and global scope. Let is defined in a block scope (i.e. if, trycatch, do, while etc)
- let does hoist, but we cannot access the value - it is defined inside the Temporal Dead Zone(TDZ)

**Template Strings**

- Defined within backticks `, variables defined within backticks require \$()

**Arrow Functions**

- Single parameter does not need to be wrapped inside parantheses
- Need to remove `function` and `{}` from function declaration
- Do not have their own `this` keyword! `this` will refer to its enclosing context (instructor object)
- Do not get their `arguments` keyword. If arrow functions is inside of another function, arguments will refer to outer function arguments.

**Default Parameters**

```js
function add(a = 10, b = 20) {
	return a + b;
}
```

**For...of**

```js
for (let val of arr) {
	console.log(val);
}
```

**Rest/Spread**

- rest operator always returns an array
- only called 'rest' when it is a parameter to a function
- Useful when you have an array, but working with comma separated values

```js
let combined = [...arr1, ...arr2, ...arr3];

function smallestValues(...args) {
	return Math.min(...args);
}

function placeInMiddle(arr, vals) {
	let mid = Math.floor(arr.length / 2);
	arr.splice(mid, 0, ...vals);
	return arr;
}

function joinArrays(...args) {
	return args.reduce((acc, next) => acc.concat(next), []);
}

function sumEvenArgs(...args) {
	return args.reduce((acc, next) => (next % 2 === 0 ? (acc += next) : acc), 0);
}

function flip(fn, thisArg, ...outerArgs) {
	return function(...innerArgs) {
		let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
	};
	return fn.apply(thisArg, allArgs.reverse());
}

function bind(fn, thisArg, ...outerArgs) {
	return function(...innerArgs) {
		return fn.apply(thisArg, [...outerArgs, ...innerArgs]);
	};
}
```

**Object Methods**

```js
let instructor = {
	sayHello() {
		return "Hello!";
	}
};
```

**Computed Property Names**

```js
let firstName = "Elie";
let instructor = {
	[firstName]: "Thats Me!"
};
instructor.Elie; //Thats Me!
```

**Destructuring**

```js
function createInstructor({
	name = { first: "Matt", last: "Lane" },
	isHilarious = false
} = {}) {
	return [name.first, name.last, isHilarious];
}

createInstructor(); //['Matt', 'Lane', false]
createInstructor({ isHilarious: true }); //['Matt','Lane',true]
createInstructor({ name: { first: "Tim", last: "Garcia" } }); //['Tim','Garcia',false]

function displayInfo({ name, favColor }) {
	return [name, favColor];
}

let instructor = {
	name: "Elie",
	favColor: "Purple"
};

displayInfo(instructor); //['Elie','Purple']
```

- Passing in destructured object as a default parameter
- Assign a default value as an empty object so ES2015 knows we are destructuring
- If nothing is passed in, we default to the destructured object as the parameter.

**Array Destructuring**
`let arr = [1,2,3]`
`let [a,b,c] = arr`

Swapping values: `return [a,b] = [b,a]`

```js
function displayStudentInfo(obj) {
	var { first, last } = obj;
	return `your full name is ${first} ${last}`;
}

function printFullName({ first, last }) {
	return `your full name is ${first} ${last}`;
}

function createStudent({ likesJS = true, likesES = true } = {}) {
	var start = "The Student";
	if (likesJS && likesES) {
		start += " likes JavaScript and ES2015";
	} else if (likesJS) {
		start += " likes Javascript!";
	} else if (likesES) {
		start += " likes ES2015!";
	} else {
		start += " does not like much..";
	}
	return start;
}

function reverseArray(arr) {
	for (var i = 0; i < arr.length / 2; i++) {
		[arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i]];
	}
	return arr;
}
```

**SUMMARY**

- ES2015 gives us 2 new keywords for declaring variables, `let` and `const`. `const` ensures we cannot redeclare a variable, and `let` gives us block scope.
- Easily evaluate variables in strings and create multi-line strings with ES2015 template strings. Don't forget the backticks!
- Create more concise functions using the `=>` syntax, but these functions do not get their own `this` and `arguments` keywords
- Gather `arguments` to a function as an array using the rest `...` operator and spread out values in an array to another value or function using `...`
- Write more concise methods and property names using shorthand notation and computed property names
- Object destructuring is very useful for reducing duplication and passing in default parameters as a destructured object
- Array destructuring can also be used for swapping variables in an array without a separate swap function

===============================

### ES2015 Part 2

===============================

**class**
In JS, there is no built-in support for `class` and OOP. We can use OOP to reduce code duplication and improve readability by using classes. In JS, This is done by using constructor functions, and the prototype property.

- new reserved keyword
- it creates a constant (cannot be redeclared)
- it does not hoist
- Still use `new` keyword to create objects

Instance methods -> methods that can be accessed by objects created by the constructor function.

Class methods are placed directly on the constructor function (with keyword `static`)

```js
class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	static isStudent(obj) {
		return obj.constructor === Student;
	}
}
```

_When are static methods useful?_

- Don't want every obj created from a class to have its own method
- Use the method without creating objects from that class
- Check object type, when you can't use typeof(typeof returns object)
- Examples: Object.create, Object.freeze

**Inheritance**
If one class extends another, it will have all the methods the extended class has.

`class Student extends Person`

**super**

```js
class Student extends Person {
	//use super to duplicate the constructor function in parent class
	constructor(firstName, lastName) {
		super(firstName, lastName);
	}
}
```

**Maps**
Used when

- you need to look up keys dynamically
- If you need keys that are not strings
- If you are frequently add/removing key/value pairs

```js
let firstMap = new Map();

firstMap.set(1, "Elie");
firstMap.set(false, "a boolean");
firstMap.set("nice", "a string");
firstMap.delete("nice");
firstMap.size; //2

firstMap.values();
firstMap.keys();
```

**WeakMap**

- keys must be objects
- Values in a WeakMap can be cleared from memory if no reference to them
- More performant than maps, but cannot be iterated over.

**Sets**

- All values in a set are unique
- Any type of value can exist ina Set
- Created using `new` keyword

```js
let s = new Set();
let s2 = new Set([3, 1, 3, 3, 4, 5, 1]); //{3,1,4,5}

s2[Symbol.iterator];
```

**WeakSet**

- All values must be objects
- Same properties as WeakMap

**Promises**

```js
function displayAtRandomTime() {
	return new Promise((res, rej) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve("Yes!");
			} else {
				reject("No!");
			}
		}, 1000);
	});
}
```

**Promise.all**

- accepts an array of promises and resolves all of them, or is rejected once a single one of the promises have been rejected. (fail fast)
- If all of the passed-in promises fulfill, Promise.all is fulfilled with an array of the values from the passed-in promises, in the same order as the promises passed in.

```js
Promise.all([promise1,promise2,promise3]).then((movies) => {
	return movies.forEach(val => {
		console.log(val);
	})
})


function getMostFollowers(...usernames){
	let baseUrl = 'https://api.github.com/users/';
	let urls = usernames.map(username => $.getJSON(baseUrl + username));
	return Promise.all(urls).then(data => {
		let max = data.sort((a,b) => a.followers < b.followers)[0];
		return `${max.name} has the most followers with ${max.followers}`;
	})
}

function starWarsString(id){
	let str = '';
	return $.getJSON(`https://swapi.co/api/people/${id}/`).then(data => {
		str += `${data.name} is featured in `;
		let filmData = data.films[0];
		return $.getJSON(filmData);
	}).then(function(res) => {
		str += `${res.title}, directed by ${res.director}`;
		let planetData = res.planets[0];
		return $.getJSON(planetData);
	}).then(function(res) => {
		str += `and it takes place on ${res.name}`;
		return str;
	})
}

```

**Generators**

- Pause execution and resume at any time
- Created using a \*
- When invoked, a generator object is returned to us with keys of value and done
- Value is what is returned from the paused function using the `yield` keyword
- `Done` is a boolean which returns true when the function has completed

```js
function* pauseAndReturnValues(num) {
	for (let i = 0; i < num; i++) {
		yield i;
	}
}

var gen = pauseAndReturnValues(5);

gen.next(); //{value: 0, done: false}
gen.next(); //{value: 1, done: false}
gen.next(); //{value: 2, done: false}
etc.

// Yield multiple Values
function* printValues(){
	yield 'First';
	yield 'Second';
	yield 'Third';
}

var g = printValues();
g.next().value; //'First'
g.next().value; //'Second'
g.next().value; //'Third'

// Iterating over a generator
for(val of pauseAndReturnValues(3)){
	console.log(val);
}

//0
//1
//2

//Async Generators

function* getMovieData(movieName){//returns a promise}

var movieGetter = getMovieData('titanic');
movieGetter.next().value.then(val => console.log(val));

```

**Object.assign**
Creating a new object with the same keys and values without copying by reference.

```js
var o = { name: "Elie" };
var o2 = Object.assign({}, o);

o2.name = "Tim";
o.name; //'Elie'
```

Object.assign does not create a deep clone. If we have objects inside of the object we are copying - those still have a reference.

```js
var o = { instructors: ["Elie", "Tim"] };
var o2 = Object.assign({}, o);

o2.instructors.push("Colt");

o.instructors; //['Elie','Tim','Colt'];
```

**find**

- invoked on arrays
- accepts a callback w value, index and array
- Returns the value found, or `undefined` if not found.

**findIndex**

- returns an index, or `-1` if not found

**includes**

- returns a boolean if a value is in a string(easier than using indexOf)

**Number.isFinite**

- handy way for handling NaN being a typeof number
- Also has `Number.isInteger`

```js
function checkIfNumber(val) {
	if (Number.isFinite(val)) {
		return "It is a number";
	}
}
```

**SUMMARY**

- `map` is useful when creating key-value pairs and the keys are not strings
- `Sets` are useful for creating unique data sets and do not require key-value pairs
- ES2015 Promise constructor allows for creating promises and resolving an array of promises with `Promise.all`
- Generators are valuable when creating functions or methods that can pause and resume at any time

```js
function copyObject(obj) {
	return Object.assign({}, obj);
}

function checkIfFinite(num) {
	return Number.isFinite(num);
}

function areAllNumbersFinite(arr) {
	return arr.every(Number.isFinite);
}

function convertArrayLikeObject(obj) {
	return Array.from(obj);
}

function displayEvenArguments() {
	return Array.from(arguments).filter(val => val % 2 === 0);
}
```

===============================

### ES2016

===============================

**Exponential Operator `**`\*\*

`Math.pow(2,4)` -> `2**4`

`total =** num`

**[].includes**
Instead of checking with `arr.indexOf(3)`, we can do `arr.includes(3)`

===============================

### ES2017

===============================

**padStart and padEnd**

- used for standardising string length, prepending or appending to the string.

```js
"awesome".padStart(10); //"   awesome"
"awesome".padStart(10, "!"); //"!!!awesome"

"awesome".padEnd(10, "!"); //awesome!!!
```

**Async functions**

- Special kind of function using the word `async`
- simplify writing async code, specifically Promises.
- `await` keyword can only be used inside async functions

No .then, callback, or yield necessary.

```js
async function getMovieData() {
	console.log("Starting");
	let movieData = await $.getJSON(
		"https://omdbapi.com?t=titanic&apikey=thewdb"
	);
	// this line does NOT run until promise is resolved
	console.log("all done!");
	console.log(movieData);
}

getMovieData();
```

Handling Errors:

```js
async function getUser(user) {
	try {
		let response = await $.getJSON(`https://api.github.com/users/${user}`);
		console.log(response.name);
	} catch (e) {
		console.log("User does not exist");
	}
}
```

Dealing with HTTP Requests, having 2 `async, await` requests in the same function will cause blockers. 2nd HTTP request does not get made until first promise is resolved.

Refactor -> Start the HTTP Requests in parallel, and await their resolved promise.

```js
async function getMovieData() {
	let titanicPromise = $.getJSON("https://omdbapi.com?t=titanic&apikey=thewdb");
	let shrekPromise = $.getJSON("https://omdbapi.com?t=shrek&apikey=thewdb");

	let titanicData = await titanicPromise;
	let shrekData = await shrekPromise;

	console.log(titanicData);
	console.log(shrekData);
}
```

We can also use Promise.all to await multiple resolved promises.
Returned values are in an array.

```js
async function getMovieData(first,second){
	let moviesList = await Promise.all([
		$.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`);
		$.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`);
	]);
	console.log(moviesList[0].year, moviesList[1].year);
}
```

**Object Rest**

- Gather remaining (rest) of keys and values in an object and create a new one out of them

```js
let instructor = {
	first: "Elie",
	last: "Schoppik",
	job: "Instructor",
	numSiblings: 3
};

let { first, last, ...data } = instructor;
first; // 'Elie'
last; // 'Schoppik'
data; //  {job: 'Instructor',numSiblings:3}
```

**Object Spread**

- Spread out keys and values from one object to another
- Great for creating objects starting w/ default values, concise alternative to Object.assign

```js
let instructor = { first: "Elie", last: "Schoppik", job: "instructor" };
let instructor2 = { ...instructor, first: "Tim", last: "Garcia" };

let defaults = { job: "Instructor", ownsCat: true, ownsDog: true };
let matt = { ...defaults, ownsCat: false };
let colt = { ...defaults, ownsDog: false };
```

**SUMMARY**

- ES2016 provides `**` operator and `[].includes`
- ES2017 provides helpful string metods and introduces async functions.
- `async/await` keywords in ES2017 allow for writing synchronous looking functions that are actually async
- We can combine async functions w/ Promise.all to create readable sync-looking code
- The rest and spread operator are proposed changes to JS.

## D3

To load D3, just add the script link in to a HTML Page.

d3.select - single element
d3.selectAll - multiple elements

These return a `Selection` object with `groups` and `parents`

`selection.nodes()` - return an array of HTML elements
`selection.node()` - return the first element

Use these methods as setters and getters
`selection.style`
`selection.attr`
`selection.text`
`selection.html`
`selection.property`

All these functions allow us to use callbacks. 1 function ran multiple times for different elements.

Append Elements
`d3.append(element)`

Remove Elements
`selection.remove()`

Method chaining

```js
d3.select(".outer")
	.style("color", "purple")
	.select("div")
	.style("font-size", "30px")
	.style("background-color", "orange")
	.select("div")
	.style("border", "8px solid blue");
```

`selection.classed(classList, true)`
2nd Option is a boolean asking if it's set (true) or removed (false)

### Event Listeners

Most recent listener for the same event on the same element will replace previous listeners.
`selection.on(eventType,callback)`

To access the Event object, we need to use `d3.event` instead of the normal process.

### Data Joins, Enter Selections

D3 provides us with a streamlined way to connect DOM elements with data sets.

`.__data__` -> placeholder notes that don't exist in the DOM. We'll use `.enter()` to create D3 elements with these enter notes. Then use append to append these elements into the DOM.

```js
d3.select("#quotes")
	.style("list-style", "none") // convenient to style
	.selectAll("li") // No li, but returns selection
	.data(quotes) //converts quotes array into data
	.enter() // creates the D3 elements for data
	.append("li") //Append to DOM
	.text(function(d, i) {
		//data,index bound to current element
		return d.quote; //add text content
	})
	.style("font-size", d => (d.quote.length < 25 ? "2em" : "1em")); //conditional styling
```

### Exit Selections, Key Functions

When you remove a part of the data that D3 has used for enter, the corresponding element will be slated for removal since there's no data to be matched to it.
`_enter: [Array(4)]` -> 1 was removed from Array of 5
`_exit: [undefined x4, li]` -> popped li added to `_exit`.

```js
d3.selectAll("li")
	.data(quotes)
	.exit()
	.remove();
```

`selection.data(dataArr [, keyFunction])`
Key function -> return value used to match elements with data, compared to original matching by index.

```js
d3.selectAll("li")
	.data(nonRQuotes, function(d) {
		//revise data, re-render view
		return d.quote;
	})
	.exit();
```

### General Update Pattern

Enter -> Data with no elements
Update -> Data with elements
Exit -> Elements with no data

Having a subsequent `Enter` will only affect the new elements added. To target all (new and existing) element we can use `selection.merge`.

1. Grab the update selection, make any changes unique to that selection, and store the selection in a variable.
2. Grab the exit selection and remove any unnesessary elements.
3. Grab the enter selection and make any changes unique to that selection.
4. Merge the enter and update selections, and make any changes that you want to be shared across both selections.




## React
