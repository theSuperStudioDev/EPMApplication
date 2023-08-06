document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("application-form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('https://formspree.io/f/xnqkjezq', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Formspree response:', responseData);
                // Do something with the response (e.g., show a success message)
            } else {
                console.error('Formspree submission failed:', response.statusText);
                // Handle submission failure (e.g., show an error message)
            }
        } catch (error) {
            console.error('Error sending form data:', error);
            // Handle errors (e.g., show an error message)
        }

        form.reset();
    });
});