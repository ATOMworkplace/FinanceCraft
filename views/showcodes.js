        document.getElementById("showCodeButton").addEventListener("click", function() {
            var codeBoxes = document.querySelectorAll(".code-box");
            for (var i = 0; i < codeBoxes.length; i++) {
                codeBoxes[i].style.display = "block"; // Show the code boxes
            }
        });