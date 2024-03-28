import React from 'react'



export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "deca50b0-5e76-42a8-93fc-d789f43f6507");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact'>
    
    <h1> Contact Us / Book Now </h1>

  
     <div id='contact-section'>

      
      <div className="contact-input">

      <form className='form1' onSubmit={onSubmit}>
      <input type="hidden" name="access_key" value="deca50b0-5e76-42a8-93fc-d789f43f6507"  />
      <input type="Text" name='Name' id="Name" placeholder="Your Name" required />
    <input className='email' name='email' type="Email" id="email" placeholder="example@gmail.com" required />
  
    <textarea id="Message" rows="6" placeholder="Your Message" name='Message' required></textarea>

        <button className='contact-btn' type="submit">Submit Form</button>
        <p><b> WE WILL CONTACT YOU SOON</b></p>

      </form>
      <span>{result}</span>
      </div>
      <div id='locate'>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9704289373235!2d83.42780627453499!3d27.687308826376633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687006463347b%3A0xde421e9946d8abe4!2sBelbas%20skate%20park!5e0!3m2!1sen!2snp!4v1711567581003!5m2!1sen!2snp" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      </div>

     </div>
    </div>
  );
}