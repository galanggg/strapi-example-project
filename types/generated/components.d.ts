import type { Schema, Struct } from '@strapi/strapi';

export interface ObituaryActivityLog extends Struct.ComponentSchema {
  collectionName: 'components_obituary_activity_logs';
  info: {
    displayName: 'Activity Log';
    icon: 'bullhorn';
  };
  attributes: {
    description: Schema.Attribute.String;
    timestamp: Schema.Attribute.DateTime;
  };
}

export interface ObituaryServiceDetail extends Struct.ComponentSchema {
  collectionName: 'components_obituary_service_details';
  info: {
    displayName: 'Service Detail';
    icon: 'clock';
  };
  attributes: {
    additionalInfo: Schema.Attribute.RichText;
    address: Schema.Attribute.Text;
    date: Schema.Attribute.Date;
    directionsLink: Schema.Attribute.String;
    locationName: Schema.Attribute.String;
    time: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['Visitation', 'Funeral Service', 'Memorial Service']
    >;
  };
}

export interface ObituarySupportOption extends Struct.ComponentSchema {
  collectionName: 'components_obituary_support_options';
  info: {
    displayName: 'Support Option';
    icon: 'gift';
  };
  attributes: {
    actionLink: Schema.Attribute.String;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['Memorial Tree', 'Flowers', 'Candle']>;
  };
}

export interface ObituaryTimelineEvent extends Struct.ComponentSchema {
  collectionName: 'components_obituary_timeline_events';
  info: {
    displayName: 'Timeline Event';
    icon: 'calendar';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    year: Schema.Attribute.Integer;
  };
}

export interface ObituaryTribute extends Struct.ComponentSchema {
  collectionName: 'components_obituary_tributes';
  info: {
    displayName: 'Tribute';
    icon: 'heart';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    datePosted: Schema.Attribute.Date;
    location: Schema.Attribute.String;
    mediaAttachment: Schema.Attribute.Media<'audios'>;
    relationship: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'obituary.activity-log': ObituaryActivityLog;
      'obituary.service-detail': ObituaryServiceDetail;
      'obituary.support-option': ObituarySupportOption;
      'obituary.timeline-event': ObituaryTimelineEvent;
      'obituary.tribute': ObituaryTribute;
    }
  }
}
