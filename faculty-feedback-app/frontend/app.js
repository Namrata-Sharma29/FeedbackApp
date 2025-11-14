async function submitFeedback() {
    const messageEl = document.getElementById("message");
    messageEl.textContent = "Sending...";

    const data = {
        name: document.getElementById("name").value,
        feedback: document.getElementById("feedback").value,
    };

    try {
        const response = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const text = await response.text();
            messageEl.textContent = `Error: ${response.status} - ${text}`;
            return;
        }

        const result = await response.json();
        console.log(result);
        messageEl.textContent = "Feedback submitted. Thank you!";
        // clear inputs
        document.getElementById("name").value = "";
        document.getElementById("feedback").value = "";
    } catch (err) {
        console.error(err);
        messageEl.textContent = "Network error while submitting feedback.";
    }
}
