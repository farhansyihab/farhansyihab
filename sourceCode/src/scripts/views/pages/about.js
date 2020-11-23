const About = {
  async render() {
    return `
      <h1>About</h2>
      <div class="container">
        <p style="text-align:justify">
        Aplikasi web ini dibuat dalam rangka belajar membuat PWA di dicoding.com.
        Aplikasi ini terdiri dari 5 halaman, 3 diantaranya ada di menu Navigasi atas
        </p>
      </div>
      `;
  },

  async afterRender() {
    // TODO after render
  },
};

export default About;
