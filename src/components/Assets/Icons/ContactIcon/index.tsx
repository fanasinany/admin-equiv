import React, { SVGProps } from "react";

export function ContactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="24"
      viewBox="0 0 20 24"
      {...props}
    >
      <path
        id="Location_Icon"
        data-name="Location Icon"
        d="M10,12a2.459,2.459,0,0,0,1.766-.706,2.323,2.323,0,0,0,0-3.39,2.564,2.564,0,0,0-3.531,0,2.323,2.323,0,0,0,0,3.39A2.454,2.454,0,0,0,10,12Zm0,12a40.6,40.6,0,0,1-7.515-7.634A11.587,11.587,0,0,1,0,9.84,9.1,9.1,0,0,1,3.018,2.67,10.218,10.218,0,0,1,10,0a10.22,10.22,0,0,1,6.985,2.67A9.093,9.093,0,0,1,20,9.84a11.579,11.579,0,0,1-2.485,6.526A40.6,40.6,0,0,1,10,24Z"
        transform="translate(-0.002)"
      />
    </svg>
  );
}
export default ContactIcon;
