import { twMerge } from "tailwind-merge";
import Button from "../Button";
import { useRef } from "react";
import TooltipButton from "./TooltipButton";
import ThemeButton from "./ThemeButton";

const TopNav = ({ className }: { className?: string }) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <header className={twMerge("", className)}>
      <nav className='border-b border-hover px-3 sm:px-7 py-3 sm:py-5 flex justify-between items-center'>
        {/* LEFT SIDE */}
        <div className='flex items-center gap-2'>
          <div className='flex gap-2 items-center '>
            <TooltipButton
              htmlFor='checkL'
              tooltip='sidebar'
              shortCut='⌘ s'
              className='hidden lg:flex'
            >
              <svg
                className='peer'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.875 3.75V16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H6.875Z'
                  fill='currentColor'
                  fillOpacity='0.05'
                />
                <path
                  d='M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM3.125 11.875H4.375C4.54076 11.875 4.69973 11.8092 4.81694 11.6919C4.93415 11.5747 5 11.4158 5 11.25C5 11.0842 4.93415 10.9253 4.81694 10.8081C4.69973 10.6908 4.54076 10.625 4.375 10.625H3.125V9.375H4.375C4.54076 9.375 4.69973 9.30915 4.81694 9.19194C4.93415 9.07473 5 8.91576 5 8.75C5 8.58424 4.93415 8.42527 4.81694 8.30806C4.69973 8.19085 4.54076 8.125 4.375 8.125H3.125V6.875H4.375C4.54076 6.875 4.69973 6.80915 4.81694 6.69194C4.93415 6.57473 5 6.41576 5 6.25C5 6.08424 4.93415 5.92527 4.81694 5.80806C4.69973 5.69085 4.54076 5.625 4.375 5.625H3.125V4.375H6.25V15.625H3.125V11.875ZM16.875 15.625H7.5V4.375H16.875V15.625Z'
                  fill='currentcolor'
                />
              </svg>
            </TooltipButton>
            <TooltipButton tooltip='Favorites' shortCut='⌘ f'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.3851 11.5391C14.2995 11.6143 14.2358 11.7114 14.2009 11.8199C14.1659 11.9284 14.161 12.0444 14.1867 12.1555L15.2429 16.7289C15.2709 16.8484 15.263 16.9734 15.2204 17.0884C15.1777 17.2034 15.1022 17.3033 15.0031 17.3757C14.9041 17.4481 14.786 17.4897 14.6634 17.4955C14.5409 17.5012 14.4194 17.4707 14.314 17.4078L10.3218 14.9859C10.2248 14.927 10.1135 14.8958 9.99998 14.8958C9.88645 14.8958 9.7751 14.927 9.6781 14.9859L5.68591 17.4078C5.58058 17.4707 5.45907 17.5012 5.33654 17.4955C5.214 17.4897 5.09585 17.4481 4.99682 17.3757C4.89778 17.3033 4.82223 17.2034 4.77959 17.0884C4.73695 16.9734 4.72909 16.8484 4.75701 16.7289L5.81326 12.1555C5.83893 12.0444 5.83404 11.9284 5.7991 11.8199C5.76416 11.7114 5.70048 11.6143 5.61482 11.5391L2.0906 8.46485C1.99638 8.38477 1.92803 8.27854 1.8942 8.1596C1.86038 8.04067 1.86259 7.91437 1.90056 7.79669C1.93853 7.67902 2.01056 7.57524 2.10752 7.49851C2.20449 7.42178 2.32203 7.37554 2.44529 7.36563L7.0906 6.96407C7.20393 6.95397 7.31236 6.91313 7.40419 6.84594C7.49602 6.77876 7.56777 6.68778 7.61169 6.58282L9.42654 2.25782C9.47501 2.146 9.55512 2.05079 9.657 1.98391C9.75889 1.91703 9.8781 1.8814 9.99998 1.8814C10.1218 1.8814 10.2411 1.91703 10.3429 1.98391C10.4448 2.05079 10.5249 2.146 10.5734 2.25782L12.3883 6.58282C12.4322 6.68778 12.5039 6.77876 12.5958 6.84594C12.6876 6.91313 12.796 6.95397 12.9094 6.96407L17.5547 7.36563C17.6779 7.37554 17.7955 7.42178 17.8924 7.49851C17.9894 7.57524 18.0614 7.67902 18.0994 7.79669C18.1374 7.91437 18.1396 8.04067 18.1057 8.1596C18.0719 8.27854 18.0036 8.38477 17.9094 8.46485L14.3851 11.5391Z'
                  fill='currentColor'
                  fillOpacity='0.05'
                />
                <path
                  d='M18.6875 7.60078C18.6118 7.36749 18.4692 7.16161 18.2773 7.00881C18.0855 6.856 17.8529 6.763 17.6086 6.7414L12.9688 6.3414L11.15 2.0164C11.0553 1.78946 10.8956 1.59561 10.691 1.45926C10.4863 1.32291 10.2459 1.25015 10 1.25015C9.75411 1.25015 9.51371 1.32291 9.30907 1.45926C9.10443 1.59561 8.94471 1.78946 8.85002 2.0164L7.03674 6.3414L2.39142 6.74375C2.14614 6.76436 1.9124 6.85693 1.71952 7.00985C1.52663 7.16278 1.38319 7.36924 1.30718 7.60336C1.23117 7.83748 1.22598 8.08883 1.29225 8.32589C1.35852 8.56295 1.49331 8.77517 1.6797 8.93593L5.20392 12.0156L4.14767 16.5891C4.09182 16.8284 4.10776 17.0789 4.19349 17.3092C4.27923 17.5395 4.43095 17.7395 4.6297 17.884C4.82845 18.0286 5.0654 18.1113 5.31093 18.122C5.55647 18.1326 5.79968 18.0706 6.01017 17.9437L9.99455 15.5219L13.9875 17.9437C14.198 18.0706 14.4412 18.1326 14.6868 18.122C14.9323 18.1113 15.1692 18.0286 15.368 17.884C15.5667 17.7395 15.7185 17.5395 15.8042 17.3092C15.8899 17.0789 15.9059 16.8284 15.85 16.5891L14.7945 12.0109L18.318 8.93593C18.5044 8.77462 18.6389 8.56179 18.7046 8.32423C18.7704 8.08667 18.7644 7.83497 18.6875 7.60078ZM17.4985 7.9914L13.975 11.0664C13.8035 11.2156 13.676 11.4087 13.606 11.6249C13.5361 11.8412 13.5265 12.0724 13.5781 12.2937L14.6367 16.875L10.6469 14.4531C10.4522 14.3346 10.2287 14.2719 10.0008 14.2719C9.77288 14.2719 9.54936 14.3346 9.3547 14.4531L5.37033 16.875L6.42189 12.2969C6.47357 12.0755 6.46393 11.8443 6.394 11.6281C6.32407 11.4118 6.1965 11.2187 6.02502 11.0695L2.50002 7.99609C2.49973 7.99376 2.49973 7.99139 2.50002 7.98906L7.14377 7.5875C7.37049 7.56751 7.58745 7.48601 7.77125 7.35177C7.95505 7.21754 8.09871 7.03567 8.18674 6.82578L10 2.50625L11.8125 6.82578C11.9005 7.03567 12.0442 7.21754 12.228 7.35177C12.4118 7.48601 12.6288 7.56751 12.8555 7.5875L17.5 7.98906C17.5 7.98906 17.5 7.99375 17.5 7.99453L17.4985 7.9914Z'
                  fill='currentColor'
                />
              </svg>
            </TooltipButton>
          </div>

          <div className='hidden sm:flex items-center gap-2 rounded-lg'>
            <Button className='px-2 py-1 text-soft hover:px-3'>
              Dashboards
            </Button>
            <span className='text-softer rounded-lg text-sm'>/</span>
            <Button className='px-2 py-1 rounded-lg text-sm hover:px-3'>
              Default
            </Button>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className='flex gap-5 '>
          {/* SEARCH CONTAINER */}
          <div
            onClick={() => searchRef.current?.focus()}
            className='group peer w-8 sm:w-40 focus-within:w-40 flex items-center gap-2 px-2 py-1 rounded-lg text-softer bg-hover-soft cursor-pointer hover:bg-hover dark:hover:bg-hover custom-focus-within'
          >
            <div className='flex items-center gap-2 w-[116px] group-focus-within:text-main-txt '>
              <i>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13.3501 13.3563C13.2568 13.4482 13.1311 13.4998 13.0001 13.5C12.8673 13.4994 12.7398 13.448 12.6438 13.3563L9.94385 10.65C8.80671 11.6051 7.34474 12.0844 5.86285 11.9878C4.38095 11.8912 2.99355 11.2263 1.99 10.1316C0.986453 9.03701 0.444243 7.5972 0.476455 6.11251C0.508667 4.62782 1.11282 3.21288 2.1629 2.1628C3.21298 1.11272 4.62791 0.50857 6.1126 0.476358C7.59729 0.444145 9.0371 0.986356 10.1317 1.9899C11.2264 2.99345 11.8913 4.38086 11.9879 5.86275C12.0845 7.34465 11.6052 8.80662 10.6501 9.94375L13.3501 12.6438C13.3973 12.6903 13.4349 12.7457 13.4605 12.8069C13.4861 12.8681 13.4993 12.9337 13.4993 13C13.4993 13.0663 13.4861 13.1319 13.4605 13.1931C13.4349 13.2543 13.3973 13.3097 13.3501 13.3563ZM6.2501 11C7.18956 11 8.10792 10.7214 8.88906 10.1995C9.67019 9.67754 10.279 8.9357 10.6385 8.06775C10.998 7.1998 11.0921 6.24473 10.9088 5.32332C10.7255 4.40191 10.2732 3.55554 9.60885 2.89124C8.94455 2.22694 8.09819 1.77455 7.17678 1.59127C6.25537 1.40799 5.3003 1.50206 4.43235 1.86157C3.5644 2.22109 2.82255 2.82991 2.30062 3.61104C1.77868 4.39217 1.5001 5.31054 1.5001 6.25C1.50175 7.50927 2.00273 8.71649 2.89317 9.60693C3.78361 10.4974 4.99083 10.9983 6.2501 11Z'
                    fill='currentColor'
                    fillOpacity='1'
                  />
                </svg>
              </i>
              <input
                ref={searchRef}
                type='text'
                placeholder='Search'
                className='outline-none bg-transparent w-[90%] cursor-pointer focus:cursor-default placeholder:text-softer '
              />
            </div>
            <span className='hidden group-focus-within:block sm:block hover:pr-1 duration-500 '>
              ⌘/
            </span>
          </div>
          {/* ICONS LIST */}
          <div className='flex items-center gap-2 rounded-lg '>
            <ThemeButton />
            <TooltipButton tooltip='Activities' shortCut='⌘ A'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.875 10C16.875 11.3597 16.4718 12.689 15.7164 13.8195C14.9609 14.9501 13.8872 15.8313 12.631 16.3517C11.3747 16.872 9.99238 17.0082 8.65876 16.7429C7.32514 16.4776 6.10013 15.8228 5.13864 14.8614C4.17716 13.8999 3.52238 12.6749 3.2571 11.3412C2.99183 10.0076 3.12798 8.62529 3.64833 7.36905C4.16868 6.11281 5.04987 5.03908 6.18046 4.28365C7.31105 3.52821 8.64026 3.125 10 3.125C11.8234 3.125 13.5721 3.84933 14.8614 5.13864C16.1507 6.42795 16.875 8.17664 16.875 10Z'
                  fill='CurrentColor'
                  fillOpacity='0.05'
                />
                <path
                  d='M10.625 6.25V9.64609L13.4469 11.3391C13.589 11.4244 13.6914 11.5628 13.7316 11.7236C13.7717 11.8845 13.7463 12.0547 13.6609 12.1969C13.5756 12.339 13.4372 12.4414 13.2764 12.4816C13.1155 12.5217 12.9453 12.4963 12.8031 12.4109L9.67812 10.5359C9.58563 10.4804 9.50911 10.4018 9.45599 10.3079C9.40287 10.214 9.37497 10.1079 9.375 10V6.25C9.375 6.08424 9.44085 5.92527 9.55806 5.80806C9.67527 5.69085 9.83424 5.625 10 5.625C10.1658 5.625 10.3247 5.69085 10.4419 5.80806C10.5592 5.92527 10.625 6.08424 10.625 6.25ZM10 2.5C9.01406 2.49754 8.03742 2.69065 7.12661 3.06815C6.21579 3.44564 5.38889 4.00003 4.69375 4.69922C4.12578 5.27422 3.62109 5.82734 3.125 6.40625V5C3.125 4.83424 3.05915 4.67527 2.94194 4.55806C2.82473 4.44085 2.66576 4.375 2.5 4.375C2.33424 4.375 2.17527 4.44085 2.05806 4.55806C1.94085 4.67527 1.875 4.83424 1.875 5V8.125C1.875 8.29076 1.94085 8.44973 2.05806 8.56694C2.17527 8.68415 2.33424 8.75 2.5 8.75H5.625C5.79076 8.75 5.94973 8.68415 6.06694 8.56694C6.18415 8.44973 6.25 8.29076 6.25 8.125C6.25 7.95924 6.18415 7.80027 6.06694 7.68306C5.94973 7.56585 5.79076 7.5 5.625 7.5H3.82812C4.38672 6.84219 4.94297 6.22266 5.57734 5.58047C6.44598 4.71184 7.55133 4.11844 8.75529 3.87444C9.95924 3.63043 11.2084 3.74662 12.3467 4.2085C13.485 4.67039 14.4619 5.45747 15.1555 6.47141C15.849 7.48535 16.2283 8.68119 16.2461 9.90949C16.2639 11.1378 15.9193 12.3441 15.2554 13.3777C14.5915 14.4113 13.6377 15.2263 12.5132 15.7209C11.3888 16.2155 10.1435 16.3678 8.93299 16.1587C7.72249 15.9496 6.60043 15.3885 5.70703 14.5453C5.64732 14.4889 5.57708 14.4448 5.50032 14.4155C5.42356 14.3862 5.34179 14.3723 5.25967 14.3747C5.17754 14.377 5.09668 14.3954 5.0217 14.429C4.94672 14.4626 4.87908 14.5106 4.82266 14.5703C4.76623 14.63 4.72212 14.7003 4.69283 14.777C4.66355 14.8538 4.64967 14.9356 4.652 15.0177C4.65432 15.0998 4.67279 15.1807 4.70636 15.2556C4.73993 15.3306 4.78795 15.3983 4.84766 15.4547C5.73785 16.2947 6.82012 16.9042 8 17.2298C9.17989 17.5554 10.4215 17.5872 11.6166 17.3226C12.8116 17.058 13.9237 16.5049 14.8559 15.7117C15.788 14.9184 16.5118 13.9091 16.9642 12.7717C17.4165 11.6344 17.5836 10.4036 17.4509 9.18686C17.3182 7.97009 16.8897 6.80429 16.2029 5.7912C15.516 4.77811 14.5916 3.94852 13.5104 3.37483C12.4292 2.80114 11.224 2.5008 10 2.5Z'
                  fill='CurrentColor'
                />
              </svg>
            </TooltipButton>
            <TooltipButton tooltip='Notifications' shortCut='⌘ N'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='CurrentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.25 15H3.75002C3.64063 14.9993 3.53333 14.97 3.43884 14.9149C3.34435 14.8597 3.26599 14.7808 3.21158 14.6859C3.15717 14.591 3.12862 14.4835 3.12878 14.3741C3.12895 14.2647 3.15783 14.1572 3.21252 14.0625C3.72737 13.1719 4.37502 10.9227 4.37502 8.125C4.37502 6.63316 4.96766 5.20242 6.02255 4.14752C7.07744 3.09263 8.50818 2.5 10 2.5C11.4919 2.5 12.9226 3.09263 13.9775 4.14752C15.0324 5.20242 15.625 6.63316 15.625 8.125C15.625 10.9234 16.2735 13.1719 16.7891 14.0625C16.8438 14.1574 16.8727 14.2649 16.8728 14.3745C16.8729 14.484 16.8442 14.5916 16.7896 14.6865C16.735 14.7815 16.6565 14.8604 16.5618 14.9154C16.467 14.9705 16.3595 14.9996 16.25 15Z'
                  fill='CurrentColor'
                  fillOpacity='0.05'
                />
                <path
                  d='M17.3281 13.7453C16.8945 12.9984 16.2499 10.8852 16.2499 8.125C16.2499 6.4674 15.5915 4.87769 14.4194 3.70558C13.2473 2.53348 11.6576 1.875 9.99995 1.875C8.34235 1.875 6.75263 2.53348 5.58053 3.70558C4.40843 4.87769 3.74995 6.4674 3.74995 8.125C3.74995 10.8859 3.10464 12.9984 2.67104 13.7453C2.56032 13.9352 2.50162 14.1509 2.50086 14.3707C2.50011 14.5905 2.55733 14.8066 2.66674 14.9973C2.77616 15.1879 2.93392 15.3463 3.12409 15.4565C3.31427 15.5667 3.53015 15.6248 3.74995 15.625H6.93823C7.08243 16.3306 7.46591 16.9647 8.0238 17.4201C8.5817 17.8756 9.27977 18.1243 9.99995 18.1243C10.7201 18.1243 11.4182 17.8756 11.9761 17.4201C12.534 16.9647 12.9175 16.3306 13.0617 15.625H16.2499C16.4697 15.6247 16.6855 15.5665 16.8755 15.4562C17.0656 15.346 17.2232 15.1875 17.3326 14.9969C17.4419 14.8063 17.499 14.5903 17.4983 14.3705C17.4975 14.1508 17.4388 13.9351 17.3281 13.7453ZM9.99995 16.875C9.61231 16.8749 9.23423 16.7546 8.91776 16.5308C8.60129 16.3069 8.36197 15.9905 8.23276 15.625H11.7671C11.6379 15.9905 11.3986 16.3069 11.0821 16.5308C10.7657 16.7546 10.3876 16.8749 9.99995 16.875ZM3.74995 14.375C4.35151 13.3406 4.99995 10.9438 4.99995 8.125C4.99995 6.79892 5.52673 5.52715 6.46441 4.58947C7.4021 3.65178 8.67387 3.125 9.99995 3.125C11.326 3.125 12.5978 3.65178 13.5355 4.58947C14.4732 5.52715 14.9999 6.79892 14.9999 8.125C14.9999 10.9414 15.6468 13.3383 16.2499 14.375H3.74995Z'
                  fill='CurrentColor'
                />
              </svg>
            </TooltipButton>
            <TooltipButton
              tooltip='Rightbar'
              shortCut='⌘ R'
              htmlFor='checkR'
              className='hidden xl:flex'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.875 3.75V16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H6.875Z'
                  fill='currentColor'
                  fillOpacity='0.05'
                />
                <path
                  d='M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM3.125 11.875H4.375C4.54076 11.875 4.69973 11.8092 4.81694 11.6919C4.93415 11.5747 5 11.4158 5 11.25C5 11.0842 4.93415 10.9253 4.81694 10.8081C4.69973 10.6908 4.54076 10.625 4.375 10.625H3.125V9.375H4.375C4.54076 9.375 4.69973 9.30915 4.81694 9.19194C4.93415 9.07473 5 8.91576 5 8.75C5 8.58424 4.93415 8.42527 4.81694 8.30806C4.69973 8.19085 4.54076 8.125 4.375 8.125H3.125V6.875H4.375C4.54076 6.875 4.69973 6.80915 4.81694 6.69194C4.93415 6.57473 5 6.41576 5 6.25C5 6.08424 4.93415 5.92527 4.81694 5.80806C4.69973 5.69085 4.54076 5.625 4.375 5.625H3.125V4.375H6.25V15.625H3.125V11.875ZM16.875 15.625H7.5V4.375H16.875V15.625Z'
                  fill='currentColor'
                />
              </svg>
            </TooltipButton>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;