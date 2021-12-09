import React from "react";
import { Nav, Logo, NavMenu, UserImg } from "./HeaderStyle";
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="logo"></Logo>
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search-icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="original-icon" />
          <span>ORIGIONALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="movies-icon" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="series-icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/pnayak.jpg" />
    </Nav>
  );
}

export default Header;
