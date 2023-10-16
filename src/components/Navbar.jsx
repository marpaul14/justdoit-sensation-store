import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={logo} alt="logo/img" className="" />
          </div>
          <ul>
            <li>
              <MagnifyingGlassIcon className="icon-style" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
