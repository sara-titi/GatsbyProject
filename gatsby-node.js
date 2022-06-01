const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@static": path.resolve(__dirname, "static")
      }
    }
  });
}





exports.onCreatePage = async ({page, actions}) =>{
    const {createPage} = actions
    console.log('Page - ' + page.path);
    if(page.path.match(/^\/productDetials/)){
        createPage({
            path: "/productDetials",
            matchPath: "/productDetials/:id",
            component: path.resolve("src/pages/productDetials.tsx")
        })
    }
}