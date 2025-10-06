
export default function GetInvolved(){return (<main>
  <section className="hero"><img src="/hero.jpg" className="bg" alt=""/><div className="overlay"><h1>Get Involved</h1><p>Partner your properties. Sponsor transformation. Mentor the next generation.</p></div></section>
  <section className="section container"><h2 className="reveal">Submit a Property</h2>
    <form name="property-partner" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="reveal">
      <input type="hidden" name="form-name" value="property-partner" />
      <p className="small" hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>
      <label>Full Name</label><input name="name" required />
      <label>Email</label><input type="email" name="email" required />
      <label>Phone</label><input name="phone" />
      <label>Property Address</label><input name="address" required />
      <label>Bedrooms</label><input name="bedrooms" />
      <label>Notes</label><textarea name="notes" rows="4" />
      <button className="submit" type="submit">Submit Property</button>
    </form>
  </section>
  <section className="section container"><h2 className="reveal">Sponsor a Home</h2>
    <form name="sponsor-home" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="reveal">
      <input type="hidden" name="form-name" value="sponsor-home" />
      <p className="small" hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>
      <label>Organization / Name</label><input name="org" required />
      <label>Email</label><input type="email" name="email" required />
      <label>Message</label><textarea name="message" rows="4" />
      <button className="submit" type="submit">Sponsor</button>
    </form>
  </section>
  <section className="section container"><h2 className="reveal">Volunteer / Mentorship</h2>
    <form name="volunteer" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="reveal">
      <input type="hidden" name="form-name" value="volunteer" />
      <p className="small" hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>
      <label>Name</label><input name="name" required />
      <label>Email</label><input type="email" name="email" required />
      <label>Skills / Interest</label><textarea name="skills" rows="3" />
      <button className="submit" type="submit">Join</button>
    </form>
  </section>
</main>)}
