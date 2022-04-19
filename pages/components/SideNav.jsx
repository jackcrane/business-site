import { useEffect, useState } from "react";
import styles from "../../styles/SideNav.module.css";
import Image from "next/image";

const SideNav = (props) => {
  const [pages, setPages] = useState([]);
  const [pagesReady, setPagesReady] = useState(false);
  useEffect(() => {
    (async () => {
      let f = await fetch("/api/pages");
      let pages = await f.json();
      console.log(pages);
      setPages(pages);
      setPagesReady(true);
    })();
  }, []);

  return (
    <nav className={styles.nav}>
      <Image src={require("../../public/logo.png")} alt="logo" />
      {pagesReady > 0 &&
        pages.map((page) => (
          <a href={page.uri} key={page._id} className={styles.link}>
            {page.title}
          </a>
        ))}
    </nav>
  );
};

export default SideNav;
