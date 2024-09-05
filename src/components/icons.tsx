export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

export function Spinner() {
    return (
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
            <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        </div>
    );
}

export function Logo() {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="text-gray-100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="100%" height="100%" rx="16" fill="currentColor" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="black"
            />
        </svg>
    );
}

export function VercelLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            aria-label="Vercel logomark"
            height="64"
            role="img"
            viewBox="0 0 74 64"
        >
            <path
                d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function DriveLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 87.3 78"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
            <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47" />
            <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
            <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
            <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
            <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
        </svg>
    )
}

export const GoogleCalendarLogo = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            height="36"
            viewBox="0 0 36 36"
            width="36" xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="m0 0h36v36h-36z" />
                <g fillRule="nonzero" transform="translate(3.75 3.75)">
                    <path d="m21.75 6.75-6.75-.75-8.25.75-.75 7.5.75 7.5 7.5.9375 7.5-.9375.75-7.6875z" fill="#fff" />
                    <path d="m9.826875 18.38625c-.560625-.37875-.94875-.931875-1.160625-1.663125l1.30125-.53625c.118125.45.324375.79875.61875 1.04625.2925.2475.64875.369375 1.065.369375.425625 0 .79125-.129375 1.096875-.388125s.459375-.58875.459375-.988125c0-.40875-.16125-.7425-.48375-1.00125s-.7275-.388125-1.21125-.388125h-.751875v-1.288125h.675c.41625 0 .766875-.1125 1.051875-.3375s.4275-.5325.4275-.924375c0-.34875-.1275-.62625-.3825-.834375s-.5775-.313125-.969375-.313125c-.3825 0-.68625.10125-.91125.305625s-.388125.455625-.49125.751875l-1.288125-.53625c.170625-.48375.48375-.91125.943125-1.280625s1.04625-.555 1.75875-.555c.526875 0 1.00125.10125 1.42125.305625s.75.4875.988125.8475c.238125.361875.35625.766875.35625 1.216875 0 .459375-.110625.8475-.331875 1.16625s-.493125.5625-.815625.733125v.076875c.425625.178125.7725.45 1.04625.815625.271875.365625.40875.8025.40875 1.3125s-.129375.965625-.388125 1.365-.616875.714375-1.070625.943125c-.455625.22875-.9675.3450138-1.535625.3450138-.658125.0018612-1.265625-.1875138-1.82625-.5662638z" fill="#1a73e8" />
                    <path d="m17.8125 11.92875-1.42125 1.033125-.714375-1.08375 2.563125-1.84875h.9825v8.720625h-1.41z" fill="#1a73e8" />
                    <path d="m21.75 28.5 6.75-6.75-3.375-1.5-3.375 1.5-1.5 3.375z" fill="#ea4335" />
                    <path d="m5.25 25.125 1.5 3.375h15v-6.75h-15z" fill="#34a853" />
                    <path d="m2.25 0c-1.243125 0-2.25 1.006875-2.25 2.25v19.5l3.375 1.5 3.375-1.5v-15h15l1.5-3.375-1.5-3.375z" fill="#4285f4" />
                    <path d="m0 21.75v4.5c0 1.243125 1.006875 2.25 2.25 2.25h4.5v-6.75z" fill="#188038" />
                    <path d="m21.75 6.75v15h6.75v-15l-3.375-1.5z" fill="#fbbc04" />
                    <path d="m28.5 6.75v-4.5c0-1.243125-1.006875-2.25-2.25-2.25h-4.5v6.75z" fill="#1967d2" />
                </g>
            </g>
        </svg>
    )
}

export const GoogleKeepLogo = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6596.059 6592.51" enableBackground="new 0 0 6596.059 6592.51">
            <filter height="36" id="b" width="36" x="-24" y="-24">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="4" />
                <feOffset dx="4" dy="4" in="blur" result="offsetBlurredGraphic" />
            </filter>
            <g>
                <g>
                    <path fill="#F4B400" d="M4686.673 6592.51H520.742C233.493 6591.67.841 6359.143 0 6072.048V520.461C.841 233.367 233.493.84 520.742 0h5554.576c287.249.84 519.901 233.367 520.742 520.461v4163.69l-1128.273 780.692-781.114 1127.667z" />
                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1975.772" y1="4033.584" x2="4798.552" y2="6856.364" gradientTransform="matrix(1.2639 0 0 1.2632 -389.13 -3094.869)">
                        <stop offset="0" stopColor="#bf360c" stopOpacity=".1" />
                        <stop offset="1" stopColor="#bf360c" stopOpacity=".02" />
                    </linearGradient>
                    <path fill="url(#a)" d="M2194.058 1496.728c-610.435 609.131-611.226 1597.517-1.768 2207.623l.9.9 323.728 324.421v1174.941L3905.561 6592.51h781.113l1909.385-1908.358v-993.648L4402.87 1498.495c-609.459-610.106-1598.378-610.897-2208.812-1.767z" />
                    <g>
                        <g opacity=".2" filter="url(#b)">
                            <path fill="#3E2723" d="M4686.673 6592.51V5204.613c-.079-287.364 232.936-520.382 520.455-520.461h1388.931L4686.673 6592.51z" />
                        </g>
                        <path fill="#FADA80" d="M4686.673 6592.51V5204.613c-.079-287.364 232.936-520.382 520.455-520.461h1388.931L4686.673 6592.51z" />
                    </g>
                    <path fill="#FFFFFF" fillOpacity=".2" d="M5207.128 4684.152c-287.519.079-520.534 233.097-520.454 520.461v43.084c.079-287.364 233.223-520.253 520.741-520.174h1345.249l43.395-43.372H5207.415l-.287.001z" />
                    <g>
                        <g>
                            <path opacity=".1" fill="#3E2723" d="M3298.03 1040.923c-862.688-.105-1562.119 698.781-1562.224 1561.005-.068 557.867 297.704 1073.377 781.112 1352.277v1250.408h347.161v346.975h954.693v-346.975h347.161V3900.424c717.367-479.021 910.376-1448.572 431.097-2165.553-289.867-433.629-777.216-693.979-1299-693.948zm520.741 3816.716h-954.693v-346.974h954.693v346.974zm0-1158.46v464.512h-954.693v-427.212c-627.01-239.395-941.129-941.48-701.605-1568.153 239.523-626.672 941.987-940.622 1568.997-701.228s941.129 941.48 701.605 1568.153c-111.638 292.082-331.671 529.889-614.304 663.928z" />
                            <path fill="#F1F1F1" d="M3298.03 1040.923c-862.688-.105-1562.119 698.781-1562.224 1561.005-.068 557.867 297.704 1073.377 781.112 1352.277v1250.408h347.161v346.975h954.693v-346.975h347.161V3900.424c717.367-479.021 910.376-1448.572 431.097-2165.553-289.867-433.629-777.216-693.979-1299-693.948zm520.741 3816.716h-954.693v-346.974h954.693v346.974zm0-1158.46v464.512h-954.693v-427.212c-627.01-239.395-941.129-941.48-701.605-1568.153 239.523-626.672 941.987-940.622 1568.997-701.228s941.129 941.48 701.605 1568.153c-111.638 292.082-331.671 529.889-614.304 663.928z" />
                        </g>
                        <path fill="#FFFFFF" fillOpacity=".4" d="M2864.078 4901.011h954.693v-43.372h-954.693v43.372zm0-693.949h954.693v-43.372h-954.693v43.372zm0-470.583c-463.972-177.963-772.916-620.179-780.245-1116.823 0 8.674-.868 17.349-.868 26.457.711 503.105 311.166 953.885 781.112 1134.172v-43.806zm954.693-37.3v43.372c423.652-201.276 693.797-628.044 694.322-1096.872 0-8.674-.434-16.915-.868-25.589-6.843 462.284-275.667 880.604-693.454 1079.089zM3298.03 1040.923c-862.764.069-1562.156 699.084-1562.224 1561.384 0 6.072.434 12.144.434 18.65 13.526-862.087 723.726-1549.988 1586.277-1536.47 843.655 13.222 1524.309 693.699 1537.304 1536.903 0-6.506.434-12.578.434-19.084-.07-862.299-699.461-1561.314-1562.225-1561.383z" />
                        <path fill="#BF360C" fillOpacity=".1" d="M2516.917 3954.205c-477.437-275.544-774.145-782.265-780.678-1333.248 0 8.241-.434 16.481-.434 24.722-.21 557.806 297.619 1073.27 781.112 1351.898v-43.372zm347.161 599.832h954.693v-43.372h-954.693v43.372zm433.952-3122.768c660.686.729 1199.871 528.645 1214.196 1188.821 0-6.072.868-11.71.868-17.783 0-670.7-544.002-1214.41-1215.063-1214.41s-1215.064 543.71-1215.064 1214.41c0 5.638.434 11.277.868 16.915 14.7-659.874 553.802-1187.324 1214.195-1187.953zm520.741 3816.716h347.161v-43.372h-347.161v43.372zM4859.82 2621.39c-5.779 514.709-265.458 993.371-693.888 1279.034v43.372c434.085-289.424 694.654-776.588 694.322-1298.117 0-8.241-.434-16.048-.434-24.289zM2864.078 5204.613h-347.161v43.372h347.161v-43.372zm0 390.346h954.693v-43.372h-954.693v43.372z" />
                    </g>
                    <g>
                        <path fill="#FFFFFF" fillOpacity=".2" d="M6075.317 0H520.742C233.493.84.841 233.367 0 520.461v43.372C.841 276.739 233.493 44.212 520.742 43.372h5554.576c287.249.84 519.901 233.367 520.742 520.461v-43.372C6595.219 233.367 6362.566.84 6075.317 0z" />
                        <path fill="#BF360C" fillOpacity=".1" d="M520.742 6549.138C233.493 6548.298.841 6315.771 0 6028.677v43.372c.841 287.095 233.493 519.622 520.742 520.461h4165.932L6596.06 4684.152h-43.395L4686.673 6549.138H520.742z" />
                    </g>
                </g>
                <radialGradient id="c" cx="465.316" cy="2618.032" r="6080.553" gradientTransform="matrix(1.2639 0 0 1.2632 -389.13 -3094.869)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fff" stopOpacity=".1" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <path fill="url(#c)" d="M4686.673 6592.51H520.742C233.493 6591.67.841 6359.143 0 6072.048V520.461C.841 233.367 233.493.84 520.742 0h5554.576c287.249.84 519.901 233.367 520.742 520.461v4163.69L4686.673 6592.51z" />
            </g>
        </svg>

    )
}

export const GoogleTasksLogo = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            version="1.1"
            id="svg8849"
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="527.1px" height="500px"
            viewBox="0 0 527.1 500" enableBackground="new 0 0 527.1 500" >

            <g>
                <polygon fill="#0066DA" points="410.4,58.3 368.8,81.2 348.2,120.6 368.8,168.8 407.8,211 450,187.5 475.9,142.8 450,87.5 	" />
                <path fill="#2684FC" d="M249.3,219.4l98.9-98.9c29.1,22.1,50.5,53.8,59.6,90.4L272.1,346.7c-12.2,12.2-32,12.2-44.2,0l-91.5-91.5
           c-9.8-9.8-9.8-25.6,0-35.3l39-39c9.8-9.8,25.6-9.8,35.3,0L249.3,219.4z M519.8,63.6l-39.7-39.7c-9.7-9.7-25.6-9.7-35.3,0
           l-34.4,34.4c27.5,23,49.9,51.8,65.5,84.5l43.9-43.9C529.6,89.2,529.6,73.3,519.8,63.6z M412.5,250c0,89.8-72.8,162.5-162.5,162.5
           S87.5,339.8,87.5,250S160.2,87.5,250,87.5c36.9,0,70.9,12.3,98.2,33.1l62.2-62.2C367,21.9,311.1,0,250,0C111.9,0,0,111.9,0,250
           s111.9,250,250,250s250-111.9,250-250c0-38.3-8.7-74.7-24.1-107.2L407.8,211C410.8,223.5,412.5,236.6,412.5,250z"/>
            </g>
        </svg>
    )
}

export const GoogleContactsLogo = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="423.077px" height="500px" viewBox="0 0 527.1 500">
            <path fill="#86A9FF" d="M160.256,243.59C71.667,243.59,0,315.256,0,403.846v67.308C0,487.083,12.917,500,28.846,500h76.923 l76.923-256.41H160.256z" />
            <path fill="#578CFF" d="M423.077,349.359c0-58.462-47.308-105.769-105.769-105.769h-76.923V500h76.923 c58.462,0,105.769-47.308,105.769-105.769" />
            <path fill="#0057CC" d="M76.923,349.359c0-58.462,47.308-105.769,105.769-105.769h57.692c58.462,0,105.769,47.308,105.769,105.769 v44.872c0,58.462-47.308,105.769-105.769,105.769H105.769c-15.929,0-28.846-12.917-28.846-28.846V349.359z" />
            <circle fill="#0057CC" cx="211.538" cy="99.359" r="99.359" />
        </svg>
    )
}
