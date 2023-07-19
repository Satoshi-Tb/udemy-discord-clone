import "./Sidvar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="../../assets/react.svg" alt="イメージ" />
        </div>
        <div className="serverIcon">
          <img src="../../assets/react.svg" alt="イメージ" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
