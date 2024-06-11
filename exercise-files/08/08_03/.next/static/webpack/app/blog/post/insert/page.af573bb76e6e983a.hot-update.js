"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/post/insert/page",{

/***/ "(app-pages-browser)/./src/app/blog/post/insert/page.tsx":
/*!*******************************************!*\
  !*** ./src/app/blog/post/insert/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const PROMPT = \"You are a creative blog writer. write a 50-word blog post about the title below. You can write anything you want, but it must be at least 50 words long. The title is: \";\n    const [generating, setGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        title: \"\",\n        content: \"\",\n        date: new Date().toISOString().slice(0, 10)\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        fetch(\"/api/posts?id=\".concat(uuid, \"&title=\").concat(formData.title, \"&author=\").concat(user === null || user === void 0 ? void 0 : user.name, \"&content=\").concat(formData.content, \"&date=\").concat(formData.date), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                ...formData,\n                id: uuid\n            })\n        }).then(()=>{\n            // Clear form fields\n            setFormData({\n                id: \"\",\n                title: \"\",\n                content: \"\",\n                date: \"\"\n            });\n            router.push(\"/blog/posts\");\n        }).catch(console.error);\n    };\n    const generateContent = ()=>{\n        setGenerating(true);\n        const requestParams = {\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    \"role\": \"system\",\n                    \"content\": PROMPT\n                },\n                {\n                    \"role\": \"user\",\n                    \"content\": \"Who won the world series in 2020?\"\n                }\n            ]\n        };\n        fetch(\"/api/openai\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(\"sk-proj-YQ8G1bIx5Oh0Lx53gTZUT3BlbkFJpDvCHsWUfSrVYdmhySto\")\n            },\n            body: JSON.stringify({\n                prompt: PROMPT + formData.title\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            setFormData((prevData)=>({\n                    ...prevData,\n                    content: data.choices[0].text\n                }));\n            setGenerating(false);\n        }).catch(console.error);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"API KEY\", \"sk-proj-YQ8G1bIx5Oh0Lx53gTZUT3BlbkFJpDvCHsWUfSrVYdmhySto\");\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)().then((session)=>{\n            setUser((session === null || session === void 0 ? void 0 : session.user) || null);\n            if (!(session === null || session === void 0 ? void 0 : session.user)) {\n                router.push(\"/blog/posts\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-8 rounded shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl mb-4 text-purple-700\",\n                children: \"New Blog Post\"\n            }, void 0, false, {\n                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"title\",\n                                className: \"block font-medium\",\n                                children: \"Title:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"title\",\n                                name: \"title\",\n                                value: formData.title,\n                                onChange: handleChange,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"content\",\n                                className: \"block font-medium\",\n                                children: \"Content:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"content\",\n                                name: \"content\",\n                                rows: \"4\",\n                                value: formData.content,\n                                onChange: handleChange,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            generating && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-purple-700 my-1\",\n                                children: \"Generating content...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: generateContent,\n                                className: \"bg-blue-400 text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700\",\n                                children: \"Generate Content\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"date\",\n                                className: \"block font-medium\",\n                                children: \"Date:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"date\",\n                                name: \"date\",\n                                value: formData.date,\n                                readOnly: true,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-blue-400 text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_02/src/app/blog/post/insert/page.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"QKP61KikVaGkHoZMxBBtfdd5MwY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYmxvZy9wb3N0L2luc2VydC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDb0M7QUFDYTtBQUNOO0FBRUU7QUFFOUIsU0FBU007O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNSSxTQUFTO0lBQ2YsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO1FBQ3ZDZSxJQUFJO1FBQ0pDLE9BQU87UUFDUFAsU0FBUztRQUNUUSxNQUFNLElBQUlDLE9BQU9DLFdBQVcsR0FBR0MsS0FBSyxDQUFDLEdBQUc7SUFDMUM7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1gsWUFBWVksQ0FBQUEsV0FBYTtnQkFDdkIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7SUFDRjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0w7UUFDcEJBLEVBQUVNLGNBQWM7UUFDaEIsTUFBTUMsT0FBTzlCLGdEQUFNQTtRQUNuQitCLE1BQU0saUJBQStCakIsT0FBZGdCLE1BQUssa0JBQVNoQixTQUFTRyxLQUFLLEVBQUMsWUFBZ0NILE9BQXRCRixpQkFBQUEsMkJBQUFBLEtBQU1ZLElBQUksRUFBQyxhQUFvQ1YsT0FBekJBLFNBQVNKLE9BQU8sRUFBQyxVQUFzQixPQUFkSSxTQUFTSSxJQUFJLEdBQUk7WUFDNUhjLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dC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SzNIO0dBdkd3QnJEOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Jsb2cvcG9zdC9pbnNlcnQvcGFnZS50c3g/NmJkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL2FwcC9saWIvZGVmaW5pdGlvblwiXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgUFJPTVBUID0gXCJZb3UgYXJlIGEgY3JlYXRpdmUgYmxvZyB3cml0ZXIuIHdyaXRlIGEgNTAtd29yZCBibG9nIHBvc3QgYWJvdXQgdGhlIHRpdGxlIGJlbG93LiBZb3UgY2FuIHdyaXRlIGFueXRoaW5nIHlvdSB3YW50LCBidXQgaXQgbXVzdCBiZSBhdCBsZWFzdCA1MCB3b3JkcyBsb25nLiBUaGUgdGl0bGUgaXM6IFwiXG4gIGNvbnN0IFtnZW5lcmF0aW5nLCBzZXRHZW5lcmF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIGlkOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgY29udGVudDogJycsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YShwcmV2RGF0YSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSkpXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcbiAgICBmZXRjaChgL2FwaS9wb3N0cz9pZD0ke3V1aWR9JnRpdGxlPSR7Zm9ybURhdGEudGl0bGV9JmF1dGhvcj0ke3VzZXI/Lm5hbWV9JmNvbnRlbnQ9JHtmb3JtRGF0YS5jb250ZW50fSZkYXRlPSR7Zm9ybURhdGEuZGF0ZX1gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4uZm9ybURhdGEsIGlkOiB1dWlkIH0pXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAvLyBDbGVhciBmb3JtIGZpZWxkc1xuICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICBpZDogJycsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgY29udGVudDogJycsXG4gICAgICAgIGRhdGU6ICcnXG4gICAgICB9KTtcbiAgICAgIHJvdXRlci5wdXNoKCcvYmxvZy9wb3N0cycpO1xuICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpXG4gIH1cblxuICBjb25zdCBnZW5lcmF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgc2V0R2VuZXJhdGluZyh0cnVlKTtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0ge1xuICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgbWVzc2FnZXM6IFt7IFwicm9sZVwiOiBcInN5c3RlbVwiLCBcImNvbnRlbnRcIjogUFJPTVBUIH0sXG4gICAgICB7IFwicm9sZVwiOiBcInVzZXJcIiwgXCJjb250ZW50XCI6IFwiV2hvIHdvbiB0aGUgd29ybGQgc2VyaWVzIGluIDIwMjA/XCIgfSxdXG5cbiAgICB9XG4gICAgZmV0Y2goJy9hcGkvb3BlbmFpJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZfWBcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByb21wdDogUFJPTVBUICsgZm9ybURhdGEudGl0bGUgfSlcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRGb3JtRGF0YShwcmV2RGF0YSA9PiAoe1xuICAgICAgICAgIC4uLnByZXZEYXRhLFxuICAgICAgICAgIGNvbnRlbnQ6IGRhdGEuY2hvaWNlc1swXS50ZXh0XG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0R2VuZXJhdGluZyhmYWxzZSk7XG4gICAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBUEkgS0VZXCIsIHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZKVxuICAgIGdldFNlc3Npb24oKS50aGVuKChzZXNzaW9uKSA9PiB7XG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIgfHwgbnVsbCk7XG4gICAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9ibG9nL3Bvc3RzJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggcm91bmRlZCBzaGFkb3dcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00IHRleHQtcHVycGxlLTcwMFwiPk5ldyBCbG9nIFBvc3Q8L2gyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1tZWRpdW1cIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiB2YWx1ZT17Zm9ybURhdGEudGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItcHVycGxlLTEwMCBwLTIgcm91bmRlZC1tZCBmb2N1czpib3JkZXItcHVycGxlLTIwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJibG9jayBmb250LW1lZGl1bVwiPkNvbnRlbnQ6PC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb250ZW50XCIgbmFtZT1cImNvbnRlbnRcIiByb3dzPVwiNFwiIHZhbHVlPXtmb3JtRGF0YS5jb250ZW50fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXB1cnBsZS0xMDAgcC0yIHJvdW5kZWQtbWQgZm9jdXM6Ym9yZGVyLXB1cnBsZS0yMDAgZm9jdXM6b3V0bGluZS1ub25lXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICB7Z2VuZXJhdGluZyAmJiA8cCBjbGFzc05hbWU9J3RleHQtcHVycGxlLTcwMCBteS0xJz5HZW5lcmF0aW5nIGNvbnRlbnQuLi48L3A+fVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2VuZXJhdGVDb250ZW50fSBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kIGJnLXB1cnBsZS02MDAgIGhvdmVyOmJnLXB1cnBsZS03MDBcIj5HZW5lcmF0ZSBDb250ZW50PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtbWVkaXVtXCI+RGF0ZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgdmFsdWU9e2Zvcm1EYXRhLmRhdGV9IHJlYWRPbmx5IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItcHVycGxlLTEwMCBwLTIgcm91bmRlZC1tZCBmb2N1czpib3JkZXItcHVycGxlLTIwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbWQgYmctcHVycGxlLTYwMCAgaG92ZXI6YmctcHVycGxlLTcwMFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbInY0IiwidXVpZHY0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJnZXRTZXNzaW9uIiwiUGFnZSIsInJvdXRlciIsIlBST01QVCIsImdlbmVyYXRpbmciLCJzZXRHZW5lcmF0aW5nIiwiY29udGVudCIsInNldENvbnRlbnQiLCJ1c2VyIiwic2V0VXNlciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJpZCIsInRpdGxlIiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZEYXRhIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1dWlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicHVzaCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwiZ2VuZXJhdGVDb250ZW50IiwicmVxdWVzdFBhcmFtcyIsIm1vZGVsIiwibWVzc2FnZXMiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJwcm9tcHQiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJsb2ciLCJzZXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwicm93cyIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwicmVhZE9ubHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/blog/post/insert/page.tsx\n"));

/***/ })

});