import style from "./styles.module.css";

const Layout = ({ title, descr, urlBg, colorBg, children }) => {
  const layoutBg = {
    backgroundImage: urlBg && `url("${urlBg}")`,
    backgroundColor: colorBg,
  };
  return (
    <section className={style.root} style={layoutBg}>
      <div className={style.wrapper}>
        <article>
          <div className={style.title}>
            {title && <h3>{title}</h3>}
            <span className={style.separator}></span>
          </div>
          {children && (
            <div className={[style.desc, style.full].join(" ")}>{children}</div>
          )}
        </article>
      </div>
    </section>
  );
};

export default Layout;
