(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{197:function(e,a,t){"use strict";t.r(a);t(42),t(23),t(54);var l=t(0),n=t.n(l),r=t(272),c=t.n(r),m=t(211),i=t(228),s=t(213),o=t(220);a.default=function(){var e=Object(l.useState)({name:"",email:"",city:"",country:"",line1:"",line2:"",postal_code:"",state:"",number:"",expiry:"",year:"",cvc:"",paymentAmount:null,decimal:"",currency:"PHP",description:"FIRST EVER FE TEST",statement_descriptor:"This is only a test"}),a=e[0],t=e[1],r=Object(l.useState)({error:"",data:{type:"",code:""}}),u=(r[0],r[1]),p=function(e){var l,n=e.target.name,r=e.target.value;t(Object.assign({},a,((l={})[n]=r,l))),localStorage.setItem("myValueInLocalStorage",JSON.stringify(a))};return n.a.createElement("div",{className:"sass-ready"},n.a.createElement(o.Helmet,null,n.a.createElement("title",null,"Fullstack HQ | Checkout"),n.a.createElement("meta",{name:"description",content:""})),n.a.createElement(m.a,null),n.a.createElement("main",{className:"checkout-page"},n.a.createElement(i.a,{content:{title:"Checkout"}}),n.a.createElement("div",{className:"payment-content-wrapper container"},n.a.createElement("div",{className:"content-wrapper"},n.a.createElement("div",{className:"form-wrapper"},n.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),"undefined"!=typeof window){var l=localStorage.getItem("total").split(".");t(Object.assign({},a,{paymentAmount:parseFloat(l[0].substring(1)),decimal:l[1].substring(0,l[1].length-1)})),null!==a.paymentAmount&&(console.log("my payload",a),c.a.post("https://paymongo-api.onrender.com/api/payment",a).then(function(e){var a=e.data;u(a),!1===a.error?window.location.assign("/fullstackhq-paymongo/success-payment"):window.location.assign("/fullstackhq-paymongo/failed-payment"),console.log(a)}))}}},n.a.createElement("div",{className:"form-separator"},n.a.createElement("h2",{className:"separator-title"},"Contact Information")),n.a.createElement("div",{className:"input-group-wrapper"},n.a.createElement("input",{name:"name",type:"text",placeholder:"Full Name",onChange:p,required:!0}),n.a.createElement("input",{name:"email",type:"email",placeholder:"Email",onChange:p,required:!0})),n.a.createElement("div",{className:"form-separator"},n.a.createElement("h2",{className:"separator-title"},"Billing Address")),n.a.createElement("div",{className:"input-group-wrapper"},n.a.createElement("input",{name:"line1",type:"text",placeholder:"Line 1 Address",onChange:p}),n.a.createElement("input",{name:"line2",type:"text",placeholder:"Line 2 Address",onChange:p})),n.a.createElement("div",{className:"input-group-wrapper"},n.a.createElement("input",{name:"city",type:"text",placeholder:"City",onChange:p}),n.a.createElement("input",{name:"state",type:"text",placeholder:"State / Province / Region",onChange:p})),n.a.createElement("div",{className:"input-group-wrapper"},n.a.createElement("input",{name:"country",type:"text",placeholder:"Country",onChange:p}),n.a.createElement("input",{name:"postal_code",type:"number",placeholder:"ZIP Code",onChange:p})),n.a.createElement("div",{className:"form-separator"},n.a.createElement("h2",{className:"separator-title"},"Payment Method")),n.a.createElement("div",{className:"card-no-wrapper"},n.a.createElement("input",{name:"number",type:"number",className:"w-100s",maxLength:16,placeholder:"Number",onChange:p})),n.a.createElement("div",{className:"card-info-wrapper"},n.a.createElement("select",{name:"expiry",placeholder:"Expiry Month",onChange:p},n.a.createElement("option",null,"1"),n.a.createElement("option",null,"2"),n.a.createElement("option",null,"3"),n.a.createElement("option",null,"4"),n.a.createElement("option",null,"5"),n.a.createElement("option",null,"6"),n.a.createElement("option",null,"7"),n.a.createElement("option",null,"8"),n.a.createElement("option",null,"9"),n.a.createElement("option",null,"10"),n.a.createElement("option",null,"11"),n.a.createElement("option",null,"12")),n.a.createElement("input",{name:"year",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');",type:"number",placeholder:"Expiry Year",maxLength:4,onChange:p}),n.a.createElement("input",{name:"cvc",type:"number",placeholder:"CVC",maxLength:3,onChange:p})),n.a.createElement("button",{type:"submit",className:"btn-swipe-black hover-swipe-right"},"PROCEED AND PAY")))))),n.a.createElement(s.a,null))}},203:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(69),c=t.n(r);t.d(a,"a",function(){return c.a});t(204),t(9).default.enqueue,n.a.createContext({})},204:function(e,a,t){var l;e.exports=(l=t(210))&&l.default||l},205:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAAmCAMAAACGRDV/AAAAwFBMVEUAAAASku0Sku0Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0Sku0iO0cjNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0jNz4jNz4hPk0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0Sku0Sku0Sku0jNz4Sku1llcFHAAAAPnRSTlMA6PhAMGDwkHBQQOAP7NAgrATAgCDwV0kQNeS+oTD7OwfmZyi39nqJ0pd0JBoM8tbOxavrzNyEFa6kZX9wWEOx3tIAAAP/SURBVFjD7Zhre5owFICPLd6wdYtogNUJiHdF531X+///1ZITJIZrN/thdn0/mHCeEPKS5IRH6JSK+AY3Rum5iI9wYzCluzxuUunu5302X25T6R6yeVf6J/jflfyGyhjilHnYhHqTUYcrmDUZC4hDGxwcS5PjY5TUu7vGbmrHlD58TPAtrqSdVLoQp8bDdSjzogxJY4YJL6HKe2in9M+RY9GwujqPx1WU7u+e45ReXYmHW6+tZC+jAQ3Im1By9yfJKKbUeVJhMj+enr4rSuqY/gUlEep5WAyPqlLpAfJJKo2r1aoBjHqVMU9RssyaYfQdwqqBxcNri8EuiUZnhjGjGkQQuzxibd1LJVpljEm20gTXiwX+CqfpaqUKu25Eb1VPKC26vRNSqQI0RVW0pL1zvRFOp2t4IrCcBpGSg8362bO0wNfElee86eSvlFb1EL1Qyd9GEpWYUi22A2AxkQHtrBQ0xJ7NVjJ5QYGz4VVLVfr8QSWppNAsVMJRDieTYbrStlERG2EBQHbhFClKXXyHQUzp0r3PCx84+FRHUbp7VOk8XKmkib0D4NIdU7J1vEtnWNAflBfAYs1wYfXRrRaA1fciJYqvRIMcpRm/jQDHxofnJ/Frlep4VrjigM/IeLhwDICJ3DPH7jzsbyn6yVMy2K8HiB9X6sTIVPKqIbMiJV0k1sFMS0virnnYrBtDVBK7fEvUJL4XG6lQqXcxPFMqPXxW+a6ki8KMd0hTcr1TiDciMSVihIe+UHJwQkFVQuZJpTbDDJVGIidwcFHYUinO/Z8pGWlKYOIcIF9jSl/PmVAo6TghaUrd3KM2zAnyHus1lLxsJfC70VyYipKJC83QLV0o2WmztOrheHOVsJwCA9fEHl5DqUeylDiufljjbQdFaSoaAoRKFs6YqyrZ2GpC8pTI9vy+qkJOKrkfVH69SGkf9hcM0pToOAAOJuhxqOTJY9GWSrCLzlxot/wwiR9xWc7ylGAq1rXRwtKGy4z3qPL8EiXsZ7jZ4KMTSn2WFjSAdvd8wlfQTbNrcxxI90j0CSqhNmPqtO3DUh612N9yka2E30ESr15wLhUrjWRvSaVwACJFNPiiGkQtqbxLKJGWvJRKZMXLTZ4SHraS/YXS46c4j8VKVvgRN1xnKyGeDQynd1Yi67C2C5XAGqQogSlSS54SjC+VxlKJPCSBuFKFM1BCK0xV81GF4UCfFyZQXlA4HvYnZDu2ANGFydAGayO+wh3eVOwh2hLGqxmBMQ8zJdjwyo6AgDY58f8e9IFcfHOhdBU2rbchk6NDqekTGQg03W7jddukNgGFwKFlcwF/jutrmq7rjjYHofS2eFe6Bd6VboF3pVvgDSp1Sp03pvQbFxPHO+Flvh4AAAAASUVORK5CYII="},210:function(e,a,t){"use strict";t.r(a);t(23);var l=t(0),n=t.n(l),r=t(95);a.default=function(e){var a=e.location,t=e.pageResources;return t?n.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},211:function(e,a,t){"use strict";t(33),t(219),t(70),t(215);var l=t(0),n=t.n(l),r=t(203),c=t(207),m=t(208),i=t(303),s=t(300),o=t(301),u=t(302);a.a=function(e){var a=e.className,p=n.a.useState()[1],N=Object(l.useCallback)(function(){return p({})},[]),E=Object(l.useState)(!1),d=E[0],h=E[1],g=function(){return h(!d)},f=[],y=0,k=0,j=function(e,a){return e.reduce(function(e,t){return"string"==typeof t[a]?e+Number(t[a]):e+t[a]},0)};return"undefined"!=typeof window&&null!==(f=JSON.parse(localStorage.getItem("cartList")))&&(y=j(f,"totalPrice").toFixed(2),k=j(f,"qtty"),localStorage.setItem("total",JSON.stringify(y))),n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"container"},n.a.createElement("nav",null,n.a.createElement("ul",{className:"link-listing"},n.a.createElement("li",{className:"link-item"},n.a.createElement(r.a,{to:"/product-catalog",className:"link"},"Products"))),n.a.createElement("div",{className:"brand-icon-holder"},n.a.createElement(r.a,{to:"/"},n.a.createElement("img",{className:"brand-icon",src:t(205),alt:"fullstackhq-logo"}))),n.a.createElement("ul",{className:"icon-listing"},n.a.createElement("li",{className:"icon-item",onClick:g},n.a.createElement("div",{className:"icon-link"},n.a.createElement(c.a,{icon:m.c,className:"icon icon-shopping-bag"}),n.a.createElement("span",{className:"cart-quantity"},k)))))),n.a.createElement(i.a,{isOpen:d,toggle:g,className:a},n.a.createElement(s.a,{toggle:g},"Your Cart"),n.a.createElement(o.a,null,n.a.createElement("ul",{className:"cart-product-listing"},f?f.map(function(e,a){return n.a.createElement("li",{key:a,className:"cart-product-item"},n.a.createElement("div",{className:"image-wrapper"},n.a.createElement("div",{className:"thumbnail-holder"},n.a.createElement("img",{src:e.image,className:"product-image",alt:e.productName})),n.a.createElement(u.a,{color:"link",onClick:function(){return function(e){var a=f.findIndex(function(a){return a.setID===e.setID});a>-1&&(f.splice(a,1),localStorage.setItem("cartList",JSON.stringify(f))),N()}(e)}},"Remove")),n.a.createElement("div",{className:"text-wrapper"},n.a.createElement("h4",{className:"product-name"},e.productName),n.a.createElement("p",{className:"computation"},e.qtty," x PHP ",e.price," = PHP ",e.totalPrice.toFixed(2))))}):"Your cart is empty")),f?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"total-holder"},n.a.createElement("h3",{className:"total"},"Total: ","PHP "," ",y)),n.a.createElement("div",{className:"btn-holder"},n.a.createElement(r.a,{to:"/checkout",className:"btn-swipe-black hover-swipe-right btn-checkout"},"Checkout"),n.a.createElement(r.a,{to:"/product-catalog",className:"btn-swipe-black hover-swipe-right"},"Continue Shopping"))):""))}},213:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(203),c=t(207),m=t(217),i=t(208);a.a=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"footer-wrapper"},n.a.createElement("div",{className:"logo-holder"},n.a.createElement("div",{className:"brand-holder"},n.a.createElement(r.a,{to:"/"},n.a.createElement("img",{className:"brand-icon",src:t(205),alt:"paymongo-logo"})),n.a.createElement("p",null,"Built with ",n.a.createElement(c.a,{icon:i.a,className:"heart-icon"})," by ",n.a.createElement("a",{href:"https://fullstackhq.com/",target:"_blank",rel:"noopener noreferrer"},"Fullstack HQ"),". Powered by Gatsby + Netlify + PayMongo API."))),n.a.createElement("div",{className:"links-holder"},n.a.createElement("h2",{className:"title"},"CATEGORIES"),n.a.createElement("ul",{className:"list-holder"},n.a.createElement("li",{className:"list-item"},n.a.createElement(r.a,{to:"/",className:"link"},"Lorem ipsum")),n.a.createElement("li",{className:"list-item"},n.a.createElement(r.a,{to:"/",className:"link"},"Lorem ipsum")),n.a.createElement("li",{className:"list-item"},n.a.createElement(r.a,{to:"/",className:"link"},"Lorem ipsum")))),n.a.createElement("div",{className:"links-holder"},n.a.createElement("h2",{className:"title"},"INFORMATION"),n.a.createElement("ul",{className:"list-holder"},n.a.createElement("li",{className:"list-item"},n.a.createElement(r.a,{to:"/",className:"link"},"Lorem ipsum")),n.a.createElement("li",{className:"list-item"},n.a.createElement(r.a,{to:"/",className:"link"},"Lorem ipsum")),n.a.createElement("li",{className:"list-item"},n.a.createElement(r.a,{to:"/",className:"link"},"Lorem ipsum")),n.a.createElement("li",{className:"list-item"},n.a.createElement(r.a,{to:"/",className:"link"},"Lorem ipsum")))),n.a.createElement("div",{className:"links-holder"},n.a.createElement("h2",{className:"title"},"SOCIAL"),n.a.createElement("ul",{className:"list-holder"},n.a.createElement("li",{className:"list-item"},n.a.createElement("a",{href:"/",target:"blank",className:"link"},n.a.createElement(c.a,{icon:m.c,className:"icon"}),"Instagram")),n.a.createElement("li",{className:"list-item"},n.a.createElement("a",{href:"/",target:"blank",className:"link"},n.a.createElement(c.a,{icon:m.b,className:"icon"}),"Facebook")),n.a.createElement("li",{className:"list-item"},n.a.createElement("a",{href:"/",target:"blank",className:"link"},n.a.createElement(c.a,{icon:m.f,className:"icon"}),"Twitter")),n.a.createElement("li",{className:"list-item"},n.a.createElement("a",{href:"/",target:"blank",className:"link"},n.a.createElement(c.a,{icon:m.e,className:"icon"}),"Pinterest")))))))}},228:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.content;return n.a.createElement("div",{className:"section-banner"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"banner-title"},a.title)))}}}]);
//# sourceMappingURL=component---src-pages-checkout-js-c62dbb661bea1a111b51.js.map