import React, { FunctionComponent } from "react";

interface HomeIconProps {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
}

export const HomeIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => (
  <svg
    width={width || "21"}
    height={height || "22"}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m7.13478 18.7733v15.7156c7.13478 14.9351 7.77217 14.3023 8.55844 14.3023h11.4326c11.8102 14.3023 12.1723 14.4512 12.4393 14.7163c12.7063 14.9813 12.8563 15.3408 12.8563 15.7156v18.7733c12.8539 19.0978 12.9821 19.4099 13.2124 19.6402c13.4427 19.8705 13.7561 20 14.0829 20h16.0438c16.9596 20.0023 17.8388 19.6428 18.4872 19.0008c19.1356 18.3588 19.5 17.487 19.5 16.5778v7.86686c19.5 7.13246 19.1721 6.43584 18.6046 5.96467l11.934 0.675869c10.7737 -0.251438 9.11111 -0.221498 7.98539 0.746979l1.46701 5.96467c0.872741 6.42195 0.517552 7.12064 0.5 7.86686v16.5689c0.5 18.4639 2.04738 20 3.95617 20h5.87229c6.55123 20 7.103 19.4562 7.10792 18.7822l7.13478 18.7733z"
      fill={fill || "#3BB77E"}
    />
  </svg>
);

export const NairaIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width || "21"}
      height={height || "22"}
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00024 20H30.0002"
        stroke={fill || "#3BB77E"}
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M22.908 29.2042C23.4332 29.9919 24.4161 30.3488 25.325 30.0727C26.2339 29.7967 26.8533 28.9619 26.8533 28.0126L26.6513 15.086H28.8058C29.9974 15.086 30.9602 14.1232 30.9602 12.9315C30.9602 11.7399 29.9974 10.7771 28.8058 10.7771H26.6513L26.8533 2.15936C26.8533 0.967691 25.8906 0.0049305 24.6989 0.0049305C23.5072 0.0049305 22.5445 0.967691 22.5445 2.15936V10.7771H15.7984L9.25429 0.96096C8.72915 0.173246 7.74619 -0.183584 6.83729 0.092453C5.92839 0.36849 5.30899 1.20333 5.30899 2.15263V10.7771H3.15455C1.96288 10.7771 1.00012 11.7399 1.00012 12.9315C1.00012 14.1232 1.96288 15.086 3.15455 15.086H5.30899V28.0126C5.30899 29.2042 6.27175 30.167 7.46342 30.167C8.65509 30.167 9.61785 29.2042 9.61785 28.0126V15.086H13.4891L22.908 29.2042ZM10.621 10.7771H9.61785V9.27573L10.621 10.7771ZM18.6732 15.086H22.5445V20.8962L18.6732 15.086Z"
        fill={fill || "#3BB77E"}
      />
    </svg>
  );
};

export const OrderIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width || "30"}
      height={height || "30"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8097 21.6957L18.8089 21.6964C18.4965 22.0089 18.325 22.3962 18.325 22.8375C18.325 23.2788 18.4965 23.6661 18.8089 23.9786L20.2714 25.4411C20.5839 25.7535 20.9712 25.925 21.4125 25.925C21.8528 25.925 22.2395 25.7542 22.5516 25.443C22.5522 25.4424 22.5529 25.4417 22.5536 25.4411L26.1874 21.8822L26.1874 21.8822L26.1911 21.8786C26.5081 21.5615 26.675 21.1661 26.675 20.718C26.675 20.2701 26.5082 19.8748 26.1907 19.5586C25.8737 19.2418 25.4784 19.075 25.0305 19.075C24.5832 19.075 24.1884 19.2414 23.8724 19.558C23.8718 19.5586 23.8712 19.5591 23.8707 19.5597L21.4149 21.9828L21.1286 21.6964C20.8119 21.3798 20.417 21.2125 19.9695 21.2125C19.522 21.2125 19.1271 21.3797 18.8097 21.6957ZM6 8.5L5.99882 8.5C5.70175 8.5007 5.47528 8.40567 5.28555 8.21595C5.09577 8.02617 5 7.79882 5 7.5L5 7.49882C4.9993 7.20175 5.09433 6.97528 5.28405 6.78556C5.47384 6.59577 5.70118 6.5 6 6.5L21 6.5L21.0012 6.5C21.2983 6.4993 21.5247 6.59433 21.7144 6.78405C21.9042 6.97384 22 7.20119 22 7.5L22 7.50118C22.0007 7.79825 21.9057 8.02473 21.7159 8.21445C21.5262 8.40423 21.2988 8.5 21 8.5L6 8.5ZM22.5002 29.5H22.5C20.5572 29.5 18.9155 28.8209 17.5466 27.4519C16.1776 26.083 15.4991 24.4419 15.5 22.5002V22.5C15.5 20.5572 16.1791 18.9155 17.5481 17.5466C18.917 16.1776 20.5581 15.4991 22.4998 15.5H22.5C24.4428 15.5 26.0845 16.1791 27.4534 17.5481C28.8224 18.917 29.5009 20.5581 29.5 22.4998V22.5C29.5 24.4428 28.8209 26.0845 27.4519 27.4534C26.083 28.8224 24.4419 29.5009 22.5002 29.5ZM3 24.575H11.6939C11.822 25.2294 11.9994 25.8591 12.2264 26.4634C12.2378 26.4936 12.2493 26.5237 12.2609 26.5538L12.1286 26.4214C11.8911 26.184 11.5913 26.05 11.25 26.05C10.9087 26.05 10.6089 26.184 10.3714 26.4214L9.17145 27.6214C9.1089 27.684 9.05873 27.7 9 27.7C8.94127 27.7 8.8911 27.684 8.82855 27.6214L7.62855 26.4214C7.3911 26.184 7.09128 26.05 6.75 26.05C6.40872 26.05 6.1089 26.184 5.87145 26.4214L4.67145 27.6214C4.6089 27.684 4.55873 27.7 4.5 27.7C4.44127 27.7 4.3911 27.684 4.32855 27.6214L3.12855 26.4214C2.8911 26.184 2.59128 26.05 2.25 26.05C1.90872 26.05 1.6089 26.184 1.37145 26.4214L0.5 27.2929V3C0.5 2.30879 0.740483 1.72913 1.23555 1.23406C1.73061 0.739004 2.30958 0.499165 2.99939 0.500003H3H24C24.6912 0.500003 25.2709 0.740486 25.7659 1.23556C26.261 1.73061 26.5008 2.30958 26.5 2.9994V3V12.2529C26.2308 12.148 25.9578 12.0541 25.6812 11.9711C25.2943 11.855 24.9005 11.7605 24.5 11.6873V3V2.5H24H3H2.5V3V24.075V24.575H3ZM27 3V12.462V3ZM6 20.5L5.99882 20.5C5.70175 20.5007 5.47528 20.4057 5.28555 20.2159C5.09577 20.0262 5 19.7988 5 19.5L5 19.4988C4.9993 19.2017 5.09433 18.9753 5.28405 18.7856C5.47384 18.5958 5.70118 18.5 6 18.5H12.2529C12.148 18.7692 12.0541 19.0422 11.9711 19.3188C11.855 19.7057 11.7605 20.0995 11.6873 20.5L6 20.5ZM6 14.5L5.99882 14.5C5.70175 14.5007 5.47528 14.4057 5.28555 14.2159C5.09577 14.0262 5 13.7988 5 13.5L5 13.4988C4.9993 13.2017 5.09433 12.9753 5.28405 12.7856C5.47384 12.5958 5.70118 12.5 6 12.5H17.926C16.8146 13.0151 15.8216 13.6817 14.9495 14.5L6 14.5Z"
        fill="#3BB77E"
        stroke="#3BB77E"
      />
    </svg>
  );
};

export const FunnelIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width || "18"}
      height={height || "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2068 17.9371C11.009 17.9362 10.8151 17.8862 10.6456 17.7921L7.03379 15.7921C6.62748 15.5658 6.29115 15.2467 6.0572 14.8656C5.82325 14.4845 5.69956 14.0542 5.69804 13.6161V9.09111C5.69903 8.77171 5.59142 8.46007 5.39037 8.20011L0.347457 1.65811C0.229702 1.50709 0.159433 1.32897 0.144403 1.14342C0.129374 0.957862 0.170167 0.77208 0.262283 0.606571C0.3544 0.441062 0.494257 0.302259 0.666425 0.205478C0.838593 0.108698 1.03638 0.0577005 1.23796 0.0581142H16.7621C16.9639 0.0573383 17.1619 0.108113 17.3343 0.204817C17.5067 0.30152 17.6468 0.44038 17.739 0.606022C17.8311 0.771663 17.8719 0.957624 17.8566 1.14331C17.8414 1.329 17.7708 1.50718 17.6526 1.65811L12.6097 8.20011C12.4083 8.45998 12.3004 8.77161 12.301 9.09111V16.9251C12.3007 17.1931 12.1854 17.45 11.9803 17.6397C11.7752 17.8294 11.4971 17.9363 11.2068 17.9371ZM1.23796 1.06311L6.27221 7.62011C6.60485 8.04903 6.78297 8.56363 6.78137 9.09111V13.6151C6.78209 13.8805 6.85694 14.1412 6.9987 14.3721C7.14046 14.603 7.34433 14.7962 7.59062 14.9331L11.2025 16.9331L11.2176 9.09011C11.2164 8.56253 11.3949 8.04794 11.7279 7.61911L16.7697 1.07711L1.23796 1.06311Z"
        fill="#3BB77E"
      />
    </svg>
  );
};

export const CancelledIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width || "30"}
      height={height || "30"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4658 21.7466L20.4598 21.7402L20.4536 21.7339L8.27297 9.55336C8.11629 9.38227 8.03112 9.1575 8.03522 8.92534C8.03936 8.69056 8.13447 8.46655 8.30051 8.30051C8.46655 8.13447 8.69056 8.03936 8.92534 8.03522C9.1575 8.03112 9.38227 8.11629 9.55336 8.27297L21.7339 20.4536L21.7402 20.4598L21.7466 20.4658C21.8357 20.5488 21.9071 20.6488 21.9566 20.76C22.0062 20.8712 22.0328 20.9912 22.0349 21.1128C22.0371 21.2345 22.0147 21.3554 21.9691 21.4682C21.9235 21.5811 21.8557 21.6836 21.7696 21.7696C21.6836 21.8557 21.5811 21.9235 21.4682 21.9691C21.3554 22.0147 21.2345 22.0371 21.1128 22.0349C20.9912 22.0328 20.8712 22.0062 20.76 21.9566C20.6488 21.9071 20.5488 21.8357 20.4658 21.7466ZM23.9714 23.9714C26.3508 21.592 27.6875 18.3649 27.6875 15C27.6875 11.6351 26.3508 8.40795 23.9714 6.02858C21.592 3.64921 18.3649 2.3125 15 2.3125C11.6351 2.3125 8.40795 3.64921 6.02858 6.02858C3.64921 8.40795 2.3125 11.6351 2.3125 15C2.3125 18.3649 3.64921 21.592 6.02858 23.9714C8.40795 26.3508 11.6351 27.6875 15 27.6875C18.3649 27.6875 21.592 26.3508 23.9714 23.9714ZM29.5 15C29.5 18.8456 27.9723 22.5338 25.253 25.253C22.5338 27.9723 18.8456 29.5 15 29.5C11.1544 29.5 7.46623 27.9723 4.74695 25.253C2.02767 22.5338 0.5 18.8456 0.5 15C0.5 11.1544 2.02767 7.46623 4.74695 4.74695C7.46623 2.02767 11.1544 0.5 15 0.5C18.8456 0.5 22.5338 2.02767 25.253 4.74695C27.9723 7.46623 29.5 11.1544 29.5 15Z"
        fill="#3BB77E"
        stroke="#3BB77E"
      />
    </svg>
  );
};

export const DeliveredIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width || "30"}
      height={height || "31"}
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0235 16.5918C26.3695 16.4318 25.67 16.3378 24.9653 16.3077V10.9944V10.1369L24.2191 10.5592L15.0446 15.751L14.7908 15.8946V16.1862V26.4171V26.4527L14.7959 26.4879L14.8016 26.528C14.9288 27.4176 15.0661 28.3778 15.4127 29.2558L14.4461 29.7921C14.1173 29.9561 13.9251 30.04 13.7617 30.04C13.5984 30.04 13.4063 29.9561 13.0776 29.7922L1.02615 23.0892C0.692149 22.8614 0.5 22.5517 0.5 22.1415V8.3985C0.5 7.98826 0.69215 7.67859 1.02615 7.45083L13.0775 0.747799C13.4063 0.583886 13.5984 0.5 13.7617 0.5C13.9251 0.5 14.1172 0.583885 14.4459 0.747798L26.4973 7.45083C26.8313 7.67859 27.0235 7.98826 27.0235 8.3985V16.5918ZM14.0024 2.92115L13.7669 2.79181L13.5291 2.91681L10.6239 4.44381L9.81956 4.86655L10.6071 5.31976L19.6287 10.5116L19.8723 10.6518L20.1188 10.5164L23.1769 8.83675L23.9748 8.3985L23.1769 7.96025L14.0024 2.92115ZM8.05316 6.13592L7.80302 5.98773L7.5505 6.13183L4.33943 7.96423L3.57524 8.40032L4.34099 8.83366L13.5155 14.0255L13.7581 14.1628L14.0024 14.0285L17.0606 12.3488L17.8286 11.927L17.0747 11.4804L8.05316 6.13592ZM3.30442 10.5592L2.55816 10.1369V10.9944V21.2253V21.5169L2.81191 21.6605L11.9864 26.8523L12.7327 27.2746V26.4171V16.1862V15.8946L12.4789 15.751L3.30442 10.5592ZM22.1242 26.9236L22.4775 27.2764L22.8308 26.9236L27.9689 21.7925L29.2753 23.1975L22.6428 29.821L19.0305 25.9559L20.0467 24.8489L22.1242 26.9236Z"
        fill="#3BB77E"
        stroke="#3BB77E"
      />
    </svg>
  );
};

export const UploadIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
  className,
}) => {
  return (
    <svg
      width={width || "34"}
      height={height || "34"}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 4C17.131 3.99992 17.2604 4.0272 17.3794 4.07997C17.4984 4.13273 17.6041 4.20973 17.6893 4.30567L21.3172 8.389C21.4737 8.56537 21.5512 8.7945 21.5326 9.02598C21.514 9.25746 21.4009 9.47234 21.218 9.62333C21.0352 9.77433 20.7977 9.84908 20.5578 9.83114C20.3178 9.8132 20.0951 9.70404 19.9386 9.52767L17.907 7.241V20.0417C17.907 20.2737 17.8114 20.4963 17.6413 20.6604C17.4712 20.8245 17.2405 20.9167 17 20.9167C16.7595 20.9167 16.5288 20.8245 16.3587 20.6604C16.1886 20.4963 16.093 20.2737 16.093 20.0417V7.23983L14.0614 9.52767C13.9839 9.615 13.8893 9.68674 13.7831 9.73881C13.6768 9.79088 13.561 9.82226 13.4422 9.83114C13.3234 9.84002 13.2039 9.82624 13.0907 9.79059C12.9774 9.75493 12.8725 9.6981 12.782 9.62333C12.6914 9.54857 12.6171 9.45733 12.5631 9.35484C12.5091 9.25235 12.4766 9.1406 12.4674 9.02598C12.4582 8.91136 12.4725 8.79612 12.5094 8.68682C12.5464 8.57753 12.6053 8.47633 12.6828 8.389L16.3107 4.30567C16.3959 4.20973 16.5016 4.13273 16.6206 4.07997C16.7396 4.0272 16.869 3.99992 17 4ZM10.9487 12.169C11.1892 12.1678 11.4204 12.2588 11.5914 12.422C11.7624 12.5852 11.8592 12.8073 11.8605 13.0393C11.8617 13.2714 11.7674 13.4944 11.5982 13.6594C11.4291 13.8244 11.1989 13.9178 10.9583 13.919C9.63656 13.926 8.69935 13.9587 7.98707 14.0847C7.3026 14.2072 6.90474 14.402 6.61088 14.6855C6.27591 15.0087 6.05823 15.4625 5.93851 16.3188C5.81637 17.1997 5.81395 18.3675 5.81395 20.0417V21.2083C5.81395 22.8837 5.81637 24.0515 5.93851 24.9323C6.05823 25.7887 6.27712 26.2413 6.61088 26.5657C6.94586 26.8877 7.41507 27.0977 8.30391 27.2132C9.21572 27.3322 10.4274 27.3333 12.1628 27.3333H21.8372C23.5726 27.3333 24.7831 27.3322 25.6973 27.2132C26.5849 27.0977 27.0541 26.8877 27.3891 26.5645C27.7241 26.2413 27.9418 25.7887 28.0615 24.9323C28.1836 24.0515 28.186 22.8837 28.186 21.2083V20.0417C28.186 18.3675 28.1836 17.1997 28.0615 16.3177C27.9418 15.4625 27.7229 15.0087 27.3891 14.6855C27.094 14.402 26.6974 14.2072 26.0129 14.0847C25.3006 13.9587 24.3634 13.926 23.0417 13.919C22.9226 13.9184 22.8048 13.8951 22.695 13.8506C22.5852 13.8061 22.4855 13.7411 22.4018 13.6594C22.318 13.5777 22.2517 13.4809 22.2067 13.3745C22.1617 13.2681 22.1389 13.1542 22.1395 13.0393C22.1402 12.9244 22.1643 12.8108 22.2104 12.7048C22.2566 12.5989 22.3239 12.5028 22.4086 12.422C22.4933 12.3412 22.5936 12.2772 22.7039 12.2338C22.8142 12.1904 22.9322 12.1684 23.0513 12.169C24.3598 12.176 25.4494 12.2063 26.3407 12.3638C27.2573 12.5272 28.0373 12.8363 28.6722 13.4488C29.4002 14.15 29.7122 15.0355 29.8597 16.0855C30 17.0958 30 18.3827 30 19.9775V21.2725C30 22.8685 30 24.1542 29.8597 25.1657C29.7122 26.2157 29.4002 27.1 28.6722 27.8023C27.9442 28.5047 27.0275 28.8057 25.9392 28.948C24.8907 29.0833 23.5568 29.0833 21.9037 29.0833H12.0963C10.4432 29.0833 9.1093 29.0833 8.06084 28.948C6.97246 28.8068 6.05581 28.5047 5.32781 27.8023C4.59981 27.1 4.28781 26.2157 4.14149 25.1657C4 24.1542 4 22.8673 4 21.2725V19.9775C4 18.3827 4 17.0958 4.14149 16.0843C4.2866 15.0343 4.60102 14.15 5.32781 13.4477C5.9627 12.8363 6.7427 12.526 7.65935 12.3638C8.5506 12.2063 9.64019 12.176 10.9487 12.169Z"
        fill="white"
      />
    </svg>
  );
};

export const ChevronDownIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9889 16.4717C11.7579 16.4697 11.5367 16.378 11.3719 16.216L2.64464 7.48875C2.48567 7.32415 2.3977 7.1037 2.39969 6.87487C2.40168 6.64605 2.49346 6.42716 2.65527 6.26535C2.81708 6.10353 3.03598 6.01175 3.2648 6.00976C3.49363 6.00777 3.71408 6.09574 3.87868 6.25471L11.9889 14.365L20.0992 6.25471C20.1797 6.17136 20.276 6.10487 20.3825 6.05914C20.4889 6.0134 20.6035 5.98932 20.7193 5.98831C20.8352 5.98731 20.9501 6.00939 21.0574 6.05327C21.1647 6.09715 21.2621 6.16195 21.344 6.2439C21.426 6.32584 21.4908 6.42328 21.5347 6.53054C21.5786 6.63779 21.6006 6.75271 21.5996 6.86859C21.5986 6.98447 21.5745 7.09899 21.5288 7.20547C21.4831 7.31194 21.4166 7.40824 21.3332 7.48875L12.606 16.216C12.4412 16.378 12.22 16.4697 11.9889 16.4717Z"
        fill="#B9BBBD"
      />
    </svg>
  );
};

export const ExportIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 19H3C2.73478 19 2.48043 19.1054 2.29289 19.2929C2.10536 19.4804 2 19.7348 2 20C2 20.2652 2.10536 20.5196 2.29289 20.7071C2.48043 20.8946 2.73478 21 3 21H21C21.2652 21 21.5196 20.8946 21.7071 20.7071C21.8946 20.5196 22 20.2652 22 20C22 19.7348 21.8946 19.4804 21.7071 19.2929C21.5196 19.1054 21.2652 19 21 19Z"
        fill="#3BB77E"
      />
      <path
        d="M12.0002 2C11.735 2 11.4806 2.10536 11.2931 2.29289C11.1055 2.48043 11.0002 2.73478 11.0002 3V13.59L7.71019 10.29C7.52188 10.1017 7.26649 9.99591 7.00019 9.99591C6.73388 9.99591 6.47849 10.1017 6.29019 10.29C6.10188 10.4783 5.99609 10.7337 5.99609 11C5.99609 11.2663 6.10188 11.5217 6.29019 11.71L11.2902 16.71C11.3831 16.8037 11.4937 16.8781 11.6156 16.9289C11.7375 16.9797 11.8682 17.0058 12.0002 17.0058C12.1322 17.0058 12.2629 16.9797 12.3848 16.9289C12.5066 16.8781 12.6172 16.8037 12.7102 16.71L17.7102 11.71C17.8034 11.6168 17.8774 11.5061 17.9278 11.3843C17.9783 11.2624 18.0043 11.1319 18.0043 11C18.0043 10.8681 17.9783 10.7376 17.9278 10.6158C17.8774 10.4939 17.8034 10.3832 17.7102 10.29C17.6169 10.1968 17.5063 10.1228 17.3844 10.0723C17.2626 10.0219 17.132 9.99591 17.0002 9.99591C16.8683 9.99591 16.7378 10.0219 16.6159 10.0723C16.4941 10.1228 16.3834 10.1968 16.2902 10.29L13.0002 13.59V3C13.0002 2.73478 12.8948 2.48043 12.7073 2.29289C12.5198 2.10536 12.2654 2 12.0002 2Z"
        fill="#3BB77E"
      />
    </svg>
  );
};

export const DoubledChevronDown: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width="54"
      height="44"
      viewBox="0 0 54 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_94_1476)">
        <rect x="4" width="46" height="36" rx="5.56997" fill="#F9FAFB" />
        <path d="M15 10L26.8519 22L39 10" stroke="#A3A3A3" />
        <path d="M15 14L26.8519 26L39 14" stroke="#A3A3A3" />
      </g>
      <defs>
        <filter
          id="filter0_d_94_1476"
          x="0"
          y="0"
          width="54"
          height="44"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_94_1476"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_94_1476"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const ArrowUpIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width || "6"}
      height={height || "6"}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_324_1840)">
        <path
          d="M0.879562 2.79554C0.96781 2.88449 1.08748 2.93445 1.21227 2.93445C1.33705 2.93445 1.45673 2.88449 1.54497 2.79554L2.38874 1.94488L2.38874 5.06951C2.38874 5.19534 2.43832 5.31601 2.52657 5.40499C2.61482 5.49396 2.73452 5.54395 2.85933 5.54395C2.98413 5.54395 3.10383 5.49396 3.19208 5.40499C3.28034 5.31601 3.32992 5.19534 3.32992 5.06951L3.32992 1.94488L4.17368 2.79554C4.26243 2.88197 4.38131 2.92979 4.50469 2.9287C4.62808 2.92762 4.74611 2.87773 4.83336 2.78976C4.92061 2.7018 4.9701 2.58281 4.97117 2.45841C4.97225 2.33401 4.92481 2.21417 4.83909 2.12469L3.19203 0.464169C3.10378 0.375226 2.98411 0.325261 2.85933 0.325261C2.73454 0.325261 2.61487 0.375226 2.52662 0.464169L0.879562 2.12469C0.79134 2.21366 0.74178 2.33431 0.74178 2.46012C0.74178 2.58592 0.79134 2.70657 0.879562 2.79554V2.79554Z"
          fill="#00A389"
        />
      </g>
      <defs>
        <clipPath id="clip0_324_1840">
          <rect
            width="5.64706"
            height="5.69322"
            fill="white"
            transform="translate(5.68286 5.78125) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowDownIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width || "6"}
      height={height || "6"}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_324_1521)">
        <path
          d="M0.901534 3.74451L2.54859 5.40504C2.63684 5.49398 2.75652 5.54395 2.8813 5.54395C3.00608 5.54395 3.12576 5.49398 3.21401 5.40504L4.86106 3.74451C4.94679 3.65504 4.99422 3.53519 4.99315 3.4108C4.99207 3.2864 4.94258 3.16741 4.85533 3.07944C4.76808 2.99148 4.65005 2.94158 4.52667 2.9405C4.40328 2.93942 4.28441 2.98724 4.19565 3.07366L3.35189 3.92433L3.35189 0.799697C3.35189 0.673869 3.30231 0.553194 3.21406 0.46422C3.1258 0.375247 3.00611 0.325261 2.8813 0.325261C2.75649 0.325261 2.6368 0.375247 2.54854 0.46422C2.46029 0.553194 2.41071 0.673868 2.41071 0.799696L2.41071 3.92433L1.56695 3.07366C1.47819 2.98724 1.35932 2.93942 1.23593 2.9405C1.11255 2.94158 0.994518 2.99148 0.907267 3.07944C0.820016 3.16741 0.770525 3.2864 0.769453 3.4108C0.76838 3.53519 0.815813 3.65503 0.901534 3.74451V3.74451Z"
          fill="#FF5B5B"
        />
      </g>
      <defs>
        <clipPath id="clip0_324_1521">
          <rect
            width="5.64706"
            height="5.69322"
            fill="white"
            transform="translate(5.70483 5.78125) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const VertIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="3.5" r="2.5" fill="#B9BBBD" />
      <circle cx="12.5" cy="11.5" r="2.5" fill="#B9BBBD" />
      <circle cx="12.5" cy="19.5" r="2.5" fill="#B9BBBD" />
    </svg>
  );
};

export const ShoppingCartIcon: FunctionComponent<HomeIconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      fill={fill || "#000000"}
      width={width || "24"}
      height={height || "24"}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 296.605 296.605"
      enable-background="new 0 0 296.605 296.605"
    >
      <g>
        <polygon points="71.999,157.105 84.982,214.105 257.982,214.105 270.885,157.105  "/>
        <polygon points="278.128,125.105 291.482,66.105 84.715,66.105 73.983,19.968 15.842,0 5.123,31.211 45.981,45.243 64.556,125.105     "/>
        <circle cx="117.982" cy="264.105" r="32.5"/>
        <circle cx="224.982" cy="264.105" r="32.5"/>
      </g>
    </svg>
  );
};

export const UserIcon: FunctionComponent<HomeIconProps> = ({
  width = "24",
  height = "24",
  fill = "#000000",
}) => {
  return (
    <svg
      fill={fill}
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M7.5,5C5.6,5,4,6.6,4,8.5S5.6,12,7.5,12S11,10.4,11,8.5S9.4,5,7.5,5z M16.5,5C14.6,5,13,6.6,13,8.5s1.6,3.5,3.5,3.5
        S20,10.4,20,8.5S18.4,5,16.5,5z M7.5,14C2.6,14,1,18,1,18v2h13v-2C14,18,12.4,14,7.5,14z M16.5,14c-1.5,0-2.7,0.4-3.6,0.9
        c1.4,1.2,2,2.6,2.1,2.7l0.1,0.2V20h8v-2C23,18,21.4,14,16.5,14z" />
      <rect width={width} height={height} fill="none" />
    </svg>
  );
};

export const OrderCancelIcon: FunctionComponent<HomeIconProps> = ({
  width = "24",
  height = "24",
  fill = "#000000",
}) => {
  return (
    <svg fill={fill} width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g> 
        <path d="M13,3.05A7,7,0,1,0,13,13,7,7,0,0,0,13,3.05ZM12,12A5.6,5.6,0,0,1,4,12,5.61,5.61,0,0,1,4,4,5.6,5.6,0,0,1,
          12,4,5.61,5.61,0,0,1,12,12ZM10.65,4.08,8,6.73,5.35,4.08,4.08,5.35,6.73,8,4.08,10.65l1.27,1.27L8,9.27
          l2.65,2.65,1.27-1.27L9.27,8l2.65-2.65Z"
        />
      </g>    
    </svg>
  );
};

export const OrderCompletedIcon: FunctionComponent<HomeIconProps> = ({
  width = "24",
  height = "24",
  fill = "#000000",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      fill={fill}
    >
      <path d="M959.018 208.158c0.23-2.721 0.34-5.45 0.34-8.172 0-74.93-60.96-135.89-135.89-135.89-1.54 0-3.036 
        0.06-6.522 0.213l-611.757-0.043c-1.768-0.085-3.563-0.17-5.424-0.17-74.812 0-135.67 
        60.84-135.67 135.712l0.188 10.952h-0.306l0.391 594.972-0.162 20.382c0 74.03 60.22 134.25 134.24 134.25 1.668 
        0 7.007-0.239 7.1-0.239l608.934 0.085c2.985 0.357 6.216 0.468 9.55 0.468 35.815 0 69.514-13.954 94.879-39.302 
        25.373-25.34 39.344-58.987 39.344-94.794l-0.145-12.015h0.918l-0.008-606.41z m-757.655 693.82l-2.585-0.203c-42.524 
        0-76.146-34.863-76.537-79.309V332.671H900.79l0.46 485.186-0.885 2.865c-0.535 1.837-0.8 3.58-0.8 5.17 
        0 40.382-31.555 73.766-71.852 76.002l-10.816 0.621v-0.527l-615.533-0.01zM900.78 274.424H122.3l-0.375-65.934 
        0.85-2.924c0.52-1.82 0.782-3.63 0.782-5.247 0-42.236 34.727-76.665 78.179-76.809l0.45-0.068 618.177 0.018 2.662 0.203c42.329 0 76.767 
        34.439 76.767 76.768 0 1.326 0.196 2.687 0.655 4.532l0.332 0.884v68.577z" fill=""
      />
      <path d="M697.67 471.435c-7.882 0-15.314 3.078-20.918 8.682l-223.43 223.439L346.599 596.84c-5.544-5.603-12.95-8.69-20.842-8.69s-15.323 
        3.078-20.918 8.665c-5.578 5.518-8.674 12.9-8.7 20.79-0.017 7.908 3.07 15.357 8.69 20.994l127.55 127.558c5.57 5.56 13.01 8.622 20.943 8.622 
        7.925 0 15.364-3.06 20.934-8.63l244.247-244.247c5.578-5.511 8.674-12.883 8.7-20.783 
        0.017-7.942-3.079-15.408-8.682-20.986-5.552-5.612-12.958-8.698-20.85-8.698z" fill=""
      />
    </svg>
  );
};

export const OrderListIcon: FunctionComponent<HomeIconProps> = ({
  width = "24",
  height = "24",
  fill = "#000000",
}) => {
  return (
    <svg
      fill={fill}
      height={height}
      width={width} 
	    viewBox="0 0 502 502"
      stroke="#ffffff"
      strokeWidth="20"
    >
      <g>
        <g>
          <g>
            <path d="M459.293,235.969H231.644c-23.549,0-42.707-19.158-42.707-42.707s19.158-42.707,42.707-42.707h227.649
              c23.549,0,42.707,19.158,42.707,42.707S482.842,235.969,459.293,235.969z M231.644,170.555
              c-12.521,0-22.707,10.187-22.707,22.707s10.187,22.707,22.707,22.707h227.649c12.521,0,22.707-10.187,22.707-22.707
              s-10.187-22.707-22.707-22.707H231.644z"
            />
          </g>
        </g>
        <g>
          <g>
            <path d="M459.293,351.261H42.707C19.158,351.261,0,332.103,0,308.554s19.158-42.707,42.707-42.707h416.586
              c23.549,0,42.707,19.158,42.707,42.707S482.842,351.261,459.293,351.261z M42.707,285.847C30.187,285.847,20,296.034,20,308.554
              s10.187,22.707,22.707,22.707h416.586c12.521,0,22.707-10.187,22.707-22.707s-10.187-22.707-22.707-22.707H42.707z"
            />
          </g>
        </g>
        <g>
          <g>
            <path d="M459.293,120.875H231.644c-23.549,0-42.707-19.158-42.707-42.707s19.158-42.707,42.707-42.707h227.649
              C482.842,35.461,502,54.62,502,78.168S482.842,120.875,459.293,120.875z M231.644,55.461c-12.521,0-22.707,10.187-22.707,22.707
              s10.187,22.707,22.707,22.707h227.649c12.521,0,22.707-10.187,22.707-22.707s-10.187-22.707-22.707-22.707H231.644z"
            />
          </g>
        </g>
        <g>
          <g>
            <path d="M459.293,466.554H42.707C19.158,466.554,0,447.396,0,423.847s19.158-42.707,42.707-42.707h416.586
              c23.549,0,42.707,19.158,42.707,42.707S482.842,466.554,459.293,466.554z M42.707,401.14C30.187,401.14,20,411.326,20,423.847
              s10.187,22.707,22.707,22.707h416.586c12.521,0,22.707-10.187,22.707-22.707s-10.187-22.707-22.707-22.707H42.707z"
            />
          </g>
        </g>
        <g>
          <path d="M309.842,84.521h-76.379c-5.523,0-10-4.477-10-10s4.477-10,10-10h76.379c5.523,0,10,4.477,10,10
            S315.365,84.521,309.842,84.521z"
          />
        </g>
        <g>
          <path d="M356.45,84.521h-13.901c-5.523,0-10-4.477-10-10s4.477-10,10-10h13.901c5.523,0,10,4.477,10,10
            S361.973,84.521,356.45,84.521z"
          />
        </g>
        <g>
          <g>
            <path d="M93.241,184.79c-5.523,0-10-4.477-10-10V45.446c0-5.523,4.477-10,10-10s10,4.477,10,10V174.79
              C103.241,180.313,98.764,184.79,93.241,184.79z"
            />
          </g>
          <g>
            <path d="M93.241,235.835c-2.559,0-5.119-0.976-7.071-2.929l-70.1-70.1c-3.905-3.905-3.905-10.237,0-14.143s10.237-3.905,14.143,0
              l63.029,63.029l63.029-63.029c3.905-3.905,10.237-3.905,14.143,0s3.905,10.237,0,14.143l-70.1,70.1
              C98.36,234.859,95.8,235.835,93.241,235.835z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
