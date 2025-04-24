
   document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contact-form");

      form.addEventListener("submit", async function (e) {
         e.preventDefault();

         const formData = new FormData(form);

         try {
            const response = await fetch("https://formspree.io/f/xldbeznl", {
               method: "POST",
               body: formData,
               headers: {
                  'Accept': 'application/json'
               }
            });

            if (response.ok) {
               window.location.href = "thankyou.html"; // your custom thank you page
            } else {
               alert("Something went wrong. Please try again.");
            }
         } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
         }
      });
   });

