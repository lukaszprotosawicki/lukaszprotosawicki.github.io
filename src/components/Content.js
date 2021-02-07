function Content() {
  return (
    <div className="content">
      <div className="contener-information">
        <div className="photo-main">
          <img className="photo-me" src="../img/mainphoto.png" alt="" />
          <div className="information">
            <h2>Łukasz Protosawicki</h2>
            <p className="city"> 🛰️ Gorzów Wielkopolski</p>
            <p>
              🔗
              <a
                className="img-link"
                href="https://www.linkedin.com/in/%C5%82ukasz-protosawicki-22473783/"
              >
                www.linkedin.com/in/lprotosawicki
              </a>
            </p>
            <p>
              🔗{" "}
              <a
                className="img-link"
                href="
              https://github.com/lukaszprotosawicki"
              >
                www.github.com/lprotosawicki
              </a>{" "}
            </p>
            <p> 💬 Ask me about anything, reach me:</p>
            <p className="email">
              <a href="mailto:lukaszprotosawicki@gmail.com">
                <img
                  className="email-img"
                  src="https://img.shields.io/badge/Email-lukaszprotosawicki@gmail.com-blue?style=flat-square&logo=gmail"
                  alt=""
                />
              </a>
            </p>
            <div className="logo4">
              <img src="../img/menlogo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
