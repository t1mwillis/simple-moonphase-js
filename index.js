function moonCalc() {
	var Moon = {
	  phases: ['new-moon', 'waxing-crescent', 'waxing-quarter', 'waxing-gibbous', 'full-moon', 'waning-gibbous', 'waning-quarter', 'waning-crescent'],
	  phase: function (year, month, day) {
	    let c = e = jd = b = 0;
	
	    if (month < 3) {
	      year--;
	      month += 12;
	    }
	
	    ++month;
	    c = 365.25 * year;
	    e = 30.6 * month;
	    jd = c + e + day - 694039.09; // jd is total days elapsed
	    jd /= 29.5305882; // divide by the moon cycle
	    b = parseInt(jd); // int(jd) -> b, take integer part of jd
	    jd -= b; // subtract integer part to leave fractional part of original jd
	    b = Math.round(jd * 8); // scale fraction from 0-8 and round
	
	    if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0
	    return {phase: b, name: Moon.phases[b]};
	  }
	};

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	
	var phase = Moon.phase(yyyy, mm, dd);
	var phaseStr = phase.name.replace(/[_-]/g, " ");
    
    
    /*
	var img = '/lib/img/weather/moon/' + phase.name + '.png';
	
	var imgEl = document.createElement('img');
	imgEl.src = '/lib/img/weather/moon/' + phase.name + '.png';
	imgEl.alt = phaseStr;
	var insert = document.getElementsByClassName("lunar");
	insert[0].insertBefore(imgEl, insert[0].childNodes[0]);
	var span = document.getElementsByClassName("phase");
    span[0].innerHTML = phaseStr;
    */
}