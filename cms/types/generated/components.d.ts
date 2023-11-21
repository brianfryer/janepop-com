import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalAccordionItem extends Schema.Component {
  collectionName: 'components_global_accordion_items';
  info: {
    displayName: 'Accordion Item';
  };
  attributes: {
    heading: Attribute.String;
    blurb: Attribute.RichText;
  };
}

export interface GlobalAccordion extends Schema.Component {
  collectionName: 'components_global_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'global.accordion-item', true>;
  };
}

export interface GlobalCaseStudy extends Schema.Component {
  collectionName: 'components_global_case_studies';
  info: {
    displayName: 'Case Study';
  };
  attributes: {
    eyebrow: Attribute.String;
    heading: Attribute.String;
    blurb: Attribute.RichText;
    concepts: Attribute.Text;
    links: Attribute.Component<'global.link', true>;
    testimonialBlurb: Attribute.RichText;
    testimonialAuthor: Attribute.String;
    testimonialImage: Attribute.Media;
    images: Attribute.Media;
  };
}

export interface GlobalEmbedCode extends Schema.Component {
  collectionName: 'components_global_embed_codes';
  info: {
    displayName: 'Embed Code';
  };
  attributes: {
    embedCode: Attribute.Text;
  };
}

export interface GlobalLink extends Schema.Component {
  collectionName: 'components_global_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface GlobalMediaWithProse extends Schema.Component {
  collectionName: 'components_global_media_with_proses';
  info: {
    displayName: 'MediaWithProse';
    description: '';
  };
  attributes: {
    componentId: Attribute.String;
    prose: Attribute.Component<'global.prose'>;
    media: Attribute.Media;
    links: Attribute.Component<'global.link', true>;
  };
}

export interface GlobalProse extends Schema.Component {
  collectionName: 'components_global_proses';
  info: {
    displayName: 'Prose';
    description: '';
  };
  attributes: {
    blurb: Attribute.RichText;
  };
}

export interface GlobalSeo extends Schema.Component {
  collectionName: 'components_global_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    ogImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.accordion-item': GlobalAccordionItem;
      'global.accordion': GlobalAccordion;
      'global.case-study': GlobalCaseStudy;
      'global.embed-code': GlobalEmbedCode;
      'global.link': GlobalLink;
      'global.media-with-prose': GlobalMediaWithProse;
      'global.prose': GlobalProse;
      'global.seo': GlobalSeo;
    }
  }
}
