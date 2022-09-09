import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from '@vuepress/plugin-search'
export default {
  lang: "en-US",
  title: "Peter boilerplate v2",
  description: "Just playing around vuepress v2 for peter chaudhary 💻",

  theme: defaultTheme({
    logo: "https://media.istockphoto.com/vectors/triangle-logo-upside-down-flipped-abstract-prism-geometric-shape-vector-id1279136583?b=1&k=20&m=1279136583&s=612x612&w=0&h=jmXIsQCcOe-23uv2_FH19AeNK6YHiS_mY7arNgPs_Bc=",
    navbar: [
      // NavbarGroup
      {
        title: "Guide",
        text: "Guide",
        link: "/guide/",
        // this item will always be active
        // children: ["vuepress.md", "getting-started.md"],
      },
      // NavbarItem
      {
        title: "foo",
        text: "foo",
        link: "/foo/",
      },
      // string - page file path
      //   "/README.md",
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: true,
          children: ["vuepress", "getting-started"],
        },
      ],
      "/foo/": [
        {
          title: "foo",
          collapsable: true,
          children: ["intro", "vuepress"],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
    }),
  ],
};
