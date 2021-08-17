document.addEventListener("DOMContentLoaded", function(event) {
  	const currentTheme = localStorage.getItem('theme');
  	if(currentTheme)
    	document.documentElement.setAttribute("data-theme", currentTheme);
    else
    	document.documentElement.setAttribute("data-theme", "light");
    var themeSwitcher = document.getElementById("theme-switcher");
    themeSwitcher.innerHTML = currentTheme === "dark" ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><title>sun</title><path d="M12,1V3m0,18v2M4.22,4.22,5.64,5.64M18.36,18.36l1.42,1.42M1,12H3m18,0h2M4.22,19.78l1.42-1.42M18.36,5.64l1.42-1.42"/><circle cx="12" cy="12" r="5"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.96 19.96" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><title>moon</title><path d="M19,10.79A9,9,0,1,1,9.17,1,7,7,0,0,0,19,10.79Z" transform="translate(0)"/></svg>'
    themeSwitcher.onclick = function() {
      	var currentTheme = document.documentElement.getAttribute("data-theme");
      	var switchToTheme = currentTheme === "dark" ? "light" : "dark"
      	themeSwitcher.innerHTML = switchToTheme === "dark" ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><title>sun</title><path d="M12,1V3m0,18v2M4.22,4.22,5.64,5.64M18.36,18.36l1.42,1.42M1,12H3m18,0h2M4.22,19.78l1.42-1.42M18.36,5.64l1.42-1.42"/><circle cx="12" cy="12" r="5"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.96 19.96" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><title>moon</title><path d="M19,10.79A9,9,0,1,1,9.17,1,7,7,0,0,0,19,10.79Z" transform="translate(0)"/></svg>'
        document.documentElement.setAttribute("data-theme", switchToTheme);
      	localStorage.setItem('theme', switchToTheme);
    }
});