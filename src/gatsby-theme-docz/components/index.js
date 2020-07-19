import React from 'react'
import * as headings from 'gatsby-theme-docz/src/components/Headings'
import { Code } from 'gatsby-theme-docz/src/components/Code'
import { Layout } from 'gatsby-theme-docz/src/components/Layout'
import { Playground } from 'gatsby-theme-docz/src/components/Playground'
import { Pre } from 'gatsby-theme-docz/src/components/Pre'
import { Props } from 'gatsby-theme-docz/src/components/Props'

const a = ({ href, ...props }) => {
    if (
        href &&
        !href.startsWith('//') &&
        !href.startsWith('http')
    ) {
        if (href.startsWith('src/')) {
            href = href.replace(/^src\/(.*)$/, (match, path) => {
                return `${path}`;
            });
        }
        if (href.endsWith('.md')) {
            href = href.replace(/^(.*)\.md$/, (match, path) => {
                return `/${path}/`;
            });
        }
    }
    return (
        <a href={href} {...props}>{props.children}</a>
    );
};

export default {
  ...headings,
  code: Code,
  a,
  playground: Playground,
  pre: Pre,
  layout: Layout,
  props: Props,
}
