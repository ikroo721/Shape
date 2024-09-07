import React from 'react'

const FooterData = () => {
    const Arr1 = {
        header: "Learn",
        Arr: [
          {name:"About"},
          {name:"Culture"},
          {name:"Testimonials"},
          {name:"Processes"},
          {name:"FAQs"},
          {name:"Branding FAQS"},
          {name:"Blog"},
        ],
      };
      const Arr2 = {
        header: "Explore",
        Arr: [
          {name:"Home"},
          {name:"Work"},
          {name:"Services"},
          {name:"Careers"},
          {name:"Sectors"},
          {name:"Hex Test"},
          {name:"Contact"},
        ],
      };
      const Arr3 = {
        header: "Get In Touch",
        Arr: [
          {
            icon: (
              <svg
                className="w-3 h-3 fill-current | 4xl:w-3.5 4xl:h-3.5 text-white"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M0 32L144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8l67-83.8 144 80-32 144h-32C200.6 512 0 311.4 0 64V32z"></path>
              </svg>
            ),
            name: "01942 894 596",
          },
          {
            icon: (
              <svg
                className="w-3 h-3 fill-current | 4xl:w-3.5 4xl:h-3.5 text-white"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M0 64h512v80L256 320 0 144V64zm0 384V182.8l237.9 163.6 18.1 12.4 18.1-12.5L512 182.8V448H0z"></path>
              </svg>
            ),
            name: "hello@madebyshape.co.uk",
          },
          {
            icon: (
              <svg
                className="w-7 h-7 fill-current text-white mt-1 | dark:text-grayDark-200 4xl:w-3.5 4xl:h-3.5"
                width="12"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192c0 112 192 320 192 320zm0-384a64 64 0 110 128 64 64 0 110-128z"></path>
              </svg>
            ),
            name: "MadeByShape Gibfield Park Avenue Atherton Manchester M46 0SU",
          },
          {
            icon: (
              <svg
                className="w-3 h-3 fill-current | 4xl:w-3.5 4xl:h-3.5 text-white"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.998 5.5c0 .952.005 1.903-.002 2.854-.005.614-.119 1.2-.51 1.7-.4.512-.924.81-1.564.891a6.95 6.95 0 01-.857.051c-1.8.005-3.599.006-5.398 0-.495-.002-.984-.068-1.425-.318C.564 10.295.167 9.713.055 8.944a5.315 5.315 0 01-.052-.753C0 6.348 0 4.506.003 2.664c0-.532.08-1.05.369-1.513C.762.524 1.33.159 2.057.057a6.29 6.29 0 01.857-.053 930.1 930.1 0 015.424 0c.504.002 1 .072 1.447.332a2.278 2.278 0 011.16 1.725c.036.253.048.51.05.767.006.89.003 1.782.003 2.673zm-2.33-2.029c-.007-.178-.073-.295-.21-.369-.229-.123-.483-.015-.572.248-.24.71-.477 1.42-.715 2.13l-.635 1.898c-.084.251.01.465.234.545.226.081.437-.042.527-.31L8.632 3.62c.02-.056.028-.115.037-.15zm-2.48-.416c-.183 0-.32.102-.387.297l-.547 1.63-.802 2.397c-.074.22-.01.41.167.513.23.134.492.021.587-.258.216-.64.429-1.281.643-1.922.236-.706.473-1.41.707-2.117.093-.278-.088-.539-.368-.54zM2.332 7.528c.01.181.081.3.223.373.224.115.473.003.56-.254.177-.519.35-1.039.523-1.558l.827-2.469c.086-.256-.024-.49-.258-.554-.213-.059-.416.06-.496.296-.45 1.342-.898 2.684-1.346 4.026-.018.052-.025.107-.033.14z"></path>
              </svg>
            ),
            name: "//topped.little.pirate",
          },
        ],
      };
    
  return {Arr1,Arr2,Arr3}
}

export default FooterData