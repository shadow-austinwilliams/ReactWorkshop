const onClickHandler = () => {
  // create new containing div
  const newDiv = document.createElement("div");

  // create text to go in the div
  const newContent = document.createTextNode(
    "This text was created dynamically."
  );

  // add the text into the new div
  newDiv.appendChild(newContent);

  // get the container div from the document
  const containerDiv = document.getElementById("container");

  // append the new div into the document
  containerDiv.appendChild(newDiv);
};
