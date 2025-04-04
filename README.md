# Flashcard App - Learn Anything with Callout Syntax

This app helps you practice anything from a markdown file formatted in a specific syntax. You can upload your file, review questions, select answers, and analyze mistakes. Here's how to use the app effectively:

---

### Why this app

Well... I got bored during exams and wanted to make something. I was using flashcards to learn german so created this instead of obsidian. Made it easier to share the questions to others. It also helped me fetch an A now that the course is over so it was somewhat effective 😆.

---

## **Usage Instructions**

### **1. Prepare Your Markdown File**

- Create or download an existing markdown file containing questions in the following callout syntax format:

```md
> [!question] {Question Number} {Your Question Here}
> a) {Choice 1}
> b) {Choice 2}
> c) {Choice 3}
> d) {Choice 4}
>
> > [!success] - Answer
> > a) {Text of the Correct Answer}
```

Example:

```md
> [!question] 1. Ich \_\_\_\_ heute viel Arbeit. (haben)
> a) habe
> b) hat
> c) habst
> d) hatten
>
> > [!success] - Answer
> > a) habe
```

---

### **2. Upload the Markdown File**

- Go to [Learn Language Flashcard App](https://kreativethinker.github.io/learn-language).
- Upload your markdown file (must be in `.md` format) using the upload button on the page.

---

### **3. Practice and Review**

- The app will display each question as a flashcard.
- Select the correct option by clicking the corresponding button.
- Review your mistakes and analyze the correct answers.

---

### **4. Upload Another Set**

- To upload a new markdown file with questions, simply **reload the page** and repeat the upload process.

---

## **Generate a New Markdown File**

If you want to generate a new set of questions, use the following prompt with any Large Language Model (LLM):

```md
I want you to generate 60 questions total comprising information from the above information in the following format:

They should be in this format:

> [!question] {Question Number} {Insert your question here}
> a) {Choice 1}
> b) {Choice 2}
> c) {Choice 3}
> d) {Choice 4}
>
> > [!success] - Answer
> > {Correct Choice ID} {Text of the Correct Choice}

For example:

> [!question] Which of the following is the correct translation of house in Spanish?
> a) Casa
> b) Maison
> c) Haus
> d) Huis
>
> > [!success] - Answer
> > a) Casa
```

If you are generating questions for a language, you can additionally use the following prompt to generate fill-in-the-blanks questions:

```
sentence **\_** rest of the sentence.

The blank should be filled by the right pronoun/right form of the word/appropriate word/correctly conjugated word.

For example:
Wie Gefallt \_**\_ munchen?
hast do \_\_** gefragt?
ich mochte mit \_**\_ freundin ins Kino
David fliegt flugzeuge. er is \_\_\_**
Er hat \_\_\_\_ fuller zu hause vergessen?
```

1. Provide the topics you want the questions to focus on.
2. Copy and paste the generated output into a markdown file and upload it to the app.

---

### **Features**

- **Interactive Flashcards**: Dynamically display questions and options.
- **Automatic Validation**: Check answers instantly with color-coded feedback.
- **Reload Friendly**: Upload multiple sets with ease by refreshing the page.

Happy learning! 🎉
