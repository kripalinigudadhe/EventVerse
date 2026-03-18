/* ============================================
   CONTACT.JS - Contact Form Handling
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit)
  }
})

// Handle Contact Form Submission
function handleContactSubmit(e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(e.target)
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    timestamp: new Date().toLocaleString(),
  }

  // Validate required fields
  if (!data.name || !data.email || !data.subject || !data.message) {
    alert("Please fill in all required fields")
    return
  }

  console.log("Contact form submitted:", data)

  // Show success message
  const form = e.target
  const successMsg = document.getElementById("contact-success")

  if (successMsg) {
    form.style.display = "none"
    successMsg.style.display = "block"

    // Reset form after 4 seconds
    setTimeout(() => {
      form.reset()
      form.style.display = "block"
      successMsg.style.display = "none"
    }, 4000)
  }
}
