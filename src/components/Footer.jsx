export default function Footer() {
  return (
    <footer className="container">
      <a href="#" className="footer-logo">
        <img src="/assets/images/atom.png" alt="Yonathan Gonçalves Portfolio - Logo" />
      </a>
      <div id="footer_links">
        <ul id="footer_links_list">
          <li>
            <a
              href="https://github.com/YonaGonca"
              className="footer_link"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub profile"
            >
              GitHub <i className="ri-github-fill"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yonathan-goncalves-4715861b8/"
              className="footer_link"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              LinkedIn <i className="ri-linkedin-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
