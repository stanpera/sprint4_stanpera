document
  .querySelector("#newTask")
  .addEventListener("submit", function (taskInitiation) {
    taskInitiation.preventDefault();
    const cleanerAddTask = document.getElementById("addTask");
    const addTask = cleanerAddTask.value.trim();
    const tasksList = document.getElementById("tasksList");

    if (addTask !== "") {
      const listElementBox = document.createElement("li");
      const listElementText = document.createElement("span");
      listElementText.textContent = addTask;
      const listElementBnt1 = document.createElement("button");
      listElementBnt1.textContent = "Edytuj";
      const listElementBnt2 = document.createElement("button");
      listElementBnt2.textContent = "Usuń";

      listElementBox.appendChild(listElementText);
      listElementBox.appendChild(listElementBnt1);
      listElementBox.appendChild(listElementBnt2);
      tasksList.insertBefore(listElementBox, listElementBox[0]);

      cleanerAddTask.value = "";

      listElementBnt1.addEventListener("click", function (taskChange) {
        if (listElementBnt1.textContent === "Edytuj") {
          const newListElementText = document.createElement("input");
          newListElementText.value = listElementText.textContent;
          listElementBox.insertBefore(newListElementText, listElementText);
          listElementText.style.display = "none";
          listElementBnt1.textContent = "Zatwierdź zmiany";
        } else if (listElementBox.querySelector("input").value === "") {
          alert("Nazwa zadania nie może być pusta.");
        } else {
          // zastanawiam się czemu nie mogłem bezpośrednio odwołać się do newListElementText tylko jeszcze raz wywoływać input.
          // Nawet jak dałem listElementText poza instrukcję warunkową to ten sposób nie zadziałał. Dotyczy to else if i else.
          listElementText.textContent =
            listElementBox.querySelector("input").value;
          listElementBox.removeChild(listElementBox.querySelector("input"));
          listElementText.style.display = "inline";
          listElementBnt1.textContent = "Edytuj";
        }
      });
      listElementBnt2.addEventListener("click", function (taskDelete) {
        listElementBox.remove();
      });
    } else {
      alert("Nazwa zadania nie może być pusta.");
    }
  });
