
// ----------------STRAWBERRIES---------------
// DRAGGING OBJECT 

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener


// target elements with the "draggable" class
interact('#strawberry1')
  .draggable({
    // enable inertial throwing
    inertia: true,
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
    }
  })


interact('#strawberry2')
  .draggable({
    // enable inertial throwing
    inertia: true,
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
    }
  })


interact('#strawberry3')
  .draggable({
    // enable inertial throwing
    inertia: true,
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
    }
  })


interact('#strawberry4')
  .draggable({
    // enable inertial throwing
    inertia: true,
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
    }
  })


interact('#strawberry5')
  .draggable({
    // enable inertial throwing
    inertia: true,
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
    }
  })

interact('#strawberry6')
  .draggable({
    // enable inertial throwing
    inertia: true,
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
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
			alert("After watching Frozen, she decided that her name would be Anna. Omg. ")
		} else if (event.relatedTarget.id == "strawberry3") {
			alert("She likes taking long walks with her mom and dad.")
		} else if (event.relatedTarget.id == "strawberry4") {
			alert("Her favorite movie is, of course, Frozen.")
		} else if (event.relatedTarget.id == "strawberry5") {
			alert("And her go-to karaoke song is 'Let it Go!'")
		} else {
			alert("According to her parents, shes also being going to be a 'doctor' when she grows up. ")
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




