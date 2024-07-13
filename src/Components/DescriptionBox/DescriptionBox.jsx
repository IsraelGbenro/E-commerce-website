import React from "react";
import "./DescriptionBox.css";

const DiscriptionBox = () => {
  
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box"> Description</div>
        <div className="descriptionbox-nav-box fade"> Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that allows businesses and
          individuals to buy and sell goods and services over the internet.
          These websites facilitate transactions between sellers and buyers,
          providing a convenient and efficient way to conduct business
          electronically. Key Features of E-commerce Websites Product Listings:
          Display of various products or services with details such as
          descriptions, prices, images, and specifications. Shopping Cart: A
          feature that allows customers to select and store items they wish to
          purchase before proceeding to checkout. Checkout Process: A series of
          steps where customers provide shipping information, choose payment
          methods, and confirm their orders. Payment Gateway Integration: Secure
          payment processing options that accept various payment methods like
          credit/debit cards, PayPal, bank transfers, etc. User Accounts:
          Features for customers to create and manage accounts, track orders,
          save payment methods, and maintain wish lists. Search Functionality: A
          tool for users to search for products using keywords, categories,
          filters, and sorting options. Security: Measures to protect sensitive
          information, such as SSL certificates, encryption, and compliance with
          security standards. Customer Support: Features like live chat, contact
          forms, FAQs, and customer service information to assist users with
          their queries. Mobile Responsiveness: Design that ensures the website
          functions well on various devices, including smartphones and tablets.
          Reviews and Ratings: Sections for customers to leave feedback and
          ratings on products and services, helping others make informed
          decisions.
        </p>

        <p>
          Types of E-commerce Websites Business-to-Consumer (B2C): Retail
          websites where businesses sell products or services directly to
          consumers. Examples include Amazon and Walmart. Business-to-Business
          (B2B): Platforms where businesses sell products or services to other
          businesses. Examples include Alibaba and ThomasNet.
          Consumer-to-Consumer (C2C): Websites that facilitate transactions
          between individual consumers. Examples include eBay and Craigslist.
          Consumer-to-Business (C2B): Platforms where individuals sell products
          or offer services to businesses. Examples include Upwork and Fiverr.
          Marketplace: Platforms that host multiple third-party sellers.
          Examples include Etsy and eBay.
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;
