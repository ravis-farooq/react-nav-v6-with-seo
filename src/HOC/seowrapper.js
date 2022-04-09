import React from "react";

const Seowrapper = (meta) => (Component) => (props) => {
  document.title = meta?.title;
  document.head.children.description.content = meta?.description;

  return <Component {...props} />;
};

export default Seowrapper;
