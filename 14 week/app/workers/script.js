function Worker(name, wage) {
	this.name = name;
	var zarplata = wage; // приватное свойство потому, что никто не любит говорить о своей зарплате

	this.showWage = function() {
		console.log(zarplata);
	}

	this.changeWage = function(num) {
		zarplata += num;
	}
}

function Manager(name, wage, car) {
	Worker.apply(this, arguments);

	this.car = car;
}

function Director(name, wage, car) {
	Manager.apply(this, arguments);

	var counter = {
		names: [],
		count: []
	};

	function lowerWage(victim) {
		var indexOfVictim = counter.names.indexOf(victim.name);
		if (indexOfVictim < 0) {
			counter.names.push(victim.name);
			counter.count.push(1);
		} else {
			if (counter.count[indexOfVictim] < 2) {
				counter.count[indexOfVictim]++;
			} else {
				counter.count[indexOfVictim] = 0;
				victim.changeWage(-1000);
			}
		}
	}

	this.scream = function(victim) {
		var html = '<p style="color:red; font-weight:bold">';
		html += '$%&#@$%&#@$%, ' + victim.name.toUpperCase() + '!!!11';
		html += '</p>';
		document.write(html);

		lowerWage(victim);
	}


}

var workerVasya = new Worker('Вася', 6000),
	managerPetya = new Manager('Петя', 8000, 'Lada Priora'),
	directorZhenya = new Director('Женя', 20000, 'Ford Focus');

