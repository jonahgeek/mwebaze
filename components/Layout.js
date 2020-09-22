import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Sun, Moon } from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";

import { currentDayName } from "../utils/dateUtils";

import BlackLivesMatter from "./BlackLivesMatter";

const menu = [
  {
    path: "/",
    name: "🤓 Home",
  },
  {
    path: "/projects",
    name: "🚧 Projects",
  },
  {
    path: "/library",
    name: "📙 Library",
  },
  {
    path: "/writings",
    name: "✍️ Writings",
  },
];
const SHORTCUTS = ["Digit0", "Digit1", "Digit2"];
const avatar = `https://instagram.fnbo1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119135052_355960015438592_1138365578079527408_n.jpg?_nc_ht=instagram.fnbo1-1.fna.fbcdn.net&_nc_ohc=-VnYDWvWsVkAX_Y9vQa&oh=5b12507ed18245afdc7e13a8f5d41bcd&oe=5F93CBC2`;
const SALUTS = ["Hi, I'm Jonathan"];

function Layout({ children, isHomepage, secondaryPage }) {
  const router = useRouter();
  const onLoadTheme =
    typeof localStorage !== "undefined" && localStorage.getItem("BLOG_THEME");
  const [theme, setTheme] = useState(onLoadTheme);
  const [mounted, setMounted] = useState(false);
  const [salut] = useState(SALUTS[Math.floor(Math.random() * SALUTS.length)]);
  const switchTheme = () => {
    const setTo = theme === "dark" ? "light" : "dark";

    setTheme(setTo);
  };

  function triggerShortcut(e) {
    if (SHORTCUTS.includes(e.code)) {
      // Split code to get only the number
      const code = e.code.split("t")[1];

      // Get route from menu
      const { path } = menu[code];

      router.push(path);
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", triggerShortcut);

    if (onLoadTheme) return;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("BLOG_THEME", theme);

    setMounted(true);
  }, [theme]);

  const containerProps = {
    ...(isHomepage && { md: 12 }),
    ...(!isHomepage && { md: 8, mdOffset: 2 }),
  };

  if (!mounted) return <div />;

  return (
    <>
      <BlackLivesMatter />

      <div className="top-menu">
        <Row>
          <Col xsOffset={8} xs={4}>
            <ul>
              {/* <li className="logo">
                <Link href="/" as="/">
                  <a>
                    <img src={avatar} />
                  </a>
                </Link>
              </li> */}

              {menu.map(({ path, name }) => (
                <li key={name}>
                  <Link href={path} as={path}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={2} style={{ textAlign: "right" }}>
            <button
              className="theme-switch-button"
              onClick={() => switchTheme()}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </Col>
        </Row>
      </div>

      <Grid>
        <Row>
          <Col {...containerProps}>
            {!secondaryPage && (
              <div style={{ textAlign: "center" }}>
                <h1 className="blog-title">{salut}</h1>

                <p className="entry-description">
                  Just another code & designer.
                </p>
              </div>
            )}

            {children}
          </Col>
        </Row>
      </Grid>

      <footer>
        <div>
          Good<em>Vibes</em>. 🤘{" "}
          <a href="https://twitter.com/jonahgeek">Jonahgeek</a>{" "}
        </div>
        <div>&copy; {new Date().getFullYear()}</div>
      </footer>
    </>
  );
}

export default Layout;
