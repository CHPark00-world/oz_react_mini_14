import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState, useRef } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="logo">새싹 영화관 🌱</div>
      <div className="search-bar">
        <input
          value={search}
          onChange={onChangeSearch}
          type="text"
          placeholder="영화 검색..."
        />
      </div>
      <div className="auth-buttons">
        <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
