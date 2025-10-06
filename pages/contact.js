
export default function Contact(){
  return (
    <main>
      <section className="hero">
        <h1>Let’s Build Something That Lasts</h1>
        <p>We’d love to connect with landlords, partners, and supporters.</p>
      </section>

      <section className="section container">
        <h2>Contact</h2>
        <p><strong>Email:</strong> revive.foundation.org@gmail.com<br/>
           <strong>Phone:</strong> (813) 486-8195<br/>
           <strong>Location:</strong> Tampa Bay, FL</p>

        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p className="small" hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          <label>Name</label>
          <input name="name" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Message</label>
          <textarea name="message" rows="5" />
          <button className="submit" type="submit">Send</button>
        </form>
      </section>
    </main>
  )
}
