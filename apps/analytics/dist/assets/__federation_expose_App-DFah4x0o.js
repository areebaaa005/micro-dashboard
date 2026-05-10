import { r as reactExports } from './index-Dm_EQZZA.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

function AnalyticsApp({ user }) {
  const data = [
    { month: "Jan", revenue: 42e3 },
    { month: "Feb", revenue: 58e3 },
    { month: "Mar", revenue: 51e3 },
    { month: "Apr", revenue: 73e3 },
    { month: "May", revenue: 89e3 },
    { month: "Jun", revenue: 95e3 }
  ];
  const max = Math.max(...data.map((d) => d.revenue));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2rem", fontFamily: "system-ui" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: { fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 },
                children: "Revenue Analytics"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "#64748b", fontSize: "0.85rem", marginTop: "0.25rem" }, children: [
              "Viewing as ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: user?.name }),
              " · ",
              user?.role
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                background: "#dbeafe",
                color: "#1d4ed8",
                padding: "0.3rem 0.75rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 600
              },
              children: "ANALYTICS MODULE v2.1"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginBottom: "2rem"
        },
        children: [
          { label: "Total Revenue", value: "$408,000", delta: "+23.4%", color: "#10b981" },
          { label: "Active Users", value: "12,800", delta: "+18.2%", color: "#6366f1" },
          { label: "Conversion", value: "4.73%", delta: "+0.8%", color: "#f59e0b" }
        ].map((kpi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "1.25rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: 0
                  },
                  children: kpi.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#0f172a",
                    margin: "0.25rem 0"
                  },
                  children: kpi.value
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: kpi.color, fontSize: "0.8rem", fontWeight: 600 }, children: [
                "▲ ",
                kpi.delta,
                " vs last period"
              ] })
            ]
          },
          kpi.label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#334155",
                marginBottom: "1.25rem"
              },
              children: "Monthly Revenue"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "flex-end",
                gap: "1rem",
                height: "160px"
              },
              children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    height: "100%"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          flex: 1,
                          display: "flex",
                          alignItems: "flex-end",
                          width: "100%"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            title: `$${d.revenue.toLocaleString()}`,
                            style: {
                              width: "100%",
                              height: `${d.revenue / max * 100}%`,
                              background: "linear-gradient(180deg, #6366f1, #818cf8)",
                              borderRadius: "6px 6px 0 0",
                              minHeight: 8,
                              transition: "height 0.4s ease",
                              cursor: "pointer"
                            }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600 }, children: d.month })
                  ]
                },
                d.month
              ))
            }
          )
        ]
      }
    )
  ] });
}

export { AnalyticsApp as default, jsxRuntimeExports as j };
