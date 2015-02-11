function activate(id)
{	
	// setze alle event element sichtbar, da wir nicht wissen ob zuvor schon eines ausgewählt war
	for(i = 1; i <= 6; i++)
	{				
		document.getElementById("event_" + i).style.display = "block";
		document.getElementById("event_selected_" + i).style.display = "none";
	}
	
	// mach das ausgewählte event unsichtbar
	document.getElementById("event_" + id).style.display = "none";
	
	// mach die komplettansicht des ausgewählten events sichtbar
	document.getElementById("event_selected_" + id).style.display = "block";
}
