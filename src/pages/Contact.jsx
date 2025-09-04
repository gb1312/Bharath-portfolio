import Section from '../components/SectionWrapper.jsx'

export default function Contact(){
  return (
    <Section title="Contact" subtitle="Let’s build something meaningful">
      <div className="card" style={{padding:22}}>
        <p style={{marginTop:0}}>
          Email: <a href="mailto:bharathraajnagarajan@gmail.com">bharathraajnagarajan@gmail.com</a><br/>
          LinkedIn: <a href="https://www.linkedin.com/in/bharathraaj-nagarajan-898a66195" target="_blank" rel="noreferrer">/in/bharathraaj-nagarajan-898a66195</a><br/>
          GitHub: <a href="https://github.com/BharathraajNagarajan" target="_blank" rel="noreferrer">@BharathraajNagarajan</a>
        </p>

        <form onSubmit={(e)=>{
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const subject = encodeURIComponent(`[Portfolio] ${data.get('name')} — ${data.get('topic')}`);
          const body = encodeURIComponent(data.get('message'));
          window.location.href = `mailto:bharathraajnagarajan@gmail.com?subject=${subject}&body=${body}`;
        }} style={{display:'grid', gap:12, maxWidth: 640}}>
          <input required name="name" placeholder="Your name" className="card" style={{padding:12, border:'1px solid var(--surface)', borderRadius:12}}/>
          <input required name="topic" placeholder="Topic" className="card" style={{padding:12, border:'1px solid var(--surface)', borderRadius:12}}/>
          <textarea required name="message" placeholder="Message" rows="6" className="card" style={{padding:12, border:'1px solid var(--surface)', borderRadius:12}}/>
          <button className="btn btn-primary" type="submit">Send Email</button>
        </form>
      </div>
    </Section>
  )
}
