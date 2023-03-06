
import './About.css';

function About() {
  return (
    <div >
      <section id = "section1">
        <div className='container wrapper'> 
          <h1> Hello, I'm Vasilis</h1>
          <p>and am a programmer.</p>
        </div>
      </section>
      <section>
        <div className='container wrapper'>
          <h5 style = {{color: 'green'}}>Hi.</h5>
          <p>I'm a programmer based in Athens, Greeece. I have graduated from Electrical and Computer Engineering in Volos with an integrated Masters degree. I have passion on Software engineer, Web Development and Machine Learning.</p>
        </div>
      </section>

      <section>
        <div className='container wrapper'>
        <h5 style = {{color: 'green', marginBottom: "10%"}}>What I can do.</h5>

        <ol class="list-group list-group-numbered">
          <li class="list-group-item">Develop what you need.</li>
          <li class="list-group-item">Design what you need.</li>
          <li class="list-group-item">Develop what you need.</li>
          <li class="list-group-item">Work with new technologies like Artificial intelligence</li>
        </ol>
        </div>
      </section>

    </div>
  );
}

export default About;
