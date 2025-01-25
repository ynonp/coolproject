import { NextPage } from "next";
import React from "react";
import { CodeSnippet } from "@/components/code-snippet";

const Protected: NextPage = async () => {
  const text = "protected text";

  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Protected Page
      </h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            This page retrieves a <strong>protected message</strong>.
          </span>
          <span>
            <strong>Only authenticated users should access this page.</strong>
          </span>
        </p>
        <CodeSnippet title="Protected Message" code={text} />
      </div>
    </div>
  );
};

export default Protected;
