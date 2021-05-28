var mini = true;

function toggleSidebar() {
	if (mini) {
		console.log("opening sidenav");
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("mySidenav").style.marginLeft = "0px";
		this.mini = false;
	} else {
		console.log("closing sidenav");
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("mySidenav").style.marginLeft = "0";
		this.mini = true;
	}
}