import React from "react";
import { 
  CertificateWrapper, 
  CertificateItem, 
  CertificateTitle, 
  CertificateImage, 
  CertificateImageWrapper,
  CertificateHeading 
} from "./certificateElements";

const Certificates = () => {
  const certificateData = [
    {
      title: "MongoDB Certified Database Administrator",
      img: "/assets/images/mongo.jpg",
    },
    {
      title: "Introduction to Artificial Intelligence by IBM",
      img: "/assets/images/certificate02.jpg",
    },
    {
      title: "Foundation of UX Design by Coursera",
      img: "/assets/images/certificate03.jpg",
    },
    {
      title: "Multicloud Network Associate",
      img: "/assets/images/MultiCloudNetwork.newlogo20251013-32-sb51mr_page-0001.jpg",
    },
    {
      title: "Frontend Developer (React) by Hackerrank",
      img: "/assets/images/certificate05.jpg",
    },
    {
      title: "Introduction to AWS Identity and Access Management by AWS",
      img: "/assets/images/certificate06.jpg",
    },
    {
      title: "Salesforce AI Associate Certification by Salesforce",
      img: "/assets/images/associate.jpg",
    },
    {
      title: "Cloud Infrastructure 2025 Certified Generative AI Professional",
      img: "/assets/images/oracle.jpg",
    },
  ];

  return (
    <CertificateWrapper>
      <CertificateHeading>My Certificates</CertificateHeading>
      {certificateData.map((certificate, index) => (
        <CertificateItem key={index} index={index}>
          <CertificateImageWrapper>
            <CertificateImage src={certificate.img} alt={certificate.title} />
          </CertificateImageWrapper>
          <CertificateTitle>{certificate.title}</CertificateTitle>
        </CertificateItem>
      ))}
    </CertificateWrapper>
  );
};

export default Certificates;
