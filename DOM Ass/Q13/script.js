const box = document.getElementById("myBox");
    const colorInput = document.getElementById("colorInput");
    const textInput = document.getElementById("textInput");

    document.getElementById("changeColorBtn").addEventListener("click", function () {
      const color = colorInput.value.trim();

     
      const test = document.createElement("div");
      test.style.backgroundColor = color;

      if (test.style.backgroundColor === "") {
        alert("Invalid color name!");
      } else {
        box.style.backgroundColor = color;
      }
    });

    document.getElementById("updateTextBtn").addEventListener("click", function () {
      const newText = textInput.value.trim();

      if (newText === "") {
        alert("Please enter some text!");
      } else {
        box.textContent = newText;
      }
    });