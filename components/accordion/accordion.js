import React, { useState } from 'react';

export const Accordion = () => {
  let [item1, setItem1] = useState('closed');
  let [item2, setItem2] = useState('closed');
  let [item3, setItem3] = useState('closed');
  let [item4, setItem4] = useState('closed');

  const handleOnClickDiningOpen = () => {
    setItem1('open');
  };
  const handleOnClickDiningClose = () => {
    setItem1('closed');
  };

  const handleOnClickGroomingOpen = () => {
    setItem2('open');
  };
  const handleOnClickGroomingClose = () => {
    setItem2('closed');
  };

  const handleOnClickPlayOpen = () => {
    setItem3('open');
  };
  const handleOnClickPlayClose = () => {
    setItem3('closed');
  };

  const handleOnClickPhotoOpen = () => {
    setItem4('open');
  };
  const handleOnClickPhotoClose = () => {
    setItem4('closed');
  };

  return (
    <div className="accordion">
      <div className="accordion-container">
        <div className="accordion-col-one">
          <h3>Pamper your cat to Purrrrrrrrrrrfection</h3>
          <div className="accordion-holder">
            <div
              className={`accordion-heading accordion-heading--${item1}`}
              onClick={handleOnClickDiningOpen}
            >
              <span>Dining</span>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="plus-icon"
                  role="button"
                >
                  <label id="plus-icon">
                    plus symbol to toggle open accordion item
                  </label>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.7813 6.5835e-07C8.19551 0.000543537 8.53085 0.33677 8.53031 0.750983L8.51196 14.751C8.51142 15.1652 8.17519 15.5005 7.76098 15.5C7.34677 15.4995 7.01142 15.1632 7.01196 14.749L7.03031 0.749017C7.03086 0.334804 7.36708 -0.00054228 7.7813 6.5835e-07Z"
                    fill="#0B5841"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7.75C0 7.33579 0.335786 7 0.75 7H14.75C15.1642 7 15.5 7.33579 15.5 7.75C15.5 8.16421 15.1642 8.5 14.75 8.5H0.75C0.335786 8.5 0 8.16421 0 7.75Z"
                    fill="#0B5841"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`accordion-text--${item1} ${item1}`}
              onClick={handleOnClickDiningClose}
            >
              <div>
                <span>Dining</span>
                <div>
                  <svg
                    width="16"
                    height="2"
                    viewBox="0 0 16 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-labelledby="minus-icon"
                    role="button"
                  >
                    <label id="minus-icon">
                      Minus icon to close accordion item
                    </label>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0.75C0 0.335786 0.335786 0 0.75 0H14.75C15.1642 0 15.5 0.335786 15.5 0.75C15.5 1.16421 15.1642 1.5 14.75 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <span>
                [Dining] Grooming services include professional bathing,
                brush-outs, nail trims, ear cleaning, and even fur styling. The
                resort also offers spa services such as massages, facials, and
                aromatherapy treatments to pamper the cats. Grooming and spa
                services are designed to enhance the cat's physical appearance
                and overall well-being. Additionally, the resort provides
                personalized grooming services tailored to the specific needs of
                each cat, such as specialized shampoos for sensitive skin or
                hypoallergenic grooming products for cats with allergies. With
                professional grooming services, cats can look and feel their
                best during their stay at the luxury cat resort.",
              </span>
            </div>
            <div
              className={`accordion-heading accordion-heading--${item2}`}
              onClick={handleOnClickGroomingOpen}
            >
              <span>Grooming and Spa Services</span>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="plus-icon"
                  role="button"
                >
                  <label id="plus-icon">
                    plus symbol to toggle open accordion item
                  </label>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.7813 6.5835e-07C8.19551 0.000543537 8.53085 0.33677 8.53031 0.750983L8.51196 14.751C8.51142 15.1652 8.17519 15.5005 7.76098 15.5C7.34677 15.4995 7.01142 15.1632 7.01196 14.749L7.03031 0.749017C7.03086 0.334804 7.36708 -0.00054228 7.7813 6.5835e-07Z"
                    fill="#0B5841"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7.75C0 7.33579 0.335786 7 0.75 7H14.75C15.1642 7 15.5 7.33579 15.5 7.75C15.5 8.16421 15.1642 8.5 14.75 8.5H0.75C0.335786 8.5 0 8.16421 0 7.75Z"
                    fill="#0B5841"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`accordion-text--${item2}`}
              onClick={handleOnClickGroomingClose}
            >
              <div>
                <span>Grooming and Spa Services</span>
                <div>
                  <svg
                    width="16"
                    height="2"
                    viewBox="0 0 16 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-labelledby="minus-icon"
                    role="button"
                  >
                    <label id="minus-icon">
                      Minus icon to close accordion item
                    </label>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0.75C0 0.335786 0.335786 0 0.75 0H14.75C15.1642 0 15.5 0.335786 15.5 0.75C15.5 1.16421 15.1642 1.5 14.75 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <span>
                [Grooming and Spa Services] Grooming services include
                professional bathing, brush-outs, nail trims, ear cleaning, and
                even fur styling. The resort also offers spa services such as
                massages, facials, and aromatherapy treatments to pamper the
                cats. Grooming and spa services are designed to enhance the
                cat's physical appearance and overall well-being. Additionally,
                the resort provides personalized grooming services tailored to
                the specific needs of each cat, such as specialized shampoos for
                sensitive skin or hypoallergenic grooming products for cats with
                allergies. With professional grooming services, cats can look
                and feel their best during their stay at the luxury cat
                resort.",
              </span>
            </div>
            <div
              className={`accordion-heading accordion-heading--${item3}`}
              onClick={handleOnClickPlayOpen}
            >
              <span>Playtime and Enrichment</span>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="plus-icon"
                  role="button"
                >
                  <label id="plus-icon">
                    plus symbol to toggle open accordion item
                  </label>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.7813 6.5835e-07C8.19551 0.000543537 8.53085 0.33677 8.53031 0.750983L8.51196 14.751C8.51142 15.1652 8.17519 15.5005 7.76098 15.5C7.34677 15.4995 7.01142 15.1632 7.01196 14.749L7.03031 0.749017C7.03086 0.334804 7.36708 -0.00054228 7.7813 6.5835e-07Z"
                    fill="#0B5841"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7.75C0 7.33579 0.335786 7 0.75 7H14.75C15.1642 7 15.5 7.33579 15.5 7.75C15.5 8.16421 15.1642 8.5 14.75 8.5H0.75C0.335786 8.5 0 8.16421 0 7.75Z"
                    fill="#0B5841"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`accordion-text--${item3}`}
              onClick={handleOnClickPlayClose}
            >
              <div>
                <span>Playtime and Enrichment</span>
                <div>
                  <svg
                    width="16"
                    height="2"
                    viewBox="0 0 16 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-labelledby="minus-icon"
                    role="button"
                  >
                    <label id="minus-icon">
                      Minus icon to close accordion item
                    </label>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0.75C0 0.335786 0.335786 0 0.75 0H14.75C15.1642 0 15.5 0.335786 15.5 0.75C15.5 1.16421 15.1642 1.5 14.75 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <span>
                [Playtime and Enrichment] Grooming services include professional
                bathing, brush-outs, nail trims, ear cleaning, and even fur
                styling. The resort also offers spa services such as massages,
                facials, and aromatherapy treatments to pamper the cats.
                Grooming and spa services are designed to enhance the cat's
                physical appearance and overall well-being. Additionally, the
                resort provides personalized grooming services tailored to the
                specific needs of each cat, such as specialized shampoos for
                sensitive skin or hypoallergenic grooming products for cats with
                allergies. With professional grooming services, cats can look
                and feel their best during their stay at the luxury cat
                resort.",
              </span>
            </div>
            <div
              className={`accordion-heading accordion-heading--${item4}`}
              onClick={handleOnClickPhotoOpen}
            >
              <span>Pet Photography and Social Media</span>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="plus-icon"
                  role="button"
                >
                  <label id="plus-icon">
                    plus symbol to toggle open accordion item
                  </label>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.7813 6.5835e-07C8.19551 0.000543537 8.53085 0.33677 8.53031 0.750983L8.51196 14.751C8.51142 15.1652 8.17519 15.5005 7.76098 15.5C7.34677 15.4995 7.01142 15.1632 7.01196 14.749L7.03031 0.749017C7.03086 0.334804 7.36708 -0.00054228 7.7813 6.5835e-07Z"
                    fill="#0B5841"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7.75C0 7.33579 0.335786 7 0.75 7H14.75C15.1642 7 15.5 7.33579 15.5 7.75C15.5 8.16421 15.1642 8.5 14.75 8.5H0.75C0.335786 8.5 0 8.16421 0 7.75Z"
                    fill="#0B5841"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`accordion-text--${item4}`}
              onClick={handleOnClickPhotoClose}
            >
              <div>
                <span>Pet Photography and Social Media</span>
                <div>
                  <svg
                    width="16"
                    height="2"
                    viewBox="0 0 16 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-labelledby="minus-icon"
                    role="button"
                  >
                    <label id="minus-icon">
                      Minus icon to close accordion item
                    </label>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0.75C0 0.335786 0.335786 0 0.75 0H14.75C15.1642 0 15.5 0.335786 15.5 0.75C15.5 1.16421 15.1642 1.5 14.75 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <span>
                [Pet Photography and Social Media] Grooming services include
                professional bathing, brush-outs, nail trims, ear cleaning, and
                even fur styling. The resort also offers spa services such as
                massages, facials, and aromatherapy treatments to pamper the
                cats. Grooming and spa services are designed to enhance the
                cat's physical appearance and overall well-being. Additionally,
                the resort provides personalized grooming services tailored to
                the specific needs of each cat, such as specialized shampoos for
                sensitive skin or hypoallergenic grooming products for cats with
                allergies. With professional grooming services, cats can look
                and feel their best during their stay at the luxury cat
                resort.",
              </span>
            </div>
          </div>
        </div>
        <div className="accordion-col-two">
          <img
            src="/Pamper-1.png"
            className="accordion-col-two--img"
            alt="headshot of cat licking paw"
          />
        </div>
      </div>
    </div>
  );
};
