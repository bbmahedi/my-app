import React from "react";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide w-100"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              style={{
                background: `url(${`https://i.ibb.co/4p047Rz/Image.png`})`,
              }}
              className="banner-cover-left"
            >
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-6">
                    <p className="slider-title">Londres, Reino Unido</p>
                    <ul class="details">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M1.66699 2.16666H13.3337C14.905 2.16666 15.6907 2.16666 16.1788 2.65481C16.667 3.14296 16.667 3.92864 16.667 5.49999V10.5C16.667 12.0713 16.667 12.857 16.1788 13.3452C15.6907 13.8333 14.905 13.8333 13.3337 13.8333H7.50033"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.33301 5.91666H13.333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 14.6667V11.3333C1.66699 10.5477 1.66699 10.1548 1.91107 9.91074C2.15515 9.66666 2.54798 9.66666 3.33366 9.66666H5.00033M1.66699 14.6667H5.00033M1.66699 14.6667V18.8333M5.00033 9.66666V14.6667M5.00033 9.66666H7.50033H10.0003M5.00033 14.6667V18.8333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.00033 5.91667C5.00033 6.83714 4.25413 7.58333 3.33366 7.58333C2.41318 7.58333 1.66699 6.83714 1.66699 5.91667C1.66699 4.99619 2.41318 4.25 3.33366 4.25C4.25413 4.25 5.00033 4.99619 5.00033 5.91667Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                          />
                        </svg>
                        <span className="ml-4px">
                          4 Semanas de General English Afternoon (15H/W)
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M16.25 13.8333V10.5049C16.25 9.26624 16.25 8.64688 16.037 8.08002C15.824 7.51316 15.4162 7.04706 14.6005 6.11486L13.3333 4.66666H6.66667L5.39949 6.11486C4.58382 7.04706 4.17598 7.51316 3.96299 8.08002C3.75 8.64688 3.75 9.26624 3.75 10.5049V13.8333C3.75 16.1903 3.75 17.3688 4.48223 18.1011C5.21447 18.8333 6.39297 18.8333 8.75 18.8333H11.25C13.607 18.8333 14.7855 18.8333 15.5177 18.1011C16.25 17.3688 16.25 16.1903 16.25 13.8333Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.91699 13.5692C7.91699 14.5937 9.46191 15.4337 10.9441 14.9627C12.4263 14.4917 12.2084 13.104 11.7056 12.559C11.2027 12.0141 10.4628 12.1054 9.61691 12.0626C7.71593 11.9662 7.58173 10.1435 9.12091 9.42241C10.2501 8.89332 11.6986 9.57182 11.8654 10.5M9.97616 8.41666V9.23141M9.97616 15.267V15.9167"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.25 2.16666H13.75C14.1382 2.16666 14.3324 2.16666 14.4856 2.23009C14.6897 2.31466 14.852 2.4769 14.9366 2.68109C15 2.83423 15 3.02837 15 3.41666C15 3.80494 15 3.99908 14.9366 4.15222C14.852 4.35641 14.6897 4.51865 14.4856 4.60322C14.3324 4.66666 14.1382 4.66666 13.75 4.66666H6.25C5.86172 4.66666 5.66758 4.66666 5.51443 4.60322C5.31024 4.51865 5.14801 4.35641 5.06343 4.15222C5 3.99908 5 3.80494 5 3.41666C5 3.02837 5 2.83423 5.06343 2.68109C5.14801 2.4769 5.31024 2.31466 5.51443 2.23009C5.66758 2.16666 5.86172 2.16666 6.25 2.16666Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className="ml-4px">Taxa de Matrícula</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M3.33301 9.66666H16.6663V18.8333H3.33301V9.66666Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.0837 18.8333V16.3333C12.0837 15.5477 12.0837 15.1548 11.8396 14.9107C11.5955 14.6667 11.2027 14.6667 10.417 14.6667H9.58366C8.79799 14.6667 8.40516 14.6667 8.16107 14.9107C7.91699 15.1548 7.91699 15.5477 7.91699 16.3333V18.8333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 8.60228C1.66699 8.121 1.89159 7.73517 2.34803 7.58264L9.10883 5.32327C9.82474 5.08402 10.0003 4.68809 10.0003 3.98857C10.0003 3.35759 9.89708 2.09791 10.8871 2.16873C11.1202 2.1854 11.403 2.40594 11.9686 2.84699L17.8662 7.44569C18.1987 7.705 18.3337 8.01445 18.3337 8.4459C18.3337 9.23193 18.0033 9.66685 17.2377 9.66685H2.62263C2.00852 9.66685 1.66699 9.21301 1.66699 8.60228Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.5 18.8333H17.5"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.83301 13H6.66634"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M14.1663 13H13.333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M4.16699 6.75V3"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span className="ml-4px">
                          4 Semanas de Alojamento Familiar - Homestay Twin Room
                          (1 Meal/Day)
                        </span>
                      </li>
                    </ul>
                    <p class="price">R$ 10.705,00</p>
                    <span class="installments order-top">
                      em 12 parcelas sem juros totalizando
                    </span>
                    <p class="total-price">R$ 892,08</p>
                    <a href="#contactform">
                      <button class="cta-button">Inscreva-se agora!</button>
                    </a>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              style={{
                background: `url(${`https://i.ibb.co/HXG0j89/Image-1.png`})`,
              }}
              className="banner-cover-right"
            >
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="container col-md-6">
                    <p className="slider-title">New York, Estados Unidos</p>
                    <ul class="details">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M1.66699 2.16666H13.3337C14.905 2.16666 15.6907 2.16666 16.1788 2.65481C16.667 3.14296 16.667 3.92864 16.667 5.49999V10.5C16.667 12.0713 16.667 12.857 16.1788 13.3452C15.6907 13.8333 14.905 13.8333 13.3337 13.8333H7.50033"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.33301 5.91666H13.333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 14.6667V11.3333C1.66699 10.5477 1.66699 10.1548 1.91107 9.91074C2.15515 9.66666 2.54798 9.66666 3.33366 9.66666H5.00033M1.66699 14.6667H5.00033M1.66699 14.6667V18.8333M5.00033 9.66666V14.6667M5.00033 9.66666H7.50033H10.0003M5.00033 14.6667V18.8333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.00033 5.91667C5.00033 6.83714 4.25413 7.58333 3.33366 7.58333C2.41318 7.58333 1.66699 6.83714 1.66699 5.91667C1.66699 4.99619 2.41318 4.25 3.33366 4.25C4.25413 4.25 5.00033 4.99619 5.00033 5.91667Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                          />
                        </svg>
                        <span className="ml-4px">
                          4 Semanas de General English (20H/W)
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M16.25 13.8333V10.5049C16.25 9.26624 16.25 8.64688 16.037 8.08002C15.824 7.51316 15.4162 7.04706 14.6005 6.11486L13.3333 4.66666H6.66667L5.39949 6.11486C4.58382 7.04706 4.17598 7.51316 3.96299 8.08002C3.75 8.64688 3.75 9.26624 3.75 10.5049V13.8333C3.75 16.1903 3.75 17.3688 4.48223 18.1011C5.21447 18.8333 6.39297 18.8333 8.75 18.8333H11.25C13.607 18.8333 14.7855 18.8333 15.5177 18.1011C16.25 17.3688 16.25 16.1903 16.25 13.8333Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.91699 13.5692C7.91699 14.5937 9.46191 15.4337 10.9441 14.9627C12.4263 14.4917 12.2084 13.104 11.7056 12.559C11.2027 12.0141 10.4628 12.1054 9.61691 12.0626C7.71593 11.9662 7.58173 10.1435 9.12091 9.42241C10.2501 8.89332 11.6986 9.57182 11.8654 10.5M9.97616 8.41666V9.23141M9.97616 15.267V15.9167"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.25 2.16666H13.75C14.1382 2.16666 14.3324 2.16666 14.4856 2.23009C14.6897 2.31466 14.852 2.4769 14.9366 2.68109C15 2.83423 15 3.02837 15 3.41666C15 3.80494 15 3.99908 14.9366 4.15222C14.852 4.35641 14.6897 4.51865 14.4856 4.60322C14.3324 4.66666 14.1382 4.66666 13.75 4.66666H6.25C5.86172 4.66666 5.66758 4.66666 5.51443 4.60322C5.31024 4.51865 5.14801 4.35641 5.06343 4.15222C5 3.99908 5 3.80494 5 3.41666C5 3.02837 5 2.83423 5.06343 2.68109C5.14801 2.4769 5.31024 2.31466 5.51443 2.23009C5.66758 2.16666 5.86172 2.16666 6.25 2.16666Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className="ml-4px">Taxa de Matrícula</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M1.66699 6.33333C1.66699 5.16656 1.66699 4.58317 1.89406 4.13752C2.0938 3.74552 2.41251 3.42681 2.80451 3.22707C3.25016 3 3.83355 3 5.00033 3C6.1671 3 6.75049 3 7.19614 3.22707C7.58814 3.42681 7.90685 3.74552 8.10659 4.13752C8.33366 4.58317 8.33366 5.16656 8.33366 6.33333V14.6667C8.33366 15.8334 8.33366 16.4168 8.10659 16.8625C7.90685 17.2545 7.58814 17.5732 7.19614 17.7729C6.75049 18 6.1671 18 5.00033 18C3.83355 18 3.25016 18 2.80451 17.7729C2.41251 17.5732 2.0938 17.2545 1.89406 16.8625C1.66699 16.4168 1.66699 15.8334 1.66699 14.6667V6.33333Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5 14.6667H5.00748"
                            stroke="#0B69FF"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 6.33334H8.33366"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.54082 7.39036C9.24507 6.28198 9.09723 5.7278 9.19907 5.24666C9.28865 4.82343 9.50932 4.43956 9.82957 4.15004C10.1936 3.8209 10.7455 3.67241 11.8492 3.37542C12.953 3.07843 13.5049 2.92994 13.984 3.03221C14.4055 3.12217 14.7877 3.3438 15.0761 3.66534C15.4038 4.03088 15.5517 4.58507 15.8475 5.69344L17.9598 13.6097C18.2556 14.718 18.4034 15.2722 18.3016 15.7533C18.212 16.1766 17.9913 16.5604 17.6711 16.85C17.3071 17.1791 16.7551 17.3276 15.6514 17.6246C14.5476 17.9216 13.9957 18.0701 13.5166 17.9678C13.0951 17.8778 12.7129 17.6562 12.4246 17.3347C12.0968 16.9691 11.9489 16.4149 11.6531 15.3066L9.54082 7.39036Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.8174 14.4127L14.8246 14.4108"
                            stroke="#0B69FF"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 7.16682L15.4167 5.5"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className="ml-4px">Taxa de Material</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M3.33301 9.66666H16.6663V18.8333H3.33301V9.66666Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.0837 18.8333V16.3333C12.0837 15.5477 12.0837 15.1548 11.8396 14.9107C11.5955 14.6667 11.2027 14.6667 10.417 14.6667H9.58366C8.79799 14.6667 8.40516 14.6667 8.16107 14.9107C7.91699 15.1548 7.91699 15.5477 7.91699 16.3333V18.8333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 8.60228C1.66699 8.121 1.89159 7.73517 2.34803 7.58264L9.10883 5.32327C9.82474 5.08402 10.0003 4.68809 10.0003 3.98857C10.0003 3.35759 9.89708 2.09791 10.8871 2.16873C11.1202 2.1854 11.403 2.40594 11.9686 2.84699L17.8662 7.44569C18.1987 7.705 18.3337 8.01445 18.3337 8.4459C18.3337 9.23193 18.0033 9.66685 17.2377 9.66685H2.62263C2.00852 9.66685 1.66699 9.21301 1.66699 8.60228Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.5 18.8333H17.5"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.83301 13H6.66634"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M14.1663 13H13.333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M4.16699 6.75V3"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span className="ml-4px">
                          4 Semanas de Alojamento Familiar - Homestay Outside
                          Central Manhattan Double Room (1 Meal/Day)
                        </span>
                      </li>
                    </ul>
                    <p class="price">R$ 12.622,00</p>
                    <span class="installments order-top">
                      em 12 parcelas sem juros totalizando
                    </span>
                    <p class="total-price">R$ 1.051,83</p>
                    <a href="#contactform">
                      <button class="cta-button">Inscreva-se agora!</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              style={{
                background: `url(${`https://i.ibb.co/YNB9T8m/Image-2.png`})`,
              }}
              className="banner-cover-left"
            >
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-6">
                    <p className="slider-title">Calgary, Canadá</p>
                    <ul class="details">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M1.66699 2.16666H13.3337C14.905 2.16666 15.6907 2.16666 16.1788 2.65481C16.667 3.14296 16.667 3.92864 16.667 5.49999V10.5C16.667 12.0713 16.667 12.857 16.1788 13.3452C15.6907 13.8333 14.905 13.8333 13.3337 13.8333H7.50033"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.33301 5.91666H13.333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 14.6667V11.3333C1.66699 10.5477 1.66699 10.1548 1.91107 9.91074C2.15515 9.66666 2.54798 9.66666 3.33366 9.66666H5.00033M1.66699 14.6667H5.00033M1.66699 14.6667V18.8333M5.00033 9.66666V14.6667M5.00033 9.66666H7.50033H10.0003M5.00033 14.6667V18.8333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.00033 5.91667C5.00033 6.83714 4.25413 7.58333 3.33366 7.58333C2.41318 7.58333 1.66699 6.83714 1.66699 5.91667C1.66699 4.99619 2.41318 4.25 3.33366 4.25C4.25413 4.25 5.00033 4.99619 5.00033 5.91667Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                          />
                        </svg>
                        <span className="ml-4px">
                          4 Semanas de General English (20H/W)
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M16.25 13.8333V10.5049C16.25 9.26624 16.25 8.64688 16.037 8.08002C15.824 7.51316 15.4162 7.04706 14.6005 6.11486L13.3333 4.66666H6.66667L5.39949 6.11486C4.58382 7.04706 4.17598 7.51316 3.96299 8.08002C3.75 8.64688 3.75 9.26624 3.75 10.5049V13.8333C3.75 16.1903 3.75 17.3688 4.48223 18.1011C5.21447 18.8333 6.39297 18.8333 8.75 18.8333H11.25C13.607 18.8333 14.7855 18.8333 15.5177 18.1011C16.25 17.3688 16.25 16.1903 16.25 13.8333Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.91699 13.5692C7.91699 14.5937 9.46191 15.4337 10.9441 14.9627C12.4263 14.4917 12.2084 13.104 11.7056 12.559C11.2027 12.0141 10.4628 12.1054 9.61691 12.0626C7.71593 11.9662 7.58173 10.1435 9.12091 9.42241C10.2501 8.89332 11.6986 9.57182 11.8654 10.5M9.97616 8.41666V9.23141M9.97616 15.267V15.9167"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.25 2.16666H13.75C14.1382 2.16666 14.3324 2.16666 14.4856 2.23009C14.6897 2.31466 14.852 2.4769 14.9366 2.68109C15 2.83423 15 3.02837 15 3.41666C15 3.80494 15 3.99908 14.9366 4.15222C14.852 4.35641 14.6897 4.51865 14.4856 4.60322C14.3324 4.66666 14.1382 4.66666 13.75 4.66666H6.25C5.86172 4.66666 5.66758 4.66666 5.51443 4.60322C5.31024 4.51865 5.14801 4.35641 5.06343 4.15222C5 3.99908 5 3.80494 5 3.41666C5 3.02837 5 2.83423 5.06343 2.68109C5.14801 2.4769 5.31024 2.31466 5.51443 2.23009C5.66758 2.16666 5.86172 2.16666 6.25 2.16666Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className="ml-4px">Taxa de Matrícula</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M1.66699 6.33333C1.66699 5.16656 1.66699 4.58317 1.89406 4.13752C2.0938 3.74552 2.41251 3.42681 2.80451 3.22707C3.25016 3 3.83355 3 5.00033 3C6.1671 3 6.75049 3 7.19614 3.22707C7.58814 3.42681 7.90685 3.74552 8.10659 4.13752C8.33366 4.58317 8.33366 5.16656 8.33366 6.33333V14.6667C8.33366 15.8334 8.33366 16.4168 8.10659 16.8625C7.90685 17.2545 7.58814 17.5732 7.19614 17.7729C6.75049 18 6.1671 18 5.00033 18C3.83355 18 3.25016 18 2.80451 17.7729C2.41251 17.5732 2.0938 17.2545 1.89406 16.8625C1.66699 16.4168 1.66699 15.8334 1.66699 14.6667V6.33333Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5 14.6667H5.00748"
                            stroke="#0B69FF"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 6.33334H8.33366"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.54082 7.39036C9.24507 6.28198 9.09723 5.7278 9.19907 5.24666C9.28865 4.82343 9.50932 4.43956 9.82957 4.15004C10.1936 3.8209 10.7455 3.67241 11.8492 3.37542C12.953 3.07843 13.5049 2.92994 13.984 3.03221C14.4055 3.12217 14.7877 3.3438 15.0761 3.66534C15.4038 4.03088 15.5517 4.58507 15.8475 5.69344L17.9598 13.6097C18.2556 14.718 18.4034 15.2722 18.3016 15.7533C18.212 16.1766 17.9913 16.5604 17.6711 16.85C17.3071 17.1791 16.7551 17.3276 15.6514 17.6246C14.5476 17.9216 13.9957 18.0701 13.5166 17.9678C13.0951 17.8778 12.7129 17.6562 12.4246 17.3347C12.0968 16.9691 11.9489 16.4149 11.6531 15.3066L9.54082 7.39036Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.8174 14.4127L14.8246 14.4108"
                            stroke="#0B69FF"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 7.16682L15.4167 5.5"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className="ml-4px">Taxa de Material</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M18.3337 15.0833H1.66699"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.3337 18V13.8333C18.3337 12.262 18.3337 11.4763 17.8455 10.9882C17.3573 10.5 16.5717 10.5 15.0003 10.5H5.00033C3.42898 10.5 2.6433 10.5 2.15515 10.9882C1.66699 11.4763 1.66699 12.262 1.66699 13.8333V18"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.3337 10.5V9.34817C13.3337 8.92525 13.2574 8.78378 12.8667 8.61708C12.0529 8.26991 11.0652 8 10.0003 8C8.93549 8 7.94773 8.26991 7.13399 8.61708C6.74328 8.78378 6.66699 8.92525 6.66699 9.34817V10.5"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.6663 10.5V6.63381C16.6663 6.05744 16.6663 5.76926 16.524 5.49711C16.3817 5.22496 16.1789 5.08409 15.7733 4.80236C14.1381 3.66648 12.1473 3 9.99967 3C7.85202 3 5.86127 3.66648 4.22603 4.80236C3.82044 5.08409 3.61765 5.22496 3.47533 5.49711C3.33301 5.76926 3.33301 6.05744 3.33301 6.63381V10.5"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                        </svg>
                        <span className="ml-4px">
                          4 Semanas de Alojamento Familiar - Homestay Single
                          Room (Self Catering)
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M3.33301 9.66666H16.6663V18.8333H3.33301V9.66666Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.0837 18.8333V16.3333C12.0837 15.5477 12.0837 15.1548 11.8396 14.9107C11.5955 14.6667 11.2027 14.6667 10.417 14.6667H9.58366C8.79799 14.6667 8.40516 14.6667 8.16107 14.9107C7.91699 15.1548 7.91699 15.5477 7.91699 16.3333V18.8333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 8.60228C1.66699 8.121 1.89159 7.73517 2.34803 7.58264L9.10883 5.32327C9.82474 5.08402 10.0003 4.68809 10.0003 3.98857C10.0003 3.35759 9.89708 2.09791 10.8871 2.16873C11.1202 2.1854 11.403 2.40594 11.9686 2.84699L17.8662 7.44569C18.1987 7.705 18.3337 8.01445 18.3337 8.4459C18.3337 9.23193 18.0033 9.66685 17.2377 9.66685H2.62263C2.00852 9.66685 1.66699 9.21301 1.66699 8.60228Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.5 18.8333H17.5"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.83301 13H6.66634"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M14.1663 13H13.333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M4.16699 6.75V3"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span className="ml-4px">Taxa de acomodação</span>
                      </li>
                    </ul>
                    <p class="price">R$ 9.858,00</p>
                    <span class="installments order-top">
                      em 12 parcelas sem juros totalizando
                    </span>
                    <p class="total-price">R$ 821,50</p>
                    <a href="#contactform">
                      <button class="cta-button">Inscreva-se agora!</button>
                    </a>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              style={{
                background: `url(${`https://i.ibb.co/xzdNrmq/Image-3.png`})`,
              }}
              className="banner-cover-right"
            >
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="container col-md-6">
                    <p className="slider-title">Dublin, Irlanda</p>
                    <ul class="details">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M1.66699 2.16666H13.3337C14.905 2.16666 15.6907 2.16666 16.1788 2.65481C16.667 3.14296 16.667 3.92864 16.667 5.49999V10.5C16.667 12.0713 16.667 12.857 16.1788 13.3452C15.6907 13.8333 14.905 13.8333 13.3337 13.8333H7.50033"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.33301 5.91666H13.333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 14.6667V11.3333C1.66699 10.5477 1.66699 10.1548 1.91107 9.91074C2.15515 9.66666 2.54798 9.66666 3.33366 9.66666H5.00033M1.66699 14.6667H5.00033M1.66699 14.6667V18.8333M5.00033 9.66666V14.6667M5.00033 9.66666H7.50033H10.0003M5.00033 14.6667V18.8333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.00033 5.91667C5.00033 6.83714 4.25413 7.58333 3.33366 7.58333C2.41318 7.58333 1.66699 6.83714 1.66699 5.91667C1.66699 4.99619 2.41318 4.25 3.33366 4.25C4.25413 4.25 5.00033 4.99619 5.00033 5.91667Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                          />
                        </svg>
                        <span className="ml-4px">
                          25 Semanas Study & Work - First Visa - 15h Per Week -
                          Afternoon – Dublin
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M12.4834 6.34631C12.4834 6.34631 12.9001 6.76298 13.3167 7.59631C13.3167 7.59631 14.6402 5.51298 15.8167 5.09631"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.32937 2.18451C6.24731 2.09635 4.63876 2.3362 4.63876 2.3362C3.62305 2.40882 1.67654 2.97826 1.67656 6.30383C1.67658 9.60116 1.65503 13.6661 1.67656 15.2867C1.67656 16.2767 2.28958 18.5862 4.41138 18.7099C6.99041 18.8603 11.6359 18.8923 13.7674 18.7099C14.3379 18.6777 16.2375 18.2298 16.4779 16.1631C16.727 14.022 16.6774 12.5339 16.6774 12.1797"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.3336 6.34635C18.3336 8.64755 16.4663 10.513 14.1629 10.513C11.8595 10.513 9.99219 8.64755 9.99219 6.34635C9.99219 4.04517 11.8595 2.17969 14.1629 2.17969C16.4663 2.17969 18.3336 4.04517 18.3336 6.34635Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M5.81738 11.3463H9.15074"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M5.81738 14.6797H12.4841"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                        </svg>
                        <span className="ml-4px">Taxa de Registro</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M11.071 16.6372L4.85202 17.7922C3.65919 18.0137 3.06278 18.1244 2.71919 17.7808C2.3756 17.4372 2.48635 16.8408 2.70786 15.6478L3.86269 9.42858C4.04787 8.43135 4.14047 7.93271 4.46918 7.63142C4.79791 7.33013 5.39907 7.27133 6.60142 7.15373C7.76022 7.04039 8.85692 6.64314 10 5.5L15 10.5004C13.8569 11.6436 13.4594 12.7395 13.3459 13.8984C13.2282 15.1009 13.1692 15.7022 12.868 16.0308C12.5667 16.3595 12.0682 16.4521 11.071 16.6372Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.16634 13.1755C8.70009 13.0998 8.2738 12.897 7.93828 12.5615M7.93828 12.5615C7.60274 12.226 7.39992 11.7996 7.32423 11.3334M7.93828 12.5615L3.33301 17.1667"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M10 5.5C10.5936 4.62425 11.3976 3.151 12.5887 3.00915C13.4018 2.91233 14.0755 3.58593 15.4227 4.93315L15.5668 5.07731C16.9141 6.42453 17.5877 7.09814 17.4908 7.91125C17.349 9.10242 15.8757 9.90642 15 10.5"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className="ml-4px">Taxa de exame – Trinity</span>
                      </li>

                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M13.8439 13.9039C11.6497 15.1398 10.3977 17.7008 10 18.4167V7.16669C10.3454 6.54499 11.335 4.76374 13.0264 3.55309C13.739 3.04308 14.0952 2.78807 14.5477 3.02059C15 3.25311 15 3.76638 15 4.79291V12.1595C15 12.714 15 12.9913 14.8862 13.1861C14.7722 13.3809 14.4628 13.5553 13.8439 13.9039Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.0003 7.00463C9.42791 6.40336 7.76845 4.97533 4.98413 4.47465C3.57358 4.221 2.8683 4.09418 2.26764 4.58028C1.66699 5.06638 1.66699 5.85573 1.66699 7.43444V13.1081C1.66699 14.5516 1.66699 15.2733 2.05249 15.7239C2.43799 16.1746 3.2867 16.3272 4.98413 16.6324C6.49727 16.9045 7.67819 17.3381 8.53299 17.7738C9.37399 18.2023 9.79449 18.4167 10.0003 18.4167C10.2062 18.4167 10.6267 18.2023 11.4677 17.7738C12.3225 17.3381 13.5034 16.9045 15.0165 16.6324C16.714 16.3272 17.5627 16.1746 17.9482 15.7239C18.3337 15.2733 18.3337 14.5516 18.3337 13.1081V7.43444C18.3337 5.85573 18.3337 5.06638 17.733 4.58028C17.1323 4.09418 15.8337 4.47465 15.0003 5.08333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span className="ml-4px">Learner Protection</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M1.66699 6.33333C1.66699 5.16656 1.66699 4.58317 1.89406 4.13752C2.0938 3.74552 2.41251 3.42681 2.80451 3.22707C3.25016 3 3.83355 3 5.00033 3C6.1671 3 6.75049 3 7.19614 3.22707C7.58814 3.42681 7.90685 3.74552 8.10659 4.13752C8.33366 4.58317 8.33366 5.16656 8.33366 6.33333V14.6667C8.33366 15.8334 8.33366 16.4168 8.10659 16.8625C7.90685 17.2545 7.58814 17.5732 7.19614 17.7729C6.75049 18 6.1671 18 5.00033 18C3.83355 18 3.25016 18 2.80451 17.7729C2.41251 17.5732 2.0938 17.2545 1.89406 16.8625C1.66699 16.4168 1.66699 15.8334 1.66699 14.6667V6.33333Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5 14.6666H5.00748"
                            stroke="#0B69FF"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 6.33337H8.33366"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.54082 7.39036C9.24507 6.28198 9.09723 5.7278 9.19907 5.24666C9.28865 4.82343 9.50932 4.43956 9.82957 4.15004C10.1936 3.8209 10.7455 3.67241 11.8492 3.37542C12.953 3.07843 13.5049 2.92994 13.984 3.03221C14.4055 3.12217 14.7877 3.3438 15.0761 3.66534C15.4038 4.03088 15.5517 4.58507 15.8475 5.69344L17.9598 13.6097C18.2556 14.718 18.4034 15.2722 18.3016 15.7533C18.212 16.1766 17.9913 16.5604 17.6711 16.85C17.3071 17.1791 16.7551 17.3276 15.6514 17.6246C14.5476 17.9216 13.9957 18.0701 13.5166 17.9678C13.0951 17.8778 12.7129 17.6562 12.4246 17.3347C12.0968 16.9691 11.9489 16.4149 11.6531 15.3066L9.54082 7.39036Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.8174 14.4128L14.8246 14.4109"
                            stroke="#0B69FF"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 7.16682L15.4167 5.5"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span className="ml-4px">Taxa de Material</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M6.996 2.62664C8.22509 1.8651 9.29784 2.17199 9.94226 2.66083C10.2065 2.86126 10.3386 2.96149 10.4163 2.96149C10.4941 2.96149 10.6262 2.86126 10.8904 2.66083C11.5348 2.17199 12.6076 1.8651 13.8367 2.62664C15.4498 3.62607 15.8148 6.92326 12.0941 9.70501C11.3854 10.2348 11.0311 10.4997 10.4163 10.4997C9.80159 10.4997 9.44726 10.2348 8.73859 9.70501C5.01797 6.92326 5.38296 3.62607 6.996 2.62664Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M3.33301 12.1666H5.32869C5.57382 12.1666 5.81557 12.2219 6.03482 12.328L7.73647 13.1513C7.95571 13.2574 8.19747 13.3125 8.44259 13.3125H9.31142C10.1518 13.3125 10.833 13.9718 10.833 14.785C10.833 14.8178 10.8105 14.8467 10.7778 14.8557L8.66042 15.4412C8.28057 15.5462 7.87384 15.5096 7.52051 15.3386L5.70143 14.4585"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.833 14.25L14.6603 13.0741C15.3388 12.8627 16.0723 13.1134 16.4973 13.7019C16.8046 14.1274 16.6794 14.7369 16.2318 14.9952L9.96876 18.6088C9.57042 18.8386 9.10042 18.8947 8.66234 18.7647L3.33301 17.1833"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span className="ml-4px">Health Insurance</span>
                      </li>

                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M3.33301 9.66666H16.6663V18.8333H3.33301V9.66666Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.0837 18.8333V16.3333C12.0837 15.5477 12.0837 15.1548 11.8396 14.9107C11.5955 14.6667 11.2027 14.6667 10.417 14.6667H9.58366C8.79799 14.6667 8.40516 14.6667 8.16107 14.9107C7.91699 15.1548 7.91699 15.5477 7.91699 16.3333V18.8333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.66699 8.60228C1.66699 8.121 1.89159 7.73517 2.34803 7.58264L9.10883 5.32327C9.82474 5.08402 10.0003 4.68809 10.0003 3.98857C10.0003 3.35759 9.89708 2.09791 10.8871 2.16873C11.1202 2.1854 11.403 2.40594 11.9686 2.84699L17.8662 7.44569C18.1987 7.705 18.3337 8.01445 18.3337 8.4459C18.3337 9.23193 18.0033 9.66685 17.2377 9.66685H2.62263C2.00852 9.66685 1.66699 9.21301 1.66699 8.60228Z"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.5 18.8333H17.5"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.83301 13H6.66634"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M14.1663 13H13.333"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M4.16699 6.75V3"
                            stroke="#0B69FF"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span className="ml-4px">
                          2 Semanas de Residence Single Room (Self Catering,
                          En-Suite)
                        </span>
                      </li>
                    </ul>
                    <p class="price">R$ 18.196,00</p>
                    <span class="installments order-top">
                      em 12 parcelas sem juros totalizando
                    </span>
                    <p class="total-price">R$ 1.516,33</p>
                    <a href="#contactform">
                      <button class="cta-button">Inscreva-se agora!</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              style={{
                background: `url(${`https://i.ibb.co/w0Pf9mh/Image-4.png`})`,
              }}
              className="banner-cover-left"
            >
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-6">
                    <p className="slider-title">
                      Excelência em Educação Internacional
                    </p>
                    <p className="PARCELAMENTO">
                      PARCELAMENTO <br />
                      EM 12X <br />
                      SEM JUROS
                    </p>
                    <p>*Consulte condições.</p>

                    <a href="#contactform">
                      <button class="cta-button">Inscreva-se agora!</button>
                    </a>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
};

export default Slider;
