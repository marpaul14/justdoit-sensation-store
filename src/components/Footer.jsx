function Footer({ footerAPI: { title, links } }) {
  return (
    <>
      <footer>
        <div>
          <div>
            {title.map((val, i) => (
              <div key={i} className="">
                <h1>{val.title}</h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i}>
                {list.map((link, i) => (
                  <li key={i}>{link.link}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
