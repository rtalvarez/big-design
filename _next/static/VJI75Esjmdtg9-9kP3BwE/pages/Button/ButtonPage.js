(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{akZe:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var a=t("ERkP"),r=t.n(a),o=t("nFRM"),i=t("R5dR"),l=function(){return r.a.createElement(o.a,null,r.a.createElement(o.a.Prop,{name:"margin",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginTop",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the top margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginRight",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the right margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginBottom",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the bottom margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginLeft",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the left margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginVertical",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the top and bottom margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginHorizontal",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the left and right margin to be applied."))}},c2K2:function(e,n,t){"use strict";var a=t("Dlp7"),r=t("+Ls6"),o=t("BaHq"),i=t("ERkP"),l=t.n(i),c=t("j/s1"),s=Object(c.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]);t.d(n,"a",function(){return m});var m=function(e){var n=e.children,t=e.title,c=Object(i.useState)(!0),m=Object(a.default)(c,2),u=m[0],d=m[1],p=function(){return d(!u)};return l.a.createElement("div",null,l.a.createElement(s,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||p()},tabIndex:0},u?l.a.createElement(o.ChevronRightIcon,{title:"Expand"}):l.a.createElement(o.ExpandMoreIcon,{title:"Collapse"}),l.a.createElement(r.Text,null,t)),!u&&n)}},pg6R:function(e,n,t){"use strict";t.r(n);var a=t("+Ls6"),r=t("ERkP"),o=t.n(r),i=t("GsAr"),l=t("c2K2"),c=t("lIm4"),s=t("nFRM"),m=t("R5dR"),u=function(){return o.a.createElement(s.a,null,o.a.createElement(s.a.Prop,{name:"actionType",types:["normal","destructive"],defaults:"normal"},"Indicates whether your button's action is of normal or destructive nature."),o.a.createElement(s.a.Prop,{name:"iconLeft",types:o.a.createElement(m.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),defaults:""},"Pass in an"," ",o.a.createElement(m.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text."),o.a.createElement(s.a.Prop,{name:"iconOnly",types:o.a.createElement(m.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),defaults:""},"Pass in an"," ",o.a.createElement(m.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to replace content with an icon."),o.a.createElement(s.a.Prop,{name:"iconRight",types:o.a.createElement(m.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),defaults:""},"Pass in an"," ",o.a.createElement(m.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the right of the text."),o.a.createElement(s.a.Prop,{name:"isLoading",types:"boolean",defaults:"false"},"Used to determine if component is in a loading state."),o.a.createElement(s.a.Prop,{name:"variant",types:["primary","secondary","subtle"],defaults:"primary"},"Determines which style of button to display."))},d=t("akZe");n.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.H0,null,"Buttons"),o.a.createElement(a.Text,null,"Buttons are calls to action used throughout the product experience."," ",o.a.createElement(a.Link,{href:"https://design.bigcommerce.com/components/buttons",target:"_blank"},"Buttons Design Guidelines"),"."),o.a.createElement(i.a,null,'<Button actionType="normal" isLoading={false} variant="primary">\n  Label\n</Button>'),o.a.createElement(a.H1,null,"API"),o.a.createElement(a.H2,null,"Button"),o.a.createElement(u,null),o.a.createElement(a.H2,null,"Inherited Props"),o.a.createElement(l.a,{title:"Margin Props"},o.a.createElement(d.a,null)),o.a.createElement(a.H1,null,"Variants"),o.a.createElement(a.Text,null,"There are three types of variants to choose from: ",o.a.createElement(c.a,null,"primary"),", ",o.a.createElement(c.a,null,"secondary"),", and"," ",o.a.createElement(c.a,null,"subtle"),". You can determine what type of variant by using the ",o.a.createElement(c.a,{primary:!0},"variant")," prop."),o.a.createElement(i.a,null,'<>\n  <Button variant="primary">Primary</Button>\n  <Button variant="secondary">Secondary</Button>\n  <Button variant="subtle">Subtle</Button>\n</>'),o.a.createElement(a.H1,null,"Action Types"),o.a.createElement(a.Text,null,"There are two action types: ",o.a.createElement(c.a,null,"normal")," & ",o.a.createElement(c.a,null,"destructive"),". They are used to indicate the nature of the action when clicking on the button."),o.a.createElement(i.a,null,'<>\n  <Button actionType="normal">Normal</Button>\n  <Button actionType="destructive">Destructive</Button>\n</>'),o.a.createElement(a.H1,null,"States"),o.a.createElement(a.H2,null,"Loading"),o.a.createElement(a.Text,null,"The loading state is used when clicking a button will perform a asyncronous action."),o.a.createElement(i.a,null,'function LoadingButton() {\n  const [isLoading, setLoading] = React.useState(false);\n\n  function simulateNetworkRequest() {\n    return new Promise(resolve => setTimeout(resolve, 2000));\n  }\n\n  React.useEffect(() => {\n    if (isLoading) {\n      simulateNetworkRequest().then(() => {\n        setLoading(false);\n      });\n    }\n  }, [isLoading]);\n\n  const handleClick = () => setLoading(true);\n\n  return (\n    <Button variant="primary" isLoading={isLoading} onClick={!isLoading ? handleClick : () => null}>\n      Click to load\n    </Button>\n  );\n}'),o.a.createElement(a.H2,null,"Disabled"),o.a.createElement(a.Text,null,"A disabled state is used to indicate no action can be done using the button by passing a"," ",o.a.createElement(c.a,{primary:!0},"disabled")," prop."),o.a.createElement(i.a,null,'<>\n  <Button disabled>Disabled</Button>\n  <Button disabled variant="secondary">\n    Disabled\n  </Button>\n  <Button disabled variant="subtle">\n    Disabled\n  </Button>\n</>'),o.a.createElement(a.H1,null,"Icons"),o.a.createElement(a.Text,null,"A button can also include icons on either side of the text (or both). When using ",o.a.createElement(c.a,{primary:!0},"iconOnly"),", the ",o.a.createElement(c.a,{primary:!0},"iconLeft")," & ",o.a.createElement(c.a,{primary:!0},"iconRight")," components will be removed."),o.a.createElement(i.a,null,'<>\n  <Button iconOnly={<AddIcon title="add" />} />\n  <Button iconLeft={<AddIcon />}>Label</Button>\n  <Button iconLeft={<AddIcon />} iconRight={<ArrowDropDownIcon />}>\n    Label\n  </Button>\n  <Button iconRight={<ArrowDropDownIcon />}>Label</Button>\n</>'))}},wXfe:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Button/ButtonPage",function(){var e=t("pg6R");return{page:e.default||e}}])}},[["wXfe",1,0]]]);