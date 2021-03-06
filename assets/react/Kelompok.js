// import BgKelompokPhone from './BgKelompokPhone';

const SearchSVG = () => (
  <svg
    width="29"
    height="33"
    viewBox="0 0 29 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4308 19.8821C20.6188 17.4642 22.0537 12.1091 19.6358 7.92115C17.2178 3.73319 11.8627 2.29829 7.67476 4.71621C3.48681 7.13413 2.05191 12.4892 4.46982 16.6772C6.88774 20.8652 12.2429 22.3001 16.4308 19.8821ZM14.9715 17.3544C17.7635 15.7424 18.7201 12.1723 17.1081 9.38038C15.4962 6.58841 11.9261 5.63181 9.13411 7.24375C6.34214 8.8557 5.38554 12.4258 6.99749 15.2177C8.60943 18.0097 12.1795 18.9663 14.9715 17.3544Z"
      fill="#ECECFF"
    />
    <rect
      x="13.5331"
      y="19.533"
      width="4.08616"
      height="11.6747"
      transform="rotate(-30 13.5331 19.533)"
      fill="#ECECFF"
    />
  </svg>
);

const Hamburger = ({ setShowOverlay }) => (
  <svg
    width="35"
    height="23"
    viewBox="0 0 35 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hamburger"
    onClick={() => setShowOverlay(true)}
  >
    <rect
      x="0.333374"
      width="34.1667"
      height="5"
      rx="2.5"
      fill="white"
      fillOpacity="0.5"
    />
    <rect
      x="0.5"
      y="9"
      width="34.1667"
      height="5"
      rx="2.5"
      fill="white"
      fillOpacity="0.5"
    />
    <rect
      x="0.5"
      y="18"
      width="34.1667"
      height="5"
      rx="2.5"
      fill="white"
      fillOpacity="0.5"
    />
  </svg>
);

const MentorBox = ({
  namaMentor,
  wa,
  hp,
  line,
  ig,
  prodi,
  fakultas,
  gender = 'pria',
  num = 1,
}) => (
  <>
    <div className="box">
      {`Mentor ${num}`}
      <div className={`data-mentor data-mentor${num}`}>
        <p>
          {`Nama: ${namaMentor}`} <br />
          {`Fakultas: ${fakultas}`} <br />
          {`Program Studi: ${prodi}`} <br />
          {`HP: 0${hp}`}
          <br />
          <a
            href={`https://api.whatsapp.com/send?phone=62${wa}`}
            className="color-wa"
          >{`WA: 0${wa}`}</a>
          <br />
          <a
            href={`https://line.me/ti/p/~${line}`}
            className="color-line"
          >{`Line: ${line}`}</a>
          <br />
          <a
            href={`https://www.instagram.com/${ig.replace('@', '')}/`}
            className="color-ig"
          >{`IG: ${ig.replace('@', '')}`}</a>
          <br />
        </p>
      </div>
    </div>
    <div className={`icon icon-${gender}`}>
      <img
        src={
          gender === 'pria'
            ? './assets/image/ornament/mentor2.svg'
            : './assets/image/ornament/mentor1.svg'
        }
      />
    </div>
  </>
);

const Mentor = ({
  nama,
  no_kelompok,
  nama_mentor_1,
  nama_mentor_2,
  hp_mentor_1,
  hp_mentor_2,
  wa_mentor_1,
  wa_mentor_2,
  line_mentor_1,
  line_mentor_2,
  instagram_mentor_1,
  instagram_mentor_2,
  fakultas_mentor_1,
  fakultas_mentor_2,
  prodi_mentor_1,
  prodi_mentor_2,
}) => {
  return (
    <div>
      <div className="nama-maba">
        <p>{nama}</p>
      </div>
      <div className="nama-kelompok">
        <p>Kelompok-{no_kelompok}</p>
      </div>
      <div className="mentor">
        <div className="box-mentor mentor1">
          <MentorBox
            namaMentor={nama_mentor_1}
            wa={wa_mentor_1}
            hp={hp_mentor_1}
            line={line_mentor_1}
            ig={instagram_mentor_1}
            prodi={prodi_mentor_1}
            fakultas={fakultas_mentor_1}
          />
        </div>
        <div className="box-mentor mentor2">
          <MentorBox
            num={2}
            namaMentor={nama_mentor_2}
            wa={wa_mentor_2}
            hp={hp_mentor_2}
            line={line_mentor_2}
            ig={instagram_mentor_2}
            prodi={prodi_mentor_2}
            fakultas={fakultas_mentor_2}
            gender="wanita"
          />
        </div>
      </div>
    </div>
  );
};

const Kelompok = () => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [isLine, setIsLine] = React.useState(false);

  const [data, setData] = React.useState({ statusCode: 404, object: {} });

  const refInp = React.useRef();

  const getData = async (e) => {
    e.preventDefault();
    const link = isLine
      ? 'https://temporer.xyz/api/dapatkanMentorPakaiLine/'
      : 'https://temporer.xyz/api/dapatkanMentor/';
    await axios
      .get(`${link}${refInp.current.value}`)
      .then((d) => {
        setData({ statusCode: d.data.code, object: d.data.object });
      })
      .catch((err) => {
        setData({ statusCode: 404, object: {} });
        window.alert('Data Tidak Ditemukan');
        throw err;
      });
  };

  return (
    <>
      <img
        className="bg-base-mobile"
        src="./assets/image/mobile/bg-kelompok.svg"
      ></img>
      <Hamburger setShowOverlay={setShowOverlay} />
      <div className={`overlay ${showOverlay ? 'show-overlay' : ''}`}>
        <div className="logo-wrapper">
          <img
            src="./assets/image/ornament/logo-okk.png"
            alt="okk ui 2021"
            className="logo-overlay"
          />
        </div>
        <div>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="misi1.html">Misi</a>
            </li>
            <li>
              <a href="kelompok.html">Kelompok</a>
            </li>
            <li>
              <a href="tentang.html">Tentang</a>
            </li>
            <li>
              <a href="kontak.html">Kontak</a>
            </li>
          </ul>
        </div>
        <button className="close-btn" onClick={() => setShowOverlay(false)}>
          TUTUP
        </button>
      </div>
      <div onClick={() => setShowOverlay(false)}>
        <div className="kelompok">
          <nav>
            <ul>
              <li className="menu menu-border-right">
                <a href="index.html">Home</a>
              </li>
              <li className="menu menu-border-right">
                <a href="misi1.html">Misi</a>
              </li>
              <li className="menu menu-border-right">
                <a href="kelompok.html">Kelompok</a>
              </li>
              <li className="menu menu-border-right">
                <a href="tentang.html">Tentang</a>
              </li>
              <li className="menu">
                <a href="kontak.html">Kontak</a>
              </li>
            </ul>
          </nav>
          <div className="kelompok-container">
            <div className="cek-kelompok-left">
              <div className="cek-kelompok">
                <div className="title">
                  <p>Cek Kelompokmu!</p>
                </div>
                <div className="search">
                  <form onSubmit={getData}>
                    {isLine ? (
                      <input
                        type="text"
                        ref={refInp}
                        placeholder="Masukkan ID LINE"
                      />
                    ) : (
                      <input
                        type="number"
                        ref={refInp}
                        placeholder="Masukkan NPM"
                      />
                    )}
                    <button>
                      <SearchSVG />
                    </button>
                  </form>
                </div>
              </div>
              <div
                className="toggle-search"
                onClick={() => {
                  setIsLine((prev) => !prev);
                  setData({ statusCode: 404, object: {} });
                }}
              >
                <p>
                  <a>
                    {isLine
                      ? 'Cari Berdasarkan NPM'
                      : 'Cari Berdasarkan ID LINE'}
                  </a>
                </p>
              </div>
              <div className="back">
                <p>
                  <a href="index.html">&#60; Kembali ke Halaman Utama</a>
                </p>
              </div>
            </div>
            <div className="cek-kelompok-right">
              {data.statusCode === 200 && data.object.nama && (
                <Mentor {...data.object} />
              )}
            </div>
          </div>
        </div>

        <div className="sponsor-media-bg"></div>
        <div className="sponsor-media">
          <img
            src="./assets/image/ornament/gelombang.svg"
            className="gelombang ada-mentor"
          />
          <div className="sponsor-media-wrapper">
            <div className="sponsor">
              <p>Disponsori Oleh</p>
            </div>
            <div className="media">
              <p>Rekan Media</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="wrapper1 section-footer">
        <div className="contact-footer">
          <div className="contact-footer-content">
            <div className="social-media">
              <div className="social-media-side">
                <div className="contact-div">
                  <h3>Linimasa:</h3>
                </div>
                <div className="contact-div">
                  <a href="https://liff.line.me/1645278921-kWRPP32q?accountId=okkui&openerPlatform=native&openerKey=home%3Arecommend#mst_challenge=m-gye6CtYl1DdKZEzBpBovW-k5y_HQRuZsYKXNCeFOU">
                    <img
                      class="contact-icon contact-line"
                      src="https://img.icons8.com/windows/500/ffffff/line-me.png"
                    />
                    <h4>@okkui</h4>
                  </a>
                </div>
                <div className="contact-div">
                  <a href="https://instagram.com/okk_ui?">
                    <i class="contact-icon bx bxl-instagram"></i>
                    <h4>@okk_ui</h4>
                  </a>
                </div>
                <div className="contact-div">
                  <a href="https://twitter.com/okk_ui?s=21">
                    <i class="contact-icon bx bxl-twitter"></i>
                    <h4>@OKK_UI</h4>
                  </a>
                </div>
              </div>
              <div className="social-media-side">
                <div className="contact-div">
                  <a href="https://www.facebook.com/pages/category/College---University/OKK-UI-1667380366904251/">
                    <i class="contact-icon bx bxl-facebook-square"></i>
                    <h4>OKK UI</h4>
                  </a>
                </div>

                <div className="contact-div">
                  <a href="https://vt.tiktok.com/ZSJqjqN8E/">
                    <img
                      class="contact-icon contact-line"
                      src="https://img.icons8.com/ios-filled/50/ffffff/tiktok--v1.png"
                    />
                    <h4>@okk_ui</h4>
                  </a>
                </div>

                {/* <div className="contact-div" style="width: 40vw"> */}
                <div className="contact-div cdy">
                  <a href="https://youtube.com/channel/UCKHfpWWWmXznpsiTswayd0g">
                    <img
                      class="contact-icon contact-line"
                      src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                    />
                    <h4>OKK Universitas Indonesia</h4>
                  </a>
                  {/* <h4 style="width: 100%">OKK Universitas Indonesia</h4> */}
                </div>
              </div>
            </div>
            <div className="contact-person">
              <h4>Rayyan | (085711383842)</h4>
              <h4>Aurel | (085776962014)</h4>
              <h4>Baihaqi | (082115790702)</h4>
              <hr />
            </div>
          </div>
          <div className="contact-footer-content"></div>
          <div className="contact-footer-content">
            <div className="tagline-wrap">
              <div>
                <h4>#OKKUI2021</h4>
              </div>
              <div>
                <h4>#RagamGelora</h4>
              </div>
              <hr className="hr-styled" />
              <div>
                <h4>OKK UI 2021</h4>
              </div>
              <div>
                <h4>Bersama Merajut Cita</h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
