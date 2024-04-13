export default function Nav() {
  return (
    <nav className="container navbar navbar-expand-md">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Emily Hanni
        </a>
        {/* mobile button */}
        <button
          className="d-block d-md-none"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* main nav selections */}
        <div className="d-none d-md-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Work
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/commercial">
                    Commercial
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/residential">
                    Residential
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Model units
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
