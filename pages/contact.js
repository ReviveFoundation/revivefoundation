
export default function Contact(){return (<main>
  <section className="hero"><img src="/hero.jpg" className="bg" alt=""/><div className="overlay"><h1>Contact</h1><p>Let’s build something that lasts.</p></div></section>
  <section className="section container"><h2 className="reveal">Reach Us</h2>
    <p className="reveal"><strong>Email:</strong> revive.foundation.org@gmail.com<br/>
       <strong>Phone:</strong> (813) 486-8195<br/>
       <strong>Domain:</strong> revive.foundation.org</p>
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="reveal">
      <input type="hidden" name="form-name" value="contact" />
      <p className="small" hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>
      <label>Name</label><input name="name" required />
      <label>Email</label><input type="email" name="email" required />
      <label>Message</label><textarea name="message" rows="5" />
      <button className="submit" type="submit">Send</button>
    </form>
  </section>
</main>)}
