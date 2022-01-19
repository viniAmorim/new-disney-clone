/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');
const fs = require('fs');
const { rem, em, toColorString } = require('polished');

const EM_DEFAULT_SIZE = 16;

/**
 * convert all children to a single array of components
 *
 * @param {*} document
 */
function parseChildren(document) {
  return document.reduce((initialValue, child) => {
    const { children, ...rest } = child;

    if (rest.styles) {
      initialValue.push(rest);
    }

    if (children) {
      const parsedChildren = parseChildren(children);
      return initialValue.concat(parsedChildren);
    }

    return initialValue;
  }, []);
}

/**
 * get a style by dig into the component array and check what is the color used
 *
 * @param {*} style
 * @param {*} components
 */
function getColorValue(style, components) {
  for (let index = 0; index < components.length; index += 1) {
    const element = components[index];

    if (element.styles.fills === style.key) {
      const [{ color }] = element.fills;

      const red = parseInt(Math.round(color.r * 255), 10);
      const green = parseInt(Math.round(color.g * 255), 10);
      const blue = parseInt(Math.round(color.b * 255), 10);

      const colorAsString = toColorString({
        red,
        green,
        blue,
        alpha: color.a,
      });

      return {
        ...style,
        color: colorAsString,
      };
    }
  }

  return style;
}

function getFontValue(style, components) {
  for (let index = 0; index < components.length; index += 1) {
    const element = components[index];

    if (element.styles.text === style.key) {
      const {
        fontFamily,
        fontWeight,
        fontSize,
        lineHeightPx,
        letterSpacing,
      } = element.style;

      return {
        ...style,
        fontFamily,
        fontWeight,
        fontSize: rem(fontSize, EM_DEFAULT_SIZE),
        lineHeight: em(lineHeightPx, fontSize),
        letterSpacing: em(letterSpacing, fontSize),
      };
    }
  }

  return style;
}

function saveFile(name, content) {
  if (!name) {
    return;
  }

  fs.writeFile(`themes/${name}.json`, JSON.stringify(content), (err) => {
    if (err) {
      throw err;
    }
    console.log(`${name}.json saved.`);
  });
}

/**
 * fetch figma api and convert tokens to a JSON file
 *
 * @param {*} figmaApiKey
 * @param {*} figmaId
 */
async function getStyles(figmaApiKey, figmaId) {
  const { data } = await axios(`https://api.figma.com/v1/files/${figmaId}`, {
    method: 'GET',
    headers: {
      'X-Figma-Token': figmaApiKey,
    },
  });

  const components = parseChildren(data.document.children);
  const styles = Object.keys(data.styles)
    .reduce((initialValue, key) => {
      const { styleType, name } = data.styles[key];

      if (['FILL', 'TEXT'].includes(styleType)) {
        return initialValue.concat([
          {
            name,
            key,
            styleType,
          },
        ]);
      }

      return initialValue;
    }, [])
    .map((style) => getColorValue(style, components))
    .map((style) => getFontValue(style, components))
    .reduce(
      (initialValue, style) => {
        const {
          name,
          styleType,
          color,
          fontFamily,
          fontWeight,
          fontSize,
          lineHeight,
          letterSpacing,
        } = style;

        if (styleType === 'FILL' && color) {
          initialValue.colors = Object.assign(initialValue.colors, {
            [name]: color,
          });
        }

        if (styleType === 'TEXT' && fontFamily) {
          initialValue.typography = Object.assign(initialValue.typography, {
            [name]: {
              fontFamily,
              fontWeight,
              fontSize,
              lineHeight,
              letterSpacing,
            },
          });
        }

        return initialValue;
      },
      {
        colors: {},
        typography: {},
      },
    );

  saveFile('theme', styles);
}

/**
 * run it
 */
(async () => {
  try {
    await getStyles(
      '65074-87e5318a-6261-4afe-b174-49571c063b91',
      '1voA1aXF1vWGEF8GfPMuWY',
    );
  } catch (error) {
    console.log(error);
  }
})();
