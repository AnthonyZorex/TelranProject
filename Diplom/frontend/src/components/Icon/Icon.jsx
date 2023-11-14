const Icon = ({ iconName, width = "24", height = "24", color = "black", className = "" }) => {
    const icons = {
        instagram: (
            <svg className={"icon " + className} width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C8.83248 3 3 8.83248 3 16V34C3 41.1675 8.83248 47 16 47H34C41.1675 47 47 41.1675 47 34V16C47 8.83248 41.1675 3 34 3H16ZM16 5H34C40.0865 5 45 9.91352 45 16V34C45 40.0865 40.0865 45 34 45H16C9.91352 45 5 40.0865 5 34V16C5 9.91352 9.91352 5 16 5ZM37 11C36.4696 11 35.9609 11.2107 35.5858 11.5858C35.2107 11.9609 35 12.4696 35 13C35 13.5304 35.2107 14.0391 35.5858 14.4142C35.9609 14.7893 36.4696 15 37 15C37.5304 15 38.0391 14.7893 38.4142 14.4142C38.7893 14.0391 39 13.5304 39 13C39 12.4696 38.7893 11.9609 38.4142 11.5858C38.0391 11.2107 37.5304 11 37 11ZM25 14C18.9367 14 14 18.9367 14 25C14 31.0633 18.9367 36 25 36C31.0633 36 36 31.0633 36 25C36 18.9367 31.0633 14 25 14ZM25 16C29.9824 16 34 20.0176 34 25C34 29.9824 29.9824 34 25 34C20.0176 34 16 29.9824 16 25C16 20.0176 20.0176 16 25 16Z" 
            fill={color} />
            </svg>
        ),
        whatsapp: (
            <svg className={"icon " + className} width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 2C12.3095 2 2 12.3095 2 25C2 29.0791 3.11869 32.8859 4.98438 36.209L2.03711 46.7305C1.99002 46.8988 1.9879 47.0766 2.03094 47.246C2.07398 47.4155 2.16069 47.5707 2.28242 47.6962C2.40415 47.8217 2.55665 47.913 2.72471 47.9612C2.89277 48.0094 3.07052 48.0127 3.24023 47.9707L14.2109 45.252C17.4346 46.9729 21.0926 48 25 48C37.6905 48 48 37.6905 48 25C48 12.3095 37.6905 2 25 2ZM25 4C36.6095 4 46 13.3905 46 25C46 36.6095 36.6095 46 25 46C21.278 46 17.7921 45.0296 14.7617 43.334C14.5401 43.2101 14.2796 43.1752 14.0332 43.2363L4.42578 45.6172L7.00195 36.4258C7.03882 36.2959 7.04899 36.1599 7.03188 36.0259C7.01476 35.892 6.97069 35.7629 6.90234 35.6465C5.06069 32.5236 4 28.8901 4 25C4 13.3905 13.3905 4 25 4ZM16.6426 13C16.0015 13 15.086 13.2385 14.334 14.0488C13.8823 14.5355 12 16.3695 12 19.5938C12 22.9553 14.3314 25.8558 14.6133 26.2285H14.6152V26.2305C14.5885 26.1953 14.973 26.7522 15.4863 27.4199C15.9996 28.0877 16.7174 28.9646 17.6191 29.9141C19.4226 31.8129 21.9583 34.0074 25.1055 35.3496C26.5548 35.9668 27.6982 36.3394 28.5645 36.6113C30.1698 37.1154 31.6321 37.0388 32.7305 36.877C33.5526 36.7559 34.4569 36.3611 35.3516 35.7949C36.2463 35.2287 37.1231 34.5247 37.5098 33.4551C37.7868 32.6882 37.9276 31.9796 37.9785 31.3965C38.004 31.1049 38.0072 30.8476 37.9883 30.6094C37.9693 30.3711 37.9896 30.1887 37.7676 29.8242C37.302 29.0598 36.7748 29.0399 36.2246 28.7676C35.9189 28.6163 35.0487 28.1913 34.1758 27.7754C33.3039 27.3599 32.5489 26.992 32.084 26.8262C31.7902 26.7205 31.4316 26.5684 30.9141 26.627C30.3966 26.6856 29.8855 27.0589 29.5879 27.5C29.3058 27.9181 28.1704 29.2583 27.8242 29.6523C27.8196 29.6495 27.8497 29.6634 27.7129 29.5957C27.2848 29.3838 26.7612 29.2037 25.9863 28.7949C25.2115 28.3862 24.2423 27.7826 23.1816 26.8477V26.8457C21.603 25.4559 20.4973 23.7111 20.1484 23.125C20.1719 23.097 20.1456 23.1309 20.1953 23.082L20.1973 23.0801C20.5538 22.7289 20.8697 22.3095 21.1367 22.002C21.5153 21.5659 21.6823 21.1814 21.8633 20.8223C22.224 20.1064 22.0231 19.3187 21.8145 18.9043V18.9023C21.8289 18.931 21.7016 18.6502 21.5645 18.3262C21.4269 18.0013 21.2517 17.58 21.0645 17.1309C20.69 16.2325 20.272 15.2249 20.0234 14.6348V14.6328C19.7306 13.9377 19.3344 13.4369 18.8164 13.1953C18.2984 12.9537 17.8408 13.0224 17.8223 13.0215H17.8203C17.4507 13.0044 17.045 13 16.6426 13ZM16.6426 15C17.0281 15 17.4082 15.0047 17.7266 15.0195C18.0541 15.0359 18.0337 15.0372 17.9707 15.0078C17.9067 14.978 17.9935 14.9683 18.1797 15.4102C18.4231 15.988 18.8432 16.9992 19.2188 17.9004C19.4065 18.351 19.5823 18.7738 19.7227 19.1055C19.863 19.4371 19.9391 19.6223 20.0273 19.7988V19.8008L20.0293 19.8027C20.1158 19.9735 20.1082 19.8642 20.0781 19.9238C19.8671 20.3427 19.8385 20.4455 19.625 20.6914C19.3 21.0658 18.9685 21.4834 18.793 21.6562C18.6394 21.8071 18.3624 22.042 18.1895 22.502C18.0162 22.9626 18.0971 23.5946 18.375 24.0664C18.745 24.6946 19.9644 26.6793 21.8594 28.3477C23.0528 29.3997 24.1646 30.0959 25.0527 30.5645C25.9409 31.033 26.6643 31.3066 26.8262 31.3867C27.2105 31.577 27.6307 31.7247 28.1191 31.666C28.6076 31.6074 29.0288 31.311 29.2969 31.0078L29.2988 31.0059C29.6556 30.6013 30.7158 29.3907 31.2246 28.6445C31.2462 28.6521 31.2391 28.6462 31.4082 28.707V28.709H31.4102C31.4874 28.7365 32.4543 29.1693 33.3164 29.5801C34.1785 29.9909 35.0536 30.4179 35.3379 30.5586C35.7482 30.7617 35.9421 30.8939 35.9922 30.8945C35.9956 30.9825 35.999 31.0779 35.9863 31.2227C35.9513 31.6243 35.8439 32.1802 35.6289 32.7754C35.5236 33.0667 34.975 33.6677 34.2832 34.1055C33.5914 34.5433 32.7493 34.8525 32.4375 34.8984C31.4999 35.0366 30.3867 35.087 29.1641 34.7031C28.3163 34.437 27.2593 34.0926 25.8906 33.5098C23.1148 32.326 20.7556 30.3115 19.0703 28.5371C18.2277 27.6499 17.5526 26.824 17.0723 26.1992C16.5929 25.5756 16.3835 25.2511 16.209 25.0215L16.207 25.0195C15.8972 24.6098 14 21.9709 14 19.5938C14 17.078 15.1685 16.0914 15.8008 15.4102C16.1327 15.0525 16.4956 15 16.6426 15Z" 
            fill={color} />
            </svg>
        ),
        menu: (
            <svg className={"icon " + className} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z" fill="black" />
            </svg>
        ),
       shop_nav:(
        <svg className={"icon " + className} width={width} height={height}  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0001 0.599976C11.679 0.599976 9.0001 3.27888 9.0001 6.59998V7.79998H4.25635L4.2001 8.32498L1.8001 29.325L1.7251 30H28.2751L28.2001 29.325L25.8001 8.32498L25.7438 7.79998H21.0001V6.59998C21.0001 3.27888 18.3212 0.599976 15.0001 0.599976ZM15.0001 1.79998C17.679 1.79998 19.8001 3.92107 19.8001 6.59998V7.79998H10.2001V6.59998C10.2001 3.92107 12.3212 1.79998 15.0001 1.79998ZM5.34385 8.99998H9.0001V10.3687C8.6415 10.5773 8.4001 10.957 8.4001 11.4C8.4001 12.0633 8.93682 12.6 9.6001 12.6C10.2634 12.6 10.8001 12.0633 10.8001 11.4C10.8001 10.957 10.5587 10.5773 10.2001 10.3687V8.99998H19.8001V10.3687C19.4415 10.5773 19.2001 10.957 19.2001 11.4C19.2001 12.0633 19.7368 12.6 20.4001 12.6C21.0634 12.6 21.6001 12.0633 21.6001 11.4C21.6001 10.957 21.3587 10.5773 21.0001 10.3687V8.99998H24.6563L26.9251 28.8H3.0751L5.34385 8.99998Z" 
        fill={color}/>
        </svg>
       )
    }

    return icons[iconName] ? icons[iconName] : null
}

export default Icon;