export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      backgroundImage: {
        "hero-bg":
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)) ,url('/images/bg.jpeg')",
        "talent-bg":
          // "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)) ,url('/images/StudExAlt.jpeg')",
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)) ,url('/images/Home-Visit.jpeg')",
          // "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)) ,url('/images/studex.png')",

        "mentor-bg":
          // "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)) ,url('/images/Parent.jpeg')",
          // "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.55)) ,url('/images/Walk-Together.png')",
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.55)) ,url('/images/mentor-bg.png')",


        "parent-bg":
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)) ,url('/images/ParentsConference.jpeg')",
        "card-bg-1":
          "linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.10)) ,url('/images/cardbg1.jpeg')",
        "card-bg-2":
          "linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.10)) ,url('/images/cardbg2.jpeg')",
        "card-bg-3":
          "linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.10)) ,url('/images/cardbg3.jpeg')",
        "orange-bg": "url('/images/background/Benefit Section.png')",
        "blue-bg": "url('/images/background/Biru Benefit Section.png')",
        "orange-dunkler-bg": "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/background/Benefit Section.png')"
      },
      colors: {
        "primary-1": "#FEA02F",
        "primary-2": "#FEB359",
        "primary-3": "#FEC682",
        "primary-4": "#FFD9AC",
        "secondary-1": "#34BCEE",
        "secondary-2": "#FEB359",
        "secondary-3": "#FEC682",
        "secondary-4": "#FFD9AC",
        "neutral-1": "#001125",
        "neutral-2": "#334151",
        "neutral-3": "#66707C",
        "neutral-4": "#99A0A8",
        "neutral-5": "#CCCFD3",
        "neutral-white": "#FFFFFF",
        benefitMentor: "#85D7F5",
        background: "#EFEFEF",
      },
      width: {
        nav: "1152px", 
        tagline: "72rem", 
        "cover-size1": "43.5rem",
        "w200": "200px",
        "cover-size2": "40.5rem",
        "footer-content": "72.816rem",
        "cover-size3": "26rem",
        "logo-msim": "192px",
        "slash-w": "45.5rem", 
        "slash-sm": "28rem",
        "120":"120px",
        "312":"312px",
      },
      height: {
        testimoni: "648px",
        "120":"120px",
        "h200": "200px", 
      },
      margin: {
        "slash-top": "4.7rem",
      },
      gap: {
        "gap10":"10px",
        "gap7277": "7.277px"
      },
      padding: {
        "padding106":"106px",
        "padding170":"170px"
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'p + p': {
              marginTop: theme('spacing.3'),
            },
            'h2': {
                marginBottom: theme('spacing.2'), // 8px
            },
            'ul > li + li': {
                marginTop: theme('spacing.1'), // 4px
            },
          },
        },
        lg: {
            css: {
                'p + p': {
                    marginTop: theme('spacing.3'), // 12px
                },
            },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
  ],
};