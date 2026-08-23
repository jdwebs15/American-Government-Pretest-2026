# American Government Pretest

A one-answer-per-question diagnostic pretest for GitHub Pages with a Google Apps Script response logger and heat-map dashboard.

## 1. Create the response spreadsheet and Apps Script

1. Create a blank Google Sheet for this course.
2. In the Sheet, open **Extensions → Apps Script**.
3. Replace the contents of **Code.gs** with the repository's `apps-script/Code.gs`. This one file includes both response logging and the heat-map dashboard.
4. Click **Deploy → New deployment → Web app**.
5. Set **Execute as: Me** and **Who has access: Anyone** (or the broadest option allowed by your district).
6. Authorize the script and copy the deployed web-app URL.

## 2. Connect the game

Open `app.js` and replace `PASTE_GOVERNMENT_APPS_SCRIPT_WEB_APP_URL_HERE` with that web-app URL. Commit the change.

Do not remove the quotation marks around the URL. The game will identify an
unfinished setup on the submission screen instead of pretending that the
responses were recorded.

## 3. Publish with GitHub Pages

1. Create a new repository and upload the contents of this folder (not the enclosing folder).
2. Open **Settings → Pages**.
3. Deploy from the **main** branch and **/(root)** folder.
4. Give students the published Pages URL.

The links in `index.html` include version tags so GitHub Pages and student
browsers load the current CSS and JavaScript instead of an older cached copy.
After replacing files, allow GitHub Pages a minute or two to update and press
**Ctrl+F5** once when testing.

## Heat-map dashboard

Open the Apps Script web-app URL. Filter by class period, inspect every student's question results, and review the topic summary. The spreadsheet keeps the raw response data.

## Diagnostic behavior

- Students enter full name and class period.
- Each question receives exactly one selected response; no correctness is displayed while testing.
- Students can return to earlier questions before submitting.
- The final screen displays the score only after all answers are submitted.
- The original Google Form question wording and answer order are preserved.
