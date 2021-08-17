document.addEventListener("DOMContentLoaded", function(event) {
  	const currentTheme = localStorage.getItem('theme');
  	if(currentTheme)
    	document.documentElement.setAttribute("data-theme", currentTheme);
    else
    	document.documentElement.setAttribute("data-theme", "light");
    var themeSwitcher = document.getElementById("theme-switcher");
    themeSwitcher.innerHTML = currentTheme === "dark" ? '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>' : '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
    themeSwitcher.onclick = function() {
      	var currentTheme = document.documentElement.getAttribute("data-theme");
      	var switchToTheme = currentTheme === "dark" ? "light" : "dark"
      	themeSwitcher.innerHTML = switchToTheme === "dark" ? '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>' : '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
      	document.documentElement.setAttribute("data-theme", switchToTheme);
      	localStorage.setItem('theme', switchToTheme);
    }
});