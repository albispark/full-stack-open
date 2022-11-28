# Part 0 exercises

## Exercise 0.1, 0.2 and 0.3
* Reviewed the [basics of HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) :white_check_mark:	
* Reviewed the [basics of CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) :white_check_mark:	
* Reviewed the [basics of HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form) :white_check_mark:	

## Exercise 0.4: New note
A diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes when writing something into the text field and clicking the submit button.

```mermaid
sequenceDiagram
browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
server-->>browser: Status Code: 302 Found
Note over browser: browser makes a new HTTP GET request to the<br/> address defined in the header's Location end note
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>browser: HTML-code
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: main.css
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->>browser: main.js
note over browser: browser starts executing js-code<br/> that requests JSON data from server end note
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]
note over browser: browser executes the event handler<br/> that renders notes to display end note
```

## Exercise 0.5: Single page app

A diagram depicting the situation where the user goes to the single page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
sequenceDiagram
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->>browser: HTML-code
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: main.css
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->>browser: spa.js

note over browser: browser starts executing js-code that<br/>  requests JSON data from server end note

browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser: browser executes the event handler<br/> that renders notes to display end note
```

## Exercise 0.6: New note
A diagram depicting the situation where the user creates a new note using the single page version of the app.

```mermaid
sequenceDiagram
browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Note over server: server receives the new note as JSON-data
server-->>browser: Status Code: 201 Created
Note over browser: browser stays on the same page and<br/> it sends no further HTTP requests
```