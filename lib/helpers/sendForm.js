

export const sendContactForm = async (data) => 
fetch ('api/contact', {
    method: 'POST',
    body : JSON.stringify(data),
    headers: {
        'content-type': 'application/json',
        accept: 'application/json',
    }
})
