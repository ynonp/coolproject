import { NextPage } from "next";
import React from "react";
import { getPeople } from "@/services/people.service";

const Public: NextPage = async () => {
  const people = await getPeople();

  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        My Cool Project
      </h1>
      <div className="people">
        <ul>
        {people.map(user => (
          <li key={user.email}>{user.email}</li>
        ))}
        </ul>
        <hr />
      </div>
      <div className="content__body">
        <p id="page-description">
          <span>
            This page retrieves a <strong>public message</strong>.
          </span>
          <span>
            <strong>Any visitor can access this page.</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Public;
