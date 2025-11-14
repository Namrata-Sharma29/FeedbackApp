async function submitFeedback() {
    const data = {
        name: document.getElementById("name").value,
        feedback: document.getElementById("feedback").value,
    };

    const response = await fetch("/api/SubmitFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);
}
