export default function Contact() {
  return (
    <>
    <section className="sheet contact" id="contact">
      <div>
        <span className="script">Let's work</span>
        <h2 className="display">Together</h2>
      </div>
      <div className="cinfo">
        <div><span className="k">Email</span><span className="v" id="em">phamduyen132001@gmail.com</span><button className="copy" type="button" id="copy-em" data-target="em">Copy</button></div>
        <div><span className="k">Phone</span><span className="v" id="ph">+84 933 348 395</span><button className="copy" type="button" id="copy-ph" data-target="ph">Copy</button></div>
        <div><span className="k">LinkedIn</span><a className="v" href="https://www.linkedin.com/in/myduyen1/" target="_blank" rel="noopener">linkedin.com/in/myduyen1</a></div>
      </div>
    </section>
    <footer>© 2026 Pham Thi My Duyen · Ho Chi Minh City</footer>
    </>
  );
}
