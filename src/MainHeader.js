import React, { useState } from "react";
import style from "./MainHeader.module.css";
//import MainNav from "../MainNav/MainNav";
import MainNav from "./MainNav";
// import Logo from "./images/logo.svg";
//import DownArrow from "../SVGIcons/DownArrow";
import { Link } from "@reach/router";
// import CloseThick from "../SVGIcons/CloseThick";
import { useMediaQuery } from "react-responsive";

//const title = "U.S. Bank SinglePoint";

const MainHeader = props => {
  const { userName = "Test User" } = props; // will be retrived from store
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const initialState = {
    showMenu: false,
    showMobileMenuBar: false,
    MobileHeader: true
  };
  const [state, setState] = useState(initialState);

  const renderMenu = () => {
    return (
      <div className="DropdownMenu">
        <div className={style["nav-dropdown"]}>
          <div>
            <ul>
              <li>Home</li>
              <li>Menu Item 1</li>
              <li>Menu Item 1</li>
              <li>Menu Item 1</li>
              <li>Menu Item 1</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Settings</li>
              <li>
                <Link to="/logout">Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const handleMainMenuClick = () => {
    setState({
      ...state,
      MobileHeader: true,
      showMobileMenuBar: false
    });
  };
  const renderSubMenuLink = () => {
    const { showMenu } = state;
    return (
      <>
        <span
          onClick={() => setState({ ...state, showMenu: !showMenu })}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={showMenu}
        >
          {userName}
        </span>
        {/* <DownArrow
          fill={"#ffffff"}
          width={20}
          height={20}
          viewBox="0 0 20 20"
          aria-labelledby={"Dropdown arrow"}
        /> */}
      </>
    );
  };

  const renderSubMenuBar = () => {
    const { MobileHeader } = state;
    return isMobile ? (
      MobileHeader && (
        <div className={style.MobileHeader}>
          <span className={style.MobileMenu}>
            <div
              onClick={() =>
                setState({
                  ...state,
                  showMobileMenuBar: true,
                  MobileHeader: false
                })
              }
            >
              <hr className={style.menuLine} />
              <hr className={style.menuLine} />
              <hr className={style.menuLine} />
            </div>
            {/* <img className={style.MobileLogo} src={Logo} alt={title} /> */}
          </span>
        </div>
      )
    ) : (
      <div className={style.Heading}>
        {/* <img className={style.Logo} src={Logo} alt={title} /> */}
      </div>
    );
  };

  const render = () => {
    const { showMenu, showMobileMenuBar } = state;
    return (
      <div>
        <header
          role="banner"
          className={isMobile ? style.MobileMainHeader : style.MainHeader}
        >
          {renderSubMenuBar()}
          <div
            className={
              isMobile
                ? showMobileMenuBar
                  ? style.mobileMenuData
                  : style.hidden
                : ""
            }
          >
            <div
              className={style.mobileMenuBarCloseIcon}
              onClick={() =>
                setState({
                  ...state,
                  MobileHeader: true,
                  showMobileMenuBar: false
                })
              }
            >
              {/* <CloseThick
                fill={"#ffffff"}
                width={40}
                height={40}
                viewBox="0 0 30 30"
                onClick={() =>
                  setState({
                    ...state,
                    MobileHeader: true,
                    showMobileMenuBar: false
                  })
                }
              /> */}
            </div>
            <div
              className={isMobile ? style.MobileLoginDetail : style.LoginName}
            >
              <p>Welcome,</p>
              <div
                className={isMobile ? style.mobileRightNav : style.rightNav}
                onClick={() => setState({ ...state, showMenu: !showMenu })}
              >
                {isMobile ? (
                  <div>{renderSubMenuLink()}</div>
                ) : (
                  renderSubMenuLink()
                )}
                {showMenu && renderMenu()}
              </div>
            </div>
            <MainNav
              {...props}
              handleMainMenuClick={() => handleMainMenuClick()}
            />
          </div>
        </header>
      </div>
    );
  };
  return render();
};
export default MainHeader;
