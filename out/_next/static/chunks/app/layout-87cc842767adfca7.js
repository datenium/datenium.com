(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    9205: function (e, s, l) {
      Promise.resolve().then(l.bind(l, 318)),
        Promise.resolve().then(l.t.bind(l, 8326, 23)),
        Promise.resolve().then(l.t.bind(l, 2801, 23));
    },
    318: function (e, s, l) {
      "use strict";
      l.r(s);
      var n = l(7437),
        t = l(8980),
        c = l(2265),
        i = l(1396),
        r = l.n(i);
      s.default = () => {
        let [e, s] = (0, c.useState)(!1),
          closeMenu = () => {
            s(!1);
          };
        return (0, n.jsx)("nav", {
          className: " text-white bg-gray-800  p-4",
          children: (0, n.jsxs)("div", {
            className: "container mx-auto flex items-center justify-between",
            children: [
              (0, n.jsx)(r(), {
                href: "/",
                children: (0, n.jsx)("span", {
                  className: "font-bold text-xl",
                  children: "Datenium",
                }),
              }),
              (0, n.jsx)("div", {
                className: "block lg:hidden",
                children: (0, n.jsx)("button", {
                  className: "text-white focus:outline-none",
                  onClick: () => {
                    s(!e);
                  },
                  children: (0, n.jsx)(t.cur, { size: 24 }),
                }),
              }),
              e &&
                (0, n.jsx)("div", {
                  className:
                    "text-white lg:hidden absolute top-0 left-0 w-full h-full bg-gray-800 z-50",
                  children: (0, n.jsxs)("div", {
                    className: "flex items-center justify-center w-full h-full",
                    children: [
                      (0, n.jsx)("button", {
                        className: "text-white absolute top-4 right-4",
                        onClick: closeMenu,
                        children: (0, n.jsx)(t.q5L, { size: 24 }),
                      }),
                      (0, n.jsxs)("ul", {
                        className: "text-white flex flex-col space-y-4",
                        children: [
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(r(), {
                              href: "/",
                              onClick: closeMenu,
                              children: "Home",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(r(), {
                              href: "/about",
                              onClick: closeMenu,
                              children: "About",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(r(), {
                              href: "/contacts",
                              onClick: closeMenu,
                              children: "Contact",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              (0, n.jsxs)("div", {
                className: "hidden lg:flex space-x-4",
                children: [
                  (0, n.jsx)(r(), { href: "/about", children: "About" }),
                  (0, n.jsx)(r(), {
                    href: "/contacts",
                    children: "Contact Us",
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    2801: function () {},
  },
  function (e) {
    e.O(0, [813, 971, 472, 744], function () {
      return e((e.s = 9205));
    }),
      (_N_E = e.O());
  },
]);
