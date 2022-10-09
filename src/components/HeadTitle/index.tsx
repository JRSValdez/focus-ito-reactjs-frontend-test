import React from "react";
import { Helmet } from "react-helmet";

interface HeadTitleProps {
  pageName: string;
}

const HeadTitle = ({ pageName }: HeadTitleProps) => {
  return (
    <Helmet>
      <title>
        {process.env.REACT_APP_TITLE} - {pageName}
      </title>
    </Helmet>
  );
};

export default HeadTitle;
