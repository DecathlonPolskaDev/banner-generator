export const initialHTML = `<div class="banner-wrapper">
  <div class="content">
    Content
  </div>
  <footer>
    <div class="terms">*Regulamin promocji dostępny na decathlon.pl</div>
    <a
      href="https://www.decathlon.pl/"
    >
      Pobierz aplikację
    </a>
  </footer>
</div>`;

export const initialCSS = `.banner-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  color: #fff;
  background-color: #333;
  text-align: center;
}

.banner-wrapper .content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 385px;
}

.banner-wrapper footer {
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: 10px;
  position: relative;
  z-index: 10;
}

.banner-wrapper .terms {
  text-transform: uppercase;
}

.banner-wrapper footer a {
  display: block;
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  padding: 12px 20px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 700;
  color: #131313;
  text-decoration: none;
}

@media (max-width: 1000px) and (orientation: landscape) {
  .banner-wrapper .content .info {
    margin: 0 0 40px 35%;
  }
}

@media (min-width: 600px) {
  .banner-wrapper footer a {
    display: inline-block;
    width: unset;
    min-width: 345px;
    margin-bottom: 0;
  }
}

@media (min-width: 1000px) and (orientation: landscape) {
}`;
