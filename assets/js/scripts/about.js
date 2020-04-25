
// ----------------STRAWBERRIES---------------
// DRAGGING OBJECT 
const position = { x: 0, y: 0 }

interact('#strawberry1').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})


interact('#strawberry2').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

interact('#strawberry3').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

interact('#strawberry4').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

interact('#strawberry5').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

interact('#strawberry6').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

// -------------------------------------------

// DROPPING REGION
// in this case EVENT is the dropzone region
// related target is the draggable object
interact("#drop-berry-region").dropzone({
	accept: '#strawberry1, #strawberry2, #strawberry3, \
			 #strawberry4, #strawberry5, #strawberry6', 
	overlap: 0.75, 
	ondrop: function(event) {
		if (event.relatedTarget.id == "strawberry1") {
			alert("Before we figured out her name, we use to call her 'Strawberry' ")
		} else if (event.relatedTarget.id == "strawberry2"){
			alert("fun facts 2")
		} else if (event.relatedTarget.id == "strawberry3") {
			alert("fun facts 3")
		} else if (event.relatedTarget.id == "strawberry4") {
			alert("fun facts 4")
		} else if (event.relatedTarget.id == "strawberry5") {
			alert("fun facts 5")
		} else {
			alert("fun facts 6")
		}
	}
});


// -------------------------------------------

// TYPING INSTRUCTIONS

new TypeIt("#instruction-box", {
  strings: "Pick the strawberries off the tree and drag them to the ground for fun facts!",
  speed: 50,
  loop: false,
  cursor: true, 
}).go();




