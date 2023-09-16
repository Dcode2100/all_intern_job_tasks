export const links = [
  { title: "HOME", path: "/" },
  {
    title: "ORGANIZATION",path:"/about",
    submenu: [
      {
        heading: "RSS Party",
        dubmenu: [
          { title: "OUR STORY", path: "/about" },
          { title: "MISSION & VISION", path: "/missionvision" },
          { title: "OBJECTIVE", path: "/objective" },
          { title: "LEADERSHIP", path: "/leadership" },
        ],
      },

      {
        heading: "MEDIA",
        dubmenu: [
          { title: "GALLERY", path: "/gallery" },
          { title: "NEWS ARTICLES", path: "/newsarticles" },
          { title: "PRESS RELEASE", path: "/pressrelease" },
        ],
      },

      {
        heading: "OUR WINGS",
        dubmenu: [
          { title: "KISAN", path: "/wing/kisan" },
          { title: "MAHILA", path: "/wing/mahila" },
          { title: "YUVA", path: "/wing/yuva" },
          { title: "S.C", path: "/wing/sc" },
          { title: "S.T", path: "/wing/st" },
          { title: "OBC", path: "/wing/obc" },
          { title: "MINORITY", path: "/wing/minority" },
        ],
      },
      
    ],
  },
  {
    title: "JOIN THE MOMENT", path:"/becomeamember",
    submenu: [
      {
        heading: "JOIN THE MOMENT",
        dubmenu: [
          {
            title: "BECOME A MEMBER",
            path: "/becomeamember",
            hovermenu: [
              {
                title: "Perks of becoming a member",
                para: " good thing and good things",
                img: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
              },
            ],
          },
          {
            title: "BECOME A VOLUNTEER",
            path: "/becomeavolunteer",
            hovermenu: [
              {
                title: "Perks of becoming a volunteer",
                para: " good things",
                img: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "CONTACT US",
    path: "/contact",
  },
];

export const login = [
  { title: "Members area", path: "/membersarea" },

  { title: "My profile", path: "/myprofile" },

  { title: "Admin", path: "/admins" },

  { title: "Logout", path: "/logout" },
];
