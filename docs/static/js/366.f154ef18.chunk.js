'use strict';
(self.webpackChunkreact_spa_boilerplate = self.webpackChunkreact_spa_boilerplate || []).push([
  [366],
  {
    6366: function (n, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return x;
          },
        });
      var i,
        t,
        a,
        d = r(168),
        o = r(5751),
        s = r(1758),
        c = r(184),
        p = function (n) {
          var e = n.data;
          return (0, c.jsxs)(l, {
            children: [
              (0, c.jsx)('h1', { children: e.name }),
              (0, c.jsx)(u, { children: e.description }),
            ],
          });
        },
        l = o.ZP.div(
          i ||
            (i = (0, d.Z)([
              '\n  width: calc(25% - 2 * 15px);\n  min-height: 240px;\n  box-sizing: border-box;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0.8rem 0.8rem 1.4rem ',
              ', -0.2rem -0.2rem 1.8rem white;\n  background-color: ',
              ';\n',
            ])),
          s.w.greyLight2,
          s.w.greyLight1,
        ),
        u = o.ZP.p(t || (t = (0, d.Z)(['\n  font-size: 1.2em;\n']))),
        x = function (n) {
          var e,
            r =
              null === (e = n.data.rockets) || void 0 === e
                ? void 0
                : e.map(function (n) {
                    return (0, c.jsx)(p, { data: n }, n.id);
                  });
          return (0, c.jsx)(h, { children: r });
        },
        h = o.ZP.div(
          a ||
            (a = (0, d.Z)([
              '\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 30px;\n  box-sizing: border-box;\n',
            ])),
        );
    },
  },
]);
//# sourceMappingURL=366.f154ef18.chunk.js.map
