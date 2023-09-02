import React from "react";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  const socialSize = { height: 40, width: 40 };
  return (
    <footer className="py-6">
      <div className="container px-6 mx-auto space-y-6  md:space-y-12">
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2023 A project By JordyV23</span>
            </div>
            <SocialIcon
              url="https://twitter.com/Jordy_Dev23"
              network="twitter"
              className="flex items-center justify-center rounded-full"
              style={socialSize}
            />

            <SocialIcon
              url="https://github.com/JordyV23"
              network="github"
              className="flex items-center justify-center rounded-full"
              style={socialSize}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
