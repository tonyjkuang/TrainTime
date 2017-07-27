$(document).ready(function() 
{
	function MainProgram()
	{
		
		var config = {};		// Initialize Firebase
		var database;			// Variable to reference the database

		config = 
		{
			apiKey: "AIzaSyCWAsGVSFntAMlWR6KexWM7JINJ9EOlwTw",
		    authDomain: "train-time-4b7f4.firebaseapp.com",
		    databaseURL: "https://train-time-4b7f4.firebaseio.com",
		    projectId: "train-time-4b7f4",
		    storageBucket: "train-time-4b7f4.appspot.com",
		    messagingSenderId: "427126635114"
		};

		firebase.initializeApp(config);

		database = firebase.database();

		$("#train-submit").click(Submission);
	}

	MainProgram();

	function Submission(event)
	{
		event.preventDefault();

		var name;			// Name of the train
		var destination;	// Place the train is traveling to
		var arrivalTime;	// Time the train arrives at the station
		var frequency;		// Frequency of the trains departures

		// Intializes variables
		name = $("#train-name").val().trim();
		destination = $("#train-destination").val().trim();
		arrivalTime = $("#train-time").val().trim();
		frequency = $("#train-frequency").val().trim();

		// Checks the fields for valid entrys
		if(name === '' || destination === '' || arrivalTime === ''
		   || frequency === '')
		{
			alert("Please type a valid entry into each field.");
		}
		else
		{
			arrivalTime = arrivalTime.substr(0,1);
			
		}
	}
});

 // <tr class = "warning">
	// 		    	<th>
	// 		    		Train Name
	// 		    	</th>
	// 		    	<th>
	// 		    		Destination
	// 		    	</th>
	// 		    	<th>
	// 		    		Frequency(min)
	// 		    	</th>
	// 		    	<th>
	// 		    		Next Arrival
	// 		    	</th>
	// 		    	<th>
	// 		    		Minutes Away
	// 		    	</th>
	// 		    </tr>

