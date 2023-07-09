import React from "react";
import "../styles/styles.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="links">
        <div className="navOne">
          <ul className="navbar-nav">
            <a className="navbar-brand">stripe</a>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
              <div className="dropdown">
                <ul>
                  <li>
                    <b>Global payments</b> <br /> Accept payments online, in
                    person, <br /> or through your platform{" "}
                  </li>
                  <li>
                    <b>Revenue and Finance Automation</b> <br /> Grow your
                    business with automated <br />
                    revenue and finances{" "}
                  </li>
                  <li>
                    <b>Banking-as-a-service</b> <br />
                    Embed financial services in your <br /> platform or product{" "}
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Solutions
              </a>
              <div className="dropdown_2">
                <ul className="flex_ul">
                  <div>
                    <li>Enterprise</li>
                    <br />
                    <li>Sass</li>
                    <br />
                    <li>Market Places</li>
                    <br />
                    <li>Creator Economy</li>
                    <br />
                    <li>Finace Automation</li>
                    <span>
                      <p className="app">
                        <b>Integration and Custom solutions</b>
                      </p>
                      <li className="app">App Market-Place</li>
                      <li className="app">Professional Services</li>
                    </span>
                  </div>
                  <div>
                    <li>Platform</li>
                    <br />
                    <li>Ecommerce</li>
                    <br />
                    <li>Crypto</li>
                    <br />
                    <li>Embedded Finance</li>
                    <br />
                    <li>Global Businesses</li>
                    <span>
                      <li className="partner_eco">Partner Ecosystem</li>
                    </span>
                  </div>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Developers
              </a>
              <div className="dropdown_2">
                <ul className="flex_ul">
                  <div>
                    <li>
                      <b>GET STARTED</b>
                    </li>
                    <br />
                    <li>Prebuilt checkout</li>
                    <br />
                    <li>Libraries and SDKs</li>
                    <br />
                    <li>Plugins</li>
                    <br />
                    <li>Code samples</li>
                    <span>
                      <p className="app">
                        <b>Full API Reference</b>
                      </p>
                      <li className="app">API Status</li>
                    </span>
                  </div>
                  <div>
                    <li>
                      <b>GUIDES</b>
                    </li>
                    <br />
                    <li>Accept online payments</li>
                    <br />
                    <li>Manage subscriptions</li>
                    <br />
                    <li>Send payments</li>
                    <br />
                    <li>Set up in-person payments</li>
                    <br />
                    <span>
                      <li>
                        <b>API Changelog</b>
                      </li>
                      <br />
                      <li>
                        <b>Build a Stripe App</b>
                      </li>
                    </span>
                  </div>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
              </a>
              <div className="dropdown_4">
                <ul className="flex_ul">
                  <div>
                    <li>
                      <b>Support Center</b>
                    </li>
                    <br />
                    <li>
                      <b>Support Plans</b>
                    </li>
                    <br />
                    <li>
                      <b>Guides</b>
                    </li>
                    <br />
                    <li>
                      <b>Customer Stories</b>
                    </li>
                    <br />
                    {/* trial */}
                    <div className="grid_columns">
                      <div className="grid_item1">
                        <p>
                          <b>Jobs</b>
                        </p>
                        <li>
                          <b>Newsroom</b>
                        </li>
                      </div>
                      <div className="grid-item2">
                        <li>
                          <b>Stripes Press</b>
                        </li>
                        <br />
                        <li>
                          <b>Become a Partner</b>
                        </li>
                      </div>
                    </div>

                    {/* ----------- */}
                  </div>
                  <div>
                    <li>
                      <b>Blog</b>
                    </li>
                    <br />
                    <li>
                      <b>Annual Conference</b>
                    </li>
                    <br />
                    <li>
                      <b>Contact Sales</b>
                    </li>
                  </div>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="navTwo">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact sales
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
