(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{196:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return N}),t.d(a,"pageQuery",function(){return u});t(225),t(23);var l=t(0),c=t.n(l),n=t(205),s=t(294),r=t(208),m=t(218),i=t(212),o=t(213);function N(e){var a=e.data.markdownRemark,t=a.frontmatter,N=(a.html,Object(l.useState)({setID:null,productName:"",description:"",price:"",qtty:"1",image:"",cartPressed:!1})),u=N[0],E=N[1];return Object(l.useEffect)(function(){if(""===u.productName||!1===u.cartPressed)console.log("blank state");else{var e=JSON.parse(localStorage.getItem("cartList"))||[],a=e.findIndex(function(e){return e.setID===u.setID});a>=0?e[a].qtty=parseInt(e[a].qtty)+parseInt(u.qtty):e.push(u),localStorage.setItem("cartList",JSON.stringify(e)),E(Object.assign({},u,{cartPressed:!1})),alert("added!")}},[u]),c.a.createElement("div",null,c.a.createElement(i.a,null),c.a.createElement("main",{className:"product-details"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section-product"},c.a.createElement("div",{className:"product-wrapper"},c.a.createElement("div",{className:"image-holder"},c.a.createElement("img",{className:"product-image",src:t.image,alt:t.altText})),c.a.createElement("div",{className:"details-holder"},c.a.createElement("h1",{className:"name"},t.title),c.a.createElement("h2",{className:"price"},"PHP",t.price),c.a.createElement("div",{className:"desc-holder"},c.a.createElement("h2",{className:"label"},"Description"),c.a.createElement("p",null,t.description)),c.a.createElement("div",{className:"add-cart-holder"},c.a.createElement("select",{name:"qtty",className:"quantity-select",onChange:function(e){var a=e.target.value;E(Object.assign({},u,{qtty:a}))}},c.a.createElement("option",null,"1"),c.a.createElement("option",null,"2"),c.a.createElement("option",null,"3")),c.a.createElement("button",{onClick:function(){return e=t,void E(Object.assign({},u,{setID:e.setID,productName:e.title,description:e.description,price:e.price,image:e.image,cartPressed:!0}));var e},className:"btn-swipe-black hover-swipe-right"},"Add to Cart")),c.a.createElement("div",{className:"social-holder"},c.a.createElement(n.a,{to:"/",className:"icon-link twitter"},c.a.createElement(r.a,{icon:m.f,className:"icon"}),c.a.createElement("span",{className:"tooltip"},"Share on twitter")),c.a.createElement(n.a,{to:"/",className:"icon-link facebook"},c.a.createElement(r.a,{icon:m.a,className:"icon"})),c.a.createElement(n.a,{to:"/",className:"icon-link linkedin"},c.a.createElement(r.a,{icon:m.d,className:"icon"}))))),c.a.createElement(s.d,{className:"tabs-wrapper"},c.a.createElement(s.b,{className:"nav-tabs"},c.a.createElement(s.a,{className:"nav-link"},"Additional Information")),c.a.createElement(s.c,{className:"tab-content"},c.a.createElement("ul",{className:"info-list"},c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,"Weight"),t.weight),c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,"Dimensions"),t.dimensions),c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,"Materials"),t.materials),c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,"Other info"),t.OtherInfo))))))),c.a.createElement(o.a,null))}var u="2151648305"},205:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(69),s=t.n(n);t.d(a,"a",function(){return s.a});t(206),t(9).default.enqueue,c.a.createContext({})},206:function(e,a,t){var l;e.exports=(l=t(210))&&l.default||l},207:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAAmCAMAAACGRDV/AAAAwFBMVEUAAAASku0Sku0Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0Sku0iO0cjNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0jNz4jNz4hPk0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0Sku0Sku0Sku0jNz4Sku1llcFHAAAAPnRSTlMA6PhAMGDwkHBQQOAP7NAgrATAgCDwV0kQNeS+oTD7OwfmZyi39nqJ0pd0JBoM8tbOxavrzNyEFa6kZX9wWEOx3tIAAAP/SURBVFjD7Zhre5owFICPLd6wdYtogNUJiHdF531X+///1ZITJIZrN/thdn0/mHCeEPKS5IRH6JSK+AY3Rum5iI9wYzCluzxuUunu5302X25T6R6yeVf6J/jflfyGyhjilHnYhHqTUYcrmDUZC4hDGxwcS5PjY5TUu7vGbmrHlD58TPAtrqSdVLoQp8bDdSjzogxJY4YJL6HKe2in9M+RY9GwujqPx1WU7u+e45ReXYmHW6+tZC+jAQ3Im1By9yfJKKbUeVJhMj+enr4rSuqY/gUlEep5WAyPqlLpAfJJKo2r1aoBjHqVMU9RssyaYfQdwqqBxcNri8EuiUZnhjGjGkQQuzxibd1LJVpljEm20gTXiwX+CqfpaqUKu25Eb1VPKC26vRNSqQI0RVW0pL1zvRFOp2t4IrCcBpGSg8362bO0wNfElee86eSvlFb1EL1Qyd9GEpWYUi22A2AxkQHtrBQ0xJ7NVjJ5QYGz4VVLVfr8QSWppNAsVMJRDieTYbrStlERG2EBQHbhFClKXXyHQUzp0r3PCx84+FRHUbp7VOk8XKmkib0D4NIdU7J1vEtnWNAflBfAYs1wYfXRrRaA1fciJYqvRIMcpRm/jQDHxofnJ/Frlep4VrjigM/IeLhwDICJ3DPH7jzsbyn6yVMy2K8HiB9X6sTIVPKqIbMiJV0k1sFMS0virnnYrBtDVBK7fEvUJL4XG6lQqXcxPFMqPXxW+a6ki8KMd0hTcr1TiDciMSVihIe+UHJwQkFVQuZJpTbDDJVGIidwcFHYUinO/Z8pGWlKYOIcIF9jSl/PmVAo6TghaUrd3KM2zAnyHus1lLxsJfC70VyYipKJC83QLV0o2WmztOrheHOVsJwCA9fEHl5DqUeylDiufljjbQdFaSoaAoRKFs6YqyrZ2GpC8pTI9vy+qkJOKrkfVH69SGkf9hcM0pToOAAOJuhxqOTJY9GWSrCLzlxot/wwiR9xWc7ylGAq1rXRwtKGy4z3qPL8EiXsZ7jZ4KMTSn2WFjSAdvd8wlfQTbNrcxxI90j0CSqhNmPqtO3DUh612N9yka2E30ESr15wLhUrjWRvSaVwACJFNPiiGkQtqbxLKJGWvJRKZMXLTZ4SHraS/YXS46c4j8VKVvgRN1xnKyGeDQynd1Yi67C2C5XAGqQogSlSS54SjC+VxlKJPCSBuFKFM1BCK0xV81GF4UCfFyZQXlA4HvYnZDu2ANGFydAGayO+wh3eVOwh2hLGqxmBMQ8zJdjwyo6AgDY58f8e9IFcfHOhdBU2rbchk6NDqekTGQg03W7jddukNgGFwKFlcwF/jutrmq7rjjYHofS2eFe6Bd6VboF3pVvgDSp1Sp03pvQbFxPHO+Flvh4AAAAASUVORK5CYII="},210:function(e,a,t){"use strict";t.r(a);t(23);var l=t(0),c=t.n(l),n=t(94);a.default=function(e){var a=e.location,t=e.pageResources;return t?c.a.createElement(n.a,Object.assign({location:a,pageResources:t},t.json)):null}},212:function(e,a,t){"use strict";t(33);var l=t(0),c=t.n(l),n=t(205),s=t(208),r=t(209),m=t(298),i=t(295),o=t(296),N=t(297);a.a=function(e){e.buttonLabel;var a=e.className,u=Object(l.useState)(!1),E=u[0],d=u[1],p=function(){return d(!E)},k="undefined"!=typeof window?JSON.parse(localStorage.getItem("cartList")):null;return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement("ul",{className:"link-listing"},c.a.createElement("li",{className:"link-item"},c.a.createElement(n.a,{to:"/product-catalog",className:"link"},"Product")),c.a.createElement("li",{className:"link-item"},c.a.createElement(n.a,{to:"/",className:"link"},"About")),c.a.createElement("li",{className:"link-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Collection")),c.a.createElement("li",{className:"link-item show-mb"},c.a.createElement(n.a,{to:"/product-catalog",className:"link"},"Shop"))),c.a.createElement("div",{className:"brand-icon-holder"},c.a.createElement(n.a,{to:"/"},c.a.createElement("img",{className:"brand-icon",src:t(207),alt:"fullstackhq-logo"}))),c.a.createElement("ul",{className:"icon-listing"},c.a.createElement("li",{className:"icon-item"},c.a.createElement(n.a,{className:"icon-link",to:""},c.a.createElement(s.a,{icon:r.c,className:"icon icon-search"}))),c.a.createElement("li",{className:"icon-item",onClick:p},c.a.createElement("div",{className:"icon-link"},c.a.createElement(s.a,{icon:r.d,className:"icon icon-shopping-bag"})))))),c.a.createElement(m.a,{isOpen:E,toggle:p,className:a},c.a.createElement(i.a,{toggle:p},"Your Cart"),c.a.createElement(o.a,null,c.a.createElement("ul",{className:"cart-product-listing"},k?k.map(function(e,a){var t=parseInt(e.price)*e.qtty;return c.a.createElement("li",{key:a,className:"cart-product-item"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"thumbnail-holder"},c.a.createElement("img",{src:e.image,className:"product-image",alt:e.productName})),c.a.createElement(N.a,{color:"link"},"Remove")),c.a.createElement("div",{className:"text-wrapper"},c.a.createElement("h4",{className:"product-name"},e.productName),c.a.createElement("p",{className:"computation"},e.qtty," x $",e.price," = ",t)))}):"Your cart is empty")),c.a.createElement("div",{className:"total-holder"},c.a.createElement("h3",{className:"total"},"Total:")),c.a.createElement("div",{className:"btn-holder"},c.a.createElement(n.a,{to:"/checkout",className:"btn-swipe-black hover-swipe-right btn-checkout"},"Checkout"),c.a.createElement(n.a,{to:"/product-catalog",className:"btn-swipe-black hover-swipe-right"},"Continue Shopping"))))}},213:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(205),s=t(208),r=t(218),m=t(209);a.a=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer-wrapper"},c.a.createElement("div",{className:"logo-holder"},c.a.createElement("div",{className:"brand-holder"},c.a.createElement(n.a,{to:"/"},c.a.createElement("img",{className:"brand-icon",src:t(207),alt:"paymongo-logo"})),c.a.createElement("p",null,"Built with ",c.a.createElement(s.a,{icon:m.a,className:"heart-icon"})," by ",c.a.createElement("a",{href:"https://fullstackhq.com/",target:"_blank",rel:"noopener noreferrer"},"Fullstack HQ"),". Powered by Gatsby + Netlify + PayMongo API."))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"CATEGORIES"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"INFORMATION"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"SOCIAL"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(s.a,{icon:r.c,className:"icon"}),"Instagram")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(s.a,{icon:r.b,className:"icon"}),"Facebook")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(s.a,{icon:r.f,className:"icon"}),"Twitter")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(s.a,{icon:r.e,className:"icon"}),"Pinterest")))))))}}}]);
//# sourceMappingURL=component---src-templates-product-template-js-a5d2ce1106971404d69f.js.map