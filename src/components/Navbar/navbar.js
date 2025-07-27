const navbar = [
  {
    id: 1,
    link: "about",
    title: "about us",
  },
  {
    id: 2,
    link: "solutions",
    title: "solutions",
  },
  {
    id: 3,
    link: "services",
    title: "services",

    subRoutes: [
      {
        name: "MRO",
        link: "mro",
      },
      {
        name: "Indirect Spend",
        link: "indirect-spend",
      },

      {
        name: "Vendor Managed",
        link: "vendor-managed",
      },
      {
        name: "Analytics",
        link: "analytics",
      },
      {
        name: "inventory forecasting",
        link: "inventory-forecasting",
      },
      {
        name: "Encrypted Operations",
        link: "encrypted-operations",
      },
      {
        name: "Procurement ",
        link: "procurement",
      },
      {
        name: "Corporate gifting",
        link: "corporate-gifting",
      },
    ],
  },

  {
    id: 5,
    title: "partners",
    link: "stories",
  },

  {
    id: 6,
    link: "newsroom",
    title: "careers",
  },
];
export default navbar;
