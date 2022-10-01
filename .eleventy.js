const { EleventyRenderPlugin } = require("@11ty/eleventy");

/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(eleventyConfig: EleventyConfig) => EleventyReturnValue}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile(inputContent) {
      const fn = eleventyConfig.javascriptFunctions;
      return async (data) => fn.renderTemplate(inputContent, "liquid", data);
    }
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
