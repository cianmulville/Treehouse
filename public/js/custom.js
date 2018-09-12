var currentPage = location.href;
var mainSection = document.querySelector('main');
var cPshortened = currentPage.substring(currentPage.lastIndexOf("/") + 1, currentPage.length);
var pageString = cPshortened.substring(0, cPshortened.includes(".") ? cPshortened.indexOf(".") : cPshortened.length);
mainSection.className = pageString;
var allNavLinks = document.querySelectorAll('.navbar-nav li a');
for(i = 0; i < allNavLinks.length; i++) {
    var hrefShortened = allNavLinks[i].href.substring(allNavLinks[i].href.lastIndexOf("/") + 1, allNavLinks[i].length);
    if(hrefShortened === cPshortened) {
        allNavLinks[i].parentElement.className = "active";
    }
}