import React from "react";
import { useDebounce } from "../../hooks/useDebounce";
interface Progress {
  value: number;
  changePerTime: number;
}
export const Progress = ({ value, changePerTime }: Progress) => {
  const { result } = useDebounce({ value, changePerTime });

  return (
    <div className="relative">
      <svg
        width="100%"
        height="120px"
        viewBox="0 0 259 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M248 150C248 118.704 235.515 88.6907 213.292 66.5614C191.069 44.4321 160.928 32 129.5 32C98.0719 32 67.9309 44.4321 45.7079 66.5614C23.4848 88.6907 11 118.704 11 150L30.4949 150C30.495 123.853 40.9258 98.7769 59.4929 80.2882C78.0599 61.7995 103.242 51.4127 129.5 51.4127C155.758 51.4127 180.94 61.7995 199.507 80.2883C218.074 98.777 228.505 123.853 228.505 150H248Z"
            fill="#B8B8B8"
          />
          <path
            transform={`rotate(-${
              result ? Math.round(((15 - result) / 15) * 180) : 0
            })`}
            className="progress"
            d="M254 150.5C254 117.481 240.83 85.8135 217.388 62.4652C193.946 39.1169 162.152 26 129 26C95.8479 26 64.0537 39.1169 40.6117 62.4652C17.1696 85.8135 4.00001 117.481 4 150.5H38.1242C38.1242 126.495 47.6986 103.472 64.7411 86.4981C81.7836 69.5238 104.898 59.9877 129 59.9877C153.102 59.9877 176.216 69.5238 193.259 86.4981C210.301 103.472 219.876 126.495 219.876 150.5H254Z"
            fill="#FFBF5E"
            style={{
              transformOrigin: "50% 100%",
            }}
          />
          <path
            d="M1.08 69.262C1.164 68.158 1.59 67.294 2.358 66.67C3.126 66.046 4.122 65.734 5.346 65.734C6.162 65.734 6.864 65.884 7.452 66.184C8.052 66.472 8.502 66.868 8.802 67.372C9.114 67.876 9.27 68.446 9.27 69.082C9.27 69.826 9.054 70.468 8.622 71.008C8.202 71.548 7.65 71.896 6.966 72.052V72.142C7.746 72.334 8.364 72.712 8.82 73.276C9.276 73.84 9.504 74.578 9.504 75.49C9.504 76.174 9.348 76.792 9.036 77.344C8.724 77.884 8.256 78.31 7.632 78.622C7.008 78.934 6.258 79.09 5.382 79.09C4.11 79.09 3.066 78.76 2.25 78.1C1.434 77.428 0.978 76.48 0.882 75.256H2.466C2.55 75.976 2.844 76.564 3.348 77.02C3.852 77.476 4.524 77.704 5.364 77.704C6.204 77.704 6.84 77.488 7.272 77.056C7.716 76.612 7.938 76.042 7.938 75.346C7.938 74.446 7.638 73.798 7.038 73.402C6.438 73.006 5.532 72.808 4.32 72.808H3.906V71.44H4.338C5.442 71.428 6.276 71.248 6.84 70.9C7.404 70.54 7.686 69.988 7.686 69.244C7.686 68.608 7.476 68.098 7.056 67.714C6.648 67.33 6.06 67.138 5.292 67.138C4.548 67.138 3.948 67.33 3.492 67.714C3.036 68.098 2.766 68.614 2.682 69.262H1.08Z"
            fill="#B8B8B8"
          />
          <path
            d="M82.37 10.082C82.106 8.75 81.284 8.084 79.904 8.084C78.836 8.084 78.038 8.498 77.51 9.326C76.982 10.142 76.724 11.492 76.736 13.376C77.012 12.752 77.468 12.266 78.104 11.918C78.752 11.558 79.472 11.378 80.264 11.378C81.5 11.378 82.484 11.762 83.216 12.53C83.96 13.298 84.332 14.36 84.332 15.716C84.332 16.532 84.17 17.264 83.846 17.912C83.534 18.56 83.054 19.076 82.406 19.46C81.77 19.844 80.996 20.036 80.084 20.036C78.848 20.036 77.882 19.76 77.186 19.208C76.49 18.656 76.004 17.894 75.728 16.922C75.452 15.95 75.314 14.75 75.314 13.322C75.314 8.918 76.85 6.716 79.922 6.716C81.098 6.716 82.022 7.034 82.694 7.67C83.366 8.306 83.762 9.11 83.882 10.082H82.37ZM79.922 12.764C79.406 12.764 78.92 12.872 78.464 13.088C78.008 13.292 77.636 13.61 77.348 14.042C77.072 14.462 76.934 14.978 76.934 15.59C76.934 16.502 77.198 17.246 77.726 17.822C78.254 18.386 79.01 18.668 79.994 18.668C80.834 18.668 81.5 18.41 81.992 17.894C82.496 17.366 82.748 16.658 82.748 15.77C82.748 14.834 82.508 14.102 82.028 13.574C81.548 13.034 80.846 12.764 79.922 12.764Z"
            fill="#B8B8B8"
          />
          <path
            d="M171.222 16.508C171.342 17.192 171.618 17.72 172.05 18.092C172.494 18.464 173.088 18.65 173.832 18.65C174.828 18.65 175.56 18.26 176.028 17.48C176.508 16.7 176.736 15.386 176.712 13.538C176.46 14.078 176.04 14.504 175.452 14.816C174.864 15.116 174.21 15.266 173.49 15.266C172.686 15.266 171.966 15.104 171.33 14.78C170.706 14.444 170.214 13.958 169.854 13.322C169.494 12.686 169.314 11.918 169.314 11.018C169.314 9.734 169.686 8.702 170.43 7.922C171.174 7.13 172.23 6.734 173.598 6.734C175.278 6.734 176.454 7.28 177.126 8.372C177.81 9.464 178.152 11.09 178.152 13.25C178.152 14.762 178.014 16.01 177.738 16.994C177.474 17.978 177.018 18.728 176.37 19.244C175.734 19.76 174.858 20.018 173.742 20.018C172.518 20.018 171.564 19.688 170.88 19.028C170.196 18.368 169.806 17.528 169.71 16.508H171.222ZM173.76 13.88C174.564 13.88 175.224 13.634 175.74 13.142C176.256 12.638 176.514 11.96 176.514 11.108C176.514 10.208 176.262 9.482 175.758 8.93C175.254 8.378 174.546 8.102 173.634 8.102C172.794 8.102 172.122 8.366 171.618 8.894C171.126 9.422 170.88 10.118 170.88 10.982C170.88 11.858 171.126 12.56 171.618 13.088C172.11 13.616 172.824 13.88 173.76 13.88Z"
            fill="#B8B8B8"
          />
          <path
            d="M237.684 67.48V65.986H241.068V79H239.412V67.48H237.684ZM243.684 77.686C245.208 76.462 246.402 75.46 247.266 74.68C248.13 73.888 248.856 73.066 249.444 72.214C250.044 71.35 250.344 70.504 250.344 69.676C250.344 68.896 250.152 68.284 249.768 67.84C249.396 67.384 248.79 67.156 247.95 67.156C247.134 67.156 246.498 67.414 246.042 67.93C245.598 68.434 245.358 69.112 245.322 69.964H243.738C243.786 68.62 244.194 67.582 244.962 66.85C245.73 66.118 246.72 65.752 247.932 65.752C249.168 65.752 250.146 66.094 250.866 66.778C251.598 67.462 251.964 68.404 251.964 69.604C251.964 70.6 251.664 71.572 251.064 72.52C250.476 73.456 249.804 74.284 249.048 75.004C248.292 75.712 247.326 76.54 246.15 77.488H252.342V78.856H243.684V77.686Z"
            fill="#B8B8B8"
          />
        </g>
        <defs>
          <clipPath>
            <rect width="259" height="150" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
