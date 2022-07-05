import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
//import './app-assets/vendors/css/vendors.min.css'
import './app-assets/css/bootstrap.css'
import './app-assets/css/bootstrap-extended.css'
import './app-assets/css/colors.css'
import './app-assets/css/components.css'
import './app-assets/css/themes/dark-layout.css'
import './app-assets/css/themes/bordered-layout.css'
import './app-assets/css/themes/semi-dark-layout.css'
import './app-assets/css/core/menu/menu-types/vertical-menu.css'
import './app-assets/css/plugins/forms/form-validation.css'

function App() {
  return (
    <div className="App">
      <div className="connexion">
          <body className="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  "
                data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
          <div className="app-content content">
              <div className="content-overlay"></div>
              <div className="header-navbar-shadow"></div>
              <div className="content-wrapper">
                  <div className="content-header row">
                  </div>
                  <div className="content-body">
                      <div className="auth-wrapper auth-cover">
                          <div className="auth-inner row m-0">
                              <a className="brand-logo" href="index.php">
                              <h2 className="brand-text text-primary ms-1">EMob' Service</h2>
                          </a>
                              <div className="d-none d-lg-flex col-lg-8 align-items-center p-5">
                                  <div className="w-100 d-lg-flex align-items-center justify-content-center px-5"><img
                                      className="img-fluid" src="./app-assets/images/pages/login-v2.svg" alt="Login V2"/>
                                  </div>
                              </div>
                              <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                                  <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                                      <h2 className="card-title fw-bold mb-1">Bienvenue sur EMob' Service 👋</h2>
                                      <p className="card-text mb-2">Pour vous connecter, veuillez créer un compte sur <a
                                          href="https://easy-mobilier.com/" target="_blank">easy-mobilier</a></p>
                                      <form className="auth-login-form mt-2" action="" method="POST">
                                          <div className="mb-1">
                                              <label className="form-label" htmlFor="login-email">Email</label>
                                              <input className="form-control" id="login" type="text" name="login"
                                                     placeholder="john@exemple.com" aria-describedby="login"
                                                     autoFocus="" tabIndex="1"/>
                                          </div>
                                          <div className="mb-1">
                                              <div className="d-flex justify-content-between">
                                                  <label className="form-label" htmlFor="login-password">Mot de
                                                      passe</label><a
                                                  href="https://easy-mobilier.com/my-account/lost-password/"><small>Mot
                                                  de passe oublié ?</small></a>
                                              </div>
                                              <div className="input-group input-group-merge form-password-toggle">
                                                  <input className="form-control form-control-merge" id="login-password"
                                                         type="password" name="login-password"
                                                         placeholder="············" aria-describedby="login-password"
                                                         tabIndex="2"/><span
                                                  className="input-group-text cursor-pointer"><i data-feather="eye"></i></span>

                                              </div>
                                              <div></div>
                                          </div>
                                          <div className="mb-1">
                                              <div className="form-check">
                                                  <input className="form-check-input" id="remember-me" type="checkbox"
                                                         tabIndex="3"/>
                                                  <label className="form-check-label" htmlFor="remember-me"> Se souvenir
                                                      de moi</label>
                                              </div>
                                          </div>
                                          <button className="btn btn-primary w-100" tabIndex="4">SE CONNECTER</button>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <script src="app-assets/vendors/js/vendors.min.js"></script>
          <script src="app-assets/vendors/js/forms/validation/jquery.validate.min.js"></script>
          <script src="app-assets/js/core/app-menu.js"></script>
          <script src="app-assets/js/scripts/pages/auth-login.js"></script>
          </body>

      </div>
    </div>
  );
}

export default App;
