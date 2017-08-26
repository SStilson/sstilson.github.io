var React = require('react');

class Introduction extends React.Component {
  render() {
    return (
      <div className = 'introduction'>
        <h1>Hi, I'm Samantha!</h1>
        <p>I'm a software engineer based in <strong>San Francisco</strong>, currently working for <a href="https://www.thoughtworks.com/">ThoughtWorks</a>.</p>
        <p>I want to feel great about the software I build from a tech perspective and a human one. That means writing quality code for a purpose.</p>
        <p>When I'm not coding, you can find me working on my book, practicing yoga, or looking for Airbnbs in faraway places.</p>
        <p>To see more of my experience, <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>download my resume</a>.</p>
      </div>
    )
  }
}
module.exports = Introduction;
