/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

//const invalidBookingJSON = `  // A JSON file does not need a variable, an =, or backticks.
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",  //Missing comma needed after a value within an object. JSON will fail to parse because it cannot tell where the end of this element is.
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson", //JSON requires that all keys need to be in double quotes.
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,  // JSON does not support the data type "undefined".  Use null instead.
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"] // Trailing commas after the last item in an array are invalid in JSON.
  }
}
//A JSON file does not use backticks or semi-colons.


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?

  I used Code Beautify to validate my final JSON version, and it came back with a message that said "Valid JSON"!!
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
    I just went through the code line by line, and checked each element, key, and value to make sure they were syntaxed properly.
    Then I ran my final code through Code Beautify to make sure I hadn't missed any errors.
    I did refer back to our Lesson 5 reading from time to time to make sure I wasn't missing any of the possible errors they talked about.

2️⃣ How did you confirm that your corrected JSON file was valid?
    I used the JSON validator "Code Beautify" to do the final check for my JSON file.

3️⃣ Which errors were the most difficult to spot? Why?
    There wasn't an example of this error in this practice, but the hardest errors for me to detect usually fall within unmatched
    brackets or braces.  If your JSON file gets lengthy, then it can get a bit confusing looking it over and making sure all of your
    brackets and braces start and end where they need to.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   Using VSCode to write my JSON files definitely helps me to pinpoint these bracket and brace errors much more efficiently.
   I love how VSCode lines up your indentations!  This is very helpful.  I am thinking about adding the "Prettier" extension as
   well to make error detection even easier to spot.
*/
