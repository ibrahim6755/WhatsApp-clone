// Navbar.tsx
"use client";

import Link from "next/link";
import {
  MessageSquare,
  Phone,
  Camera,
  Users,
  Settings,
  Search,
  MoreVertical,
} from "lucide-react";
import { useRef, useState } from "react";
// import Webcam from "react-webcam";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  // const webcamRef = useRef<Webcam>(null);
  // const [error, setError] = useState<string | null>(null);

  // const startCamera = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //     if (webcamRef.current) {
  //       const video = webcamRef.current.video as HTMLVideoElement;
  //       video.srcObject = stream;
  //     }
  //   } catch (error) {
  //     console.error("Error accessing camera:", error);
  //     setError(
  //       "Error accessing camera. Please make sure your camera is connected and permissions are granted."
  //     );
  //   }
  // };

  return (
    <nav className=" custom_bg_green text-white p-4 pb-0">
      <div className="primary-nav flex items-center justify-between">
        <div className="logo">
          <h5 className="text-lg tracking-wide"> WhatsApp</h5>
        </div>
        <div className="links flex items-center">
          <Link href="/groups " className="mx-5">
            <Camera className="text-2xl" />
          </Link>
          <Link href="/groups " className="mx-5">
            <Search className="text-2xl" />
          </Link>
          <Link href="/settings " className="m-0">
            <MoreVertical className="text-2xl" />
          </Link>
        </div>
      </div>

      <div className="secondary-nav mt-8">
        <ul className="flex justify-between">
          <li
            className={`mr-4 ${
              activeLink === "users" ? "pb-2 border-b-2 border-white" : ""
            }`}
          >
            <Link
              href="#"
              className="text-white"
              onClick={() => handleLinkClick("users")}
            >
              <Users />
            </Link>
          </li>
          <li
            className={`mr-4 ${
              activeLink === "chats" ? "pb-2 border-b-2 border-white" : ""
            }`}
          >
            <Link
              href="#"
              className="text-white"
              onClick={() => handleLinkClick("chats")}
            >
              Chats{" "}
              <span className=" bg-white p-1 text-xs m-1 rounded-full custom_text-green">
                1
              </span>
            </Link>
          </li>
          <li
            className={`mr-4 ${
              activeLink === "status" ? "pb-2 border-b-2 border-white" : ""
            }`}
          >
            <Link
              href="#"
              className="text-white"
              onClick={() => handleLinkClick("status")}
            >
              Status
            </Link>
          </li>
          <li
            className={`${
              activeLink === "calls" ? "pb-2 border-b-2 border-white" : ""
            }`}
          >
            <Link
              href="#"
              className="text-white"
              onClick={() => handleLinkClick("calls")}
            >
              Calls
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
