import React from "react";

const Btn = ({desktop}) => {
  if (desktop) {
    return (
      <button class="relative items-center justify-center h-11 transition-colors hover:text-color-1 px-7 text-n-1 hidden lg:flex">
        <span class="z-10 relative">Sign in</span>
        <svg
          class="absolute top-0 left-0"
          width="21"
          height="44"
          viewBox="0 0 21 44"
        >
          <path
            fill="none"
            stroke="url(#btn-left)"
            stroke-width="2"
            d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
          ></path>
        </svg>
        <svg
          class="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
          height="44"
          viewBox="0 0 100 44"
          preserveAspectRatio="none"
          fill="none"
        >
          <polygon
            fill="url(#btn-top)"
            fill-rule="nonzero"
            points="100 42 100 44 0 44 0 42"
          ></polygon>
          <polygon
            fill="url(#btn-bottom)"
            fill-rule="nonzero"
            points="100 0 100 2 0 2 0 0"
          ></polygon>
        </svg>
        <svg
          class="absolute top-0 right-0"
          width="21"
          height="44"
          viewBox="0 0 21 44"
        >
          <path
            fill="none"
            stroke="url(#btn-right)"
            stroke-width="2"
            d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
          ></path>
        </svg>
      </button>
    );
  } else {
    return (
      <button class="relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-3 text-n-1 ml-auto lg:hidden">
        <span class="z-10 relative">
          <svg
            class="overflow-visible"
            width="20"
            height="12"
            viewBox="0 0 20 12"
          >
            <rect
              class="transition-all origin-center"
              y="0"
              width="20"
              height="2"
              rx="1"
              fill="white"
              transform="rotate(0)"
            ></rect>
            <rect
              class="transition-all origin-center"
              y="10"
              width="20"
              height="2"
              rx="1"
              fill="white"
              transform="rotate(0)"
            ></rect>
          </svg>
        </span>
        <svg
          class="absolute top-0 left-0"
          width="21"
          height="44"
          viewBox="0 0 21 44"
        >
          <path
            fill="none"
            stroke="url(#btn-left)"
            stroke-width="2"
            d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
          ></path>
        </svg>
        <svg
          class="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
          height="44"
          viewBox="0 0 100 44"
          preserveAspectRatio="none"
          fill="none"
        >
          <polygon
            fill="url(#btn-top)"
            fill-rule="nonzero"
            points="100 42 100 44 0 44 0 42"
          ></polygon>
          <polygon
            fill="url(#btn-bottom)"
            fill-rule="nonzero"
            points="100 0 100 2 0 2 0 0"
          ></polygon>
        </svg>
        <svg
          class="absolute top-0 right-0"
          width="21"
          height="44"
          viewBox="0 0 21 44"
        >
          <path
            fill="none"
            stroke="url(#btn-right)"
            stroke-width="2"
            d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
          ></path>
        </svg>
      </button>
    );
  }
}
export default Btn;
