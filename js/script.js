//js for table row hide and show
function toggleRows() {
            const rows = document.getElementById("moreRows");
            const btn = document.querySelector(".expand-btn");
            if (rows.style.display === "table-row-group") {
                rows.style.display = "none";
                btn.textContent = "Expand +";
            } else {
                rows.style.display = "table-row-group";
                btn.textContent = "Collapse -";
            }
        }
        function toggleRows2() {
            const rows = document.getElementById("moreRows2");
            const btn = document.querySelector(".expand-btn-2");
            if (rows.style.display === "table-row-group") {
                rows.style.display = "none";
                btn.textContent = "Expand +";
            } else {
                rows.style.display = "table-row-group";
                btn.textContent = "Collapse -";
            }
        }
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
//show hide mobile nav - jquery
$(document).ready(function(){
  $(".burger-nav-icon").click(function(){
    $("#mobileLinks").show();

  });
 $(".close-nav").click(function(){
    $("#mobileLinks").hide();
 });
});
//animate on scroll library initialisation
AOS.init();
