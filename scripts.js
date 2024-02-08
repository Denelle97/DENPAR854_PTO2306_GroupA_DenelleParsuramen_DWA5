// scripts.js

// Get form and result elements from the DOM
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Add event listener to the form submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Extract input values from the form
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    // Validate inputs
    if (dividend.trim() === "" || divider.trim() === "") {
      throw new Error("Division not performed. Both values are required in inputs. Try again");
    }

    // Check for non-numeric inputs
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Something critical went wrong. Please reload the page");
    }

    // Convert inputs to numbers
    const dividendNumber = parseFloat(dividend);
    const dividerNumber = parseFloat(divider);

    // Handle division by zero
    if (dividerNumber === 0) {
      throw new Error("Division not performed. Invalid number provided. Try again");
    }

    // Perform the division and display the result
    const divisionResult = dividendNumber / dividerNumber;
    if (Number.isInteger(divisionResult)) {
      result.innerText = Math.floor(divisionResult);
    } else {
      result.innerText = divisionResult.toFixed(0);
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    result.innerText = "Something critical went wrong. Please reload the page";
  }
});




