import { importShared } from './__federation_fn_import-gVVR6EuA.js';
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

const {useState} = await importShared('react');

function UsersApp({ user: currentUser }) {
  const [search, setSearch] = useState("");
  const users = [
    { id: 1, name: "Ali Hassan", email: "ali@corp.io", role: "Engineer", status: "Active", joined: "Jan 2024" },
    { id: 2, name: "Sara Malik", email: "sara@corp.io", role: "Designer", status: "Active", joined: "Mar 2024" },
    { id: 3, name: "Umar Farooq", email: "umar@corp.io", role: "PM", status: "Inactive", joined: "Dec 2023" },
    { id: 4, name: "Hina Baig", email: "hina@corp.io", role: "Engineer", status: "Active", joined: "Feb 2024" },
    { id: 5, name: "Bilal Ahmed", email: "bilal@corp.io", role: "DevOps", status: "Active", joined: "Apr 2024" }
  ];
  const filtered = users.filter(
    (u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );
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
                children: "User Management"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "#64748b", fontSize: "0.85rem", marginTop: "0.25rem" }, children: [
              "Managed by ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: currentUser?.name })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                background: "#fef3c7",
                color: "#b45309",
                padding: "0.3rem 0.75rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 600
              },
              children: "USERS MODULE v1.4"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        value: search,
        onChange: (e) => setSearch(e.target.value),
        placeholder: "Search by name or email...",
        style: {
          width: "100%",
          padding: "0.65rem 1rem",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
          fontSize: "0.9rem",
          marginBottom: "1rem",
          boxSizing: "border-box",
          background: "#f8fafc",
          outline: "none"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: { background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }, children: ["Name", "Email", "Role", "Status", "Joined"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              style: {
                padding: "0.75rem 1rem",
                textAlign: "left",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              },
              children: h
            },
            h
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            filtered.map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                style: {
                  borderBottom: i < filtered.length - 1 ? "1px solid #f1f5f9" : "none"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "0.85rem 1rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "0.65rem"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              width: 32,
                              height: 32,
                              borderRadius: "50%",
                              background: `hsl(${u.id * 60}, 60%, 55%)`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              flexShrink: 0
                            },
                            children: u.name.split(" ").map((n) => n[0]).join("")
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              fontWeight: 600,
                              color: "#0f172a",
                              fontSize: "0.875rem"
                            },
                            children: u.name
                          }
                        )
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "0.85rem 1rem", color: "#64748b", fontSize: "0.85rem" }, children: u.email }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "0.85rem 1rem", color: "#334155", fontSize: "0.85rem" }, children: u.role }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "0.85rem 1rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        padding: "0.2rem 0.6rem",
                        borderRadius: "999px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background: u.status === "Active" ? "#dcfce7" : "#fee2e2",
                        color: u.status === "Active" ? "#15803d" : "#dc2626"
                      },
                      children: u.status
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "0.85rem 1rem", color: "#94a3b8", fontSize: "0.8rem" }, children: u.joined })
                ]
              },
              u.id
            )),
            filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                colSpan: 5,
                style: { padding: "2rem", textAlign: "center", color: "#94a3b8" },
                children: "No users found."
              }
            ) })
          ] })
        ] })
      }
    )
  ] });
}

export { UsersApp as default, jsxRuntimeExports as j };
