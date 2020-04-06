import Link from 'next/link';

const Header = () => (
  <header className="header">
    <div className="row">
      <div className="col-lg-60 col-md-60 col-sm-60">
        <Link href="/" scroll={false}>
          <h1 className="logo">
            Chipi Chipi
          </h1>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;