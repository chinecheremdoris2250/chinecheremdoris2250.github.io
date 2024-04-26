const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')


const sendEmail = (e) => {
        e.preventDefault( )

        // serviceID - template - #form - publickey

        emailjs.sendForm('service_m8nhssh','template_mx2ypn6','#contact-form','Af32pndhWYssAmShC')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Message not sent (service error)'
        })
    }

    contactForm.addEventListener('submit', sendEmail)