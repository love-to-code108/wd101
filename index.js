
const inputForm = document.getElementById("inputForm");

// THIS FUNCTION IS USED TO GET THE ENTRIES FROM THE LOCAL STORAGE
const retrievingEntries = () => {
    
    let entries = localStorage.getItem("userEntry");

    if(entries){
        entries = JSON.parse(entries);
    }else{
        entries = []
    }

    return entries;
}

let userEntryArray = retrievingEntries();




// ========================================================================================



// THIS FUNCTION IS USED TO DISPLAY THE ENTRIES IN TABULAR FORM:
const displayUserEntry = () => {
    const entries = retrievingEntries();


    // LOOPING THROUGH EVERY ELEMENT IN THE ARRAY AND BASICALLY PREPARING THE TABLE FOR TO BE DISPLAYED ON THE DOM
    const tableEntries = entries.map((entry) => {


        // THESE TABLE CELLS ARE ABOUT TO BE JOINED TO CREATE A TABLE ROW
        const NameCell = `<td class=" px-4 py-4 ">${entry.Name}</td>`;
        const EmailCell = `<td class=" px-4 py-4 ">${entry.Email}</td>`;
        const PasswordCell = `<td class=" px-4 py-4 ">${entry.Password}</td>`;
        const DOBCell = `<td class=" px-4 py-4 ">${entry.DOB}</td>`;
        const TermsAndConditionCell = `<td class=" px-4">${entry.TermsAndCondition}</td>`;


        // CREATING THE TABLE ROW HERE
        const row = `<tr py-4>${NameCell} ${EmailCell} ${PasswordCell} ${DOBCell} ${TermsAndConditionCell}</tr>`;


        // RETURNING THIS ROW THAT WE JUST CREATED
        return row;

        
    // HERE WE ARE JOINING ALL THE ROWS TO MAKE AN STRING WHICH THEN WE CAN DIRECTLY INJECT INTO THE HTML AND SHOW ALL THE DATA ON THE DOM 

    }).join("\n");


    // THE TABLE THAT IS TO BE FILLED WITH USER DATA AND THEN SHOWN
    const table = `<table>
    <th class="px-4 py-4">Name</th>
    <th class="px-4 py-4">Email</th>
    <th class="px-4 py-4">Password</th>
    <th class="px-4 py-4">Dob</th>
    <th class="px-4 py-4">Accepted terms?</th>
    <tr>${tableEntries}</tr>
    </table>`

    const showUserEntries = document.getElementById("showUserEntries");
    showUserEntries.innerHTML = table;

} 





// ========================================================================================



// THIS FUNCTION IS RUN AFTER THE SUBMIT BUTTON IS PRESSED AND THIS FUNCTION IS USED TO TAKE THE DATE FROM THE HTML FORM ELEMENTS:

const submitForm = (event) => {

    console.log("Hello world");
    event.preventDefault();

    // getting the data from the html elements:

    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;
    const DOB = document.getElementById("dob").value;

    const TermsAndCondition = document.getElementById("TermsAndCondition").checked;

    console.log(TermsAndCondition);

    const entry = {
        Name,
        Email,
        Password,
        DOB,
        TermsAndCondition
    }

    userEntryArray.push(entry);

    localStorage.setItem("userEntry",JSON.stringify(userEntryArray));

    // WE ARE ADDING THIS FUNCTION HERE SO THAT WHEN NEW DATA IS GIVEN INTO THE FORM THE LIST UPDATES:

    displayUserEntry();

    

}


inputForm.addEventListener("submit", submitForm);


// WE ARE ADDING THIS FUNCTION HERE SO THAT THIS GETS CALLED AS SOON AS THE PAGE LOADS
displayUserEntry();


function ResetLocalStorage(){
    console.log("hello there we clear stuff");
    localStorage.clear();
}