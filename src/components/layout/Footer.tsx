"use client";
import { useGetCategoriesQuery } from "@/store/api";
import { FooterContainer } from "@/styles/footer";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const { isLoading } = useGetCategoriesQuery();

  if (isLoading) return null;

  return (
    <FooterContainer>
      <span>
        Hecho con <span className="heart">❤</span> por Isabel Núñez
      </span>
      <a
        href="https://es.linkedin.com/in/isabelnu%C3%B1ez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" />
      </a>
      <a
        href="https://github.com/isawebcode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
      </a>
    </FooterContainer>
  );
}
