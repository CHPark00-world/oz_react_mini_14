import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-black text-white">
      <div className="text-[32px] font-bold text-blue-300">새싹 영화관 🌱</div>
      <div className="flex-1 max-w-[500px] mx-5">
        <div className="flex gap-2">
          <input
            className="w-full py-3 px-5 rounded-[25px] border-none bg-[#d3d3d3]"
            value={search}
            onChange={onChangeSearch}
            type="text"
            placeholder="영화 검색..."
          />
          <button className="w-[80px] outline-none bg-white text-red-500 rounded">
            검색
          </button>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <Link to="/login">
          <button className="py-2.5 px-5 border-none rounded=[5px] bg-[#6600ff] text-white cursor-pointer">
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button className="py-2.5 px-5 border-none rounded=[5px] bg-[#6600ff] text-white cursor-pointer">
            회원가입
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
