"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../@/components/ui/tooltip";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [user, setUser] = useState({
    isLoggedIn: true,
    profilePicture: "",
  });

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/" passHref>
            Golden Vault
          </Link>
        </h1>
        <ul className={styles.menu}>
          <li>
            <Link className={styles.navLink} href="/campaigns" passHref>
              Campaigns
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/about" passHref>
              About Us
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/contact" passHref>
              Contact
            </Link>
          </li>
          {user.isLoggedIn ? (
            <li className="relative">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className="flex items-center cursor-pointer"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    >
                      <img
                        src={
                          user.profilePicture ||
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                        }
                        alt="Profile"
                        className="h-8 w-8 rounded-full mr-2"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    style={{ backgroundColor: "#1a202c", padding: "1rem" }}
                  >
                    <ul>
                      <li>
                        <Link href="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link href="/dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link href="/logout">Logout</Link>
                      </li>
                    </ul>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ) : (
            <li>
              <Link className={styles.navLink} href="/login" passHref>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
